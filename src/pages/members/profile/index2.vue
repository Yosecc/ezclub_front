<script setup lang="ts">
import { useHead } from '@vueuse/head'
import {
  computed,
  ref,
  onMounted,
  watch,
  onBeforeMount,
  defineProps,
} from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import moment from 'moment'
import {
  inputsInformation,
  parentInsputs,
  inputsFamily,
  emergencyInputs,
  membershipsData,
  getMember,
  memberMermship,
  member,
  isSolvente,
  sinMembresia,
  DueDate,
  storeNewMembership,
} from '/@src/models/Members.ts'

import { getDiscounts } from '/@src/models/Discounts.ts'
import { getMeberships } from '/@src/models/Memberships.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import { getTrainers } from '/@src/models/Staffs.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputModelData,
  setInputValuesData,
  getValueInput,
  getInput,
  perpareDataInputs,
  notyf,
} from '/@src/models/Mixin.ts'
import { getAllConfig } from '/@src/services/config.ts'
import { getCompany, locations } from '/@src/models/Companies.ts'

import { getSuscripcionCode, suscripcion } from '/@src/models/Subscriptions'

const router = useRouter()
const route = useRoute()

pageTitle.value = 'Member Profile'
useHead({
  title: 'Members',
})

const renewMembership = ref(false)
const Component = ref('personalInformation')

const changeMenu = (val) => {
  Component.value = val.value
}

watch(
  () => route.query,
  (to, o) => {
    // console.log(route)
    if (Object.keys(to).length > 0) {
      mountMember()
      reloadPage()
    }
  }
)

const mensaje = ref('ERROR MEMBERSHIP')
const subMensaje = ref('')

watch(member, (to) => {
  if (to.sinMembresia) {
    mensaje.value = 'NO MEMBERSHIP'
    subMensaje.value = 'Please, select a membership'
  }

  if (!to.isSolvente && !to.sinMembresia && to.subscription) {
    mensaje.value = `Membership ${to.subscription.status}`
    subMensaje.value =
      to.subscription.latest_invoice &&
      to.subscription.latest_invoice.payments_intents &&
      to.subscription.latest_invoice.payments_intents.length > 0
        ? `Last payment status : ${to.subscription.latest_invoice.payments_intents[0].status}`
        : ''
  }
  if (
    to.subscription &&
    to.subscription.subscription &&
    !to.subscription.latest_invoice
  ) {
    subMensaje.value = `Last payment status : ${to.subscription.subscription.status}`
  }

  if (to.membership_members) {
    if (to.membership_members.cacelation_date) {
      subMensaje.value = `Cancel date : ${moment(
        to.membership_members.cacelation_date
      ).format('MM-DD-YYYY')}`
    }
  }
})

watch(
  () => route.hash,
  (to) => {
    Component.value = route.hash.slice(1)
  }
)
watch(
  () => route.query.id,
  (to) => {
    Component.value = 'personalInformation'
  }
)

const isLoading = ref(true)

const reloadPage = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const suscripcionData = ref(null)

onMounted(() => {
  if (route.hash != '') {
    Component.value = route.hash.slice(1)
  }

  getCompany().then((response) => {
    setInputValuesData(membershipsData, 'locations_id', locations.value)
    setInputValuesData(membershipsData, 'locations', locations.value)
  })
  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'country_id', response.contries)
    setInputValuesData(inputsInformation, 'city_id', response.cities)
    setInputValuesData(inputsInformation, 'state_id', response.states)

    setInputValuesData(inputsFamily, 'city_id', response.cities)
    setInputValuesData(inputsFamily, 'state_id', response.states)
    setInputValuesData(inputsFamily, 'country_id', response.contries)

    setInputValuesData(parentInsputs.value, 'city_id', response.cities)
    setInputValuesData(parentInsputs.value, 'state_id', response.states)
    setInputValuesData(parentInsputs.value, 'country_id', response.contries)
  })
  getMeberships(1).then((response) => {
    setInputValuesData(
      membershipsData,
      'memberships_id',
      response.data.memberships
    )
  })
  getDiscounts().then((response) => {
    setInputValuesData(membershipsData, 'discount', response.data.discounts)
  })
  getRecurrences().then((response) => {
    // console.log(response.data)
    setInputValuesData(membershipsData, 'recurrences_id', response.data)
  })
  getTrainers().then((response) => {
    setInputValuesData(membershipsData, 'staff_id', response.data)
  })

  if (route.query.id != undefined) {
  }

  if (route.query.code != undefined) {
    isLoading.value = false
    getSuscripcionCode(route.query.code).then((response) => {
      suscripcionData.value = response.data.suscripcion
      if (response.data.suscripcion.member) {
        member.value = response.data.suscripcion.member
        router.push({
          name: 'members-profile',
          query: {
            id: response.data.suscripcion.member.id,
          },
          hash: '#susbcriptionIndex',
        })
      }
    })
  }
})
</script>

<template>
  <SidebarLayout>
    <div>
      <subscriptionIndex :suscripcion="suscripcionData" />

      <!-- <personalInformation
        v-if="suscripcionData.estado.meses_pagados > 0 && !member"
        :category="''"
        :suscripcion="suscripcionData"
        :user="suscripcionData.user"
      /> -->
    </div>
  </SidebarLayout>
</template>
