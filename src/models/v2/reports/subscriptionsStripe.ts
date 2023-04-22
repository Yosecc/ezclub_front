import type { Chart } from 'billboard.js'
import { themeColors } from '/@src/utils/themeColors'
import { bar, line } from 'billboard.js'
import { reactive, ref, computed } from 'vue'
import { moneda } from '/@src/models/Mixin'

export const dataStripe = reactive({
  data: {},
  count: null,
  amount: null,
})

export const statusNexPayments = () => {
  return dataStripe.value
}

export const dataFechas: any = (data: object) => {
  const arr = []

  for (const i in data) {
    let r = i

    if (i == '') {
      r = 'n/a'
    }
    arr.push(r)
  }

  return arr
}

export const dataAmount: any = (data: object) => {
  const arr = []

  for (const i in data) {
    arr.push(data[i].amount / 100)
  }

  return arr
}

export const dataCount: any = (data: object) => {
  const arr = []

  for (const i in data) {
    arr.push(data[i].count)
  }

  return arr
}

export const options = {
  data: {
    type: 'bar',
    types: {
      data2: bar(),
      data1: line(),
    },
    x: 'x',
    columns: [],
    names: {
      data2: 'Subscriptions',
      data1: 'Amount',
    },
    labels: {
      format: {
        data1: function (x) {
          return d3.format('$')(x)
        },
      },
    },
    // colors: {
    //   data1: themeColors.accent,
    //   data2: themeColors.primary,
    //   data3: themeColors.orange,
    //   data4: themeColors.purple,
    // },
  },
  bar: {
    width: {
      ratio: 0.5,
    },
  },
  axis: {
    rotated: true,
    x: {
      type: 'category',
      tick: {
        rotate: 75,
        multiline: false,
        tooltip: true,
      },
      height: 130,
    },
  },
  //   size: {
  //     height: 500,
  //   },
  //   padding: {
  //     bottom: 20,
  //   },
  title: {
    text: 'Subscriptions to next payment',
    position: 'top-left',
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20,
    },
  },
  legend: {
    // position: 'inset',
  },
}

export const onReady = (billboard: Chart) => {
  console.log('se ejecuta')
  billboard.load({
    columns: [
      //   [
      //     'x',
      //     'www.somesitename1.com',
      //     'www.somesitename2.com',
      //     'www.somesitename3.com',
      //     'www.somesitename4.com',
      //     'www.somesitename5.com',
      //     'www.somesitename6.com',
      //     'www.somesitename7.com',
      //     'www.somesitename8.com',
      //     'www.somesitename9.com',
      //     'www.somesitename10.com',
      //     'www.somesitename11.com',
      //     'www.somesitename12.com',
      //   ],
      //   ['data1', 90, 100, 140, 200, 100, 400, 90, 100, 140, 200, 100, 400],
    ],
  })
}
