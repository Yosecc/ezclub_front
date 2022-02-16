<script setup lang="ts">
import { computed, ref, defineProps, defineEmit, watch } from 'vue'
import { viewInput, setInputValuesData, setInputModelData, moneda } from '/@src/models/Mixin.ts'
import { getLocationsDiciplines } from '/@src/models/Diciplines.ts'
import { paymentData, flipped, optionsCreditCard } from '/@src/models/PaymentMethodsData.ts'
import { calcularMeses, getValueInput } from '/@src/models/Mixin.ts'
import moment from 'moment'

import { idMember } from '/@src/models/Members.ts'

// watch(
//   ()=> idMember,
//   (data, prevData)=>{
//     cardPayment.value = true
//   }
// )

const props = defineProps({
  type:{
    type: String,
    default: 'create'
  },
  // inputs:{
  //   type: Array,
  //   default: []
  // },
  title:{
    type: String,
    default: ''
  },
  member:{
    type: Array,
    default: []
  },
  familiares:{
    type: Array,
    default: []
  },
  memberMembership:{
    type: Array,
    default: []
  },
  familyMembership:{
    type: Array,
    default: []
  },
})

const isLoading = ref(false)

const emit = defineEmit(['changeStep','returnData'])

const change = (val) => {

  let obj = {
    paymentData,
    dataCardFamiliares,
    total
  }
  emit('returnData', obj)
  emit('changeStep',val)
}


//  MEMBER //////////////////

const infoMembership = computed(()=>{
  let data = getValueInput(props.memberMembership, 'memberships_id')
  return data != undefined ? data : []
})

const recurrence = computed(()=>{
  let data = getValueInput(props.memberMembership, 'recurrences_id')
  return data != undefined ? data : []
})

const initiationFeeMember = computed(()=>{
  let data = viewInput(props.memberMembership,"initiation_fee")
  return data != undefined ? data : []
})


const prorated = computed(() => {
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0 
  let diferencia = 0
  if(recurrence.value.days >= 30){
    diferencia = (hoyDay - recurrence.value.payday)
    calculo = (recurrence.value.amount / 30) * diferencia
  }
  return {
    days: diferencia,
    amount: Math.abs(Math.round(calculo))
  }
})

const proratedMethod = (recurrence) => {
  console.log(recurrence)
  let hoyDay = parseFloat(moment().format('DD'))
  let calculo = 0 
  let diferencia = 0
  if(recurrence.days >= 30){
    diferencia = (hoyDay - recurrence.payday)
    calculo = (recurrence.amount / 30) * diferencia
  }
  return {
    days: diferencia,
    amount: Math.abs(Math.round(calculo))
  }
}

const objTax = (membership) =>{
  if(!membership.value){
    membership = membership
  }else{
    membership = membership.value
  }


  if(membership.tax.type == 'percentaje'){
    return {
      text: `${membership.tax.value}%`,
      value: membership.tax.value
    }
  }
  return {
    text: moneda(membership.tax.value),
    value: membership.tax.value
  }
}

const tax = computed(()=>{
    return objTax(infoMembership)
})

const subtotalMemberMembership = computed(()=>{
  let suma = 0
  suma += recurrence.value.amount * calcularMeses(recurrence.value.days)
  suma += initiationFeeMember.value
  suma = (suma / 100 * tax.value.value) + suma
  suma -= prorated.value.amount

  return suma
})

const total = computed(()=>{
  let suma = 0
  suma += subtotalMemberMembership.value
  suma += totalFamily.value
  return suma
})

// FAMILY ///////////////////

const totalFamily = ref(0)

const dataCardFamiliares = computed(()=>{
  infoFamliarMembership.value.map((familiar)=>{
    familiar.paymentData = inputspaymentData
  })
  return infoFamliarMembership.value
})

const FamiliaresMemberships = computed(()=>{

  console.log('familiares',props.familiares)
  return props.familyMembership
})

// const infoFamliarMembership = computed(()=>{
//   let familiares = []
//   props.familiares.forEach((familiar)=>{

//     let member = null
//     let membership = null
//     let amount = null
//     let initiation_fee = null
//     let tax = null
//     let subtotal = 0
//     props.familyMembership.filter((element)=>{

//       if(viewInput(element.family, 'name') == viewInput(familiar,'name') ){

//        member = {name: viewInput(familiar,'name') + ' ' +viewInput(familiar,'second_name') + ' ' +viewInput(familiar,'last_name')}

//        membership = element.inputs.find((e)=>e.name == 'memberships_id' ).values
//        .find((i)=> i.id == viewInput(element.inputs,'memberships_id'))

//        amount = element.inputs.find((e)=>e.name == 'type_amount' ).values
//        .find((i)=> i.id == viewInput(element.inputs,'type_amount'))

