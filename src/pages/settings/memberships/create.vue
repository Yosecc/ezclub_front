<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getCompany, locations, company } from '/@src/models/Companies.ts'
import { getTaxes, taxes } from '/@src/services/config.ts'
import {
  setInputValuesData,
  setInputModelData,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import {
  inputs,
  inputsRecurrentes,
  inputsUnicos,
  notes,
  inputsConfig,
} from '/@src/models/Memberships.ts'
import { getDiscounts } from '/@src/models/Discounts.ts'

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

const isLoading = ref(true)

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
    let recurring = []
    setInputValuesData(
      inputsRecurrentes,
      'amounts_recurring',
      recurrences.value.filter((e) => e.days >= 30)
    )
    setInputValuesData(
      inputsUnicos,
      'amounts_uniques',
      recurrences.value.filter((e) => e.days <= 30)
    )
    isLoading.value = false
  })
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <membershipForm :is-loading="isLoading" type="create" />
    </div>
  </SidebarLayout>
</template>
