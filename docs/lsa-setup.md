# Aloha Window Bros: Google Local Services Ads setup

Prepared 2026-10-24. **Current authorized LSA target: 565-382-4300.** Adam chose reuse of the original account: "thats fine if thats where it started and how to make it work"; the hub clarified option 3. Reactivate only if LSA requires it, keep all three existing campaigns paused, and do not change billing. Stop before Terms acceptance, any client/staff invitation, or any budget. Leave owner name, fieldworker count and founding year blank until Ely confirms them.

## Current status

- [x] Research and prefill completed from sourced business facts and current Google help.
- [x] Window cleaning / California / ZIP 91362 eligibility accepted by Google's manual setup flow.
- [x] Adam approved using 565-382-4300 after investigation of the original 469-016-4215 routing requirement.
- [x] Verified LSA drawer customer ID 5653824300 before entering details.
- [x] Filled the business-details form with Aloha Window Bros, +1 805-341-4121, https://alohawindowbros.com/, 138 Colt Lane, Thousand Oaks, CA 91362. The default customer-visit setting remains No.
- [ ] Business-details submission completed. Next is blocked by required owner first/last name and founding year.
- [ ] LSA profile completed. Not live; no budget or launch step reached.
- [ ] Reactivation performed. Not needed for the form so far; account remains cancelled.
- [ ] Terms or invitations reached. None accepted or sent.
- [x] Existing three campaigns remain paused; billing unchanged.

**Current stop: client facts required on Business details.** Clicking Next with owner name and founding year blank returned **Enter owner's first name**, **Enter owner's last name**, **Invalid year**, and **Some inputs are invalid, please fix.** The known values remain filled in the open desk `gads` tab, but the form did not advance and successful persistence is not claimed. Owner first/last name, total fieldworkers and founding year remain blank. The fieldworker input did not show an error at this validation step; its later requirement is not established.

**HUB: NEEDS client details.** Ely must confirm the exact owner first name, last name and founding year. Also collect total fieldworkers for the next step. Historical BBB identity/date candidates are not approved substitutes. No Terms acceptance control or applicable Terms/Privacy pair has been reached; the generic Policies & Terms footer is not an approval-card agreement.

The signed-in desk account is `blrbdigital@gmail.com`. All work uses isolated desk `gads` over CDP; main Chrome is untouched. The account remains cancelled because current progress did not require reactivation. All three existing campaigns remain paused. No billing changes, invitations, budget changes or support calls were made.

Evidence: `reuse-prefilled-business-details.png`, `reuse-after-business-next.{png,json}`, `reuse-stop-owner-year-required.png`, `reuse-preflight-paused.json`, `reuse-final-paused.json` in `/Users/adam/Library/Logs/blrb/aloha-lsa-20261024/`.

## Historical routing investigation

The original target was 469-016-4215. Its Google Ads account is accessible, but LSA routed to 565-382-4300. Adam subsequently approved reuse of 565-382-4300, resolving that authorization blocker. The prior attempts and account audit follow for reference.

### Follow-up: both requested binding attempts failed

1. **Inside Aloha Ads:** opened New campaign from the verified Aloha account and selected Create a campaign without guidance to expose every offered campaign type. Options were Search, Performance Max, Demand Gen, Display, Shopping, Video and App. No Local Services option. Inspected Tools navigation, including Planning; no LSA entry was offered. Cancelled the unsaved new-campaign flow without choosing a campaign type or saving a campaign.
2. **Copied account context:** copied actual parameters from Aloha's Ads URL into `https://ads.google.com/localservices/inbox`: `ocid=8624899400`, `__c=1656590600`, `uscid=8624899400`, `euid=1074726188`, `__u=8585873612`, `authuser=0`. Google redirected to its Business details page, preserved the ocid/__c/uscid parameters, changed euid, and appended the other LSA account's internal cid/bid. The drawer still explicitly said **Your customer ID: 5653824300**. No business details were entered.

