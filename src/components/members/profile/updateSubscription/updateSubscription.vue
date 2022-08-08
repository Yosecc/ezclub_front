<script setup lang="ts">
// define props
import { defineProps, ref } from 'vue'

const props = defineProps({
  isLoaderActive: Boolean,
})

const openModal = ref(false)

const handleModal = () => {
  openModal.value = !openModal.value
}
</script>
<template>
  <div class="column is-2">
    <VLoader size="small" :active="isLoaderActive">
      <VCard
        :color="undefined"
        outlined
        @click="handleModal"
        class="mr-4 btn-card text-center px-2"
        style="font-size: 12px"
      >
        <p>
          <b>Upgrade Subscription</b>
        </p>
      </VCard>

      <updateSubscriptionModal :open="openModal" @closeModal="handleModal()" />
    </VLoader>
  </div>
</template>
