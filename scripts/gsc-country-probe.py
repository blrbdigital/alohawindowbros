#!/usr/bin/env python3
"""One-off: country x query probe for a regex of queries. Run on the VPS.

Usage: gsc-country-probe.py START END 'regex'
Answers "is this query real local demand or offshore noise?" before we
write a page for it. Added 2026-08-10 for the exterior/cladding Newbury
Park cluster ("cladding" is British English; Newbury, Berkshire is a real
place, so the rows had to be proven US before acting).
"""
import json
import re
import sys
import urllib.parse
import urllib.request

TOKENS = "/root/.gsc-tokens.json"
PROP = "sc-domain:alohawindowbros.com"


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


def q(tok, start, end, dims):
    url = ("https://www.googleapis.com/webmasters/v3/sites/"
           + urllib.parse.quote(PROP, safe="") + "/searchAnalytics/query")
    body = {"startDate": start, "endDate": end, "dimensions": dims, "rowLimit": 25000}
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"Authorization": "Bearer " + tok, "Content-Type": "application/json"})
    return json.load(urllib.request.urlopen(req, timeout=120)).get("rows", [])


def main():
    start, end, pattern = sys.argv[1], sys.argv[2], sys.argv[3]
    rx = re.compile(pattern, re.I)
    tok = token()
    print("query x country", start, "..", end)
    for r in q(tok, start, end, ["query", "country"]):
        query, country = r["keys"]
        if rx.search(query):
            print("%-42s %-6s %4d impr  pos %.1f" % (
                query, country, r["impressions"], r["position"]))


if __name__ == "__main__":
    main()
