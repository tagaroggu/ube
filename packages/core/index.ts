import { reactive, ref, computed, unref } from '@vue/reactivity';
import type { Ref } from '@vue/reactivity';

export enum ItemType {
    Item = "ITEM",
    Coupon = "COUPON"
}

export interface GenericItem {
    id: string | symbol | number,
    name?: string,
    taxable: boolean,
    count: number,
    price: number,
    type: ItemType

}

export interface Item extends GenericItem {
    type: ItemType.Item
}

export interface Coupon extends GenericItem {
    type: ItemType.Coupon,
    taxable: false
    count: 1
}
export const useTransaction = () => ref([]) as Ref<GenericItem[]>;
export const preTax = (store: Ref<GenericItem[]> | GenericItem[]) => unref(store).reduce((price, item) => price + (item.price * item.count), 0);
export const taxOnly = (store: Ref<GenericItem[]> | GenericItem[], tax: Ref<number> | number) => unref(store).filter(item => item.taxable).reduce((price, item) => price + (item.price * item.count * unref(tax)), 0)