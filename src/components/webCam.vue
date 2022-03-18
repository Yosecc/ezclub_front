<script setup lang="ts">
import { ref, defineProps, defineEmit, watch, onMounted } from 'vue'

const emit = defineEmit(['changeShowModal', 'takePhoto'])

const props = defineProps({
  modal: {
    type: Boolean,
    default: false,
  },
  keyModal: {
    type: String,
  },
})
const show = ref(props.modal)
watch(
  () => props.modal,
  (to) => {
    show.value = to
    if (to) {
      mountedCamera()
    } else {
      navigator.getMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia

      navigator.getMedia(
        {
          video: true,
          audio: false,
        },
        function (stream) {
          stream.getTracks()[0].stop()
        },
        function (err) {}
      )
    }
  }
)
const closeModal = () => {
  show.value = false
  emit('changeShowModal', show.value)
}

const photoTake = ref(null)
import { imgdefault } from '/@src/data/image_default.ts'

const mountedCamera = () => {
  var streaming = false,
    video = document.querySelector(`#video-${props.keyModal}`),
    canvas = document.querySelector(`#canvas-${props.keyModal}`),
    photo = document.querySelector(`#photo-${props.keyModal}`),
    startbutton = document.querySelector(`#startbutton-${props.keyModal}`),
    width = 320,
    height = 0

  navigator.getMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia

  photo.width = 200
  photo.src = imgdefault

  navigator.getMedia(
    {
      video: true,
      audio: false,
    },
    function (stream) {
      if (navigator.mozGetUserMedia) {
        video.srcObject = stream
      } else {
        video.srcObject = stream
      }
      video.play()
    },
    function (err) {
      console.log('An error occured! ' + err)
    }
  )

  video.addEventListener(
    'canplay',
    function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width)
        video.setAttribute('width', width)
        video.setAttribute('height', height)
        canvas.setAttribute('width', width)
        canvas.setAttribute('height', height)

        streaming = true
      }
    },
    false
  )

  function takepicture() {
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d').drawImage(video, 0, 0, width, height)
    var data = canvas.toDataURL('image/png')
    photo.setAttribute('src', data)
    photo.width = width
    photoTake.value = data
    const audio = document.getElementById('audiocamara')
    audio.play()
  }

  startbutton.addEventListener(
    'click',
    function (ev) {
      takepicture()
      ev.preventDefault()
    },
    false
  )
}

const confirm = () => {
  emit('takePhoto', photoTake)
  closeModal()
}
</script>

<template>
  <div>
    <V-Modal :open="show" actions="center" @close="closeModal">
      <template #content>
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <video :id="`video-${keyModal}`"></video>
          <V-Button
            color="info"
            class="my-4"
            :id="`startbutton-${keyModal}`"
            raised
            >Take Photo</V-Button
          >
          <canvas style="display: none" :id="`canvas-${keyModal}`"></canvas>
          <img :src="imgdefault" :id="`photo-${keyModal}`" alt="photo" />
          <audio style="display: none" :id="`audiocamara-${keyModal}`" controls>
            <source type="audio/mpeg" src="/public/sonidos/camara.mp3" />
          </audio>
        </div>
      </template>
      <template #action>
        <V-Button @click="confirm" color="primary" raised>Confirm</V-Button>
      </template>
    </V-Modal>
  </div>
</template>

<style lang="scss"></style>
