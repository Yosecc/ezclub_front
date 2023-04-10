import type { Chart } from 'billboard.js'
import { themeColors } from '/@src/utils/themeColors'
import { pie, bar } from 'billboard.js'
import { reactive, ref } from 'vue'

export const dataGenero: any = (data: object) => {
  const arr = []

  for (const e in data) {
    let i = e
    if (i == '') {
      i = 'n/a'
    }
    arr.push([i, data[e]])
  }

  return arr
}

export const dataEdades: any = (data: object) => {
  let arr = []
  const x = ['x']
  const data1 = ['age']
  for (const e in data) {
    let i = e
    if (i == '') {
      i = 0
    }
    x.push(i)
    data1.push(data[e].count)
  }

  arr = [x, data1]
  return arr
}

export const dataEdadesRangos: any = (data: object) => {
  const arr = []

  for (const e in data) {
    const min = data[e].min
    const max = data[e].max
    const count_members = data[e].count_members

    const str = min + '-' + max

    arr.push([str, count_members])
  }

  return arr
}

export const dataNew = ref([
  ['Male', 30],
  ['Female', 28],
])

export const options = {
  data: {
    columns: [],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple,
      setosa: themeColors.orange,
      versicolor: themeColors.purple,
      virginica: themeColors.success,
    },
    type: pie(),
    onclick: (data: number, index: number) => {
      console.log('[pieSimple] onclick', data, index)
    },
    onover: (data: number, index: number) => {
      console.log('[pieSimple] onover', data, index)
    },
    onout: (data: number, index: number) => {
      console.log('[pieSimple] onout', data, index)
    },
  },
  size: {
    height: 280,
  },
  padding: {
    bottom: 20,
  },
  title: {
    text: 'Pie Chart',
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
  billboard.load({
    columns: dataNew.value,
  })
}

export const optionsBar = {
  data: {
    x: 'x',
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
}
