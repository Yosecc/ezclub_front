<script setup lang="ts">
import { onMounted, watch, ref, computed } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'
import { moneda } from '/@src/models/Mixin.ts'
import { order } from '/@src/models/Store.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
import moment from 'moment'
onMounted(async () => {
  let id = route.query.order

  await Api.get(`orders/${id}`)
    .then((response) => {
      order.value = response.data
    })
    .catch((error) => {
      notyf.error(error.response.data)
    })
})

const recibo = computed(() => {
  if (order.value) {
    let arr = []
    order.value.products.forEach((product) => {
      arr.push({
        name: product.product.name,
        precio: product.products_amount,
        cantidad: product.count,
      })
    })

    let obj = {
      company_name: order.value.company.company_name,
      logo: `${API_WEB_URL}storage/${order.value.company.logo}`,
      monto: order.value.total,
      fecha: moment(order.value.created_at).format('MM-DD-YYYY'),
      numero: `REP-000${order.value.id}`,
      factura: `INV-000${order.value.id}`,
      products: arr,
    }

    return obj
  }
  return {}
})

watch(
  () => recibo.value,
  () => {
    setTimeout(() => {
      window.print()
    }, '1000')
  }
)

const subtotal = computed(() => {
  let total = 0
  recibo.value.products.forEach((product) => {
    total += product.precio * product.cantidad
  })
  return total
})

const tax = computed(() => {
  return (subtotal.value / 100) * 7
})

const print = () => {
  window.print()
}
</script>

<template>
  <div class="p-0" v-if="order">
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
            <td style="text-align: right">Cash</td>
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
            <td style="text-align: right">{{ moneda(subtotal) }}</td>
          </tr>
          <tr>
            <td>Sales Tax - Florida (7%)</td>
            <td></td>
            <td style="text-align: right">{{ moneda(tax) }}</td>
          </tr>
          <tr>
            <td><b>Total</b></td>
            <td></td>
            <td style="text-align: right">{{ moneda(subtotal + tax) }}</td>
          </tr>
          <tr>
            <td><b>Amount Paid</b></td>
            <td></td>
            <td style="text-align: right">{{ moneda(subtotal + tax) }}</td>
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
