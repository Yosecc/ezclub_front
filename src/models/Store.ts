import { ref, computed, reactive } from 'vue'
import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'

export const cart = ref([])

export const inventoryStatus = ref(false)

export const addProduct = (product: any) => {
  const index = cart.value.findIndex((e) => e.product_id == product.id)

  if (index == -1) {
    cart.value.push({
      product_id: product.id,
      count: 1,
      products_amount: product.price,
      name: product.name,
    })
  } else {
    cart.value.find((e) => e.product_id == product.id).count++
  }
}

export const subTotal = computed(() => {
  let suma = 0
  cart.value.forEach((e) => {
    suma += e.products_amount * e.count
  })
  return suma
})

export const tax = computed(() => {
  return (subTotal.value / 100) * 7
})

export const total = computed(() => {
  return subTotal.value + tax.value
})

export const changeCountProduct = (type, element, key) => {
  if (type == 'minus') {
    if (element.count > 0) {
      element.count--
    }

    if (element.count == 0) {
      cart.value.splice(key, 1)
    }
  } else {
    element.count++
  }
}

//

export const cash = ref(0)

export const changeBack = computed(() => {
  const calculo = cash.value - total.value

  if (calculo > 0) {
    return calculo
  }

  return 0
})

export const addCash = (i) => {
  console.log(i)
  cash.value += i
}

export const typePayment = ref(null)

export const client = ref({ email: null, phone: null, barcode: null })

export const payment = () => {
  const data = {
    total: total.value,
    tax_id: 1,
    payment_type_id: typePayment.value,
    email: client.value.email,
    phone: client.value.phone,
    change_back: changeBack.value,
    products: cart.value,
  }
  storeOrders(data)
    .then((response: any) => {
      console.log(response.data)
      typePayment.value = null
      client.value.email = null
      client.value.phone = null
      client.value.barcode = null
      cash.value = 0
      cart.value = []
      stepActive.value = 1
      openModalCash.value = false
      notyf.success('Success')
    })
    .catch((error: any) => {
      notyf.error(error.response.data.message)
    })
}
export const openModalCash = ref(false)
export const stepActive = ref(1)

export const storeOrders = async (data: any) => {
  const response = await Api.post('orders', data)
  return response
}
