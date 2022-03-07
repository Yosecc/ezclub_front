<script setup lang="ts">
import { computed, ref, reactive, defineProps, defineEmit, watch } from 'vue'
import {
  viewInput,
  setInputValuesData,
  setInputModelData,
  perpareDataInputs,
  hasErrors,
} from '/@src/models/Mixin.ts'

import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import { recurrences } from '/@src/models/Recurrences.ts'
// import { membershipsData  } from '/@src/models/Members.ts'
import { memberships } from '/@src/models/Memberships.ts'
import { discountsData } from '/@src/models/Discounts.ts'
import { trainers } from '/@src/models/Staffs.ts'

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  inputs: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: '',
  },
  member: {
    type: Array,
    default: [],
  },
  familiares: {
    type: Array,
    default: [],
  },
  memberships: {
    type: Array,
    default: [],
  },
  notes: {
    type: Array,
    default: [],
  },
})

const isLoading = ref(false)

watch(
  () => props.inputs,
  (data, prevData) => {
    reloadForm()
  }
)

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const inputsSteps = computed(() => {
  return props.inputs
})

const membershipsInputs = [
  {
    typeInput: 'checkbox',
    name: 'recurrence',
    placeholder: 'Recurrence',
    model: ['recurrence'],
    disabled: false,
    class: 'is-12',
  },
  {
    typeInput: 'selectDataActionChange',
    name: 'memberships_id',
    placeholder: 'Membership Type',
    values: [],
    model: '',
    disabled: false,
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'radioBoxs',
    name: 'recurrences_id',
    placeholder: 'Recurrence & Amount',
    values: [],
    model: '',
    disabled: false,
    class: 'is-12',
    filterName: 'descriptions',
    required: true,
    otros: 'amount',
  },
  {
    typeInput: 'hidden',
    name: 'amount',
    placeholder: 'Amount',
    model: '',
    disabled: false,
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'selectDataActionChange',
    name: 'locations_id',
    placeholder: 'Locations Sale',
    values: [],
    model: '',
    disabled: false,
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'diciplines',
    text: 'Diciplines',
    required: true,
    model: [],
    values: [],
    disabled: false,
    class: 'is-12',
  },
  {
    typeInput: 'number',
    name: 'initiation_fee',
    placeholder: 'Initiation fee',
    model: [],
    disabled: true,
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'checkbox',
    name: 'is_initiation_fee',
    placeholder: 'No initiation fee',
    model: [],
    disabled: false,
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    model: '',
    disabled: false,
    class: 'is-6',
  },
  {
    typeInput: 'selectData',
    name: 'staff_id',
    placeholder: 'Trainer',
    values: [],
    model: '',
    disabled: false,
    class: 'is-6',
    filterOptionText: function (option) {
      return `${option.name} ${option.second_name} ${option.last_name}`
    },
  },
]

const copiamembershipsInputs = computed(() => {
  return JSON.parse(JSON.stringify(membershipsInputs))
})

const inputsFamilies = computed(() => {
  let data = []
  props.familiares.forEach((element) => {
    if (element.find((e) => e.name == 'name').model != '') {
      // console.log(membershipsInputs)
      let membershipDataFor = JSON.parse(JSON.stringify(membershipsInputs))
      setInputValuesData(membershipDataFor, 'memberships_id', memberships.value)
      setInputValuesData(membershipDataFor, 'discount', discountsData.value)
      setInputValuesData(membershipDataFor, 'staff_id', trainers.value)

      data.push({
        family: element,
        inputs: membershipDataFor,
      })
    }
  })
  // console.log('inputsFamilies',data)
  return data
})

const change = (val) => {
  let datos = perpareDataInputs(inputsSteps.value)
  if (!hasErrors.value) {
    emit('returnData', {
      memberMembership: inputsSteps,
      familyMembership: inputsFamilies,
    })
    emit('changeStep', val)
  }
}

const changeMembership = (obj) => {
  if (obj.input.name == 'memberships_id') {
    let membershipSelected = obj.input.values.find(
      (element) => element.id == obj.input.model
    )
    setInputModelData(
      obj.inputsStep,
      'initiation_fee',
      membershipSelected.initiation_fee
    )
    let locations = []
    membershipSelected.locations.forEach((element) => {
      if (element.sale == 1) {
        locations.push(element.company_locations)
      }
    })
    setInputValuesData(obj.inputsStep, 'locations_id', locations)
    let recurrencesData = []
    membershipSelected.amounts.forEach((element) => {
      let recurrencesD = recurrences.value.find(
        (e) => e.id == element.recurrences_id
      )
      recurrencesD.amount = element.amount
      recurrencesData.push(recurrencesD)
    })
    setInputValuesData(obj.inputsStep, 'recurrences_id', recurrencesData)
    reloadForm()
  }
  if (obj.input.name == 'locations_id') {
    getLocationsDiciplines([obj.input.model]).then((response) => {
      setInputValuesData(obj.inputsStep, 'diciplines', response.data)
      reloadForm()
    })
  }
}

const changeRecurrence = (input, inputs) => {
  setInputModelData(
    inputsSteps,
    'amount',
    input.values.find((e) => e.id == input.model).amount
  )
}

const changeRecurrenceFamily = (input, inputs) => {
  setInputModelData(
    inputs,
    'amount',
    input.values.find((e) => e.id == input.model).amount
  )
}

const emit = defineEmit(['changeStep', 'returnData'])
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :is-loading="isLoading"
    :buttons="['next', 'prev']"
    :step="4"
    @changeStep="change"
  >
    <V-Card class="mb-4">
      <p class="">
        <b>
          {{ viewInput(member, 'name') }}
          {{ viewInput(member, 'second_name') }}
          {{ viewInput(member, 'last_name') }}</b
        >
      </p>
      <!-- <p>{{ viewInput(inputsSteps, 'diciplines') }}</p> -->
      <inputsLayaut
        :inputs-step="inputsSteps"
        @changeSelect="changeMembership"
        @changeRadio="changeRecurrence"
      />
    </V-Card>

    <V-Card
      class="mb-4"
      v-for="(data, key) in inputsFamilies"
      :key="`da${key}`"
    >
      <p class="mb-5">
        <b>
          {{ viewInput(data.family, 'name') }}
          {{ viewInput(data.family, 'second_name') }}
          {{ viewInput(data.family, 'last_name') }}</b
        >
      </p>
      <!-- <p>{{ viewInput(data.inputs,'diciplines') }}</p> -->
      <inputsLayaut
        :inputs-step="data.inputs"
        @changeSelect="changeMembership"
        @changeRadio="changeRecurrenceFamily"
        @changeCheckbox="reloadForm"
      />
    </V-Card>

    <V-Card class="mb-4">
      <inputsLayaut :inputs-step="notes" />
    </V-Card>
  </formLayaut>
</template>

<style lang="scss"></style>
