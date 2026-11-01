// One source of truth for every page link on the site.
// Header, footer, hub pages and the sitemap check all read from here,
// so a page can't exist without being linked.

export const phone = { display: '(585) XXX-XXXX', tel: '+1585XXXXXXX' };

export type Link = { label: string; href: string };

export const serviceGroups: { title: string; links: Link[] }[] = [
  {
    title: 'Driveways',
    links: [
      { label: 'Asphalt Driveway Paving', href: '/services/asphalt-driveway-paving/' },
      { label: 'Asphalt Driveway Sealing', href: '/services/asphalt-driveway-sealing/' },
      { label: 'Asphalt Driveway Repair', href: '/services/asphalt-driveway-repair/' },
      { label: 'Resurfacing and Overlays', href: '/services/asphalt-resurfacing-overlays/' },
    ],
  },
  {
    title: 'Parking Lots',
    links: [
      { label: 'Parking Lot Paving', href: '/services/asphalt-parking-lot-paving/' },
      { label: 'Parking Lot Repair', href: '/services/asphalt-parking-lot-repair/' },
    ],
  },
  {
    title: 'Lower Cost Options',
    links: [
      { label: 'Recycled Asphalt Millings', href: '/services/recycled-asphalt-millings/' },
      { label: 'Gravel Driveways', href: '/services/gravel-driveways/' },
    ],
  },
];

export const servicesHub: Link = { label: 'All Paving Services', href: '/services/' };
export const costPage: Link = { label: 'Asphalt Driveway Cost in Rochester', href: '/asphalt-driveway-cost/' };
export const guidesHub: Link = { label: 'Paving Guides', href: '/guides/' };

// Monroe County's 20 towns (East Rochester is a town and village with the same borders), grouped by where they sit.
export const areaGroups: { title: string; links: Link[] }[] = [
  {
    title: 'Lake Ontario Shore',
    links: ['Greece', 'Hamlin', 'Irondequoit', 'Parma', 'Webster'].map(town),
  },
  {
    title: 'West Side',
    links: ['Chili', 'Clarkson', 'Gates', 'Ogden', 'Riga', 'Sweden'].map(town),
  },
  {
    title: 'East Side',
    links: ['Brighton', 'East Rochester', 'Penfield', 'Perinton', 'Pittsford'].map(town),
  },
  {
    title: 'South Side',
    links: ['Henrietta', 'Mendon', 'Rush', 'Wheatland'].map(town),
  },
];

export const rochesterLink: Link = { label: 'Rochester, NY', href: '/' }; // home page is the Rochester page
export const areasHub: Link = { label: 'All Areas We Serve', href: '/service-areas/' };

export const companyLinks: Link[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const legalLinks: Link[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
];

function town(name: string): Link {
  return { label: name, href: `/service-areas/${name.toLowerCase().replace(/ /g, '-')}-ny/` };
}

// Every indexable page. Used to check for orphans.
export const allPages: string[] = [
  '/',
  servicesHub.href,
  ...serviceGroups.flatMap((g) => g.links.map((l) => l.href)),
  areasHub.href,
  ...areaGroups.flatMap((g) => g.links.map((l) => l.href)),
  costPage.href,
  guidesHub.href, // each guide is linked from this hub and from its money page
  '/about/',
  '/contact/',
  ...legalLinks.map((l) => l.href),
];
