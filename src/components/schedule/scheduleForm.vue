<script setup lang="ts">
import { computed, ref, defineProps, defineEmit } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  type:{
    type: String,
    default: 'create'
  },
  buttons:{
    type: Array,
    default: ['save', 'back']
  },
  step:{
    type: Number,
    default: 1
  },
})

const titles = computed(()=>{
  if(props.type == 'create'){
    return {
      title: 'Add a new schedule',
      subtitle: 'Add information for a new schedule'
    }
  }
  return {
    title: 'Edit schedule',
    subtitle: 'Edit information for a schedule'
  }
})

const inputs = ref([
  {
    typeInput: 'select',
    name:'discipline',
    placeholder: 'Discipline',
    values: [''],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'select',
    name:'trainer',
    placeholder: 'Trainer',
    values: [''],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'date',
    name:'start',
    placeholder: 'Start Date & Time',
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'date',
    name:'end',
    placeholder: 'End Date & Time',
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'select',
    name:'recurrence',
    placeholder: 'Recurrence',
    values: ['One time only','Daily','Weekly','Monthly','Yearly','Custom'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'select',
    placeholder: 'select',
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'select',
    name:'location',
    placeholder: 'Location',
    values: [''],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'select',
    name:'capacity',
    placeholder: 'Capacity',
    values: [''],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'select',
    name:'type_of_member',
    placeholder: 'Type of Member',
    values: ['Adults Only','Kids Only','Adult & Kids'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'select',
    name:'Level',
    placeholder: 'Level',
    values: ['All Levels','Pro','Expert','Meidum','Beginner'],
    model: '',
    required: true,
    class: 'is-6'
  },

  
  


])

// const emit = defineEmit(['changeStep','saveData']);

</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
  >
    <inputsLayaut
      :inputs-step="inputs"
    />
  </formLayaut>
    

</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';


</style>
