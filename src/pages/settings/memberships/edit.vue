<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCompany, locations } from '/@src/models/Companies.ts'
import { getTaxes, taxes } from '/@src/services/config.ts'
import {
  setInputValuesData,
  setInputModelData,
  getInput,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import { inputs, getMembership } from '/@src/models/Memberships.ts'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const isLoading = ref(true)

onMounted(() => {
  let campos = ['all_diciplines']
  cleanUpModelInputs(inputs.value.filter((e) => !campos.includes(e.name)))
  getTaxes().then(() => {
    setInputValuesData(inputs, 'taxes_id', taxes)
  })
  getCompany().then(() => {
    setInputValuesData(inputs, 'locations', locations)
  })
  getRecurrences().then(() => {
    setInputValuesData(inputs, 'amounts', recurrences)
    let model = {}
    recurrences.value.forEach((element) => {
      model[element.id] = ''
    })
    setInputModelData(inputs, 'amounts', model)
    isLoading.value = false

    // console.log(inputs)
    getMembership(route.query.id).then((response) => {
      for (var i in response.data) {
        if (i == 'amounts') {
          response.data[i].forEach((element) => {
            getInput(inputs.value, 'amounts').model[element.recurrences_id] =
              element.amount
          })
        } else if (i == 'locations') {
          getInput(inputs.value, 'locations').model = []
          response.data[i].forEach((element) => {
            getInput(inputs.value, 'locations').model.push(
              element.companies_locations_id
            )
          })
        } else if (i == 'membership_diciplines') {
          response.data[i].forEach((element) => {
            getInput(inputs.value, 'diciplines').model.push(
              element.diciplines_id
            )
          })
        } else {
          setInputModelData(inputs, i, response.data[i])
        }
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
