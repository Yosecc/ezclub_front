<script setup lang="ts">
import { defineEmit, defineProps, onMounted } from 'vue'
import { filterInputsMembershipsReport } from '/@src/models/Reports'
import { perpareDataInputs, setInputValuesData } from '/@src/models/Mixin'
import { getDiciplines } from '/@src/models/Diciplines'

const props = defineProps({
  loading: {
    type: Boolean,
  },
})

onMounted(async () => {
  const data = await getDiciplines()

  setInputValuesData(filterInputsMembershipsReport, 'dicipline_id', data)
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
  const data = perpareDataInputs(filterInputsMembershipsReport.value)
  emit('download', data)
}

const handleSearch = () => {
  const data = perpareDataInputs(filterInputsMembershipsReport.value)
  emit('search', data)
}
</script>

<template>
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" @click="handleDownload" :loading="props.loading"
      >Download Excel</V-Button
    >
  </div>
  <inputsLayaut :inputs-step="filterInputsMembershipsReport" />
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" :loading="props.loading" @click="handleSearch">
      Search Memberships
    </V-Button>
  </div>
</template>
