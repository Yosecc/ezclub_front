<script setup lang="ts">

import { ref } from 'vue'

const inpust = ref([
  {
    typeInput: 'text',
    name:'first_name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'middle_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'last_name',
    placeholder: 'Last Name',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'email',
    name:'email',
    placeholder: 'Email',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'number',
    name:'phone',
    placeholder: 'phone',
    model: '',
    class: 'is-4',
  },
  
  {
    typeInput: 'text',
    name:'address',
    placeholder: 'Address',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'select',
    name:'relationships',
    placeholder: 'Relationship',
    values: ['Sand','Dother','Wife','Girlfriend','Boyfriend','Father','Mother'],
    model: '',
    class:'is-4',
    required: false,
  },
])



</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
        Emergency Contact
        </h1>
      <p>Edit member's emergency contact </p>
      </div>
    </template>
    <template #header-right>
      <VButton color="primary"> Save Changes </VButton>
    </template>
    <template #content>
     <div class="p-6">
        <h1 class="title is-5 "> Emergency Contact Information</h1>

        <inputsLayaut
          :inputs-step="inpust"
        />


      </div>

    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>