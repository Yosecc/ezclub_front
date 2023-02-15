<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { user, onLogout } from '/@src/pages/auth/auth.ts'
import {
  getCompany,
  company,
  setLocationSistem,
  locationSistem,
} from '/@src/models/Companies.ts'
import {
  notyf,
  setInputValuesData,
  getInput,
  getValueInput,
} from '/@src/models/Mixin.ts'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

onMounted(() => {
  getCompany().then((response) => {
    setInputValuesData(locations, 'locations_id', company.value.locations)
    if (cookies.get('locations_id') != null) {
      getInput(locations.value, 'locations_id').model =
        cookies.get('locations_id')
    }
  })
})

const locations = ref([
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'locations_id',
    placeholder: 'Location',
    model: '',
    values: [],
    class: 'is-12',
    change: function (inputsstep) {
      setLocationSistem(this.model)
      window.location.reload()
    },
  },
])
</script>

<template>
  <V-Dropdown right spaced class="user-dropdown profile-dropdown mb-5">
    <template #button="{ toggle }">
      <a
        class="is-trigger dropdown-trigger"
        style="display: block; background: transparent; text-align: center"
        aria-haspopup="true"
        @click="toggle"
      >
        <V-Avatar picture="https://picsum.photos/200/200" />
        <p v-if="getInput(locations, 'locations_id').values.length">
          {{ getValueInput(locations, 'locations_id').name }}
        </p>
      </a>
    </template>

    <template #content>
      <div class="dropdown-head" v-if="user">
        <V-Avatar picture="https://picsum.photos/200/200" />

        <div class="meta">
          <span>{{ user.name }}</span>
          <span v-if="getInput(locations, 'locations_id').values.length">{{
            getValueInput(locations, 'locations_id').name
          }}</span>
        </div>
      </div>

      <div role="menuitem" class="dropdown-item is-media w-100">
        <inputsLayaut class="w-100" :inputs-step="locations" />
      </div>

      <!--  <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-user-alt"></i>
        </div>
        <div class="meta">
          <span>Profile</span>
          <span>View your profile</span>
        </div>
      </a> -->

      <!-- <hr class="dropdown-divider" /> -->

      <!-- <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Projects</span>
          <span>All my projects</span>
        </div>
      </a> -->

      <!-- <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-users-alt"></i>
        </div>
        <div class="meta">
          <span>Team</span>
          <span>Manage your team</span>
        </div>
      </a> -->

      <!-- <hr class="dropdown-divider" /> -->

      <!-- <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Account settings</span>
        </div>
      </a> -->

      <hr class="dropdown-divider" />

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
