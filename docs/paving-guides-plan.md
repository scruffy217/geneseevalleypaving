# Genesee Valley Paving: Paving Guides and RSS Plan

Site: pavingcompaniesinrochesterny.com

---

## 1. The Decision

Yes to a content section, no to a "blog."

- **Name it Paving Guides** at `/guides/`. It reads as evergreen help, not a news feed you have to keep feeding.
- **Guides only answer questions:** how, when, why, which, or X vs Y. They never try to rank for a service or a town.
- **RSS feed at `/rss.xml`,** built automatically every time the site builds. Zero cost, no extra code running on the live site.

Why have it at all:
1. **AI Overviews and AI chat tools pull from pages that answer questions directly.** Service pages sell. Guides answer.
2. **Each guide feeds a money page** with a strong, relevant link.
3. **It shows Google the site knows paving in this area,** not just that it wants calls.

---

## 2. Who Owns Which Searches

This is the whole anti-cannibalization system. One kind of search, one page.

| Page type | Owns searches like | Never write a guide for |
|---|---|---|
| Home | paving company Rochester NY | "paving companies in Rochester" anything |
| Service pages | driveway sealing Rochester NY, gravel driveway installation Rochester | "[service] Rochester" or "[service] near me" |
| Town pages | paving contractor Greece NY, driveway paving Penfield | anything with a town name in the target |
| Cost page | asphalt driveway cost Rochester, how much does paving cost | any "how much" or "cost" question |
| Guides | how often to seal a driveway, millings vs gravel, overlay or replace | (these are the guides' job) |

---

## 3. The Rules

1. **One question per guide.** Put it in the `question` field. If two guides answer the same question, merge them.
2. **Every guide supports one money page.** Put it in the `moneyPage` field. The guide links there once, with clear anchor text, in a box at the bottom.
3. **Money pages link back.** Each service page gets a small "Helpful Guides" box with up to 3 guides that point to it.
4. **No town guides.** "Driveway Sealing in Greece" belongs on the Greece town page.
5. **No cost guides.** All price questions go to the cost page.
6. **FAQs stay short.** The home page FAQ gives the quick answer. A guide can go deep on the same topic, and the FAQ answer can link to it.
7. **Publish only real, checkable facts.** One or two good guides a month beats ten thin ones.
8. **Check for overlap monthly.** In Google Search Console, open Performance, click a query, then the Pages tab. If two of your pages keep trading places for the same search, merge the weaker one into the stronger one and 301 redirect it.

---

## 4. Starter Topics

| Guide | The one question | Money page it supports |
|---|---|---|
| How Often Should You Seal an Asphalt Driveway? | How often should I seal my driveway? | Asphalt Driveway Sealing |
| Recycled Asphalt Millings vs Gravel | Should I use millings or gravel? | Recycled Asphalt Millings (sample file included) |
| Overlay or Full Replacement? | How do I know if my driveway needs an overlay or replacement? | Resurfacing and Overlays |
| How Road Salt and Plows Wear Down a Driveway | What does winter do to my driveway? | Asphalt Driveway Sealing |
| Your New Driveway's First Year | What should I do and avoid with a new driveway? | Asphalt Driveway Paving |
| Why Driveways Crack and Heave in Cold Climates | Why is my driveway cracking or lifting? | Asphalt Driveway Repair |
| Asphalt vs Concrete Driveways in a Cold Climate | Asphalt or concrete for a driveway here? | Asphalt Driveway Paving |
| A Parking Lot Maintenance Schedule for Property Managers | When should a lot be sealed, patched or striped? | Parking Lot Repair |
| When Does a Parking Lot Need Repaving? | Repair or repave my lot? | Parking Lot Paving |
| Gravel Driveway Upkeep: Ruts, Washouts and Potholes | How do I keep a gravel driveway in shape? | Gravel Driveways |

---

## 5. Hops and Links

- **Footer:** "Paving Guides" added to the Explore column, so the hub is 1 hop from every page.
- **Any guide:** at most 2 hops from any page (footer, then hub), and 1 hop from its money page.
- **Nav bar:** unchanged. HOME, SERVICES, AREAS SERVED, CONTACT, ABOUT. Add GUIDES later only if the section grows past 15 or so guides.
- **Breadcrumbs:** Home > Guides > [guide title], built in.
- **Sitemap:** guides are picked up by the Astro sitemap automatically. Drafts are not built, so they never show up.

---

## 6. What's Built

| File | What it does |
|---|---|
| `src/content.config.ts` | Defines the guides collection. Every guide must have a title, description, question, moneyPage, moneyPageLabel and pubDate. |
| `src/content/guides/millings-vs-gravel-driveway.md` | Sample guide, set to `draft: true`. Fill it in, then set it to false. |
| `src/pages/guides/index.astro` | The guides hub at /guides/. |
| `src/pages/guides/[slug].astro` | The page for each guide: black hero, breadcrumbs, article, money page box, BlogPosting schema. |
| `src/pages/rss.xml.js` | The RSS feed at /rss.xml. |
| `src/data/site.ts` | Adds the guides hub link. |
| `src/components/Footer.astro` | Adds "Paving Guides" to the footer. |
| `src/components/Breadcrumbs.astro` | Adds "Guides" and supports guide titles. |

Install the RSS package once: `npm install @astrojs/rss`

**Schema:** BlogPosting with Genesee Valley Paving as the author. No named person, per your lead gen rule.

**RSS link:** add this to the `<head>` of your base layout so every page points to the feed:

```html
<link rel="alternate" type="application/rss+xml" title="Genesee Valley Paving Guides" href="/rss.xml">
```

---

## 7. Tested

- Draft build: the sample guide is hidden, the hub says "Guides are on the way," the feed has 0 items.
- Published build: the guide page builds, it shows in the hub, the feed has 1 item, breadcrumbs read Home > Guides > [title], BlogPosting schema is valid JSON, and the footer link is present.
- Meta descriptions: sample guide 159 characters, guides hub 160.
