<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { API_WEB_URL } from '/@src/services/index.ts'
import { moneda } from '/@src/models/Mixin.ts'
import { cart, stepActive, modalCheckout, order } from '/@src/models/Store.ts'

const route = useRoute()

const props = defineProps({})

onMounted(() => {})

const steps = ref([
  {
    step: 1,
    name: 'Shopping',
    icon: 'fa-shopping-cart',
  },
  {
    step: 2,
    name: 'Receipt',
    icon: 'fa-money-check',
  },
  {
    step: 3,
    name: 'Receipt',
    icon: 'fa-receipt',
  },
])

const closeModal = () => {
  order.value = null
  modalCheckout.value = false
  optionSelected.value = null
}

const optionSelected = ref(null)
</script>

<template>
  <div style="min-height: 400px">
    <!-- <VCard class="mb-4 d-flex justify-content-around">
      <p
        v-for="(i, key) in steps"
        :key="`sterpmenu-${key}`"
        style="font-size: 20px"
        :title="i.name"
        :class="i.step == stepActive ? 'text-primary' : ''"
        @click="stepActive = i.step"
      >
        <i class="fas" :class="i.icon" aria-hidden="true"></i>
      </p>
    </VCard> -->

    <shopping-cart @proccessCheckout="modalCheckout = true">
      <div class="d-flex justify-content-between mb-4">
        <h3 class="title is-5 mb-2">Order</h3>
        <VTag
          color="info"
          v-if="cart"
          :label="`${cart.length} products`"
          rounded
          elevated
        />
      </div>
    </shopping-cart>

    <VModal
      :open="modalCheckout"
      actions="center"
      size="big"
      noscroll
      noclose
      @close="closeModal"
    >
      <template #header> </template>
      <template #content>
        <shopping-checkout>
          <!-- <div class="d-flex justify-content-between mb-4">
            <h3 class="title is-5 mb-2">Order</h3>
            <VTag
              color="info"
              v-if="cart"
              :label="`${cart.length} products`"
              rounded
              elevated
            />
          </div> -->
        </shopping-checkout>
      </template>
      <template #action>
        <!-- <VButton color="primary" raised>Confirm</VButton> -->
      </template>
    </VModal>

    <!-- <sendFactura v-if="stepActive == 3" /> -->
  </div>
</template>

<style lang="scss"></style>
