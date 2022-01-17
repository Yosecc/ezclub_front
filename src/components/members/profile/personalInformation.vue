<script setup lang="ts">

import { ref, computed, defineProps } from 'vue'

const inputs = ref([
  {
    typeInput: 'text',
    name:'name',
    placeholder: 'First Name',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name:'second_name',
    placeholder: 'Middle Name',
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
    typeInput: 'select',
    name:'gender',
    placeholder: 'Gender',
    values: ['Male','Female','Binario'],
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: ['Card ID','Identification ID','Passport'],
    model: '',
  },
  {
    typeInput: 'number',
    name:'personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'text',
    name:'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
  },
  {
    typeInput: 'date',
    name:'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'email',
    name:'email',
    placeholder: 'Email',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'number',
    name:'phone',
    placeholder: 'Phone Number',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'textarea',
    name:'notes',
    placeholder: 'Notes',
    model: '',
    class: 'is-12',
  },
])

const input_image = ref([{
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Member Picture',
        model: '',
      }])

const props = defineProps({
  category:{
    type: String,
    default: 'Adult'
  }
})

 const isProspect = computed(()=>{
  if(props.category == 'Prospect'){
    return true
  }
  return false
 })
</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
        Personal Information
      </h1>
      <p>Edit member's personal information</p>
      </div>
    </template>
    <template #header-right>
      <VButton color="primary"> Save Changes </VButton>
      <VButton v-if="props.category == 'Prospect'" color="info" class="ml-3"> Convert to Members </VButton>
    </template>
    <template #content>

      <div class="p-6">
        <h1 class="title is-5 mb-0">Profile Picture</h1>
        <p>This is how other will recognize the member</p>
        <div class="d-flex justify-content-center">
          <div class="text-center">
            <VAvatar picture="https://picsum.photos/150/151" class="mb-4" size="xl"/>
            <inputsLayaut
              :inputs-step="input_image"
            />
          </div>
        </div>
      </div>
      <inputsLayaut
        :inputs-step="inputs"
      />
    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>