import { ref, computed, watch, reactive } from 'vue'
import { membershipsData } from '/@src/components/memberships/MembershipsData'
import { paymentData } from '/@src/components/payment/PaymentMethodsData'

export const stepActive = ref(1)

export const members = ref([])

export const memberActive = reactive({ active: false, member_id: null })

export const member = computed(()=>{
  if(memberActive.member_id){
    return members.value.find((element) => element.id == memberActive.member_id)
  }
  return null
})

export const steps = ref([
  {
    step: 1,
    text: 'Member Information',
    categories:['Adult','Minor']
  },
  {
    step: 1,
    text: 'Prospect Information',
    categories:['Prospect']
  },
  {
    step: 2,
    text: 'Add Family Member',
    categories:['Adult']
  },
  {
    step: 2,
    text: 'Add Payment Method',
    categories:['Prospect']
  },
  {
    step: 2,
    text: 'Parent / Guardian',
    categories:['Minor']
  },
  {
    step: 3,
    text: 'Contact Preference',
    categories:['Adult','Minor']
  },
  {
    step: 3,
    text: 'Sing Waiver',
    categories:['Prospect']
  },
  {
    step: 4,
    text: 'Select membership',
    categories:['Adult','Minor']
  },
  {
    step: 5,
    text: 'Add Payment Method',
    categories:['Adult','Minor']
  },
  {
    step: 6,
    text: 'Sing Contract & Waiver',
    categories:['Adult','Minor']
  },
])

export const typeMember = computed(()=>{
  return memberData.value.find((step) => step.step == 1).data
          .find((input) => input.name == 'select_type').model
})

export const categories = ref({
        name: 'category',
        values: ['Adult','Minor','Prospect'],
        model: 'Adult',
        required: true,
      })

export const typeDataSteps = ref('data')

export const inputsStepData = (value,category)=>{
  // console.log(memberData.value.find((step) => step.step == value)[category])
  return memberData.value.find((step) => step.step == value)[category]
}

