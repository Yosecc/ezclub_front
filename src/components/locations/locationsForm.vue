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
      title: 'Add a new location',
      subtitle: 'Add information for a new location'
    }
  }
  return {
    title: 'Edit location',
    subtitle: 'Edit information for a location'
  }
})

const inputs = ref([
  {
    typeInput: 'file',
    name:'location_imge',
    placeholder: 'Location image',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'text',
    name:'location_name',
    placeholder: 'Location Name',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'text',
    name:'location_address',
    placeholder: 'Location address',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'text',
    name:'location_map',
    placeholder: 'Location map (URL)',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'select',
    name:'status',
    placeholder: 'Status',
    model: '',
    values:['Active', 'Inactive'],
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
