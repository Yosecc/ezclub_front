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
    default: ['save']
  },
  step:{
    type: Number,
    default: 1
  },
})

const titles = computed(()=>{
  return {
    title: 'Club Representatives',
    subtitle: 'Edit Club representative'
  }
})

const inputs = ref([
  {
    typeInput: 'text',
    name:'represetative_first_name',
    placeholder: 'Represetative First Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'RepresetativeMiddleName',
    placeholder: 'Represetative Middle Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'RepresetativeLastName',
    placeholder: 'Represetative Last Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'email',
    name:'email',
    placeholder: 'Club Email',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name:'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID','Identification ID','Passport'],
    model: '',
    required: true,
    class:'is-4'
  },
  {
    typeInput: 'number',
    name:'personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: true,
    class: 'is-8',
  },
  {
    typeInput: 'text',
    name:'title',
    placeholder: 'Title',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'date',
    name:'birth_date',
    placeholder: 'Birth Date',
    model: '',
    required: true,
    class: 'is-6',
  },
  { 
    typeInput: 'textarea',
    name:'notes',
    placeholder: 'Notes',
    model: '',
    required: true,
    class: 'is-12',
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
