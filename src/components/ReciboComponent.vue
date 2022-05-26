<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'
import { moneda } from '/@src/models/Mixin.ts'
import { order } from '/@src/models/Store.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
import moment from 'moment'

const props = defineProps({
  data: {
    type: Object,
    default: {
      logo: '',
      company_name: '',
      monto: 0,
      fecha: '',
      numero: '',
      factura: '',
      products: [
        {
          name: '',
          precio: 0,
          cantidad: 1,
        },
      ],
      tax: 0,
      subtotal: 0,
      type_amount: '',
      change_back: 0,
      cash_tender: 0,
      invoice_pdf: null,
      discount: {
        id: 0,
        name: '',
        type: '',
        value: 0,
      },
      disc: 0,
    },
  },
})

onMounted(async () => {
  // let id = route.query.order
  // await Api.get(`orders/${id}`)
  //   .then((response) => {
  //     order.value = response.data
  //   })
  //   .catch((error) => {
  //     notyf.error(error.response.data)
  //   })
})

const recibo = computed(() => {
  let recibo = props.data
  recibo.logo = `${API_WEB_URL.value}storage/${recibo.logo}`

  return recibo
})

const print = () => {
  window.print()
}
</script>

<template>
  <div class="p-0">
    <div class="d-flex align-items-center">
      <VAvatar :picture="recibo.logo" class="mr-3" size="small" />
      <p class="title is-6">{{ recibo.company_name }}</p>
    </div>
    <div class="mt-5 ml-4">
      <table>
        <tbody>
          <tr>
            <td>Receipt from {{ recibo.company_name }}</td>
          </tr>
          <tr>
            <td>
              <p class="title is-2">{{ moneda(recibo.monto) }}</p>
            </td>
          </tr>
          <tr>
            <td>Paid {{ recibo.fecha }}</td>
          </tr>
        </tbody>
      </table>
      <table class="mt-5">
        <tbody>
          <tr>
            <td>Receipt number</td>
            <td style="text-align: right">{{ recibo.numero }}</td>
          </tr>
          <tr>
            <td>Invoice number</td>
            <td style="text-align: right">{{ recibo.factura }}</td>
          </tr>
          <tr>
            <td>Payment method</td>
            <td style="text-align: right">{{ recibo.type_amount }}</td>
          </tr>
        </tbody>
      </table>
      <table class="mt-5 border">
        <tbody>
          <tr v-for="(product, key) in recibo.products" :key="`product-${key}`">
            <td>{{ product.name }}</td>
            <td style="text-align: right">Qty. {{ product.cantidad }}</td>
            <td style="text-align: right">
              {{ moneda(product.precio * product.cantidad) }}
            </td>
          </tr>
          <tr>
            <td><b>Subtotal</b></td>
            <td></td>
            <td style="text-align: right">{{ moneda(recibo.subtotal) }}</td>
          </tr>
          <tr v-if="recibo.discount">
            <td><b>Discount</b></td>
            <td>
              <span v-if="recibo.discount.type == 'percentaje'">
                {{ recibo.discount.name }} ({{ recibo.discount.value }}% off )
              </span>
              <span v-else
                >{{ recibo.discount.name }} ( - {{ recibo.discount.value }}$ )
              </span>
            </td>
            <td style="text-align: right">-{{ moneda(recibo.disc) }}</td>
          </tr>
          <tr>
            <td>Sales Tax - Florida (7%)</td>
            <td></td>
            <td style="text-align: right">{{ moneda(recibo.tax) }}</td>
          </tr>
          <tr>
            <td><b>Total</b></td>
            <td></td>
            <td style="text-align: right">{{ moneda(recibo.monto) }}</td>
          </tr>
          <tr>
            <td><b>Amount Paid</b></td>
            <td></td>
            <td style="text-align: right">{{ moneda(recibo.monto) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="print" class="justify-content-center d-flex w-100 mt-4">
      <VButton @click="print">Print</VButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table {
  width: 100% !important;
}
.border {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  td {
    padding: 5px;
  }
}
@media print {
  header,
  footer,
  aside,
  form {
    display: none;
  }
  body,
  html {
    margin: 0px;
    width: 300px;
  }
  #print {
    display: none;
  }
}
</style>
