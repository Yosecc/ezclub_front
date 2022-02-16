<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, onMounted, watch } from 'vue'
import { perpareDataInputs, hasErrors } from '/@src/models/Mixin.ts'

const props = defineProps({
  type:{
    type: String,
    default: 'create'
  },
  inputs:{
    type: Array,
    default: []
  },
  title:{
    type: String,
    default: ''
  },
})

const isLoading = ref(false)

watch(
  () => props.inputs,
  (count, prevCount) => {
    reloadForm()
  }
)

const reloadForm = () =>{
  isLoading.value= true
  setTimeout(()=>{
    isLoading.value= false
  }, 500);
}

const inputsSteps = computed(()=>{
  if (isCompany.value) {
    return props.inputs.filter((input)=> input.typeMember.includes("Company") )
  }
  return props.inputs.filter((input)=> input.typeMember.includes("Individual") )
})

const isCompany = ref(false)

const changeSwitch = (val) =>{
  isCompany.value = !val.input.model
  reloadForm()
}

const change = (val) => {
  let datos = perpareDataInputs(inputsSteps.value)
  if(!hasErrors.value){
    datos.select_type = !datos.select_type ? 'Individual':'Company'
    datos.is_family = 0
    datos.principal_family = 1
    emit('returData', datos)
    emit('changeStep',val)
  }
}

const emit = defineEmit(['changeStep','returData'])

</script>

<template>
 <formLayaut
  :titles="{title: title }"
  :isLoading="isLoading"
  :buttons="['next','back']"
  :step="1"
  @changeStep="change"
 >
    <inputsLayaut
      :inputs-step="inputsSteps"
      @changeSwitch="changeSwitch"
    />
 </formLayaut>
</template>

<style lang="scss">
// @import '../../scss/abstracts/_variables.scss';
// @import '../../scss/abstracts/_mixins.scss';


</style>
