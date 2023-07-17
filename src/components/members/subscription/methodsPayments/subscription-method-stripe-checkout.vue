<script setup lang="ts">
import { ref, computed, defineProps, defineEmit, reactive } from 'vue'
import { notyf } from '/@src/models/Mixin'
// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import { syncCardsUser } from '/@src/models/v2/Members'

const emit = defineEmit(['onPayment'])

const openModal = ref(false)

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  email: {
    type: String,
    default: '',
  },
  confirmar_email: {
    type: Boolean,
    default: false,
  },
  // member_id: {
  //   type: Number,
  //   required: true,
  // },
})

const payment = () => {
  openModal.value = false
  confirmMail.modal = false
  emit('onPayment', {
    amount: props.total,
    payment_type_id: 3,
  })
}

const confirmMail = reactive({
  modal: false,
  confirm: false,
  email: '',
})
const conmfirmEmail = () => {
  if (!props.confirmar_email) {
    payment()
    return
  }

  if (props.email == '' || props.email == null) {
    notyf.error('Email is required')
    return
  }
  confirmMail.email = props.email
  confirmMail.modal = true
}
</script>

<template>
  <VCard
    @click="conmfirmEmail"
    color="success"
    class="mx-2 btn-card w-100 justify-content-center"
    outlined
  >
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <p class="title is-3">
          <i class="fas fa-credit-card" aria-hidden="true"></i>
        </p>
        <p class="title is-5">Debit Card</p>
      </div>
      <p v-if="true" class="title is-6">
        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
      </p>
    </div>
    <VModal
      :open="confirmMail.modal"
      actions="center"
      @close="confirmMail.modal = false"
    >
      <template #content>
        <VPlaceholderSection
          :title="confirmMail.email"
          subtitle="Please confirm the email before continuing"
        />
      </template>
      <template #action>
        <VButton @click="payment" color="primary" raised>Confirm</VButton>
      </template>
    </VModal>
  </VCard>
</template>

<style lang="scss"></style>
