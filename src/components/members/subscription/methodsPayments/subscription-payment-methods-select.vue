<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'

import { processMultigym, getAmountMultigym } from '/@src/models/Subscriptions'
import { getSaldo, addSaldo } from '/@src/models/v2/Members.ts'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const emit = defineEmit(['onPayment'])

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  methods: {
    type: Array,
    default: [],
  },
  isLoaderActive: {
    type: Boolean,
    default: false,
  },
})

const user = computed(() => {
  return props.suscripcion.user
})

// const isLoaderActive = computed(()=>{
//     return props.isLoader
// })

const onAction = (data: any = null) => {
  emit('onPayment', data)
}
</script>

<template>
  <VCard style="margin-bottom: 24px">
    <div class="columns is-multiline">
      <div class="column is-4">
        <VLoader size="small" class="h-100" :active="isLoaderActive">
          <VCard class="mb-4 h-100">
            <div>
              <p class="title is-6 mb-1"><b>Total</b></p>
              <p class="title is-3 mb-0">
                {{ moneda(props.amount) }}
              </p>
            </div>
          </VCard>
        </VLoader>
      </div>

      <div
        v-if="props.methods.includes('debit_automatic')"
        class="is-4 column mx-auto"
      >
        <VLoader size="small" :active="isLoaderActive">
          <subscription-method-payment-debit-automatic
            :total="amount"
            :user="user"
            @onPayment="onAction"
          />
        </VLoader>
      </div>

      <div v-if="props.methods.includes('cash')" class="is-4 column mx-auto">
        <VLoader size="small" :active="isLoaderActive">
          <subscription-method-payment-cash
            :total="amount"
            @onPayment="onAction"
          />
        </VLoader>
      </div>

      <div class="is-4 column mx-auto" v-if="props.methods.includes('posnet')">
        <VLoader size="small" :active="isLoaderActive">
          <subscription-method-payment-posnet
            :total="amount"
            @onPayment="onAction"
            :define_status="true"
          />
        </VLoader>
      </div>
    </div>
  </VCard>
</template>

<style lang="scss"></style>
