<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import {
  moneda,
  notyf,
  getInput,
  setInputValuesData,
} from '/@src/models/Mixin.ts'

import { processMultigym, getAmountMultigym } from '/@src/models/Subscriptions'

// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import swal from 'sweetalert'

const emit = defineEmit(['reload'])

const props = defineProps({
  suscripcion: {
    type: Object,
    required: true,
  },
})
const isProrrateo = ref(true)
const isLoaderActive = ref(false)

const onAction = (obj = null) => {
  isLoaderActive.value = true

  if (obj) {
    obj.isProrrateo = isProrrateo.value
  }

  processMultigym(props.suscripcion.id, obj)
    .then((response) => {
      isLoaderActive.value = false
      centeredActionsOpen.value = false
      notyf.success('Success')
      emit('reload')
      //   window.location.reload()
    })
    .catch((error) => {
      console.log(error)

      notyf.error('Error')
      isLoaderActive.value = false
      centeredActionsOpen.value = false
    })
}

const centeredActionsOpen = ref(false)

const closeModal = () => {
  centeredActionsOpen.value = false
}

const isMultigym = computed(() => {
  return props.suscripcion.memberships_members.multigym
})

const presupuesto = computed(() => {
  return props.suscripcion.presupuesto
})

const user = computed(() => {
  return props.suscripcion.user
})

const acobrar = ref(0)

const onClick = () => {
  if (!isMultigym.value) {
    // getAmountMultigym(props.suscripcion.id, {}).then((response) => {
    //   acobrar.value = response.data
    // })
    isProrrateo.value = true
    centeredActionsOpen.value = true
  } else {
    isProrrateo.value = false
    onAction()
  }
}
</script>

<template>
  <VLoader class="h-100" size="small" :active="isLoaderActive">
    <VCard
      color="success"
      outlined
      @click="onClick"
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
      <p>
        <b>Cards</b>
      </p>
    </VCard>

    <VModal
      :open="centeredActionsOpen"
      size="big"
      actions="center"
      @close="closeModal"
    >
      <template #content>
        <VCard style="margin-bottom: 24px">
          <VLoader size="small" :active="isLoaderActive">
            <subscription-method-payment-debit-automatic
              :total="acobrar"
              :user="user"
              @onPayment="onAction"
            />
          </VLoader>
        </VCard>
      </template>
      <template #action>
        <!-- <VButton color="primary" @click="onAction"> Confirm</VButton> -->
      </template>
    </VModal>
  </VLoader>
</template>

<style lang="scss"></style>
