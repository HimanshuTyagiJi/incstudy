# IncStudy Jekyll Theme

Custom Jekyll starter with reusable layouts and includes, separate CSS and JavaScript, university/course data, and sample shared-topic pages.

## Requirements
- Ruby
- Bundler
- Jekyll 4.3

## Run locally
```bash
bundle install
bundle exec jekyll serve
```
Open the local address printed by Jekyll.

## Routes
- `/`
- `/universities/`
- `/courses/bca/`
- `/ccsu/`, `/ccsu/bca/`, `/ccsu/bca/semester-1/`
- `/aktu/`, `/aktu/bca/`, `/aktu/bca/semester-1/`
- `/bca/topics/number-system/`
- `/bca/topics/computer-fundamentals/`

## Shared content
Common topic pages live in the configured `topics` collection. University semester pages link to the same topic URL. University-specific syllabus mapping remains on each university page. The examples are structural samples and do not claim to reproduce official CCSU or AKTU syllabus details.

## Add a university
1. Add it to `_data/universities.yml`.
2. Add its university, course and semester pages.
3. Link shared topic URLs where relevant.
4. Add university-specific content only where the verified syllabus differs.
5. Check titles, descriptions, canonical URLs and navigation.

## Before publishing
Complete the contact, privacy, terms and disclaimer pages; verify syllabus mappings against official documents for the correct session; replace sample topic text with reviewed study material; configure the production URL; test mobile navigation, theme toggle, search and sitemap.

The search is a small client-side demo index. Extend it or replace it when the content library grows. The ad-slot include is a placement placeholder only. Login, user accounts, comments and an admin CMS are not implemented.
