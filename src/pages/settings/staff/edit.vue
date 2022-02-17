<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import {
  getStaff,
  staff,
  inputsInformation,
  inputsPermitions,
  getstaffRoles,
} from '/@src/models/Staffs'
import { useRoute, useRouter } from 'vue-router'
import { setInputModelData, setInputValuesData } from '/@src/models/Mixin.ts'

const route = useRoute()

pageTitle.value = 'New Staff'

useHead({
  title: 'Staffs',
})

onMounted(() => {
  getstaffRoles().then((response) => {
    setInputValuesData(
      inputsPermitions,
      'staff_roles_id',
      response.data.staff_roles
    )
  })
  // LLena los modelos de los inputs
  getStaff(route.query.id).then((response) => {
    for (var i in response.data) {
      setInputModelData(inputsInformation, i, response.data[i])
      setInputModelData(inputsPermitions, i, response.data[i])
    }
  })
})

const stepActive = ref(1)

const steps = ref([
  {
    step: 1,
    text: 'Staff Information',
    categories: [],
  },
  {
    step: 2,
    text: 'System Permissions',
    categories: [],
  },
  {
    step: 3,
    text: 'Sign Waiver',
    categories: [],
  },
])

const changeStep = (val) => {
  stepActive.value = val
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="columns is-multiline">
        <div class="column is-9">
          <!-- <transition name="fade" mode="out-in" appear> -->
          <staffInformation
            type="edit"
            :buttons="['save']"
            :step="1"
            class="mb-3"
          />

          <staffSystemPermitions
            type="edit"
            :buttons="[]"
            :step="2"
            class="mb-3"
          />

          <staffWaiver type="edit" :buttons="[]" :step="3" />
          <!-- </transition> -->
        </div>
        <!-- <div class="column is-3">
          <V-progress-check
            v-for="(step,key) in steps"
            :key="key"
            :active="step.step <= stepActive"
            :step="step.step"
            :text="step.text"
          ></V-progress-check>
        </div> -->
      </div>
    </div>
  </SidebarLayout>
</template>
