import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Static RSS feed at /rss.xml, rebuilt every time the site builds.
export async function GET(context) {
  const guides = (await getCollection('guides', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Genesee Valley Paving: Paving Guides',
    description: 'Straight answers on driveways, sealing, millings and gravel for Rochester and Monroe County, New York.',
    site: context.site,
    items: guides.map((g) => ({
      title: g.data.title,
      description: g.data.description,
      pubDate: g.data.updatedDate ?? g.data.pubDate,
      link: `/guides/${g.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