Both requested paths therefore failed to bind LSA to **4690164215**. The cancelled account was not reactivated, edited or submitted. No budget step, invitation, support call or Terms acceptance was performed. The existing Ads page displays an Accept Call and Messaging Ads Terms banner; it was not opened or accepted, and it is not proof that the LSA account-routing issue is resolved.

Screenshots: `attempt1-campaign-types.png`, `attempt1-tools-nav.png`, `attempt2-account-context-result.png`. Exact source/request/result URLs and page text: `attempt1-campaign-types.json`, `attempt2-request.json`, `attempt2-result.json` in the evidence directory below.

### Final routes 3 and 4: MCC check and cancelled-account audit

**Route 3, MCC:** `blrbdigital@gmail.com` has only two selectable Google Ads accounts in the chooser: cancelled 565-382-4300 and Aloha 469-016-4215. In Aloha 469-016-4215, Admin > Access and security > Managers explicitly says **You don't have any entries yet**. No accessible MCC managing Aloha was found, so there was no MCC Accounts > + or MCC Local Services view to use. No manager account was created and no linking request/invite was sent.

**Route 4, read-only audit of 565-382-4300:**

| Question | Observed evidence |
| --- | --- |
| What is it? | An older mixed BLRB/Aloha Google Ads account, not an empty new account. Current campaign table contains Professional Web Design (Smart), BLRB_Search (Google) (Search), and Aloha Bros Roof Cleaning (Smart). All three are Paused and the account remains Cancelled. |
| When does it date from? | All-time range starts January 10, 2024. Access table lists BLRB admin added January 10, 2024. Advertiser terms show accepted March 5, 2024 at 15:04:08 America/New_York. |
| Who created it? | Account-creation actor was not directly exposed. `blrbdigital@gmail.com` is the sole current admin and earliest listed user. Google exposes only the past two years of change history, so that is not proof of the January 2024 creation actor. |
| Aloha campaign creator/date | Change history explicitly records `blrbdigital@gmail.com` creating Aloha Bros Roof Cleaning on December 19, 2024 at 8:56:12 PM Eastern. BLRB paused it February 12, 2025 at 9:54:47 PM Eastern. |
| Aloha association | `alohabrosroofcleaning@gmail.com` has Standard access, invited by BLRB and added January 28, 2025; the data-protection contact is Ely. Campaign history includes roof-cleaning edits by this client email. |
| Historic LSA? | The listed campaigns are Smart/Search, not Local Services. The LSA route currently opens an incomplete blank onboarding form, but no evidence establishes that a completed LSA profile ever existed or when that blank shell originated. Do not call it an established old LSA account. |
| Historical spend | Account total $712.16: Aloha Bros Roof Cleaning $528.07, Professional Web Design $68.92, BLRB_Search $115.17. The $528.07 in the retained change-history chart is not the whole account total. |
| Billing identity | Payer `blrb digital`, Postpay, primary Amex ending 1004, no backup payment method. This is the cancelled account's billing setup, not Aloha 469-016-4215's billing. No billing edit was made. |
| Recent billing | 2026 summary shows $0 net cost in each displayed month and a -$5.85 payment entry in May. Outstanding balance and the reason for that entry were not established from the viewed summary. |
| Cancellation actor/date | Not established in the available history. Do not infer an automatic cancellation from the age or inactivity. |

Evidence in the local directory below: `attempt3-account-selector.png`, `attempt3-aloha-managers.{png,json}`, `cancelled-preferences.{png,json}`, `cancelled-users.{png,json}`, `cancelled-billing-settings.{png,json}`, `cancelled-billing-summary.json`, `cancelled-change-history.{png,json}`, `cancelled-change-rows.json`, `cancelled-campaigns.{png,json}`.

**Historical stop, before Adam approved option 3:** all four account-binding routes were exhausted. No account reactivation, business-detail save, budget change, Terms acceptance, invitation or support call was performed.

Options for Adam:

