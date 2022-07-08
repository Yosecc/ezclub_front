<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { members, subscriptionsCreateStripe } from '/@src/models/Members.ts'
pageTitle.value = 'New Day Pass'
useHead({
  title: 'Day Pass',
})

const route = useRoute()

onMounted(() => {})
</script>

<template>
  <SidebarLayout>
    <div class="columns is-multiline">
      <div class="column is-8">
        <VCard>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            rerum possimus eos fugiat quibusdam provident eaque, natus quis
            officia deleniti? Inventore nihil, accusamus exercitationem at,
            atque doloremque eaque et quam!s
          </p>
        </VCard>
      </div>
    </div>
  </SidebarLayout>
</template>
