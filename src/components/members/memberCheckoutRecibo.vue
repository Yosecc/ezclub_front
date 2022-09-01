<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import { API_WEB_URL, FRONTEND_URL } from '/@src/services'
import { company } from '/@src/models/Companies.ts'
const openModal = ref(false)

const props = defineProps({
  membership_member: {
    type: [Number, String],
    default: 0,
  },
  invoice_id: {
    type: [Number, String],
    default: 0,
  },
})

onMounted(() => {
  // window.print()
  // printpage()
})
// const emit = defineEmit(['on'])

const payment = () => {
  openModal.value = false
  // emit('on', )
}
</script>

<template>
  <VCard
    style="background: #388e3c"
    class="mx-2 mx-auto mt-4 is-4 column btn-card justify-content-center"
    @click="openModal = true"
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
        <p class="title is-5" style="color: white !important">View Order</p>
      </div>
      <p v-if="openModalRecibo" class="title is-6">
        <i class="fas fa-check" aria-hidden="true"></i>
      </p>
    </div>
  </VCard>
  <VModal
    :title="''"
    :open="openModal"
    actions="center"
    @close="openModal = false"
  >
    <template #content>
      <!-- <iframe id="printf" :src="`${FRONTEND_URL}members/recibo?id=${props.membership_member}`"></iframe> -->

      <iframe
        :src="`${API_WEB_URL}ticket_membership/${props.membership_member}?companie_id=${company.id}&invoice_id=${props.invoice_id}`"
        width="100%"
        height="500px"
        frameborder="0"
      ></iframe>

      <a
        :href="`${API_WEB_URL}ticket_membership/${props.membership_member}?companie_id=${company.id}&invoice_id=${props.invoice_id}`"
        >Open</a
      >
    </template>
    <template #action> </template>
  </VModal>
</template>

<style lang="scss">
@media print {
}
</style>
