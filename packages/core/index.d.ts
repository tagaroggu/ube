import type { Ref } from '@vue/reactivity';
export declare enum ItemType {
    Item = "ITEM",
    Coupon = "COUPON"
}
export interface GenericItem {
    id: string | symbol | number;
    name?: string;
    taxable: boolean;
    count: number;
    price: number;
    type: ItemType;
}
export interface Item extends GenericItem {
    type: ItemType.Item;
}
export interface Coupon extends GenericItem {
    type: ItemType.Coupon;
    taxable: false;
    count: 1;
}
export declare const useTransaction: () => Ref<GenericItem[]>;
export declare const preTax: (store: Ref<GenericItem[]> | GenericItem[]) => number;
export declare const taxOnly: (store: Ref<GenericItem[]> | GenericItem[], tax: number) => number;
