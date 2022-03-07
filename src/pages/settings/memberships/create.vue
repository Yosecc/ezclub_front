<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCompany, locations } from '/@src/models/Companies.ts'
import { getTaxes, taxes } from '/@src/services/config.ts'
import {
  setInputValuesData,
  setInputModelData,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import { inputs } from '/@src/models/Memberships.ts'

const isLoading = ref(true)

onMounted(() => {
  cleanUpModelInputs(inputs.value)
  getTaxes().then(() => {
    setInputValuesData(inputs, 'taxes_id', taxes)
  })
  getCompany().then(() => {
    setInputValuesData(
      inputs,
      'locations',
      locations.value.filter((e) => e.status == 1)
    )
  })
  getRecurrences().then(() => {
    setInputValuesData(inputs, 'amounts', recurrences)
    let model = {}
    recurrences.value.forEach((element) => {
      model[element.id] = ''
    })
    setInputModelData(inputs, 'amounts', model)
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
