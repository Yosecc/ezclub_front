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
  memberMembership,
  categorieActive,
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
  inputsMembership.forEach((element, index) => {
    if (index == 0) {
      inputsMember = element.inputs
    } else {
      inputsFamilies.value.push(element)
    }
  })

  if (!hasErrors.value) {
    memberMembership.value = inputsMember

    emit('returnData', {
      memberMembership: inputsMember,
      familyMembership: inputsFamilies,
    })
    emit('changeStep', val)
  }
}

const inputsMembershipInputs = computed(() => {
  const datos = reactive([])
  inputsMembership.value = []
  let membresiaInputs = []
  membershipsData.forEach((e) => {
    membresiaInputs.push(JSON.parse(JSON.stringify(e)))
  })
  datos.push(
    arregloDatos(
      props.member,
      JSON.parse(JSON.stringify(membresiaInputs)),
      '1P'
    )
  )

  for (var i = 0; i < props.familiares.length; ++i) {
    datos.push(
      arregloDatos(
        props.familiares[i],
        JSON.parse(JSON.stringify(membresiaInputs)),
        `${i}F`
      )
    )
  }
  inputsMembership.value = datos
  return datos
})

const arregloDatos = (member, membresiaInputs, id) => {
  //
  const arregloMembresias = {
    member: null,
    membresia: null,
  }

  if (categorieActive.value == 'Prospect') {
    getInput(membresiaInputs, 'recurrence').model = false
  } else {
    getInput(membresiaInputs, 'recurrence').model = true
  }

  arregloMembresias.member = member
  arregloMembresias.membresia = membresiaInputs

  setInputsEvents(arregloMembresias.membresia, arregloMembresias.member)

  return arregloMembresias
}

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

      <inputsLayaut :inputs-step="i.membresia" />
    </V-Card>

    <V-Card class="mb-4">
      <inputsLayaut :inputs-step="notes" />
    </V-Card>
  </formLayaut>
</template>

<style lang="scss"></style>
