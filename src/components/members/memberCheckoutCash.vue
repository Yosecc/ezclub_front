<script setup lang="ts">
import { ref, computed, defineProps, defineEmit } from 'vue'
import { moneda } from '/@src/models/Mixin.ts'

const openModalCash = ref(false)
const cash = ref(0)

const changeBack = computed(() => {
  const calculo = parseFloat(cash.value) - parseFloat(props.total / 100)
  if (calculo > 0) {
    return calculo
  }

  return 0
})

const addCash = (i) => {
  cash.value = parseFloat(cash.value) + parseFloat(i)
}

const props = defineProps({
  total: {
    type: [Number, String],
    default: 0,
  },
  margin: {
    type: String,
    default: 'mx-2',
  },
})

const emit = defineEmit(['onPaymentCash'])

const payment = () => {
  openModalCash.value = false
  emit('onPaymentCash', {
    changeBack: changeBack.value,
    cash: cash.value,
  })
}
</script>

<template>
  <VCard
    color="warning"
    class="btn-card w-100 justify-content-center column is-4"
    :class="margin"
    @click="openModalCash = true"
  >
    <p class="title is-3">
      <i class="fas fa-money-bill" aria-hidden="true"></i>
    </p>
    <p class="title is-5">
      Cash <b>{{ moneda(total / 100) }}</b>
    </p>
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
          Total: <b>{{ moneda(total / 100) }}</b>
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
        <VButton
          bold
          class="m-3"
          style="font-size: 14px"
          @click="cash = Number.parseFloat(total / 100).toFixed(2)"
        >
          Full Payment {{ moneda(total / 100) }}</VButton
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
            <!-- <p>{{ Number.parseFloat(cash).toFixed(2)  }}</p> -->
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
        :disabled="
          parseFloat(cash) < parseFloat(parseFloat(total / 100).toFixed(2))
        "
        class="d-flex justify-content-center"
        raised
        >Confirm</VButton
      >
    </template>
  </VModal>
</template>

<style lang="scss"></style>
