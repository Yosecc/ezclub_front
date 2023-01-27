<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref, onMounted, defineEmit, defineProps } from 'vue'
import { inputs, getDiciplines } from '/@src/models/Weiver'
import { setInputValuesData } from '/@src/models/Mixin'
const emit = defineEmit(['onFirma', 'onReset'])

const props = defineProps({
  isdisabled: {
    type: Boolean,
    default: false,
  },
})

let miCanvas
let lineas = []
let correccionX = 0
let correccionY = 0
let pintarLinea = false

let nuevaPosicionX = 0
let nuevaPosicionY = 0

let posicion

onMounted(() => {
  montaje()
})

const montaje = () => {
  //======================================================================
  // VARIABLES
  //======================================================================

  miCanvas = document.querySelector('#pizarra')

  posicion = miCanvas.getBoundingClientRect()

  correccionX = posicion.x
  correccionY = posicion.y

  miCanvas.width = 300
  miCanvas.height = 300

  //======================================================================
  // EVENTOS
  //======================================================================

  // Eventos raton
  miCanvas.addEventListener('mousedown', empezarDibujo, false)
  miCanvas.addEventListener('mousemove', dibujarLinea, false)
  miCanvas.addEventListener('mouseup', pararDibujar, false)

  // Eventos pantallas táctiles
  miCanvas.addEventListener('touchstart', empezarDibujo, false)
  miCanvas.addEventListener('touchmove', dibujarLinea, false)
}
//======================================================================
// FUNCIONES
//======================================================================

/**
 * Funcion que empieza a dibujar la linea
 */
const empezarDibujo = () => {
  pintarLinea = true
  lineas.push([])
}

/**
 * Funcion que guarda la posicion de la nueva línea
 */
const guardarLinea = () => {
  lineas[lineas.length - 1].push({
    x: nuevaPosicionX,
    y: nuevaPosicionY,
  })
}

/**
 * Funcion dibuja la linea
 */
const dibujarLinea = (event) => {
  event.preventDefault()
  if (pintarLinea) {
    let ctx = miCanvas.getContext('2d')
    // Estilos de linea
    ctx.lineJoin = ctx.lineCap = 'round'
    ctx.lineWidth = 1
    // Color de la linea
    ctx.strokeStyle = '#000'
    // Marca el nuevo punto
    if (event.changedTouches == undefined) {
      // Versión ratón
      nuevaPosicionX = event.layerX
      nuevaPosicionY = event.layerY
    } else {
      // Versión touch, pantalla tactil
      nuevaPosicionX = event.changedTouches[0].pageX - correccionX
      nuevaPosicionY = event.changedTouches[0].pageY - correccionY
    }
    // Guarda la linea
    guardarLinea()
    // Redibuja todas las lineas guardadas
    ctx.beginPath()
    lineas.forEach(function (segmento) {
      ctx.moveTo(segmento[0].x, segmento[0].y)
      segmento.forEach(function (punto, index) {
        ctx.lineTo(punto.x, punto.y)
      })
    })
    ctx.stroke()
  }
}

/**
 * Funcion que deja de dibujar la linea
 */
const pararDibujar = () => {
  pintarLinea = false
  guardarLinea()
}

const sendFirma = () => {
  emit('onFirma', miCanvas.toDataURL('image/png', 1))
}

const reset = ref(true)
const limpiar = () => {
  emit('onReset')
}
</script>

<template>
  <div class="d-flex justify-content-center flex-column mt-4 mb-6">
    <canvas v-if="reset" id="pizarra"> </canvas>
    <div class="d-flex justify-content-center mt-4">
      <V-Button
        color="primary"
        @click="limpiar"
        bold
        raised
        outlined
        class="mr-6"
      >
        Reset
      </V-Button>
      <V-Button
        :disabled="isdisabled"
        color="success"
        @click="sendFirma"
        bold
        raised
      >
        Sign and send
      </V-Button>
    </div>
  </div>
</template>

<style lang="scss">
canvas {
  width: 300px;
  height: 300px;
  // background-color: #0d0909;
  border: 1px solid black;
  display: block;
  margin: 0 auto;
}
</style>
