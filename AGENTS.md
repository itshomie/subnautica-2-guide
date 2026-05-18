# AGENTS.md

This file is the operating manual for AI agents working in this project. Read it before making any project change. Treat these as durable project requirements unless the owner explicitly asks to update this file.

## Project Snapshot

- Project: Astro static SEO site for `subnautica-2-guide.com`.
- Site goal: rank for Subnautica 2 guide searches and later monetize with AdSense.
- Positioning: unofficial fan-made guide hub, not an official Unknown Worlds site.
- Contact email: `support@subnautica-2-guide.com`.
- Deployment target: static output from `dist/`, suitable for Cloudflare Pages.

## Core Rules

- Do not publish internal operating notes, editorial backlogs, TODOs, "field check" reminders, "final publish" warnings, or instructions telling the owner to capture gameplay screenshots.
- If something is future operations work, tell the owner in the chat response. Do not add it to the public website unless the owner explicitly asks for a public page about it.
- Do not add AdSense scripts, ad placeholders, ad boxes, or `adsbygoogle` code until the owner explicitly asks to connect real ads.
- Do not use official logos as the site logo. Do not make the site look official.
- Keep the fan-site disclaimer visible in the footer and policy/disclaimer pages.
- Do not fabricate exact coordinates, screenshots, routes, recipes, or patch details. If a detail is not confirmed, use cautious Early Access wording.
- Do not rely on the owner playing the game or taking screenshots. The MVP must work without owner-provided gameplay screenshots.
- Use original explanatory visuals when needed. Captions and alt text must not imply that generated images are gameplay screenshots, official maps, or exact in-game proof.
- Prefer official sources for current facts: Steam, Unknown Worlds, official roadmap/patch notes. Browse before changing date-sensitive facts.
- Keep guide URLs short and unique. Avoid duplicate SEO pages for the same intent.

## Public Content Standard

Public pages should read like finished reader-facing pages, not drafts or instructions for the site owner.

Good public wording:

- "Use this checklist before pushing into deeper routes."
- "Exact routes may change during Early Access."
- "Original route planning illustration, for readability."

Do not publish wording like:

- "Field-check before final publish."
- "Capture screenshots before treating this as final gameplay advice."
- "This page should include..."
- "MVP topical cluster."
- "TODO", "placeholder", "needs verification", or similar production notes.

## Content Model

Guide pages are mainly defined in `src/data/guides.ts`.

When adding or editing a guide:

- Use a unique `slug`.
- Write `title`, `shortTitle`, and `description` for users and search engines.
- Keep `intent` reader-facing because it appears in the guide sidebar as "Best for".
- Include `quickFacts`, clear sections, FAQs, related guides, and official sources where useful.
- Use `status` values that make sense publicly, such as `Early Access guide`, `Early Access summary`, or `Evergreen primer`.
- Keep map/location pages criteria-based when exact data is not reliable.
- Link related pages so long-tail guides support the homepage and each other.

## Policy And AdSense Readiness

The site should keep these public support pages:

- `/contact/`
- `/privacy-policy/`
- `/cookie-policy/`
- `/terms-of-use/`
- `/disclaimer/`
- `/editorial-policy/`

Before adding AdSense later:

- Add only the real AdSense code from the owner's AdSense account.
- Update privacy/cookie wording if the implementation changes.
- For EEA, UK, or Switzerland traffic, account for Google's consent requirements before serving personalized ads.

## Verification Checklist

After meaningful code or content changes, run:

```bash
npm run build
```

Then scan source and build output for content that should not ship:

```bash
rg -n "MVP|TODO|FIXME|field check|Field check|field-check|final publish|gameplay advice|screenshot|screenshots|in-game|guide should|page should|should include|should state|AdSense slot|Advertisement|adsbygoogle|googlesyndication|data-ad-client|data-ad-slot|placeholder" src public dist --glob '!public/images/*'
```

For local route checks when a dev server is running:

```bash
rg -o "https://subnautica-2-guide.com[^<]+" dist/sitemap.xml \
  | sed 's#https://subnautica-2-guide.com#http://localhost:4321#' \
  | xargs -n1 -I{} sh -c 'code=$(curl -s -o /dev/null -w "%{http_code}" "{}") && printf "%s %s\n" "$code" "{}"'
```

For frontend changes, also do a browser smoke check of at least:

- `/`
- `/contact/`
- `/privacy-policy/`
- `/disclaimer/`
- one representative guide page

## Deployment Notes

Use this static deployment configuration:

```text
Build command: npm run build
Output directory: dist
```

Post-deployment tasks belong in the chat response unless the owner asks to implement them:

- Configure DNS and Cloudflare Pages domain.
- Submit `https://subnautica-2-guide.com/sitemap.xml` in Google Search Console.
- Submit to Bing Webmaster Tools if desired.
- Add analytics only when requested.
- Add AdSense only when requested and approved.

## Ongoing Operations Guidance

Long-term operations should be reported to the owner, not silently added as public website content.

Useful future operations:

- Add or improve 2-3 guide pages per week based on search demand.
- Update pages after official patches, hotfixes, or roadmap changes.
- Strengthen thin pages with real sourced details when reliable data appears.
- Avoid publishing speculative exact coordinates or fake screenshots.
- Track which pages attract impressions and improve those first.

## Updating This File

Update this file automatically when a new durable rule, workflow, source constraint, content policy, deployment step, or repeated correction emerges.

Do not update this file for one-off tasks. Keep it concise and operational. If a user request conflicts with this file, explain the conflict and ask whether the owner wants to update `AGENTS.md`.

