import { ref, computed,onBeforeMount} from 'vue'
import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'

export const idMember = ref(null)

export const categoriesMembers = ref({
        name: 'category',
        values: ['Adult','Minor','Prospect'],
        model: 'Adult',
        required: true,
      })

const categorieActive = computed(()=>{
    return categoriesMembers.value.model
})

export const inputsInformation = ref([
      {
        typeInput: 'switchEventChange',
        name: 'select_type',
        values: ['Individual','Company'],
        model: false,
        required: false,
        class: 'is-6',
        categories:['Adult'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'file',
        name: 'photo',
        placeholder: 'Member Picture',
        model: '',
        required: true,
        class: 'is-12 d-flex justify-content-end',
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
        class: categorieActive.value == 'Prospect' ? 'is-6':'is-3',
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
        class: categorieActive.value == 'Prospect' ? 'is-6':'is-3',
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
        class:'is-4',
        categories:['Adult','Minor','Prospect'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'number',
        name:'personal_identifications',
        placeholder: 'ID #',
        model: '',
        required: true,
        class: 'is-8',
        categories:['Adult','Prospect','Minor'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'number',
        name:'postal_code',
        placeholder: 'Postal Code',
        model: '',
        class: 'is-3',
        categories:['Adult','Prospect','Minor'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'selectData',
        name:'country_id',
        placeholder: 'Country',
        model: '',
        values: [''],
        class: 'is-3',
        categories:['Adult','Prospect','Minor'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'selectData',
        name:'city_id',
        placeholder: 'City',
        model: '',
        values: [''],
        class: 'is-3',
        categories:['Adult','Prospect','Minor'],
        typeMember: ['Individual','Company']
      },
      {
        typeInput: 'selectData',
        name:'state_id',
        placeholder: 'State',
        model: '',
        values: [''],
        class: 'is-3',
        categories:['Adult','Prospect','Minor'],
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
        required: false,
        class: 'is-6',
        categories:['Adult'],
        typeMember: ['Individual']
      },
      {
        typeInput: 'text',
        name:'id_leo_vet_fr',
        placeholder: 'LEO / VET / FR ID#',
        model: '',
        required: false,
        class: 'is-6',
        categories:['Adult'],
        typeMember: ['Individual']
      },
])

const familyData = ref([
          {
            typeInput: 'switchEventChange',
            name: 'category',
            values: ['Adult','Minor'],
            class:'is-6',
            model: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'file',
            name: 'photo',
            placeholder: 'Member Picture',
            class:'is-6 d-flex justify-content-end',
            model: '',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'select',
            name:'relationships',
            placeholder: 'Relationship',
            values: ['Sand','Dother','Wife','Girlfriend','Boyfriend','Father','Mother'],
            model: '',
            class:'is-6',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'text',
            name:'bar_code',
            placeholder: 'Client ID Card',
            model: '',
            class:'is-6',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'date',
            name:'date_birth',
            placeholder: 'Date of Birth',
            model: '',
            class:'is-6',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'select',
            name:'gender',
            placeholder: 'Gender',
            values: ['Male','Female','Binario'],
            model: '',
            class:'is-6',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'text',
            name:'name',
            placeholder: 'First Name',
            model: '',
            class:'is-4',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'text',
            name:'second_name',
            placeholder: 'Middle Name',
            model: '',
            class:'is-4',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'text',
            name:'last_name',
            placeholder: 'Last Name',
            model: '',
            class:'is-4',
            required: false,
            category:['Adult','Minor']
          },
          {
            typeInput: 'select',
            name: 'goverment_id',
            placeholder: 'Goverment ID Type',
            values: ['Card ID','Identification ID','Passport'],
            model: '',
            class:'is-4',
            required: false,
            category:['Adult']
          },
          {
            typeInput: 'number',
            name:'personal_identifications',
            placeholder: 'ID #',
            model: '',
            class:'is-8',
            required: false,
            category:['Adult']
          },
          {
            typeInput: 'text',
            name:'address',
            placeholder: 'Address',
            model: '',
            class:'is-12',
            required: false,
            category:['Adult']
          },
          {
            typeInput: 'email',
            name:'email',
            placeholder: 'Email',
            model: '',
            class:'is-6',
            required: false,
            category:['Adult']
          },
          {
            typeInput: 'number',
            name:'phone',
            placeholder: 'Phone Number',
            model: '',
            class:'is-6',
            required: false,
            category:['Adult']
          },
])

export const inputsFamily = computed(()=>{
  return JSON.parse(JSON.stringify(familyData.value))
})

export const inputsContact = ref([{
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
}])


export const  membershipsData = [
  {
    typeInput: 'checkbox',
    name: 'recurrence',
    placeholder: 'Recurrence',
    model: ['recurrence'],
    disabled: false,
    class: 'is-12'
  },
  {
    typeInput: 'selectDataActionChange',
    name:'memberships_id',
    placeholder: 'Membership Type',
    values: [] ,
    model: '',
    disabled: false,
    class: 'is-12'
  },
  {
    typeInput: 'radioBoxs',
    name:'recurrences_id',
    placeholder: 'Recurrence & Amount',
    values: [] ,
    model: '',
    disabled: false,
    class: 'is-12',
    filterName: 'descriptions',
    otros:'amount'
  },
  {
    typeInput: 'hidden',
    name:'amount',
    placeholder: 'Amount',
    model: '',
    disabled: false,
    class: 'is-12',
  },
  {
    typeInput: 'selectDataActionChange',
    name: 'locations_id',
    placeholder: 'Locations Sale',
    values: [],
    model: '',
    disabled: false,
    class: 'is-4',
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'diciplines',
    text: "Diciplines",
    model: [],
    values:[],
    disabled: false,
    class: 'is-12'
  },
  {
    typeInput: 'number',
    name: 'initiation_fee',
    placeholder: 'Initiation fee',
    model: [],
    disabled: true,
    class: 'is-4',
  },
  {
    typeInput: 'checkbox',
    name: 'is_initiation_fee',
    placeholder: 'No initiation fee',
    model: [],
    disabled: false,
    class: 'is-4'
  },
  {
    typeInput: 'selectData',
    name: 'discount',
    placeholder: 'Discount',
    values: [],
    model: '',
    disabled: false,
    class: 'is-6',
  },
  {
    typeInput: 'selectData',
    name: 'staff_id',
    placeholder: 'Trainer',
    values: [],
    model: '',
    disabled: false,
    class: 'is-6',
    filterOptionText: function(option){
      return `${option.name} ${option.second_name} ${option.last_name}`
    }
  }
]

export const notasInput = ref([
  {
    typeInput: 'textarea',
    name:'notes',
    placeholder: 'Notes',
    model: '',
    disabled: false,
    class: 'is-12'
  },
])

export const inputsMembership = ref(membershipsData)


export const saveMember = async (member) =>{
  // Api.defaults.headers.common['content-type'] = 'multipart/form-data';
  let response = await Api.post('members',member)

  return response
  // console.log(response)
}