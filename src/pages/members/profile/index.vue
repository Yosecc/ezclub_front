<script setup lang="ts">
import { useHead } from '@vueuse/head'
import {
  computed,
  ref,
  onMounted,
  watch,
  onBeforeMount,
  defineProps,
} from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute } from 'vue-router'
import moment from 'moment'
import {
  inputsInformation,
  parentInsputs,
  inputsFamily,
  emergencyInputs,
  membershipsData,
  getMember,
  memberMermship,
  member,
  isSolvente,
  sinMembresia,
  DueDate,
  storeNewMembership,
} from '/@src/models/Members.ts'

import { getDiscounts } from '/@src/models/Discounts.ts'
import { getMeberships } from '/@src/models/Memberships.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import { getTrainers } from '/@src/models/Staffs.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputModelData,
  setInputValuesData,
  getValueInput,
  getInput,
  perpareDataInputs,
  notyf,
} from '/@src/models/Mixin.ts'
import { getAllConfig } from '/@src/services/config.ts'
import { getCompany, locations } from '/@src/models/Companies.ts'
const route = useRoute()

pageTitle.value = 'Member Profile'
useHead({
  title: 'Members',
})

const renewMembership = ref(false)
const Component = ref('personalInformation')

const changeMenu = (val) => {
  Component.value = val.value
}

watch(
  () => route.query,
  (to, o) => {
    // console.log(route)
    if (Object.keys(to).length > 0) {
      mountMember()
      reloadPage()
    }
  }
)

const mensaje = ref('FAILED PAYMENT')
const subMensaje = ref('')

watch(
  () => route.hash,
  (to) => {
    Component.value = route.hash.slice(1)
  }
)
watch(
  () => route.query.id,
  (to) => {
    Component.value = 'personalInformation'
  }
)

const isLoading = ref(true)

const reloadPage = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

onMounted(() => {
  // console.log(route.hash)

  if (route.hash != '') {
    Component.value = route.hash.slice(1)
  }
  getCompany().then((response) => {
    setInputValuesData(membershipsData, 'locations_id', locations.value)
  })
  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'country_id', response.contries)
    setInputValuesData(inputsInformation, 'city_id', response.cities)
    setInputValuesData(inputsInformation, 'state_id', response.states)

    setInputValuesData(inputsFamily, 'city_id', response.cities)
    setInputValuesData(inputsFamily, 'state_id', response.states)
    setInputValuesData(inputsFamily, 'country_id', response.contries)
  })
  getMeberships().then((response) => {
    setInputValuesData(
      membershipsData,
      'memberships_id',
      response.data.memberships
    )
  })
  getDiscounts().then((response) => {
    setInputValuesData(membershipsData, 'discount', response.data.discounts)
  })
  getRecurrences().then((response) => {
    // console.log(response.data)
    setInputValuesData(membershipsData, 'recurrences_id', response.data)
  })
  getTrainers().then((response) => {
    setInputValuesData(membershipsData, 'staff_id', response.data)
  })

  mountMember()
})

