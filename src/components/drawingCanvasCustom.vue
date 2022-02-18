<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, watch, ref, computed, defineEmit } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Api } from '/@src/services'

const emit = defineEmit(['onSignYes'])

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
    alert(
      'Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.'
    )
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
  <table border="1" cellpadding="0" width="500">
    <tr>
      <td height="100" width="500">
        <canvas id="cnv" name="cnv" width="500" height="100"></canvas>
      </td>
    </tr>
  </table>

  <BR />
  <canvas name="SigImg" id="SigImg" width="500" height="100"></canvas>
  <p id="sigWebVrsnNote" style="font-family: Arial"></p>

  <form action="#" name="FORM1">
    <p>
      <input
        id="SignBtn"
        name="SignBtn"
        type="button"
        value="Sign"
        @click="onSign()"
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <input
        id="button1"
        name="ClearBtn"
        type="button"
        value="Clear"
        @@click="onClear()"
      />&nbsp;&nbsp;&nbsp;&nbsp;

      <input
        id="button2"
        name="DoneBtn"
        type="button"
        value="Done"
        @click="onDone()"
      />&nbsp;&nbsp;&nbsp;&nbsp;

      <INPUT t-y-p-e="HIDDEN" n-a-m-e="bioSigData" />
      <INPUT t-y-p-e="HIDDEN" n-a-m-e="sigImgData" />
      <INPUT type="HIDDEN" name="bioSigData" />
      <INPUT type="HIDDEN" name="sigImgData" />
      <BR />
      <BR />
      <TEXTAREA n-a-m-e="sigStringData" r-o-w-s="20" c-o-l-s="50"
        >SigString:
      </TEXTAREA>
      <TEXTAREA n-a-m-e="sigImageData" r-o-w-s="20" c-o-l-s="50"
        >Base64 String:
      </TEXTAREA>
      <TEXTAREA name="sigStringData" rows="20" cols="50">SigString: </TEXTAREA>
      <TEXTAREA name="sigImageData" rows="20" cols="50"
        >Base64 String:
      </TEXTAREA>
    </p>
  </form>

  <br /><br />
  <p id="daysUntilExpElement"></p>
  <p id="SigWebVersion"></p>
  <p id="SigWebTabletJSVersion"></p>
  <p id="CertificateExpirationDate"></p>
</template>
