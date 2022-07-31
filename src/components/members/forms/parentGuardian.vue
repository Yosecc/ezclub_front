<script setup lang="ts">
import { computed, defineProps, defineEmit, watch } from 'vue'

import { parentInsputs, member, memberGuardian } from '/@src/models/Members.ts'

import { getInput, notyf } from '/@src/models/Mixin.ts'

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
})

const emit = defineEmit(['changeStep', 'returData'])

const change = (val) => {
  emit('changeStep', val)
}

watch(
  () => memberGuardian.value,
  () => {
    if (memberGuardian.value) {
      console.log(memberGuardian.value)
      getInput(parentInsputs.value, 'member_id').model = memberGuardian.value.id
      getInput(parentInsputs.value, 'parent_email').model =
        memberGuardian.value.email

      getInput(parentInsputs.value, 'postal_code').model =
        memberGuardian.value.postal_code
      getInput(parentInsputs.value, 'city_id').model =
        memberGuardian.value.city_id
      getInput(parentInsputs.value, 'country_id').model =
        memberGuardian.value.country_id
      getInput(parentInsputs.value, 'state_id').model =
        memberGuardian.value.state_id
      parentInsputs.value.forEach((e) => {
        e.required = false
      })
    } else {
      getInput(parentInsputs.value, 'member_id').model = ''
      getInput(parentInsputs.value, 'parent_email').model = ''
      getInput(parentInsputs.value, 'postal_code').model = ''
      getInput(parentInsputs.value, 'city_id').model = ''
      getInput(parentInsputs.value, 'country_id').model = ''
      getInput(parentInsputs.value, 'state_id').model = ''
      parentInsputs.value.forEach((e) => {
        e.required = true
      })
    }
  }
)
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :buttons="['next', 'prev']"
    :step="2"
    @changeStep="change"
  >
    <SearchBar class="" v-model="memberGuardian" />

    <div
      v-if="!memberGuardian"
      class="d-flex justify-content-center mt-5 w-100"
      style="border-bottom: 1px solid rgba(0, 0, 0, 0.05)"
    >
      <p>Or</p>
    </div>

    <inputsLayaut v-if="!memberGuardian" :inputs-step="parentInsputs" />
  </formLayaut>
</template>
