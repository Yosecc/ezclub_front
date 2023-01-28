import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f5864657.js";import{_ as A}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{d as a,o as s,r as g,h as l,i as t,K as o,l as i,L as B,k as Q,G as n,O as r,a8 as d,b as I,a2 as C,F as E,W as c,a9 as p}from"./vendor.3e3390b7.js";import{_ as u}from"./MinimalLayout.vue_vue&type=script&setup=true&lang.8edf9785.js";import{_ as m}from"./logo_negative.99437a85.js";import{A as D,a as w,b as V,n as y,p as Y,h as G}from"./index.20a0a132.js";import{p as f}from"./sidebarLayoutState.46d3c8c9.js";import"./V-Control.c2f9b0a5.js";import"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.cdaee806.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.b240dd4f.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.28542c83.js";import"./V-Card.vue_vue&type=script&setup=true&lang.0dc079c3.js";import"./V-Placeload.f3ddf6cd.js";const v={class:"d-flex justify-content-center flex-column mt-4 mb-6"},h={key:0,id:"pizarra"},U={class:"d-flex justify-content-center mt-4"},K=n(" Reset "),M=n(" Sign and send ");var k=a({expose:[],props:{isdisabled:{type:Boolean,default:!1}},emits:["onFirma","onReset"],setup(e,{emit:a}){let n,r,d=[],I=0,C=0,E=!1,c=0,p=0;s((()=>{u()}));const u=()=>{n=document.querySelector("#pizarra"),r=n.getBoundingClientRect(),I=r.x,C=r.y,n.width=300,n.height=300,n.addEventListener("mousedown",m,!1),n.addEventListener("mousemove",w,!1),n.addEventListener("mouseup",V,!1),n.addEventListener("touchstart",m,!1),n.addEventListener("touchmove",w,!1)},m=()=>{E=!0,d.push([])},D=()=>{d[d.length-1].push({x:c,y:p})},w=e=>{if(e.preventDefault(),E){let A=n.getContext("2d");A.lineJoin=A.lineCap="round",A.lineWidth=1,A.strokeStyle="#000",null==e.changedTouches?(c=e.layerX,p=e.layerY):(c=e.changedTouches[0].pageX-I,p=e.changedTouches[0].pageY-C),D(),A.beginPath(),d.forEach((function(e){A.moveTo(e[0].x,e[0].y),e.forEach((function(e,a){A.lineTo(e.x,e.y)}))})),A.stroke()}},V=()=>{E=!1,D()},y=()=>{a("onFirma",n.toDataURL("image/png",1))},Y=g(!0),G=()=>{a("onReset")};return(a,s)=>{const g=A;return l(),t("div",v,[Y.value?(l(),t("canvas",h)):o("",!0),i("div",null,[B(a.$slots,"default")]),i("div",U,[i(g,{color:"primary",onClick:G,bold:"",raised:"",outlined:"",class:"mr-6"},{default:Q((()=>[K])),_:1}),i(g,{disabled:e.isdisabled,color:"success",onClick:y,bold:"",raised:""},{default:Q((()=>[M])),_:1},8,["disabled"])])])}}});const b=g([{typeInput:"text",name:"name",placeholder:"First Name",model:"",required:!0,class:"is-6",isLabel:!0},{typeInput:"text",name:"last_name",placeholder:"Last Name",model:"",required:!0,class:"is-6",isLabel:!0},{typeInput:"email",name:"mail",placeholder:"Email",model:"",required:!0,class:"is-6",isLabel:!0},{typeInput:"tel",name:"phone",placeholder:"Phone Numbers",model:"",required:!0,class:"is-6",isLabel:!0,mask:"(###) ###-####"},{typeInput:"textarea",name:"address",placeholder:"Address",model:"",required:!0,class:"is-12",isLabel:!0},{typeInput:"selectData",name:"dicipline_id",placeholder:"Dicipline",model:"",required:!0,class:"is-12",isLabel:!0}]),L={class:"page-content-inner mb-6"},J=i("img",{src:m,width:"250",class:"d-block mr-auto ml-auto py-6",alt:""},null,-1),S={class:"form-outer"},q=i("div",{class:"form-header-inner"},[i("div",{class:"left"},[i("h3",null,"Sign Waiver")])],-1),O={class:"form-body mb-6"},F={key:0},W=n(" Continue "),j={key:1},x={class:"d-flex justify-content-between"},Z=i("p",{class:"title is-6 mt-2"},"Please sign in the box below",-1),R=n(" Go back "),T={class:"d-flex justify-content-center my-4"},P={for:"tc",class:"d-flex"},_={class:"ml-3"},H=n(" I have read and accepted the ");var z=a({expose:[],setup(a){f.value="Waiver",r({title:"Waiver"}),g(""),g(""),g(""),g(new Date);const{y:B}=d(),n=I((()=>B.value>30)),m=g(!1),v=g(!1),h=e=>{if(""==e||"data:image/png;base64,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"==e)return void alert("error signing. try again");if(!z.value)return void y.error("Please confirm that you have read and accepted the terms and conditions");let A=Y(b.value);G.value||(A.firma=e,v.value=!0,(async e=>await D.post("jornada",e))(A).then((e=>{y.success(e.data.message),setTimeout((()=>{window.location.reload()}),2e3)})).catch((e=>{for(var A in v.value=!1,e.response.data)e.response.data[A].forEach((e=>{y.error(`${A}: ${e}`)}))})))},U=()=>{Y(b.value),G.value||(m.value=!0)};s((()=>{(async()=>(await D.get("jornada/getDiciplines")).data)().then((e=>{w(b,"dicipline_id",e)}))}));const K=g(!0),M=()=>{K.value=!1,setTimeout((()=>{K.value=!0}),1)},z=g(!1);return(a,s)=>{const g=e,B=A,r=k,d=u;return l(),t(d,null,{default:Q((()=>[i("div",L,[J,i("form",{class:"form-layout",onSubmit:s[3]||(s[3]=C((()=>{}),["prevent"]))},[i("div",S,[i("div",{class:[[E(n)&&"is-stuck"],"form-header stuck-header"]},[q],2),i("div",O,[m.value?o("",!0):(l(),t("div",F,[i(g,{"inputs-step":E(b)},null,8,["inputs-step"]),i(B,{color:"primary",onClick:U,bold:"",raised:""},{default:Q((()=>[W])),_:1})])),m.value?(l(),t("div",j,[i("div",x,[Z,i(B,{color:"info",size:"small",outlined:"",onClick:s[1]||(s[1]=e=>m.value=!1)},{default:Q((()=>[R])),_:1})]),K.value?(l(),t(r,{key:0,onOnFirma:h,onOnReset:M,isdisabled:v.value},{default:Q((()=>[i("div",T,[i("label",P,[c(i("input",{type:"checkbox",id:"tc","onUpdate:modelValue":s[2]||(s[2]=e=>z.value=e)},null,512),[[p,z.value]]),i("p",_,[H,i("a",{href:`${E(V)}jornada/waiver`,target:"_blank"},"terms and conditions",8,["href"])])])])])),_:1},8,["isdisabled"])):o("",!0)])):o("",!0)])])],32)])])),_:1})}}});export default z;
