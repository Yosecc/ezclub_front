import { ref, computed, reactive } from 'vue'
import { Api } from '/@src/services'
import { getInput } from '/@src/models/Mixin.ts'

export const products = ref([])
export const total = ref(0)

const objectProduct = reactive({
  id: 'CUSTOM',
  companies_id: 1,
  name: '',
  sku: '',
  price: null,
  retail_price: null,
  taxes_id: 1,
  aceptable_payment_types: 'All',
  photo: '',
  color: null,
  size: null,
  var_code: 'custom',
  descriptions: null,
  product_categories_id: 7,
  user_id: 0,
  stock: 1,
  status: 'active',
  stripe_id: '',
  loading: false,
  classe: 'primary',
  category: {
    id: 7,
    companies_id: 1,
    name: 'Miscellaneous',
    description: 'Miscellaneous',
    image: 'product_categories/misselaniuss.png',
    status: 'active',
  },
  locations: [
    {
      id: 85,
      locations_id: 1,
      products_id: 88,
    },
  ],
})

export const getProducts = async (
  locations_id: number = null,
  status: string = null
) => {
  const response = await Api.get(
    `products?locations_id=${locations_id}&status=${status}`
  )

  const data = response.data.products.map(function (x) {
    if (x.custom) {
      x.price = ''
      x.name = ''
    }

    return x
  })

  products.value = data

  // objectProduct.custom = true
  // products.value.push(objectProduct)

  total.value = response.data.total
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
    values: ['Inactive', 'Active'],
    placeholder: 'Status',
    isLabel: true,
    model: true,
    default: true,
    // values:['active','inactive'],
    class: 'is-2',
  },
  {
    typeInput: 'switchEventChangeInput',
    name: 'custom',
    values: ['NO', 'YES'],
    placeholder: 'Price Custom',
    isLabel: true,
    model: false,
    default: false,
    class: 'is-2',
    change: function () {
      const value = !this.model

      if (value) {
        getInput(priceInputs.value, 'price').model = 1
        getInput(priceInputs.value, 'price').typeInput = 'hidden'
      } else {
        getInput(priceInputs.value, 'price').model = null
        getInput(priceInputs.value, 'price').typeInput = 'number'
      }
    },
  },
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Product Picture',
    model: '',
    class: 'd-flex is-8 justify-content-end',
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
    placeholder: 'Size',
    model: '',
    values: [
      '4XS',
      '3XS',
      'XXS',
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
      '6oz',
      '8oz',
      '10oz',
      '12oz',
      '14oz',
      '16oz',
      'Speed',
      'Heavy',
      'Senior',
      'Junior',
    ],
    class: 'is-3',
  },
  {
    typeInput: 'color',
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

export const putStockProduct = async (data: any) => {
  const response = await Api.post(`products/product_updated_stock`, data)
  return response
}
