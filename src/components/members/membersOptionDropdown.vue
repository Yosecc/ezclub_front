<script setup lang="ts">
import { computed, defineProps, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { FRONTEND_URL } from '/@src/services/index.ts'
import {
  membersSelected,
  subscriptionsCreateStripe,
  members,
} from '/@src/models/Members.ts'
import { notyf } from '/@src/models/Mixin.ts'

import moment from 'moment'
const router = useRouter()

const props = defineProps({})
const isLoaderActive = ref(false)
const isPusher = ref(false)

onMounted(() => {
  // console.log(import.meta.env)
})
watch(
  () => isPusher.value,
  (to) => {
    if (to) {
      var pusher = new Pusher(import.meta.env.VITE_KEY_PUSHER, {
        cluster: 'us2',
      })

      var channel = pusher.subscribe('process_subscription_channel')
      channel.bind('process_subscription_event', function (data) {
        let texto = `${data.message.member.id}: ${data.message.member.name} ${data.message.member.last_name} <br> ${data.message.message}`

        if (!data.message.status) {
          // console.log('data.message.member.id',data.message.member.id)
          // console.log('members',members.value.find((e)=>e.id == data.message.member.id))
          // members.value.find((e)=>e.id == data.message.member.id).isSolvente = false
          notyf.error(texto)
        } else {
          members.value.find((e) => e.id == data.message.member.id).isSolvente =
            true
          notyf.success(texto)
        }
      })
    }
  }
)

const proccessSubcritions = () => {
  if (membersSelected.value.length) {
    isPusher.value = true
    isLoaderActive.value = true
    subscriptionsCreateStripe()
      .then((response) => {
        notyf.success('Finalizado')
        // window.location.reload()
        isLoaderActive.value = false
      })
      .catch((error) => {
        isLoaderActive.value = false

        notyf.error(error.response.data)
      })
  }
}
</script>

<template>
  <V-Dropdown
    icon="feather:more-vertical"
    class="is-pushed-mobile"
    spaced
    right
  >
    <template #content>
      <VLoader size="small" :active="isLoaderActive">
        <a
          @click.prevent="proccessSubcritions"
          role="menuitem"
          class="dropdown-item is-media"
          :disabled="membersSelected.length == 0"
        >
          <div class="icon">
            <i class="lnir lnir-round-box-check" aria-hidden="true"></i>
          </div>
          <div class="meta">
            <span>Process Subscriptions</span>
            <span>Subscriptions automatic</span>
          </div>
        </a>
      </VLoader>
    </template>
  </V-Dropdown>
</template>
