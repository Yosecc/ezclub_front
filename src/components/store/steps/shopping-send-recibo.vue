<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { Api, FRONTEND_URL } from '/@src/services'
import { useRoute, useRouter } from 'vue-router'

import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import {
  cart,
  total,
  payment,
  client,
  cash,
  changeBack,
  addCash,
  typePayment,
  openModalCash,
  openModalCard,
  order,
  storeDebitAutomatic,
  storeNewCardClient,
  newSetupIntent,
  storeSwipeCard,
  cancelPayment,
  retryPayment,
  finishPayment,
  getPedido,
  sendReceipt,
} from '/@src/models/Store.ts'

const router = useRouter()
const props = defineProps(['modelValue'])

const emit = defineEmit(['update:modelValue'])

onMounted(() => {
  // finishPaymentRecibo()
})

const showIframePrint = ref(false)
const onPrint = () => {
  showIframePrint.value = !showIframePrint.value
}

const sendMail = () => {
  sendReceipt(order.value.id)
}

const close = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <VModal
    noclose
    :title="''"
    :open="modelValue"
    actions="center"
    @close="close"
  >
    <template #content>
      <VCard color="success" class="outlined">
        <h1 class="title text-center is-4 success">
          Good Job! Success Payment
        </h1>
      </VCard>
      <div class="text-center mt-6">
        <p class="title is-5">What do you want to do with the receipt?</p>
      </div>
      <div class="columns is-multiline">
        <div class="column is-6 mt-6">
          <VCard color="info" class="btn-card" @click="onPrint">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <p class="title mb-0 mr-3 is-3">
                  <i class="fas fa-print" aria-hidden="true"></i>
                </p>
                <p class="title text-center is-4">Print</p>
              </div>
              <p v-if="showIframePrint" class="title is-6">
                <i class="fas fa-check" aria-hidden="true"></i>
              </p>
            </div>
          </VCard>
        </div>
        <div class="column is-6 mt-6">
          <VCard color="warning" class="btn-card" @click="sendMail">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <p class="title mb-0 mr-3 is-3">
                  <i class="fas fa-print" aria-hidden="true"></i>
                </p>
                <p class="title text-center is-4">Send Mail</p>
              </div>
              <!-- <p v-if="showIframePrint" class="title is-6">
                  <i class="fas fa-check" aria-hidden="true"></i>
                </p> -->
            </div>
          </VCard>
        </div>

        <div v-if="showIframePrint" class="column is-12">
          <iframe
            style="width: 100%"
            height="400px"
            :src="`${FRONTEND_URL}store/recibo?order=${order.id}`"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </template>
    <template #action> </template>
  </VModal>
</template>

<style lang="scss"></style>
