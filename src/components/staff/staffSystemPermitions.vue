<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
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
    typeInput: 'select',
    name:'role',
    placeholder: 'Role',
    values: ['',''],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'user',
    placeholder: 'User',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name: 'work_location',
    placeholder: 'Work Location',
    values: ['location','location','location'],
    model: '',
    class: 'is-12',
  },
  {
    typeInput: 'password',
    name:'password',
    placeholder: 'Password',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'password',
    name:'confirm_password',
    placeholder: 'Confirm Password',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'permissions',
    model: [1,2],
    values:[
      {
        id:   1 ,
        name: 'Members',
      },
       {
        id:   2 ,
        name: 'Staff',
      },
       {
        id:   3 ,
        name: 'Company',
      },
    ]
  },
  
])


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
