<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, reactive } from 'vue'
import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import {
  getMeberships,
  solicitud,
  inputsMembership,
  getDiscounts,
  getPresupuesto,
  presupuesto,
  suscripcion,
  createSuscripcion,
} from '/@src/models/Subscriptions'
import { cities, states, contries, getAllConfig } from '/@src/services/config'
import {
  moneda,
  getInput,
  setInputValuesData,
  perpareDataInputs,
  cleanUpModelInputs,
  notyf,
  setInputModelData,
} from '/@src/models/Mixin'
import {
  inputsInformation,
  categoriesMembers,
  parentInsputs,
} from '/@src/models/Members'
pageTitle.value = 'Subscriptions'
useHead({
  title: 'Subscriptions',
})

//DATA
const route = useRoute()
const router = useRouter()

const memberships = ref([])
const recurring = ref(true)
const aprobado = ref(false)
const colorCard = ref(undefined)
const member = ref(null)
const dato = ref(null)
const tiempo = reactive({
  number: 5,
  status: false,
  time: 5000,
})

//COMPUTED
const precios = computed(() => {
  const data = memberships.value.find((e) => e.id == solicitud.memberships_id)
  return data?.amounts.filter(
    (e) => e.is_recurrence == recurring.value && e.recurrencia != null
  )
})

const datosSolicitud = computed(() => {
  for (var i in solicitud) {
    if (getInput(inputsMembership.value, i) != undefined) {
      solicitud[i] = getInput(inputsMembership.value, i).model
    }
  }
  return solicitud
})

//WATCHS
watch(
  () => solicitud.memberships_id,
  (memberships_id) => {
    solicitud.recurrences_id = null
    presupuesto.value = null
    aprobado.value = false
  }
)

//MOUNTED
onMounted(() => {
  limpiarTodo()
  getMeberships().then((response) => {
    memberships.value = response.data
  })
  getDiscounts(1, 'membership').then((response) => {
    setInputValuesData(inputsMembership, 'discount', response.data.discounts)
  })
  getInput(inputsMembership, 'payment_type_id').model = 3

  getAllConfig().then((response) => {
    setInputValuesData(inputsInformation, 'city_id', cities.value)
    setInputValuesData(inputsInformation, 'state_id', states.value)
    setInputValuesData(inputsInformation, 'country_id', contries.value)
    getInput(inputsInformation.value, 'country_id').model = 34
  })
})

//METHODS

const aprobarPresupuesto = () => {
  aprobado.value = true
  setTimeout(() => {
    window.scrollTo(0, window.scrollY + 500)
  }, 300)
}

const initSuscripcion = () => {
  presupuesto.value = null
  aprobado.value = false
  isLoaderActive.value = true
  getPresupuesto(datosSolicitud.value)
    .then((response) => {
      presupuesto.value = response.data
      setTimeout(() => {
        window.scrollTo(
          0,
          document.body.scrollHeight || document.documentElement.scrollHeight
        )
        isLoaderActive.value = false
      }, 300)
    })
    .catch((error) => {
      isLoaderActive.value = false
      colorCard.value = 'info'
      setTimeout(() => {
        colorCard.value = undefined
      }, 500)
      // console.log('por aqui', error)
      // const data = error.response.data
      // for (var i in data) {
      //   if (typeof data[i] == 'object') {
      //     if (typeof data[i] == 'object') {
      //       for (var o in data[i]) {
      //         notyf.error(data[i][o])
      //       }
      //     }
      //   }
      // }
    })
}

const isLoaderActive = ref(false)

