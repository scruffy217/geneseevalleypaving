# Genesee Valley Paving

Lead gen site for pavingcompaniesinrochesterny.com. Astro, static HTML, hosted on Cloudflare Pages.

## Run it on your computer

1. Install Node.js (LTS) from nodejs.org if you don't have it.
2. Open a terminal in this folder.
3. Run `npm install` once.
4. Run `npm run dev` and open the address it prints (usually http://localhost:4321).

DONE WHEN: the home page loads in your browser.

## Cloudflare Pages settings (connected to this repo)

1. Framework preset: Astro
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Every push to `main` rebuilds and redeploys the site.
5. Preview address: https://geneseevalleypaving.pages.dev
6. Leave `PUBLIC_LAUNCHED` unset for now. Every page says noindex until launch.

## Launch checklist

1. All pages built and every [CONFIRM] tag cleared.
2. Real tracking number in `src/data/site.ts` (`phone`).
3. In the Pages project's settings, add an environment variable `PUBLIC_LAUNCHED` = `true`, then redeploy. This removes the noindex tag. (It must be a build variable, because Astro reads it while building.)
4. Add the custom domain pavingcompaniesinrochesterny.com.
5. Once the custom domain works, keep the pages.dev copy from competing with it: in the Pages project, add a redirect so pages.dev sends visitors to pavingcompaniesinrochesterny.com.
6. Submit `https://pavingcompaniesinrochesterny.com/sitemap-index.xml` in Google Search Console.
7. Crawl with Screaming Frog: no orphans, no 404s, every page at crawl depth 1.

## Folders

- `src/data/site.ts`: every link on the site. Header, footer, breadcrumbs and the orphan check all read from it.
- `src/components/`: Header (mega menu), Footer, Breadcrumbs.
- `src/layouts/BaseLayout.astro`: head tags for every page, plus the pre-launch noindex switch.
- `src/pages/`: the pages. Home is started (hero, intro, CTA row 1).
- `src/content/guides/`: Paving Guides as Markdown files.
- `public/`: logos, favicons, robots.txt.
- `docs/`: home page copy, linking plan, guides plan, brand colors, mockups. Each doc in .md and .txt.
