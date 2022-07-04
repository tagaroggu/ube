<!--
    The register I've used has a few main sections: A top (that I'm choosing to
    call the header), the receipt which shows items and other info, the items
    menu which allows buttons to add items to the transaction and it can show
    other information, and the bottom (footer) which contains buttons to the
    settings, and maybe other stuff. 
-->

<script setup>
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    import Transaction from './Transaction.vue';
    import { useTransaction } from './transactionStore.js';

    const transaction = useTransaction();

    transaction.addItem(1235, 'hi', 1, 1, true);
    transaction.addItem(22, 'hola', 25, 2, false);
    transaction.addItem(112, 'asdfhajsdfjalsdfhkaasdfasdfa', 1, -2, false);
</script>
<template>
    <Header />
        <Transaction :transaction="transaction" />
    <Footer />
</template>
