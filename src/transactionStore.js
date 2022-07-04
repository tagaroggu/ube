export const useTransaction = defineStore('transaction', {
    state: () => ({
        transaction: [],
        tax: 1.05, // Change to whatever is the tax in the local area; 5% here
        currencySymbol: '$'
    }),
    actions: {
        addItem(id, name, count, price, taxable) {
            // Prices are recommended to be add as 100x their original price to do integer math as opposed to float math
            this.transaction.push({ id, name, count, price, taxable })
        }
    },
    getters: {
        // Take each item in the transaction, check if it is taxable, apply if so, and add resulting price to total
        pretax: (state) => state.transaction.reduce((p, c) => p + (c.price * c.count), 0),
        total: (state) => state.transaction.reduce((p, c) => p + (c.price * c.count * (c.taxable ? state.tax : 1)), 0),
        taxOnly: (state) => state.transaction.reduce((p, c) => p + (c.taxable ? c.price * (state.tax - 1) : 0), 0).toFixed(2)
    }
});