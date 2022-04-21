<script setup lang="ts">
import type { WizardRelatedTo } from '/@src/models/wizard'
import { ref } from 'vue'
import {
  wizardData,
  currentStep,
  barCodeInput,
  searchBarCode,
  member,
} from '/@src/state/wizardStateLandingMembersUpdated'
import { notyf, getInput } from '/@src/models/Mixin.ts'
const validateStep = (relatedTo: WizardRelatedTo) => {
  wizardData.relatedTo = relatedTo
  currentStep.value = 2
}
const isLoaderActive = ref(false)
const onsearchBarCode = () => {
  if (getInput(barCodeInput.value, 'bar_code').model) {
    isLoaderActive.value = true
    searchBarCode(getInput(barCodeInput.value, 'bar_code').model)
      .then((response) => {
        notyf.success('Found member ')
        member.value = response.data
        isLoaderActive.value = false
        getInput(barCodeInput.value, 'bar_code').hasError = false
        currentStep.value = 2
      })
      .catch((error) => {
        isLoaderActive.value = false
        notyf.error(error.response.data)
      })
  } else {
    getInput(barCodeInput.value, 'bar_code').hasError = true
    notyf.error('Barcode is required')
  }
}
</script>

<template>
  <VCard class="column mx-auto is-5">
    <div class="step-content">
      <div class="step-title mb-4">
        <h2 class="dark-inverted title is-5">Search with Member ID</h2>
      </div>

      <div class="wizard-types">
        <div class="text-center p-1 pt-4">
          <div style="width: 80%" class="mx-auto">
            <img
              src="/@src/assets/card.png"
              style="
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
                border-radius: 15px;
              "
              alt=""
            />
          </div>
          <!-- <h3 class="dark-inverted">UI/UX Design</h3> -->
          <!-- <p>Some short explanation about the type goes here.</p> -->
          <inputsLayaut :inputs-step="barCodeInput" />

          <VLoader style="height: 50px" :active="isLoaderActive">
            <VButton @click="onsearchBarCode">Search</VButton>
          </VLoader>
        </div>
      </div>
    </div>
  </VCard>
</template>