const mountMember = async () => {
  await getMember(route.query.id).then((response) => {
    // console.log(response.data.membership_members)
    for (var i in response.data) {
      if (i == 'select_type') {
        if (response.data[i] == 'Individual') {
          getInput(inputsInformation.value, 'select_type').model = false
        } else {
          getInput(inputsInformation.value, 'select_type').model = true
        }
      } else if (i == 'membership_members') {
        if (!response.data[i]) {
          mensaje.value = 'Does not have a membership'
          subMensaje.value =
            'Does not have a membership go to the Membership/Contract section and create a new membership and press New Membership'
          console.error('no posee una membresia :(')
          // return
        }
        for (var e in response.data[i]) {
          if (e == 'memberships_location') {
            if (!response.data[i][e]) {
              console.error('no posee una locacion :(')
              return
            }
            getInput(membershipsData.value, 'locations_id').model =
              response.data[i][e].companies_locations_id

            getLocationsDiciplines([
              response.data[i][e].companies_locations_id,
            ]).then((response) => {
              setInputValuesData(membershipsData, 'diciplines', response.data)
            })
          } else if (e == 'recurrence') {
            let recurrencesData = []

            response.data[i].membership.amounts.forEach((element) => {
              let recurrencesD = recurrences.value.find(
                (e) => e.id == element.recurrences_id
              )
              recurrencesD.amount = element.amount
              recurrencesData.push(recurrencesD)
            })

            getInput(membershipsData.value, 'recurrences_id').model =
              response.data[i].recurrences_id

            if (
              !recurrencesData.find(
                (e) => e.id == response.data[i].recurrences_id
              )
            ) {
              console.error('no tiene un plan de membresia :( recurrences')
              return
            }

            getInput(membershipsData.value, 'amount').model =
              recurrencesData.find(
                (e) => e.id == response.data[i].recurrences_id
              ).amount
          } else if (e == 'is_recurrence') {
            getInput(membershipsData.value, 'recurrence').model =
              response.data[i][e] == 1 ? true : false
          } else if (e == 'diciplines') {
            getInput(membershipsData.value, 'diciplines').model = []
            response.data[i][e].forEach((element) => {
              getInput(membershipsData.value, 'diciplines').model.push(
                element.diciplines_id
              )
            })
          } else if (e == 'membership') {
            getInput(membershipsData.value, 'initiation_fee').model =
              response.data[i][e].initiation_fee
          } else if (e == 'is_initiation_fee') {
            getInput(membershipsData.value, 'is_initiation_fee').model =
              response.data[i][e] == 0 ? [e] : []
          } else if (e == 'discount') {
            getInput(membershipsData.value, 'discount').disabled = true
            if (response.data[i][e] != null) {
              getInput(membershipsData.value, 'discount').model =
                response.data[i][e].id
            }
          } else {
            setInputModelData(membershipsData, e, response.data[i][e])
          }
        }
      } else if (i == 'staff_id') {
        setInputModelData(membershipsData, i, response.data[i])
      } else if (i == 'emergency') {
        for (e in response.data[i]) {
          setInputModelData(emergencyInputs, e, response.data[i][e])
        }
      } else if (i == 'guardian') {
        for (e in response.data[i]) {
          setInputModelData(parentInsputs, e, response.data[i][e])
        }
      } else if (i == 'leo_vet_fr') {
        setInputModelData(inputsInformation, i, response.data[i] == 1 ? i : [])
      } else {
        setInputModelData(inputsInformation, i, response.data[i])
      }
    }
    isLoading.value = false
    // console.log('membershipsData', membershipsData.value)
  })
}

const newMembership = () => {
  const data = perpareDataInputs(membershipsData.value)
  data.members_id = member.value.id
  storeNewMembership(data)
    .then((response) => {
      member.value.membership_members = response.data.membership_member
      renewMembership.value = true
    })
    .catch((error) => {
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}
</script>

<template>
  <SidebarLayout>
    <VPlaceload v-if="isLoading" height="500px" />
    <div v-if="!isLoading && member" class="columns is-multiline">
      <div class="column is-3">
        <MemberProfileMenu
          :category="route.query.category"
          @changeMenu="changeMenu"
        />
      </div>
      <!-- <p>{{ isSolvente }}</p> -->
      <div class="column is-9">
        <VCard
          v-if="!isSolvente"
          class="mb-4 d-flex justify-content-between align-items-center"
          color="danger"
        >
          <div>
            <h3 class="title is-5 mb-0">{{ mensaje }}</h3>

            <p>{{ subMensaje }}</p>
          </div>
          <div>
            <VButton
              v-if="
                getValueInput(membershipsData, 'memberships_id') &&
                !sinMembresia
              "
              color="success"
              @click="renewMembership = true"
            >
              Process Payment
            </VButton>

            <!-- <VButton
              v-if="sinMembresia"
              :disabled="!getValueInput(membershipsData, 'memberships_id')"
              color="success"
              @click="newMembership"
            >
              New membership
            </VButton> -->
          </div>
        </VCard>
        <memberPayment v-if="renewMembership" class="mb-4" />
        <VCard class="mb-4" v-if="member.membership_members != null">
          <div class="d-flex justify-content-between">
            <div>
              <p>
                <b>Member #{{ member.id }}</b>
              </p>

              <p>
                <small
                  ><b>Member since.</b>
                  {{ moment(member.created_at).format('ddd - DD MMM YYYY') }}
                </small>
              </p>
              <p>
                <b>Membership Active:</b> {{ memberMermship.membership.name }}
              </p>
              <p v-if="member.subscription">
                <b>Due Date: </b>
                {{
                  moment(member.subscription.proxima_factura).format(
                    'ddd - DD MMM YYYY'
                  )
                }}
              </p>
            </div>
            <div v-if="member.subscription">
              <VTag color="info" :label="member.subscription.status" rounded />
            </div>
          </div>
        </VCard>
        <personalInformation
          :category="route.query.category"
          v-show="Component == 'personalInformation'"
        />
        <memberMembership v-show="Component == 'memberMembership'" />
        <memberFamily v-show="Component == 'memberFamily'" />
        <memberEmergency v-show="Component == 'memberEmergency'" />
        <memberCheckins v-show="Component == 'memberCheckins'" />
        <memberPurchases v-show="Component == 'memberPurchases'" />
        <memberWaiver v-show="Component == 'memberWaiver'" />
      </div>
    </div>
  </SidebarLayout>
</template>
