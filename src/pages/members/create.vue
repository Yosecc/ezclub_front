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
} from '/@src/models/Members.ts'

import { getMeberships, memberships } from '/@src/models/Memberships.ts'
import { getRecurrences } from '/@src/models/Recurrences.ts'
import { getDiscounts } from '/@src/models/Discounts.ts'
import {
  setInputValuesData,
  perpareDataInputs,
  notyf,
  cleanUpModelInputs,
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
  getMeberships().then((response) => {
    setInputValuesData(
      membershipsData,
      'memberships_id',
      response.data.memberships
    )
  })
  getDiscounts(1, 'membership').then((response) => {
    setInputValuesData(membershipsData, 'discount', response.data.discounts)
  })
  getRecurrences().then((response) => {
    // setInputValuesData(inputsMembership[0],'recurrences_id', response.data)
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
    categories: ['Adult', 'Prospect'],
  },
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

const sendData = (payment, cashObj) => {
  const fd = new FormData()

  // // Informacion
  convertFormData(fd, dataInformationMember.value)

  // Contacto
  let dataContactFD = dataContact.value

  for (var i = 0; i < dataContactFD.length; i++) {
    var item = dataContactFD[i]
    for (var prop in item) {
      fd.append(`notifications[${i}][${prop}]`, item[prop])
    }
  }

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

  fd.append('total', total.value)
  fd.append('payment_type_id', payment)

  if (payment == 1) {
    fd.append('cash', cashObj.cash)
    fd.append('cash_back', cashObj.changeBack)
  }

  let categoriesMembersFD = perpareDataInputs(categoriesMembers.value, {
    array: false,
  })

  for (var i in categoriesMembersFD) {
    fd.append(i, categoriesMembersFD[i])
  }

  let notasInputFD = perpareDataInputs(notasInput.value)
  for (var i in notasInputFD) {
    fd.append(i, notasInputFD[i])
  }

  let optionsCreditCardFD = perpareDataInputs(optionsCreditCard.value)
  for (var i in optionsCreditCardFD) {
    fd.append(i, optionsCreditCardFD[i])
  }

  familyMembership.value.forEach((element, index) => {
    // Informacion
    let familiarX = perpareDataInputs(element.member)
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
  saveMember(fd)
    .then((response) => {
      console.log(response)
      idMember.value = response.data.member.id
      idMemberMembership.value = response.data.member.membership_members.id
      member.value = response.data.member
      console.log(member.value)
      // if (payment == 1) {
      //   window.location.href = `${FRONTEND_URL.value}members/process?payment_type=1&id=${idMember.value}&redirect_status=succeeded`
      // }
    })
    .catch((error) => {
      console.log(error)
      for (var i in error.response.data.errores) {
        error.response.data.errores[i].forEach((e) => {
          notyf.error(`${i}: ${e}`)
        })
      }
    })
}

const limpiarCampos = () => {
  let alimpiar = []
  let campos = ['is_family', 'principal_family']
  cleanUpModelInputs(
    inputsInformation.value.filter((e) => !campos.includes(e.name))
  )

  campos = ['recurrence']
  cleanUpModelInputs(
    membershipsData.value.filter((e) => !campos.includes(e.name))
  )
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
          v-show="
            stepActive == 2 &&
            (categoriesMembers.model == 'Adult' ||
              categoriesMembers.model == 'Prospect')
          "
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
          v-show="stepActive == 5"
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
