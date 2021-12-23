<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { inputsStepData } from '/@src/components/members/MembersData'
import { diferenteCard, paymentData } from '/@src/components/payment/PaymentMethodsData'

const inputsStepPrincipal = computed(()=>{
  let stepData =  inputsStepData(props.stepSelected,'data')
  stepData = stepData.find((data) => data.member.type == 'principal')
  let memberPrincipal = inputsStepData(1,'data')
  
  stepData.member.name = memberPrincipal.find((input) => input.name == 'name').model
  stepData.member.last_name = memberPrincipal.find((input) => input.name == 'last_name').model

  return  stepData
})

const inputsStepFamily = computed(()=>{

  // let data_membership =  JSON.parse(JSON.stringify(membershipsData))
  let memberFamily =  inputsStepData(2,'family')

  let num = 0
  let family = []
  let member = {}
  let stepData =  inputsStepData(props.stepSelected,'data')

  memberFamily.forEach((element, index)=>{

    if(element['data_'+element.family].find((fa) => fa.name == 'name').model != ''){

      member = {
        type: 'family',
        family: element.family,
        name: element['data_'+element.family].find((fa) => fa.name == 'name').model,
        last_name: element['data_'+element.family].find((fa) => fa.name == 'last_name').model
      }

      var data = JSON.parse (JSON.stringify (paymentData.value))
      var g = {member,data : ref(data).value}
      family.push(g)
      stepData.push(g)

    }

  })

  return  family

})

const isSameCreditCard = computed(()=>{
  return diferenteCard.value[0].model
})


const toPrayerCase = (value) =>{
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const props = defineProps({
  stepSelected:{
    type: Number
  }
})
</script>


<template>
  <!-- <p>{{ inputsStep }}</p> -->
  
  <inputsLayaut
    v-if="inputsStepFamily.length > 0"
    :inputs-step="diferenteCard"
   
  />

  <V-Card  class="mb-4" >
    <inputsLayaut
      :inputs-step="inputsStepPrincipal.data"
    />
  </V-Card>
  <!-- <p>{{ inputsStepFamily }}</p> -->
    <V-Card 
      v-if="isSameCreditCard"
      v-for="data in inputsStepFamily"
      class="mb-4"
    >
      <div class="column is-12 bb-1 mb-5">
        <h2 class="title is-5 mt-4 is-narrow">{{ toPrayerCase(data.member.name)}} {{ toPrayerCase(data.member.last_name) }}</h2>
        <inputsLayaut
          :inputs-step="data.data"
        />
      </div>
    </V-Card>
  
  
</template>