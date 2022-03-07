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
} from '/@src/models/Members.ts'

import { getMeberships, memberships } from '/@src/models/Memberships.ts'
import { getRecurrences } from '/@src/models/Recurrences.ts'
import { getDiscounts } from '/@src/models/Discounts.ts'
import { setInputValuesData, perpareDataInputs } from '/@src/models/Mixin.ts'

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
    // setInputValuesData(inputsMembership,'recurrences_id', response.data)
  })
  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'city_id', cities.value)
    setInputValuesData(inputsFamily, 'city_id', cities.value)
    setInputValuesData(inputsInformation, 'state_id', states.value)
    setInputValuesData(inputsFamily, 'state_id', states.value)
    setInputValuesData(inputsInformation, 'country_id', contries.value)
    setInputValuesData(inputsFamily, 'country_id', contries.value)
  })

  getTrainers().then((response) => {
    setInputValuesData(inputsMembership, 'staff_id', response.data)
  })
})

const stepActive = ref(1)

const steps = ref([
  {
    step: 1,
    text: 'Member Information',
    categories: ['Adult', 'Minor', 'Prospect'],
  },
  // {
  //   step: 1,
  //   text: 'Prospect Information',
  //   categories: ['Prospect'],
  // },
  {
    step: 2,
    text: 'Add Family Member',
    categories: ['Adult', 'Prospect'],
  },
  // {
  //   step: 2,
  //   text: 'Add Payment Method',
  //   categories: ['Prospect'],
  // },
  {
    step: 2,
    text: 'Parent / Guardian',
    categories: ['Minor'],
  },

  {
    step: 3,
    text: 'Contact Preference',
    categories: ['Adult', 'Minor', 'Prospect'],
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
  {
    step: 6,
    text: 'Sing Contract & Waiver',
    categories: ['Adult', 'Minor', 'Prospect'],
  },
])

const inputsInputsInformationStep = computed(() => {
  return inputsInformation.value.filter((input) =>
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
    // if(val == 2){
    //   val = 3
    // }
    // if(val == 2){
    //   val = 4
    // }
    // if(val == 3){
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

const memberMembership = ref([])
const familyMembership = ref([])
const returnDataMembership = (obj) => {
  familyMembership.value = obj.familyMembership.value
  memberMembership.value = obj.memberMembership.value
}

const memberPayment = ref(null)
const familiaresPayment = ref(null)
const total = ref(null)
const returnDataPayment = (obj) => {
  // console.log(obj.total.value)
  total.value = obj.total.value
  // memberPayment.value = obj.paymentData.value
  // familiaresPayment.value = obj.dataCardFamiliares
}

const convertFormData = (fd, objeto) => {
  for (var i in objeto) {
    fd.append(i, objeto[i])
  }
  // return fd
}

const sendData = (payment, cashObj) => {
  const fd = new FormData()

  // Informacion
  convertFormData(fd, dataInformationMember.value)

  // Contacto
  let dataContactFD = dataContact.value
  // if(dataContactFD != null){
  for (var i = 0; i < dataContactFD.length; i++) {
    var item = dataContactFD[i]
    for (var prop in item) {
      fd.append(`notifications[${i}][${prop}]`, item[prop])
    }
  }
  // }

  let memberMembershipFD = perpareDataInputs(memberMembership.value)
  for (var i in memberMembershipFD) {
    if (i == 'diciplines') {
      let ite = memberMembershipFD[i]
      for (var e = 0; e < ite.length; ++e) {
        fd.append('diciplines[]', ite[e])
      }
    } else {
      fd.append(i, memberMembershipFD[i])
    }
  }

  // let memberPaymentFD = perpareDataInputs(memberPayment.value)
  // for (var i in memberPaymentFD) {
  //   fd.append(i,memberPaymentFD[i])
  // }

  fd.append('total', total.value)
  fd.append('payment_type_id', payment)

  if (payment == 1) {
    fd.append('cash', cashObj.cash)
    fd.append('cash_back', cashObj.changeBack)
  }

  // console.log(categoriesMembers.value)

  let categoriesMembersFD = perpareDataInputs(categoriesMembers.value, {
    array: false,
  })

  for (var i in categoriesMembersFD) {
    fd.append(i, categoriesMembersFD[i])
  }
  // console.log('2pasa')

  let notasInputFD = perpareDataInputs(notasInput.value)
  for (var i in notasInputFD) {
    fd.append(i, notasInputFD[i])
  }

  let optionsCreditCardFD = perpareDataInputs(optionsCreditCard.value)
  for (var i in optionsCreditCardFD) {
    fd.append(i, optionsCreditCardFD[i])
  }

  // console.log('familyMembership',familyMembership.value)

  familyMembership.value.forEach((element, index) => {
    // Informacion
    let familiarX = perpareDataInputs(element.family)

    for (var i in familiarX) {
      if (i == 'category') {
        if (familiarX[i]) {
          familiarX[i] = 'Minor'
        } else {
          familiarX[i] = 'Adult'
        }
      }
      fd.append(`familiares[${index}][${i}]`, familiarX[i])
    }
    // contacto
    let dataContactX = dataContact.value
    for (var i = 0; i < dataContactX.length; i++) {
      var item = dataContactX[i]
      for (var prop in item) {
        fd.append(
          `familiares[${index}][notifications][${i}][${prop}]`,
          item[prop]
        )
      }
    }

    let membresiaX = perpareDataInputs(element.inputs)
    for (var i in membresiaX) {
      if (i == 'diciplines') {
        let ite = membresiaX[i]
        for (var e = 0; e < ite.length; ++e) {
          fd.append(`familiares[${index}][diciplines][]`, ite[e])
        }
      } else {
        // console.log(membresiaX[i])
        fd.append(`familiares[${index}][${i}]`, membresiaX[i])
      }
    }

    fd.append(`familiares[${index}][total]`, total.value)

    let notasInputFD = perpareDataInputs(notasInput.value)
    for (var i in notasInputFD) {
      fd.append(`familiares[${index}][${i}]`, notasInputFD[i])
    }

    let optionsCreditCardFD = perpareDataInputs(optionsCreditCard.value)
    for (var i in optionsCreditCardFD) {
      fd.append(`familiares[${index}][${i}]`, optionsCreditCardFD[i])
    }
  })

  // Guardian
  for (var i in memberGuardianComputed.value) {
    fd.append(i, memberGuardianComputed.value[i])
  }

  // console.log(...fd)
  saveMember(fd).then((response) => {
    idMember.value = response.data.member.id
    idMemberMembership.value = response.data.member.membership_members.id
    if (payment == 1) {
      window.location.href = `${FRONTEND_URL.value}members/process?payment_type=1&id=${idMember.value}&redirect_status=succeeded`
    }
  })
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
              {{ category }}</V-Button
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
          v-show="stepActive == 2"
          type="create"
          :title="step.text"
          :inputs="inputsFamily"
          @changeStep="changeStep"
          @returData="returDataFamily"
        />
        <!-- contactPreference -->
        <contactPreference
          v-show="stepActive == 3"
          type="create"
          :title="step.text"
          :inputs="inputsContact"
          @changeStep="changeStep"
          @returnData="returnDataContact"
        />
        <!-- selectMembership -->
        <selectMembership
          v-if="stepActive == 4"
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
          @returnData="returnDataPayment"
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
