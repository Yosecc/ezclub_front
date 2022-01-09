<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { memberData, steps, categories, typeMember, inputsStepData , stepActive } from '/@src/components/members/MembersData'


const inputsFamily = computed(()=>{
  let stepData =  inputsStepData(props.stepSelected,'family')
  return  stepData
})

inputsFamily.value[0].f = 'data_1'
const dataFamily = JSON.parse (JSON.stringify (inputsFamily.value[0]))

const addFamily = () => {
  let family = inputsFamily.value.length + 1
  let f = 'data_'+family

  const data = {
    family: inputsFamily.value.length + 1,
    [f]: ref(dataFamily.data_1).value,
  }
  inputsFamily.value.push(JSON.parse (JSON.stringify (data)))
}

const removeFamilyMember = (ke) => {
  inputsFamily.value.splice(ke, 1)
}

const props = defineProps({
  stepSelected:{
    type: Number
  },
})
</script>


<template>
  <!-- <p>{{ inputsStep }}</p> -->
  <V-Card  
    v-for="(family, ke) in inputsFamily"
    :key="ke"
    class="columns is-multiline bb-1 mb-5"
    :class="ke > 0 ? 'py-6':'pb-6'"
  >

      <!-- <p>{{ family['data_'+family.family] }}</p> -->
      
      <inputsLayaut
        :inputs-step="family['data_'+family.family]"
      />

      <V-Button
        v-if="ke > 0"
        @click="removeFamilyMember(ke)"
        color="danger" 
        class="mx-auto" 
        icon="fas fa-times" >
        Remove Family Member
      </V-Button>
  </V-Card >

  <div class="column is-12">
    <V-Button
      @click="addFamily"
      color="info" 
      icon="fas fa-check" 
      raised>
      Add Another Family Member
    </V-Button>
  </div>

</template>