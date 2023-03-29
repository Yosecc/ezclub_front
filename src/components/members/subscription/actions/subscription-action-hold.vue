<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'
import { holdSuscripcion } from '/@src/models/Subscriptions'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const emit = defineEmit(['reload'])

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})

const isLoaderActive = ref(false)

const modal = ref(false)

const hold_date_start = ref(null)
const hold_date_end = ref(null)

const onHold = () => {
  // modal.value = true
  holdSuscripcion(props.suscripcion.id, {
    hold_date_start: hold_date_start.value,
    hold_date_end: hold_date_end.value,
  })
    .then((response) => {
      modal.value = false
    })
    .catch((error) => {
      modal.value = false
    })
}

onMounted(() => {})
</script>

<template>
  <VLoader size="small" class="h-100" :active="isLoaderActive">
    <VCard
      color="warning"
      :outlined="props.suscripcion.hold_date_end != null ? false : true"
      @click="modal = true"
      class="
        mr-4
        btn-card
        text-center
        h-100
        px-2
        d-flex
        align-items-center
        justify-content-center
      "
      style="font-size: 14px"
    >
      <p><b>HOLD Membership</b></p>
      <p>
        <span v-if="props.suscripcion.hold_date_end != null"
          >Active until: <br />
          {{ moment(props.suscripcion.hold_date_start).format('MM/DD/YYYY') }}
          -
          {{
            moment(props.suscripcion.hold_date_end).format('MM/DD/YYYY')
          }}</span
        >
      </p>
    </VCard>
  </VLoader>
  <V-Modal :open="modal" actions="center" @close="modal = false">
    <template #content>
      <!-- <p>
                  Hold end date last day of the month prior to the end of the hold
                </p> -->
      <label for="hold_date_start"><p>Hold date start</p></label>
      <input type="date" v-model="hold_date_start" class="input mt-2 mb-4" />
      <label for="hold_date_end"><p>Hold date end</p></label>
      <input type="date" v-model="hold_date_end" class="input mt-2 mb-4" />
    </template>
    <template #action>
      <V-Button @click="onHold" color="primary" raised>Confirm</V-Button>
    </template>
  </V-Modal>
  <!-- <V-Modal
              :open="modalShowProrratedHold"
              actions="center"
              @close="modalShowProrratedHold = false"
            >
              <template #content>
                <p>Do you want to create an invoice with the prorated amount?</p>
                <inputsLayaut :inputs-step="isProrrateoHold" />

                <table class="table w-100" v-if="presupuestoProrrateo.total">
                  <tr>
                    <td>
                      Subtotal ({{ presupuestoProrrateo.dias_restantes }}
                      days)
                    </td>
                    <td>{{ moneda(presupuestoProrrateo.subtotal) }}</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>{{ moneda(presupuestoProrrateo.tax) }}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{{ moneda(presupuestoProrrateo.total) }}</td>
                  </tr>
                </table>
              </template>
              <template #action>
                <V-Button @click="onHold" color="primary" raised>Confirm</V-Button>
              </template>
            </V-Modal> -->
</template>

<style lang="scss"></style>
