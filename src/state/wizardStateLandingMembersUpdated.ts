/**
 * This is a store that hold all state used on /wizard-v1 multi-step form
 *
 * Using defineAsyncComponent from vue allow to lazyload component only when they are used
 *
 * We can import and use sidebarLayout anywhere in our project
 * @see /src/components/partials/wizard/WizardV1Step1.vue
 * @see /src/components/partials/wizard/WizardV1Step7.vue
 */

import { reactive, ref, computed } from 'vue'
import sleep from '/@src/utils/sleep'
import { Api } from '/@src/services'
import moment from 'moment'
import { getInput, notyf } from '/@src/models/Mixin.ts'
/**
 * Using typescript types allow better developer experience
 * with autocompletion and compiler error prechecking
 */
import type { WizardData } from '/@src/models/wizard'

export const currentStep = ref(1)
export const isLoading = ref(true)

export const stepTitle = computed(() => {
  switch (currentStep.value) {
    case 2:
      return 'Personal Information'
    case 3:
      return 'Address'
    case 4:
      return 'Method Payment'
    case 1:
    default:
      return 'Welcolme to ' + company.value.name
  }
})

export async function saveData() {
  isLoading.value = true
  await sleep(2000)
  isLoading.value = false
}

export function resetData() {
  wizardData.name = ''
  wizardData.description = ''
  wizardData.relatedTo = 'UX/Design'
  wizardData.logo = null
  wizardData.timeFrame = {
    start: new Date(),
    end: new Date(),
  }
  wizardData.budget = '< 5K'
  wizardData.attachments = []
  wizardData.teammates = []
  wizardData.tools = []
  wizardData.customer = null
}

export const wizardData = reactive<WizardData>({
  name: '',
  description: '',
  relatedTo: 'UX/Design',
  logo: null,
  timeFrame: ref({
    start: new Date(),
    end: new Date(),
  }),
  budget: '< 5K',
  attachments: [],
  teammates: [],
  tools: [],
  customer: null,
})

export const company = ref({})

export const barCodeInput = ref([
  {
    typeInput: 'number',
    name: 'bar_code',
    isLabel: true,
    label: 'Barcode',
    maxLength: 9,
    placeholder: '123456789',
    model: '301048254',
    class: 'is-12',
  },
])

export const photoInput = ref([
  {
    typeInput: 'file',
    name: 'photo',
    placeholder: 'Upload a member photo',
    model: '',
    required: false,
    class: 'is-12 d-flex justify-content-end',
    camera: false,
  },
])

export const inputsInformation = ref([
  {
    typeInput: 'text',
    name: 'name',
    placeholder: 'First Name',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'second_name',
    placeholder: 'Middle Name',
    model: '',
    required: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'last_name',
    placeholder: 'Last Name',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'date',
    name: 'date_birth',
    placeholder: 'Date of Birth',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
    maxLength: 10,
    keyUp: (event, input) => {
      const formatos = ['YYYY-MM-DD', 'YYYY/MM/DD']
      if (input.model.length >= 10) {
        if (!moment(input.model, formatos, true).isValid()) {
          notyf.error('Date invalid')
          input.hasError = true
        } else {
          input.hasError = false
        }
      }
    },
    change: function (event, input) {
      const hoy = moment()
      const model = moment(this.model)
      if (hoy.diff(model, 'year') < 10) {
        this.model = ''
        notyf.error('date invalid')
        this.hasError = true
      } else {
        this.hasError = false
      }
    },
  },
  {
    typeInput: 'select',
    name: 'gender',
    placeholder: 'Gender',
    values: ['Male', 'Female', 'Binario'],
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'select',
    name: 'goverment_id',
    placeholder: 'Goverment ID Type',
    values: [
      'Florida Driver License',
      'Other State ID',
      'Florida ID Card',
      'Passport',
      'Foreing Country ID',
      'Florida Personal Identification Card',
      'Florida Learner License',
    ],
    model: '',
    required: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'personal_identifications',
    placeholder: 'ID #',
    model: '',
    required: false,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'email',
    name: 'email',
    placeholder: 'Email',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'text',
    name: 'phone',
    placeholder: 'Phone Number',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'switchEventChangeInput',
    name: 'leo_vet_fr',
    values: ['', 'LEO / VET / FR'],
    placeholder: 'LEO / VET / FR',
    model: false,
    required: false,
    class: 'is-5',
    change: function (inputsStep: any) {
      if (!this.model) {
        getInput(inputsStep, 'id_leo_vet_fr').typeInput = 'number'
        getInput(inputsStep, 'id_leo_vet_fr').required = true
      } else {
        getInput(inputsStep, 'id_leo_vet_fr').typeInput = 'hidden'
        getInput(inputsStep, 'id_leo_vet_fr').required = false
      }
    },
  },
  {
    typeInput: 'hidden',
    name: 'id_leo_vet_fr',
    placeholder: 'LEO / VET / FR ID#',
    model: '',
    required: false,
    class: 'is-7',
    isLabel: true,
  },
])

export const direccionInput = ref([
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    required: true,
    values: [''],
    class: 'is-12',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    required: true,
    values: [''],
    class: 'is-12',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    required: true,
    model: '',
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    required: true,
    values: [''],
    class: 'is-12',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
])

export const direccionFacturacionInputs = ref([
  {
    typeInput: 'switchEventChangeInput',
    name: 'is_direction_facturacion',
    values: ['', 'Use the same address for billing'],
    placeholder: 'Use the same address for billing',
    model: true,
    required: false,
    class: 'is-12',
    change: function (inputsStep: any) {
      if (this.model) {
        inputsAddress.forEach((e) => {
          inputsStep.push(e)
        })
      } else if (!this.model) {
        for (let i = 0; i < 5; ++i) {
          inputsStep.splice(1, 1)
        }
      }
    },
  },
])
const inputsAddress = [
  {
    typeInput: 'text',
    name: 'address',
    placeholder: 'Address',
    model: '',
    required: true,
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectData',
    name: 'city_id',
    placeholder: 'City',
    model: '',
    required: true,
    values: [''],
    class: 'is-12',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'selectData',
    name: 'state_id',
    placeholder: 'State',
    model: '',
    required: true,
    values: [''],
    class: 'is-12',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
  {
    typeInput: 'number',
    name: 'postal_code',
    placeholder: 'Postal Code',
    required: true,
    model: '',
    class: 'is-12',
    isLabel: true,
  },
  {
    typeInput: 'selectData',
    name: 'country_id',
    placeholder: 'Country',
    model: '',
    required: true,
    values: [''],
    class: 'is-12',
    isLabel: true,
    filterOptionText: function (option) {
      return option.name
    },
  },
]
export const searchBarCode = async (barcode: string) => {
  const response = await Api.post(`landing_pages/search_barcode/${barcode}`)
  return response
}

export const storeInformation = async (id: string, data: object) => {
  const response = await Api.post(
    `landing_pages/actualizacion_member/${id}`,
    data
  )
  return response
}

export const storeDirecciones = async (id: string, data: object) => {
  const response = await Api.post(`landing_pages/address_member/${id}`, data)
  return response
}

export const member = ref(null)

export const onconfirm = (text: string) => {
  return confirm(text)
}
