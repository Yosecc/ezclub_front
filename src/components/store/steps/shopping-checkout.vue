<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { API_WEB_URL } from '/@src/services/index.ts'
import { moneda } from '/@src/models/Mixin.ts'
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
} from '/@src/models/Store.ts'

const route = useRoute()

const props = defineProps({})

const emit = defineEmit(['proccessCheckout'])

onMounted(() => {})
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
          <!-- <tr>
              <td>SubTotal</td>
              <td class="text-right">{{ moneda(subTotal) }}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td class="text-right">{{ moneda(tax) }}</td>
            </tr> -->
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

      <VField>
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
      </VField>
    </div>
    <div>
      <VButton
        color="success"
        :disabled="cart.length == 0"
        @click=";(openModalCash = true), (typePayment = 2)"
        class="w-100 justify-content-center mb-4"
      >
        Card
      </VButton>
      <VButton
        color="warning"
        :disabled="cart.length == 0"
        @click=";(openModalCash = true), (typePayment = 1)"
        class="w-100 justify-content-center mb-4"
      >
        Cash
      </VButton>
      <!-- <VButton 
          color="info" 
          :disabled="cart.length == 0"
          class="w-100 justify-content-center"> Swipe Card </VButton> -->
    </div>

    <VModal
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
  </VCard>
</template>

<style lang="scss"></style>
