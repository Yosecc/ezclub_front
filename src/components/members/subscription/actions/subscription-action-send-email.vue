<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'
import { cancelSuscripcion } from '/@src/models/Subscriptions'

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

const onAction = () => {
  isLoaderActive.value = true

  cancelSuscripcion(props.suscripcion.id, {})
    .then((response) => {
      isLoaderActive.value = false
      emit('reload')
      //   window.location.reload()
    })
    .catch((error) => {
      isLoaderActive.value = false
    })
}

onMounted(() => {})
</script>

<template>
  <VLoader class="h-100" size="small" :active="isLoaderActive">
    <VCard
      color="success"
      outlined
      @click="onAction"
      class="
        mr-4
        btn-card
        text-center
        px-2
        h-100
        d-flex
        align-items-center
        justify-content-center
      "
      style="font-size: 14px"
    >
      <p><b>Send Email: contract and waiver</b></p>
    </VCard>
  </VLoader>
</template>

<style lang="scss"></style>
