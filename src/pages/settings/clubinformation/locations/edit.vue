<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
import {
  location,
  inputsLocation,
  getLocation,
  putLocation,
} from '/@src/models/Companies.ts'

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

    getLocation(route.query.id).then((response) => {
      console.log(response.data)
      for (var i in response.data) {
        if (i == 'status') {
          setInputModelData(
            inputsLocation,
            i,
            response.data[i] == 1 ? 'status' : []
          )
        } else {
          setInputModelData(inputsLocation, i, response.data[i])
        }
      }
    })
  }
})

const saveData = () => {
  const data = perpareDataInputs(inputsLocation.value)

  const fd = new FormData()
  for (var i in data) {
    fd.append(i, data[i])
  }
  if (!hasErrors.value) {
    putLocation(route.query.id, fd).then((response) => {
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
      <locationsForm type="edit" @saveData="saveData" />
    </div>
  </SidebarLayout>
</template>
