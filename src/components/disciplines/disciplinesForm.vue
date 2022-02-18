<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
import {
  setInputValuesData,
  perpareDataInputs,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'

import { inputs, saveDicipline, putDicipline } from '/@src/models/Diciplines.ts'
import { company } from '/@src/models/Companies.ts'
import { trainers } from '/@src/models/Staffs.ts'

const router = useRouter()

const props = defineProps({
  type: {
    type: String,
    default: 'create',
  },
  buttons: {
    type: Array,
    default: ['save', 'back'],
  },
  step: {
    type: Number,
    default: 1,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

const titles = computed(() => {
  if (props.type == 'create') {
    return {
      title: 'Add a new discipline',
      subtitle: 'Add information for a new discipline',
    }
  }
  return {
    title: 'Edit discipline',
    subtitle: 'Edit information for a discipline',
  }
})

watch(company, () => {
  setInputValuesData(inputs, 'locations', company.value.locations)
})
watch(trainers, () => {
  setInputValuesData(inputs, 'trainers', trainers.value)
})
onMounted(() => {
  // console.log(company.value.locations)
})

const saveData = () => {
  const data = perpareDataInputs(inputs.value)
  console.log(data)
  if (props.type == 'create') {
    saveDicipline(data).then((response) => {
      cleanUpModelInputs(inputs.value)
      router.back()
    })
  } else {
    putDicipline(route.query.id, data).then((response) => {
      // cleanUpModelInputs(inputs.value)
      // router.back()
    })
  }
}
</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :titles="titles"
    :is-loading="isLoading"
    @saveData="saveData"
  >
    <inputsLayaut :inputs-step="inputs" />
  </formLayaut>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
</style>
