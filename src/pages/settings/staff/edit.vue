<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref,computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'


pageTitle.value = 'New Staff'

useHead({
  title: 'Staffs',
})

onMounted(()=>{
  // getCompany()
})

const stepActive = ref(1)

const steps = ref([
  {
    step: 1,
    text: 'Staff Information',
    categories:[]
  },
  {
    step: 2,
    text: 'System Permissions',
    categories:[]
  },
  {
    step: 3,
    text: 'Sign Waiver',
    categories:[]
  },
]);

const changeStep = (val) => {
  stepActive.value = val
} 
</script>


<template>
  <SidebarLayout >
    <!-- Content Wrapper -->
    <div class="page-content-inner ">

      <div class="columns is-multiline">
        <div class="column is-9">
          <transition name="fade" mode="out-in" appear>
            <staffInformation
              type="create"
              :buttons="['next','back']"
              :step="1"
              v-if="stepActive == 1"
              @changeStep="changeStep"
            />
            <staffSystemPermitions
              type="create"
              :buttons="['next','prev']"
              :step="2"
              v-else-if="stepActive == 2"
              @changeStep="changeStep"
            />
            <staffWaiver
              type="create"
              :buttons="['save','prev']"
              :step="3"
              v-else-if="stepActive == 3"
              @changeStep="changeStep"
            />
          </transition>
        </div>
        <div class="column is-3">
          <V-progress-check
            v-for="(step,key) in steps"
            :key="key"
            :active="step.step <= stepActive"
            :step="step.step"
            :text="step.text"
          ></V-progress-check>
        </div>
      </div>

    </div>
    
  </SidebarLayout>
</template>