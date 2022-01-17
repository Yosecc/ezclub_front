<script setup lang="ts">

import { ref } from 'vue'


const creditCard = ref([
  {
    typeInput: 'text',
    name:'name_card',
    placeholder: 'Name Card',
    model: '',
    class: 'is-12',
    keyUp: (event, input)=>{
      flipped.value = false
    }
  },
  {
    typeInput: 'text',
    name:'number_card',
    placeholder: 'Number Card',
    model: '',
    class: 'is-12',
    maxLength: 19,
    keyUp: (event, input)=>{
      flipped.value = false
      var code = (event.which) ? event.which : event.keyCode;

      if(code==8) { // backspace.
        return true;
      } else if(code>=48 && code<=57) { // is a number.
        input.model = input.model.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
      } else{ // other keys.
        input.model = input.model.substr(0,input.model.length -1)
        return false;
      }

    }
  },
  {
    typeInput: 'text',
    name:'expiration_date',
    placeholder: 'Expiration Date',
    model: '',
    class: 'is-6',
    maxLength: 5,
    keyUp: (event, input)=>{
      flipped.value = false
      var code = (event.which) ? event.which : event.keyCode;

      if(code==8) { // backspace.
        return true;
      } else if(code>=48 && code<=57) { // is a number.
        if(input.model.length < 4){
          input.model = input.model.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1/').trim();
        }
      } else{ // other keys.
        input.model = input.model.substr(0,input.model.length -1)
        return false;
      }
    }
  },
  {
    typeInput: 'text',
    name:'password_card',
    placeholder: 'CVC',
    model: '',
    class: 'is-6',
    maxLength: 3,
    keyUp: (event, input)=>{
      flipped.value = true
      var code = (event.which) ? event.which : event.keyCode;

      if(code==8) { // backspace.
        return true;
      } else if(code>=48 && code<=57) { // is a number.
        return true
      } else{ // other keys.
        input.model = input.model.substr(0,input.model.length -1)
        return false;
      }
    }
  },
])

const creditCardData = (campo) => {
  return creditCard.value.find((element) => element.name == campo)
}

const flipped = ref(false)
</script>


<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
       Credit Card Information
      </h1>
      <p>Edit member's payment information</p>
      </div>
    </template>
    <template #header-right>
      <VButton color="primary"> Save Changes </VButton>
    </template>
    <template #content>
      <VCreditCard 
        color="orange"
        :number="creditCardData('number_card').model"
        :name="creditCardData('name_card').model"
        :expiry="creditCardData('expiration_date').model"
        :cvc="creditCardData('password_card').model"
        :flipped="flipped" 
        @flip="flipped = !flipped" 
        class="mb-6"
      />
      <div class="column is-8 mx-auto">
        <inputsLayaut
          :inputs-step="creditCard"
        />
      </div>
    </template>
    
  </VCardAdvanced>
</template>

<style lang="scss" scope>
  
</style>