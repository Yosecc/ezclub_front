<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api, API_WEB_URL } from '/@src/services'
import {
  company,
  getCompany,
  locations,
  setLocationSistem,
} from '/@src/models/Companies.ts'

const router = useRouter()

onMounted(() => {
  getCompany()
})

const selectLocation = (id) => {
  setLocationSistem(id)
  router.push({ name: 'index' })
}
</script>

<template>
  <MinimalLayout theme="light">
    <div
      class="w-100 justify-content-center d-flex align-items-center"
      style="height: 100vh"
    >
      <div class="container">
        <h1 class="is-4 title text-center">Welcome, select location</h1>

        <div class="d-flex justify-content-center columns is-multiline">
          <div
            v-for="(location, key) in locations"
            :key="`location-${key}`"
            class="column is-4 btn-card"
            @click="selectLocation(location.id)"
          >
            <VCardMedia
              :image="`${API_WEB_URL}storage/${location.image}`"
              :title="location.name"
              :subtitle="location.address"
            >
            </VCardMedia>
          </div>
        </div>
      </div>
    </div>
    <!--<p></p> -->
  </MinimalLayout>
</template>
