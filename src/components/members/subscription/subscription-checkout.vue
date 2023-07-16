<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { Api, API_WEB_URL } from '/@src/services'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import { paymentSuscripcion } from '/@src/models/Subscriptions.ts'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'
const route = useRoute()

const props = defineProps({
  total: {
    type: Number,
    default: 0,
    required: true,
  },
  user: {
    type: Object,
    default: {},
    required: true,
  },
  suscripcion_id: {
    type: Number,
    required: true,
  },
  metodos: {
    type: Array,
    default: ['stripe-debit', 'cash', 'posnet'],
  },
})

const emit = defineEmit(['proccessCheckout', 'reload'])
const isLoaderActive = ref(false)

const onPayment = (obj: object) => {
  isLoaderActive.value = true
  paymentSuscripcion(props.suscripcion_id, obj)
    .then((response: any) => {
      isLoaderActive.value = false

      emit('proccessCheckout')
    })
    .catch((error: any) => {
      isLoaderActive.value = false
      // console.log(error.response.data, typeof error.response.data)
      emit('reload')

      if (typeof error.response.data == 'object') {
        for (var i in error.response.data) {
          if (typeof error.response.data[i] == 'object') {
            for (var e in error.response.data[i]) {
              // console.log(typeof error.response.data[i][e])
              if (typeof error.response.data[i][e] == 'object') {
                for (var x in error.response.data[i][e]) {
                  notyf.error(error.response.data[i][e][x])
                }
              }
              if (typeof error.response.data[i][e] == 'string') {
                notyf.error(error.response.data[i][e])
              }
            }
          }
        }
      }
    })
  // console.log(obj)
}
</script>

<template>
  <div class="columns is-multiline" style="min-height: 350px">
    <div class="column is-3">
      <VLoader size="small" :active="isLoaderActive">
        <VCard class="mb-4">
          <slot></slot>
          <div>
            <p class="title is-6 mb-1"><b>Total</b></p>
            <p v-if="order" class="title is-3 mb-0">
              {{ moneda(total) }}
            </p>
            <p v-else class="title is-3 mb-0">{{ moneda(total) }}</p>
          </div>
        </VCard>
      </VLoader>
    </div>

    <div class="column is-9">
      <!-- <SearchBar class="" v-model="member" /> -->
    </div>

    <!-- <div class="column is-12 mb-4">
      <h1 class="title is-5">Payment methods</h1>
       <div class="d-flex"> -->]

    <div
      class="is-4 column mx-auto"
      v-if="props.metodos.includes('stripe-debit')"
    >
      <VLoader size="small" :active="isLoaderActive">
        <subscription-method-payment-debit-automatic
          :total="props.total"
          :user="props.user"
          @onPayment="onPayment"
        />
      </VLoader>
    </div>

    <!--
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
      </div> -->

    <!-- <div class="is-4 column mx-auto">
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
      </div> -->
    <!-- Terminales -->
    <!-- <div class="mt-4 mx-2" v-if="terminalesOoptions">
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
      </div> -->

    <!--  -->

    <div
      class="is-4 column mx-auto"
      v-if="props.metodos.includes('stripe-checkout')"
    >
      <VLoader size="small" :active="isLoaderActive">
        <subscription-method-stripe-checkout
          :total="props.total"
          @onPayment="onPayment"
        />
      </VLoader>
    </div>

    <div class="is-4 column mx-auto" v-if="props.metodos.includes('cash')">
      <VLoader size="small" :active="isLoaderActive">
        <subscription-method-payment-cash
          :total="props.total"
          @onPayment="onPayment"
        />
      </VLoader>
    </div>

    <div class="is-4 column mx-auto" v-if="props.metodos.includes('posnet')">
      <VLoader size="small" :active="isLoaderActive">
        <subscription-method-payment-posnet
          :total="props.total"
          @onPayment="onPayment"
          :define_status="true"
        />
      </VLoader>
    </div>

    <!-- // -->

    <!-- <shopping-checkout-debit-automatic v-if="showOptionsDebit" /> -->
    <!-- </div> -->

    <div class="mb-4 column is-12">
      <!-- <inputsLayaut :slo="false" class="w-100" :inputs-step="discountInput" /> -->
    </div>

    <!-- <shopping-send-recibo v-model="openModalRecibo" /> -->
  </div>
</template>

<style lang="scss"></style>
