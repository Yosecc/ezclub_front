<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api, API_WEB_URL } from '/@src/services'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import {
  cart,
  total,
  payment,
  client,
  cash,
  changeBack,
  addCash,
  typePayment,
  openModalCash,
  openModalCard,
  order,
  storeDebitAutomatic,
  storeNewCardClient,
  newSetupIntent,
} from '/@src/models/Store.ts'
import { locationsSelect } from '/@src/models/Companies.ts'

const route = useRoute()

const props = defineProps({})

const emit = defineEmit(['proccessCheckout'])

onMounted(() => {})

const paymentCardStripe = () => {
  openModalCard.value = true
  typePayment.value = 3
  payment()
}

const member = ref(null)
const showOptionsDebit = ref(false)

watch(
  () => member.value,
  () => {
    showOptionsDebit.value = false
  }
)

watch(
  () => order.value,
  (to) => {
    console.log('acambio')
  }
)

const loadingOptionDebit = ref(false)

const debitAutomaticPaymentDefault = (obj) => {
  member.value.payment_method = obj.payment_method
  if (!cart.value.length) {
    notyf.error('No hay productos en el carro')
    return
  }
  if (!total.value) {
    notyf.error('No existe el total')
    return
  }
  if (!member.value) {
    notyf.error('No hay miembro seleccionado')
    return
  }

  if (!confirm('Confirm Payment')) {
    return
  }

  loadingOptionDebit.value = true
  storeDebitAutomatic({
    cart: cart.value,
    total: total.value,
    member_id: member.value.id,
    locations_id: getInput(locationsSelect.value, 'locations_id').model,
    payment_method: member.value.payment_method,
  })
    .then((response) => {
      loadingOptionDebit.value = false
      notyf.success('Success Payment')
      window.location.reload()
    })
    .catch((error) => {
      loadingOptionDebit.value = false
      notyf.error(error.response.data)
    })
}

const showStripe = ref(false)
const addNewCardClient = () => {
  if (!cart.value.length) {
    notyf.error('No hay productos en el carro')
    return
  }
  if (!total.value) {
    notyf.error('No existe el total')
    return
  }
  if (!member.value) {
    notyf.error('No hay miembro seleccionado')
    return
  }
  showStripe.value = true
}
</script>

<template>
  <VCard
    class="d-flex flex-column justify-content-between"
    style="min-height: 500px"
  >
    <div>
      <slot></slot>
      <table class="table is-striped is-fullwidth">
        <tbody>
          <tr>
            <td>
              <p class="title is-4"><b>Total</b></p>
            </td>
            <td class="text-right">
              <p class="title is-4">{{ moneda(total) }}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <VField>
        <VControl>
          <input
            type="text"
            v-model="client.email"
            class="input"
            placeholder="Email"
          />
        </VControl>
      </VField>
      <VField>
        <VControl>
          <input
            type="text"
            v-model="client.phone"
            class="input"
            placeholder="Phone"
          />
        </VControl>
      </VField>
      <VField>
        <VControl>
          <input
            type="text"
            v-model="client.barcode"
            class="input"
            placeholder="Barcode"
          />
        </VControl>
      </VField> -->
    </div>

    <SearchBar v-model="member" />

    <div class="d-flex">
      <VCard
        v-tooltip="!member ? 'Debe seleccionar un miembro' : ''"
        color="success"
        :disabled="!member"
        @click="
          member
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
        :disabled="showOptionsDebit"
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
        :disabled="showOptionsDebit"
        class="mx-2 btn-card w-100 justify-content-center"
      >
        <p class="title is-3">
          <i class="fas fa-money-check-alt" aria-hidden="true"></i>
        </p>
        <p class="title is-5">Swipe Card</p>
      </VCard>
    </div>
    <div class="mt-4 mx-2" v-if="showOptionsDebit">
      <VLoader size="large" :active="loadingOptionDebit">
        <VCard
          @click="debitAutomaticPaymentDefault({ payment_method: 'default' })"
          :color="member.payment_method == 'default' ? 'success' : undefined"
          v-if="member.user"
          class="btn-card mb-4"
        >
          <div class="d-flex align-items-center">
            <p class="title is-1 mb-0">
              <i class="fas fa-credit-card" aria-hidden="true"></i>
            </p>
            <div class="ml-4">
              <p class="title is-4 mb-2">Select Payment Method Default</p>
              <p class="title is-4 mb-0">
                {{ member.user.pm_type }} **** {{ member.user.pm_last_four }}
              </p>
            </div>
          </div>
        </VCard>

        <div class="columns is-multiline w-100">
          <div
            v-for="(card, key) in member.cards"
            :key="`card-${key}`"
            class="column is-6"
          >
            <VCard
              @click="debitAutomaticPaymentDefault({ payment_method: card.id })"
              :color="member.payment_method == card.id ? 'success' : undefined"
              v-if="!showStripe && member.user.pm_last_four != card.card.last4"
              class="btn-card"
            >
              <div class="d-flex align-items-center">
                <p class="title is-6 mb-0">
                  <i class="fas fa-credit-card" aria-hidden="true"></i>
                </p>
                <div class="ml-4">
                  <p class="title is-6 mb-2">Select Payment Method</p>
                  <p class="title is-6 mb-0">
                    {{ card.card.brand }} **** {{ card.card.last4 }}
                  </p>
                </div>
              </div>
            </VCard>
          </div>
          <div class="column is-12">
            <VCard
              @click="addNewCardClient"
              v-show="!showStripe"
              color="success"
              class="btn-card"
            >
              <div class="d-flex align-items-center">
                <p class="title is-1 mb-0">
                  <i class="fas fa-plus-circle" aria-hidden="true"></i>
                </p>
                <div class="ml-4">
                  <p class="title is-4 mb-2">Add new card</p>
                </div>
              </div>
            </VCard>
          </div>
        </div>
      </VLoader>
      <stripeAddCardStore
        v-if="showStripe"
        :new_setup_intent="`orders/new_setup_intent/${member.id}`"
        :member_id="member.id"
        :url_payment="`orders/store_new_card_and_payment`"
        :data="{
          cart: cart,
          total: total,
          member_id: member.id,
          locations_id: getInput(locationsSelect, 'locations_id').model,
        }"
        @PaymentAction="window.location.reload()"
      />
    </div>

    <VModal
      :title="''"
      :open="openModalCash"
      actions="center"
      @close="openModalCash = false"
    >
      <template #content>
        <!-- <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        /> -->
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
          <VButton
            bold
            class="m-3"
            style="font-size: 14px"
            @click="cash = total"
          >
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
        <VButton
          color=""
          @click="cash = 0"
          class="d-flex justify-content-center"
          raised
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

    <VModal
      :open="openModalCard"
      actions="center"
      @close="openModalCard = false"
    >
      <template #content>
        <stripeFormProduct v-if="order" :amount="total" :order_id="order" />
      </template>
      <template #action>
        <!-- <VButton
          color="success"
          @click="payment"
          :disabled="total > cash"
          class="d-flex justify-content-center"
          raised
          >Confirm</VButton
        > -->
      </template>
    </VModal>
  </VCard>
</template>

<style lang="scss"></style>
