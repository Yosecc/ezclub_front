<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'

import { Api } from '/@src/services'
import { notyf, setInputValuesData, getInput } from '/@src/models/Mixin.ts'

pageTitle.value = 'Charts'
import { API_WEB_URL } from '/@src/services/index.ts'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
useHead({
  title: 'Store',
})
</script>

<template>
  <SidebarLayout container="px-5">
    <p>JKHGKHJGHJK</p>
  </SidebarLayout>
</template>
