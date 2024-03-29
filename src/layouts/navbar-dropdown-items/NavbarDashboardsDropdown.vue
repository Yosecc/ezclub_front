<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const dropdownElement = ref()
const selectedCategory = ref('')
const route = useRoute()

watch([() => route.fullPath, dropdownElement], () => {
  if (dropdownElement.value) {
    dropdownElement.value.close?.()
  }
})
</script>

<template>
  <V-Dropdown ref="dropdownElement" class="has-mega-dropdown" modern spaced>
    <template #button="{ toggle }">
      <div
        class="dropdown-trigger is-trigger"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <V-Button
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          icon-caret="feather:chevron-down"
          @click="toggle"
          rounded
        >
          Dashboards
        </V-Button>
      </div>
    </template>

    <template #content>
      <div
        class="category-selector"
        :class="[selectedCategory !== '' && 'is-hidden']"
      >
        <div class="title-wrap">
          <h4>Select a category</h4>
        </div>
        <div class="category-selector-inner">
          <div class="category-item" @click="selectedCategory = 'base'">
            <i aria-hidden="true" class="lnil lnil-layout"></i>
            <span>Dashboards</span>
          </div>
          <div class="category-item" @click="selectedCategory = 'extras'">
            <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
            <span>Templates</span>
          </div>

          <img
            class="placeholder-image light-image"
            src="/@src/assets/illustrations/components/plugins.svg"
            alt=""
          />
          <img
            class="placeholder-image dark-image"
            src="/@src/assets/illustrations/components/plugins-dark.svg"
            alt=""
          />
        </div>
      </div>

      <div
        class="content-wrap"
        :class="[selectedCategory === '' && 'is-hidden']"
      >
        <button
          class="button is-circle back-button"
          @click="selectedCategory = ''"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:arrow-left"
            ></i>
          </span>
        </button>

        <div
          id="dashboards-base-menu"
          :class="[selectedCategory === 'base' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>All Dashboards</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'navbar-dashboards' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Personal V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-personal-2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pie-chart"></i>
                  </div>
                  <div class="meta">
                    <span>Personal V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-personal-3' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-stats-up"></i>
                  </div>
                  <div class="meta">
                    <span>Personal V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-influencer' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cardiology"></i>
                  </div>
                  <div class="meta">
                    <span>Influencer</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-hobbies' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-apartment"></i>
                  </div>
                  <div class="meta">
                    <span>Hobbies</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-health' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-hospital-alt-3"></i>
                  </div>
                  <div class="meta">
                    <span>Health</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-writer' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-books"></i>
                  </div>
                  <div class="meta">
                    <span>Writer</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-video' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-video-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Video</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify is-vhidden"
                  data-icon="feather:circle"
                ></i>
                <span class="is-vhidden">All Dashboards</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-analytics' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Analytics</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-stocks' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-stats-up"></i>
                  </div>
                  <div class="meta">
                    <span>Stocks</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-sales' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-credit-card"></i>
                  </div>
                  <div class="meta">
                    <span>Sales</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-banking-1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bank"></i>
                  </div>
                  <div class="meta">
                    <span>Banking V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-banking-2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bank"></i>
                  </div>
                  <div class="meta">
                    <span>Banking V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-banking-3' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bank"></i>
                  </div>
                  <div class="meta">
                    <span>Banking V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-flights' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Flights Booking</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-company' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-apartment"></i>
                  </div>
                  <div class="meta">
                    <span>Company Board</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-human-ressources' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                  </div>
                  <div class="meta">
                    <span>HR Board</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-course' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-graduate"></i>
                  </div>
                  <div class="meta">
                    <span>Course Board</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-info">
                <i
                  aria-hidden="true"
                  class="iconify is-vhidden"
                  data-icon="feather:circle"
                ></i>
                <span class="is-vhidden">All Dashboards</span>
              </h4>

              <div class="column-content" data-simplebar>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-ecommerce-1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-cart"></i>
                  </div>
                  <div class="meta">
                    <span>Ecommerce V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-food-delivery' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pizza"></i>
                  </div>
                  <div class="meta">
                    <span>Food delivery</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-maps-1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-map"></i>
                  </div>
                  <div class="meta">
                    <span>Maps V1</span>
                    <V-Tag
                      label="v1.2"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-maps-2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-map"></i>
                  </div>
                  <div class="meta">
                    <span>Maps V2</span>
                    <V-Tag
                      label="v1.2"
                      color="primary"
                      outlined
                      curved
                      class="ml-3"
                    />
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'inbox' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-envelope"></i>
                  </div>
                  <div class="meta">
                    <span>Inbox</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'messaging-v1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bubble"></i>
                  </div>
                  <div class="meta">
                    <span>Messaging V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'messaging-v2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bubble"></i>
                  </div>
                  <div class="meta">
                    <span>Messaging V2</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div
          id="dashboards-extras-menu"
          :class="[selectedCategory === 'extras' && 'is-active']"
          class="columns is-gapless mega-menus"
        >
          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-purple">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Navigation</span>
              </h4>

              <div class="column-content" data-simplebar="">
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Regular Sidebar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Curved Sidebar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-3' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Colored Sidebar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-4' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Curved Colored</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-5' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Labels Sidebar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-6' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Labels Hover</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'sidebar-blank-page-7' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout"></i>
                  </div>
                  <div class="meta">
                    <span>Float Sidebar</span>
                  </div>
                </RouterLink>
                <hr class="dropdown-divider" />
                <RouterLink
                  :to="{ name: 'navbar-blank-page-1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Regular Navbar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Fading Navbar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-3' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Colored Navbar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-4' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Drop Navbar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-5' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Colored Drop</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-6' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Clean Navbar</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-7' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Clean Center</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-blank-page-8' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Clean Fade</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-secondary">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Widgets</span>
              </h4>

              <div class="column-content" data-simplebar="">
                <RouterLink
                  :to="{ name: 'navbar-dashboards-charts-apex' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
                  </div>
                  <div class="meta">
                    <span>Apex Charts</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-charts-billboardsjs' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-bar-chart"></i>
                  </div>
                  <div class="meta">
                    <span>Billboard JS</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-widgets-sample-ui' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-select"></i>
                  </div>
                  <div class="meta">
                    <span>UI Widgets</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-widgets-sample-creative' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-layers-alt-1"></i>
                  </div>
                  <div class="meta">
                    <span>Fancy Widgets</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-widgets-sample-list' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-select"></i>
                  </div>
                  <div class="meta">
                    <span>List Widgets</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-dashboards-widgets-sample-stats' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-select"></i>
                  </div>
                  <div class="meta">
                    <span>Stat Widgets</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>

          <!--Column-->
          <div class="column is-4">
            <div class="dropdown-item-group">
              <h4 class="column-heading is-success">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <span>Forms</span>
              </h4>

              <div class="column-content">
                <RouterLink
                  :to="{ name: 'wizard-v1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-timer"></i>
                  </div>
                  <div class="meta">
                    <span>Wizard V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-layouts-form-layouts-1' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-licencse"></i>
                  </div>
                  <div class="meta">
                    <span>Layout V1</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-layouts-form-layouts-2' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-licencse"></i>
                  </div>
                  <div class="meta">
                    <span>Layout V2</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-layouts-form-layouts-3' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-licencse"></i>
                  </div>
                  <div class="meta">
                    <span>Layout V3</span>
                  </div>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'navbar-layouts-form-layouts-4' }"
                  class="dropdown-item is-media"
                >
                  <div class="icon">
                    <i aria-hidden="true" class="lnil lnil-licencse"></i>
                  </div>
                  <div class="meta">
                    <span>Layout V4</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </V-Dropdown>
</template>
