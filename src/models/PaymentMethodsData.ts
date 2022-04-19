import { ref } from 'vue'

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
    placeholder: 'Credit Card Name',
    model: '',
    class: 'is-12',
    isLabel: true,
    keyUp: (event, input) => {
      flipped.value = false
    },
  },
  {
    typeInput: 'text',
    name: 'card_number',
    placeholder: 'Credit Card Number',
    model: '',
    class: 'is-12',
    maxLength: 19,
    isLabel: true,
    keyUp: (event, input) => {
      flipped.value = false
      const code = event.which ? event.which : event.keyCode
      // console.log(event)
      if (code == 8) {
        // backspace.
        return true
      } else if (code >= 48 && code <= 57) {
        // is a number.
        // console.log()
        input.model = input.model
          .replace(/[^\dA-Z]/g, '')
          .replace(/(.{4})/g, '$1 ')
          .trim()
      } else {
        // other keys.
        // input.model = input.model.substr(0,input.model.length -1)
        return false
      }
    },
  },
  {
    typeInput: 'text',
    name: 'date_expired',
    placeholder: 'Expiration Date',
    model: '',
    class: 'is-6',
    maxLength: 5,
    isLabel: true,
    keyUp: (event, input) => {
      flipped.value = false
      const code = event.which ? event.which : event.keyCode

      if (code == 8) {
        // backspace.
        return true
      } else if (code >= 48 && code <= 57) {
        // is a number.
        if (input.model.length < 4) {
          input.model = input.model
            .replace(/[^\dA-Z]/g, '')
            .replace(/(.{2})/g, '$1/')
            .trim()
        }
      } else {
        // other keys.
        input.model = input.model.substr(0, input.model.length - 1)
        return false
      }
    },
  },
  {
    typeInput: 'number',
    name: 'cvv',
    placeholder: 'CVV',
    model: '',
    class: 'is-6',
    maxLength: 3,
    isLabel: true,
    keyUp: (event, input) => {
      flipped.value = true
      const code = event.which ? event.which : event.keyCode

      if (code == 8) {
        // backspace.
        return true
      } else if (code >= 48 && code <= 57) {
        // is a number.
        return true
      } else {
        // other keys.
        input.model = input.model.substr(0, input.model.length - 1)
        return false
      }
    },
  },
])
