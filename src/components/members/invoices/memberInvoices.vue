<script setup lang="ts"></script>
<template>
  <VTabs
    selected="subscription"
    :tabs="[
      { label: 'Subscription Invoice', value: 'subscription' },
      { label: 'Product Invoice', value: 'product' },
      { label: 'Charge Invoice', value: 'charge' },
    ]"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'subscription'">
        <susbscriptionInvoiceTable />
      </div>
      <div v-else-if="activeValue === 'product'">
        <productInvoiceTable />
      </div>
      <div v-else-if="activeValue === 'charge'">
        <chargeInvoiceTable />
      </div>
    </template>
  </VTabs>
</template>
