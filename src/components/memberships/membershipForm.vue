<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  type:{
    type: String,
    default: 'create'
  }
})

const titles = computed(()=>{
  if(props.type == 'create'){
    return {
      title: 'Add a new membership',
      subtitle: 'Add information for a new club membership'
    }
  }
  return {
    title: 'Edit membership',
    subtitle: 'Edit information for a club membership'
  }
})

const inputs = ref([
  {
    typeInput: 'text',
    name: 'membership_name',
    placeholder: 'Membership Name',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'locationstosale',
    placeholder: 'Locations to Sale',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'locationstoaccess',
    placeholder: 'Locations to Access',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'textarea',
    name: 'membership_description',
    placeholder: 'Membership Description',
    model: '',
    class: 'is-12'
  },
  {
    typeInput: 'number',
    name: 'monthly_cost',
    placeholder: '$ Monthly Cost',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'number',
    name: '6monthly_cost',
    placeholder: '$ 6Monthly Cost',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'number',
    name: '12monthly_cost',
    placeholder: '$ 12 Monthly Cost',
    model: '',
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'apply_taxes',
    placeholder: 'Apply Taxes',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'can_discount_by_apply',
    placeholder: 'Can Discount by Apply',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'select',
    name: 'initiation_fee',
    placeholder: 'Initation Fee',
    model: '',
    values:[''],
    class: 'is-4'
  },
  {
    typeInput: 'textarea',
    name: 'internals_notes',
    placeholder: 'Internals Notes',
    model: '',
    class: 'is-12'
  },
])
</script>

<template>
<VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
       {{titles.title}}
      </h1>
      <p>{{titles.subtitle}}</p>
      </div>
    </template>
    <template #header-right>
      <VButton @click="router.back()" class="mr-3"> Go Back </VButton>

      <VButton color="primary"> Save Changes </VButton>
    </template>
    <template #content>
      
      <div class="column is-8 mx-auto">
        <inputsLayaut
          :inputs-step="inputs"
        />
      </div>
    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';


</style>
