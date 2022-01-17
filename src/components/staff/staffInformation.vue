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
      title: 'Add a new staff',
      subtitle: 'Add information for a new staff'
    }
  }
  return {
    title: 'Edit staff',
    subtitle: 'Edit information for a staff'
  }
})

const inputs = ref([
  {
    typeInput: 'text',
    name:'name',
    placeholder: 'First Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'second_name',
    placeholder: 'Middle Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'last_name',
    placeholder: 'Last Name',
    model: '',
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'company_name',
    placeholder: 'Company Name',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'text',
    name:'company_ein',
    placeholder: 'Company EIN #',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'date',
    name:'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    required: true,
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name:'gender',
    placeholder: 'Gender',
    values: ['Male','Female','Binario'],
    model: '',
    required: true,
    class: 'is-3'
  },
  {
    typeInput: 'text',
    name:'staff_id',
    placeholder: 'Staff ID Card',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID','Identification ID','Passport'],
    model: '',
    class: 'is-4',
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
    name:'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    categories:['Adult','Prospect'],
    typeMember: ['Individual','Company']
  },
  {
    typeInput: 'email',
    name:'email',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-6',
    categories:['Adult','Prospect'],
    typeMember: ['Individual','Company']
  },
  {
    typeInput: 'number',
    name:'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-6',
    categories:['Adult','Prospect'],
    typeMember: ['Individual','Company']
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
