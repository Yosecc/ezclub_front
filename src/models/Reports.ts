import { ref, computed } from 'vue'
import { Api } from '/@src/services'

export const reportsState = ref([])

export const reports = computed(() => {
  if (!reportsState.value) {
    return null
  }
  return reportsState.value
})

export const getReports = async (data: object = {}) => {
  const response = await Api.get(`reports/memberships`, data)
  reportsState.value = response.data
  return response
}
