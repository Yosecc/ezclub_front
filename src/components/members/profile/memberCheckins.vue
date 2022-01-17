<script setup lang="ts">

import { ref } from 'vue'

// const inpust = ref([
//   {
//     typeInput: 'text',
//     name:'first_name',
//     placeholder: 'First Name',
//     model: '',
//     class: 'is-4',
//   },
//   {
//     typeInput: 'text',
//     name:'middle_name',
//     placeholder: 'Last Name',
//     model: '',
//     class: 'is-4',
//   },
//   {
//     typeInput: 'text',
//     name:'last_name',
//     placeholder: 'Last Name',
//     model: '',
//     class: 'is-4',
//   },
//   {
//     typeInput: 'email',
//     name:'email',
//     placeholder: 'Email',
//     model: '',
//     class: 'is-8',
//   },
//   {
//     typeInput: 'number',
//     name:'phone',
//     placeholder: 'phone',
//     model: '',
//     class: 'is-4',
//   },
  
//   {
//     typeInput: 'text',
//     name:'address',
//     placeholder: 'Address',
//     model: '',
//     class: 'is-8',
//   },
//   {
//     typeInput: 'select',
//     name:'relationships',
//     placeholder: 'Relationship',
//     values: ['Sand','Dother','Wife','Girlfriend','Boyfriend','Father','Mother'],
//     model: '',
//     class:'is-4',
//     required: false,
//   },
// ])



</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
        Check-ins History
        </h1>
      <p>Edit member's check-ins history</p>
      </div>
    </template>
    <template #header-right>
    </template>
    <template #content>
     <div class="p-6">
      <div class="d-flex">
        <V-Field class="field mr-3">
          <V-Control>
            <input
              type="date"
              class="input"
              placeholder="input.placeholder"
            />
          </V-Control>
        </V-Field>
        <V-Field class="field mr-3">
          <V-Control>
            <input
              type="date"
              class="input"
              placeholder="input.placeholder"
            />
          </V-Control>
        </V-Field>
        <VButton color="primary"> Export </VButton>

      </div>

      <div class="mt-4">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">TIME</th>
              <th scope="col">STAFF</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="i in 20">
              <td>01/01/2021</td>
              <td>12:00 pm</td>
              <td>Diego Vera</td>
            </tr>
            
          </tbody>
        </table>
      </div>

        
      </div>

    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>