1. Ely signs up for LSA from his own Google account, verifies the intended business/account, then grants us manager access. No invite has been sent.
2. Adam calls Google LSA support at **844-263-9884** with the support question below, including the confirmed old BLRB/Aloha account history.
3. Reuse 565-382-4300 only with explicit authorization and a billing decision: it currently uses BLRB's existing postpay/Amex setup and mixes BLRB with Aloha history. Reactivation is free, but subsequent ad costs use its billing setup unless changed. All three observed campaigns are paused and should stay paused; reactivation alone does not unpause them. No $500 promotion transfer or linkage to 469-016-4215 is established. [Google reactivation guidance](https://support.google.com/google-ads/answer/2375392?hl=en)

### What the authenticated setup established

- Selecting the existing **Aloha Window Bros** GBP and clicking Next returned **Not eligible for sign up.** Google did not explain why. The GBP was not linked.
- Google's visible **Skip Business Profile** option led to its manual eligibility checker, which explicitly permits connecting an existing GBP later.
- Entered United States, California, **91362**, **Window cleaning**, then clicked **Check Eligibility**. Google advanced to Business details. This confirms the category/ZIP combination proceeds; it does not verify the GBP or all target cities.
- The Business details form asks for business name, optional registration name, phone, optional website, owner first/last name, total fieldworkers, year founded, address, and customer-visit status. Email and text lead preferences defaulted to selected. None of these business fields or preferences was submitted.
- No Terms acceptance or invitation step was reached. No agreement was accepted and no client/staff notification or background-check invite was initiated. Generic footer Policies & Terms is not the agreement needed for Adam's consent card.
- Aloha's existing Google Ads overview already shows the Search campaign **AWB | Search | Window + Gutter** with an Enabled ad. It was inspected read-only and left unchanged. This is separate from the unlaunched LSA setup.

Screenshots and exact stop-state URL are in the evidence directory below. The LSA page remains open in desk `gads`. Agent work used CDP only; main Chrome was not driven and no Chrome cookies/profile were copied. The earlier idle watcher is stopped. The fresh secret card was not used because Adam completed sign-in himself.

## Eligibility and badge

Google's current badge is **Google Verified**, replacing the old Google Screened/Google Guaranteed distinction. Do not advertise Aloha as already verified or promise a Google money-back guarantee. [Google badge policy](https://support.google.com/localservices/answer/16498018?hl=en)

| Actual Aloha service | LSA category and proposed selection | Availability and badge |
| --- | --- | --- |
| Residential and commercial window washing, interior/exterior, frames/sills, skylights | Window cleaning; select matching window and skylight job types offered by the wizard | Google lists window cleaning in the US. Google Verified after required verification. Manual eligibility for California 91362 advanced to Business details on 2026-10-24. Target-city coverage and GBP affiliation remain pending. |
| Gutter and downspout cleaning | Gutter cleaning within Window cleaning | Google's window-cleaning category explicitly includes gutters. Same Google Verified badge and category requirements. |
| Screen cleaning | Window cleaning, if the wizard offers a matching job type | Aloha sells it. A separate screen-cleaning LSA category is not established by the cited Google list. Do not select screen repair or installation. |
| Solar panel cleaning | Select only if a matching cleaning job type is offered | Aloha sells cleaning. Google's list includes Solar energy contractor, which does not establish eligibility for cleaning-only work. Do not select installation or electrical services. |
| Pressure washing | Hold pending current GBP/service confirmation and matching wizard job type | No service page. Repository site map records it as a GBP secondary category in August 2026. This is historical evidence, not current proof. No standalone pressure-washing category appears in the cited Google list. |

