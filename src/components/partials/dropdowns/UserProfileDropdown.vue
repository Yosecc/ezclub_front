<script setup lang="ts">

  import { user, onLogout } from '/@src/pages/auth/auth.ts'

</script>

<template>
  <V-Dropdown right spaced class="user-dropdown profile-dropdown">
    <template #button="{ toggle }">
      <a
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @click="toggle"
      >
        <V-Avatar picture="https://picsum.photos/200/200" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head" v-if="user">
        <V-Avatar picture="https://picsum.photos/200/200" />

        <div  class="meta">
          <span>{{ user.name }}</span>
          <!-- <span>Product Manager</span> -->
        </div>
      </div>

      <!-- <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-user-alt"></i>
        </div>
        <div class="meta">
          <span>Profile</span>
          <span>View your profile</span>
        </div>
      </a> -->

      <!-- <hr class="dropdown-divider" /> -->

<!--       <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Projects</span>
          <span>All my projects</span>
        </div>
      </a>
 -->
    <!--   <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
        </div>
        <div class="meta">
          <span>Team</span>
          <span>Manage your team</span>
        </div>
      </a>
 -->
      <!-- <hr class="dropdown-divider" /> -->

<!--       <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Account settings</span>
        </div>
      </a>
 -->
      <!-- <hr class="dropdown-divider" /> -->

      <div class="dropdown-item is-button">
        <V-Button
          class="logout-button"
          icon="feather:log-out"
          color="danger"
          role="menuitem"
          raised
          fullwidth
          @click="onLogout()"
        >
          Logout
        </V-Button>
      </div>
    </template>
  </V-Dropdown>
</template>
