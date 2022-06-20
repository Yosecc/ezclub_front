<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'
import { filterInsputs } from '/@src/models/Reports.ts'
import { perpareDataInputs } from '/@src/models/Mixin.ts'

const props = defineProps({
  loading: {
    type: Boolean,
  },
})

const emit = defineEmit({
  search(payload) {
    return payload
  },
})

const handleDownload = () => {
  console.log('handleDownload')
}

const handleSearch = () => {
  const data = perpareDataInputs(filterInsputs.value)
  emit('search', data)
}
</script>

<template>
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" @click="handleDownload" :loading="props.loading"
      >Download Excel</V-Button
    >
  </div>
  <inputsLayaut :inputs-step="filterInsputs" />
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" :loading="props.loading" @click="handleSearch">
      Search
    </V-Button>
  </div>
</template>
