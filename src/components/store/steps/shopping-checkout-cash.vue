<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { locationsSelect, terminales } from '/@src/models/Companies.ts'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import {
  total,
  payment,
  cash,
  changeBack,
  addCash,
  openModalCash,
  discount,
} from '/@src/models/Store.ts'
</script>

<template>
  <VModal
    :title="''"
    :open="openModalCash"
    actions="center"
    @close="openModalCash = false"
  >
    <template #content>
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
        <VButton bold class="m-3" style="font-size: 14px" @click="cash = total">
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
      <VButton @click="cash = 0" class="d-flex justify-content-center" raised
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
</template>

<style lang="scss"></style>
