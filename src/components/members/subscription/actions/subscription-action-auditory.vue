<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  computed,
  defineProps,
  defineEmit,
  reactive,
} from 'vue'
import { moneda, notyf } from '/@src/models/Mixin'
import {
  vincularPaymentInvoice,
  createFactura,
  createFacturaOfPayment,
  getAuditoriaSuscripcion,
} from '/@src/models/Subscriptions'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()

import moment from 'moment'

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const consulta = ref([])

const auditoria = computed(() => {
  if (consulta.value.length) {
    return consulta.value
  }
  return props.suscripcion.auditory
})

const vieAllAuditory = () => {
  getAuditoriaSuscripcion(props.suscripcion.id).then((response) => {
    // console.log(response.data)
    consulta.value = response.data.data
    // response.count
  })
}
</script>

<template>
  <div v-if="auditoria && auditoria.length" class="w-100">
    <p class="title"></p>
    <VCard>
      <table class="table w-100">
        <tr>
          <th>Username</th>
          <th>Location</th>
          <th>Action</th>
          <th>Date</th>
        </tr>
        <tr v-for="(item, key) in auditoria" :key="`auditoria-${key}`">
          <td>{{ item.user.name }}</td>
          <td>{{ item.location.name }}</td>

          <td>{{ item.action }}</td>
          <td>{{ moment(item.created_at).format('MM-DD-YYYY HH:mm:ss') }}</td>
        </tr>
      </table>
      <div class="w-100 d-flex justify-content-end">
        <VButton @click="vieAllAuditory" color="undefined">View all</VButton>
      </div>
    </VCard>
  </div>
</template>

<style lang="scss"></style>
