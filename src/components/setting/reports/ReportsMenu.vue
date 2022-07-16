<script setup lang="ts">
import { ref } from 'vue'

const menu = ref([
  {
    name: 'Sales Report By Date',
    subname: 'Sales Reports By Date',
    toName: 'settings-reports-date',
    icon: 'lnil lnil-gift-alt-1',
  },
  {
    name: 'New Members',
    subname: 'New Memebers By Date',
    toName: 'settings-reports-members',
    icon: 'lnil lnil-gift-alt-1',
  },
  {
    name: 'Memebership Cancelled',
    subname: 'Memebership Cancelled',
    toName: 'settings-reports-memberships-cancelled',
    icon: 'lnil lnil-gift-alt-1',
  },
  {
    name: 'Members Without Payment Method',
    subname: 'Members Without Payment Method',
    toName: 'settings-reports-member-without-payment-method',
    icon: 'lnil lnil-gift-alt-1',
  },
  {
    name: 'Due invoices',
    subname: 'Due invoices',
    toName: 'settings-reports-due',
    icon: 'lnil lnil-gift-alt-1',
  },
  {
    name: 'Stripe Transactions',
    subname: 'Stripe Transactions',
    toName: 'settings-reports-stripe',
    icon: 'lnil lnil-gift-alt-1',
  },
])
</script>
<template>
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <h3 class="title is-4 is-narrow">Reports</h3>
    </div>

    <div class="profile-body">
      <div class="settings-section">
        <router-link
          :to="{ name: item.toName }"
          v-for="(item, key) in menu"
          :key="`item-${key}`"
          class="settings-box"
        >
          <div class="edit-icon">
            <i aria-hidden="true" class="lnil lnil-pencil"></i>
          </div>

          <V-IconWrap :icon="item.icon" />

          <span>{{ item.name }}</span>
          <h3>{{ item.subname }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/pages/profile/_user-profile.scss';
</style>
