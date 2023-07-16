import router from '/@src/router'

import { ref, computed } from 'vue'

import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export const user = ref(null)

export const flipped = ref(null)

export const remember = ref(false)

export const onLogout = () => {
  // removeCookies()
  user.value = null
  router.push({ name: 'auth' })
  window.location.reload()
}

const getUserStorage = () => {
  return cookies.get('user')
}

user.value = getUserStorage()

export const isAuthenticated = computed(() => {
  if (user.value != null) {
    if (
      user.value.token != '' ||
      user.value.token != null ||
      user.value.token != undefined ||
      user.value.token != false
    ) {
      return true
    }
  }
  return false
})

const removeCookies = () => {
  cookies.remove('remember')
  cookies.remove('user')
  cookies.remove('x-api-key')
  cookies.remove('locations_id')
}

export const setAuthStorage = async (response: any) => {
  // removeCookies()

  cookies.set('remember', remember.value)
  cookies.set('user', JSON.stringify(response))
  cookies.set('x-api-key', response.token)

  user.value = await getUserStorage()

  return user
}

/*
 *
 * REGISTRATIONS PROCESS
 *
 */

export const step = ref(1)

export const userNew = ref({
  firstName: '',
  email: '',
  password: '',
})

export const servicesPacksSelected = ref({
  typeInput: 'text',
  name: 'services_packs_id',
  placeholder: 'Services Packs',
  model: 0,
  class: 'is-8',
})

export const locations = ref([])

export const locationsData = ref([
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'text',
    name: 'initations_fee',
    placeholder: 'Initations Fee',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'number',
    name: 'phone',
    placeholder: 'Phone',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    values: [''],
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    values: [''],
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    values: [''],
    class: 'is-4',
  },

  {
    typeInput: 'checkbox',
    name: 'pincipal_address',
    placeholder: 'Principal Address',
    model: [],
    class: 'is-12',
  },
])

export const contact = ref([
  {
    typeInput: 'text',
    name: 'contact_name',
    placeholder: 'Contact Name',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'text',
    name: 'contact_last_name',
    placeholder: 'Contact Last Name',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'email',
    name: 'contact_email',
    placeholder: 'Contact Email',
    model: '',
    class: 'is-6',
    disabled: true,
  },
  {
    typeInput: 'number',
    name: 'contact_phone',
    placeholder: 'Contact Phone',
    model: '',
    class: 'is-6',
  },
  {
    typeInput: 'text',
    name: 'contact_address',
    placeholder: 'Contact Adress',
    model: '',
    class: 'is-8',
  },
  {
    typeInput: 'number',
    name: 'contact_postal_code',
    placeholder: 'Contact Postal Code',
    model: '',
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    name: 'contact_country_id',
    placeholder: 'Contact Country',
    model: '',
    values: [''],
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    name: 'contact_city_id',
    placeholder: 'Contact City',
    model: '',
    values: [''],
    class: 'is-4',
  },
  {
    typeInput: 'selectData',
    name: 'contact_state_id',
    placeholder: 'Contact State',
    model: '',
    values: [''],
    class: 'is-4',
  },
])

export const creditCard = ref([
  {
    typeInput: 'text',
    name: 'name_card',
    placeholder: 'Name Card',
    model: '',
    class: 'is-12',
    keyUp: (event, input) => {
      flipped.value = false
    },
  },
  {
    typeInput: 'text',
    name: 'number_card',
    placeholder: 'Number Card',
    model: '',
    class: 'is-12',
    maxLength: 19,
    keyUp: (event, input) => {
      flipped.value = false
      const code = event.which ? event.which : event.keyCode

      if (code == 8) {
        // backspace.
        return true
      } else if (code >= 48 && code <= 57) {
        // is a number.
        input.model = input.model
          .replace(/[^\dA-Z]/g, '')
          .replace(/(.{4})/g, '$1 ')
          .trim()
      } else {
        // other keys.
        input.model = input.model.substr(0, input.model.length - 1)
        return false
      }
    },
  },
  {
    typeInput: 'text',
    name: 'expiration_date',
    placeholder: 'Expiration Date',
    model: '',
    class: 'is-6',
    maxLength: 5,
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
    typeInput: 'text',
    name: 'password_card',
    placeholder: 'CVC',
    model: '',
    class: 'is-6',
    maxLength: 3,
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
