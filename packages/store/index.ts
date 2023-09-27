import { atom, computed, onSet, action } from 'nanostores';
import type { Item } from '@ube/types';
import { Items } from '@ube/schemas';

const tax = atom<false | ((arg0: number) => number)>(false);

const items = atom<Item[]>([]);

const subtotal = computed([items], (items) => {
    return items.reduce((price, item) => {
        return price + (item.count * item.price)
    }, 0)
})

const taxOnly = computed([items, tax], (items, tax) => {
    if (!tax) return 0;
    return tax(items.filter(item => item.taxable).reduce((amount, item) => {
        return amount + (item.count * item.price)
    }, 0))
})

const addItem = action(items, 'addItem', (store, newItem) => {
    const current = store.get();
    store.set([...current, newItem]);
})

onSet(items, ({ newValue, abort}) => {
    if (!Items.safeParse(newValue).success) abort();
})

const reset = action(items, 'reset', (store) => {
    store.set([])
})

export { tax, items, subtotal, taxOnly, addItem, reset }