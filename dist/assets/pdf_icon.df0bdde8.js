<<<<<<< HEAD:dist/assets/pdf_icon.9dd62c67.js
import{d as e,O as t,ad as n,o as i,i as a,j as s,l,S as o}from"./vendor.84e48f7c.js";import{n as r}from"./index.f0c233e7.js";const m=l("table",{style:{width:"60%",margin:"0 auto"},border:"1",cellpadding:"0",width:"500"},[l("tr",null,[l("td",{height:"100",width:"500"},[l("canvas",{id:"cnv",name:"cnv",width:"500",height:"100"})])])],-1),d=l("div",{class:"w-100 mb-4"},[l("canvas",{name:"SigImg",id:"SigImg",width:"500",height:"100"}),l("p",{id:"sigWebVrsnNote",style:{"font-family":"Arial"}})],-1),g={class:"column is-12 mx-auto mb-4"},c={action:"#",name:"FORM1"},u={class:"d-flex column is-6 mx-auto w-100 justify-content-center"},b=l("input",{type:"hidden",name:"bioSigData"},null,-1),p=l("input",{type:"hidden",name:"sigImgData"},null,-1),S=l("textarea",{style:{display:"none"},name:"sigStringData",id:"",cols:"20",rows:"50"},null,-1),f=l("textarea",{style:{display:"none"},name:"sigImageData",id:"",cols:"20",rows:"50"},null,-1),w=l("p",{style:{display:"none"},id:"daysUntilExpElement"},null,-1),h=l("p",{style:{display:"none"},id:"SigWebVersion"},null,-1),y=l("p",{style:{display:"none"},id:"SigWebTabletJSVersion"},null,-1),v=l("p",{style:{display:"none"},id:"CertificateExpirationDate"},null,-1);var x=e({expose:[],emits:["onSignYes","sinFirmar"],setup(e,{emit:x}){var W,I=!1,C=!1,T=!1;t(),n(),i((()=>{if(IsSigWebInstalled()){var e="";try{e=GetSigWebVersion()}catch(a){}if(""!=e){try{T=D(e)}catch(a){}if(T){I=!0;try{var t=GetDaysUntilCertificateExpires();document.getElementById("daysUntilExpElement").innerHTML="SigWeb Certificate expires in "+t+" days."}catch(a){}(i=document.getElementById("sigWebVrsnNote")).innerHTML="SigWeb 1.7.0 installed"}else{try{C=E(e)}catch(a){}if(C)I=!0,(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="SigWeb 1.6.4 is installed. Install the newer version of SigWeb from the following link: ",i.appendChild(n);else(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: ",i.appendChild(n)}}else{var n,i;(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: ",i.appendChild(n)}}else r.error("Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.");window.onbeforeunload=function(e){P(),clearInterval(W),e.preventDefault()}}));const E=e=>!M("1.6.4.0",e),D=e=>!M("1.7.0.0",e),M=(e,t)=>B(e,t),B=(e,t)=>{const n=e.split("."),i=t.split(".");for(var a=0;a<i.length;a++){const e=parseInt(i[a])||0,t=parseInt(n[a])||0;if(e<t)return!0;if(e>t)return!1}return!1},z=e=>{document.FORM1.sigImageData.value=e,x("onSignYes",e)},P=()=>{I?Reset():(ClearTablet(),SetTabletState(0,W))};return(e,t)=>(a(),s(o,null,[m,d,l("div",g,[l("form",c,[l("div",u,[l("input",{id:"SignBtn",name:"SignBtn",type:"button",class:"button v-button is-info text-center mx-auto",value:"Sign",onClick:t[1]||(t[1]=e=>(()=>{if(IsSigWebInstalled()){var e=document.getElementById("cnv").getContext("2d");SetDisplayXSize(500),SetDisplayYSize(100),SetTabletState(0,W),SetJustifyMode(0),ClearTablet(),null==W||(SetTabletState(0,W),W=null),W=SetTabletState(1,e,50)}else alert("Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.")})())}),l("input",{id:"button1",name:"ClearBtn",type:"button",value:"Clear",class:"button v-button is-warning text-center mx-auto",onClick:t[2]||(t[2]=e=>{ClearTablet()})}),l("input",{id:"button2",name:"DoneBtn",type:"button",value:"Done",class:"button v-button is-success text-center mx-auto",onClick:t[3]||(t[3]=e=>{0==NumberOfTabletPoints()?alert("Please sign before continuing"):(SetTabletState(0,W),SetSigCompressionMode(1),document.FORM1.bioSigData.value=GetSigString(),document.FORM1.sigStringData.value=GetSigString(),SetImageXSize(500),SetImageYSize(100),SetImagePenWidth(5),GetSigImageB64(z))})}),l("input",{id:"sinFirmar",name:"sinFirmar",type:"button",value:"No Sign",class:"button v-button",onClick:t[4]||(t[4]=t=>e.$emit("sinFirmar"))})]),b,p,S,f])]),w,h,y,v],64))}}),W="/assets/pdf_icon.59cf58cb.png";export{W as _,x as a};
=======
import{d as e,o as t,h as n,i,l as a,R as s,P as l,ad as o}from"./vendor.4454b83d.js";import{n as r}from"./index.7241005a.js";const m=a("table",{style:{width:"60%",margin:"0 auto"},border:"1",cellpadding:"0",width:"500"},[a("tr",null,[a("td",{height:"100",width:"500"},[a("canvas",{id:"cnv",name:"cnv",width:"500",height:"100"})])])],-1),d=a("div",{class:"w-100 mb-4"},[a("canvas",{name:"SigImg",id:"SigImg",width:"500",height:"100"}),a("p",{id:"sigWebVrsnNote",style:{"font-family":"Arial"}})],-1),g={class:"column is-12 mx-auto mb-4"},u={action:"#",name:"FORM1"},c={class:"d-flex column is-6 mx-auto w-100 justify-content-center"},b=a("input",{type:"hidden",name:"bioSigData"},null,-1),p=a("input",{type:"hidden",name:"sigImgData"},null,-1),S=a("textarea",{style:{display:"none"},name:"sigStringData",id:"",cols:"20",rows:"50"},null,-1),w=a("textarea",{style:{display:"none"},name:"sigImageData",id:"",cols:"20",rows:"50"},null,-1),f=a("p",{style:{display:"none"},id:"daysUntilExpElement"},null,-1),h=a("p",{style:{display:"none"},id:"SigWebVersion"},null,-1),y=a("p",{style:{display:"none"},id:"SigWebTabletJSVersion"},null,-1),v=a("p",{style:{display:"none"},id:"CertificateExpirationDate"},null,-1);var x=e({expose:[],emits:["onSignYes","sinFirmar"],setup(e,{emit:x}){var W,I=!1,C=!1,T=!1;l(),o(),t((()=>{if(IsSigWebInstalled()){var e="";try{e=GetSigWebVersion()}catch(a){}if(""!=e){try{T=D(e)}catch(a){}if(T){I=!0;try{var t=GetDaysUntilCertificateExpires();document.getElementById("daysUntilExpElement").innerHTML="SigWeb Certificate expires in "+t+" days."}catch(a){}(i=document.getElementById("sigWebVrsnNote")).innerHTML="SigWeb 1.7.0 installed"}else{try{C=E(e)}catch(a){}if(C)I=!0,(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="SigWeb 1.6.4 is installed. Install the newer version of SigWeb from the following link: ",i.appendChild(n);else(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: ",i.appendChild(n)}}else{var n,i;(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: ",i.appendChild(n)}}else r.error("Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.");window.onbeforeunload=function(e){P(),clearInterval(W),e.preventDefault()}}));const E=e=>!M("1.6.4.0",e),D=e=>!M("1.7.0.0",e),M=(e,t)=>B(e,t),B=(e,t)=>{const n=e.split("."),i=t.split(".");for(var a=0;a<i.length;a++){const e=parseInt(i[a])||0,t=parseInt(n[a])||0;if(e<t)return!0;if(e>t)return!1}return!1},z=e=>{document.FORM1.sigImageData.value=e,x("onSignYes",e)},P=()=>{I?Reset():(ClearTablet(),SetTabletState(0,W))};return(e,t)=>(n(),i(s,null,[m,d,a("div",g,[a("form",u,[a("div",c,[a("input",{id:"SignBtn",name:"SignBtn",type:"button",class:"button v-button is-info text-center mx-auto",value:"Sign",onClick:t[1]||(t[1]=e=>(()=>{if(IsSigWebInstalled()){var e=document.getElementById("cnv").getContext("2d");SetDisplayXSize(500),SetDisplayYSize(100),SetTabletState(0,W),SetJustifyMode(0),ClearTablet(),null==W||(SetTabletState(0,W),W=null),W=SetTabletState(1,e,50)}else alert("Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.")})())}),a("input",{id:"button1",name:"ClearBtn",type:"button",value:"Clear",class:"button v-button is-warning text-center mx-auto",onClick:t[2]||(t[2]=e=>{ClearTablet()})}),a("input",{id:"button2",name:"DoneBtn",type:"button",value:"Done",class:"button v-button is-success text-center mx-auto",onClick:t[3]||(t[3]=e=>{0==NumberOfTabletPoints()?alert("Please sign before continuing"):(SetTabletState(0,W),SetSigCompressionMode(1),document.FORM1.bioSigData.value=GetSigString(),document.FORM1.sigStringData.value=GetSigString(),SetImageXSize(500),SetImageYSize(100),SetImagePenWidth(5),GetSigImageB64(z))})}),a("input",{id:"sinFirmar",name:"sinFirmar",type:"button",value:"No Sign",class:"button v-button",onClick:t[4]||(t[4]=t=>e.$emit("sinFirmar"))})]),b,p,S,w])]),f,h,y,v],64))}}),W="/assets/pdf_icon.59cf58cb.png";export{W as _,x as a};
>>>>>>> cc318336e8fe8c30103ffa846213b641829647f3:dist/assets/pdf_icon.df0bdde8.js
