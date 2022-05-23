<script setup lang="ts">
import { ref } from 'vue'
import { paymentData, flipped } from '/@src/models/PaymentMethodsData.ts'
import {
  notyf,
  getInput,
  perpareDataInputs,
  setInputModelData,
  hasErrors,
} from '/@src/models/Mixin.ts'
import { member, storeCard } from '/@src/models/Members.ts'

const isLoaderActive = ref(false)
import swal from 'sweetalert'

const save = () => {
  const data = perpareDataInputs(paymentData.value)
  if (!hasErrors.value) {
    isLoaderActive.value = true
    storeCard(member.value.id, data)
      .then((response) => {
        notyf.success('Success')
        isLoaderActive.value = false
      })
      .catch((error) => {
        if (typeof error.response.data == 'object') {
          for (var i in error.response.data) {
            error.response.data[i].forEach((e) => {
              notyf.error(`${i} : ${e}`)
            })
          }
        } else {
          notyf.error(error.response.data)
        }
        isLoaderActive.value = false
      })
  }
}
</script>

<template>
  <VCardAdvanced>
    <!-- <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">
       Credit Card Information
      </h1>
      <p>Edit member's payment information</p>
      </div>
    </template> -->
    <template #header-right>
      <VLoader :active="isLoaderActive" size="small">
        <VButton @click="save" color="primary"> New Card </VButton>
      </VLoader>
    </template>
    <template #content>
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
      <div class="column is-8 mx-auto">
        <inputsLayaut :inputs-step="paymentData" />
      </div>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
