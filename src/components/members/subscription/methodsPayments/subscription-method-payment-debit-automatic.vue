<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { notyf } from '/@src/models/Mixin'
// import { locationsSelect, terminales } from '/@src/models/Companies.ts'
// import { moneda, notyf, getInput } from '/@src/models/Mixin.ts'
import { syncCardsUser } from '/@src/models/v2/Members'

const emit = defineEmit(['onPayment'])

const openModal = ref(false)

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  card: {
    type: Boolean,
    default: false,
  },
  textCard: {
    type: String,
    default: 'Debit Automatic',
  },
  newUser: {
    type: Boolean,
    dafutl: false,
  },
  outline: {
    type: Boolean,
    dafutl: false,
  },
  // member_id: {
  //   type: Number,
  //   required: true,
  // },
})

const payment = () => {
  if (payment_method.value == null) {
    notyf.error('Select card')
    return
  }
  openModal.value = false
  emit('onPayment', {
    amount: props.total,
    payment_type_id: 3,
    payment_method_id: payment_method.value,
  })
}

const isLoaderSyncActive = ref(false)
const reload = ref(true)
const onSyncCards = () => {
  syncCardsUser(props.user.id).then((response) => {
    reload.value = false
    setTimeout(() => {
      reload.value = true
    }, 100)
  })
}

const makePayment = () => {}
const onMethodPayment = () => {}

const payment_method = ref(null)
</script>

<template>
  <VCard
    @click="openModal = true"
    color="success"
    class="mx-2 btn-card w-100 justify-content-center h-100"
    v-if="!props.card"
    :outlined="props.outline"
  >
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <p class="title is-3">
          <i class="fas fa-credit-card" aria-hidden="true"></i>
        </p>
        <p class="title is-5">
          {{ props.textCard }}
        </p>
      </div>
      <p v-if="true" class="title is-6">
        <slot name="righttop" />
        <!-- <i class="fas fa-check" aria-hidden="true"></i> -->
      </p>
    </div>
  </VCard>

  <VLoader v-else class="h-100" size="small" :active="isLoaderActive">
    <VCard
      color="success"
      outlined
      @click="openModal = true"
      class="
        mr-4
        btn-card
        text-center
        px-2
        h-100
        d-flex
        align-items-center
        justify-content-center
      "
      style="font-size: 14px"
    >
      <p><b>Cards</b></p>
      <slot />
    </VCard>
  </VLoader>

  <!--  -->
  <VModal
    :title="''"
    size="big"
    :open="openModal"
    actions="center"
    @close="openModal = false"
  >
    <template #content>
      <div v-if="!newUser" class="pb-3 mb-5">
        <VLoader size="large" :active="isLoaderSyncActive">
          <VButton
            color="undefined"
            @click="onSyncCards"
            class="d-flex justify-content-center"
            raised
          >
            Sync Cards
          </VButton>
        </VLoader>
      </div>

      <MemberCards
        :show-option="true"
        class="mb-6"
        v-model="payment_method"
        v-if="props.user && openModal && reload"
        :method_default="props.user.pm_last_four"
        :show-new-card="true"
        :user="props.user"
        :on-new-card-u-r-l="'v2/stripe/setup'"
        :add-card-stripe-u-r-l="'v2/stripe/addCard'"
        :v2="true"
        :actions="[]"
      >
      </MemberCards>
    </template>
    <template #action>
      <VButton
        color="success"
        @click="payment"
        :disabled="!payment_method"
        class="d-flex justify-content-center"
        raised
        >Confirm</VButton
      >
    </template>
  </VModal>
</template>

<style lang="scss"></style>
