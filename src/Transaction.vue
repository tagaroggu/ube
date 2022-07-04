<script setup>
    const { transaction } = defineProps({'transaction': Object});
</script>

<template>
	<br>
    <ul class="font-mono">
        <li v-for="item in transaction.transaction">{{ item.taxable ? 'T ' : '&nbsp;&nbsp;' }}{{ item.name.slice(0, 20) }}{{ '&nbsp;'.repeat(Math.max(20-item.name.length, 0)) }} {{ item.count * item.price * (item.taxable ? transaction.tax : 1) }}</li>
    </ul>
    <p>pretax: ${{ transaction.pretax }}</p>
    <p>tax: ${{transaction.taxOnly}}</p>
    <p>total: ${{ transaction.total }}</p>
</template>
