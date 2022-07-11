<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['close'])
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <!-- <ProjectsQuickDropdown /> -->

      <h3 class="no-mb">Members</h3>
      <div class="panel-close" @click="emit('close')">
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li v-has-nested-router-link class="has-children">
          <RouterLink :to="{ name: 'members' }" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-list-alt mr-2"></i>
            <span>Members List</span>
          </RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <RouterLink :to="{ name: 'members-create' }" class="is-submenu">
            <i aria-hidden="true" class="fas fa-user mr-2"></i>

            <span>New Members</span>
          </RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <RouterLink :to="{ name: 'members-day_pass' }" class="is-submenu">
            <i aria-hidden="true" class="fas fa-user mr-2"></i>
            <span>New Day Pass</span>
          </RouterLink>
        </li>
        <li v-has-nested-router-link class="has-children">
          <RouterLink :to="{ name: 'members-create' }" class="is-submenu">
            <i aria-hidden="true" class="fas fa-user mr-2"></i>

            <span>Temporary Member</span>
          </RouterLink>
        </li>
        <!-- sub dropdown -->
        <!-- <li v-has-nested-router-link class="has-children">
          <div class="collapse-wrap">
            <a class="parent-link">
              Lists
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:chevron-right"
              />
            </a>
          </div>
          <ul>
            <li>
              <RouterLink :to="{ name: 'sidebar-layouts' }" class="is-submenu">
                <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                <span>List View V1</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-list-view-2' }"
                class="is-submenu"
              >
                <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                <span>List View V2</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-list-view-3' }"
                class="is-submenu"
              >
                <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                <span>List View V3</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'sidebar-layouts-list-view-4' }"
                class="is-submenu"
              >
                <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                <span>List View V4</span>
              </RouterLink>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/layout/_sidebar-panel.scss';
</style>
