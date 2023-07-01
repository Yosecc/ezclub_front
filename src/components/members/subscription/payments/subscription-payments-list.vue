<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { locationsSelect, terminales } from '/@src/models/Companies.ts'
import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import { API_WEB_URL } from '/@src/services'
import moment from 'moment'
const props = defineProps({
  payments: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div>
    <VCard
      class="mb-4 -flex justify-content-between align-items-center cardprofile"
    >
      <div>
        <p class="title is-5">Payments</p>
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, key) in payments" :key="`payment-${key}`">
              <td>
                {{ moment(value.created_at).format('MM-DD-Y') }}
              </td>
              <td>
                {{ value.payment_type.name }}
              </td>
              <td>Suscription</td>
              <td>{{ value.status_description }} / {{ value.status }}</td>
              <td>
                {{ value.amount }}
              </td>
              <td>
                <a
                  :href="value.url_pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  >View Pdf</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </VCard>
  </div>
</template>

<style lang="scss"></style>
