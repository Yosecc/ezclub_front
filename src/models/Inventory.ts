import { Api } from '/@src/services'
import { onMounted, watch, ref, computed } from 'vue'

export const inventories = ref([])
export const getInventories = async () => {
  const response = await Api.get('inventory')
  inventories.value = response.data
  return response
}

export const storeInventory = async () => {
  const response = await Api.post('inventory') //Return ID inventory
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
