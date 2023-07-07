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
import { useRoute, useRouter } from 'vue-router'
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
} from '/@src/models/Members'

import { getDiscounts } from '/@src/models/Discounts'
import { getMeberships } from '/@src/models/Memberships'
import { getRecurrences, recurrences } from '/@src/models/Recurrences'
import { getTrainers } from '/@src/models/Staffs'
import { getLocationsDiciplines } from '/@src/models/Diciplines'
import {
  setInputModelData,
  setInputValuesData,
  getValueInput,
  getInput,
  perpareDataInputs,
  notyf,
} from '/@src/models/Mixin'
import { getAllConfig } from '/@src/services/config'
import { getCompany, locations } from '/@src/models/Companies'

import { getSuscripcionCode, suscripcion } from '/@src/models/Subscriptions'

const router = useRouter()
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
  // if (to) {
  //   if (to.sinMembresia) {
  //     mensaje.value = 'NO MEMBERSHIP'
  //     subMensaje.value = 'Please, select a membership'
  //   }
  //   if (!to.isSolvente && !to.sinMembresia && to.subscription) {
  //     mensaje.value = `Membership ${to.subscription.status}`
  //     subMensaje.value =
  //       to.subscription.latest_invoice &&
  //       to.subscription.latest_invoice.payments_intents &&
  //       to.subscription.latest_invoice.payments_intents.length > 0
  //         ? `Last payment status : ${to.subscription.latest_invoice.payments_intents[0].status}`
  //         : ''
  //   }
  //   if (
  //     to.subscription &&
  //     to.subscription.subscription &&
  //     !to.subscription.latest_invoice
  //   ) {
  //     subMensaje.value = `Last payment status : ${to.subscription.subscription.status}`
  //   }
  //   if (to.membership_members) {
  //     if (to.membership_members.cacelation_date) {
  //       subMensaje.value = `Cancel date : ${moment(
  //         to.membership_members.cacelation_date
  //       ).format('MM-DD-YYYY')}`
  //     }
  //   }
  // }
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

const suscripcionData = ref(null)

onMounted(() => {
  // console.log(route.hash)

  if (route.hash != '') {
    Component.value = route.hash.slice(1)
  }
  getCompany().then((response) => {
    setInputValuesData(membershipsData, 'locations_id', locations.value)
    setInputValuesData(membershipsData, 'locations', locations.value)
  })
  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'country_id', response.contries)
    setInputValuesData(inputsInformation, 'city_id', response.cities)
    setInputValuesData(inputsInformation, 'state_id', response.states)

    setInputValuesData(inputsFamily, 'city_id', response.cities)
    setInputValuesData(inputsFamily, 'state_id', response.states)
    setInputValuesData(inputsFamily, 'country_id', response.contries)

    setInputValuesData(parentInsputs.value, 'city_id', response.cities)
    setInputValuesData(parentInsputs.value, 'state_id', response.states)
    setInputValuesData(parentInsputs.value, 'country_id', response.contries)
  })
  getMeberships(1).then((response) => {
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

  if (route.query.id != undefined) {
    mountMember()
  }

  if (route.query.code != undefined) {
    isLoading.value = false
    getSuscripcionCode(route.query.code).then((response) => {
      suscripcionData.value = response.data.suscripcion
      if (response.data.suscripcion.member) {
        member.value = response.data.suscripcion.member
        router.push({
          name: 'members-profile',
          query: {
            id: response.data.suscripcion.member.id,
          },
          hash: '#susbcriptionIndex',
        })
      }
    })
  }
})

const mountMember = async () => {
  await getMember(route.query.id).then((response) => {
    // console.log('response.data', response.data)
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
          } else if (e == 'status') {
            if (response.data[i][e] == 2) {
              getInput(membershipsData, 'memberships_id').model = ''
            }
          } else if (e == 'locations') {
            let arr = []
            if (response.data[i][e].length) {
              response.data[i][e].forEach((e) => {
                arr.push(e.companies_locations_id)
              })
            }
            getInput(membershipsData, 'locations').model = arr
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
          if (e == 'parent_address') {
            getInput(parentInsputs.value, 'address').model = response.data[i][e]
          } else if (e == 'parent_photo') {
            if (response.data[i][e] != '' || response.data[i][e] != null) {
              getInput(parentInsputs.value, 'parent_photo').required = false
            } else {
              getInput(parentInsputs.value, 'parent_photo').required = true
            }
            getInput(parentInsputs.value, 'parent_photo').data =
              response.data[i][e]
          } else {
            setInputModelData(parentInsputs, e, response.data[i][e])
          }
        }
        // console.log('skdj', inputsInformation.value)
        // // setInputModelData(parentInsputs, e, response.data[i][e])
      } else if (i == 'leo_vet_fr') {
        setInputModelData(
          inputsInformation,
          i,
          response.data[i] == 1 ? true : false
        )
      } else if (i == 'category') {
        // console.log(response.data[i], 'es')
        if (response.data[i] == 'Adult') {
          getInput(inputsInformation.value, 'category').model = true
        } else {
          getInput(inputsInformation.value, 'category').model = false
        }
      } else {
        setInputModelData(inputsInformation, i, response.data[i])
      }
    }
    isLoading.value = false
  })
}

const status = computed(() => {
  let classs = ''

  return member.value.estado.color
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
          <VPlaceload height="530px" />
        </div>
      </div>
    </div>

    <div v-if="!isLoading && member" class="columns is-multiline">
      <div class="column is-3">
        <MemberProfileMenu
          style="position: sticky; top: 10px"
          :category="member.category"
          @changeMenu="changeMenu"
          :style="{ background: status }"
        />
      </div>
      <!-- <p>{{ isSolvente }}</p> -->
      <div class="column is-9">
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
                <!-- <b>Membership Active:</b> {{ memberMermship.membership.name }}  -->
              </p>
            </div>
          </div>
        </VCard>
        <subscriptionIndex v-if="Component == 'susbcriptionIndex'" />

        <personalInformation
          :category="member.category"
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

    <div v-if="!isLoading && suscripcionData">
      <VCard
        v-if="!member"
        class="
          mb-4
          d-flex
          justify-content-between
          align-items-center
          cardprofile
        "
      >
        <div>
          <VAvatar size="big" initials="CT" />
        </div>
        <div class="text-right">
          <p class="title is-6 mb-0">
            Username: {{ suscripcionData.user.name }}
          </p>
          <p class="title is-6">Email: {{ suscripcionData.user.email }}</p>

          <p>{{ suscripcionData.memberships_members.paymenttype.name }}</p>
          <p v-if="suscripcionData.user.cards.length">
            {{ suscripcionData.user.cards[0].brand }} ****{{
              suscripcionData.user.cards[0].last4
            }}
          </p>
        </div>
      </VCard>

      <subscriptionIndex v-if="!member" :suscripcion="suscripcionData" />

      <personalInformation
        class="mt-4"
        v-if="!member"
        :category="''"
        :suscripcion="suscripcionData"
        :user="suscripcionData.user"
      />
    </div>
  </SidebarLayout>
</template>
