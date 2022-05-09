import { Api } from '/@src/services'
import { onMounted, watch, ref, computed } from 'vue'
import { notyf } from '/@src/models/Mixin.ts'

export const memberAccess = ref(null)
export const codebar = ref(null)
export const inputSearchCodebar = ref()

export const searchCodebar = async (event) => {
  if (codebar.value != '') {
    const response = await Api.get(`searchmember/${codebar.value}`)
      .then((response) => {
        if (response.data.status) {
          const audio = document.getElementById('audioSuccess')
          audio.play()
          notyf.success('Access Success')
          memberAccess.value = response.data.member
          codebar.value = ''
        }
      })
      .catch((error) => {
        const audio = document.getElementById('audioFail')
        audio.play()
        codebar.value = ''
        notyf.error(error.response.data.message)
      })
    return response
  }
}
