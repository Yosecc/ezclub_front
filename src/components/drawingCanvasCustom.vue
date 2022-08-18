<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'
import { notyf } from '/@src/models/Mixin.ts'
const emit = defineEmit(['onSignYes', 'sinFirmar'])

var tmr

var resetIsSupported = false
var SigWeb_1_6_4_0_IsInstalled = false //SigWeb 1.6.4.0 and above add the Reset() and GetSigWebVersion functions
var SigWeb_1_7_0_0_IsInstalled = false //SigWeb 1.7.0.0 and above add the GetDaysUntilCertificateExpires() function

const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (IsSigWebInstalled()) {
    var sigWebVer = ''
    try {
      sigWebVer = GetSigWebVersion()
    } catch (err) {}

    if (sigWebVer != '') {
      try {
        SigWeb_1_7_0_0_IsInstalled = isSigWeb_1_7_0_0_Installed(sigWebVer)
      } catch (err) {}
      //if SigWeb 1.7.0.0 is installed, then enable corresponding functionality
      if (SigWeb_1_7_0_0_IsInstalled) {
        resetIsSupported = true
        try {
          var daysUntilCertExpires = GetDaysUntilCertificateExpires()
          document.getElementById('daysUntilExpElement').innerHTML =
            'SigWeb Certificate expires in ' + daysUntilCertExpires + ' days.'
        } catch (err) {}
        var note = document.getElementById('sigWebVrsnNote')
        note.innerHTML = 'SigWeb 1.7.0 installed'
      } else {
        try {
          SigWeb_1_6_4_0_IsInstalled = isSigWeb_1_6_4_0_Installed(sigWebVer)
          //if SigWeb 1.6.4.0 is installed, then enable corresponding functionality
        } catch (err) {}
        if (SigWeb_1_6_4_0_IsInstalled) {
          resetIsSupported = true
          var sigweb_link = document.createElement('a')
          sigweb_link.href = 'https://www.topazsystems.com/software/sigweb.exe'
          sigweb_link.innerHTML =
            'https://www.topazsystems.com/software/sigweb.exe'

          var note = document.getElementById('sigWebVrsnNote')
          note.innerHTML =
            'SigWeb 1.6.4 is installed. Install the newer version of SigWeb from the following link: '
          note.appendChild(sigweb_link)
        } else {
          var sigweb_link = document.createElement('a')
          sigweb_link.href = 'https://www.topazsystems.com/software/sigweb.exe'
          sigweb_link.innerHTML =
            'https://www.topazsystems.com/software/sigweb.exe'

          var note = document.getElementById('sigWebVrsnNote')
          note.innerHTML =
            'A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: '
          note.appendChild(sigweb_link)
        }
      }
    } else {
      //Older version of SigWeb installed that does not support retrieving the version of SigWeb (Version 1.6.0.2 and older)
      var sigweb_link = document.createElement('a')
      sigweb_link.href = 'https://www.topazsystems.com/software/sigweb.exe'
      sigweb_link.innerHTML = 'https://www.topazsystems.com/software/sigweb.exe'

      var note = document.getElementById('sigWebVrsnNote')
      note.innerHTML =
        'A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: '
      note.appendChild(sigweb_link)
    }
  } else {
    notyf.error(
      'Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.'
    )
    // alert(

    // )
  }

  //Perform the following actions on
  //  1. Browser Closure
  //  2. Tab Closure
  //  3. Tab Refresh
  window.onbeforeunload = function (evt) {
    close()
    clearInterval(tmr)
    evt.preventDefault() //For Firefox, needed for browser closure
  }
})

const isSigWeb_1_6_4_0_Installed = (sigWebVer) => {
  var minSigWebVersionResetSupport = '1.6.4.0'

  if (isOlderSigWebVersionInstalled(minSigWebVersionResetSupport, sigWebVer)) {
    return false
  }
  return true
}

const isSigWeb_1_7_0_0_Installed = (sigWebVer) => {
  var minSigWebVersionGetDaysUntilCertificateExpiresSupport = '1.7.0.0'

  if (
    isOlderSigWebVersionInstalled(
      minSigWebVersionGetDaysUntilCertificateExpiresSupport,
      sigWebVer
    )
  ) {
    return false
  }
  return true
}

