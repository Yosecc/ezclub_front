<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api, API_WEB_URL } from '/@src/services'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import { getDiscounts } from '/@src/models/Discounts.ts'
import {
  cart,
  total,
  payment,
  client,
  typePayment,
  openModalCash,
  openModalCard,
  order,
  newSetupIntent,
  storeSwipeCard,
  cancelPayment,
  retryPayment,
  finishPayment,
  openModalRecibo,
  member,
  discountInput,
  discount,
} from '/@src/models/Store.ts'
import { locationsSelect, terminales } from '/@src/models/Companies.ts'
import swal from 'sweetalert'
const route = useRoute()

const props = defineProps({})

const emit = defineEmit(['proccessCheckout'])

const showOptionsDebit = ref(false)

watch(
  () => member.value,
  () => {
    showOptionsDebit.value = false
  }
)

onMounted(() => {
  getInput(discountInput, 'discount').model = ''
  getDiscounts(1, 'product').then((response) => {
    getInput(discountInput, 'discount').values = response.data.discounts
  })
  order.value = null
})

const paymentCardStripe = () => {
  openModalCard.value = true
  typePayment.value = 3
  payment()
}

// watch(
//   () => order.value,
//   (to) => {
//     console.log('cambio',order.value)
//   }
// )

const terminalesOoptions = ref(false)
const terminal_id = ref(null)
const paymentIntent = ref(null)

const paymentSwipeCard = (id) => {
  if (paymentIntent.value != null) {
    notyf.error(
      'A payment Intent already exists, Select one of the following actions'
    )
    return
  }
  terminal_id.value = id

  if (confirm('Send Terminal')) {
    notyf.success('Enviando....')

    storeSwipeCard({
      cart: cart.value,
      total: total.value,
      locations_id: getInput(locationsSelect.value, 'locations_id').model,
      terminal_id: terminal_id.value,
      discount: discount.value ? discount.value.id : null,
      member_id: member.value.id,
    })
      .then((response) => {
        // loadingOptionDebit.value = false
        paymentIntent.value = response.data
        console.log('soy el paymentIntent', response.data)
        notyf.success('Recibido en el terminal')
        // window.location.reload()
      })
      .catch((error) => {
        // loadingOptionDebit.value = false
        notyf.error(error.response.data)
      })
  }
}

const swipeCardStatus = computed(() => {
  if (
    showOptionsDebit.value ||
    !terminales.value.length ||
    paymentIntent.value ||
    order.value
  ) {
    return true
  } else {
    return false
  }
})

const cashStatus = computed(() => {
  if (
    showOptionsDebit.value ||
    terminalesOoptions.value.length ||
    order.value
  ) {
    return true
  } else {
    return false
  }
})

const debitAutomaticStatus = computed(() => {
  if (!member.value || order.value) {
    return true
  } else {
    return false
  }
})

const changeSwipwCard = () => {
  if (!swipeCardStatus.value) {
    if (terminales.value.length) {
      terminalesOoptions.value = !terminalesOoptions.value
    } else {
      terminalesOoptions.value = false
    }
    if (paymentIntent.value) {
      terminalesOoptions.value = true
    }
  }
}

const oncancelPayment = () => {
  cancelPayment(paymentIntent.value)
    .then((response) => {
      limpiezaSwipeCard()
      notyf.success('payment canceled')
    })
    .catch((error) => {
      notyf.error(error.response)
      if (error.response.data) {
        notyf.error(error.response.data)
      }
    })
}
const onretryPayment = () => {
  notyf.success('Retry...')
  retryPayment(paymentIntent.value, terminal_id.value)
    .then((response) => {
      paymentIntent.value = response.data
      notyf.success('Received at the terminal')
    })
    .catch((error) => {
      notyf.error(error.response)
      if (error.response.data) {
        notyf.error(error.response.data)
      }
    })
}
const onfinishPayment = () => {
  finishPayment(paymentIntent.value)
    .then((response) => {
      limpiezaSwipeCard()
      finishPaymentOrder({
        invoice_pdf: response.data.invoice_pdf,
        order: response.data.order,
      })
    })
    .catch((error) => {
      notyf.error(error.response)
      if (error.response.data) {
        notyf.error(error.response.data)
      }
    })
}

const limpiezaSwipeCard = () => {
  paymentIntent.value = null
  terminal_id.value = null
  terminalesOoptions.value = false
}
</script>

