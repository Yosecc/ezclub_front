<script setup lang="ts">

import { ref } from 'vue'

const inpust = ref([
  {
    typeInput: 'text',
    name:'agreement_date',
    placeholder: 'Agreement Date',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name:'sold_by',
    placeholder: 'Sold By',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name:'membership_type',
    placeholder: 'Membership Type',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name:'deciplines',
    placeholder: 'Deciplines',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'date',
    name:'start_date',
    placeholder: 'Start Date',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'date',
    name:'end_type',
    placeholder: 'End Date',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name:'auto_renew',
    placeholder: 'Auto Renew',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name:'discount_type',
    placeholder: 'Discount Type',
    model: '',
    class: 'is-3',
  },
])

const historyContract = ref([
  {
    contract:         'URL',
    agreement_date:   '01/01/2021',
    sold_by:          'Diego Valera',
    membership_type:  '1 Martial Art',
    deciplines:       'Boxing',
    start_date:       '01/01/2021',
    end_type:         '01/01/2021',
    auto_renew:       'YES',
    discount_type:    '10%'
  },
  {
    contract:         'URL',
    agreement_date:   '01/01/2021',
    sold_by:          'Diego Valera',
    membership_type:  '1 Martial Art',
    deciplines:       'Boxing',
    start_date:       '01/01/2021',
    end_type:         '01/01/2021',
    auto_renew:       'YES',
    discount_type:    '10%'
  },
  {
    contract:         'URL',
    agreement_date:   '01/01/2021',
    sold_by:          'Diego Valera',
    membership_type:  '1 Martial Art',
    deciplines:       'Boxing',
    start_date:       '01/01/2021',
    end_type:         '01/01/2021',
    auto_renew:       'YES',
    discount_type:    '10%'
  },
])
</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
       Membership / Contract
      </h1>
      <p>Edit member's membership and contract information</p>
      </div>
    </template>
    <template #header-right>
      <VButton color="primary"> Save Changes </VButton>
    </template>
    <template #content>
      <VCard class="mb-4">
        <h1 class="title is-6">Active Contract Information</h1>
        <div class="columns is-multiline">
           <div class="column is-2 text-center">
             <img src="/public/images/pdf_icon.png" width="40" alt=""><br>
             <a href="#">Contract</a>
           </div>
           <div class="column is-10">
             <inputsLayaut
                :inputs-step="inpust"
              />
           </div>
        </div>
      </VCard>

      <VCard class="mb-4">
        <h1 class="title is-6">Inactive Contract Information</h1>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Contract</th>
              <th scope="col">Agreement Date</th>
              <th scope="col">Sold By</th>
              <th scope="col">Membership Type</th>
              <th scope="col">Decipline</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Auto Renew</th>
              <th scope="col">Discount Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, key) in historyContract"
              :key="`item-${key}`"
            >
              <td><a :href="item.contract"><img src="/public/images/pdf_icon.png" width="40" alt=""></a></td>
              <td>{{ item.agreement_date }}</td>
              <td>{{ item.sold_by }}</td>
              <td>{{ item.membership_type }}</td>
              <td>{{ item.deciplines }}</td>
              <td>{{ item.start_date }}</td>
              <td>{{ item.end_type }}</td>
              <td>{{ item.auto_renew }}</td>
              <td>{{ item.discount_type }}</td>
            </tr>
          </tbody>
        </table>
      </VCard>

      <VCard class="mb-4">
        <h1 class="title is-6">Active Waiver Information</h1>
        <div class="text-center column is-4">
          <a href="">
          <img src="/public/images/pdf_icon.png" width="40" alt="">
          <p>Waiver_1234567.pdf</p>
        </a>
        </div>
      </VCard>
        

    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>