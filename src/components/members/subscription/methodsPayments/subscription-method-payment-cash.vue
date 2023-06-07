<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { locationsSelect, terminales } from '/@src/models/Companies.ts'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
// import {
//   total,
//   payment,
//   cash,
//   changeBack,
//   addCash,
//   openModalCash,
//   discount,
// } from '/@src/models/Store'

const emit = defineEmit(['onPayment'])

const openModalCash = ref(false)

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  define_status: {
    type: Boolean,
    default: true,
  },
})

const cash = ref(0)

const changeBack = computed(() => {
  const calculo = parseFloat(cash.value) - parseFloat(props.total)
  if (calculo > 0) {
    return calculo
  }

  return 0
})

const addCash = (i) => {
  cash.value = parseFloat(cash.value) + parseFloat(i)
}

const payment = () => {
  openModalCash.value = false
  emit('onPayment', {
    cash: cash.value,
    changeBack: changeBack.value,
    amount: props.total,
    payment_type_id: 1,
  })
}

const onOpenModal = () => {
  if (props.define_status) {
    openModalCash.value = true
  }
}
</script>

<template>
  <VCard
    @click="onOpenModal"
    :color="props.define_status ? 'warning' : undefined"
    class="btn-card w-100 justify-content-center"
  >
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <p class="title is-3">
          <i class="fas fa-money-check-alt" aria-hidden="true"></i>
        </p>
        <p class="title is-5">Cash</p>
      </div>
      <p class="title is-6">
        <slot />
        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
      </p>
    </div>
  </VCard>
  <VModal
    :title="''"
    :open="openModalCash"
    actions="center"
    @close="openModalCash = false"
  >
    <template #content>
      <div class="d-flex mb-4 justify-content-between">
        <p class="title is-5">
          Total: <b>{{ moneda(total) }}</b>
        </p>

        <p class="title is-5">
          Cash Total: <b>{{ moneda(cash) }}</b>
        </p>
      </div>

      <div
        class="
          d-flex
          justify-content-center
          align-items-center
          flex-column
          mb-4
        "
      >
        <p class="title is-5 mb-4">Change Back:</p>
        <p class="title is-3 mb-0">
          <b>{{ moneda(changeBack) }}</b>
        </p>
      </div>
      <div class="d-flex justify-content-center flex-wrap mb-4">
        <VButton bold class="m-3" style="font-size: 14px" @click="cash = total">
          Full Payment {{ moneda(total) }}</VButton
        >
        <div class="w-100"></div>
        <VButton
          v-for="(i, key) in [5, 10, 20, 50, 100]"
          :key="`calculato-${key}`"
          bold
          class="m-3"
          style="font-size: 14px"
          @click="addCash(i)"
        >
          ${{ i }}
        </VButton>
      </div>
      <div class="d-flex justify-content-center">
        <VField>
          <VControl>
            <input
              v-model="cash"
              type="text"
              class="input text-center"
              placeholder="Cash"
            />
          </VControl>
        </VField>
      </div>
    </template>
    <template #action>
      <VButton @click="cash = 0" class="d-flex justify-content-center" raised
        >Reset</VButton
      >
      <VButton
        color="success"
        @click="payment"
        :disabled="total > cash"
        class="d-flex justify-content-center"
        raised
        >Confirm</VButton
      >
    </template>
  </VModal>
</template>

<style lang="scss"></style>
