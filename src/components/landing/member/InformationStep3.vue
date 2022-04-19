<script setup lang="ts">
import type { WizardRelatedTo } from '/@src/models/wizard'
import { ref, onMounted } from 'vue'
import {
  currentStep,
  direccionInput,
  member,
} from '/@src/state/wizardStateLandingMembersUpdated'
import { getcities, getstates, getcontries } from '/@src/services/config.ts'
import {
  notyf,
  getInput,
  perpareDataInputs,
  setInputModelData,
  setInputValuesData,
  hasErrors,
} from '/@src/models/Mixin.ts'

const isLoaderActive = ref(false)

onMounted(async () => {
  await getcities().then((response) => {
    setInputValuesData(direccionInput.value, 'city_id', response.value)
  })
  await getstates().then((response) => {
    setInputValuesData(direccionInput.value, 'state_id', response.value)
  })
  await getcontries().then((response) => {
    setInputValuesData(direccionInput.value, 'country_id', response.value)
  })
  for (var i in member.value) {
    setInputModelData(direccionInput, i, member.value[i])
  }
})

const onChangeStep = () => {
  const data = perpareDataInputs(direccionInput.value)

  if (!hasErrors.value) {
    currentStep.value = 4
  }
}
</script>

<template>
  <VCard class="column mx-auto is-5">
    <div class="step-content">
      <div class="step-title mb-4">
        <h2 class="dark-inverted title is-5">Direction</h2>
      </div>

      <div class="wizard-types">
        <div class="text-center p-1 pt-4">
          <inputsLayaut :inputs-step="direccionInput" />

          <VLoader style="height: 50px" :active="isLoaderActive">
            <div class="d-flex justify-content-between">
              <VButton
                outlined
                color="danger"
                class="mr-3"
                @click="
                  confirm('Rolling back will lose changes')
                    ? (currentStep = 2)
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
