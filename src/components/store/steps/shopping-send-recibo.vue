<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { Api, FRONTEND_URL } from '/@src/services'
import { useRoute, useRouter } from 'vue-router'

import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import {
  order,
  sendReceipt,
  member,
  invoice_pdf,
  sendInvoice,
} from '/@src/models/Store.ts'

const router = useRouter()
const props = defineProps(['modelValue'])

const emit = defineEmit(['update:modelValue'])

onMounted(() => {
  // finishPaymentRecibo()
})

const typeSend = ref('receipt')
const showIframePrint = ref(false)
const onPrint = () => {
  showIframePrint.value = !showIframePrint.value
}
const showSendMail = ref(false)
const emailSend = ref(null)
const isLoaderActive = ref(false)
const sendMail = () => {
  isLoaderActive.value = true
  sendReceipt(order.value.id, emailSend.value)
    .then((response) => {
      notyf.success('Send Success')
      isLoaderActive.value = false
    })
    .catch((error) => {
      isLoaderActive.value = false

      notyf.error(error.response.data)
      for (var i in error.response.data) {
        notyf.error(`${i}: ${error.response.data[i]}`)
      }
    })
}

const close = () => {
  emailSend.value = null
  showSendMail.value.null = false
  emit('update:modelValue', false)
}

const switchType = (type) => {
  showSendMail.value = true
  typeSend.value = type
  if (typeSend.value == 'invoice') {
    emailSend.value = member.value.email
  } else {
    emailSend.value = ''
  }
}

const onsendInvoice = () => {
  isLoaderActive.value = true

  sendInvoice(order.value.id, emailSend.value, invoice_pdf.value)
    .then((response) => {
      notyf.success('Send Success')
      isLoaderActive.value = false
    })
    .catch((error) => {
      isLoaderActive.value = false

      notyf.error(error.response.data)
      for (var i in error.response.data) {
        notyf.error(`${i}: ${error.response.data[i]}`)
      }
    })
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
                <p class="title text-center is-5">Print Receipt</p>
              </div>
              <p v-if="showIframePrint" class="title is-6">
                <i class="fas fa-check" aria-hidden="true"></i>
              </p>
            </div>
          </VCard>
        </div>
        <div class="column is-6 mt-6">
          <VCard
            color="warning"
            class="btn-card"
            @click="switchType('receipt')"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <p class="title mb-0 mr-3 is-3">
                  <i
                    class="iconify"
                    data-icon="feather:send"
                    aria-hidden="true"
                  ></i>
                </p>
                <p class="title text-center is-5">Send Receipt Mail</p>
              </div>
              <p v-if="typeSend == 'receipt'" class="title is-6">
                <i class="fas fa-check" aria-hidden="true"></i>
              </p>
            </div>
          </VCard>
        </div>

        <div v-if="member && invoice_pdf" class="column is-6 mx-auto">
          <VCard
            style="background: #673ab7"
            class="btn-card"
            @click="switchType('invoice')"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <p class="title mb-0 mr-3 is-3">
                  <i
                    class="iconify"
                    data-icon="feather:send"
                    aria-hidden="true"
                  ></i>
                </p>
                <p class="title text-center is-5">Send Invoice Mail</p>
              </div>
              <p v-if="typeSend == 'invoice'" class="title is-6">
                <i class="fas fa-check" aria-hidden="true"></i>
              </p>
            </div>
          </VCard>
        </div>

        <div v-if="showSendMail" class="column is-12 text-center">
          <SearchBar dato="email" v-model:valor="emailSend" v-model="member" />
          <VLoader size="large" :active="isLoaderActive">
            <VButton
              v-if="typeSend == 'receipt'"
              @click="sendMail"
              color="success"
              class="mt-4"
            >
              <i
                class="iconify"
                data-icon="feather:send"
                aria-hidden="true"
              ></i>
              Send
            </VButton>
          </VLoader>

          <VLoader size="large" :active="isLoaderActive">
            <VButton
              v-if="typeSend == 'invoice'"
              @click="onsendInvoice"
              style="background: #673ab7"
              class="mt-4"
            >
              <i
                class="iconify"
                data-icon="feather:send"
                aria-hidden="true"
              ></i>
              Send Invoice
            </VButton>
          </VLoader>
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

<style lang="scss">
.modal-card {
  overflow: visible !important;
}
</style>
