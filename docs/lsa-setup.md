# Aloha Window Bros: Google Local Services Ads setup

Prepared 2026-10-24. Requested outcome: linked to Google Ads **469-016-4215**, lowest permitted weekly budget, paused or not live. Do not accept terms, send client/staff invitations, add payment methods, or enter credentials.

## Current status

- [x] Research and prefill completed from the live site, repository, supplied account context, and current Google help pages.
- [ ] Exact category and postcode eligibility confirmed in Google's setup flow.
- [ ] Existing Google Ads account selected and linkage verified.
- [ ] LSA profile created.
- [ ] Lowest accepted weekly budget saved and recorded.
- [ ] Paused/not-live status verified with screenshot.
- [ ] Terms accepted by Adam through the requested approval card.
- [ ] Client verification materials supplied and required checks completed.

Browser setup has not started. Initial screen check: Jairy frontmost, unlocked, idle 3 seconds. Waiting for at least 180 seconds of idle time before any GUI interaction.

## Eligibility and badge

Google's current badge is **Google Verified**, replacing the old Google Screened/Google Guaranteed distinction. Do not advertise Aloha as already verified or promise a Google money-back guarantee. [Google badge policy](https://support.google.com/localservices/answer/16498018?hl=en)

| Actual Aloha service | LSA category and proposed selection | Availability and badge |
| --- | --- | --- |
| Residential and commercial window washing, interior/exterior, frames/sills, skylights | Window cleaning; select matching window and skylight job types offered by the wizard | Google lists window cleaning in the US. Google Verified after required verification. Exact 91362 and target-city eligibility remains to be checked. |
| Gutter and downspout cleaning | Gutter cleaning within Window cleaning | Google's window-cleaning category explicitly includes gutters. Same Google Verified badge and category requirements. |
| Screen cleaning | Window cleaning, if the wizard offers a matching job type | Aloha sells it. A separate screen-cleaning LSA category is not established by the cited Google list. Do not select screen repair or installation. |
| Solar panel cleaning | Select only if a matching cleaning job type is offered | Aloha sells cleaning. Google's list includes Solar energy contractor, which does not establish eligibility for cleaning-only work. Do not select installation or electrical services. |
| Pressure washing | Hold pending current GBP/service confirmation and matching wizard job type | No service page. Repository site map records it as a GBP secondary category in August 2026. This is historical evidence, not current proof. No standalone pressure-washing category appears in the cited Google list. |

Sources: [Google supported categories and eligibility checker](https://support.google.com/localservices/answer/6224841?hl=en), [Google US category requirements, Window cleaning](https://support.google.com/localservices/answer/12174778?hl=en), [Aloha window washing](https://alohawindowbros.com/services/window-washing/), [gutters](https://alohawindowbros.com/services/gutter-cleaning/), [screens](https://alohawindowbros.com/services/screen-cleaning/), [solar panels](https://alohawindowbros.com/services/solar-panel-cleaning/). Historical pressure-washing evidence: `.claude-site-map.md`, service-gap note.

Google directs businesses to its eligibility checker for geographic confirmation. A national category listing is not a confirmed eligible result for Ventura County or Santa Barbara County. Starting postcode: **91362**. [Eligibility checker](https://ads.google.com/localservices/signup/eligibility)

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
| Google Business Profile | https://maps.google.com/?cid=4483745950804238350 | Live site `sameAs` and hero link. Raw Maps fetch returned a JS shell, so GBP contents and current verification/access status remain unverified. |
| Hours | Open 24 hours, Monday through Sunday | Live site JSON-LD; repository says this mirrored owner-set GBP hours verified 2026-08-05. Confirm current GBP before saving. Business hours do not establish a 24-hour staffed ad schedule. |
| Years in business | Candidate: 2 completed years as of 2026-10-24, based on 2024-10-05 start date. Do not submit without client or GBP confirmation. | BBB gives Business Started 10/5/2024. Its displayed rounded years count is stale. No primary founding-date evidence found. |
| Owner/contact | Ely Sirota-Foster is a candidate contact, not a verified ownership roster. | BBB names him Co-CEO; leads-pipeline memory names Ely. Client must confirm legal owners and authority. |
| Existing Google Ads ID | 469-016-4215 | Explicit task instruction and 2026-10-23 account-setup memory. Must verify in UI. |
| Ads account context | Billing already on file, Sam is Admin, advertiser verification pending | Task instruction. Earlier 2026-10-23 memory still said Sam's invite was pending; current task supersedes that old snapshot, UI recheck pending. |
| Promotion | Reported $500 spend-match offer by 2026-12-22 | Task and prior setup record. Do not assume LSA spend qualifies or credit is earned. |
| Budget | Lowest weekly amount accepted by Google's actual budget control; value not yet known | Do not substitute Google's recommended budget for its minimum. [Budget help](https://support.google.com/localservices/answer/7434558?hl=en) |
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

1. Check `macui frontmost` and HID idle seconds. Drive the Mini only after 180 seconds idle, and stop if Adam resumes use. Use AX/DOM targets before OCR; never guessed pixels. Do not copy Chrome cookies or profiles.
2. Open a dedicated LSA tab in the requested signed-in BLRB Chrome profile. Select and visibly verify **469-016-4215** before any account save. Do not create an unrelated Google Ads account.
3. Complete eligibility and business prefill as far as verified data permits. Record unresolved fields rather than inventing values.
4. Stop before Terms acceptance. Capture the exact agreement text, all linked Terms and Privacy URLs, and the page/screenshot for Adam's card. No agreement has been accepted in this task.
5. Stop before any client/staff email or screening invitation. Record the displayed recipient address, message purpose, sender/provider and exact sending control. No send is authorized by this checklist.
6. If reached, save the lowest accepted weekly budget and leave ads paused/not live. Capture the account ID, budget, profile state and remaining verification tasks. Do not enable pre-badge ads.
7. On a login, 2FA or CAPTCHA wall, leave the tab open and report `LOGIN NEEDED: <site> <url>`.

No invitation recipients or agreement URLs have yet been presented by an authenticated setup page. Do not mistake generic Google footer links for the actual account agreement.

## Lead delivery

Existing website and Meta leads use a separate Aloha pipeline. That does not prove that LSA leads will appear on the existing board or send its SMS notifications. Do not test live client notifications or claim that an LSA integration is configured. Keep the business phone above and inspect LSA's own notification recipients before any launch.

## Evidence and handoff

Documentation-only work. Push on a dedicated branch because `.github/workflows/deploy.yml` deploys every push to main/master. No production website change or deployment is requested.

Validation: `git diff --check` passed; no em dashes. `legal-guard scan` returned 0 critical/high findings, 3 medium and 2 review findings in existing website files. No website source was changed.

Evidence directory: `/Users/adam/Library/Logs/blrb/aloha-lsa-20261024/`. UI setup is pending an idle screen. Exact stop point and UI evidence will be appended after the browser attempt.
