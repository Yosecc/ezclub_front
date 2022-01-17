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
      title: 'Add a new discount',
      subtitle: 'Add information for a new discount'
    }
  }
  return {
    title: 'Edit discount',
    subtitle: 'Edit information for a discount'
  }
})

const inputs = ref([
  {
    typeInput: 'text',
    name:'discount_code',
    placeholder: 'Discount Code / Name',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'select',
    name:'discount_type',
    placeholder: 'Discount Type',
    values: ['Dollar Amount','Percentage Amount'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'discount_value',
    placeholder: 'Discount Value',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name:'applies_to',
    placeholder: 'Applies to',
    values: ['Entire Order','Selected Collection','Select Product'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'Select',
    placeholder: 'Select',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name:'CustomerEligibilite',
    placeholder: 'Customer Eligibilite',
    values: ['Everyone','Selected Group of Customers','Selected Customer'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'Select',
    placeholder: 'Select',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name:'recurrence',
    placeholder: 'Recurrence',
    values: ['One time only','Monthly','Yearly','Specific time frame'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'Select',
    placeholder: 'Select',
    model: '',
    required: true,
    class: 'is-6',
  },
  {
    typeInput: 'select',
    name:'UsageLimits',
    placeholder: 'Usage Limits',
    values: ['Limit the amount of times this can be use','Unlimited','One use per customer'],
    model: '',
    required: true,
    class: 'is-6'
  },
  {
    typeInput: 'text',
    name:'Select',
    placeholder: 'Select',
    model: '',
    required: true,
    class: 'is-6',
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
