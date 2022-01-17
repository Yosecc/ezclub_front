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

const families = ref([
  {
    id: 1,
    name: 'Wonder Woman',
    subtitle: 'Mother/Adult',
    img: 'https://picsum.photos/150/150'
  },
  {
    id: 2,
    name: 'Lionel Messi',
    subtitle: 'Father/Minor',
    img: 'https://picsum.photos/150/151'
  },
])

</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
        Family Members
        </h1>
      <p>Edit member's family members</p>
      </div>
    </template>
    <template #header-right>
      <!-- <VButton color="primary"> Save Changes </VButton> -->
    </template>
    <template #content>
      <div class="columns is-multiline">
        <div class="column is-4 mb-4"
          v-for="(item, key) in families"
            :key="`family-${key}`"
        >
          <VBlock
            
            :title="item.name" 
            :subtitle="item.subtitle" 
            class="border-1 p-4 radius-small">
            <template #icon>
              <VAvatar
                size="medium"
                :picture="item.img"
              />
            </template>
            <template #action>
              <FlexTableDropdown />
            </template>
          </VBlock>
        </div>
      </div>

    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>