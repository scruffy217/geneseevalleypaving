import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Paving Guides: informational "how, when, why, which" articles only.
// Each guide answers ONE question and supports ONE money page.
// That rule is what keeps guides from competing with service, town and cost pages.
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),          // meta description, 155 to 160 characters
    question: z.string(),             // the one question this guide answers
    moneyPage: z.string(),            // the service or cost page this guide supports, e.g. /services/gravel-driveways/
    moneyPageLabel: z.string(),       // anchor text for that link
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
