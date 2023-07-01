<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { reactive, ref } from 'vue'

const country = ref('')
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Form Layouts 3'
useHead({
  title: 'Form Layouts 3 - Sidebar - Vuero',
})
const datosregistropublico = reactive({
  firstname: '',
  lastname: '',
  email: '',
  street: '',
  postalcode: '',
  city: '',
  state: '',
  country: '',
  phone: '',
})
const registropublico = () => {
  for (var campo in datosregistropublico) {
    if (datosregistropublico[campo] == '') {
      document.getElementById(campo)?.classList.add('campoempty')
    }
  }
}
</script>

<template>
  <div class="page-content-inner">
    <form class="form-layout is-separate" @submit.prevent="registropublico">
      <div class="form-outer">
        <div class="form-body">
          <div class="form-section">
            <div class="form-section-inner has-padding-bottom">
              <div>Logo</div>
              <h3 class="has-text-centered">Personal Information</h3>
              <div class="columns is-multiline">
                <div class="column is-6">
                  <V-Field>
                    <label>First Name</label>
                    <V-Control icon="feather:user">
                      <input
                        type="text"
                        id="firstname"
                        class="input"
                        v-model="datosregistropublico.firstname"
                        placeholder=""
                        autocomplete="given-name"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-6">
                  <V-Field>
                    <label>Last Name</label>
                    <V-Control icon="feather:user">
                      <input
                        type="text"
                        id="lastname"
                        class="input"
                        v-model="datosregistropublico.lastname"
                        placeholder=""
                        autocomplete="family-name"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>Email Address</label>
                    <V-Control icon="feather:mail">
                      <input
                        type="email"
                        id="email"
                        class="input"
                        v-model="datosregistropublico.email"
                        placeholder=""
                        autocomplete="email"
                        inputmode="email"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>Street</label>
                    <V-Control icon="feather:map-pin">
                      <input
                        type="text"
                        id="street"
                        class="input"
                        v-model="datosregistropublico.street"
                        placeholder=""
                        autocomplete="street-address"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>Postal Code</label>
                    <V-Control icon="feather:map-pin">
                      <input
                        type="text"
                        id="postalcode"
                        class="input"
                        v-model="datosregistropublico.postalcode"
                        placeholder=""
                        autocomplete="street-address"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-6">
                  <V-Field>
                    <label>City</label>
                    <V-Control icon="feather:map-pin">
                      <input
                        type="text"
                        id="city"
                        class="input"
                        v-model="datosregistropublico.city"
                        placeholder=""
                        autocomplete="address-level2"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>State</label>
                    <V-Control icon="feather:map-pin">
                      <input
                        type="text"
                        id="state"
                        class="input"
                        v-model="datosregistropublico.state"
                        placeholder=""
                        autocomplete="street-address"
                      />
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-6">
                  <V-Field class="is-image-select">
                    <label>Country</label>
                    <V-Control>
                      <Multiselect
                        v-model="datosregistropublico.country"
                        placeholder="Select a country"
                        id="country"
                        autocomplete="country"
                        label="name"
                        :options="[
                          {
                            value: 'english',
                            name: 'English',
                            icon: '/images/icons/flags/united-states-of-america.svg',
                          },
                          {
                            value: 'french',
                            name: 'French',
                            icon: '/images/icons/flags/france.svg',
                          },
                          {
                            value: 'german',
                            name: 'German',
                            icon: '/images/icons/flags/germany.svg',
                          },
                          {
                            value: 'spanish',
                            name: 'Spanish',
                            icon: '/images/icons/flags/spain.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img
                              class="select-label-icon"
                              :src="value.icon"
                              alt=""
                            />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img
                            class="select-option-icon"
                            :src="option.icon"
                            alt=""
                          />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </V-Control>
                  </V-Field>
                </div>
                <div class="column is-12">
                  <V-Field>
                    <label>Phone</label>
                    <V-Control icon="feather:phone">
                      <input
                        type="tel"
                        id="phone"
                        class="input"
                        v-model="datosregistropublico.phone"
                        placeholder=""
                        autocomplete="tel"
                        inputmode="tel"
                      />
                    </V-Control>
                  </V-Field>
                  <div class="button-wrap,">
                    <V-Button
                      style="justify-content: center"
                      color="primary"
                      bold
                      type="submit"
                      raised
                      fullwidth
                    >
                      SIGN UP
                    </V-Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss">
@import '../../scss/abstracts/_variables.scss';
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_forms.scss';
.campoempty {
  border-color: red !important;
  .multiselect-input {
    border-color: red !important;
  }
}
</style>
