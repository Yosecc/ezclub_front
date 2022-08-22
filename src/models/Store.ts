import { ref, computed, reactive } from 'vue'
import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'
import { locationsSelect } from '/@src/models/Companies.ts'
import { getInput } from '/@src/models/Mixin.ts'
import { validateCupon } from '/@src/models/Discounts.ts'

export const cart = ref([])
export const openModalCash = ref(false)
export const openModalCard = ref(false)
export const stepActive = ref(1)
export const order = ref(null)
export const openModalRecibo = ref(false)
export const inventoryStatus = ref(false)
export const member = ref(null)
export const invoice_pdf = ref(null)
export const modalCheckout = ref(false)

export const addProduct = (product: any) => {
  const index = cart.value.findIndex((e) => e.product_id == product.id)

  if (index == -1) {
    cart.value.push({
      product_id: product.id,
      count: 1,
      products_amount: product.price,
      name: product.name,
      stock: product.stock,
      custom: product.custom,
    })
  } else {
    if (!cart.value[index].custom) {
      cart.value.find((e) => e.product_id == product.id).count++
    }

    if (cart.value[index].custom) {
      cart.value[index].products_amount = product.price
    }
  }
}

export const discountInput = reactive([
  {
    typeInput: 'selectDataActionChangeInput',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    data: null,
    model: '',
    disabled: false,
    class: 'is-12',
    isLabel: true,
    change: function () {
      if (this.model != '') {
        validateCupon(
          this.values.find((e: any) => e.id == this.model).code,
          'membership'
        )
          .then((response: any) => {
            this.data = response.data
            notyf.success('Discuount valid')
          })
          .catch((error: any) => {
            notyf.error(error.response.data)
            this.model = ''
          })
      } else {
        this.data = null
      }
    },
    filter: function (option) {
      return `${option.name}`
    },
  },
])

export const subTotal = computed(() => {
  let suma = 0
  // console.log('cart.value', cart.value)
  cart.value.forEach((e) => {
    suma += e.products_amount * e.count
  })

  let disc = 0
  if (discount.value) {
    if (discount.value.type == 'percentaje') {
      disc = (suma * discount.value.value) / 100
    } else {
      disc = discount.value.value
    }
  }

  return suma - disc
})

export const tax = computed(() => {
  // if (taxes.value && subTotal.value) {
  return (subTotal.value * 7) / 100
  // }
  return 0
})

export const discount = computed(() => {
  return getInput(discountInput, 'discount').data
    ? getInput(discountInput, 'discount').data
    : null
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
    if (element.count + 1 <= element.stock) {
      element.count++
    } else {
      notyf.error('Sin Stock')
    }
  }
}

//

export const cash = ref(0)

export const changeBack = computed(() => {
  const calculo = parseFloat(cash.value) - parseFloat(total.value)
  if (calculo > 0) {
    return calculo
  }

  return 0
})

export const addCash = (i) => {
  cash.value = parseFloat(cash.value) + parseFloat(i)
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
    barcode: client.value.barcode,
    change_back: changeBack.value,
    products: cart.value,
    locations_id: getInput(locationsSelect.value, 'locations_id').model,
    member_id: member.value ? member.value.id : null,
  }
  if (discount.value) {
    data.discount = discount.value.id
  }
  storeOrders(data)
    .then((response: any) => {
      // console.log(response.data)
      if (typePayment.value == 1) {
        typePayment.value = null
        client.value.email = null
        client.value.phone = null
        client.value.barcode = null
        cash.value = 0
        cart.value = []
        stepActive.value = 3
        openModalCash.value = false
      }
      if (typePayment.value == 3) {
        order.value = response.data.order
      }
      order.value = response.data.order
      notyf.success('Success')

      finishPaymentOrder({
        invoice_pdf: response.data.invoice_pdf,
        order: response.data.order,
      })
    })
    .catch((error: any) => {
      notyf.error(error.response.data.message)
    })
}

export const storeOrders = async (data: any) => {
  const response = await Api.post('orders', data)
  return response
}

export const activateOrders = async (payment_intent_client_secret: any) => {
  const response = await Api.post('orders/activate', {
    payment_intent_client_secret: payment_intent_client_secret,
  })
  return response
}

export const dataSendReceipt = ref('')
export const SendReceipt = async () => {
  const response = await Api.get(`orders/send_receipt/${order.value}`, {
    params: {
      type: dataSendReceipt.value,
    },
  })
  notyf.success('Send')
  stepActive.value = 1
  return response
}

export const taxes = ref(null)
export const getTaxes = async () => {
  const response = await Api.get('taxes')
  taxes.value = response.data.taxes
  return response
}

export const finishPaymentOrder = (data: object) => {
  invoice_pdf.value = data.invoice_pdf
  order.value = data.order
  openModalRecibo.value = true
}

//

export const storeDebitAutomatic = async (obj: object) => {
  const response = await Api.post('orders/store_debit_automatic', obj)
  return response
}

export const storeSwipeCard = async (obj: object) => {
  const response = await Api.post('orders/swipe_card', obj)
  return response
}

export const storeNewCardClient = async (obj: object) => {
  const response = await Api.post('orders/store_new_card_client', obj)
  return response
}

export const newSetupIntent = async (id: number) => {
  const response = await Api.post('orders/store_new_card_client/' + id)
  return response
}

export const cancelPayment = async (id: string) => {
  const response = await Api.post('orders/cancel_payment_intent', { id })
  return response
}

export const retryPayment = async (id: string, terminal_id: string) => {
  const response = await Api.post('orders/another_try', { id, terminal_id })
  return response
}

export const finishPayment = async (id: string) => {
  const response = await Api.post('orders/capture_payment', { id })
  return response
}

export const getPedido = async (id: string) => {
  const response = await Api.get(`orders/pedido/${id}`)
  return response
}

export const sendReceipt = async (order: string, email: string) => {
  const response = await Api.post(`orders/send_receipt/${order}`, { email })
  return response
}

export const sendInvoice = async (
  order: string,
  email: string,
  invoice_pdf: string
) => {
  const response = await Api.post(`orders/send_invoice_mail/${order}`, {
    email,
    invoice_pdf,
  })
  return response
}
