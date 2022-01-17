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
    default: ['save']
  },
  step:{
    type: Number,
    default: 1
  },
})

const titles = computed(()=>{
  return {
    title: 'Club Payment Method',
    subtitle: 'Edit Club Payment Method'
  }
})

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

// const emit = defineEmit(['changeStep','saveData']);

</script>

<template>
  <formLayaut
    :buttons="props.buttons"
    :step="props.step"
    :titles="titles"
  >
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
   
    <inputsLayaut
      :inputs-step="creditCard"
    />
<br>
    <!-- <hr> -->

    <h1 class="title is-5">Transaction History</h1>
     <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Type</th>
        <th scope="col">Transaction id #</th>
        <th scope="col" class="is-end">
         Amount
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01/01/2021</td>
        <td>Started Subcription</td>
        <td>09876543234567</td>
        <td>$149.99</td>
      </tr>

    </tbody>
  </table>

  </formLayaut>
    

</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';


</style>
