import { z } from 'zod';

const Item = z.object({
    id: z.string().describe('Like a UPC code, but could really by any string. Does not need to be unique for every item but should be distinguishable'),
    displayName: z.string().describe('A name that can be used on a receipt or an item list'),
    price: z.number().describe("The price of the item"),
    taxable: z.boolean().describe("Whether or not an item should be taxed."),
    count: z.number().int().default(1).describe("How many of the item. Must be an integer. Defaults to 1.")
});

const Items = z.array(Item)

export { Item, Items }