Sources: [Google supported categories and eligibility checker](https://support.google.com/localservices/answer/6224841?hl=en), [Google US category requirements, Window cleaning](https://support.google.com/localservices/answer/12174778?hl=en), [Aloha window washing](https://alohawindowbros.com/services/window-washing/), [gutters](https://alohawindowbros.com/services/gutter-cleaning/), [screens](https://alohawindowbros.com/services/screen-cleaning/), [solar panels](https://alohawindowbros.com/services/solar-panel-cleaning/). Historical pressure-washing evidence: `.claude-site-map.md`, service-gap note.

Google directs businesses to its eligibility checker for geographic confirmation. The authenticated checker accepted **Window cleaning / California / 91362** and advanced to Business details. This is not confirmation of every target ZIP in Ventura County or Santa Barbara County. [Eligibility checker](https://ads.google.com/localservices/signup/eligibility)

## Prefilled business details

| Field | Value to use or confirm | Source and confidence |
| --- | --- | --- |
| Public business name | Aloha Window Bros | Live homepage and `src/lib/seo.ts` |
| Legal business name/entity | Not verified. Do not invent an LLC suffix or treat the trading name as a registered legal name. | Client registration/DBA needed. BBB lists sole proprietorship, which is a third-party lead, not legal evidence. |
| Business address | 138 Colt Lane, Thousand Oaks, CA 91362, United States | Live homepage JSON-LD fetched 2026-10-24; `src/lib/seo.ts`; corroborated by BBB |
| Location type | Service-area business is the proposed setting; confirm the GBP setting before saving. Do not publish the address as a customer storefront without evidence. | Site describes work at customer properties; public visiting location not established. |
| Phone | +1 805-341-4121 | Live site; leads-pipeline memory identifies it as Ely's cell and business line. |
| Business email | alohawindowbros@gmail.com | Live site and leads-pipeline memory. Entering this is not authorization to send invitations. |
| Website | https://alohawindowbros.com/ | Live site |
| Google Business Profile | https://maps.google.com/?cid=4483745950804238350 | Live site `sameAs` and hero link. Raw Maps fetch returned a JS shell. The signed-in LSA selector lists Aloha Window Bros, but selecting it returns Not eligible for sign up. GBP verification and successful affiliation remain unresolved. |
| Hours | Open 24 hours, Monday through Sunday | Live site JSON-LD; repository says this mirrored owner-set GBP hours verified 2026-08-05. Confirm current GBP before saving. Business hours do not establish a 24-hour staffed ad schedule. |
| Years in business | Candidate: 2 completed years as of 2026-10-24, based on 2024-10-05 start date. Do not submit without client or GBP confirmation. | BBB gives Business Started 10/5/2024. Its displayed rounded years count is stale. No primary founding-date evidence found. |
| Owner/contact | Ely Sirota-Foster is a candidate contact, not a verified ownership roster. | BBB names him Co-CEO; leads-pipeline memory names Ely. Client must confirm legal owners and authority. |
| Existing Google Ads ID | 469-016-4215 | Verified in Google Ads account chooser and opened on 2026-10-24 as Aloha. WindowBros. The subsequent decision authorizes 565-382-4300 as the LSA target; 469-016-4215 remains the separate Search Ads account. |
| Ads account context | Billing already on file, Sam is Admin, advertiser verification pending | Task instruction. Earlier 2026-10-23 memory still said Sam's invite was pending; current task supersedes that old snapshot, UI recheck pending. |
| Promotion | Live overview shows $500 credit after $500 qualifying spend by 2026-12-22 | Google Ads overview verified 2026-10-24 shows $500 still needed. Do not assume LSA spend qualifies or credit is earned. |
| Budget | Not reached. Latest instruction is to stop before any budget setup. | Earlier lowest-weekly-budget objective is deferred; no amount entered. [Budget help](https://support.google.com/localservices/answer/7434558?hl=en) |
| Serving status | PAUSED or incomplete/not live, including pre-badge advertising | Explicit task requirement; do not activate to finish onboarding. |

Third-party business identity/date reference: [BBB business details](https://www.bbb.org/us/ca/thousand-oaks/profile/window-cleaning/aloha-window-bros-1236-92095192). No claim of BBB accreditation is intended.

### Service area

Use city selections rather than inventing a full ZIP list. The only verified business-address ZIP is **91362**.

- Core published landing pages: Thousand Oaks, Westlake Village, Agoura Hills, Newbury Park, Camarillo, Simi Valley, Ventura, Oxnard, Ojai, Santa Barbara.
- Additional published service areas: Montecito, Hope Ranch, Goleta, Carpinteria, Summerland.
- County description: Ventura County and Santa Barbara County, California. Agoura Hills and Westlake Village are explicitly published service cities; do not remove them just because of county boundaries.

Source: live homepage JSON-LD `areaServed`, `src/lib/seo.ts` `AREA_SERVED`, and live service-page city links. If Google's picker requires ZIPs, obtain its actual city/ZIP matches and confirm coverage before saving. Do not assume every ZIP in either county is covered.

### Job-type entry plan

Select window cleaning and gutter cleaning when offered. Add skylight cleaning and screen cleaning only where their displayed definitions match the work on Aloha's site. Solar-panel cleaning and pressure washing need the category/job-type checks above. Leave repairs, installations, roofing, electrical work and unrelated generic categories unselected. Record the exact labels actually offered in the setup flow.

## Verification requirements

Google's current US Window cleaning table lists business/owner checks, business/representative registration checks, general liability insurance, and applicable state business/owner licenses, with select-user qualifiers. It does not list a universal fieldworker background-check requirement for this category. The account dashboard determines which checks Aloha actually receives. [Google category requirements](https://support.google.com/localservices/answer/12174778?hl=en)

If Google requires background checks, its general process can cover the business, owners and fieldworkers, including employees, contractors and subcontractors visiting customers. Do not assume all crew members are exempt or invite everyone before the dashboard specifies the scope. Each person supplies their own sensitive details and consent directly to Google's screening partner. [Google screening process](https://support.google.com/localservices/answer/6226575?hl=en)

- **Insurance:** obtain the actual general liability certificate. Required coverage is shown in the upload screen; no dollar minimum is verified yet. Document must match the advertised name, or have DBA evidence, and remain valid at least 14 days after submission. Site copy saying insured is not a certificate.
- **Licenses:** obtain applicable business and owner licenses or Google's supported not-required path. No license number or exemption is verified. Google's checks do not replace applicable local licensing obligations. Do not attest that all licenses are held without client evidence.
- **Business identity:** confirm the registered name, DBA, owner and address. Supply the registration/EIN/D-U-N-S evidence Google requests through its secure flow.
- **GBP:** the profile must be public and verified, and the person doing the checks must have owner/manager access. Stop before any request-access action that emails the client.
- **ID:** the named business representative may need an unexpired government ID and Google's partner identity check. Adam's or Sam's agency access does not establish ownership of Aloha.

The window-cleaning requirements also govern its gutter job type. Requirements for an additional category, including Solar energy contractor, are not a reason to select that category for cleaning-only work.

## Only the client can provide or confirm

1. Exact legal name, DBA/entity evidence, current operating address/location type, start date, actual staffed hours, and any changes to service coverage or pressure-washing work.
2. Current signed insurance certificate with policy number, limits and expiration, plus DBA linkage if names differ.
3. Applicable license numbers/documents, or evidence supporting a not-required declaration requested by Google.
4. Confirmed owner and fieldworker roster. Each required person supplies background-check details and consent directly to the screening provider. No SSNs, dates of birth, ID scans or background results in this repo.
5. Representative ID verification and any GBP ownership challenge that Google requires.
6. Genuine team, vehicle and completed-job photos with permission to use them. Existing `public/img/logo.PNG` is available. The site's gutter photos are generated illustrations per `.claude-site-map.md`; do not submit them as actual job evidence.

## Browser execution and approval boundaries

1. Use isolated agent desk `gads` via CDP `http://127.0.0.1:9335`, per Adam's 13:24 update. Use DOM targets. Do not drive the Mini's screen or copy Chrome cookies/profiles.
2. Desk sign-in as `blrbdigital@gmail.com` is complete. Adam approved **565-382-4300** for LSA. Verify that ID before saving details. Reactivate only if setup requires it; keep all three existing campaigns paused and leave billing unchanged.
3. Complete eligibility and business prefill as far as verified data permits. Record unresolved fields rather than inventing values.
4. Stop before Terms acceptance. Capture the exact agreement text, all linked Terms and Privacy URLs, and the page/screenshot for Adam's card. No agreement has been accepted in this task.
5. Stop before any client/staff email or screening invitation. Record the displayed recipient address, message purpose, sender/provider and exact sending control. No send is authorized by this checklist.
6. Stop before any budget setup, per latest instruction. Keep LSA not live; do not enable pre-badge ads.
7. At the password field report `SECRET NEEDED: https://accounts.google.com (password, desk gads)`. For a Google code or phone tap report `CODE NEEDED: Google 2FA` with its kind. On an insecure-browser block or CAPTCHA, stop with a screenshot; no workarounds.

No invitation recipients or agreement URLs have yet been presented by an authenticated setup page. Do not mistake generic Google footer links for the actual account agreement.

## Lead delivery

Existing website and Meta leads use a separate Aloha pipeline. That does not prove that LSA leads will appear on the existing board or send its SMS notifications. Do not test live client notifications or claim that an LSA integration is configured. Keep the business phone above and inspect LSA's own notification recipients before any launch.

## Evidence and handoff

Documentation-only work. Push on a dedicated branch because `.github/workflows/deploy.yml` deploys every push to main/master. No production website change or deployment is requested.

Validation: `git diff --check` passed; no em dashes. `legal-guard scan` returned 0 critical/high findings, 3 medium and 2 review findings in existing website files. No website source was changed.

Evidence directory: `/Users/adam/Library/Logs/blrb/aloha-lsa-20261024/`:

- `idle-checks.jsonl`: timestamped screen preflight observations and confirmation that GUI was not driven.
- `live-business-prefill.json`: live homepage business JSON-LD with fetch time and source URL.
- `legal-guard.txt`: scanner output for this documentation-only change.
- `signin-watch.jsonl`: read-only 20-second sign-in observations.
- `lsa-after-gbp-selection.png`: Aloha selected with Not eligible for sign up result.
- `lsa-91362-eligibility-result.png`: successful manual eligibility advances to Business details.
- `ads-account-check.png`: Google Ads chooser with both actual customer IDs and Cancelled status.
- `ads-4690164215.png`: requested Aloha Ads overview, inspected read-only.
- `lsa-wrong-customer-id.png`: LSA menu explicitly showing customer ID 5653824300.
- `lsa-stop-state.json`: timestamp, exact setup URL and page text at the account-routing stop.

Checklist first committed and remote-verified as `81dccfc54d007463e66f05f7b8e4d3e9f7f26cfb`. Branch: `codex/aloha-lsa-setup-20261024`. [Remote checklist](https://github.com/blrbdigital/alohawindowbros/blob/codex/aloha-lsa-setup-20261024/docs/lsa-setup.md). Follow-up commits record desk sign-in and the account-routing stop. Main/master were not pushed and no production deployment was triggered.

Next operator: resume the already-filled business-details tab after Ely confirms owner first/last name and founding year; also collect fieldworker count. Target 565-382-4300 is approved. Stop at Terms, invitations or any budget. No support calls are authorized. The following support question is retained as historical context only: Google signup help displayed **+1 844-263-9884**, Monday to Friday, 9 AM to 9 PM EDT. No support call or external message was sent. Concrete support question: "Signed in as blrbdigital@gmail.com, Aloha Google Ads is 469-016-4215, but LSA signup/inbox routes to cancelled customer 565-382-4300. How can we enroll Aloha under the intended account without reactivating the cancelled one? Selecting the existing Aloha GBP also returns Not eligible for sign up, while manual Window cleaning / CA / 91362 eligibility succeeds."

Ask for Ely, to be routed by Adam: please provide the exact legal business name/DBA, current insurance certificate, applicable licenses, owner and fieldworker verification details including fieldworker count and founding year, and genuine team/vehicle/job photos. Sensitive identity/background details belong only in Google's secure verification flow.
