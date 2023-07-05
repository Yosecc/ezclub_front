<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, reactive } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
// import { members, subscriptionsCreateStripe } from '/@src/models/Members.ts'

import { suscripciones, estados } from '/@src/models/Subscriptions'

pageTitle.value = 'Suscriptions'
useHead({
  title: 'List Suscriptions',
})

const route = useRoute()

const filters = ref('')

const paginationData = ref([])

const isLoading = ref(true)
const count = ref(0)

watch(
  () => route.query.page,
  () => {
    getSuscripcion()
  }
)

watch(
  () => filters.value,
  () => {
    // getSuscripcion('all', filters.value, 1, categoryB.value, false)
  }
)

const filtro = reactive({
  filter: '',
  // value: '',
  page: 1,
  // category: null,
  reload: true,
  estado: 'All',
  fecha_pago: null,
  payment_type: '',
  is_recurrence: '',
})

const getSuscripcion = async () => {
  // filterDate.value = filter
  isLoading.value = true
  await Api.get('v2/suscripcion', {
    params: filtro,
  })
    .then((response) => {
      // console.log('response', response.data.suscripciones)
      suscripciones.value = response.data.suscripciones
      paginationData.value = response.data.pagination
      count.value = response.data.count
      isLoading.value = false

      if (filtro.reload) {
        reloadForm()
      }
    })
    .catch((error) => {
      isLoading.value = false
      console.log(error)
    })
}
// const change = (val) => {
//   reloadForm()
//   defalA.value = val
//   getSuscripcion()
// }

onMounted(() => {
  getSuscripcion()
})

const filtersSearch = () => {
  getSuscripcion()
}

const reloadForm = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const changeStado = () => {
  getSuscripcion()
}
</script>

<template>
  <SidebarLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <div class="mb-5 columns is-multiline">
        <div class="is-2 column">
          <V-Field class="w-100">
            <V-Control class="input-select">
              <label for="fecha_pago">
                <p><small>Status</small></p>
              </label>
              <div class="select">
                <select v-model="filtro.estado" @change="changeStado">
                  <option
                    v-for="(item, key) in estados"
                    :key="`estados-${key}`"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </V-Control>
          </V-Field>
        </div>
        <div class="is-2 column">
          <V-Field class="w-100">
            <V-Control class="input-select">
              <label for="fecha_pago">
                <p><small>Payment Type</small></p>
              </label>
              <div class="select">
                <select v-model="filtro.payment_type" @change="changeStado">
                  <option
                    v-for="(item, key) in [
                      { value: '', name: 'Payment Type' },
                      { value: 3, name: 'Debit Card' },
                      { value: 1, name: 'Cash' },
                    ]"
                    :key="`payment_type-${key}`"
                    :value="item.value"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
            </V-Control>
          </V-Field>
        </div>
        <div class="is-2 column">
          <V-Field class="w-100">
            <V-Control class="input-select">
              <label for="fecha_pago">
                <p><small>Payment Date</small></p>
              </label>
              <input
                type="date"
                @change="changeStado"
                id="fecha_pago"
                class="input custom-text-filter"
                v-model="filtro.fecha_pago"
              />
            </V-Control>
          </V-Field>
        </div>
        <V-Field class="is-4 column">
          <label for="">
            <p><small>Email/Name</small></p>
          </label>
          <V-Control icon="feather:search">
            <input
              v-model="filtro.filter"
              class="input custom-text-filter"
              placeholder="Search..."
              @keyup.enter="changeStado"
            />
          </V-Control>
        </V-Field>
        <div class="is-2 column">
          <V-Button
            :to="{ name: 'subscriptions-create' }"
            color="primary"
            icon="fas fa-plus"
            elevated
            class="w-100"
          >
            Add Subscription
          </V-Button>
        </div>
      </div>

      <div class="columns is-multiline" v-if="isLoading">
        <div class="mb-2 column is-4" v-for="i in 12" :key="i">
          <VPlaceload height="120px" />
        </div>
      </div>

      <div v-else>
        <div class="columns is-multiline mb-5 justify-content-between">
          <div class="is-2 column">
            <V-Field class="w-100">
              <V-Control class="input-select">
                <label for="">
                  <p><small>Recurrence</small></p>
                </label>
                <div class="select">
                  <select v-model="filtro.is_recurrence" @change="changeStado">
                    <option
                      v-for="(item, key) in [
                        { value: '', name: 'Select' },
                        { value: 1, name: 'Recurrence' },
                        { value: 0, name: 'No recurrence' },
                      ]"
                      :key="`payment_type-${key}`"
                      :value="item.value"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </V-Control>
            </V-Field>
          </div>
          <div class="is-2 column">
            <p>Subscriptions: {{ count }}</p>
          </div>
        </div>

        <!-- <div class="w-100 d-flex justify-content-end mb-4">
          <membersOptionDropdown />
        </div> -->
        <subscription-list
          :suscripciones="suscripciones"
          :pagination-data="paginationData"
          :filters="filters"
          @onSearch="changeStado"
          :isselectedmultiple="true"
        />
      </div>
    </div>
  </SidebarLayout>
</template>
