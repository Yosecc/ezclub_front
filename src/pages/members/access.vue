<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { getMemberAccess } from '/@src/models/Members.ts'
pageTitle.value = 'Access Members'
useHead({
  title: 'Access Members',
})

const route = useRoute()

const barcode = ref(424242424242)

onMounted(() => {})

const search = () => {
  getMemberAccess(barcode.value)
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="columns is-multiline">
        <div class="column is-5">
          <VCard class="h-100">
            <h3 class="title is-5 mb-6">
              Enter the member's barcode or QR code
            </h3>
            <VField>
              <VControl>
                <input
                  type="text"
                  v-model="barcode"
                  @change="search"
                  @keyup="search"
                  class="input mb-4"
                  placeholder="Username"
                />
                <VButton @click="search" color="success"> Search</VButton>
                <!-- <p class="help">Choose a nice username</p> -->
              </VControl>
            </VField>
          </VCard>
        </div>
        <div class="column is-7">
          <VCard color="" class="h-100" id="infoCliente">
            <div
              class="
                d-flex
                justify-content-center
                flex-column
                align-items-baseline
              "
            >
              <div class="d-flex align-items- justify-content-between mb-4">
                <div class="d-flex align-items-center">
                  <VAvatar
                    picture="https://picsum.photos/200/300"
                    size="big"
                    class="mr-4"
                  />
                  <div>
                    <h1 class="title is-4 mb-2">Nombre y apellido</h1>
                    <p class="title is-6 mb-2">#001</p>
                  </div>
                </div>
                <VTag color="success" label="Access OK" rounded elevated />
              </div>
              <div>
                <p><b>Membership:</b> GYM y 2 fjfhyu</p>
                <p><b>Location:</b> Location</p>
                <p><b>Trainer:</b> Trainer name</p>
              </div>
            </div>
          </VCard>
        </div>
      </div>
    </div>
  </SidebarLayout>
</template>
