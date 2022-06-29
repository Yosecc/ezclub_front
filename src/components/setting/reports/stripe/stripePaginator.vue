<script setup lang="ts">
import { defineProps, defineEmit, ref } from 'vue'

const current_page = ref(1)

const emit = defineEmit({
  changePage(payload) {
    return payload
  },
})

const props = defineProps({
  loading: {
    type: Boolean,
  },
  pagination: {
    type: Array,
  },
})

console.log(props.pagination)

const changePage = (page) => {
  current_page.value = page
  emit('changePage', page)
}
</script>

<template>
  <V-FlexPagination
    v-if="pagination.length != 0"
    :item-per-page="100"
    :total-items="pagination.length * 100"
    :current-page="current_page"
  />
</template>
