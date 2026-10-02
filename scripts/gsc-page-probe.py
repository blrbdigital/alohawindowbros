#!/usr/bin/env python3
"""Per-page GSC probe for alohawindowbros.com (added 2026-10-02).

Usage: gsc-page-probe.py START END PRIOR_START PRIOR_END 'page-regex' [max_rows]
For every page whose path matches page-regex, prints page totals for both
windows (dimension=page, so ANONYMIZED queries are included, which is why these
totals match the brief's "Top pages" table and the join's do not), then its
query rows (brand marked B) with the prior position. Run on the VPS:
  scp scripts/gsc-page-probe.py vps:/root/ && ssh vps "python3 /root/gsc-page-probe.py ..."
"""
import re
import sys

sys.path.insert(0, "/root")
from importlib import import_module

join = import_module("gsc-join")


def main():
    start, end, pstart, pend, pat = sys.argv[1:6]
    limit = int(sys.argv[6]) if len(sys.argv) > 6 else 25
    rx = re.compile(pat)
    tok = join.token()
    cur_p = {join.short(r["keys"][0]): r for r in join.q(tok, start, end, ["page"])}
    pri_p = {join.short(r["keys"][0]): r for r in join.q(tok, pstart, pend, ["page"])}
    cur_q = join.q(tok, start, end, ["page", "query"])
    pri_q = {(join.short(r["keys"][0]), r["keys"][1]): r
             for r in join.q(tok, pstart, pend, ["page", "query"])}
    for page in sorted(set(cur_p) | set(pri_p)):
        if not rx.search(page) or "#" in page:
            continue
        c, p = cur_p.get(page), pri_p.get(page)
        fmt = lambda r: (f"{int(r['clicks'])} clk / {int(r['impressions'])} impr @ "
                         f"{r['position']:.1f}") if r else "-"
        print(f"\n== {page}\n   current {fmt(c)} | prior {fmt(p)}")
        rows = sorted([r for r in cur_q if join.short(r["keys"][0]) == page],
                      key=lambda r: -r["impressions"])
        shown = sum(int(r["impressions"]) for r in rows)
        print(f"   query rows: {len(rows)}, {shown} impr visible "
              f"({int(c['impressions']) - shown if c else 0} anonymized)")
        for r in rows[:limit]:
            query = r["keys"][1]
            pr = pri_q.get((page, query))
            b = "B" if join.BRAND.search(query) else " "
            prtxt = f"{pr['position']:.1f}" if pr else "-"
            print(f"   {b} {query[:60]:60s} {int(r['clicks']):3d} "
                  f"{int(r['impressions']):5d} {r['position']:5.1f} {prtxt:>6s}")


main()
