import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const externalLinkSchema = z.object({
  label: z.string(),
  href: z.url(),
});

const actionSchema = z.object({
  label: z.string(),
  href: z.url().optional(),
  help: z.string().optional(),
  secondary: externalLinkSchema.optional(),
});

const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/home' }),
  schema: z.object({
    meta: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      lead: z.string(),
      choiceTitle: z.string(),
      choiceText: z.string(),
    }),
    paths: z.array(
      z.object({
        id: z.enum(['schwestern', 'brueder']),
        label: z.string(),
        person: z.string(),
      }),
    ),
    belief: z.object({ title: z.string(), paragraphs: z.array(z.string()) }),
    videos: z.object({
      title: z.string(),
      intro: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          summary: z.string(),
          note: z.string().optional(),
          href: z.url(),
          label: z.string(),
        }),
      ),
      privacyNote: z.string(),
    }),
    topics: z.object({
      title: z.string(),
      items: z.array(z.object({ title: z.string(), text: z.string() })),
    }),
    boundary: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()),
      crisisLead: z.string(),
      crisisPlaceholder: z.string(),
    }),
    peopleTitle: z.string(),
    people: z.array(
      z.object({
        id: z.enum(['jessica', 'mario']),
        path: z.enum(['schwestern', 'brueder']),
        audience: z.string(),
        name: z.string(),
        intro: z.string(),
        qualification: z.string(),
        freeDuration: z.string(),
        sessionDuration: z.string(),
        price: z.string(),
        booking: actionSchema,
        whatsapp: actionSchema,
        formLabel: z.string(),
      }),
    ),
    process: z.object({
      title: z.string(),
      steps: z.array(z.object({ title: z.string(), text: z.string() })),
    }),
    privacy: z.object({ title: z.string(), paragraphs: z.array(z.string()) }),
    faq: z.object({
      title: z.string(),
      items: z.array(z.object({ question: z.string(), answer: z.string() })),
    }),
    closing: z.object({ title: z.string(), text: z.string() }),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contact' }),
  schema: z.object({
    path: z.enum(['schwestern', 'brueder']),
    person: z.string(),
    meta: z.object({ title: z.string(), description: z.string() }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      subtitle: z.string(),
      lead: z.string(),
    }),
    booking: z.object({
      title: z.string(),
      text: z.string(),
      ...actionSchema.shape,
    }),
    whatsapp: z.object({
      title: z.string(),
      text: z.string(),
      ...actionSchema.shape,
    }),
    form: z.object({
      title: z.string(),
      text: z.string(),
      fields: z.array(
        z.object({
          label: z.string(),
          optional: z.boolean(),
          help: z.string().optional(),
        }),
      ),
      privacyPlaceholder: z.string(),
      submitLabel: z.string(),
      unavailable: z.string(),
    }),
    boundary: z.object({
      title: z.string(),
      text: z.string(),
      crisisPlaceholder: z.string(),
    }),
    closing: z.object({ title: z.string(), actions: z.array(z.string()) }),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    notice: z.string(),
    externalServices: z
      .array(
        z.object({
          title: z.string(),
          paragraphs: z.array(z.string()),
          privacyLabel: z.string(),
          privacyUrl: z.url(),
        }),
      )
      .optional(),
  }),
});

export const collections = { home, contact, legal };
