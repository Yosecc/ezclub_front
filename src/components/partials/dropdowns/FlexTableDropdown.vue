<script setup lang="ts">
import { computed, defineProps } from 'vue'

import { useRoute, useRouter } from 'vue-router' 

const router = useRouter()

const editMember = () => {
  router.push({ name: 'members-edit', query: { member: props.idMember }  })
}
// import { inputsStepData } from '/@src/components/members/MembersData'

const props = defineProps({
  idMember:{
    type: Number
  }
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
      <a @click.prevent="editMember" role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>View/Edit</span>
          <span>View user details</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Projects</span>
          <span>View user projects</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-calendar"></i>
        </div>
        <div class="meta">
          <span>Schedule</span>
          <span>Schedule a meeting</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove from list</span>
        </div>
      </a>
    </template>
  </V-Dropdown>
</template>
