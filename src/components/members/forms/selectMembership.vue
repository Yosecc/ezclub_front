<script setup lang="ts">
import { computed, defineProps, ref, onBeforeMount, watch, toRef } from 'vue'
import { membershipsData, getMeberships, getDiciplines, diciplines } from '/@src/components/memberships/MembershipsData'
import { inputsStepData } from '/@src/components/members/MembersData'

onBeforeMount(()=>{
  getMeberships()
  
})


const inputsStepPrincipal = computed(()=>{

  let stepData =  inputsStepData(props.stepSelected,'data')

  stepData = stepData.find((data) => data.member.type == 'principal')

  let memberPrincipal = inputsStepData(1,'data')
  
  stepData.member.name = memberPrincipal.find((input) => input.name == 'name').model
  stepData.member.last_name = memberPrincipal.find((input) => input.name == 'last_name').model

  return  stepData

})

const confirmMemberPrincipal = ref(false)

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

      // console.log(membershipsData.value)
      var data = JSON.parse(JSON.stringify (membershipsData.value))
      var g = {member,data : ref(data).value}
      family.push(g)
      stepData.push(g)

    }

  })

  return  family

})

const toPrayerCase = (value) =>{
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const props = defineProps({
  stepSelected:{
    type: Number
  }
})

const changeMembershipsId = (data) => {
  getDiciplines(data.input.model).then((response) => {
    data.inputsStep.find((item) => item.name == "diciplines").model = []
    data.inputsStep.find((item) => item.name == "diciplines").values = JSON.parse(JSON.stringify(diciplines.value))
  })
}

</script>

<template>
  <h2 class="title is-4 is-narrow mb-4">Members</h2>
 
    <V-Card  class="mb-4" >
      <!-- <p>{{ inputsStepPrincipal.data }}</p> -->
      <h2 class="title is-5 is-narrow">{{ toPrayerCase(inputsStepPrincipal.member.name)}} {{ toPrayerCase(inputsStepPrincipal.member.last_name) }}</h2>
      <inputsLayaut
        :inputs-step="inputsStepPrincipal.data"
        @changeSelect="changeMembershipsId"
      />

      <!-- <V-Button color="info" @click="confirmMemberPrincipal = true"> Confirm member principal</V-Button> -->


    </V-Card>
  
<!-- :class="!confirmMemberPrincipal ? 'opacity-03':''" -->
<!-- <p>{{ inputsStepFamily }}</p> -->
      <div
        v-if="inputsStepFamily.length > 0" 
        
      >
    
        <V-Card 
          v-for="data in inputsStepFamily"
          class="mb-4"
        >
        <!-- <p>{{ data.data }}</p> -->
          <div class="column is-12 bb-1 mb-5">
            <h2 class="title is-5 mt-4 is-narrow">{{ toPrayerCase(data.member.name)}} {{ toPrayerCase(data.member.last_name) }}</h2>
            <inputsLayaut
              :inputs-step="data.data"
              @changeSelect="changeMembershipsId"
            />
          </div>
        </V-Card>
      
      </div>

</template>

<style lang="scss">
  .opacity-03{
    opacity: .3;
  }
</style>