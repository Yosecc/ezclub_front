<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
// import { Api } from '/@src/services'
import { inputsLocation, storeLocation } from '/@src/models/Companies.ts'
const router = useRouter()
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
  hasErrors,
  notyf,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'

pageTitle.value = 'Create Locations'

useHead({
  title: 'Locations',
})

const route = useRoute()

onMounted(() => {
  // if (route.query.id != undefined) {
  getAllConfig().then((response) => {
    setInputValuesData(inputsLocation, 'city_id', cities.value)
    setInputValuesData(inputsLocation, 'state_id', states.value)
    setInputValuesData(inputsLocation, 'country_id', contries.value)
  })
  // }
})

const saveData = () => {
  const data = perpareDataInputs(inputsLocation.value)

  const fd = new FormData()
  for (var i in data) {
    fd.append(i, data[i])
  }
  if (!hasErrors.value) {
    storeLocation(fd).then((response) => {
      if (response.data.status) {
        notyf.success('Succeeded')
        cleanUpModelInputs(inputsLocation.value)
        router.back()
      } else {
        notyf.error(response.data.mensaje)
        for (var i in response.data.errores) {
          response.data.errores[i].forEach((e) => {
            notyf.error(`${i} : ${e}`)
          })
        }
      }
    })
  }
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <locationsForm type="create" @saveData="saveData" />
    </div>
  </SidebarLayout>
</template>
