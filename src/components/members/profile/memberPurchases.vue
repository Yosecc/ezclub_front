<script setup lang="ts">
import { onMounted, computed, ref, reactive } from 'vue'

import moment from 'moment'
import {
  memberMermship,
  memberMembershipsHistory,
  member,
} from '/@src/models/Members.ts'
import { moneda } from '/@src/models/Mixin.ts'

const paymentMethodId = ref(null)
const openModalMakeAPayment = ref(false)

const onMethodPayment = () => {}

const makePayment = (MethodPayment) => {
  paymentMethodId.value = MethodPayment
  openModalMakeAPayment.value = true
}

const makeAPaymentWithCash = () => {
  openModalMakeAPayment.value = true
}

const closeModal = () => {
  openModalMakeAPayment.value = false
}
</script>

<template>
  <VCardAdvanced v-if="member">
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Purchases History</h1>
        <p>Edit member's purchases history</p>
      </div>
    </template>
    <template #header-right> </template>
    <template #content>
      <p class="title is-5">Card List</p>
      <makeAPaymentModal
        :payment-method-id="paymentMethodId"
        :open-modal="openModalMakeAPayment"
        @close-modal="closeModal"
      />
      <MemberCards
        :show-option="true"
        class="mb-6"
        v-if="member.user"
        @makePayment="makePayment"
        @onMethodPayment="onMethodPayment"
        :method_default="member.user.pm_last_four"
        :show-new-card="true"
        :memberid="member.id"
      />

      <VCard @click="makeAPaymentWithCash" color="success" class="btn-card">
        <div class="d-flex align-items-center">
          <p class="title is-1 mb-0">
            <i class="fas fa-shopping-bag" aria-hidden="true"></i>
          </p>
          <div class="ml-4">
            <p class="title is-4 mb-2">Make a new payment with cash</p>
          </div>
        </div>
      </VCard>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
