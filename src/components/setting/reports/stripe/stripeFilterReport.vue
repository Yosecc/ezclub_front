<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'
import { filterStripeInsputs } from '/@src/models/Reports'
import { perpareDataInputs } from '/@src/models/Mixin'

const props = defineProps({
  loading: {
    type: Boolean,
  },
})

const emit = defineEmit({
  search(payload) {
    return payload
  },
  download(payload) {
    return payload
  },
})

const handleDownload = () => {
  const data = perpareDataInputs(filterStripeInsputs.value)
  emit('download', data)
}

const handleSearch = () => {
  const data = perpareDataInputs(filterStripeInsputs.value)
  emit('search', data)
}
</script>

<template>
  <inputsLayaut :inputs-step="filterStripeInsputs" />
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" :loading="props.loading" @click="handleSearch">
      Search Transactions
    </V-Button>
  </div>
</template>
