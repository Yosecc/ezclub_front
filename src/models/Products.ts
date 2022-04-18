import { ref, computed, reactive } from 'vue'
import { Api } from '/@src/services'
// import { notyf } from '/@src/models/Mixin.ts'

export const products = ref([])

export const getProducts = async (
  locations_id: number = null,
  status: string = null
) => {
  const response = await Api.get(
    `products?locations_id=${locations_id}&status=${status}`
  )
  products.value = response.data
  return response
}

export const product = ref({})
export const getProduct = async (id: any) => {
  const response = await Api.get(`products/${id}`)
  product.value = response.data
  return response
}

export const putProduct = async (data: any) => {
  const response = await Api.post(`products/${product.value.id}/update`, data)
  // products.value = response.data
  return response
}

export const addNewPrice = async (price: any) => {
  const response = await Api.post(`products/${product.value.id}/newPrice`, {
    price,
  })
  return response
}

export const storeProduct = async (data: any) => {
  const response = await Api.post(`products`, data)
  // products.value = response.data
  return response
}

export const categories = ref()

export const geCategories = async () => {
  const response = await Api.get(`product_categories`)
  categories.value = response.data
  return response
}

export const priceInputs = ref([
  {
    typeInput: 'number',
    name: 'price',
    placeholder: 'Price $',
    model: '',
    class: 'is-12',
  },
])

export const inputsProducts = ref([
  {
    typeInput: 'switch',
    name: 'status',
    values: ['', 'Active'],
    placeholder: 'Status',
    model: true,
    default: true,
    // values:['active','inactive'],
    class: 'is-6',
  },
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Product Picture',
    model: '',
    class: 'd-flex is-6 justify-content-end',
  },
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'Product Name',
    model: '',
    class: 'is-6',
  },
  // {
  //   typeInput: 'number',
  //   name: 'QuantityinStock',
  //   placeholder: 'Quantity in Stock',
  //   model: '',
  //   class: 'is-4'
  // },
  // {
  //   typeInput: 'number',
  //   name: 'retail_price',
  //   placeholder: 'Retail Price $',
  //   model: '',
  //   class: 'is-4',
  // },

  // {
  //   typeInput: 'select',
  //   name: 'can_discount_by_apply',
  //   placeholder: 'Can Discount by Apply',
  //   model: '',
  //   values:[''],
  //   class: 'is-4'
  // },
  {
    typeInput: 'select',
    name: 'aceptable_payment_types',
    placeholder: 'Acceptable Payment Types',
    model: '',
    values: ['All', 'Card', 'Cash', 'Bitcoin'],
    class: 'is-3',
  },
  {
    typeInput: 'text',
    name: 'var_code',
    placeholder: 'Barcode',
    model: '',
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'product_categories_id',
    placeholder: 'Category',
    model: '',
    values: [''],
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name: 'size',
    placeholder: 'Zize',
    model: '',
    values: ['XS', 'S', 'M', 'XL', 'XXL', 'XXXL'],
    class: 'is-3',
  },
  {
    typeInput: 'select',
    name: 'color',
    placeholder: 'Color',
    model: '',
    values: ['red', 'blue', 'yellow', 'green', 'black', 'white'],
    class: 'is-3',
  },
  {
    typeInput: 'selectData',
    name: 'taxes_id',
    placeholder: 'Apply Taxes',
    model: '',
    values: [''],
    class: 'is-3',
    filterOptionText: (option: any) => {
      return option.name
    },
  },
  {
    typeInput: 'checkboxGroupSimpleAvatar',
    name: 'locations',
    placeholder: 'Locations',
    model: [],
    values: [],
    class: 'is-12',
    required: true,
  },
  {
    typeInput: 'textarea',
    name: 'descriptions',
    placeholder: 'Description',
    model: '',
    class: 'is-12',
  },
])

export const input_image = ref([])
