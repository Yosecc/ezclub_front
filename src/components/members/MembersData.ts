import { ref, computed, watch, reactive } from 'vue'
// import { membershipsData } from '/@src/components/memberships/MembershipsData'
import { paymentData } from '/@src/models/PaymentMethodsData.ts'
import { Api } from '/@src/services/index.ts'

export const stepActive = ref(1)

export const members = ref([])

export const memberActive = reactive({ active: false, member_id: null })

export const member = computed(() => {
  if (memberActive.member_id) {
    return members.value.find((element) => element.id == memberActive.member_id)
  }
  return null
})

export const steps = ref([
  {
    step: 1,
    text: 'Member Information',
    categories: ['Adult', 'Minor'],
  },
  {
    step: 1,
    text: 'Prospect Information',
    categories: ['Prospect'],
  },
  {
    step: 2,
    text: 'Add Family Member',
    categories: ['Adult'],
  },
  {
    step: 2,
    text: 'Add Payment Method',
    categories: ['Prospect'],
  },
  {
    step: 2,
    text: 'Parent / Guardian',
    categories: ['Minor'],
  },
  {
    step: 3,
    text: 'Contact Preference',
    categories: ['Adult', 'Minor'],
  },
  {
    step: 3,
    text: 'Sing Waiver',
    categories: ['Prospect'],
  },
  {
    step: 4,
    text: 'Select membership',
    categories: ['Adult', 'Minor'],
  },
  {
    step: 5,
    text: 'Add Payment Method',
    categories: ['Adult', 'Minor'],
  },
  {
    step: 6,
    text: 'Sing Contract & Waiver',
    categories: ['Adult', 'Minor'],
  },
])

export const typeMember = computed(() => {
  return memberData.value
    .find((step) => step.step == 1)
    .data.find((input) => input.name == 'select_type').model
})

export const categories = ref({
  name: 'category',
  values: ['Adult', 'Minor', 'Prospect'],
  model: 'Adult',
  required: true,
})

export const typeDataSteps = ref('data')

export const inputsStepData = (value, category) => {
  // console.log(memberData.value.find((step) => step.step == value)[category])
  return memberData.value.find((step) => step.step == value)[category]
}

