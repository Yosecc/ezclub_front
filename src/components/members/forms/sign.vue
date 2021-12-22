<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { inputsStepData } from '/@src/components/members/MembersData'

const inputsStep = computed(()=>{
  let stepData =  inputsStepData(props.stepSelected,'data')
  return  stepData
})

const props = defineProps({
  stepSelected:{
    type: Number
  }
})
</script>


<template>
  <!-- <p>{{ inputsStep }}</p> -->
 <!--  <inputsLayaut
    :inputsStep="inputsStep"
  /> -->

 <V-Card radius="small">
    <div class="columns is-multiline">

      <div class="d-flex justify-content-center column is-12 mb-4">
        <div class="text-center mr-6">
          <a href="" >
            <img src="/public/images/pdf_icon.png" width="40" alt="">
            <p>Name Document</p>
          </a>
          <V-Button color="success" outlined class="mt-4 py-1"> Print </V-Button>
        </div>

        <div class="text-center ml-6">
          <a href="" >
            <img src="/public/images/pdf_icon.png" width="40" alt="">
            <p>Name Document</p>
          </a>
          <V-Button color="success" outlined class="mt-4 py-1"> Print </V-Button>
        </div>
      </div>

      <div class="column is-2 mx-auto">
        <V-Button color="info" class=" w-100"> Sign </V-Button>
      </div>  

    </div>
  </V-Card>
  

</template>