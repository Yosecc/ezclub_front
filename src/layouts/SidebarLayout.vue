<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, ref, watchEffect, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import { activePanel } from '/@src/state/activePanelState'
import { pageTitle } from '/@src/state/sidebarLayoutState'

import { PUBLIC_KEY_STRIPE } from '/@src/services/index.ts'

import { locationSistem } from '/@src/models/Companies.ts'

type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

const props = defineProps({
  theme: {
    type: String as PropType<SidebarTheme>,
    default: 'default',
  },
  defaultSidebar: {
    type: String,
    default: 'dashboard',
  },
  closeOnChange: {
    type: Boolean,
    default: false,
  },
  openOnMounted: {
    type: Boolean,
    default: false,
  },
  nowrap: {
    type: Boolean,
    default: false,
  },
  container: {
    type: String,
    default: 'page-content-wrapper',
  },
})

const route = useRoute()
const isMobileSidebarOpen = ref(false)
const isDesktopSidebarOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSidebar)

function switchSidebar(id: string) {
  if (id === activeMobileSubsidebar.value) {
    isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value
  } else {
    isDesktopSidebarOpen.value = true
    activeMobileSubsidebar.value = id
  }
}

/**
 * watchEffect callback will be executed each time dependent reactive values has changed
 */
watchEffect(
  () => {
    const isOpen = isDesktopSidebarOpen.value
    const wrappers = document.querySelectorAll('.view-wrapper')

    wrappers.forEach((wrapper) => {
      if (isOpen === false) {
        wrapper.classList.remove('is-pushed-full')
      } else if (!wrapper.classList.contains('is-pushed-full')) {
        wrapper.classList.add('is-pushed-full')
      }
    })
  },
  { flush: 'post' }
)
watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false

    if (props.closeOnChange && isDesktopSidebarOpen.value) {
      isDesktopSidebarOpen.value = false
    }
  }
)

const validaCredenciales = computed(() => {
  console.log('jiji', locationSistem.value)
  console.log('CREDENCIALES SIDEBAR', PUBLIC_KEY_STRIPE.value)
  // if (
  //   PUBLIC_KEY_STRIPE.value.includes('pk_live') &&
  //   (import.meta.env.VITE_MODE == 'development' ||
  //     import.meta.env.VITE_MODE == 'staging')
  // ) {
  //   return true
  // }
  return false
})
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <!-- <AnimatedLogo width="38px" height="38px" /> -->
          <img src="/@src/assets/iso_positive.svg" alt="" />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:activity"
            ></i>
          </a>
        </li>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
          @click="activeMobileSubsidebar = 'elements'"
        >
          <a>
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'components' && 'is-active']"
          @click="activeMobileSubsidebar = 'components'"
        >
          <a>
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </a>
        </li>
        <li>
          <RouterLink :to="{ name: 'messaging-v1' }">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a @click="activePanel = 'search'">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:search"
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:settings"
            ></i>
          </a>
        </li>
      </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <transition name="slide-x">
      <LayoutsMobileSubsidebar
        v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'layout'"
      />
      <DashboardsMobileSubsidebar
        v-else-if="
          isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'
        "
      />
      <ComponentsMobileSubsidebar
        v-else-if="
          isMobileSidebarOpen && activeMobileSubsidebar === 'components'
        "
      />
      <ElementsMobileSubsidebar
        v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'elements'"
      />
    </transition>

    <!-- Desktop navigation -->
    <!-- <CircularMenu /> -->

    <Sidebar :theme="props.theme" :is-open="isDesktopSidebarOpen">
      <template #links>
        <!-- Dashboards -->
        <li>
          <router-link
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            :to="{ name: 'index' }"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:home"
            ></i>
          </router-link>
        </li>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'members' && 'is-active']"
            @click="switchSidebar('members')"
            data-content="Members"
          >
            <i aria-hidden="true" class="fas fa-users fa-lg sidebar-svg"></i>
          </a>
        </li>
        <li>
          <RouterLink
            id="open-store"
            :to="{ name: 'store' }"
            data-content="store"
            title="Store"
          >
            <i
              aria-hidden="true"
              class="fa-lg fas fa-cash-register sidebar-svg"
            ></i>
          </RouterLink>
        </li>

        <!-- Layouts -->
        <!-- <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            @click="switchSidebar('layout')"
            data-content="Layouts"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:grid"
            ></i>
          </a>
        </li> -->

        <!-- Elements -->
        <!-- <li>
          <a
            :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
            @click="switchSidebar('elements')"
            data-content="Elements"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:box"
            ></i>
          </a>
        </li> -->

        <!-- Components -->
        <!-- <li>
          <a
            :class="[activeMobileSubsidebar === 'components' && 'is-active']"
            @click="switchSidebar('components')"
            data-content="Components"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:cpu"
            ></i>
          </a>
        </li> -->

        <!-- Messaging -->
        <!-- <li>
          <RouterLink
            id="open-messages"
            :to="{ name: 'messaging-v1' }"
            data-content="Messaging"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li> -->
      </template>

      <template #bottom-links>
        <!-- Switch Sidebar  Layouts -->
        <li>
          <!-- <LayoutSwitcher /> -->
        </li>

        <!-- Search -->
        <li class="right-panel-trigger">
          <!-- <a data-content="Search" @click="activePanel = 'search'">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-search"
            />
          </a> -->
          <!-- <a class="is-hidden is-inactive" @click="activePanel = 'none'">
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather-x"
            />
          </a> -->
        </li>

        <!-- Settings -->
        <li>
          <RouterLink
            id="open-settings"
            :to="{ name: 'settings' }"
            data-content="Settings"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:settings"
            ></i>
          </RouterLink>
        </li>

        <!-- Profile Dropdown -->
        <li>
          <UserProfileDropdown up />
        </li>
      </template>
    </Sidebar>

    <!-- MENU -->
    <transition name="slide-x">
      <ComponentsSubsidebar
        v-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'components'"
        @close="isDesktopSidebarOpen = false"
      />
      <ElementsSubsidebar
        v-else-if="
          isDesktopSidebarOpen && activeMobileSubsidebar === 'elements'
        "
        @close="isDesktopSidebarOpen = false"
      />
      <DashboardsSubsidebar
        v-else-if="
          isDesktopSidebarOpen && activeMobileSubsidebar === 'dashboard'
        "
        @close="isDesktopSidebarOpen = false"
      />
      <LayoutsSubsidebar
        v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'layout'"
        @close="isDesktopSidebarOpen = false"
      />
      <MembersSubsidebar
        v-else-if="isDesktopSidebarOpen && activeMobileSubsidebar === 'members'"
        @close="isDesktopSidebarOpen = false"
      />
    </transition>
    <!-- //// -->

    <LanguagesPanel />
    <ActivityPanel />
    <SearchPanel />
    <TaskPanel />

    <div class="view-wrapper">
      <div :class="props.container">
        <template v-if="props.nowrap">
          <slot></slot>
        </template>
        <div v-else class="page-content is-relative">
          <div v-if="validaCredenciales" class="w-100 bg-danger p-5">
            <h2 class="title is-5">
              Alert: You are on a development site using production credentials.
            </h2>
          </div>

          <div class="page-title has-text-centered">
            <div class="title-wrap">
              <h1 class="title is-4">{{ pageTitle }}</h1>
            </div>

            <!-- <Toolbar class="desktop-toolbar" /> -->
          </div>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