//        amount = defineAmount(amount.id, membership)

//        tax = objTax(membership)

//        initiation_fee = viewInput(element.inputs,"is_initiation_fee").length == 0 ? viewInput(element.inputs,"initiation_fee") : 0

//        subtotal = amount.amount + initiation_fee

//        subtotal = (subtotal / 100 * tax.value) + subtotal

//        totalFamily.value = totalFamily.value + subtotal
//        familiares.push({member, membership, amount, initiation_fee, tax, subtotal})
//       }

//     })
    
//   })
//   console.log('familiares',familiares)
//   return familiares
// })

// watch(
//   () => props.inputs,
//   (data, prevData) => {
//     reloadForm()
//   }
// )

// const reloadForm = () =>{
//   isLoading.value= true
//   setTimeout(()=>{
//     isLoading.value= false
//   }, 500);
// }


// const inputsSteps = computed(()=>{
//   return JSON.parse(JSON.stringify(props.inputs))
// })

// const inputsFamilies = computed(()=>{
//   let data = []
//   props.familiares.forEach((element)=>{
//     if(element.find((e)=> e.name == 'name').model != ''){
//       data.push({ 
//         family: element,
//         inputs: JSON.parse(JSON.stringify(props.inputs))
//       })
//     }
//   })
//   return data
// })








// const isDiferentCard = ref(false)

// const changeSwitch = (obj) => {
//   isDiferentCard.value = !obj.input.model
// }

// const inputspaymentData = JSON.parse(JSON.stringify(paymentData.value))



// const changeCheckbox = (input) => {
//   console.log(input)
// }



// const cardPayment = ref(false)



</script>

<template>
  <formLayaut
  :titles="{title: title }"
  :isLoading="isLoading"
  :buttons="['prev']"
  :step="5"
  @changeStep="change"
  >

<p>{{ FamiliaresMemberships }}</p>
   <table class="table is-hoverable is-striped is-fullwidth ">
      <thead>
        <tr>
          <th scope="col">Members</th>
          <th scope="col">Membership Name</th>
          <th scope="col">Recurrence</th>
          <th scope="col">Prorated</th>
          <th scope="col">Membership Cost</th>
          <th scope="col">Initiation Fee</th>
          <!-- <th scope="col">Discount</th> -->
          <th scope="col">Taxes</th>
          <th scope="col">Sub Total</th>
        </tr>
      </thead>
      <tbody>
         <tr>
          <td><p><b>{{ viewInput(member,'name') }} {{ viewInput(member,'second_name') }} {{ viewInput(member,'last_name') }}</b></p></td>
          <td v-if="infoMembership.legnth != 0">{{ infoMembership.name }}</td>
          <td v-if="recurrence.length != 0">{{ recurrence.descriptions }}</td>
          <td v-if="recurrence.length != 0">  
            <span v-if="recurrence.days > 30">
              {{ prorated.days }} days : <br> - {{ moneda(prorated.amount) }}
            </span>
            <span v-else>-</span>
          </td>
          <td>{{ moneda(recurrence.amount) }} <span v-if="calcularMeses(recurrence.days) > 1">x {{ calcularMeses(recurrence.days) }}</span></td>
          <td>{{ moneda(initiationFeeMember) }}</td>
          <td>{{ tax.text }}</td>
          <td>{{ moneda(subtotalMemberMembership) }}</td>
          
        </tr>
        <tr
          v-for="familiar in props.familyMembership" 
        >
        <!--   <td>{{ viewInput(familiar.family,'name') }}</td>
           <td>{{ getValueInput(familiar.inputs,"memberships_id").name }}</td>
          <td>{{ getValueInput(familiar.inputs,'recurrences_id').descriptions }}</td> -->
         <!--  <td>
            <span v-if="getValueInput(familiar.inputs,'recurrences_id').days > 30">
              {{ proratedMethod(getValueInput(familiar.inputs,'recurrences_id')).days }} days : <br> - {{ moneda(proratedMethod(getValueInput(familiar.inputs,'recurrences_id')).amount) }}
            </span>
            <span v-else>-</span>
          </td> -->
         <!--  <td>dfg
            dfgf
            {{ moneda(getValueInput(familiar.inputs,'recurrences_id').amount) }}

         </td> -->
          <td>{{ moneda(familiar.initiation_fee) }}</td>
          <td></td>
          <td>{{ familiar.tax.text }}</td>
          <td>{{ moneda(familiar.subtotal) }}</td> 

        </tr>
        <tr>
          <td style="text-align: right;" colspan="7">
            Total
          </td>
          <td class="is-end">
            {{ moneda(total) }}
          </td>
        </tr>
        
      </tbody>
    </table>

  </formLayaut>
</template>

<style lang="scss">



</style>
