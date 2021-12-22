<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { inputsStepData } from '/@src/components/members/MembersData'

const inputsStep = computed(()=>{
  let stepData =  inputsStepData(props.stepSelected,'data')
  return  stepData
})

const props = defineProps({
  stepSelected:{
    type: Number
  }
})
</script>


<template>
  <!-- <p>{{ inputsStep }}</p> -->
  <inputsLayaut
    :inputsStep="inputsStep"
  />

</template>