<script setup lang="ts">
import { defineEmit, defineProps, onMounted } from 'vue'
import { filterInsputsTrainerReport } from '/@src/models/Reports'
import { perpareDataInputs, setInputValuesData } from '/@src/models/Mixin'
import { getTrainers } from '/@src/models/Staffs'

const props = defineProps({
  loading: {
    type: Boolean,
  },
})

onMounted(async () => {
  const response = await getTrainers()

  setInputValuesData(filterInsputsTrainerReport, 'trainer_id', response.data)
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
  const data = perpareDataInputs(filterInsputsTrainerReport.value)
  emit('download', data)
}

const handleSearch = () => {
  const data = perpareDataInputs(filterInsputsTrainerReport.value)
  emit('search', data)
}
</script>

<template>
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" @click="handleDownload" :loading="props.loading"
      >Download Excel</V-Button
    >
  </div>
  <inputsLayaut :inputs-step="filterInsputsTrainerReport" />
  <div class="is-12 d-flex justify-content-end">
    <V-Button color="primary" :loading="props.loading" @click="handleSearch">
      Search Members
    </V-Button>
  </div>
</template>
