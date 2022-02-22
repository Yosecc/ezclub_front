<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { API_WEB_URL } from '/@src/services/index.ts'
import { moneda } from '/@src/models/Mixin.ts'
import { cart, total } from '/@src/models/Store.ts'

const route = useRoute()

const props = defineProps({})

const emit = defineEmit(['proccessCheckout'])

onMounted(() => {})

const openModalCash = ref(false)
</script>

<template>
  <VCard
    class="d-flex flex-column justify-content-between"
    style="min-height: 400px"
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
          <input type="text" class="input" placeholder="phone/id/barcode" />
        </VControl>
      </VField>
    </div>
    <div>
      <VButton
        color="success"
        :disabled="cart.length == 0"
        class="w-100 justify-content-center mb-4"
      >
        Card
      </VButton>
      <VButton
        color="warning"
        :disabled="cart.length == 0"
        @click="openModalCash = true"
        class="w-100 justify-content-center mb-4"
      >
        Cash
      </VButton>
      <!-- <VButton 
          color="info" 
          :disabled="cart.length == 0"
          class="w-100 justify-content-center"> Swipe Card </VButton> -->
    </div>

    <VButton bold @click="openModalCash = true"> Open Modal </VButton>

    <VModal
      :open="openModalCash"
      actions="center"
      @close="openModalCash = false"
    >
      <template #content>
        <VPlaceholderSection
          title="Go Premium"
          subtitle="Unlock more features and business tools by going premium"
        />
      </template>
      <template #action>
        <VButton color="primary" raised>Confirm</VButton>
      </template>
    </VModal>
  </VCard>
</template>

<style lang="scss"></style>
