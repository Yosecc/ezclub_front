<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { categories, typeMember, inputsStepData  } from '/@src/components/members/MembersData'

const inputsStep = computed(()=>{
  let stepData =  inputsStepData(props.stepSelected,'data')

  return  stepData.filter( (input) => 
            input.categories.includes(categories.value.model) &&
            (
              input.typeMember == undefined ||
              input.typeMember.includes(
                typeMember.value ? 'Company':'Individual'
              )
            )
          )
})

const props = defineProps({
  stepSelected:{
    type: Number
  }
})
</script>


<template>

  <inputsLayaut
    :inputsStep="inputsStep"
  />

</template>