import { ref, computed, reactive } from 'vue'
import { Api } from '/@src/services'

export const cart = ref([])

export const addProduct = (product: any) => {
  const index = cart.value.findIndex((e) => e.id == product.id)

  if (index == -1) {
    cart.value.push({
      id: product.id,
      count: 1,
      price: product.price,
      name: product.name,
    })
  } else {
    cart.value.find((e) => e.id == product.id).count++
  }
}

export const subTotal = computed(() => {
  let suma = 0
  cart.value.forEach((e) => {
    suma += e.price * e.count
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
