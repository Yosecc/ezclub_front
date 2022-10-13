<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, onMounted, watch, onBeforeMount } from 'vue'
import { FRONTEND_URL } from '/@src/services'
import {
  categoriesMembers,
  inputsInformation,
  parentInsputs,
  inputsFamily,
  inputsContact,
  inputsMembership,
  notasInput,
  saveMember,
  idMember,
  idMemberMembership,
  membershipsData,
  member,
  error,
  familiaresMembers,
  memberMembership,
} from '/@src/models/Members.ts'

import { getMeberships, memberships } from '/@src/models/Memberships.ts'
import { getRecurrences } from '/@src/models/Recurrences.ts'
import { getDiscounts } from '/@src/models/Discounts.ts'
import {
  setInputValuesData,
  perpareDataInputs,
  notyf,
  cleanUpModelInputs,
  getInput,
} from '/@src/models/Mixin.ts'

import {
  cities,
  states,
  contries,
  getAllConfig,
} from '/@src/services/config.ts'

import { getTrainers } from '/@src/models/Staffs.ts'
import { optionsCreditCard } from '/@src/models/PaymentMethodsData.ts'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Add New members'
useHead({
  title: 'Members',
})

onMounted(() => {
  limpiarCampos()
  getMeberships(1).then((response) => {
    setInputValuesData(
      membershipsData,
      'memberships_id',
      response.data.memberships
    )
  })
  getInput(membershipsData, 'memberships_id').disabled = false
  getInput(membershipsData, 'recurrences_id').disabled = false
  getInput(membershipsData, 'is_initiation_fee').disabled = false
  getInput(membershipsData, 'discount').disabled = false

  getDiscounts(1, 'membership').then((response) => {
    setInputValuesData(membershipsData, 'discount', response.data.discounts)
  })
  getRecurrences()
  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'city_id', cities.value)
    setInputValuesData(inputsFamily, 'city_id', cities.value)
    setInputValuesData(parentInsputs, 'city_id', cities.value)
    setInputValuesData(inputsInformation, 'state_id', states.value)
    setInputValuesData(inputsFamily, 'state_id', states.value)
    setInputValuesData(parentInsputs, 'state_id', states.value)
    setInputValuesData(inputsInformation, 'country_id', contries.value)
    // console.log('f',inputsInformation.value, 'country_id')
    getInput(inputsInformation.value, 'country_id').model = 34
    setInputValuesData(inputsFamily, 'country_id', contries.value)
    setInputValuesData(parentInsputs, 'country_id', contries.value)
  })

  getTrainers().then((response) => {
    setInputValuesData(membershipsData, 'staff_id', response.data)
  })
})

const stepActive = ref(1)

const steps = ref([
  {
    step: 1,
    text: 'Member Information',
    categories: ['Adult', 'Minor', 'Prospect'],
  },
  {
    step: 2,
    text: 'Add Family Member',
    categories: ['Adult'],
  },
  {
    step: 2,
    text: 'Parent / Guardian',
    categories: ['Minor'],
  },
  {
    step: 2,
    text: 'Contact Preference',
    categories: ['Prospect'],
  },
  {
    step: 3,
    text: 'Contact Preference',
    categories: ['Adult', 'Minor'],
  },
  {
    step: 4,
    text: 'Select membership',
    categories: ['Adult', 'Minor', 'Prospect'],
  },
  {
    step: 5,
    text: 'Add Payment Method',
    categories: ['Adult', 'Minor', 'Prospect'],
  },
  // {
  //   step: 6,
  //   text: 'Sign Contract & Waiver',
  //   categories: ['Adult', 'Minor', 'Prospect'],
  // },
])

const inputsInputsInformationStep = computed(() => {
  return inputsInformation.value.filter((input) =>
    // console.log(input)
    input.categories.includes(categoriesMembers.value.model)
  )
})

const step = computed(() => {
  return steps.value.find(
    (step) =>
      step.step == stepActive.value &&
      step.categories.includes(categoriesMembers.value.model)
  )
})

const stepsList = computed(() => {
  return steps.value.filter((step) =>
    step.categories.includes(categoriesMembers.value.model)
  )
})

const memberGuardianComputed = computed(() => {
  return perpareDataInputs(parentInsputs.value)
})

