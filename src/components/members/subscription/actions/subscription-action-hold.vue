<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'
import { holdSuscripcion } from '/@src/models/Subscriptions'
import moment from 'moment'
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

const hold_date_start = ref(
  moment(props.suscripcion.hold_date_start).format('YYYY-MM-DD')
)
const hold_date_end = ref(
  moment(props.suscripcion.hold_date_end).format('YYYY-MM-DD')
)

const onHold = () => {
  // modal.value = true
  holdSuscripcion(props.suscripcion.id, {
    hold_date_start: hold_date_start.value,
    hold_date_end: hold_date_end.value,
  })
    .then((response) => {
      modal.value = false
      notyf.success('success')
      emit('reload')
    })
    .catch((error) => {
      modal.value = false
    })
}

const isHold = computed(() => {
  return props.suscripcion.isHold
})
onMounted(() => {})
</script>

<template>
  <VLoader size="small" class="h-100" :active="isLoaderActive">
    <VCard
      color="warning"
      :outlined="props.suscripcion.hold_date_end != null ? false : true"
      @click="!isHold ? (modal = true) : onHold()"
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
      <label for="hold_date_start"><p>Hold date start</p></label>
      <input type="date" v-model="hold_date_start" class="input mt-2 mb-4" />
      <label for="hold_date_end"><p>Hold date end</p></label>
      <input type="date" v-model="hold_date_end" class="input mt-2 mb-4" />
    </template>
    <template #action>
      <V-Button @click="onHold" color="primary" raised>Confirm</V-Button>
    </template>
  </V-Modal>
</template>

<style lang="scss"></style>
