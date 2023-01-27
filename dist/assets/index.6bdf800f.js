import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.96926cc9.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.ab2fa679.js";import{d as t,o as s,r as i,h as l,i as n,K as o,l as r,k as u,G as d,O as c,a8 as p,b as m,a2 as v,F as f}from"./vendor.f6529162.js";import{_ as y}from"./MinimalLayout.vue_vue&type=script&setup=true&lang.6759c2e1.js";import{_ as h}from"./logo_negative.99437a85.js";import{A as b,a as g,p as _,h as j,n as x}from"./index.b33f7ff7.js";import{p as k}from"./sidebarLayoutState.c8581ef5.js";import"./V-Control.06dbdf31.js";import"./V-Field.vue_vue&type=script&setup=true&lang.2ea96b7e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.5bd41c94.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.0af97236.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.eac658fd.js";import"./V-Card.vue_vue&type=script&setup=true&lang.8f5cfc5d.js";import"./V-Placeload.fcff0d17.js";const L={class:"d-flex justify-content-center flex-column mt-4 mb-6"},w={key:0,id:"pizarra"},C={class:"d-flex justify-content-center mt-4"},E=d(" Reset "),S=d(" Sign and send ");var V=t({expose:[],props:{isdisabled:{type:Boolean,default:!1}},emits:["onFirma","onReset"],setup(e,{emit:t}){let d,c,p=[],m=0,v=0,f=!1,y=0,h=0;s((()=>{b()}));const b=()=>{d=document.querySelector("#pizarra"),c=d.getBoundingClientRect(),m=c.x,v=c.y,d.width=300,d.height=300,d.addEventListener("mousedown",g,!1),d.addEventListener("mousemove",j,!1),d.addEventListener("mouseup",x,!1),d.addEventListener("touchstart",g,!1),d.addEventListener("touchmove",j,!1)},g=()=>{f=!0,p.push([])},_=()=>{p[p.length-1].push({x:y,y:h})},j=e=>{if(e.preventDefault(),f){let a=d.getContext("2d");a.lineJoin=a.lineCap="round",a.lineWidth=1,a.strokeStyle="#000",null==e.changedTouches?(y=e.layerX,h=e.layerY):(y=e.changedTouches[0].pageX-m,h=e.changedTouches[0].pageY-v),_(),a.beginPath(),p.forEach((function(e){a.moveTo(e[0].x,e[0].y),e.forEach((function(e,t){a.lineTo(e.x,e.y)}))})),a.stroke()}},x=()=>{f=!1,_()},k=()=>{t("onFirma",d.toDataURL("image/png",1))},V=i(!0),q=()=>{t("onReset")};return(t,s)=>{const i=a;return l(),n("div",L,[V.value?(l(),n("canvas",w)):o("",!0),r("div",C,[r(i,{color:"primary",onClick:q,bold:"",raised:"",outlined:"",class:"mr-6"},{default:u((()=>[E])),_:1}),r(i,{disabled:e.isdisabled,color:"success",onClick:k,bold:"",raised:""},{default:u((()=>[S])),_:1},8,["disabled"])])])}}});const q=i([{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-6",isLabel:!0},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-6",isLabel:!0},{typeInput:"email",name:"mail",placeholder:"Email",model:"",required:!0,class:"is-6",isLabel:!0},{typeInput:"tel",name:"phone",placeholder:"Phone Numbers",model:"",required:!0,class:"is-6",isLabel:!0,mask:"(###) ###-####"},{typeInput:"textarea",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0},{typeInput:"selectData",name:"dicipline_id",placeholder:"Dicipline",model:"",required:!0,class:"is-12",isLabel:!0}]),T={class:"page-content-inner mb-6"},D=r("img",{src:h,width:"250",class:"d-block mr-auto ml-auto py-6",alt:""},null,-1),F={class:"form-outer"},I=r("div",{class:"form-header-inner"},[r("div",{class:"left"},[r("h3",null,"Sign Weiver")])],-1),R={class:"form-body mb-6"},P={key:0},W=d(" Continue "),z={key:1},B={class:"d-flex justify-content-between"},N=r("p",{class:"title is-6 mt-2"},"Please sign in the box below",-1),O=d(" Go back ");var A=t({expose:[],setup(t){k.value="Weiver",c({title:"Weiver"}),i(""),i(""),i(""),i(new Date);const{y:d}=p(),h=m((()=>d.value>30)),L=i(!1),w=i(!1),C=e=>{if(""==e)return void alert("error signing. try again");let a=_(q.value);j.value||(a.firma=e,w.value=!0,(async e=>await b.post("jornada",e))(a).then((e=>{x.success(e.data.message),setTimeout((()=>{window.location.reload()}),2e3)})).catch((e=>{for(var a in w.value=!1,e.response.data)e.response.data[a].forEach((e=>{x.error(`${a}: ${e}`)}))})))},E=()=>{_(q.value),j.value||(L.value=!0)};s((()=>{(async()=>(await b.get("jornada/getDiciplines")).data)().then((e=>{g(q,"dicipline_id",e)}))}));const S=i(!0),A=()=>{S.value=!1,setTimeout((()=>{S.value=!0}),1)};return(t,s)=>{const i=e,d=a,c=V,p=y;return l(),n(p,null,{default:u((()=>[r("div",T,[D,r("form",{class:"form-layout",onSubmit:s[2]||(s[2]=v((()=>{}),["prevent"]))},[r("div",F,[r("div",{class:[[f(h)&&"is-stuck"],"form-header stuck-header"]},[I],2),r("div",R,[L.value?o("",!0):(l(),n("div",P,[r(i,{"inputs-step":f(q)},null,8,["inputs-step"]),r(d,{color:"primary",onClick:E,bold:"",raised:""},{default:u((()=>[W])),_:1})])),L.value?(l(),n("div",z,[r("div",B,[N,r(d,{color:"info",size:"small",outlined:"",onClick:s[1]||(s[1]=e=>L.value=!1)},{default:u((()=>[O])),_:1})]),S.value?(l(),n(c,{key:0,onOnFirma:C,onOnReset:A,isdisabled:w.value},null,8,["isdisabled"])):o("",!0)])):o("",!0)])])],32)])])),_:1})}}});export default A;
