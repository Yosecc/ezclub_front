<script setup lang="ts">
import { onMounted, watch, ref, computed, defineProps, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api, API_WEB_URL } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'

const props = defineProps(['modelValue'])
const emit = defineEmit(['update:modelValue'])

onMounted(() => {
  value.value = ''
  members.value = []
  showMembers.value = false
  memberSelect.value = null
})
const value = ref('')
const members = ref([])
const showMembers = ref(false)
const memberSelect = ref(null)
const loadingMemberSelected = ref(false)
const searchMember = async () => {
  members.value = []
  memberSelect.value = null
  emit('update:modelValue', null)

  const response = await Api.get(`search_member?value=${value.value}`)
  showMembers.value = true
  members.value = response.data
}

const selectMember = (member) => {
  showMembers.value = false
  loadingMemberSelected.value = true
  const response = getMemberPaymentMethods(member.id)
    .then((response) => {
      memberSelect.value = member
      memberSelect.value.cards = response.data
      loadingMemberSelected.value = false
      emit('update:modelValue', memberSelect.value)
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
</script>

<template>
  <VCard class="my-5">
    <p class="title is-6">Search Member</p>
    <input
      v-focus
      v-model="value"
      type="text"
      class="input custom-text-filter"
      placeholder="Search"
      @keyup="searchMember"
    />
    <div
      class="mt-4 box-table-scroll"
      v-if="showMembers"
      style="overflow-y: scroll; height: 200px"
    >
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
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

    <div class="d-flex align-items-center mt-5" v-if="memberSelect">
      <VAvatar
        :picture="`${API_WEB_URL}storage/${memberSelect.photo}`"
        size="large"
      />
      <div class="ml-4">
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
</style>
