<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getCompany, locations, company } from '/@src/models/Companies.ts'
import { getTaxes, taxes } from '/@src/services/config.ts'
import {
  setInputValuesData,
  setInputModelData,
  getInput,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import {
  inputs,
  getMembership,
  inputsRecurrentes,
  inputsUnicos,
  inputsConfig,
  notes,
} from '/@src/models/Memberships.ts'
import { getDiscounts } from '/@src/models/Discounts.ts'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const isLoading = ref(true)

watch(
  () => company.value,
  () => {
    setInputValuesData(
      inputs,
      'locations',
      locations.value.filter((e) => e.status == 1)
    )
  }
)

onMounted(() => {
  let campos = ['all_diciplines']
  cleanUpModelInputs(inputs.filter((e) => !campos.includes(e.name)))
  cleanUpModelInputs(inputsRecurrentes)
  cleanUpModelInputs(inputsUnicos)
  cleanUpModelInputs(notes)
  cleanUpModelInputs(inputsConfig)
  getDiscounts(1, 'membership').then((response) => {
    setInputValuesData(inputsConfig, 'descuento_vet', response.data.discounts)
  })
  getRecurrences().then(() => {
    setInputValuesData(inputsRecurrentes, 'amounts_recurring', recurrences)
    setInputValuesData(inputsUnicos, 'amounts_uniques', recurrences)
    isLoading.value = false
    getMembership(route.query.id).then((response) => {
      console.log(response.data)
      for (var i in response.data) {
        setInputModelData(inputs, i, response.data[i])
        setInputModelData(inputsConfig, i, response.data[i])
        setInputModelData(notes, i, response.data[i])
        setInputModelData(inputsRecurrentes, i, response.data[i])
        setInputModelData(inputsUnicos, i, response.data[i])
      }
    })
  })
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <membershipForm :is-loading="isLoading" type="edit" />
    </div>
  </SidebarLayout>
</template>
