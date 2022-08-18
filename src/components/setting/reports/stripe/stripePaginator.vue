<script setup lang="ts">
import { defineProps, defineEmit, ref, watch } from 'vue'

const current_page = ref(null)

const previus_page = ref(null)
const next_page = ref(null)
const previus_page_history = ref([])
const first_render_with_data = ref(false)

const emit = defineEmit({
  changePage(payload) {
    return payload
  },
})

const props = defineProps({
  reports: {
    type: Object,
  },
})

watch(
  () => props.reports,
  () => {
    if (!first_render_with_data.value) {
      previus_page_history.value.push({
        index: props.reports.next_page,
        value: current_page.value,
      })

      first_render_with_data.value = true
    }

    if (first_render_with_data.value) {
      previus_page_history.value.push({
        index: next_page.value,
        value: current_page.value,
      })
    }

    console.log(previus_page_history.value)
  }
)

watch(
  () => props.reports,
  () => {
    if (props.reports && props.reports.transactions.length > 0) {
      const filtered = previus_page_history.value.filter((item: Object) => {
        return item.index == current_page.value
      })

      previus_page.value = filtered.length > 0 ? filtered[0].value : null

      next_page.value = props.reports.next_page
    }
  }
)

const changePage = (action: string) => {
  const change = {
    page: action === 'next' ? next_page.value : previus_page.value,
  }
  current_page.value = change.page

  emit('changePage', change)
}
</script>

<template>
  <V-Button :disabled="!previus_page" @click="changePage('prev')"
    >Previus</V-Button
  >
  <V-Button :disabled="!reports.has_more" @click="changePage('next')"
    >Next</V-Button
  >
</template>
