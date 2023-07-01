<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
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
  // member_id: {
  //   type: Number,
  //   required: true,
  // },
})

const payment = () => {
  openModal.value = false
  emit('onPayment', {
    amount: props.total,
    payment_type_id: 3,
  })
}
</script>

<template>
  <VCard
    @click="payment"
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
  </VCard>
</template>

<style lang="scss"></style>
