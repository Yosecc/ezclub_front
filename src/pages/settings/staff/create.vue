<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import {
  getStaff,
  staff,
  inputsInformation,
  inputsPermitions,
  inputsSign,
  getstaffRoles,
  storeStaff,
} from '/@src/models/Staffs'
import { useRoute, useRouter } from 'vue-router'
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

pageTitle.value = 'New Staff'

useHead({
  title: 'Staffs',
})

onMounted(() => {
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

const stepActive = ref(1)

const steps = ref([
  {
    step: 1,
    text: 'Staff Information',
    categories: [],
  },
  {
    step: 2,
    text: 'System Permissions',
    categories: [],
  },
  {
    step: 3,
    text: 'Sign Waiver',
    categories: [],
  },
])

const changeStep = (val) => {
  stepActive.value = val
}

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
    storeStaff(fd)
      .then((response) => {
        if (response.data.status) {
          notyf.success('Succeeded')
          stepActive.value = 3
          staff.value = response.data.staff
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
          <div v-if="stepActive == 1 || stepActive == 2">
            <staffInformation
              type="create"
              :buttons="['back', 'save']"
              :step="1"
              class="mb-3"
              @saveData="saveData"
            />

            <staffSystemPermitions
              type="create"
              :buttons="[]"
              :step="2"
              class="mb-3"
            />
          </div>
          <staffWaiver
            type="create"
            :buttons="['back']"
            v-if="stepActive == 3"
            :step="3"
          />
          <!-- </transition> -->
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
