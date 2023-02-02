<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api, API_WEB_URL } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'

const props = defineProps({
  modelValue: {
    //#modelo
    default: null,
  },
  dato: {
    //#
    type: String,
    default: 'name',
  },
  valor: {
    //#
    default: null,
  },
  placeHolder: {
    default: 'Search',
  },
  isHead: {
    type: Boolean,
    default: false,
  },
  notPaymentMethods: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmit(['update:modelValue', 'update:valor', 'onSubmit'])

watch(props.valor, () => {
  console.log('cambia')
  value.value = props.valor
})

onMounted(() => {
  if (props.valor) {
    value.value = props.valor
  } else {
    value.value = ''
  }

  members.value = []
  showMembers.value = false
  memberSelect.value = null
})

const value = ref('')
const members = ref([])
const showMembers = ref(false)
const memberSelect = ref(null)
const loadingMemberSelected = ref(false)

const searchMember = async (event) => {
  // console.log('event', event)
  if (event != undefined && event.code == 'Enter') {
    let member = onSubmitEvent()
    return
  }

  members.value = []
  memberSelect.value = null
  emit('update:modelValue', null)

  if (value.value.length) {
    const response = await Api.get(`search_member?value=${value.value}`)
    showMembers.value = true
    members.value = response.data
  }
}

const selectMember = (member) => {
  showMembers.value = false
  loadingMemberSelected.value = true

  if (props.notPaymentMethods) {
    memberSelect.value = member
    loadingMemberSelected.value = false
    value.value = memberSelect.value[props.dato]
    emit('update:modelValue', memberSelect.value)
    emit('update:valor', value.value)
    emit('onSubmit')
    return
  }

  const response = getMemberPaymentMethods(member.id)
    .then((response) => {
      memberSelect.value = member
      memberSelect.value.cards = response.data
      loadingMemberSelected.value = false

      if (props.dato == 'name') {
        value.value =
          memberSelect.value.name + ' ' + memberSelect.value.last_name
      } else {
        value.value = memberSelect.value[props.dato]
      }
      emit('update:modelValue', memberSelect.value)
      emit('update:valor', value.value)
    })
    .catch((error) => {
      loadingMemberSelected.value = false
      notyf.error(error.response.data)
    })
}

const getMemberPaymentMethods = async (id) => {
  const response = await Api.get(`orders/get_payment_methods/${id}`)
  return response
}
const onSubmitEvent = () => {
  showMembers.value = false
  let index = members.value.findIndex((e) => e.email == value.value)
  if (index != -1) {
    notyf.error('Please select the guardian from the list')
    emit('onSubmit', false)
    searchMember()
  } else {
    emit('onSubmit', value)
  }
}
</script>

<template>
  <VCard
    class="
      d-flex
      justify-content-center
      align-items-center
      flex-column
      position-relative
    "
  >
    <!-- <p class="title is-6">Search Member</p> -->
    <input
      v-focus
      v-model="value"
      type="text"
      class="input custom-text-filter"
      :placeholder="placeHolder"
      @keyup="searchMember"
      @change="$emit('update:valor', value)"
    />
    <div
      class="mt-4 box-table-scroll w-100"
      v-if="showMembers"
      style="overflow-y: scroll"
    >
      <table class="table is-hoverable is-fullwidth">
        <!--  <thead>
          <tr>
            <th scope="col" class="text-center">Photo</th>
            <th scope="col" class="text-">Name</th>
            <th scope="col" class="text-">Email</th>
          </tr>
        </thead> -->
        <tbody>
          <tr v-if="isHead">
            <td colspan="2">
              <p style="font-size: 10px">
                Select a guardian from the following list or press enter if it
                is not found
              </p>
            </td>
            <td
              @click="showMembers = false"
              colspan="1"
              style="text-align: right"
            >
              <p style="font-size: 10px">Close</p>
            </td>
          </tr>
          <tr
            @click="selectMember(member)"
            v-for="(member, key) in members"
            :key="`member-${key}`"
          >
            <td>
              <VAvatar
                :picture="`${API_WEB_URL}storage/${member.photo}`"
                size="medium"
              />
            </td>
            <td>
              {{ member.name }} {{ member.second_name }} {{ member.last_name }}
            </td>
            <td>{{ member.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex align-items-center mt-5 w-100" v-if="memberSelect">
      <VAvatar
        :picture="`${API_WEB_URL}storage/${memberSelect.photo}`"
        size="large"
      />
      <div class="ml-4 w-100">
        <table class="table is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <td><b>Name:</b></td>
              <td>
                {{ memberSelect.name }} {{ memberSelect.second_name }}
                {{ memberSelect.last_name }}
              </td>
            </tr>
            <tr>
              <td><b>Email:</b></td>
              <td>{{ memberSelect.email }}</td>
            </tr>
            <tr v-if="memberSelect.user">
              <td><b>Payment Method: </b></td>
              <td colspan="2" v-if="!memberSelect.user.stripe_id"></td>
              <td v-if="memberSelect.user.pm_type">
                {{ memberSelect.user.pm_type }} ****
                {{ memberSelect.user.pm_last_four }}
              </td>
              <td v-else>It does not have a default payment method</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <VPlaceload
      height="100px"
      width="100%"
      v-if="loadingMemberSelected"
      class="mt-4"
    />
  </VCard>
</template>

<style lang="scss">
.box-table-scroll {
  overflow-y: scroll;
  max-height: 300px;
  position: absolute;
  top: 60%;
  /* background: red; */
  z-index: 9;
  box-shadow: 2px 2px 11px rgb(0 0 0 / 80%);
  border-radius: 10px;

  &::-webkit-scrollbar {
    background: #2d2d31;
    width: 10px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(#2f3b62, 0.4);
    border-radius: 10px;
  }
}
.input.custom-text-filter {
  height: 50px !important;
}
.modal-card-body {
  overflow: visible !important;
}
table {
  tr {
    cursor: pointer;
  }
  th {
    font-size: 10px;
  }
}
</style>
