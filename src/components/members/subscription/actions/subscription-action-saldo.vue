<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'

import moment from 'moment'

import { processMultigym, getAmountMultigym } from '/@src/models/Subscriptions'
import { getSaldo, addSaldo } from '/@src/models/v2/Members.ts'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const emit = defineEmit(['reload'])

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const amount = ref(null)
const isLoaderActive = ref(false)

const onAction = (obj = null) => {
  isLoaderActive.value = true
  obj.amount = amount.value

  console.log(obj)

  addSaldo(user.value.id, obj)
    .then((response) => {
      isLoaderActive.value = false
      centeredActionsOpen.value = false
      notyf.success('Success')
      emit('reload')
    })
    .catch((error) => {
      error = error.response.data
      isLoaderActive.value = false
      centeredActionsOpen.value = false

      // for (const i in error) {
      //   if (typeof error[i] == 'object') {
      //     for (const e in error[i]) {
      //       if (typeof error[i][e] == 'string') {
      //         notyf.error(error[i][e])
      //       }
      //     }
      //   }
      //   if (typeof error[i] == 'string') {
      //     notyf.error(error[i])
      //   }
      // }
    })
}

const centeredActionsOpen = ref(false)

const closeModal = () => {
  centeredActionsOpen.value = false
}

const user = computed(() => {
  return props.suscripcion.user
})

const saldo = ref(0)
const saldos = ref([])

const onClick = () => {
  getSaldo(user.value.id, {}).then((response) => {
    saldo.value = response.data.saldo
    saldos.value = response.data.saldos
    centeredActionsOpen.value = true
  })
}
</script>

<template>
  <VLoader class="h-100" size="small" :active="isLoaderActive">
    <VCard
      color="info"
      :outlined="true"
      @click="onClick"
      class="
        mr-4
        btn-card
        text-center
        px-2
        h-100
        d-flex
        align-items-center
        justify-content-center
      "
      style="font-size: 14px"
    >
      <p>
        <b> Balances </b>
      </p>
    </VCard>

    <VModal
      :open="centeredActionsOpen"
      size="big"
      actions="center"
      noscroll
      @close="closeModal"
    >
      <template #content>
        <div class="columns">
          <div class="column is-4">
            <VLoader size="small" class="h-100" :active="isLoaderActive">
              <VCard class="mb-4 h-100">
                <div>
                  <p class="title is-6 mb-1"><b>Total</b></p>
                  <p class="title is-3 mb-0">
                    {{ moneda(saldo) }}
                  </p>
                </div>
              </VCard>
            </VLoader>
          </div>

          <V-Field class="is-8 column">
            <V-Control style="height: 100%">
              <label for=""><p>Amount</p></label>
              <input
                type="number"
                v-model="amount"
                class="input mt-4"
                placeholder="0.00"
                style="height: 60%; font-size: 20px"
              />
            </V-Control>
          </V-Field>
        </div>

        <VCard style="margin-bottom: 24px">
          <div class="columns is-multiline">
            <div class="column is-4">
              <VLoader size="small" class="h-100" :active="isLoaderActive">
                <VCard class="mb-4 h-100">
                  <div>
                    <p class="title is-6 mb-1"><b>Total</b></p>
                    <p class="title is-3 mb-0">
                      {{ moneda(amount) }}
                    </p>
                  </div>
                </VCard>
              </VLoader>
            </div>

            <div class="is-4 column mx-auto">
              <VLoader size="small" :active="isLoaderActive">
                <subscription-method-payment-debit-automatic
                  :total="amount"
                  :user="user"
                  @onPayment="onAction"
                />
              </VLoader>
            </div>

            <div class="is-4 column mx-auto">
              <VLoader size="small" :active="isLoaderActive">
                <subscription-method-payment-cash
                  :total="amount"
                  @onPayment="onAction"
                />
              </VLoader>
            </div>
          </div>
        </VCard>

        <VCard>
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in saldos" :key="`saldo-${key}`">
                <td>{{ moneda(item.monto) }}</td>
                <td>{{ moment(item.created_at).format('MM-DD-YYYY') }}</td>
              </tr>
            </tbody>
          </table>
        </VCard>
      </template>
      <template #action>
        <!-- <VButton color="primary" @click="onAction"> Confirm</VButton> -->
      </template>
    </VModal>
  </VLoader>
</template>

<style lang="scss"></style>
