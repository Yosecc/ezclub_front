import type { Chart } from 'billboard.js'
import { themeColors } from '/@src/utils/themeColors'
import { bar } from 'billboard.js'

export const options = {
  data: {
    type: bar(),
    columns: [],
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
  size: {
    height: 280,
  },
  padding: {
    bottom: 20,
  },
  title: {
    text: '',
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
}

export const onReady = (billboard: Chart) => {
  setTimeout(() => {
    // billboard.load({
    //   columns: [['data3', 130, -150, 200, 300, -200, 100]],
    // })
  }, 1000)
}