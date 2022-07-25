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

const mensaje = ref('ERROR MEMBERSHIP')
const subMensaje = ref('')

watch(member, (to) => {
  if (to.sinMembresia) {
    mensaje.value = 'NO MEMBERSHIP'
    subMensaje.value = 'Please, select a membership'
  }

  if (!to.isSolvente && !to.sinMembresia && to.subscription) {
    mensaje.value = `Membership ${to.subscription.status}`
    subMensaje.value =
      to.subscription.latest_invoice &&
      to.subscription.latest_invoice.payments_intents &&
      to.subscription.latest_invoice.payments_intents.length > 0
        ? `Last payment status : ${to.subscription.latest_invoice.payments_intents[0].status}`
        : ''
  }
  if (
    to.subscription &&
    to.subscription.subscription &&
    !to.subscription.latest_invoice
  ) {
    subMensaje.value = `Last payment status : ${to.subscription.subscription.status}`
  }

  if (to.membership_members) {
    if (to.membership_members.cacelation_date) {
      subMensaje.value = `Cancel date : ${moment(
        to.membership_members.cacelation_date
      ).format('MM-DD-YYYY')}`
    }
  }
})

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
    console.log('response.data', response.data)
    for (var i in response.data) {
      if (i == 'select_type') {
        if (response.data[i] == 'Individual') {
          getInput(inputsInformation.value, 'select_type').model = false
          getInput(inputsInformation.value, 'company_name').typeInput = 'hidden'
        } else {
          getInput(inputsInformation.value, 'select_type').model = true
          getInput(inputsInformation.value, 'company_name').typeInput = 'text'
        }
      } else if (i == 'membership_members') {
        if (!response.data[i]) {
          mensaje.value = 'Does not have a membership'
          subMensaje.value =
            'Does not have a membership go to the Membership/Contract section and create a new membership and press New Membership'
          console.error('no posee una membresia :(')
        }
        for (var e in response.data[i]) {
          if (e == 'memberships_location') {
            if (!response.data[i][e]) {
              console.error('no posee una locacion :(')
              // return
            } else {
              getInput(membershipsData, 'locations_id').model =
                response.data[i][e].companies_locations_id

              getLocationsDiciplines([
                response.data[i][e].companies_locations_id,
              ]).then((response) => {
                setInputValuesData(membershipsData, 'diciplines', response.data)
              })
            }
          } else if (e == 'diciplines') {
            getInput(membershipsData, 'diciplines').model = []
            response.data[i][e].forEach((element) => {
              getInput(membershipsData, 'diciplines').model.push(
                element.diciplines_id
              )
            })
          } else if (e == 'discount') {
            if (response.data[i][e]) {
              getInput(membershipsData, 'discount').model =
                response.data[i][e].id
            }
          } else {
            if (getInput(membershipsData, e) != undefined) {
              setInputModelData(membershipsData, e, response.data[i][e])
            }
          }
        }
      } else if (i == 'trainers') {
        let a = []
        response.data[i].forEach((e) => {
          a.push(e.id)
        })

        setInputModelData(membershipsData, 'staff_id', a)
      } else if (i == 'emergency') {
        for (e in response.data[i]) {
          setInputModelData(emergencyInputs, e, response.data[i][e])
        }
      } else if (i == 'guardian') {
        for (e in response.data[i]) {
          setInputModelData(parentInsputs, e, response.data[i][e])
        }
      } else if (i == 'leo_vet_fr') {
        setInputModelData(
          inputsInformation,
          i,
          response.data[i] == 1 ? true : false
        )
      } else {
        setInputModelData(inputsInformation, i, response.data[i])
      }
    }
    isLoading.value = false
  })
}

const status = computed(() => {
  let classs = ''
  if (member.value.subscription) {
    if (
      member.value.subscription.subscription &&
      member.value.subscription.subscription.status == 'active'
    ) {
      classs = 'active'
    } else {
      classs = member.value.subscription.status
    }

    if (member.value.subscription.status == 'active') {
      // $activos++;
    } else if (member.value.subscription.status == 'sincard') {
      // $sinCard++;
    }
    if (
      member.value.subscription.status == 'canceled' &&
      moment() <= moment(member.value.membership_members.cacelation_date)
    ) {
      classs = 'active'
    }
  } else if (member.value.sinMembresia) {
    if (member.value.user && member.value.user.pm_last_four) {
      // $nomembershipcontarjeta++;
      classs = 'nomembershipcontarjeta'
    } else {
      classs = 'nomembership'
      // $nomembership++;
    }
  }

  return classs
})
const reload = () => {
  isLoading.value = true
  mountMember()
}
</script>

<template>
  <SidebarLayout>
    <div v-if="isLoading" class="columns is-multiline">
      <div class="column is-3">
        <VPlaceload height="700px" />
      </div>
      <div class="column is-9">
        <div class="columns is-multiline column is-12">
          <VPlaceload height="150px" />
        </div>
        <div class="columns is-multiline column is-12">
          <VPlaceload height="420px" />
        </div>
      </div>
    </div>

    <div v-if="!isLoading && member" class="columns is-multiline">
      <div class="column is-3">
        <MemberProfileMenu
          :category="route.query.category"
          @changeMenu="changeMenu"
          :class="status"
        />
      </div>
      <!-- <p>{{ isSolvente }}</p> -->
      <div class="column is-9">
        <VCard
          v-if="!isSolvente"
          class="
            mb-4
            d-flex
            justify-content-between
            align-items-center
            cardprofile
          "
          :class="status"
        >
          <div>
            <p>{{ subMensaje }}</p>
            <!-- <small v-if="member.subscription">
              <p>{{ member.subscription.status }}</p>
            </small> -->
          </div>
        </VCard>
        <memberPayment v-if="renewMembership" class="mb-4" />
        <VCard class="mb-4" v-if="member.membership_members != null">
          <div class="d-flex justify-content-between">
            <div>
              <p>
                <b
                  >Member #{{ member.id }} -
                  <small>{{ member.category }}</small></b
                >
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
              <p>
                <b>Due Date: </b>
                {{
                  moment(member.subscription.proxima_factura).format(
                    'ddd - DD MMM YYYY'
                  )
                }}
              </p>
              <p v-if="member.membership_members?.discount">
                <b>Discount: </b>
                {{ member.membership_members.discount.name }}
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
        <memberMembership
          @reload="reload"
          v-show="Component == 'memberMembership'"
        />
        <memberFamily v-if="Component == 'memberFamily'" />
        <memberEmergency v-if="Component == 'memberEmergency'" />
        <memberCheckins v-if="Component == 'memberCheckins'" />
        <memberPurchases v-if="Component == 'memberPurchases'" />
        <memberInvoices v-if="Component == 'memberInvoices'" />
        <memberWaiver v-if="Component == 'memberWaiver'" />
        <memberCredit v-if="Component == 'memberCredit'" />
      </div>
    </div>
  </SidebarLayout>
</template>
