<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { getCompany } from '/@src/models/Companies.ts'
import { getTrainers } from '/@src/models/Staffs.ts'
import {
  setInputModelData,
  getInput,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
const route = useRoute()
pageTitle.value = 'Edit Discipline'

import { inputs, getDicipline } from '/@src/models/Diciplines.ts'

useHead({
  title: 'Disciplines',
})

const isLoading = ref(true)
onMounted(() => {
  cleanUpModelInputs(inputs.value)
  getCompany()
  getTrainers().then((response) => {
    isLoading.value = false
  })
  getDicipline(route.query.id).then((response) => {
    for (var i in response.data) {
      if (i == 'status') {
        if (response.data[i] == 1) {
          getInput(inputs.value, 'status').model = ['status']
        } else {
          getInput(inputs.value, 'status').model = []
        }
      } else if (i == 'locations') {
        response.data[i].forEach((element) => {
          getInput(inputs.value, 'locations').model.push(
            element.companies_locations_id
          )
        })
      } else if (i == 'diciplines_staffs') {
        response.data[i].forEach((element) => {
          getInput(inputs.value, 'trainers').model.push(element.staffs_id)
        })
      } else {
        setInputModelData(inputs, i, response.data[i])
      }
    }
  })

  // console.log(inputs.value)
})
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <disciplinesForm type="edit" :is-loading="isLoading" />
    </div>
  </SidebarLayout>
</template>
