import { ref, unref } from '@vue/reactivity';
export var ItemType;
(function (ItemType) {
    ItemType["Item"] = "ITEM";
    ItemType["Coupon"] = "COUPON";
})(ItemType || (ItemType = {}));
export const useTransaction = () => ref([]);
export const preTax = (store) => unref(store).reduce((price, item) => price + (item.price * item.count), 0);
export const taxOnly = (store, tax) => unref(store).filter(item => item.taxable).reduce((price, item) => price + (item.price * item.count * tax), 0);
