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
import {
  vincularPaymentInvoice,
  createFactura,
  createFacturaOfPayment,
  deleteFactura,
  paymentFactura,
} from '/@src/models/Subscriptions'

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
  return true
  return route.query && route.query.test ? route.query.test : false
})

const emit = defineEmit(['onReload'])

const centeredActionsOpen = ref(false)
const isLoaderActive = ref(false)

const showPaymentMethods = ref(false)

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
  changeDate: false,
})

const vincular = async (value) => {
  let t = 'Are you sure you want to link a new invoice'
  if (linkInvoice.changeDate) {
    t +=
      '... Modifying the payment date implies marking the subscription as paid'
  }
  if (confirm(t)) {
    linkInvoice.generalInvoice = value
    if (
      Object.keys(linkInvoice.payment).length &&
      Object.keys(linkInvoice.generalInvoice).length
    ) {
      linkInvoice.loadding = true
      await vincularPaymentInvoice({
        payment_id: linkInvoice.payment.id,
        general_invoice: linkInvoice.generalInvoice.id,
        changeDate: linkInvoice.changeDate,
        suscripcion_id: props.suscripcion.id,
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
}

const generalInvoices = computed(() => {
  return facturas.value.data
})

const loadingCreateFactura = ref(false)
const onCreateFactura = (id: number) => {
  let t = 'Are you sure you want to create a new invoice?'

  if (confirm(t)) {
    loadingCreateFactura.value = true
    createFactura(id)
      .then((response) => {
        loadingCreateFactura.value = false
        notyf.success(response.data.message)
        emit('onReload')
      })
      .catch((error) => {
        loadingCreateFactura.value = false
      })
  }
}
const convert = async (payment: Object) => {
  let t = 'Are you sure you want to create a new invoice?'
  if (confirm(t)) {
    loadingCreateFactura.value = true
    createFacturaOfPayment(props.suscripcion.id, payment.id)
      .then((response) => {
        loadingCreateFactura.value = false
        notyf.success(response.data.message)
        emit('onReload')
      })
      .catch((error) => {
        loadingCreateFactura.value = false
      })
  }
}

const paymentIntent = reactive({
  total: 0,
  metodos: ['stripe-debit', 'stripe-checkout', 'cash', 'posnet'],
  user: null,
  factura: {
    id: 0,
  },
})

const initPayment = (id: number) => {
  if (
    confirm(
      'This action could generate charges attributable to the customer. do you wish to continue?'
    )
  ) {
    const factura = generalInvoices.value.find((e: any) => e.id == id)
    if (factura != undefined) {
      // factura.id
      showPaymentMethods.value = true
      paymentIntent.total = factura.total
      paymentIntent.user = props.suscripcion.user
      paymentIntent.factura = factura
    }
  }
}
const onDelete = (id: number) => {
  if (confirm('Are you sure to delete this record?')) {
    const factura = generalInvoices.value.find((e: any) => e.id == id)

    if (factura != undefined) {
      deleteFactura(props.suscripcion.id, factura.id)
        .then((response) => {
          notyf.success(response.data.message)
          emit('onReload')
        })
        .catch((error) => {})
    }
  }
}

const onPayment = (obj: any) => {
  console.log(obj)
  paymentFactura({
    suscripcion_id: props.suscripcion.id,
    general_invoice_id: paymentIntent.factura.id,
    payment: obj,
  })
    .then((response) => {
      notyf.success(response.data.message)
      showPaymentMethods.value = false
      paymentIntent.total = 0
      paymentIntent.user = null
      paymentIntent.factura = { id: 0 }
      emit('onReload')
    })
    .catch((error) => {})
}
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

          <div class="d-flex w-100 justify-content-end mb-4">
            <!--  -->
            <VLoader size="small" :active="loadingCreateFactura">
              <VButton @click="onCreateFactura(props.suscripcion.id)"
                >Create Invoice</VButton
              >
            </VLoader>
          </div>

          <VModal
            :open="showPaymentMethods"
            actions="center"
            @close="showPaymentMethods = false"
            size="big"
          >
            <template #content>
              <div
                v-if="showPaymentMethods"
                class="columns is-multiline"
                style="min-height: 350px"
              >
                <div class="column is-3">
                  <VLoader size="small" :active="isLoaderActive">
                    <VCard class="mb-4">
                      <slot></slot>
                      <div>
                        <p class="title is-6 mb-1"><b>Total</b></p>
                        <p class="title is-3 mb-0">
                          {{ moneda(paymentIntent.total) }}
                        </p>
                      </div>
                    </VCard>
                  </VLoader>
                </div>

                <div class="column is-9">
                  <!-- <SearchBar class="" v-model="member" /> -->
                </div>

                <div
                  class="is-4 column mx-auto"
                  v-if="
                    paymentIntent.metodos.includes('stripe-debit') &&
                    paymentIntent.user
                  "
                >
                  <VLoader size="small" :active="isLoaderActive">
                    <subscription-method-payment-debit-automatic
                      :total="paymentIntent.total"
                      :user="paymentIntent.user"
                      @onPayment="onPayment"
                    />
                  </VLoader>
                </div>

                <div
                  class="is-4 column mx-auto"
                  v-if="paymentIntent.metodos.includes('cash')"
                >
                  <VLoader size="small" :active="isLoaderActive">
                    <subscription-method-payment-cash
                      :total="paymentIntent.total"
                      @onPayment="onPayment"
                    />
                  </VLoader>
                </div>

                <div
                  class="is-4 column mx-auto"
                  v-if="paymentIntent.metodos.includes('posnet')"
                >
                  <VLoader size="small" :active="isLoaderActive">
                    <subscription-method-payment-posnet
                      :total="paymentIntent.total"
                      @onPayment="onPayment"
                      :define_status="true"
                    />
                  </VLoader>
                </div>
              </div>
            </template>
            <template #action>
              <VButton color="primary" raised>Confirm</VButton>
            </template>
          </VModal>

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
                <th scope="col"></th>
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
                  <p>
                    <a :href="value.invoice_pdf" target="_blank"
                      ><i class="fa fa-eye mr-2"></i>View PDF</a
                    >
                  </p>
                </td>
                <td>
                  <p>{{ value.payment_type.name }}</p>
                </td>
                <td v-if="value.status != 'paid'">
                  <VButton @click="initPayment(value.id)" color="info"
                    >Payment</VButton
                  >

                  <VButton @click="onDelete(value.id)" color="danger"
                    >Delete</VButton
                  >
                </td>
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
                <td
                  v-if="
                    facturas.data.find((e) =>
                      e.membership_payment_id
                        ? e.membership_payment_id == value.id
                        : false
                    )
                  "
                >
                  <p>
                    {{
                      `Payment Assigned invoice: ${
                        facturas.data.find((e) =>
                          e.membership_payment_id
                            ? e.membership_payment_id == value.id
                            : false
                        ).id
                      }`
                    }}
                  </p>
                </td>
                <td
                  v-if="
                    !facturas.data.find((e) =>
                      e.membership_payment_id
                        ? e.membership_payment_id == value.id
                        : false
                    )
                  "
                >
                  <p>
                    {{
                      facturas.data.find((e) =>
                        e.membership_payment_id
                          ? e.membership_payment_id == value.id
                          : false
                      )
                    }}
                  </p>
                  <VButton
                    @click="
                      ;(linkInvoice.modal = true), (linkInvoice.payment = value)
                    "
                    >Link payment to invoice</VButton
                  >
                  <VButton @click="convert(value)"
                    >Convert and link to Invoice</VButton
                  >
                  <VModal
                    :open="linkInvoice.modal"
                    actions="center"
                    size="big"
                    @close="linkInvoice.modal = false"
                  >
                    <template #content>
                      <VField>
                        <VControl>
                          <VSwitchBlock
                            v-model="linkInvoice.changeDate"
                            label="Update next payment date"
                          />
                        </VControl>
                      </VField>
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
