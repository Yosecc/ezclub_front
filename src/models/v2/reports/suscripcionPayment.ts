import type { Chart } from 'billboard.js'
import { themeColors } from '/@src/utils/themeColors'
import { bar, line } from 'billboard.js'
import { reactive } from 'vue'

export const dataNew = reactive({
  data1: [],
  data2: [],
  x: [],
})

export const options = reactive({
  data: {
    type: bar(),
    types: {
      data1: line(),
      data2: bar(),
    },
    x: 'x',
    columns: [],
    names: {
      data1: 'Subscription',
      data2: 'Amount',
    },
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple,
    },
  },
  bar: {
    width: {
      ratio: 0.5,
    },
  },
  axis: {
    x: {
      type: 'category',
      tick: {
        rotate: 90,
        multiline: false,
        tooltip: true,
      },
      height: 100,
    },
  },
  size: {
    height: 500,
  },
  padding: {
    bottom: 20,
  },
  title: {
    text: 'Bar Chart',
    position: 'top-left',
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20,
    },
  },
  legend: {
    position: 'inset',
  },
})

export const onReady = (billboard: Chart) => {
  // options.axis.x.categories = console.log(dataNew.x)
  // options// alert('aja')
  // setTimeout(() => {
  billboard.load({
    columns: [dataNew.x, dataNew.data1, dataNew.data2],
  })
  // }, 1000)
}
