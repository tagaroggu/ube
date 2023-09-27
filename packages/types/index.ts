import { z } from 'zod';
import { Item as sItem, Items as sItems } from '@ube/schemas';

type Item = z.infer<typeof sItem>;
type Items = z.infer<typeof sItems>;

export type { Item, Items }