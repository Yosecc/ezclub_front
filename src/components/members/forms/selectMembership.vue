<script setup lang="ts">
import {
  computed,
  ref,
  reactive,
  toRaw,
  shallowRef,
  shallowReactive,
  defineProps,
  defineEmit,
  watch,
  onMounted,
} from 'vue'
import {
  viewInput,
  setInputValuesData,
  setInputModelData,
  perpareDataInputs,
  hasErrors,
  getInput,
  notyf,
} from '/@src/models/Mixin.ts'

import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import { recurrences } from '/@src/models/Recurrences.ts'

import {
  membershipsData,
  inputsMembership,
  setInputsEvents,
} from '/@src/models/Members.ts'

import { memberships } from '/@src/models/Memberships.ts'
import { discounts, validateCupon } from '/@src/models/Discounts.ts'
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
const inputsFamilies = ref([])

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

const change = (val) => {
  let inputsMember = null
  inputsMembership.value.forEach((element, index) => {
    if (index == 0) {
      inputsMember = element.inputs
    } else {
      inputsFamilies.value.push(element)
    }
  })

  if (!hasErrors.value) {
    emit('returnData', {
      memberMembership: inputsMember,
      familyMembership: inputsFamilies,
    })
    emit('changeStep', val)
  }
}

const inputsMembershipInputs = computed(() => {
  inputsMembership.value = []

  const inputsMember = ref(JSON.parse(JSON.stringify(membershipsData.value)))

  setInputsEvents(inputsMember.value)

  inputsMembership.value.push({
    member: props.member,
    inputs: inputsMember.value,
  })

  for (var i = 0; i < props.familiares.length; ++i) {
    const inputsMemberFamily = ref(
      JSON.parse(JSON.stringify(membershipsData.value))
    )

    setInputsEvents(inputsMemberFamily.value)

    inputsMembership.value.push({
      member: props.familiares[i],
      inputs: inputsMemberFamily.value,
    })
  }

  return inputsMembership.value
})

const emit = defineEmit(['changeStep', 'returnData'])
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :isloading="isLoading"
    :buttons="['next', 'prev']"
    :step="4"
    @changeStep="change"
  >
    <V-Card
      v-for="(i, k) in inputsMembershipInputs"
      :key="`ss${k}`"
      class="mb-4"
    >
      <p class="">
        <b>
          {{ viewInput(i.member, 'name') }}
          {{ viewInput(i.member, 'second_name') }}
          {{ viewInput(i.member, 'last_name') }}</b
        >
      </p>
      <inputsLayaut :inputs-step="i.inputs" />
    </V-Card>

    <V-Card class="mb-4">
      <inputsLayaut :inputs-step="notes" />
    </V-Card>
  </formLayaut>
</template>

<style lang="scss"></style>
