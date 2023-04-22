<script setup lang="ts">
import { ref, defineProps, onMounted, computed, nextTick, watch } from 'vue'
import { moneda, monedaDecimal } from '/@src/models/Mixin'
import moment from 'moment'

const props = defineProps({
  subscriptions: {
    type: Array,
    default: [],
  },
})

onMounted(() => {})

const invoices = ref(null)
const keySelected = ref(null)
const viewInvoices = ({ data, key }) => {
  invoices.value = data

  if (key == keySelected.value) {
    keySelected.value = null
    return
  }
  keySelected.value = key

  setTimeout(() => {
    var element = document.getElementById(`subs-${key}`)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 100)
}

watch(
  () => props.subscriptions,
  (to) => {
    invoices.value = null
    keySelected.value = null
  }
)
</script>

<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)">
        <th colspan="6" class="text-center" scope="col">
          <p class="text-center title is-6"><b>SUBSCRIPTIONS</b></p>
        </th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th scope="col">Info</th>
        <th scope="col">Next payment date.</th>
        <th scope="col">Discount.</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">View Invoices</th>
      </tr>
    </thead>

    <tbody :key="`subs-${key}`" v-for="(item, key) in subscriptions">
      <tr :id="`subs-${key}`" :class="key == keySelected ? 'bg-info' : ''">
        <td class="p-4">
          <p>
            <small>{{ item.data.id }}</small>
          </p>
          <p>
            <small>{{ item.data.customer }}</small>
          </p>
          <p v-if="item.data.upComing">
            {{ item.data.upComing.customer_email }}
          </p>
        </td>
        <td v-if="item.data.upComing" class="p-4">
          {{ item.data.upComing.next_payment_attempt }}
        </td>
        <td class="p-4">
          <p v-if="item.data.discount">
            {{ item.data.discount.coupon.name
            }}<small> - {{ item.data.discount.coupon.percent_off }} %</small>
          </p>
        </td>
        <td v-if="item.data.upComing" class="p-4">
          {{ moneda(item.data.upComing.total / 100) }}
        </td>
        <td class="p-4">
          {{ item.data.status }}
        </td>
        <td>
          <VButton
            :color="key == keySelected ? undefined : 'info'"
            outlined
            @click="
              viewInvoices({
                data: item.data.invoicess,
                key: key,
              })
            "
          >
            <i v-if="key == keySelected" class="fa fa-solid fa-eye-slash"></i>
            <i v-else class="fa fa-solid fa-eye"></i>
          </VButton>
        </td>
      </tr>
      <tr v-if="key == keySelected">
        <td colspan="6">
          <VCard v-if="invoices">
            <table class="table is-hoverable is-fullwidth">
              <thead>
                <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)">
                  <th colspan="4" class="text-center" scope="col">
                    <p class="text-center title is-6"><b>INVOICES</b></p>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PAID</th>
                  <th scope="col">status</th>
                  <th scope="col">Amount</th>
                  <!-- <th scope="col">View Payments</th> -->
                </tr>
              </thead>

              <tbody
                style="border: 1px solid rgba(255, 255, 255, 0.2)"
                class="mb-4"
                :key="`invoide-${key_}`"
                v-for="(item_, key_) in invoices"
              >
                <tr>
                  <!-- <td>
                    <p>{{ item_ }}</p>
                  </td> -->

                  <td>
                    <p>{{ item_.id }}</p>
                  </td>

                  <td>
                    <p>{{ item_.paid }}</p>
                  </td>
                  <td>
                    <p>{{ item_.status }}</p>
                  </td>
                  <td>
                    <p>{{ moneda(item_.total / 100) }}</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <VCard v-if="item_.lines">
                      <!-- <p>{{ item_.payment_intent_data }}</p> -->
                      <table class="table is-hoverable is-fullwidth">
                        <thead>
                          <tr
                            style="
                              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                            "
                          >
                            <th colspan="4" class="text-center" scope="col">
                              <p class="text-center title is-6"><b>ITEMS</b></p>
                            </th>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th scope="col">description</th>
                            <th scope="col">amount</th>
                          </tr>
                        </thead>

                        <tbody
                          :key="`lines-${l}`"
                          v-for="(line, l) in item_.lines"
                        >
                          <tr>
                            <td>
                              <p>
                                {{ line.description }}
                              </p>
                            </td>
                            <td>
                              <p>{{ moneda(line.amount / 100) }}</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </VCard>
                  </td>
                </tr>
                <tr>
                  <td colspan="4">
                    <VCard v-if="item_.payment_intent_data != null">
                      <!-- <p>{{ item_.payment_intent_data }}</p> -->
                      <table class="table is-hoverable is-fullwidth">
                        <thead>
                          <tr
                            style="
                              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                            "
                          >
                            <th colspan="6" class="text-center" scope="col">
                              <p class="text-center title is-6">
                                <b>PAYMENTS</b>
                              </p>
                            </th>
                          </tr>
                        </thead>
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">date</th>
                            <th scope="col">description</th>
                            <th scope="col">status</th>
                            <th scope="col">last payment error</th>
                            <th scope="col">amount</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>
                              <p>{{ item_.payment_intent_data.id }}</p>
                            </td>
                            <td>
                              <p>
                                {{
                                  moment(
                                    item_.payment_intent_data.created,
                                    'YYYY-MM-DD'
                                  ).format('MM-DD-YYYY')
                                }}
                              </p>
                            </td>
                            <td>
                              <p>{{ item_.payment_intent_data.description }}</p>
                            </td>
                            <td>
                              <p>{{ item_.payment_intent_data.status }}</p>
                            </td>
                            <td>
                              <p
                                v-if="
                                  item_.payment_intent_data.last_payment_error
                                "
                              >
                                {{
                                  item_.payment_intent_data.last_payment_error
                                    .message
                                }}
                              </p>
                            </td>
                            <td>
                              <p>
                                {{
                                  moneda(item_.payment_intent_data.amount / 100)
                                }}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </VCard>
                  </td>
                </tr>
              </tbody>
            </table>
          </VCard>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