<template>
  <div class="columns is-multiline" style="min-height: 350px">
    <div class="column is-3">
      <VCard class="mb-4">
        <slot></slot>
        <div>
          <p class="title is-6 mb-1"><b>Total</b></p>
          <p v-if="order" class="title is-3 mb-0">
            {{ moneda(order.total / 100) }}
          </p>
          <p v-else class="title is-3 mb-0">{{ moneda(total) }}</p>
          <p v-if="discount" class="mb-0">
            Discount: {{ discount.name }} (
            <span v-if="discount.type == 'percentaje'"
              >{{ discount.value }}% off</span
            >
            <span v-else>-{{ discount.value }}$</span>)
          </p>
        </div>
      </VCard>
    </div>

    <div class="column is-9">
      <SearchBar class="" v-model="member" />
    </div>

    <div class="column is-12 mb-4">
      <div class="d-flex">
        <VCard
          v-tooltip="!member ? 'You must select a member' : ''"
          color="success"
          :disabled="debitAutomaticStatus"
          @click="
            !debitAutomaticStatus
              ? (showOptionsDebit = !showOptionsDebit)
              : (showOptionsDebit = false)
          "
          class="mx-2 btn-card w-100"
        >
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <p class="title is-3">
                <i class="fas fa-credit-card" aria-hidden="true"></i>
              </p>
              <p class="title is-5">Debit Automatic</p>
            </div>
            <p v-if="showOptionsDebit" class="title is-6">
              <i class="fas fa-check" aria-hidden="true"></i>
            </p>
          </div>
        </VCard>

        <VCard
          color="warning"
          :disabled="cashStatus"
          @click=";(typePayment = 1), (openModalCash = true), payment"
          class="mx-2 btn-card w-100 justify-content-center"
        >
          <p class="title is-3">
            <i class="fas fa-money-bill" aria-hidden="true"></i>
          </p>
          <p class="title is-5">Cash</p>
        </VCard>

        <VCard
          color="info"
          :disabled="swipeCardStatus"
          class="mx-2 btn-card w-100 justify-content-center"
          @click="changeSwipwCard"
          v-tooltip="!terminales.length ? 'No posee terminales' : ''"
        >
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <p class="title is-3">
                <i class="fas fa-money-check-alt" aria-hidden="true"></i>
              </p>
              <p class="title is-5">Swipe Card</p>
            </div>
            <p v-if="terminalesOoptions" class="title is-6">
              <i class="fas fa-check" aria-hidden="true"></i>
            </p>
          </div>
        </VCard>
      </div>

      <div class="is-4 column mx-auto">
        <VCard
          style="background: #388e3c"
          v-if="order"
          class="mx-2 mx-auto btn-card justify-content-center"
          @click="openModalRecibo = true"
        >
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <p class="title is-3">
                <i
                  class="fas fa-receipt"
                  style="color: white !important"
                  aria-hidden="true"
                ></i>
              </p>
              <p class="title is-5" style="color: white !important">
                View Order
              </p>
            </div>
            <p v-if="openModalRecibo" class="title is-6">
              <i class="fas fa-check" aria-hidden="true"></i>
            </p>
          </div>
        </VCard>
      </div>
      <!-- Terminales -->
      <div class="mt-4 mx-2" v-if="terminalesOoptions">
        <div
          v-for="(terminal, key) in terminales"
          :key="`terminal-${key}`"
          class="columns is-multiline"
        >
          <div class="column">
            <VCard
              class="p-4 btn-card"
              :class="paymentIntent && terminal_id == terminal.id ? 'is-3' : ''"
              :disabled="paymentIntent && terminal_id == terminal.id"
              :color="terminal_id == terminal.id ? 'info' : ''"
              @click="paymentSwipeCard(terminal.id)"
            >
              <p class="title is-1">
                <i class="lnir lnir-postcard" aria-hidden="true"></i>
              </p>
              <p class="title is-5">{{ terminal.label }}</p>
              <p>Serial number: {{ terminal.serial_number }}</p>
              <p>Status: {{ terminal.status }}</p>
            </VCard>
          </div>

          <div
            v-if="paymentIntent && terminal_id == terminal.id"
            class="column flex-column d-flex justify-content-between is-3"
          >
            <VCard
              color="danger"
              class="mb-2 btn-card d-flex justify-content-center"
              @click="oncancelPayment()"
            >
              <p class="title is-5">Cancel Payment</p>
            </VCard>
            <VCard
              color="warning"
              class="btn-card d-flex justify-content-center"
              @click="onretryPayment()"
            >
              <p class="title is-5">Retry Payment</p>
            </VCard>
          </div>

          <div
            v-if="paymentIntent && terminal_id == terminal.id"
            class="column is-5"
          >
            <VCard
              color="success"
              class="
                btn-card
                h-100
                d-flex
                justify-content-center
                align-items-center
              "
              @click="onfinishPayment()"
            >
              <p class="title is-3">Finish payment</p>
            </VCard>
          </div>
        </div>
      </div>

      <!-- MODAL -->
      <shopping-checkout-cash />
      <!-- // -->

      <shopping-checkout-debit-automatic v-if="showOptionsDebit" />
    </div>

    <div class="mb-4 column is-12">
      <inputsLayaut :slo="false" class="w-100" :inputs-step="discountInput" />
    </div>

    <shopping-send-recibo v-model="openModalRecibo" />
  </div>
</template>

<style lang="scss"></style>
