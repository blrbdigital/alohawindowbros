#!/usr/bin/env python3
"""Ad-hoc GSC query x page join for alohawindowbros.com.

Usage: gsc-join.py START END [PRIOR_START PRIOR_END]
Prints: (1) page-level brand vs non-brand, (2) query x page rows for the
top non-brand queries, (3) any query cluster passed via CLUSTER env grep.
Run on the VPS (needs /root/.gsc-tokens.json).
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request

TOKENS = "/root/.gsc-tokens.json"
PROP = "sc-domain:alohawindowbros.com"
BRAND = re.compile(r"aloha|window\s*bros|mahalo", re.I)


def token():
    t = json.load(open(TOKENS))
    data = urllib.parse.urlencode({
        "client_id": t["client_id"],
        "client_secret": t["client_secret"],
        "refresh_token": t["refresh_token"],
        "grant_type": "refresh_token",
    }).encode()
    req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
    return json.load(urllib.request.urlopen(req, timeout=30))["access_token"]


def q(tok, start, end, dims, limit=25000):
    url = ("https://www.googleapis.com/webmasters/v3/sites/"
           + urllib.parse.quote(PROP, safe="") + "/searchAnalytics/query")
    body = {"startDate": start, "endDate": end, "dimensions": dims, "rowLimit": limit}
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"Authorization": "Bearer " + tok, "Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req, timeout=120)).get("rows", [])


def short(u):
    return u.replace("https://alohawindowbros.com", "").replace(
        "http://alohawindowbros.com", "GBP:") or "/"


def main():
    start, end = sys.argv[1], sys.argv[2]
    prior = sys.argv[3:5] if len(sys.argv) > 4 else None
    tok = token()

    rows = q(tok, start, end, ["page", "query"])
    prior_rows = q(tok, *prior, ["page", "query"]) if prior else []

    # 1. page-level brand split
    pages = {}
    for r in rows:
        p, query = short(r["keys"][0]), r["keys"][1]
        d = pages.setdefault(p, {"bi": 0, "bc": 0, "ni": 0, "nc": 0})
        if BRAND.search(query):
            d["bi"] += int(r["impressions"]); d["bc"] += int(r["clicks"])
        else:
            d["ni"] += int(r["impressions"]); d["nc"] += int(r["clicks"])
    print("== PAGE brand vs non-brand ==", start, "..", end)
    print(f"{'page':60s} {'Bimpr':>6s} {'Bclk':>5s} {'NBimpr':>7s} {'NBclk':>6s}")
    for p, d in sorted(pages.items(), key=lambda kv: -kv[1]["ni"])[:25]:
        print(f"{p:60s} {d['bi']:6d} {d['bc']:5d} {d['ni']:7d} {d['nc']:6d}")

    # 2. query x page for top non-brand queries
    prior_map = {}
    for r in prior_rows:
        prior_map[(short(r["keys"][0]), r["keys"][1])] = r

    qtot = {}
    for r in rows:
        query = r["keys"][1]
        if BRAND.search(query):
            continue
        qtot[query] = qtot.get(query, 0) + int(r["impressions"])
    top = sorted(qtot.items(), key=lambda kv: -kv[1])[:40]
    print("\n== QUERY x PAGE (top 40 non-brand queries by impressions) ==")
    print(f"{'query':45s} {'page':40s} {'clk':>4s} {'impr':>5s} {'pos':>5s} {'prior':>6s}")
    for query, _ in top:
        for r in sorted([x for x in rows if x["keys"][1] == query],
                        key=lambda x: -x["impressions"]):
            p = short(r["keys"][0])
            pr = prior_map.get((p, query))
            prtxt = f"{pr['position']:.1f}" if pr else "-"
            print(f"{query:45s} {p:40s} {int(r['clicks']):4d} "
                  f"{int(r['impressions']):5d} {r['position']:5.1f} {prtxt:>6s}")

    # 3. optional cluster grep
    pat = os.environ.get("CLUSTER")
    if pat:
        rx = re.compile(pat, re.I)
        print("\n== CLUSTER:", pat, "==")
        tot_i = tot_c = 0
        for r in sorted(rows, key=lambda x: -x["impressions"]):
            query = r["keys"][1]
            if not rx.search(query) or BRAND.search(query):
                continue
            tot_i += int(r["impressions"]); tot_c += int(r["clicks"])
            print(f"{query:50s} {short(r['keys'][0]):35s} {int(r['clicks']):3d} "
                  f"{int(r['impressions']):5d} {r['position']:5.1f}")
        print(f"cluster totals: {tot_i} impr / {tot_c} clicks")


main()