const changeStep = (val, payment = 3, cashObj = {}) => {
  if (categoriesMembers.value.model == 'Prospect') {
    // if(val == 3){
    //   val = 2
    // }
    // if(val == 2){
    //   val = 1
    // }
  }

  if (val == 6) {
    sendData(payment, cashObj)
  } else {
    stepActive.value = val
  }
}
const dataInformationMember = ref(null)

const returDataInformationMember = (val) => {
  dataInformationMember.value = val
}

const dataContact = ref(null)
const returnDataContact = (val) => {
  dataContact.value = val
}

const familiares = ref([])
const returDataFamily = (data) => {
  familiares.value = data.value
}

// const memberMembership = ref([])
const familyMembership = ref([])
const returnDataMembership = (obj) => {
  familyMembership.value = obj.familyMembership.value
  memberMembership.value = obj.memberMembership
}

const memberPayment = ref(null)
const familiaresPayment = ref(null)
const total = ref(null)
const returnDataPayment = (obj) => {
  total.value = obj.total.value
}

const convertFormData = (fd, objeto) => {
  for (var i in objeto) {
    fd.append(i, objeto[i])
  }
}

const limpiarCampos = () => {
  idMember.value = null
  idMemberMembership.value = null

  let alimpiar = []
  let campos = ['is_family', 'principal_family']
  cleanUpModelInputs(
    inputsInformation.value.filter((e) => !campos.includes(e.name))
  )

  campos = ['recurrence']
  cleanUpModelInputs(membershipsData.filter((e) => !campos.includes(e.name)))
  cleanUpModelInputs(notasInput.value)
  cleanUpModelInputs(parentInsputs.value)
}
</script>

<template>
  <SidebarLayout>
    <!-- Display a payment form -->

    <div class="columns is-multiline">
      <div class="column is-12">
        <V-Field v-if="stepActive == 1" class="w-100" addons>
          <V-Control
            v-for="(category, categoryIndex) in categoriesMembers.values"
            :key="`categoymember-${categoryIndex}`"
          >
            <V-Button
              @click="categoriesMembers.model = category"
              :color="
                categoriesMembers.model == category ? 'primary' : undefined
              "
              rounded
            >
              {{
                category == 'Prospect' ? 'Temporary Members' : category
              }}</V-Button
            >
          </V-Control>
        </V-Field>
      </div>
      <div class="column is-9">
        <!-- memberInformation -->
        <memberInformation
          v-show="stepActive == 1"
          type="create"
          :title="step.text"
          :inputs="inputsInputsInformationStep"
          @changeStep="changeStep"
          @returData="returDataInformationMember"
        />
        <!-- parentGuardian -->
        <parentGuardian
          v-show="stepActive == 2 && categoriesMembers.model == 'Minor'"
          :title="step.text"
          @changeStep="changeStep"
        />
        <!-- familyMembers -->
        <familyMembers
          v-show="stepActive == 2 && categoriesMembers.model == 'Adult'"
          type="create"
          :title="step.text"
          :inputs="inputsFamily"
          @changeStep="changeStep"
          @returData="returDataFamily"
        />
        <!-- contactPreference -->
        <contactPreference
          v-show="
            stepActive == 3 ||
            (stepActive == 2 && categoriesMembers.model == 'Prospect')
          "
          type="create"
          :title="step.text"
          :inputs="inputsContact"
          @changeStep="changeStep"
          @returnData="returnDataContact"
        />
        <!-- selectMembership -->
        <selectMembership
          v-show="stepActive == 4"
          type="create"
          :member="inputsInputsInformationStep"
          :familiares="familiares"
          :title="step.text"
          :inputs="inputsMembership"
          :memberships="memberships"
          :notes="notasInput"
          @changeStep="changeStep"
          @returnData="returnDataMembership"
        />
        <!-- paymentMethod -->
        <paymentMethod
          v-if="stepActive == 5"
          type="create"
          :title="step.text"
          :member="inputsInputsInformationStep"
          :familiares="familiares"
          :inputs="inputsMembership"
          :member-membership="memberMembership"
          :family-membership="familyMembership"
          @changeStep="changeStep"
        />
      </div>
      <div class="column is-3">
        <V-progress-check
          v-for="(step, key) in stepsList"
          :key="key"
          :active="step.step <= stepActive"
          :step="step.step"
          :text="step.text"
        ></V-progress-check>
      </div>
    </div>
  </SidebarLayout>
</template>
