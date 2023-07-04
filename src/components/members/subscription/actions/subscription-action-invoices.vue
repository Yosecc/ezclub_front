<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { moneda, notyf } from '/@src/models/Mixin.ts'

import moment from 'moment'

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const centeredActionsOpen = ref(false)
const isLoaderActive = ref(false)

const closeModal = () => {
  centeredActionsOpen.value = false
}

const invoices = computed(() => {
  if (
    !props.suscripcion.memberships_members ||
    !props.suscripcion.memberships_members.payments
  ) {
    return []
  }
  return props.suscripcion.memberships_members.payments
})

const keyOpen = ref(null)
</script>

<template>
  <VLoader class="h-100" size="small" :active="isLoaderActive">
    <VCard
      color="orange"
      :outlined="true"
      @click="centeredActionsOpen = true"
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
        <b> Invoices </b>
      </p>
    </VCard>

    <VModal
      :open="centeredActionsOpen"
      size="big"
      actions="center"
      @close="closeModal"
    >
      <template #content>
        <div>
          <p class="title is-5">Invoices</p>
          <!-- <p>{{ invoices }}</p> -->
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr class="has-background-grey-dark">
                <th scope="col">ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Payment Type</th>

                <!-- <th scope="col">Date create</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                <th scope="col" colspan="3">Action</th> -->
                <!-- <th scope="col">ID</th>
                <th scope="col">Date Start</th>
                <th scope="col">Date End</th>
                
                <th scope="col">Date create</th>
                <th scope="col">Status</th>
                <th scope="col">Amount</th>
                <th scope="col" colspan="3">Action</th> -->
              </tr>
            </thead>
            <tbody v-for="(value, key) in invoices" :key="`incoide-${key}`">
              <tr>
                <td>
                  <p>{{ value.id }}</p>
                </td>
                <td>
                  <p>{{ value.amount }}</p>
                </td>
                <td>
                  <p>{{ value.created_ad }}</p>
                </td>
                <td>
                  <p>{{ value.payment_type.name }}</p>
                </td>
              </tr>

              <tr v-for="(v, ke) in value.items" :key="`item-${ke}`">
                <td>{{ v.description }} {{ v.type }}</td>
                <td>{{ v.amount }}</td>
              </tr>
            </tbody>
            <!-- <tbody v-for="(value, key) in invoices" :key="`invoice-${key}`">
              <tr>
                <td>
                  {{ value.id }}
                </td>
                <td>
                  {{ moment(value.period_start).format('MM-DD-Y') }}
                </td>
                <td>
                  {{ moment(value.period_end).format('MM-DD-Y') }}
                </td>
                <td>
                  {{ moment(value.created_at).format('MM-DD-Y') }}
                </td>
                <td>
                  {{ value.status ? 'Payment' : '' }}
                </td>
                <td>
                  {{ moneda(value.amount) }}
                </td>
                <td colspan="3">
                  <VButton
                    v-tooltip.top="'View payment'"
                    color="info"
                    @click="!keyOpen ? (keyOpen = value.id) : (keyOpen = null)"
                  >
                    <i class="fa fa-eye"></i>
                  </VButton>
                </td>
              </tr>

              <tr v-show="keyOpen == value.id">
                <td colspan="9"></td>
              </tr>
              <tr v-show="keyOpen == value.id">
                <td colspan="9" style="text-align: center">Items</td>
              </tr>
              <tr class="has-background-grey-dark" v-show="keyOpen == value.id">
                <th scope="col" colspan="6">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Amount</th>
              </tr>
              <tr
                v-show="keyOpen == value.id"
                v-for="(item, ikey) in value.items"
                :key="`payment-item-${ikey}`"
              >
                <td colspan="6">
                  {{ item.description }} - {{ item.type }}
                  <small v-if="item.date_start" style="font-size: 10px">
                    - {{ moment(item.date_start).format('MM-DD-Y') }} -
                    {{ moment(item.date_end).format('MM-DD-Y') }}</small
                  >
                </td>
                <td>{{ item.quantity }}</td>
                <td>{{ moneda(item.amount_subtotal) }}</td>
                <td>{{ moneda(item.amount_total) }}</td>
              </tr>

              <tr v-show="keyOpen == value.id">
                <td colspan="9" style="text-align: center">Payment</td>
              </tr>
              <tr class="has-background-grey-dark" v-show="keyOpen == value.id">
                <th scope="col">Create</th>
                <th scope="col">Payment type</th>
                <th scope="col">Status</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Tax</th>
                <th scope="col">Total</th>
                <th scope="col">Cash</th>
                <th scope="col">Cash Back</th>
                <th scope="col">Action</th>
              </tr>
              <tr v-show="keyOpen == value.id" v-if="value.membership_payment">
                <td>
                  {{
                    moment(value.membership_payment.created_at).format(
                      'MM-DD-Y'
                    )
                  }}
                </td>
                <td>{{ value.membership_payment.payment_type.name }}</td>
                <td>
                  {{ value.membership_payment.status ? 'Payment' : '' }}
                  {{ value.membership_payment.status_description }}
                </td>
                <td>{{ moneda(value.membership_payment.subtotal) }}</td>
                <td>{{ moneda(value.membership_payment.tax) }}</td>
                <td>{{ moneda(value.membership_payment.amount) }}</td>
                <td>{{ moneda(value.membership_payment.cash) }}</td>
                <td>{{ moneda(value.membership_payment.cash_back) }}</td>
                <td>
                  <a
                    :href="value.membership_payment.url_pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >View Pdf</a
                  >
                </td>
              </tr>
              <tr v-show="keyOpen == value.id">
                <td colspan="9"></td>
              </tr>
            </tbody> -->
          </table>
        </div>
      </template>
      <template #action>
        <!-- <VButton color="primary" @click="onAction"> Confirm</VButton> -->
      </template>
    </VModal>
  </VLoader>
</template>

<style lang="scss"></style>
