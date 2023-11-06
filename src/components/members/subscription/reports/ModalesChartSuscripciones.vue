<script setup lang="ts">
import {
  onMounted,
  watch,
  ref,
  computed,
  reactive,
  defineProps,
  defineEmit,
} from 'vue'
import moment from 'moment'

import { Api } from '/@src/services'

const props = defineProps({
  gruposelect: {
    type: Array,
    default: [],
  },
  statusmodalgrupo: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  isdata: {
    type: Boolean,
    default: false,
  },
})
const centeredActionsOpen = ref(false)
const emit = defineEmit(['closemodal'])

watch(
  () => props.statusmodalgrupo,
  (to) => {
    if (!props.isdata) {
      centeredActionsOpen.value = to
    } else {
      onGetSubscription(props.gruposelect.data, props.title)
    }
  }
)

watch(
  () => centeredActionsOpen.value,
  (to) => {
    if (to == false) {
      emit('closemodal', false)
    }
  }
)
const modalStatus = ref(false)
watch(
  () => modalStatus.value,
  (to) => {
    if (to == false) {
      emit('closemodal', false)
    }
  }
)

// const grupoSelect: any = ref(null)
const isLoadingSuscripcionesData: any = ref(true)
const suscripcionesData = ref([])

const titleGrupo = ref('')

// const onGroupSelect = (grupo: any) => {
//   centeredActionsOpen.value = true
//   grupoSelect.value = grupo
// }

const onGetSubscription = async (data: object, key: string) => {
  //   console.log(typeof data, data)
  titleGrupo.value = key
  isLoadingSuscripcionesData.value = true
  modalStatus.value = true
  centeredActionsOpen.value = false

  await Api.post('v2/suscripcion/getIn', { data })
    .then((response: any) => {
      console.log('ressponse', response.data)
      suscripcionesData.value = response.data.suscripciones
      isLoadingSuscripcionesData.value = false
    })
    .catch((error: any) => {
      isLoadingSuscripcionesData.value = false
      console.log(error)
    })
}
</script>

<template>
  <div>
    <VModal
      :open="centeredActionsOpen"
      actions="center"
      @close="centeredActionsOpen = false"
      :title="`Group: ${props.title}`"
    >
      <template #content>
        <p class="title is-6">
          Select the subscription group you want to view.
        </p>
        <div class="columns is-multiline">
          <!-- <p>{{ grupoSelect }}</p> -->
          <div
            class="column is-6"
            v-for="(item, key) in props.gruposelect"
            :key="`card-${key}`"
          >
            <VCard
              @click="onGetSubscription(item.data, key)"
              class="btn-card d-flex justify-content-between"
            >
              <p class="title is-5 m-0">{{ key }}</p>
              <p class="title is-5 m-0">{{ item.count }}</p>
            </VCard>
          </div>
        </div>
      </template>
      <template #action>
        <!-- <VButton color="primary" raised>Confirm</VButton> -->
      </template>
    </VModal>
    <VModal
      :open="modalStatus"
      actions="center"
      size="big"
      @close="modalStatus = false"
      :title="`Group: ${props.title} / ${titleGrupo} (${suscripcionesData.length})`"
    >
      <template #content>
        <VLoader
          style="min-height: 300px"
          size="large"
          :active="isLoadingSuscripcionesData"
        >
          <subscription-list
            v-if="suscripcionesData.length"
            :colgrid="'is-4'"
            :suscripciones="suscripcionesData"
            :filter-local="true"
          />
        </VLoader>
      </template>
      <template #action>
        <!-- <VButton color="primary" raised>Confirm</VButton> -->
      </template>
    </VModal>
  </div>
</template>
