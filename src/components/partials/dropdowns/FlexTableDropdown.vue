<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { FRONTEND_URL } from '/@src/services/index.ts'
import moment from 'moment'
const router = useRouter()

const props = defineProps({
  idMember: {
    type: Number,
  },
  member: {
    type: Object,
  },
})

const diasPasados = computed(() => {
  if (props.member.membership_members != null && props.member) {
    let fechaPayment = moment(
      props.member.membership_members.payments[0].created_at
    )
    let hoy = moment()

    return moment.duration(hoy.diff(fechaPayment))._days
  }
  return ''
})
</script>

<template>
  <V-Dropdown
    icon="feather:more-vertical"
    class="is-pushed-mobile"
    spaced
    right
  >
    <template #content>
      <div v-if="member">
        <div
          class="text-center mb-4"
          v-if="
            member.membership_members != null &&
            member.membership_members.payments.length > 0 &&
            !member.membership_members.payments[0].status
          "
        >
          <V-Tag color="danger" label="PAYMENT" class="" />
          <p class="mt-3">Last payment attempt</p>
          <p v-if="diasPasados > 0">{{ diasPasados }} days past due</p>
          <p v-else>
            {{
              moment(
                props.member.membership_members.payments[0].created_at
              ).format('yy/mm/d hh:mm:ss')
            }}
          </p>
        </div>
      </div>

      <router-link
        :to="{
          name: 'members-profile',
          query: { id: idMember },
        }"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>View/Edit</span>
          <span>View member details</span>
        </div>
      </router-link>
      <router-link
        :to="{
          name: 'members-profile',
          query: { id: idMember },
          hash: '#memberCheckins',
        }"
        role="menuitem"
        class="dropdown-item is-media"
      >
        <div class="icon">
          <i class="lnir lnir-list-alt-1" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>Ckeck-in</span>
          <span>Ckeck-in details</span>
        </div>
      </router-link>

      <!-- <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Projects</span>
          <span>View user projects</span>
        </div>
      </a> -->

      <!--  <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-calendar"></i>
        </div>
        <div class="meta">
          <span>Schedule</span>
          <span>Schedule a meeting</span>
        </div>
      </a> -->

      <!-- <hr class="dropdown-divider" /> -->

      <!-- <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from list</span>
        </div>
      </a> -->
    </template>
  </V-Dropdown>
</template>