/** Deprecado use proccessSuscripcion */
const proccessMember = async () => {
  suscripcion.member = perpareDataInputs(inputsInformation.value)
  suscripcion.member.guardian = perpareDataInputs(parentInsputs.value)

  let objeto = {
    ...solicitud,
    ...suscripcion,
  }
  // objeto.member.category = categoriesMembers.value.model

  console.log(objeto)

  const fd = new FormData()

  for (var i in objeto) {
    if (typeof objeto[i] == 'object') {
      for (var e in objeto[i]) {
        fd.append(i + `[${e}]`, objeto[i][e])
      }
    } else {
      fd.append(i, objeto[i])
    }
  }
  isLoaderActive.value = true
  const response = await createSuscripcion(fd)
    .then((response) => {
      console.log(response.data.suscripcion.member.id)
      notyf.success(
        'Subscription Processed… you will be redirected to the profile where you can process the payment and activate the subscription'
      )
      tiempo.number = 5
      tiempo.status = true
      let interval = setInterval(() => {
        if (tiempo.number > 0) {
          tiempo.number--
        }
        if (tiempo.number == 0) {
          clearInterval(interval)
          tiempo.status = false
          router.push({
            name: 'members-profile',
            query: {
              id: response.data.suscripcion.member.id,
            },
            hash: '#susbcriptionIndex',
          })
          isLoaderActive.value = false
        }
      }, tiempo.time)
    })
    .catch((error) => {
      const data = error.response.data
      isLoaderActive.value = false
      for (var i in data) {
        if (typeof data[i] == 'object') {
          // console.log('++++++++++++', i, typeof data[i], data[i])
          if (typeof data[i] == 'object') {
            for (var o in data[i]) {
              // console.log(']]]]]]]', o, data[i][o])
              notyf.error(data[i][o])
            }
          }
          // data[i].forEach((e: any) => {
          //   console.log(e, typeof e)
          //   // notyf.error(`${i}: ${e}`)
          // })
        }
      }
    })
}

/** PROCESAR SUSCRIPCION V2.2 */

const proccessSuscripcion = async (data: any) => {
  if (!dato.value) {
    notyf.error('Email is required')
    return
  }
  isLoaderActive.value = true
  solicitud.email = dato.value
  solicitud.subscription_payment_type_id = getInput(
    inputsMembership,
    'payment_type_id'
  ).model
  Object.assign(solicitud, data)
  console.log('solicitud', solicitud)

  await createSuscripcion(solicitud)
    .then((response) => {
      window.location.href = response.data.url
      // isLoaderActive.value = false
    })
    .catch((error) => {
      notyf.error('Error')
      isLoaderActive.value = false
    })
}

const scrollHeight = () => {
  return document.body.scrollHeight || document.documentElement.scrollHeight
}

const selectMember = () => {
  setTimeout(() => {
    console.log('member', member)
    if (member.value) {
      if (member.value && member.value.user) {
        cardCargada.value = true
      }

      for (var i in member.value) {
        if (i != 'photo') {
          setInputModelData(inputsInformation, i, member.value[i])
        }
      }
    } else {
      setInputModelData(inputsInformation, 'email', dato.value)
    }

    let num = window.scrollY + window.scrollY / 4
    window.scrollTo(0, num)
  }, 300)
}

const limpiarTodo = async () => {
  cleanUpModelInputs(inputsMembership.value)
  cleanUpModelInputs(inputsInformation.value)
  presupuesto.value = null

  solicitud.memberships_id = null
  solicitud.recurrences_id = null
  solicitud.is_initiation_fee = false
  solicitud.is_card_price = false
  solicitud.discount = null
  solicitud.is_last_month = false
  solicitud.prorrateo = true
  solicitud.schedules = ''
  solicitud.leo_vet_fr = false
  solicitud.multigym = false
}

const paymentType = computed(() => {
  return getInput(inputsMembership, 'payment_type_id').model
})

// PROCESS MINOR

const isMinor = computed(() => {
  return !getInput(inputsInformation.value, 'category').model
})

const cardCargada = ref(false)

const validarTarjetaCargadaSiEsCash = computed(() => {
  if (paymentType.value == 3 && cardCargada.value) {
    return true
  } else if (paymentType.value == 1) {
    return true
  }

  return false
})

const onActionCard = (data = null) => {
  // console.log('sjs', data)
  if (data && data.payment_method_id) {
    cardCargada.value = true
  }
}
</script>

