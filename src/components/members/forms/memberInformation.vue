<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted, watch } from 'vue'
import { perpareDataInputs, hasErrors, getInput } from '/@src/models/Mixin.ts'
import { dataInformationMember, buttonsDisabled } from '/@src/models/Members.ts'

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

const isLoading = ref(false)

watch(
  () => props.inputs,
  (count, prevCount) => {
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
  const data = props.inputs
  // console.log('data',data)
  if (data.length) {
    // console.log('d', getInput(data,'country_id'))
    getInput(data, 'country_id').model = 34
  }

  console.log('data', data)
  if (isCompany.value) {
    return data.filter((input) => input.typeMember.includes('Company'))
  }

  return data.filter((input) => input.typeMember.includes('Individual'))
})

const isCompany = ref(false)

const changeSwitch = (val) => {
  isCompany.value = !val.input.model
  reloadForm()
}

const change = (val) => {
  let datos = perpareDataInputs(inputsSteps.value)
  if (!hasErrors.value) {
    datos.select_type = !datos.select_type ? 'Individual' : 'Company'
    // datos.is_family = 0
    // datos.principal_family = 1
    dataInformationMember.value = datos
    emit('returData', datos)
    emit('changeStep', val)
  }
}

const emit = defineEmit(['changeStep', 'returData'])
</script>

<template>
  <formLayaut
    :titles="{ title: title }"
    :is-loading="isLoading"
    :buttons="['next']"
    :buttons-disabled="buttonsDisabled"
    :step="1"
    @changeStep="change"
  >
    <inputsLayaut :inputs-step="inputsSteps" @changeSwitch="changeSwitch" />
  </formLayaut>
</template>

<style lang="scss">
// @import '../../scss/abstracts/_variables.scss';
// @import '../../scss/abstracts/_mixins.scss';
</style>
