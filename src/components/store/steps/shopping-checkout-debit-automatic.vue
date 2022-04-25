<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { locationsSelect, terminales } from '/@src/models/Companies.ts'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import {
  cart,
  total,
  storeDebitAutomatic,
  storeNewCardClient,
  finishPaymentOrder,
  member,
  order,
} from '/@src/models/Store.ts'

const loadingOptionDebit = ref(false)
const showStripe = ref(false)

const debitAutomaticPaymentDefault = (obj) => {
  member.value.payment_method = obj.payment_method
  if (!cart.value.length) {
    notyf.error('No hay productos en el carro')
    return
  }
  if (!total.value) {
    notyf.error('No existe el total')
    return
  }
  if (!member.value) {
    notyf.error('No hay miembro seleccionado')
    return
  }

  if (!confirm('Confirm Payment')) {
    return
  }

  loadingOptionDebit.value = true
  storeDebitAutomatic({
    cart: cart.value,
    total: total.value,
    member_id: member.value.id,
    locations_id: getInput(locationsSelect.value, 'locations_id').model,
    payment_method: member.value.payment_method,
  })
    .then((response) => {
      loadingOptionDebit.value = false
      notyf.success('Success Payment')
      finishPaymentOrder({
        invoice_pdf: response.data.invoice_pdf,
        order: response.data.order,
      })
    })
    .catch((error) => {
      loadingOptionDebit.value = false
      notyf.error(error.response.data)
    })
}

const addNewCardClient = () => {
  if (!cart.value.length) {
    notyf.error('No hay productos en el carro')
    return
  }
  if (!total.value) {
    notyf.error('No existe el total')
    return
  }
  if (!member.value) {
    notyf.error('No hay miembro seleccionado')
    return
  }
  showStripe.value = true
}

const PaymentAction = (data) => {
  finishPaymentOrder({
    invoice_pdf: data.invoice_pdf,
    order: data.order,
  })
}
</script>

<template>
  <div class="mt-4 mx-2" v-if="!order">
    <VLoader size="large" :active="loadingOptionDebit">
      <div v-if="!order" class="columns is-multiline w-100">
        <div
          v-for="(card, key) in member.cards"
          :key="`card-${key}`"
          class="column is-6"
        >
          <VCard
            @click="debitAutomaticPaymentDefault({ payment_method: card.id })"
            :color="member.payment_method == card.id ? 'success' : undefined"
            v-if="!showStripe"
            class="btn-card"
          >
            <div class="d-flex align-items-center">
              <p class="title is-6 mb-0">
                <i class="fas fa-credit-card" aria-hidden="true"></i>
              </p>
              <div class="ml-4">
                <p class="title is-6 mb-2">Select Payment Method</p>
                <p class="title is-6 mb-0">
                  {{ card.card.brand }} **** {{ card.card.last4 }}
                </p>
              </div>
            </div>
          </VCard>
        </div>
        <div class="column is-12">
          <VCard
            @click="addNewCardClient"
            v-show="!showStripe"
            color="success"
            class="btn-card"
          >
            <div class="d-flex align-items-center">
              <p class="title is-1 mb-0">
                <i class="fas fa-plus-circle" aria-hidden="true"></i>
              </p>
              <div class="ml-4">
                <p class="title is-4 mb-2">Add new card</p>
              </div>
            </div>
          </VCard>
        </div>
      </div>
    </VLoader>
    <stripeAddCardStore
      v-if="showStripe"
      :new_setup_intent="`orders/new_setup_intent/${member.id}`"
      :member_id="member.id"
      :url_payment="`orders/store_new_card_and_payment`"
      :data="{
        cart: cart,
        total: total,
        member_id: member.id,
        locations_id: getInput(locationsSelect, 'locations_id').model,
      }"
      @PaymentAction="PaymentAction"
    />
  </div>
</template>

<style lang="scss"></style>
