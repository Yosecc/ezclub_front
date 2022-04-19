<script setup lang="ts">
import type { WizardRelatedTo } from '/@src/models/wizard'
import { ref, onMounted } from 'vue'
import {
  currentStep,
  member,
  onconfirm,
  storeCard,
} from '/@src/state/wizardStateLandingMembersUpdated'

import { paymentData, flipped } from '/@src/models/PaymentMethodsData.ts'

import {
  notyf,
  getInput,
  perpareDataInputs,
  setInputModelData,
  hasErrors,
} from '/@src/models/Mixin.ts'

const isLoaderActive = ref(false)

onMounted(() => {
  for (var i in member.value) {
    // setInputModelData(direccionInput,i,member.value[i])
  }
})

const onChangeStep = () => {
  const data = perpareDataInputs(paymentData.value)
  console.log(data)
  if (!hasErrors.value) {
    storeCard(member.value.id, data)
      .then((response) => {
        currentStep.value = 1
        window.location.reload()
        notyf.success('Success')
      })
      .catch((error) => {
        notyf.error(error.response.data)
        console.log(typeof error.response.data)
      })
  }
}
</script>

<template>
  <VCard class="column mx-auto is-5">
    <div class="step-content">
      <div class="step-title mb-4">
        <h2 class="dark-inverted title is-5">Card</h2>
      </div>

      <div class="wizard-types">
        <div class="text-center p-1 pt-4">
          <VField>
            <VControl>
              <VCreditCard
                color="orange"
                :flipped="flipped"
                @flip="flipped = !flipped"
                :number="getInput(paymentData, 'card_number').model"
                :name="getInput(paymentData, 'card_name').model"
                :expiry="`${getInput(paymentData, 'date_day_expired').model}/${
                  getInput(paymentData, 'date_year_expired').model
                }`"
                :cvc="getInput(paymentData, 'cvv').model"
              />
            </VControl>
          </VField>

          <inputsLayaut :inputs-step="paymentData" />

          <VLoader style="height: 50px" :active="isLoaderActive">
            <div class="d-flex justify-content-between">
              <VButton
                outlined
                color="danger"
                class="mr-3"
                @click="
                  onconfirm('Rolling back will lose changes')
                    ? (currentStep = 3)
                    : (currentStep = currentStep)
                "
                >Back</VButton
              >
              <VButton color="success" @click="onChangeStep">Continue</VButton>
            </div>
          </VLoader>
        </div>
      </div>
    </div>
  </VCard>
</template>
<style lang="scss">
.column.is-6 {
  width: 50% !important;
  flex: none !important;
  display: inline-table !important;
}
</style>
