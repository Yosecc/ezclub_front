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
  emit('onAction', { itemKey, i })
}
</script>

<template>
  <div
    v-for="(item, keysGrupo) in data"
    :key="`report-${keysGrupo}-${random}`"
    class="is-12 column"
  >
    <VCard class="">
      <div class="d-flex justify-content-between w-100 mb-4">
        <p class="title is-5 m-0" style="text-transform: uppercase">
          {{ keysGrupo }}
        </p>
        <p class="title is-5 m-0" style="text-transform: uppercase">
          {{ item.count }}
        </p>
      </div>
      <div class="d-flex">
        <div
          v-for="(i, itemKey) in item"
          :key="`list-button-${itemKey}-${random2}`"
        >
          <VButton
            v-if="itemKey != 'count'"
            class="mr-4"
            @click="onButton({ itemKey, i })"
          >
            <p class="title is-6 m-0">View {{ itemKey }}</p>
          </VButton>
        </div>
      </div>
    </VCard>
  </div>
</template>
