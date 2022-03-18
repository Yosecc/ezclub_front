import { Api } from '/@src/services'
import { onMounted, watch, ref, computed } from 'vue'

export const inventories = ref([])
export const locationInventory = ref(null)

export const getInventories = async (locations_id: number) => {
  if (!locations_id) {
    console.error('la locacion es requerida')
    return
  }
  const response = await Api.get(`inventory?location=${locations_id}`)
  inventories.value = response.data
  return response
}

export const storeInventory = async () => {
  if (!locationInventory.value) {
    console.error('la locacion es requerida')
    return
  }
  const response = await Api.post('inventory', {
    locations_id: locationInventory.value,
  }) //Return ID inventory
  return response
}

export const closeAndApplyInentory = async (id: any) => {
  const response = await Api.post(`inventory/close_inventory/${id}`)
  return response
}

export const inventory = ref({})
export const getInventary = async (id: any) => {
  const response = await Api.get(`inventory/${id}`)
  inventory.value = response.data
  return response
}

export const storeInventoryProducts = async (data: any) => {
  const response = await Api.post(
    `inventory_products/${inventory.value.id}`,
    data
  )
  return response
}
