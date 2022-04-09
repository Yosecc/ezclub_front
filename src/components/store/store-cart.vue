<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { API_WEB_URL } from '/@src/services/index.ts'
import { moneda } from '/@src/models/Mixin.ts'
import { cart, stepActive, modalCheckout } from '/@src/models/Store.ts'

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
  modalCheckout.value = false
  optionSelected.value = null
}

const optionSelected = ref(null)
</script>

<template>
  <div style="min-height: 400px">
    <VCard class="mb-4 d-flex justify-content-around">
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
    </VCard>

    <shopping-cart
      v-if="stepActive == 1"
      @proccessCheckout="modalCheckout = true"
    >
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
      <template #header>
        <p class="title is-5">Not Member</p>
      </template>
      <template #content>
        <div
          id="BotonesOptions"
          v-if="!optionSelected"
          class="d-flex align-items-center justify-content-center py-6"
        >
          <div
            class="btn-card"
            @click="optionSelected = 'is_member'"
            style="width: 200px"
          >
            <VCard class="mr-2 text-center" color="info">
              <p class="title is-1">
                <i class="fas fa-dumbbell" aria-hidden="true"></i>
              </p>
              <p class="title is-5">Member</p>
            </VCard>
          </div>
          <div
            class="btn-card"
            @click="optionSelected = 'not_member'"
            style="width: 200px"
          >
            <VCard class="ml-2 text-center" color="warning">
              <p class="title is-1">
                <i class="lnir lnir-user-alt-1" aria-hidden="true"></i>
              </p>
              <p class="title is-5">Not Member</p>
            </VCard>
          </div>
        </div>

        <shopping-checkout v-if="optionSelected == 'is_member'">
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
        </shopping-checkout>
      </template>
      <template #action>
        <!-- <VButton color="primary" raised>Confirm</VButton> -->
      </template>
    </VModal>

    <sendFactura v-if="stepActive == 3" />
  </div>
</template>

<style lang="scss"></style>
