import { ref } from 'vue'

export const diferenteCard = ref([{
          typeInput: 'switchEventChange',
          name: 'is_diferent_card',
          values: ['Same Credit Card','Different Credit Cards'],
          model: false
        }])


export const paymentData = ref([
          
          {
            typeInput: 'checkbox',
            name: 'swipe',
            placeholder: 'Swipe Credit Card',
            model: []
          },
          {
            typeInput: 'number',
            name:'card_number',
            placeholder: 'Credit Card Number',
            model: ''
          },
          {
            typeInput: 'text',
            name:'date_expired',
            placeholder: 'Expiration Date',
            model: ''
          },
          {
            typeInput: 'number',
            name:'cvv',
            placeholder: 'CVV',
            model: ''
          },
        ])