export const memberData = ref([
  {
    step: 1,
    data:[
      {
        typeInput: 'switch',
        name: 'select_type',
        values: ['Individual','Company'],
        model: false,
        required: false,
        class: 'is-6',
        categories:['Adult'],
      },
      {
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Member Picture',
        model: '',
        required: true,
        class: categories.value.model == 'Minor' ? 'is-12':'is-6',
        categories:['Adult','Minor'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'text',
        name:'company_name',
        placeholder: 'Company Name',
        model: '',
        class: 'is-12',
        categories:['Adult'],
        typeMember: ['Company']
      },
      {
        typeInput: 'text',
        name:'name',
        placeholder: 'First Name',
        model: '',
        required: true,
        class: 'is-4',
        categories:['Adult','Minor','Prospect'],
        typeMember: ['Individual','Company']

      },
      {
        typeInput: 'text',
        name:'second_name',
        placeholder: 'Middle Name',
        model: '',
        required: true,
        class: 'is-4',
        categories:['Adult','Minor','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'text',
        name:'last_name',
        placeholder: 'Last Name',
        model: '',
        required: true,
        class: 'is-4',
        categories:['Adult','Minor','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'text',
        name:'bar_code',
        placeholder: 'Client ID Card',
        model: '',
        required: true,
        class: 'is-6',
        categories:['Adult','Minor'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'date',
        name:'date_birth',
        placeholder: 'Date of Birth',
        model: '',
        required: true,
        class: categories.value.model == 'Prospect' ? 'is-6':'is-3',
        categories:['Adult','Minor','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'select',
        name:'gender',
        placeholder: 'Gender',
        values: ['Male','Female','Binario'],
        model: '',
        required: true,
        class: categories.value.model == 'Prospect' ? 'is-6':'is-3',
        categories:['Adult','Minor','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'select',
        name: 'goverment_id',
        placeholder: 'Goverment ID Type',
        values: ['Card ID','Identification ID','Passport'],
        model: '',
        required: true,
        categories:['Adult','Minor','Prospect'],
      },
      {
        typeInput: 'number',
        name:'personal_identifications',
        placeholder: 'ID #',
        model: '',
        required: true,
        class: 'is-12',
        categories:['Adult','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'text',
        name:'address',
        placeholder: 'Address',
        model: '',
        required: true,
        class: 'is-12',
        categories:['Adult','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'email',
        name:'email',
        placeholder: 'Email',
        model: '',
        required: true,
        class: 'is-6',
        categories:['Adult','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'number',
        name:'phone',
        placeholder: 'Phone Number',
        model: '',
        required: true,
        class: 'is-6',
        categories:['Adult','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'checkbox',
        name:'leo_vet_fr',
        placeholder: 'LEO / VET / FR',
        model: [],
        required: true,
        class: 'is-6',
        categories:['Adult'],
        typeMember: ['Individual']
      },
      {
        typeInput: 'text',
        name:'id_leo_vet_fr',
        placeholder: 'LEO / VET / FR ID#',
        model: '',
        required: true,
        class: 'is-6',
        categories:['Adult'],
        typeMember: ['Individual']
      },
    ],
  },
  {
    step: 2,
    family:[
      {
        family: 1,
        data_1:[
          {
            typeInput: 'switch',
            name: 'category',
            values: ['Adult','Minor'],
            model: false
          },
          {
            typeInput: 'file',
            name: 'photo',
            placeholder: 'Member Picture',
            model: '',
            required: false,
          },
          {
            typeInput: 'select',
            name:'relationships',
            placeholder: 'Relationship',
            values: ['Sand','Dother','Wife','Girlfriend','Boyfriend','Father','Mother'],
            model: '',
            required: false,
          },
          {
            typeInput: 'text',
            name:'bar_code',
            placeholder: 'Client ID Card',
            model: '',
            required: false,
          },
          {
            typeInput: 'date',
            name:'date_birth',
            placeholder: 'Date of Birth',
            model: '',
            required: false,
          },
          {
            typeInput: 'select',
            name:'gender',
            placeholder: 'Gender',
            values: ['Male','Female','Binario'],
            model: '',
            required: false,
          },
          {
            typeInput: 'text',
            name:'name',
            placeholder: 'First Name',
            model: '',
            required: false,
          },
          {
            typeInput: 'text',
            name:'second_name',
            placeholder: 'Middle Name',
            model: '',
            required: false,
          },
          {
            typeInput: 'text',
            name:'last_name',
            placeholder: 'Last Name',
            model: '',
            required: false,
          },
          {
            typeInput: 'select',
            name: 'goverment_id',
            placeholder: 'Goverment ID Type',
            values: ['Card ID','Identification ID','Passport'],
            model: '',
            required: false
          },
          {
            typeInput: 'number',
            name:'personal_identifications',
            placeholder: 'ID #',
            model: '',
            required: false,
          },
          {
            typeInput: 'text',
            name:'address',
            placeholder: 'Address',
            model: '',
            required: false,
          },
          {
            typeInput: 'email',
            name:'email',
            placeholder: 'Email',
            model: '',
            required: false,
          },
          {
            typeInput: 'number',
            name:'phone',
            placeholder: 'Phone Number',
            model: '',
            required: false,
          },
        ]
      }
    ],
    parent:[
      {
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Parent/Guardian Picture',
        model: '',
        required: false,
      },
      {
        typeInput: 'select',
        name:'relationships',
        placeholder: 'Relationship',
        values: ['Sand','Dother','Wife','Girlfriend','Boyfriend','Father','Mother'],
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name:'name',
        placeholder: 'First Name',
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name:'second_name',
        placeholder: 'Middle Name',
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name:'last_name',
        placeholder: 'Last Name',
        model: '',
        required: false,
      },
      {
        typeInput: 'select',
        name: 'goverment_id',
        placeholder: 'Goverment ID Type',
        values: ['Card ID','Identification ID','Passport'],
        model: '',
        required: false
      },
      {
        typeInput: 'number',
        name:'personal_identifications',
        placeholder: 'ID #',
        model: '',
        required: false,
      },
      {
        typeInput: 'text',
        name:'address',
        placeholder: 'Address',
        model: '',
        required: false,
      },
      {
        typeInput: 'email',
        name:'email',
        placeholder: 'Email',
        model: '',
        required: false,
      },
      {
        typeInput: 'number',
        name:'phone',
        placeholder: 'Phone Number',
        model: '',
        required: false,
      },
    ]
  },
  {
    step: 3,
    data:[
      {
        typeInput: 'checkboxGroup',
        name: 'notifications',
        text: "When you ask clients to opt in, remind them that we'll still send receipts and anything critical",
        values:[
          {
            name: 'notifications_types_id',
            value: 1,
            placeholder: 'Account Information',
            values: [
              {
                placeholder: 'Email',
                name: 'email',
                model: ['email']
              },
              {
                placeholder: 'SMS',
                name: 'sms',
                model: ['sms']
              },
            ]
          },
          {
            name: 'notifications_types_id',
            value: 2,
            placeholder: 'Reminders and schedule changes',
            values: [
              {
                placeholder: 'Email',
                name: 'email',
                model: ['email']
              },
              {
                placeholder: 'SMS',
                name: 'sms',
                model: ['sms']
              },
            ]
          },
          {
            name: 'notifications_types_id',
            value: 3,
            placeholder: 'News and promos',
            values: [
              {
                placeholder: 'Email',
                name: 'email',
                model: ['email']
              },
              {
                placeholder: 'SMS',
                name: 'sms',
                model: ['sms']
              },
            ]
          },
        ]
      },
    ]
  },
  {
    step: 4,
    data:[
      {
        member:{
          type: 'principal',
        },
        ...{ data: membershipsData.value }
      }
    ]
  },
  {
    step: 5,
    data:[
      {
        member: {
          type: 'principal'
        },
        ... { data: paymentData.value }
      }
    ]
  }
])

export const configClassColumn = (input) => {
  switch (input.name) {
    case 'select_type':
        return 'is-6'
      break;
    case 'photo':
        if(categories.value.model == 'Minor'){
          return 'is-12'
        }
        return 'is-6'
      break;
    case 'bar_code':
        return 'is-6'
      break;
    case 'date_birth':
        if(categories.value.model == 'Prospect'){
          return 'is-6'
        }
        return 'is-3'
      break;
    case 'gender':
        if(categories.value.model == 'Prospect'){
          return 'is-6'
        }
        return 'is-3'
      break;
    case 'goverment_id':
        return 'is-4'
      break;
    case 'personal_identifications':
        return 'is-8'
      break;
    case 'address':
        return 'is-12'
      break;
    case 'email':
        return 'is-6'
      break;
    case 'phone':
        return 'is-6'
      break;
    case 'leo_vet_fr':
        return 'is-6'
      break;
    case 'id_leo_vet_fr':
        return 'is-6'
      break;
    case 'company_name':
      return 'is-12'
      break;
    case 'category':
      return 'is-6'
      break;
    case 'relationships':
      return 'is-12'
      break;
    case 'memberships_id':
      return 'is-8'
      break;
    case 'diciplines':
      return 'is-12 py-0'
      break;
    case 'discount':
      return 'is-4'
      break;
    case 'notifications':
        return 'is-12'
        break;
    case 'initiation_fee':
        return 'is-12 py-0 text-right'
        break;
    case 'is_diferent_card':
      return 'is-12'
      break;
    case 'swipe':
      return 'is-12'
      break;
    case 'card_number':
      return 'is-12'
      break;
    case 'date_expired':
      return 'is-6'
      break;
    case 'cvv':
      return 'is-6'
      break;
    default:
      return 'is-4'
  }
}

let controlador = null

export const toggleMemberActive = ((status, id = null) => {

  if (memberActive.active){
    memberActive.active = false
    setTimeout(()=>{
      memberActive.active = status
    },200)
  }else{
    memberActive.active = status
    clearTimeout(controlador)
  }
  memberActive.member_id = id

  clearTimeout(controlador)
  controlador = setTimeout(()=>{
    memberActive.active = false
  },4000)
 
})

