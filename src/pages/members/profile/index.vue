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

import {
  // categoriesMembers,
  inputsInformation,
  // parentInsputs,
  inputsFamily,
  emergencyInputs,
  // inputsContact,
  inputsMembership,
  // notasInput,
  // saveMember,
  getMember,
  memberMermship,
  member,
  isSolvente,
} from '/@src/models/Members.ts'

import { getDiscounts } from '/@src/models/Discounts.ts'
import { getMeberships } from '/@src/models/Memberships.ts'
import { getRecurrences, recurrences } from '/@src/models/Recurrences.ts'
import { getTrainers } from '/@src/models/Staffs.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import {
  setInputModelData,
  setInputValuesData,
  getInput,
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
    setInputValuesData(inputsMembership, 'locations_id', locations.value)
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
      inputsMembership,
      'memberships_id',
      response.data.memberships
    )
  })
  getDiscounts().then((response) => {
    setInputValuesData(inputsMembership, 'discount', response.data.discounts)
  })
  getRecurrences().then((response) => {
    // console.log(response.data)
    setInputValuesData(inputsMembership, 'recurrences_id', response.data)
  })
  getTrainers().then((response) => {
    setInputValuesData(inputsMembership, 'staff_id', response.data)
  })

  mountMember()
})

const mountMember = async () => {
  await getMember(route.query.id).then((response) => {
    console.log(response.data)
    for (var i in response.data) {
      if (i == 'select_type') {
        if (response.data[i] == 'Individual') {
          getInput(inputsInformation.value, 'select_type').model = false
        } else {
          getInput(inputsInformation.value, 'select_type').model = true
        }
      } else if (i == 'membership_members') {
        for (var e in response.data[i]) {
          if (e == 'memberships_location') {
            getInput(inputsMembership.value, 'locations_id').model =
              response.data[i][e].companies_locations_id

            getLocationsDiciplines([
              response.data[i][e].companies_locations_id,
            ]).then((response) => {
              setInputValuesData(inputsMembership, 'diciplines', response.data)
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

            getInput(inputsMembership.value, 'recurrences_id').model =
              response.data[i].recurrences_id
            getInput(inputsMembership.value, 'amount').model =
              recurrencesData.find(
                (e) => e.id == response.data[i].recurrences_id
              ).amount
            console.log()
          } else if (e == 'diciplines') {
            getInput(inputsMembership.value, 'diciplines').model = []
            response.data[i][e].forEach((element) => {
              getInput(inputsMembership.value, 'diciplines').model.push(
                element.diciplines_id
              )
            })
          } else if (e == 'membership') {
            getInput(inputsMembership.value, 'initiation_fee').model =
              response.data[i][e].initiation_fee
          } else if (e == 'is_initiation_fee') {
            getInput(inputsMembership.value, 'is_initiation_fee').model =
              response.data[i][e] == 0 ? [e] : []
          } else {
            setInputModelData(inputsMembership, e, response.data[i][e])
          }
        }
        // console.log('inputsMembership',inputsMembership.value)
      } else if (i == 'staff_id') {
        setInputModelData(inputsMembership, i, response.data[i])
      } else if (i == 'emergency') {
        for (e in response.data[i]) {
          setInputModelData(emergencyInputs, e, response.data[i][e])
        }
      } else {
        // console.error(i)
        setInputModelData(inputsInformation, i, response.data[i])
      }
    }
    isLoading.value = false
    // console.log('inputsMembership', inputsMembership.value)
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
          <h3 class="title is-5 mb-0">Expired Membership</h3>
          <div>
            <VButton class="mr-4" color=""> Cancel membership </VButton>
            <VButton color="success" @click="renewMembership = true">
              Renew membership
            </VButton>
          </div>
        </VCard>
        <memberPayment
          v-if="renewMembership"
          :member="member"
          :familiares="member.families_children"
          :member-membership="member.membership_members"
          class="mb-4"
        />
        <personalInformation
          :category="route.query.category"
          v-show="Component == 'personalInformation'"
        />
        <!-- <memberCreditCard
           v-show="Component == 'memberCreditCard'"
        /> -->
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