const isOlderSigWebVersionInstalled = (cmprVer, sigWebVer) => {
  return isOlderVersion(cmprVer, sigWebVer)
}

const isOlderVersion = (oldVer, newVer) => {
  const oldParts = oldVer.split('.')
  const newParts = newVer.split('.')
  for (var i = 0; i < newParts.length; i++) {
    const a = parseInt(newParts[i]) || 0
    const b = parseInt(oldParts[i]) || 0
    if (a < b) return true
    if (a > b) return false
  }
  return false
}

const onSign = () => {
  if (IsSigWebInstalled()) {
    var ctx = document.getElementById('cnv').getContext('2d')
    SetDisplayXSize(500)

    SetDisplayYSize(100)

    SetTabletState(0, tmr)

    SetJustifyMode(0)

    ClearTablet()

    if (tmr == null) {
      tmr = SetTabletState(1, ctx, 50)
    } else {
      SetTabletState(0, tmr)
      tmr = null
      tmr = SetTabletState(1, ctx, 50)
    }
  } else {
    alert(
      'Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.'
    )
  }
}

const onClear = () => {
  ClearTablet()
}

const onDone = () => {
  if (NumberOfTabletPoints() == 0) {
    alert('Please sign before continuing')
  } else {
    SetTabletState(0, tmr)
    //RETURN TOPAZ-FORMAT SIGSTRING
    SetSigCompressionMode(1)
    document.FORM1.bioSigData.value = GetSigString()
    document.FORM1.sigStringData.value = GetSigString()
    //this returns the signature in Topaz's own format, with biometric information

    //RETURN BMP BYTE ARRAY CONVERTED TO BASE64 STRING
    SetImageXSize(500)
    SetImageYSize(100)
    SetImagePenWidth(5)
    GetSigImageB64(SigImageCallback)
  }
}

const SigImageCallback = (str) => {
  document.FORM1.sigImageData.value = str
  emit('onSignYes', str)
}

const endDemo = () => {
  ClearTablet()
  SetTabletState(0, tmr)
}

const close = () => {
  if (resetIsSupported) {
    Reset()
  } else {
    endDemo()
  }
}
</script>

<template>
  <table
    style="width: 60%; margin: 0 auto"
    border="1"
    cellpadding="0"
    width="500"
  >
    <tr>
      <td height="100" width="500">
        <canvas id="cnv" name="cnv" width="500" height="100"></canvas>
      </td>
    </tr>
  </table>

  <div class="w-100 mb-4">
    <canvas name="SigImg" id="SigImg" width="500" height="100"></canvas>
    <p id="sigWebVrsnNote" style="font-family: Arial"></p>
  </div>

  <div class="column is-12 mx-auto mb-4">
    <form action="#" name="FORM1">
      <div class="d-flex column is-6 mx-auto w-100 justify-content-center">
        <input
          id="SignBtn"
          name="SignBtn"
          type="button"
          class="button v-button is-info text-center mx-auto"
          value="Sign"
          @click="onSign()"
        />
        <input
          id="button1"
          name="ClearBtn"
          type="button"
          value="Clear"
          class="button v-button is-warning text-center mx-auto"
          @click="onClear()"
        />
        <input
          id="button2"
          name="DoneBtn"
          type="button"
          value="Done"
          class="button v-button is-success text-center mx-auto"
          @click="onDone()"
        />

        <input
          id="sinFirmar"
          name="sinFirmar"
          type="button"
          value="No Sign"
          class="button v-button"
          @click="$emit('sinFirmar')"
        />
      </div>
      <input type="hidden" name="bioSigData" />
      <input type="hidden" name="sigImgData" />

      <textarea
        style="display: none"
        name="sigStringData"
        id=""
        cols="20"
        rows="50"
      ></textarea>
      <textarea
        style="display: none"
        name="sigImageData"
        id=""
        cols="20"
        rows="50"
      ></textarea>
    </form>
  </div>

  <p style="display: none" id="daysUntilExpElement"></p>
  <p style="display: none" id="SigWebVersion"></p>
  <p style="display: none" id="SigWebTabletJSVersion"></p>
  <p style="display: none" id="CertificateExpirationDate"></p>
</template>
