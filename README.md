# Genesee Valley Paving

Lead gen site for pavingcompaniesinrochesterny.com. Astro, static HTML, hosted on Cloudflare Pages.

## Run it on your computer

1. Install Node.js (LTS) from nodejs.org if you don't have it.
2. Open a terminal in this folder.
3. Run `npm install` once.
4. Run `npm run dev` and open the address it prints (usually http://localhost:4321).

DONE WHEN: the home page loads in your browser.

## Cloudflare Pages settings

1. Cloudflare dashboard, Workers & Pages, Create, connect to Git, pick `scruffy217/geneseevalleypaving`.
2. Framework preset: Astro
3. Build command: `npm run build`
4. Build output folder: `dist`
5. Leave `PUBLIC_LAUNCHED` unset for now. Every page says noindex until launch.

## Launch checklist

1. All pages built and every [CONFIRM] tag cleared.
2. Real tracking number in `src/data/site.ts` (`phone`).
3. In Cloudflare, Settings, Variables: add `PUBLIC_LAUNCHED` = `true`, then redeploy. This removes the noindex tag.
4. Add the custom domain pavingcompaniesinrochesterny.com.
5. Submit `https://pavingcompaniesinrochesterny.com/sitemap-index.xml` in Google Search Console.
6. Crawl with Screaming Frog: no orphans, no 404s, every page at crawl depth 1.

## Folders

- `src/data/site.ts`: every link on the site. Header, footer, breadcrumbs and the orphan check all read from it.
- `src/components/`: Header (mega menu), Footer, Breadcrumbs.
- `src/layouts/BaseLayout.astro`: head tags for every page, plus the pre-launch noindex switch.
- `src/pages/`: the pages. Home is started (hero, intro, CTA row 1).
- `src/content/guides/`: Paving Guides as Markdown files.
- `public/`: logos, favicons, robots.txt.
- `docs/`: home page copy, linking plan, guides plan, brand colors, mockups. Each doc in .md and .txt.
