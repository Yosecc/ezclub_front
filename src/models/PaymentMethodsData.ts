import { ref } from 'vue'
import moment from 'moment'
import { notyf } from '/@src/models/Mixin.ts'
export const optionsCreditCard = ref([
  {
    typeInput: 'switchEventChange',
    name: 'is_diferent_card',
    values: ['Same Credit Card', 'Different Credit Cards'],
    model: false,
    class: 'is-6 d-flex align-items-center',
  },
  {
    typeInput: 'checkbox',
    name: 'swipe',
    placeholder: 'Swipe Credit Card',
    model: [],
    class: 'is-6 d-flex justify-content-end',
  },
])

export const flipped = ref(false)

export const paymentData = ref([
  {
    typeInput: 'text',
    name: 'card_name',
    placeholder: 'Card Name',
    model: '',
    class: 'is-12',
    isLabel: true,
    keyUp: (event, input) => {
      flipped.value = false
    },
  },
  {
    typeInput: 'number',
    name: 'card_number',
    placeholder: 'Card Number',
    model: '',
    class: 'is-12',
    maxLength: 16,
    isLabel: true,
    keyUp: function (event, input) {
      flipped.value = false
      if (this.model.length > 16) {
        this.model = this.model.substring(0, this.model.length - 1)
      } else {
        return true
      }
    },
  },
  {
    typeInput: 'number',
    name: 'date_day_expired',
    placeholder: 'Expiration Month',
    model: '',
    class: 'is-6',
    maxLength: 2,
    isLabel: true,
    keyUp: function (event, input) {
      flipped.value = false
      if (this.model.length > 2) {
        this.model = this.model.substr(0, this.model.length - 1)
      }
    },
    change: function (event, input) {
      if (this.model.length == 1) {
        this.model = `0${this.model}`
      }
    },
  },
  {
    typeInput: 'number',
    name: 'date_year_expired',
    placeholder: 'Expiration Year',
    model: '',
    class: 'is-6',
    maxLength: 2,
    isLabel: true,
    keyUp: function (event, input) {
      flipped.value = false
      if (this.model.length > 2) {
        this.model = this.model.substr(0, this.model.length - 1)
      }
      if (this.model.length == 2) {
        if (parseFloat(this.model) < parseFloat(moment().format('YY'))) {
          this.model = ''
          this.hasError = true
          notyf.error('date expired')
        } else {
          this.hasError = false
        }
      }
    },
  },
  {
    typeInput: 'number',
    name: 'cvv',
    placeholder: 'CVV',
    model: '',
    class: 'is-12',
    maxLength: 3,
    isLabel: true,
    keyUp: function (event, input) {
      flipped.value = true
      if (this.model.length > 3) {
        this.model = this.model.substr(0, this.model.length - 1)
      }
    },
  },
])