export const memberData = ref([
  {
    step: 1,
    data: [
      {
        typeInput: 'switch',
        name: 'select_type',
        values: ['Individual', 'Company'],
        model: false,
        required: false,
        class: 'is-6',
        categories: ['Adult'],
      },
      {
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Member Picture',
        model: '',
        required: true,
        class:
          categories.value.model == 'Minor'
            ? 'is-12'
            : 'is-6 d-flex justify-content-end',
        categories: ['Adult', 'Minor'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'text',
        name: 'company_name',
        placeholder: 'Company Name',
        model: '',
        class: 'is-12',
        categories: ['Adult'],
        typeMember: ['Company'],
      },
      {
        typeInput: 'text',
        name: 'name',
        placeholder: 'First Name',
        model: '',
        required: true,
        class: 'is-4',
        categories: ['Adult', 'Minor', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'text',
        name: 'second_name',
        placeholder: 'Middle Name',
        model: '',
        required: true,
        class: 'is-4',
        categories: ['Adult', 'Minor', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'text',
        name: 'last_name',
        placeholder: 'Last Name',
        model: '',
        required: true,
        class: 'is-4',
        categories: ['Adult', 'Minor', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'text',
        name: 'bar_code',
        placeholder: 'Client ID Card',
        model: '',
        required: true,
        class: 'is-6',
        categories: ['Adult', 'Minor'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'date',
        name: 'date_birth',
        placeholder: 'Date of Birth',
        model: '',
        required: true,
        class: categories.value.model == 'Prospect' ? 'is-6' : 'is-3',
        categories: ['Adult', 'Minor', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'select',
        name: 'gender',
        placeholder: 'Gender',
        values: ['Male', 'Female', 'No gender'],
        model: '',
        required: true,
        class: categories.value.model == 'Prospect' ? 'is-6' : 'is-3',
        categories: ['Adult', 'Minor', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'select',
        name: 'goverment_id',
        placeholder: 'Goverment ID Type',
        values: ['Card ID', 'Identification ID', 'Passport'],
        model: '',
        required: true,
        categories: ['Adult', 'Minor', 'Prospect'],
      },
      {
        typeInput: 'number',
        name: 'personal_identifications',
        placeholder: 'ID #',
        model: '',
        required: true,
        class: 'is-12',
        categories: ['Adult', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'text',
        name: 'address',
        placeholder: 'Address',
        model: '',
        required: true,
        class: 'is-12',
        categories: ['Adult', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'email',
        name: 'email',
        placeholder: 'Email',
        model: '',
        required: true,
        class: 'is-6',
        categories: ['Adult', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'number',
        name: 'phone',
        placeholder: 'Phone Number',
        model: '',
        required: true,
        class: 'is-6',
        categories: ['Adult', 'Prospect'],
        typeMember: ['Individual', 'Company'],
      },
      {
        typeInput: 'checkbox',
        name: 'leo_vet_fr',
        placeholder: 'LEO / VET / FR',
        model: [],
        required: true,
        class: 'is-6',
        categories: ['Adult'],
        typeMember: ['Individual'],
      },
      {
        typeInput: 'text',
        name: 'id_leo_vet_fr',
        placeholder: 'LEO / VET / FR ID#',
        model: '',
        required: true,
        class: 'is-6',
        categories: ['Adult'],
        typeMember: ['Individual'],
      },
    ],
  },
  {
    step: 2,
    family: [
      {
        family: 1,
        data_1: [
          {
            typeInput: 'switch',
            name: 'category',
            values: ['Adult', 'Minor'],
            class: 'is-6',
            model: false,
          },
          {
            typeInput: 'file',
            name: 'photo',
            placeholder: 'Member Picture',
            class: 'is-6 d-flex justify-content-end',
            model: '',
            required: false,
          },
          {
            typeInput: 'select',
            name: 'relationships',
            placeholder: 'Relationship',
            values: [
              'Sand',
              'Dother',
              'Wife',
              'Girlfriend',
              'Boyfriend',
              'Father',
              'Mother',
            ],
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'text',
            name: 'bar_code',
            placeholder: 'Client ID Card',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'date',
            name: 'date_birth',
            placeholder: 'Date of Birth',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'select',
            name: 'gender',
            placeholder: 'Gender',
            values: ['Male', 'Female', 'Binario'],
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'text',
            name: 'name',
            placeholder: 'First Name',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'text',
            name: 'second_name',
            placeholder: 'Middle Name',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'text',
            name: 'last_name',
            placeholder: 'Last Name',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'select',
            name: 'goverment_id',
            placeholder: 'Goverment ID Type',
            values: ['Card ID', 'Identification ID', 'Passport'],
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'number',
            name: 'personal_identifications',
            placeholder: 'ID #',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'text',
            name: 'address',
            placeholder: 'Address',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'email',
            name: 'email',
            placeholder: 'Email',
            model: '',
            class: 'is-6',
            required: false,
          },
          {
            typeInput: 'number',
            name: 'phone',
            placeholder: 'Phone Number',
            model: '',
            class: 'is-6',
            required: false,
          },
        ],
      },
    ],
    parent: [
      {
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Parent/Guardian Picture',
        model: '',
        required: false,
      },
      {
        typeInput: 'select',
        name: 'relationships',
        placeholder: 'Relationship',
        values: [
          'Sand',
          'Dother',
          'Wife',
          'Girlfriend',
          'Boyfriend',
          'Father',
          'Mother',
        ],
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name: 'name',
        placeholder: 'First Name',
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name: 'second_name',
        placeholder: 'Middle Name',
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name: 'last_name',
        placeholder: 'Last Name',
        model: '',
        required: false,
      },
      {
        typeInput: 'select',
        name: 'goverment_id',
        placeholder: 'Goverment ID Type',
        values: ['Card ID', 'Identification ID', 'Passport'],
        model: '',
        required: false,
      },
      {
        typeInput: 'number',
        name: 'personal_identifications',
        placeholder: 'ID #',
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name: 'address',
        placeholder: 'Address',
        model: '',
        required: false,
      },
      {
        typeInput: 'email',
        name: 'email',
        placeholder: 'Email',
        model: '',
        required: false,
      },
      {
        typeInput: 'number',
        name: 'phone',
        placeholder: 'Phone Number',
        model: '',
        required: false,
      },
    ],
  },
  {
    step: 3,
    data: [
      {
        typeInput: 'checkboxGroup',
        name: 'notifications',
        text: "When you ask clients to opt in, remind them that we'll still send receipts and anything critical",
        values: [
          {
            name: 'notifications_types_id',
            value: 1,
            placeholder: 'Account Information',
            values: [
              {
                placeholder: 'Email',
                name: 'email',
                model: ['email'],
              },
              {
                placeholder: 'SMS',
                name: 'sms',
                model: ['sms'],
              },
            ],
          },
          {
            name: 'notifications_types_id',
            value: 2,
            placeholder: 'Reminders and schedule changes',
            values: [
              {
                placeholder: 'Email',
                name: 'email',
                model: ['email'],
              },
              {
                placeholder: 'SMS',
                name: 'sms',
                model: ['sms'],
              },
            ],
          },
          {
            name: 'notifications_types_id',
            value: 3,
            placeholder: 'News and promos',
            values: [
              {
                placeholder: 'Email',
                name: 'email',
                model: ['email'],
              },
              {
                placeholder: 'SMS',
                name: 'sms',
                model: ['sms'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    step: 4,
    data: [
      {
        member: {
          type: 'principal',
        },
      },
    ],
  },
  {
    step: 5,
    data: [
      {
        member: {
          type: 'principal',
        },
        ...{ data: paymentData.value },
      },
    ],
  },
])

let controlador = null

export const toggleMemberActive = (status, id = null) => {
  if (memberActive.active) {
    memberActive.active = false
    setTimeout(() => {
      memberActive.active = status
    }, 200)
  } else {
    memberActive.active = status
    clearTimeout(controlador)
  }
  memberActive.member_id = id

  clearTimeout(controlador)
  controlador = setTimeout(() => {
    memberActive.active = false
  }, 4000)
}

export const getMember = async (id) => {
  memberActive.value = { active: true, member_id: id }

  await Api.get(`members/${id}`).then((response) => {
    members.value.push(response.data.member)
  })
}
