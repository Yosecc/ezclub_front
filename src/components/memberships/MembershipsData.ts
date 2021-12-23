import { ref, computed,onBeforeMount} from 'vue'
import { Api } from '/@src/services'

export const  getMeberships = ()=>{
	Api.get('memberships').then((response)=>{
	    const inputMembershipsId = membershipsData.value.find((item)=> item.name == "memberships_id")
	    inputMembershipsId.values = response.data.memberships
	})
}

export const diciplines = ref([])

export const getDiciplines = async (memberships_id)=>{
	await Api.get(`membership/${memberships_id}/diciplines`).then((response)=>{
		diciplines.value = response.data.diciplines
		return response.data
	})
}


export const  membershipsData = ref([
  {
    typeInput: 'checkbox',
    name: 'initiation_fee',
    placeholder: 'No initiation fee',
    model: [],
    disabled: false
  },
  {
    typeInput: 'selectDataActionChange',
    name:'memberships_id',
    placeholder: 'Membership Type',
    values: ['valor1','valor2','valor3'] ,
    model: '',
    disabled: false
    // actionChange: (value) => {
    //   console.log(value)
    // }
  },
  {
    typeInput: 'select',
    name: 'discount',
    placeholder: 'Discount',
    values: ['dicount 1','discount 2','discount 3'],
    model: '',
    disabled: false
  },
  {
    typeInput: 'checkboxGroupSimple',
    name: 'diciplines',
    text: "Diciplines",
    model: [],
    values:[],
    disabled: false

  },
  
])