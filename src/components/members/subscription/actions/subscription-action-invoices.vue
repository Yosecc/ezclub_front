<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  computed,
  defineProps,
  defineEmit,
  reactive,
} from 'vue'
import { moneda, notyf } from '/@src/models/Mixin'
import { vincularPaymentInvoice } from '/@src/models/Subscriptions'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

import moment from 'moment'

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const isTest = computed(() => {
  return route.query && route.query.test ? route.query.test : false
})

const emit = defineEmit(['onReload'])

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

const facturas = computed(() => {
  if (Object.keys(props.suscripcion.facturas).length) {
    let data = props.suscripcion.facturas[1]
    if (data) {
      return data
    }
  }
  return []
})

const presupuesto = computed(() => {
  return props.suscripcion.presupuestonextbill
})

const keyOpen = ref(null)

const linkInvoice = reactive({
  modal: false,
  payment: {},
  generalInvoice: {},
  loadding: false,
})

const vincular = async (value) => {
  linkInvoice.generalInvoice = value
  if (
    Object.keys(linkInvoice.payment).length &&
    Object.keys(linkInvoice.generalInvoice).length
  ) {
    linkInvoice.loadding = true
    await vincularPaymentInvoice({
      payment_id: linkInvoice.payment.id,
      general_invoice: linkInvoice.generalInvoice.id,
    })
      .then((response) => {
        linkInvoice.modal = false
        linkInvoice.loadding = false
        notyf.success(response.data.message)
        emit('onReload')
      })
      .catch((error) => {
        linkInvoice.loadding = false
      })
  }
}

const generalInvoices = computed(() => {
  return facturas.value.data
})
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
          <p class="title is-6">Next Bill</p>
          <Presupuesto :presupuesto="presupuesto"></Presupuesto>

          <p class="title is-5">Invoices</p>
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr class="has-background-grey-dark">
                <th scope="col">ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                <th scope="col">Payment Type</th>
                <!-- <th></th> -->
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

            <tbody
              style="background-color: #212121"
              v-for="(value, key) in facturas.data"
              :key="`facturas-${key}`"
            >
              <tr>
                <td>
                  <p>{{ value.id }}</p>
                </td>
                <td>
                  <p>{{ value.total }}</p>
                </td>
                <td>
                  <p>{{ moment(value.created).format('MM-DD-YYYY') }}</p>
                </td>
                <td>
                  <p>{{ value.status }}</p>
                </td>
                <td>
                  <!-- <p>
                    <a :href="value.invoice_pdf" target="_blank"
                      ><i class="fa fa-eye mr-2"></i>View PDF</a
                    >
                  </p> -->
                </td>
                <td>
                  <p>{{ value.payment_type.name }}</p>
                </td>
                <!-- <td></td> -->
                <!-- <td v-if="value.yaexiste">
                  <p>{{ value.yaexiste ? 'Payment Assigned' : '' }}</p>
                </td> -->
              </tr>
              <tr
                style="background: #424242 !important"
                v-if="value.membership_payment && isTest"
              >
                <th></th>
                <th>ID</th>
                <th>Subtotal</th>
                <th>Tax</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Type</th>
              </tr>
              <tr
                style="background: #424242 !important"
                v-if="value.membership_payment && isTest"
              >
                <td></td>
                <td>{{ value.membership_payment.id }}</td>
                <td>{{ value.membership_payment.subtotal }}</td>
                <td>{{ value.membership_payment.tax }}</td>
                <td>{{ value.membership_payment.amount }}</td>
                <td>
                  {{
                    moment(value.membership_payment.created_at).format('M-D-Y')
                  }}
                </td>
                <td>{{ value.membership_payment.payment_type.name }}</td>
              </tr>

              <!-- <tr v-for="(v, ke) in value.membership_payment" :key="`item-${ke}`">
                <td>{{ v.description }} {{ v.type }}</td>
                <td>{{ v.amount }}</td>
              </tr> -->
            </tbody>
          </table>
          <p v-if="isTest" class="title is-6">Payments</p>
          <table v-if="isTest" class="table is-hoverable is-fullwidth mt-4">
            <tbody
              :style="{
                backgroundColor: value.yaexiste ? '#607D8B' : '#424242',
                marginTop: '30px',
              }"
              v-for="(value, key) in invoices"
              :key="`incoide-${key}`"
            >
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
                  <p>{{ value.status == 1 ? 'Paid' : 'Error' }}</p>
                </td>
                <td>
                  <p>{{ value.status_description }}</p>
                </td>
                <td>
                  <p>{{ value.payment_type.name }}</p>
                </td>
                <td v-if="value.yaexiste">
                  <p>{{ value.yaexiste ? 'Payment Assigned' : '' }}</p>
                </td>
                <td v-if="!value.yaexiste">
                  <VButton
                    @click="
                      ;(linkInvoice.modal = true), (linkInvoice.payment = value)
                    "
                    >Link payment to invoice</VButton
                  >

                  <VModal
                    :open="linkInvoice.modal"
                    actions="center"
                    @close="linkInvoice.modal = false"
                  >
                    <template #content>
                      <table class="table is-hoverable is-fullwidth">
                        <thead>
                          <tr class="has-background-grey-dark">
                            <th scope="col">ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Payment Type</th>
                            <th></th>
                          </tr>
                        </thead>

                        <tbody
                          style="background-color: #212121"
                          v-for="(value, key) in generalInvoices"
                          :key="`facturas-${key}`"
                        >
                          <tr v-if="!value.membership_payment_id">
                            <td>
                              <p>{{ value.id }}</p>
                            </td>
                            <td>
                              <p>{{ value.total }}</p>
                            </td>
                            <td>
                              <p>
                                {{ moment(value.created).format('MM-DD-YYYY') }}
                              </p>
                            </td>
                            <td>
                              <p>{{ value.status }}</p>
                            </td>
                            <td>
                              <p>{{ value.payment_type.name }}</p>
                            </td>
                            <td>
                              <VButton @click="vincular(value)" color="primary"
                                >Link</VButton
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </template>
                    <template #action>
                      <!-- -->
                    </template>
                  </VModal>
                </td>
              </tr>

              <!-- <tr v-for="(v, ke) in value.items" :key="`item-${ke}`">
                <td>{{ v.description }} {{ v.type }}</td>
                <td>{{ v.amount }}</td>
              </tr> -->
            </tbody>
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
