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
  inputsUser,
  getUserStaff,
} from '/@src/models/Staffs'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
import {
  setInputModelData,
  setInputValuesData,
  perpareDataInputs,
  notyf,
  hasErrors,
  getInput,
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
      if (i == 'rent_space') {
        setInputModelData(
          inputsInformation,
          i,
          response.data[i] == null ? '' : response.data[i]
        )
      } else if (i == 'company_name_staff') {
        setInputModelData(
          inputsInformation,
          i,
          response.data[i] == null ? '' : response.data[i]
        )
      } else if (i == 'ein') {
        setInputModelData(
          inputsInformation,
          i,
          response.data[i] == null ? '' : response.data[i]
        )
      } else if (i == 'price_rent') {
        setInputModelData(
          inputsInformation,
          i,
          response.data[i] == null ? '' : response.data[i]
        )
      } else if (i == 'locations') {
        let arr = []
        response.data[i].forEach((e) => {
          arr.push(e.locations_id)
        })
        setInputModelData(inputsPermitions, i, arr)
      } else if (i == 'staff_roles') {
        let arr = []
        response.data[i].forEach((e) => {
          arr.push(e.staff_roles_id)
        })
        setInputModelData(inputsPermitions, i, arr)
      } else {
        setInputModelData(inputsInformation, i, response.data[i])
        setInputModelData(inputsPermitions, i, response.data[i])
      }
    }
    getInput(inputsUser.value, 'email').model = getInput(
      inputsInformation.value,
      'email'
    ).model
  })
  getCompany().then((response) => {
    setInputValuesData(inputsPermitions, 'locations', response.data.locations)
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
      'staff_roles',
      response.data.staff_roles
    )
  })
})

watch(
  () => staff.value,
  () => {
    getUserStaff(staff.value.id).then((response) => {
      if (response.data) {
        getInput(inputsUser.value, 'email').model = response.data.email
      }

      // getInput(inputsUser.value, 'password').model = response.data.password
    })
  }
)

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
        <div
          class="column is-12"
          style="display: flex"
          :style="
            route.query?.sign
              ? { flexDirection: 'column-reverse' }
              : { flexDirection: 'column' }
          "
        >
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

          <staffUser type="edit" :buttons="['save']" class="mb-3" />

          <staffWaiver
            class="mb-4"
            v-if="staff"
            :type="staff.sign ? 'edit' : 'create'"
            :buttons="[]"
            :step="3"
          />
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
