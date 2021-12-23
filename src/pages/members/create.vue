<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, onMounted, watch, onBeforeMount } from 'vue'
import { steps, memberData, categories, stepActive, typeDataSteps } from '/@src/components/members/MembersData'

import { Notyf } from 'notyf'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Add New members'
useHead({
  title: 'Members',
})

const notyf = new Notyf({
  duration: 3000,
  position: {
    x: 'right',
    y: 'top',
  }})

const errors = (validateData) => {
  validateData.forEach((element)=>{
    if(element.placeholder != undefined){
      element.hasError = true
      notyf.error(element.placeholder+' is required')
    }
  }) 
}

watch(stepActive, ()=>{
  if(categories.value.model == 'Minor' && stepActive.value == 2){
    typeDataSteps.value = 'parent'
  }else if(categories.value.model == 'Adult' && stepActive.value == 2){
    typeDataSteps.value = 'family'
  }else{
    typeDataSteps.value = 'data'
  }
})

const validateData = () => {
  let validate = []
  
  const data = memberData.value.find((step)=> step.step == stepActive.value)[typeDataSteps.value]

  if(data.length > 0 || data != undefined){
    data.forEach((element)=>{
      if(element.model == '' && element.required){
        validate.push(element)
      }else{
        element.hasError = false
      }
    })
  }else{
    console.error('No hay datos en: '+ stepActive.value+':'+typeDataSteps.value)
    console.error(data)
  }
  return validate
}

const changeStep = (type) => {
  if(type == 'advance') {
    let validate = validateData()
    
    stepActive.value++
    if(!validate.length){
      // stepActive.value++
    }else{
     errors(validate)
    }
    
  }else{
    if(stepActive.value > 1){
      stepActive.value--
    }
  }
}

const step = computed(()=>{
  return steps.value.find((step)=>step.step == stepActive.value && step.categories.includes(categories.value.model))
})

const stepsList = computed(()=>{
  return steps.value.filter((step)=> step.categories.includes(categories.value.model))
})

const changeCategory = (category) => {
  categories.value.model = category
}


</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <!--  -->
    <!-- <p>{{ stepsList }}</p> -->
    <V-Field
      v-if="stepActive == 1"
      class="w-100"
      addons
    >
      <V-Control 
        v-for="(category, categoryIndex) in categories.values"
      >
        <V-Button 
          @click="changeCategory(category)"
          :color="categories.model == category ? 'primary':undefined"
        > 
        {{ category }}</V-Button>
      </V-Control>
    </V-Field>
    <!--  -->
    <div class="page-content-inner d-flex">
      
      <V-CardAdvanced class="w-70 flex-column d-flex card-form-member">
        <template #header-left>
          <h2  class="title is-4 is-narrow ">{{ step.text }} </h2>
        </template>
        <template #content class="mb-auto">
          <!-- <p>{{ typeDataSteps }}</p>
          <p>{{ categories.model }}</p> -->
          <memberInformation 
            v-if="stepActive == 1" 
            :step-selected="stepActive" />
          <!--  -->
          <familyMembers 
            v-if="stepActive == 2 && typeDataSteps == 'family' " 
            :step-selected="stepActive"
             />
          <!--  -->
          <parentGuardian 
            v-if="stepActive == 2 && typeDataSteps == 'parent' " 
            :step-selected="stepActive" />
          <!--  -->
          <contactPreference
            v-if="stepActive == 3" 
            :step-selected="stepActive"
          />
          <!--  -->
          <selectMembership
            v-if="stepActive == 4" 
            :step-selected="stepActive"
          />
          <paymentMethod
            v-if="stepActive == 5" 
            :step-selected="stepActive"
          />
          <sign
            v-if="stepActive == 6" 
            :step-selected="stepActive"
          />
        </template>
        <template #footer-left>
          <V-Button color="warning" v-if="stepActive > 1" class="mr-2" @click="changeStep('back')"> Back </V-Button>
        </template>
        <template #footer-right>
          <V-Button color="primary" @click="changeStep('advance')"> Continue </V-Button>
        </template>
      </V-CardAdvanced>

      <div class="w-30 px-5 ">
        <V-progress-check
          v-for="(step,key) in stepsList"
          :key="key"
          :active="step.step <= stepActive"
          :step="step.step"
          :text="step.text"
        ></V-progress-check>
        
      </div>
    </div>
  </SidebarLayout>
</template>