<template>
  <SidebarLayout>
    <div class="columns is-multiline">
      <div class="column is-9">
        <h1 class="title is-4">1. Select a membership</h1>
        <VCard :color="colorCard" class="mb-4">
          <VLoader size="large" :active="!memberships.length">
            <div class="columns is-multiline">
              <div
                v-for="(item, key) in memberships"
                :key="`membership-${key}`"
                class="column is-4 btn btn-card"
                @click="solicitud.memberships_id = item.id"
              >
                <VCard
                  :color="
                    solicitud.memberships_id == item.id ? 'primary' : undefined
                  "
                  class="h-100"
                >
                  <div>
                    <h1 class="title is-4">{{ item.name }}</h1>
                    <!-- <p>{{ item }}</p> -->
                  </div>
                </VCard>
              </div>
            </div>
          </VLoader>
        </VCard>
        <VCard class="">
          <inputsLayaut :inputs-step="inputsMembership" />
        </VCard>
      </div>
      <div class="column is-3">
        <VCard
          :color="colorCard"
          class="h-100 d-flex flex-column justify-content-between"
        >
          <div>
            <VCard class="px-3 py-3 my-3">
              <VField>
                <VControl>
                  <VSwitchBlock
                    v-model="recurring"
                    label="Recurring Subscription"
                    color="primary"
                  />
                </VControl>
              </VField>
            </VCard>
            <div
              v-for="(item, key) in precios"
              :key="`membership-precios-${key}`"
              class="btn btn-card"
              @click="solicitud.recurrences_id = item.id"
            >
              <VCard
                :color="
                  solicitud.recurrences_id == item.id ? 'primary' : undefined
                "
                class="mb-3 py-4"
              >
                <p>{{ item.recurrencia.descriptions }}</p>
                <p class="title is-5 text-left mt-2">
                  {{ moneda(item.amount) }}
                </p>
              </VCard>
            </div>
          </div>
          <div>
            <VLoader size="large" :active="isLoaderActive">
              <VButton
                @click="initSuscripcion"
                :color="!presupuesto ? 'primary' : undefined"
                class="d-flex justify-content-center mt-6 py-5 w-100"
                style="
                  text-align: center;
                  text-transform: uppercase;
                  font-size: 20px;
                  font-weight: 900;
                "
              >
                <span v-if="!presupuesto">start subscription</span>
                <span v-else> restart</span>
              </VButton>
            </VLoader>
          </div>
        </VCard>
      </div>

      <div class="column is-12" v-if="presupuesto">
        <h1 class="title is-4">2. Approve the budget</h1>
        <VCard>
          <Presupuesto :presupuesto="presupuesto"></Presupuesto>

          <VButton
            @click="aprobarPresupuesto"
            color="primary"
            class="d-flex justify-content-center py-5 px-6 ml-auto"
            style="
              text-align: center;
              text-transform: uppercase;
              font-size: 20px;
              font-weight: 900;
            "
            v-if="!aprobado"
            >Accept and continue
          </VButton>
        </VCard>
      </div>

      <div class="column is-12" v-if="presupuesto && aprobado">
        <h1 class="title is-4">
          3. Enter the member's email.
          <!-- 
          <br />
            <small style="font-size: 12px"
              >* Then select a match if possible...otherwise press ENTER</small
            >
          <br />
            <small style="font-size: 12px"
              >* If you want to register a minor, please enter the email of the
              family member to register</small
            > 
        --></h1>

        <VCard style="margin-bottom: 24px">
          <SearchBar
            dato="email"
            v-model:valor="dato"
            v-model="member"
            :not-payment-methods="false"
            :not-search="false"
            @onSubmit="selectMember"
          />
        </VCard>

        <VCard style="margin-bottom: 24px">
          <div class="columns is-multiline">
            <div class="column is-3">
              <VLoader size="small" class="h-100" :active="isLoaderActive">
                <VCard class="mb-4 h-100">
                  <div>
                    <p class="title is-6 mb-1"><b>Total</b></p>
                    <p class="title is-3 mb-0">
                      {{ moneda(presupuesto.total) }}
                    </p>
                  </div>
                </VCard>
              </VLoader>
            </div>

            <div class="is-3 column">
              <VLoader size="small" :active="isLoaderActive">
                <subscription-method-stripe-checkout
                  :total="presupuesto.total"
                  :email="dato"
                  :confirmar_email="true"
                  @onPayment="proccessSuscripcion"
                />
              </VLoader>
            </div>

            <!-- <div class="column is-2"> -->
            <!-- <VLoader size="small" class="h-100 mr-0" :active="isLoaderActive">
                <subscription-method-payment-debit-automatic
                  :total="20"
                  :card="false"
                  :user="{ email: dato, id: null }"
                  :new-user="true"
                  :text-card="'Cards'"
                  :outline="true"
                  @onPayment="onActionCard"
                >
                  <template #righttop>
                    <VTag
                      v-tooltip="
                        'This option does not generate any charge to the card'
                      "
                      color="solid"
                      label="?"
                    />
                  </template>
                </subscription-method-payment-debit-automatic>
              </VLoader> -->
            <!-- </div> -->

            <div class="column" :class="paymentType == 3 ? 'is-3' : 'is-3'">
              <VLoader size="small" :active="isLoaderActive">
                <subscription-method-payment-cash
                  :total="presupuesto.total"
                  :email="dato"
                  :confirmar_email="true"
                  @onPayment="proccessSuscripcion"
                  :define_status="validarTarjetaCargadaSiEsCash"
                >
                  <template #righttop>
                    <VTag
                      v-if="paymentType == 3 && !cardCargada"
                      v-tooltip="
                        'You must load a card to continue. If you do not have a card, define the paymentType option as cash '
                      "
                      color="solid"
                      label="?"
                    />
                  </template>

                  <template #modalprev>
                    <p class="title is-6">
                      You must load a card to continue. If you do not have a
                      card, define the paymentType option as cash
                    </p>
                    <VLoader
                      size="small"
                      class="h-100 mr-0"
                      :active="isLoaderActive"
                    >
                      <subscription-method-payment-debit-automatic
                        :total="20"
                        :card="false"
                        :user="{
                          email: dato,
                          id: member && member.user ? member.user.id : null,
                        }"
                        :new-user="member && member.user ? false : true"
                        :text-card="'Cards (+)'"
                        :outline="true"
                        @onPayment="onActionCard"
                      >
                        <template #righttop>
                          <VTag
                            v-tooltip="
                              'This option does not generate any charge to the card'
                            "
                            color="solid"
                            label="?"
                          />
                        </template>
                      </subscription-method-payment-debit-automatic>
                    </VLoader>
                  </template>
                </subscription-method-payment-cash>
              </VLoader>
            </div>

            <div class="column is-3">
              <VLoader size="small" :active="isLoaderActive">
                <subscription-method-payment-posnet
                  :total="presupuesto.total"
                  @onPayment="proccessSuscripcion"
                  :define_status="!(paymentType == 3 && !cardCargada)"
                  :email="dato"
                  :confirmar_email="true"
                >
                  <template #righttop>
                    <VTag
                      v-if="!cardCargada"
                      v-tooltip="
                        'You must load a card to continue. If you do not have a card, define the paymentType option as cash '
                      "
                      color="solid"
                      label="?"
                    />
                  </template>
                  <template #modalprev>
                    <p class="title is-6">
                      You must load a card to continue. If you do not have a
                      card, define the paymentType option as cash
                    </p>
                    <VLoader
                      size="small"
                      class="h-100 mr-0"
                      :active="isLoaderActive"
                    >
                      <subscription-method-payment-debit-automatic
                        :total="0"
                        :card="false"
                        :user="{
                          email: dato,
                          id: member && member.user ? member.user.id : null,
                        }"
                        :new-user="member && member.user ? false : true"
                        :text-card="'Cards (+)'"
                        :outline="true"
                        @onPayment="onActionCard"
                      >
                        <template #righttop>
                          <VTag
                            v-tooltip="
                              'This option does not generate any charge to the card'
                            "
                            color="solid"
                            label="?"
                          />
                        </template>
                      </subscription-method-payment-debit-automatic>
                    </VLoader>
                  </template>
                </subscription-method-payment-posnet>
              </VLoader>
            </div>
          </div>
        </VCard>

        <!-- <VLoader :active="isLoaderActive">
          <VButton
            @click="proccessSuscripcion"
            color="info"
            class="d-flex justify-content-center py-5 px-6 ml-auto"
            style="
              text-align: 'center';
              text-transform: uppercase;
              font-size: 20px;
              font-weight: 900;
            "
          >
            Process
          </VButton>
        </VLoader> -->

        <!-- <VCard v-if="dato">
          <inputsLayaut :inputs-step="inputsInformation" />
          <div v-if="isMinor">
            <VCard>
              <p class="title is-5">Guardian Information</p>
              <inputsLayaut :inputs-step="parentInsputs" />
            </VCard>
          </div>
          <div class="mt-3">
            <p v-if="tiempo.status">
              You will be redirected, please wait a moment ...
              {{ tiempo.number }}
            </p>
            <VLoader size="large" :active="isLoaderActive">
              <VButton
                @click="proccessMember"
                color="info"
                class="d-flex justify-content-center py-5 px-6 ml-auto"
                style="
                  text-align: center;
                  text-transform: uppercase;
                  font-size: 20px;
                  font-weight: 900;
                "
              >
                Continue
              </VButton>
            </VLoader>
          </div>
        </VCard> -->
      </div>
    </div>
  </SidebarLayout>
</template>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

.switch-button {
  .field {
    width: 100%;
    padding: 20px;
    background: #323236;
    border-color: #404046;
    border-radius: 10px;
    border: 1px solid #404046;
    transition: all 0.3s;
  }
}

.title {
  [class*='hint--'] {
    position: unset;
  }
}
</style>
