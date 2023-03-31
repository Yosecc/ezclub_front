import { ref } from 'vue'
import { Api } from '/@src/services'

export const syncCards = async (member_id: number) => {
  const response = await Api.post(`v2/stripe/syncCards`, {
    member_id: member_id,
  })
  return response
}

export const syncCardsUser = async (user_id: number) => {
  const response = await Api.post(`v2/stripe/syncCards`, {
    user_id: user_id,
  })
  return response
}

export const getCardsMembersV2 = async (id: number) => {
  const response = await Api.get(`v2/members/cards/${id}`)
  return response
}

export const getCardsuserV2 = async (id: number) => {
  const response = await Api.get(`v2/user/cards/${id}`)
  return response
}

export const getSaldo = async (id: number) => {
  const response = await Api.get(`v2/user/saldo/${id}`)
  return response
}
export const addSaldo = async (id: number) => {
  const response = await Api.post(`v2/user/saldo/add/${id}`)
  return response
}

export const memberProcess = async (data: any) => {
  const response = await Api.post(`v2/members/process`, data)
  return response
}
