<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import {
  getInventories,
  inventories,
  locationInventory,
} from '/@src/models/Inventory.ts'
import {
  inventoryStatus,
  activateOrders,
  getTaxes,
} from '/@src/models/Store.ts'
import { Api } from '/@src/services'
import { notyf, setInputValuesData, getInput } from '/@src/models/Mixin.ts'
import { getCompany, company, locationsSelect } from '/@src/models/Companies.ts'
import {
  products,
  getProducts,
  geCategories,
  categories,
} from '/@src/models/Products.ts'

pageTitle.value = 'Store'
import { API_WEB_URL } from '/@src/services/index.ts'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
useHead({
  title: 'Store',
})

const changeLocation = function (value) {
  if (typeof value == 'object') {
    value = this.model
  }
  locationInventory.value = value
  getInventories(value).then((response) => {
    if (inventories.value.length > 0) {
      if (inventories.value[0].status == 1) {
        inventoryStatus.value = true
      } else {
        inventoryStatus.value = false
      }
    }
  })
  getProducts(value, 'active')
  geCategories()
}

const route = useRoute()
const router = useRouter()
onMounted(() => {
  getTaxes()
  getCompany().then((response) => {
    setInputValuesData(locationsSelect, 'locations_id', company.value.locations)
    getInput(locationsSelect.value, 'locations_id').change = changeLocation
    if (cookies.get('locations_id') != null) {
      getInput(locationsSelect.value, 'locations_id').model =
        cookies.get('locations_id')
      changeLocation(cookies.get('locations_id'))
    }
  })
  if (route.query.payment_intent_client_secret != undefined) {
    if (route.query.redirect_status == 'succeeded') {
      activateOrders(route.query.payment_intent_client_secret).then(
        (response) => {
          notyf.success('Payment')
          router.replace({ query: {} })
        }
      )
    }
  }
})

import { posts } from '/@src/data/layouts/card-grid-v4'

const filters = ref('')

const filterCategorie = ref(null)

const filteredData = computed(() => {
  if (!filters.value) {
    return products.value
  } else {
    return products.value.filter((item) => {
      return (
        item.name.match(new RegExp(filters.value, 'i')) ||
        item.category.name.match(new RegExp(filters.value, 'i')) ||
        item.product_categories_id == filters.value ||
        item.vard_code == filters.value
        // item.vard_code.match(new RegExp(filters.value, 'i'))
      )
    })
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'All Posts',
  'Recent Posts',
  'Older Posts',
  'Popular Posts',
]
</script>

<template>
  <SidebarLayout>
    <!-- <p>{{ filters }}</p> -->
    <!-- Content Wrapper -->
    <inputsLayaut :inputs-step="locationsSelect" />
    <div
      v-if="!inventoryStatus"
      class="page-content-inner columns is-multiline"
    >
      <div class="column is-8">
        <div class="card-grid-toolbar">
          <div class="columns is-multiline w-100" v-if="categories">
            <VCard
              @click="filters = ''"
              class="
                column
                is-2
                d-flex
                flex-column
                align-items-center
                justify-content-center
                text-center
                cursor-pointer
              "
            >
              <p>View All</p>
            </VCard>
            <VCard
              @click="filters = i.id"
              v-for="(i, key) in categories"
              :key="`categorie-${key}`"
              class="
                column
                is-2
                d-flex
                flex-column
                align-items-center
                justify-content-center
                text-center
                cursor-pointer
              "
            >
              <VAvatar
                size="medium"
                :picture="`${API_WEB_URL}storage/${i.image}`"
              />
              <p>{{ i.name }}</p>
            </VCard>
          </div>

          <V-Control icon="feather:search">
            <input
              v-model="filters"
              class="input custom-text-filter"
              placeholder="Search..."
            />
          </V-Control>
        </div>

        <div class="card-grid card-grid-v4">
          <!--List Empty Search Placeholder -->
          <V-PlaceholderPage
            :class="[filteredData.length !== 0 && 'is-hidden']"
            title="We couldn't find any matching results."
            subtitle="Too bad. Looks like we couldn't find any matching results for the
              search terms you've entered. Please try different search terms or
              criteria."
            larger
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/search-4.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                alt=""
              />
            </template>
          </V-PlaceholderPage>

          <transition-group name="list" tag="div" class="columns is-multiline">
            <!--Grid item-->
            <div
              v-for="item in filteredData"
              :key="item.id"
              class="column is-3 d-flex"
            >
              <store-product-card :product="item" />
            </div>
          </transition-group>
        </div>
      </div>
      <div class="column is-4 card_counte">
        <store-cart />
      </div>
    </div>
    <div v-else>
      <VCard radius="large" color="danger">
        <h3 class="title is-5 mb-2">Sorry</h3>
        <p>Sale not available: an inventory is open</p>
      </VCard>
    </div>
  </SidebarLayout>
</template>

<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';

.card-grid {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v4 {
  .card-grid-item {
    @include vuero-s-card();

    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 16px;
    min-height: 300px;

    &:hover {
      box-shadow: $light-box-shadow;
    }

    > img {
      display: block;
      border-radius: 12px;
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .card-grid-item-content {
      padding: 12px 5px;

      h3 {
        font-family: $font-alt;
        font-size: 1rem;
        font-weight: 600;
        color: $dark-text;
        line-height: 1.3;
      }
    }

    .card-grid-item-footer {
      display: flex;
      align-items: center;
      margin-top: auto;
      padding: 0 5px 10px 5px;

      .meta {
        margin-left: 8px;
        line-height: 1.2;

        span {
          display: block;
          font-weight: 400;

          &:first-child {
            font-family: $font-alt;
            font-size: 0.9rem;
            color: $dark-text;
            font-weight: 600;
          }

          &:nth-child(2) {
            font-family: $font;
            font-size: 0.85rem;
            color: $light-text;
          }
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v4 {
    .card-grid-item {
      @include vuero-card--dark();
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .card-grid-v4 {
    .columns {
      display: flex;
    }

    .column {
      width: 33.3%;
      min-width: 33.3%;
    }
  }
}
.card_counte {
  & > div {
    position: sticky;
    top: 10px;
  }
}
</style>
