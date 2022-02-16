<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, watch } from 'vue'
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

const change = (val) => {
 let notifications = []
   inputsSteps.value.forEach((group)=>{
    group.values.forEach((input)=>{
      let sms = input.values.find((e) => e.name == 'sms').model.length
      let email = input.values.find((e) => e.name == 'email').model.length
      notifications.push({
        [input.name]:input.value,
        sms: sms > 0 ? true : false,
        email: email > 0 ? true : false,
      })
    })
   })

  emit('returnData',notifications)
  emit('changeStep',val)
}

const reloadForm = () =>{
  isLoading.value= true
  setTimeout(()=>{
    isLoading.value= false
  }, 500);
}

const inputsSteps = computed(()=>{
  return props.inputs
})

const isCompany = ref(false)

const changeSwitch = (val) =>{
  isCompany.value = !val.input.model
  reloadForm()
}

const emit = defineEmit(['changeStep'])

</script>

<template>
 <formLayaut
  :titles="{title: title }"
  :isLoading="isLoading"
  :buttons="['next','prev']"
  :step="3"
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
