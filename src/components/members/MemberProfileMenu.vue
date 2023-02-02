<script setup lang="ts">
import { computed, ref, watch, defineEmit, defineProps, onMounted } from 'vue'
import {
  member,
  memberMermship,
  DueDate,
  isSolvente,
} from '/@src/models/Members.ts'
import moment from 'moment'
import { API_WEB_URL } from '/@src/services'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  category: {
    type: String,
    default: 'Adult',
  },
})

watch(
  () => route.hash,
  (to) => {
    menuActive.value = itemsMenuAdult.findIndex(
      (e) => e.component == route.hash.slice(1)
    )
  }
)

onMounted(() => {
  if (route.hash != '') {
    menuActive.value = itemsMenuAdult.findIndex(
      (e) => e.component == route.hash.slice(1)
    )
  }
})

const itemsMenuAdult = [
  {
    name: 'Personal Information',
    component: 'personalInformation',
  },
  // {
  //   name:'Credit Card',
  //   component: 'memberCreditCard'
  // },
  {
    name: 'Subscription',
    component: 'susbcriptionIndex',
  },
  {
    name: 'Membership/Contract',
    component: 'memberMembership',
  },
  {
    name: 'Family Members',
    component: 'memberFamily',
  },
  {
    name: 'Emergency',
    component: 'memberEmergency',
  },
  {
    name: 'Check-ins',
    component: 'memberCheckins',
  },
  {
    name: 'Purchases',
    component: 'memberPurchases',
  },
  {
    name: 'Invoices',
    component: 'memberInvoices',
  },
  {
    name: 'Credit',
    component: 'memberCredit',
  },
]

const itemsMenuMinor = [
  {
    name: 'Personal Information',
    component: 'personalInformation',
  },
  {
    name: 'Subscription',
    component: 'susbcriptionIndex',
  },
  {
    name: 'Membership/Contract',
    component: 'memberMembership',
  },
  {
    name: 'Parent / Guardian',
    component: 'memberFamily',
  },
  {
    name: 'Emergency',
    component: 'memberEmergency',
  },
  {
    name: 'Check-ins',
    component: 'memberCheckins',
  },
  {
    name: 'Purchases',
    component: 'memberPurchases',
  },
  {
    name: 'Credit',
    component: 'memberCredit',
  },
  {
    name: 'Invoices',
    component: 'memberInvoices',
  },
]

const itemsMenuProspect = [
  {
    name: 'Personal Information',
    component: 'personalInformation',
  },
  // {
  //   name:'Credit Card',
  //   component: 'memberCreditCard'
  // },
  {
    name: 'Membership/Contract',
    component: 'memberMembership',
  },
  // {
  //   name: 'Family Members',
  //   component: 'memberFamily',
  // },
  {
    name: 'Emergency',
    component: 'memberEmergency',
  },
  {
    name: 'Check-ins',
    component: 'memberCheckins',
  },
  {
    name: 'Purchases',
    component: 'memberPurchases',
  },
  {
    name: 'Invoices',
    component: 'memberInvoices',
  },
  {
    name: 'Credit',
    component: 'memberCredit',
  },
]

const menuMemberProfile = computed(() => {
  if (props.category == 'Adult') {
    return itemsMenuAdult
  } else if (props.category == 'Minor') {
    return itemsMenuMinor
  } else {
    return itemsMenuProspect
  }
})

const menuActive = ref(0)

const componentDefault = ref(null)

const componentActive = computed(() => {
  if (menuMemberProfile.value[menuActive.value] != null) {
    return menuMemberProfile.value[menuActive.value].component
  }
  return componentDefault.value
})

const emit = defineEmit(['changeMenu'])

const change = (key) => {
  menuActive.value = key
  emit('changeMenu', componentActive)
}
</script>

<template>
  <VCard class="cardprofile" v-if="member">
    <div
      class="d-flex justify-content-center align-items-center flex-column mb-4"
    >
      <VAvatar
        :picture="member.photo ? `${API_WEB_URL}storage/${member.photo}` : ''"
        size="xl"
      />

      <div class="mt-5 text-center">
        <!-- <p>{{ member }}</p> -->
        <h2 class="title is-5 is-narrow">
          {{ member.name }} {{ member.second_name }} {{ member.last_name }}
        </h2>
      </div>
    </div>

    <div class="w-100 mt-5">
      <ul>
        <li v-for="(item, key) in menuMemberProfile" :key="`item-${key}`">
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
