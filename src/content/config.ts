import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    date: z.date(),
    readtime: z.number(),
    description: z.string(),
  }),
});

export const collections = { blogCollection };
