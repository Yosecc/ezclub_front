<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'
import { filterInsputsMembershipsCancelledReport } from '/@src/models/Reports'
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
  const data = perpareDataInputs(filterInsputsMembershipsCancelledReport.value)
  emit('download', data)
}

const handleSearch = () => {
  const data = perpareDataInputs(filterInsputsMembershipsCancelledReport.value)
  emit('search', data)
}
</script>

<template>
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" @click="handleDownload" :loading="props.loading"
      >Download Excel</V-Button
    >
  </div>
  <inputsLayaut :inputs-step="filterInsputsMembershipsCancelledReport" />
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" :loading="props.loading" @click="handleSearch">
      Search Members
    </V-Button>
  </div>
</template>
