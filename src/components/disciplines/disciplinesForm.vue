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
      title: 'Add a new discipline',
      subtitle: 'Add information for a new discipline'
    }
  }
  return {
    title: 'Edit discipline',
    subtitle: 'Edit information for a discipline'
  }
})

const inputs = ref([
  {
    typeInput: 'text',
    name:'discipline_name',
    placeholder: 'Discipline Name',
    model: '',
    required: true,
    class: 'is-8',
  },
  {
    typeInput: 'select',
    name:'Locations',
    placeholder: 'Locations',
    model: '',
    values:['', ''],
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'textarea',
    name:'discipline_description',
    placeholder: 'Discipline Description',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'select',
    name:'Trainer',
    placeholder: 'Trainer',
    model: '',
    values:['', ''],
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'select',
    name:'CombineDiscipline',
    placeholder: 'Combine Discipline',
    model: '',
    values:['', ''],
    required: true,
    class: 'is-4',
  },
  {
    typeInput: 'select',
    name:'CamBeAddToMembership',
    placeholder: 'CamBeAddToMembership',
    model: '',
    values:['', ''],
    required: true,
    class: 'is-4',
  },
   {
    typeInput: 'textarea',
    name:'internalNotes',
    placeholder: 'Internal Notes',
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
