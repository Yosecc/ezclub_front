<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import {
  inputsMember,
  getMembersDayPass,
  getDayPass,
  loading,
  dayPass,
  user,
  onProcess,
  onPaymentDayPass,
  filter,
} from '/@src/models/DayPass.ts'
import {
  getInput,
  moneda,
  notyf,
  cleanUpModelInputs,
} from '/@src/models/Mixin.ts'
import { cart, subTotal, openModalCash, total } from '/@src/models/Store.ts'

pageTitle.value = 'New Day Pass'
useHead({
  title: 'Day Pass',
})

const route = useRoute()

const loadingButtons = ref(false)

onMounted(() => {
  cart.value = []
  getDayPass().then((response) => {
    cart.value.push({
      product_id: 1,
      count: 1,
      products_amount: dayPass.value.amount,
      name: dayPass.value.name,
      stock: 999,
    })
  })

  ongetMembersDayPass()
})

watch(
  () => filter.value,
  () => {
    ongetMembersDayPass()
  }
)

const loadingList = ref(false)
const ongetMembersDayPass = () => {
  loadingList.value = true
  getMembersDayPass()
    .then((response) => {
      loadingList.value = false
    })
    .catch((error) => {
      loadingList.value = false
    })
}

const saveData = () => {}

const openCar = () => {
  console.log('djfh')
}
const onPayment = () => {
  onPaymentDayPass({ payment_type_id: 1, amount: total.value })
    .then((response) => {
      loadingButtons.value = false
      openModalCash.value = false
      notyf.success('Payment Success')
      limpiarTodo()
    })
    .catch((error) => {
      if (error.response) {
        for (var i in error.response.data) {
          notyf.error(`${i}: ${error.response.data[i]}`)
        }
      }
      loadingButtons.value = false
    })
}
const PaymentAction = () => {
  loadingButtons.value = true
  onPaymentDayPass({ payment_type_id: 3, amount: total.value })
    .then((response) => {
      loadingButtons.value = false
      notyf.success('Payment Success')
      limpiarTodo()
    })
    .catch((error) => {
      if (error.response) {
        for (var i in error.response.data) {
          notyf.error(`${i}: ${error.response.data[i]}`)
        }
      }
      loadingButtons.value = false
    })
}

const onDebitAutomatic = () => {
  loadingButtons.value = true
  onProcess()
    .then((response) => {
      user.value = response.data.user
      loadingButtons.value = false
    })
    .catch((error) => {
      if (error.response) {
        for (var i in error.response.data) {
          notyf.error(`${i}: ${error.response.data[i]}`)
        }
      }
      loadingButtons.value = false
    })
}

const limpiarTodo = () => {
  cleanUpModelInputs(inputsMember.value)
  user.value.id = null
  loading.value = true
  ongetMembersDayPass()
  loading.value = false
}
</script>

<template>
  <SidebarLayout>
    <formLayaut
      :titles="{ title: title }"
      :is-loading="loading"
      :buttons="['']"
      :is-card="false"
      @saveData="saveData"
    >
      <div class="columns is-multiline">
        <div class="column is-7">
          <VCard class="h-100">
            <inputsLayaut :inputs-step="inputsMember" />
          </VCard>
        </div>
        <!-- <div class="column is-5">
          <VCard class="h-100 d-flex flex-column text-center">
            <p v-if="!loading" class="title is-2 " style="line-height: 50px;">Day Pass: <br> <span class="font-bold">{{ moneda(dayPass.amount) }}</span></p>
            <div class="mt-auto">

              <VCard @click="openCar" color="success" class="btn-card"><p class="title is-3 text-center">Process</p></VCard>
            </div>
          </VCard>
        </div> -->
        <div class="column is-5">
          <div class="h-100 w-100 columns is-multiline">
            <div class="column is-12">
              <VCard class="h-100">
                <p class="">Day Pass</p>
                <p class="title is-3">{{ moneda(total) }}</p>
              </VCard>
            </div>
            <!--  -->
            <div class="column is-6">
              <VLoader class="h-100" size="small" :active="loadingButtons">
                <VCard
                  class="
                    h-100
                    w-100
                    btn-card
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                  @click="onDebitAutomatic"
                  color="success"
                >
                  <p class="title is-4 mb-0">Debit Automatic</p>
                  <p class="title is-3 mb-0">
                    <i class="fas fa-credit-card" aria-hidden="true"></i>
                  </p>
                </VCard>
              </VLoader>
            </div>
            <!--  -->
            <div class="column is-6">
              <VLoader class="h-100" size="small" :active="loadingButtons">
                <VCard
                  color="warning"
                  :disabled="false"
                  @click="openModalCash = true"
                  class="btn-card w-100 justify-content-center"
                >
                  <p class="title is-3">
                    <i class="fas fa-money-bill" aria-hidden="true"></i>
                  </p>
                  <p class="title is-5">Cash</p>
                </VCard>
              </VLoader>
            </div>
            <!--  -->
          </div>
        </div>
        <shopping-checkout-cash :is-event="true" @onPayment="onPayment" />

        <VLoader class="h-100 w-100" size="small" :active="loadingButtons">
          <stripeAddCardUser
            v-if="user.id && !loadingButtons"
            :user_id="user.id"
            url_client_secret="pass_day/stripe"
            url_payment="pass_day/add_card"
            @PaymentAction="PaymentAction"
          />
        </VLoader>
      </div>
    </formLayaut>

    <VLoader class="h-100 w-100" size="laarge" :active="loadingList">
      <VCard class="mt-5">
        <h1 class="title is-5">Member List - Day Pass</h1>
        <div class="my-5">
          <dayPassList />
        </div>
      </VCard>
    </VLoader>
  </SidebarLayout>
</template>
