<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'

import {
  getCompany,
  input_image,
  inputsInformation,
  inputsContacto,
} from '/@src/models/Companies.ts'

import {
  setInputModelData,
  setInputValuesData,
  perpareDataInputs,
} from '/@src/models/Mixin.ts'

import {
  getcities,
  getstates,
  getcontries,
  cities,
  states,
  contries,
} from '/@src/services/config.ts'

pageTitle.value = 'Club Profile'
useHead({
  title: 'Club',
})

const loading = ref(true)

onMounted(() => {
  getcities().then((response) => {
    setInputValuesData(inputsInformation, 'company_city_id', cities.value)
    setInputValuesData(inputsContacto, 'contact_city_id', cities.value)
  })
  getstates().then((response) => {
    setInputValuesData(inputsInformation, 'company_state_id', states.value)
    setInputValuesData(inputsContacto, 'contact_state_id', states.value)
  })
  getcontries().then((response) => {
    setInputValuesData(inputsInformation, 'company_country_id', contries.value)
    setInputValuesData(inputsContacto, 'contact_country_id', contries.value)
  })
  getCompany().then((response) => {
    console.log(response.data)
    setInputModelData(input_image, 'logo', response.data.logo)
    for (var i in response.data) {
      setInputModelData(inputsInformation, i, response.data[i])
      setInputModelData(inputsContacto, i, response.data[i])
    }
    loading.value = false
  })
})
const Component = ref('clubInformation')

const changeMenu = (val) => {
  Component.value = val.value
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div v-if="!loading" class="columns is-multiline">
        <div class="column is-3">
          <clubProfileMenu @changeMenu="changeMenu" />
        </div>
        <div class="column is-9">
          <clubInformation v-show="Component == 'clubInformation'" />
          <clubRepresentatives v-show="Component == 'clubRepresentatives'" />
          <!--  <clubPayment
          v-show="Component == 'clubPayment'"
        /> -->
          <!-- <clubSubscription
        v-show="Component == 'clubSubscription'"
        /> -->
          <clubLocation v-show="Component == 'clubLocation'" />
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
