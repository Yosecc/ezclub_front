<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import {
  getStaff,
  staff,
  putStaff,
  inputsInformation,
  inputsPermitions,
  inputsSign,
  getstaffRoles,
  storeStaff,
} from '/@src/models/Staffs'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
import {
  setInputModelData,
  setInputValuesData,
  perpareDataInputs,
  notyf,
  hasErrors,
} from '/@src/models/Mixin.ts'

import { getCompany } from '/@src/models/Companies.ts'

import {
  getcities,
  getstates,
  getcontries,
  cities,
  states,
  contries,
} from '/@src/services/config.ts'

// import { Api } from '/@src/services/index.ts'

const route = useRoute()

pageTitle.value = 'Edit Staff'

useHead({
  title: 'Staffs',
})

onMounted(() => {
  getStaff(route.query.id).then((response) => {
    for (var i in response.data) {
      setInputModelData(inputsInformation, i, response.data[i])
      setInputModelData(inputsPermitions, i, response.data[i])
    }
  })
  getCompany().then((response) => {
    setInputValuesData(
      inputsPermitions,
      'locations_id',
      response.data.locations
    )
  })
  getcities().then((response) => {
    setInputValuesData(inputsInformation, 'city_id', cities.value)
  })
  getstates().then((response) => {
    setInputValuesData(inputsInformation, 'state_id', states.value)
  })
  getcontries().then((response) => {
    setInputValuesData(inputsInformation, 'country_id', contries.value)
  })
  getstaffRoles().then((response) => {
    setInputValuesData(
      inputsPermitions,
      'staff_roles_id',
      response.data.staff_roles
    )
  })
})

const saveData = () => {
  let obj = {
    ...perpareDataInputs(inputsInformation.value),
    ...perpareDataInputs(inputsPermitions.value),
    // ...perpareDataInputs(inputsSign.value, { array: false }),
  }
  const fd = new FormData()

  for (var i in obj) {
    fd.append(i, obj[i])
  }
  if (!hasErrors.value) {
    putStaff(route.query.id, fd)
      .then((response) => {
        if (response.data.status) {
          notyf.success('Succeeded')
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
      .catch((error) => {
        console.log(error.response.data)
      })
  }
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="columns is-multiline">
        <div class="column is-12">
          <!-- <transition name="fade" mode="out-in" appear> -->

          <staffInformation
            type="edit"
            :buttons="['back', 'save']"
            :step="1"
            class="mb-3"
            @saveData="saveData"
          />

          <staffSystemPermitions
            type="edit"
            :buttons="[]"
            :step="2"
            class="mb-3"
          />

          <staffWaiver type="edit" :buttons="[]" :step="3" />
          <!-- </transition> -->
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
