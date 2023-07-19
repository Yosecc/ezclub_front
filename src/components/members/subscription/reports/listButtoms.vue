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
// import { moneda } from '/@src/models/Mixin'
import { estados } from '/@src/models/Subscriptions'

const emit = defineEmit(['onAction'])

const props = defineProps({
  data: {
    // type: Object|Array,
    default: [],
  },
})

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}

const random = ref(getRandomArbitrary(100, 50000))
const random2 = ref(getRandomArbitrary(100, 30000))
const onButton = ({ itemKey, i }) => {
  // console.log({ itemKey, i })
  emit('onAction', { itemKey, i })
}

const viewSuscripciones = ({ itemKey, i }) => {
  emit('onAction', { itemKey, i })
}
</script>

<template>
  <div v-for="(item, keysGrupo) in data" :key="`report-${keysGrupo}-${random}`">
    <div class="is-12 column" v-if="keysGrupo != 'count'">
      <VCard class="">
        <div class="d-flex justify-content-between w-100 mb-4">
          <VButton
            v-if="keysGrupo == 'data'"
            @click="viewSuscripciones({ itemKey: keysGrupo, i: item })"
            class="m-0"
          >
            <p class="title is-6 m-0 d-flex justify-content-between w-100">
              View Subscriptions {{ item.length }}
              <i class="ml-4 fa fa-eye"></i>
            </p>
          </VButton>

          <p v-else class="title is-5 m-0" style="text-transform: uppercase">
            {{ keysGrupo }}
          </p>

          <p
            class="title is-5 m-0"
            v-if="item.count"
            style="text-transform: uppercase"
          >
            {{ item.count }}
          </p>
        </div>

        <div v-if="keysGrupo != 'data'" class="d-flex flex-wrap">
          <div
            v-for="(i, itemKey) in item"
            :key="`list-button-${itemKey}-${random2}`"
          >
            <VButton
              v-if="itemKey != 'count'"
              class="mr-4 mb-4"
              @click="onButton({ itemKey, i })"
            >
              <p class="title is-6 m-0 d-flex justify-content-between w-100">
                <span v-if="keysGrupo == 'status'">
                  {{ estados.find((e) => e.value == itemKey).name }}</span
                >
                <span v-else> {{ itemKey }}</span>
                <span class="ml-4"> {{ i.count ? i.count : '' }}</span>
              </p>
            </VButton>
          </div>
        </div>
      </VCard>
    </div>
  </div>
</template>
