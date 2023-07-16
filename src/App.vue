<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { watchEffect, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const i18n = useI18n()
const defaultLocale = useStorage(
  'locale',
  (navigator && navigator.language) || 'en'
)

import { Api, PUBLIC_KEY_STRIPE } from '/@src/services'
import { user } from '/@src/pages/auth/auth'

onMounted(() => {
  console.log(cookies.get('locations_id'))
  if (cookies.get('locations_id')) {
    Api.defaults.headers.common['x-location'] = cookies.get('locations_id')
  }
})

watch(user, () => {
  if (user.value != null) {
    Api.defaults.headers.common['x-api-key'] = user.value.token

    // Api.defaults.headers.common['x-location'] = cookies.get('locations_id')
    // PUBLIC_KEY_STRIPE.value = user.value.key_stripe_public
  }
})

watchEffect(() => {
  if (user.value != null) {
    Api.defaults.headers.common['x-api-key'] = user.value.token

    // Api.defaults.headers.common['x-location'] = cookies.get('locations_id')
    // PUBLIC_KEY_STRIPE.value = user.value.key_stripe_public
  }
  defaultLocale.value = i18n.locale.value
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
