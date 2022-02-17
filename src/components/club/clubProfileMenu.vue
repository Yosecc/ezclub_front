<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, defineEmit, defineProps } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { company } from '/@src/models/Companies.ts'

const props = defineProps({
  category: {
    type: String,
    default: 'Adult',
  },
})

const itemsMenu = [
  {
    name: 'Club Information',
    component: 'clubInformation',
  },
  {
    name: 'Club Contact',
    component: 'clubRepresentatives',
  },
  // {
  //   name:'Club Payment Methods',
  //   component: 'clubPayment'
  // },

  // {
  //   name:'Club Subscription',
  //   component: 'clubSubscription'
  // },
  {
    name: 'Club Locations',
    component: 'clubLocation',
  },
]

const menuActive = ref(0)

const componentDefault = ref(null)

const componentActive = computed(() => {
  if (itemsMenu[menuActive.value] != null) {
    return itemsMenu[menuActive.value].component
  }
  return componentDefault.value
})

const emit = defineEmit(['changeMenu'])

const change = (key) => {
  // console.log(key)
  menuActive.value = key
  emit('changeMenu', componentActive)
}
</script>

<template>
  <VCard>
    <!-- <p>{{ company }}</p> -->
    <div class="d-flex">
      <VAvatar picture="https://picsum.photos/150/151" size="large" />
      <div class="ml-3">
        <h2 class="title is-4 is-narrow">{{ company.company_name }}</h2>
        <p>Club ID# {{ company.id }}</p>
      </div>
    </div>
    <div class="w-100 mt-5">
      <ul>
        <li v-for="(item, key) in itemsMenu" :key="`item-${key}`">
          <VCard
            class="
              mb-3
              item_menu
              d-flex
              justify-content-between
              align-items-center
            "
            :class="menuActive == key ? 'active' : ''"
            :color="menuActive == key ? 'warning' : undefined"
            :elevated="menuActive == key"
            @click="change(key)"
          >
            <p>
              {{ item.name }}
            </p>
            <i
              class="iconify"
              style="font-size: 20px; color: white"
              data-icon="feather:arrow-right"
              aria-hidden="true"
            ></i>
          </VCard>
        </li>
      </ul>
    </div>
  </VCard>
</template>

<style lang="scss" scope>
.item_menu {
  cursor: pointer;
  &.active {
    p {
      color: black !important;
      font-weight: 900;
    }
  }
  &:hover {
  }
}
</style>
