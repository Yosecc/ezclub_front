import{d as e,O as t,a6 as n,I as i,o as a,i as s,k as l,S as o}from"./vendor.01c5c571.js";const r=l("table",{style:{width:"60%",margin:"0 auto"},border:"1",cellpadding:"0",width:"500"},[l("tr",null,[l("td",{height:"100",width:"500"},[l("canvas",{id:"cnv",name:"cnv",width:"500",height:"100"})])])],-1),m=l("div",{class:"w-100 mb-4"},[l("canvas",{name:"SigImg",id:"SigImg",width:"500",height:"100"}),l("p",{id:"sigWebVrsnNote",style:{"font-family":"Arial"}})],-1),d={class:"column is-12 mx-auto mb-4"},g={action:"#",name:"FORM1"},c={class:"d-flex column is-6 mx-auto w-100 justify-content-center"},u=l("input",{type:"hidden",name:"bioSigData"},null,-1),b=l("input",{type:"hidden",name:"sigImgData"},null,-1),p=l("textarea",{style:{display:"none"},name:"sigStringData",id:"",cols:"20",rows:"50"},null,-1),S=l("textarea",{style:{display:"none"},name:"sigImageData",id:"",cols:"20",rows:"50"},null,-1),w=l("p",{style:{display:"none"},id:"daysUntilExpElement"},null,-1),f=l("p",{style:{display:"none"},id:"SigWebVersion"},null,-1),h=l("p",{style:{display:"none"},id:"SigWebTabletJSVersion"},null,-1),y=l("p",{style:{display:"none"},id:"CertificateExpirationDate"},null,-1);var v=e({expose:[],emits:["onSignYes","sinFirmar"],setup(e,{emit:v}){var x,W=!1,I=!1,C=!1;t(),n(),i((()=>{if(IsSigWebInstalled()){var e="";try{e=GetSigWebVersion()}catch(a){}if(""!=e){try{C=E(e)}catch(a){}if(C){W=!0;try{var t=GetDaysUntilCertificateExpires();document.getElementById("daysUntilExpElement").innerHTML="SigWeb Certificate expires in "+t+" days."}catch(a){}(i=document.getElementById("sigWebVrsnNote")).innerHTML="SigWeb 1.7.0 installed"}else{try{I=T(e)}catch(a){}if(I)W=!0,(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="SigWeb 1.6.4 is installed. Install the newer version of SigWeb from the following link: ",i.appendChild(n);else(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: ",i.appendChild(n)}}else{var n,i;(n=document.createElement("a")).href="https://www.topazsystems.com/software/sigweb.exe",n.innerHTML="https://www.topazsystems.com/software/sigweb.exe",(i=document.getElementById("sigWebVrsnNote")).innerHTML="A newer version of SigWeb is available. Please uninstall the currently installed version of SigWeb and then install the new version of SigWeb from the following link: ",i.appendChild(n)}}else alert("Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.");window.onbeforeunload=function(e){z(),clearInterval(x),e.preventDefault()}}));const T=e=>!D("1.6.4.0",e),E=e=>!D("1.7.0.0",e),D=(e,t)=>M(e,t),M=(e,t)=>{const n=e.split("."),i=t.split(".");for(var a=0;a<i.length;a++){const e=parseInt(i[a])||0,t=parseInt(n[a])||0;if(e<t)return!0;if(e>t)return!1}return!1},B=e=>{document.FORM1.sigImageData.value=e,v("onSignYes",e)},z=()=>{W?Reset():(ClearTablet(),SetTabletState(0,x))};return(e,t)=>(a(),s(o,null,[r,m,l("div",d,[l("form",g,[l("div",c,[l("input",{id:"SignBtn",name:"SignBtn",type:"button",class:"button v-button is-info text-center mx-auto",value:"Sign",onClick:t[1]||(t[1]=e=>(()=>{if(IsSigWebInstalled()){var e=document.getElementById("cnv").getContext("2d");SetDisplayXSize(500),SetDisplayYSize(100),SetTabletState(0,x),SetJustifyMode(0),ClearTablet(),null==x||(SetTabletState(0,x),x=null),x=SetTabletState(1,e,50)}else alert("Unable to communicate with SigWeb. Please confirm that SigWeb is installed and running on this PC.")})())}),l("input",{id:"button1",name:"ClearBtn",type:"button",value:"Clear",class:"button v-button is-warning text-center mx-auto","on@click":t[2]||(t[2]=e=>{ClearTablet()})},null,32),l("input",{id:"button2",name:"DoneBtn",type:"button",value:"Done",class:"button v-button is-success text-center mx-auto",onClick:t[3]||(t[3]=e=>{0==NumberOfTabletPoints()?alert("Please sign before continuing"):(SetTabletState(0,x),SetSigCompressionMode(1),document.FORM1.bioSigData.value=GetSigString(),document.FORM1.sigStringData.value=GetSigString(),SetImageXSize(500),SetImageYSize(100),SetImagePenWidth(5),GetSigImageB64(B))})}),l("input",{id:"sinFirmar",name:"sinFirmar",type:"button",value:"No Sign",class:"button v-button",onClick:t[4]||(t[4]=t=>e.$emit("sinFirmar"))})]),u,b,p,S])]),w,f,h,y],64))}}),x="/assets/pdf_icon.59cf58cb.png";export{x as _,v as a};
