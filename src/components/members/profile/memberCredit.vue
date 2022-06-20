<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import {
  member,
  transactions,
  getTransactions,
  getBalance,
} from '/@src/models/Members.ts'
import moment from 'moment'

const state = reactive({
  open: false,
})

const credit = ref(0)

onMounted(async () => {
  refreshTransactions()
})

const refreshBalance = async () => {
  const { data } = await getBalance(member.value.id)
  credit.value = data.balance
}

const refreshTransactions = async () => {
  await getTransactions(member.value.id)
  refreshBalance()
}

const changeModalState = () => {
  state.open = !state.open
}

const closeModal = () => {
  state.open = false
}
</script>

<template>
  <VCardAdvanced v-if="member">
    <template #header-left>
      <div>
        <h1 class="title is-4 mb-0">Credit History</h1>
        <p>Edit member's credit history</p>
      </div>
    </template>
    <template #header-right>
      <VButton @click="changeModalState" color="primary">
        New Transaction
      </VButton>
    </template>

    <template #content>
      <memberFormTransaction
        :open-modal="state.open"
        @close-modal="closeModal"
        @refresh-transactions="refreshTransactions"
      />
      <p class="title">Credit: {{ credit }}$</p>
      <VCard class="p-">
        <div class="mt-4">
          <table class="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Description</th>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody v-if="transactions">
              <tr
                v-for="(transaction, key) in transactions.data"
                :key="`transaction-${key}`"
              >
                <td>{{ transaction.id }}</td>
                <td>{{ transaction.meta.description }}</td>
                <td>
                  {{ moment(transaction.created_at).format('MM/DD/YYYY') }}
                </td>
                <td>{{ transaction.type }}</td>
                <td>{{ transaction.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </VCard>
    </template>
  </VCardAdvanced>
</template>

<style lang="scss" scope></style>
