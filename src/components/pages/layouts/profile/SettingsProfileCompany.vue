<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps } from 'vue'
import { API_WEB_URL } from '/@src/services'
const props = defineProps({
  company: {
    type: [Object, Array],
    default: null,
  },
})

const menu = ref([
  {
    name: 'Memberships',
    subname: 'Manage memberships',
    toName: 'settings-memberships',
    icon: 'lnil lnil-gift-alt-1',
  },
  {
    name: 'Products',
    subname: 'Manage products',
    toName: 'settings-products',
    icon: 'lnil lnil-package',
  },
  {
    name: 'Inventory',
    subname: 'Inventory products',
    toName: 'settings-inventory',
    icon: 'lnir lnir-tablet-alt',
  },
  {
    name: 'Staff',
    subname: 'Manage Team',
    toName: 'settings-staff',
    icon: 'lnil lnil-users',
  },
  {
    name: 'Discounts',
    subname: 'Manage discounts',
    toName: 'settings-discounts',
    icon: 'lnil lnil-customer',
  },
  {
    name: 'Reports',
    subname: 'Create reports',
    toName: 'settings-reports',
    icon: 'lnil lnil-stats-up',
  },
  // {
  //   name: 'Reports',
  //   subname: 'Create reports',
  //   toName: 'settings-reports',
  //   icon: 'lnil lnil-calender-alt-3'
  // },
  {
    name: 'Schedule',
    subname: 'Create schedule',
    toName: 'settings-schedule',
    icon: 'lnil lnil-calender-alt-3',
  },
  {
    name: 'Permissions',
    subname: 'Manage permissions',
    toName: 'settings-permissions',
    icon: 'lnil lnil-block-user',
  },
  {
    name: 'Club Profile',
    subname: 'Manage club information',
    toName: 'settings-clubinformation',
    icon: 'lnil lnil-apartment',
  },
  {
    name: 'Disciplines',
    subname: 'Manage disciplines',
    toName: 'settings-disciplines',
    icon: 'lnil lnil-bi-cycle',
  },
])
</script>
<template>
  <div class="profile-wrapper" v-if="company">
    <div class="profile-header has-text-centered">
      <V-Avatar size="xl" :picture="`${API_WEB_URL}storage/${company.logo}`" />

      <h3 class="title is-4 is-narrow">{{ company.company_name }}</h3>
      <p class="light-text">
        This are the main setting for your system, please select an option and
        work accordantly
      </p>
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
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/profile/_user-profile.scss';
</style>
