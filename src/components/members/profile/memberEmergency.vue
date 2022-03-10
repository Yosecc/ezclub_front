<script setup lang="ts">
import { ref } from 'vue'

import { emergencyInputs, storeContactEmergency } from '/@src/models/Members'
import {
  setInputValuesData,
  perpareDataInputs,
  setInputModelData,
  notyf,
} from '/@src/models/Mixin.ts'

const onSave = () => {
  const data = perpareDataInputs(emergencyInputs.value)
  console.log(data)
  storeContactEmergency(data).then((response) => {
    notyf.success('Success')
  })
}
</script>

<template>
  <VCardAdvanced>
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Emergency Contact</h1>
        <p>Edit member's emergency contact</p>
      </div>
    </template>
    <template #header-right>
      <VButton @click="onSave" color="primary"> Save Changes </VButton>
    </template>
    <template #content>
      <div class="">
        <h1 class="title is-5">Emergency Contact Information</h1>

        <inputsLayaut :inputs-step="emergencyInputs" />
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
