<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import sleep from '/@src/utils/sleep'
import useNotyf from '/@src/composable/useNotyf'
import { popovers } from '/@src/data/users/userPopovers'

const notyf = useNotyf()
const router = useRouter()

const isLoading = ref(false)

const accept = async () => {
  isLoading.value = true
  notyf.success('Invitation for Banking Solution Website accepted')

  await sleep()
  router.push({
    name: 'sidebar-dashboards-banking-1',
  })

  isLoading.value = false
}
</script>

<template>
  <div class="action-page-wrapper action-page-v1">
    <div class="wrapper-inner">
      <div class="action-box">
        <div class="box-content">
          <!-- <V-Avatar
            size="big"
            picture="/demo/avatars/16.jpg"
            badge="/demo/photos/apps/9.png"
          /> -->

          <h3 class="dark-inverted">
            Jason G. has invited you to the
            <span class="is-dark-primary">Banking Solution Website</span>
            project.
          </h3>

          <div class="sender-message is-dark-card-bordered is-dark-bg-4">
            <h4 class="dark-inverted">Message from Jason</h4>
            <p>
              Hey Erik, It would be really cool if you could give us a hand on
              this project. There are a lot of tasks popping out every day and I
              feel the team is getting a bit overwhelmed. We'd love to have you
              board.
            </p>
          </div>
          <div class="people-wrap">
            <div class="people">
              <tippy class="has-help-cursor" interactive placement="bottom">
                <!-- <V-Avatar size="small" picture="/demo/avatars/21.jpg" /> -->
                <template #content>
                  <UserPopoverContent :user="popovers.user21" />
                </template>
              </tippy>

              <tippy class="has-help-cursor" interactive placement="bottom">
                <V-Avatar size="small" color="h-purple" initials="SC" />
                <template #content>
                  <UserPopoverContent :user="popovers.user120" />
                </template>
              </tippy>

              <tippy class="has-help-cursor" interactive placement="bottom">
                <!-- <V-Avatar size="small" picture="/demo/avatars/39.jpg" /> -->
                <template #content>
                  <UserPopoverContent :user="popovers.user39" />
                </template>
              </tippy>
            </div>
            <div class="people-text">
              <p>And 5 others are already members of this project</p>
            </div>
          </div>
          <div class="buttons">
            <V-Button dark-outlined> Decline </V-Button>
            <V-Button
              color="primary"
              :loading="isLoading"
              raised
              @click="accept"
            >
              Accept
            </V-Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_variables.scss';
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_subpages.scss';
</style>
