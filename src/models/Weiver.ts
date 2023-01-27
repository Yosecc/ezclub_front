import { ref, computed, onBeforeMount, reactive } from 'vue'
import { Api, API_WEB_URL } from '/@src/services'

export const getDiciplines = async () => {
  const response = await Api.get('jornada/getDiciplines')
  return response.data
}

export const saveData = async (data) => {
  const response = await Api.post('jornada', data)
  return response
}

export const inputs = ref([
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
  },
  {
    typeInput: 'email',
    name: 'mail',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
  },
  {
    typeInput: 'tel',
    name: 'phone',
    placeholder: 'Phone Numbers',
    model: '',
    required: true,
    class: 'is-6',
    isLabel: true,
    mask: '(###) ###-####',
  },
  {
    typeInput: 'textarea',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectData',
    name: 'dicipline_id',
    placeholder: 'Dicipline',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
])
