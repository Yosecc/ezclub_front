<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { inputsLocation, storeLocation } from '/@src/models/Companies.ts'

import {
  cities,
  states,
  contries,
  getAllConfig,
} from '/@src/services/config.ts'

import {
  setInputValuesData,
  setInputModelData,
  perpareDataInputs,
} from '/@src/models/Mixin.ts'

pageTitle.value = 'Edit Locations'

useHead({
  title: 'Locations',
})

const route = useRoute()

onMounted(() => {
  if (route.query.id != undefined) {
    getAllConfig().then((response) => {
      setInputValuesData(inputsLocation, 'city_id', cities.value)
      setInputValuesData(inputsLocation, 'state_id', states.value)
      setInputValuesData(inputsLocation, 'country_id', contries.value)
    })
  }
})

const saveData = () => {
  const data = perpareDataInputs(inputsLocation.value)
  console.log(data)
  const fd = new FormData()
  for (var i in data) {
    fd.append(i, data[i])
  }
  // console.log(...fd)
  storeLocation(fd).then((response) => {
    console.log(response.data)
  })
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <locationsForm type="edit" @saveData="saveData" />
    </div>
  </SidebarLayout>
</template>
