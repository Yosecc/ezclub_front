var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,l)=>{for(var r in l||(l={}))a.call(l,r)&&n(e,r,l[r]);if(t)for(var r of t(l))s.call(l,r)&&n(e,r,l[r]);return e};import{_ as r}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bdc086ca.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.c40c0974.js";import{d as u,r as i,b as p,o as c,i as d,j as m,H as v,k as b,E as f,G as y,S as g,U as _,a6 as j,F as h,P as C,I as x,W as w,X as S}from"./vendor.01c5c571.js";import{c as V,f as P,h as L,j as k,k as I,m as $,e as A,b as E}from"./Companies.6a501d7e.js";import{b as z,p as D,h as O,n as M,a as F,s as N}from"./index.ac5a5b37.js";import{_ as q}from"./inputsLayaut.vue_vue&type=style&index=0&lang.67fcb901.js";import{_ as B}from"./formLayaut.vue_vue&type=style&index=0&lang.da5097dd.js";import{_ as R}from"./V-Tag.vue_vue&type=script&setup=true&lang.a0cbaab0.js";import{_ as T}from"./V-Button.vue_vue&type=script&setup=true&lang.b455daa2.js";import{_ as G}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.177f0718.js";import{p as U}from"./sidebarLayoutState.157f604e.js";import{g as W,c as H,a as X,s as J,b as K,d as Q}from"./config.24c0850c.js";import"./V-Control.a79cbb72.js";import"./V-Field.vue_vue&type=script&setup=true&lang.f41a6402.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e78ec04d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.456f1f93.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.dc692e4a.js";import"./V-Placeload.1d820ea1.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.fbbd0b75.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.9315f184.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ac438191.js";import"./useDropdown.71ab9e78.js";import"./V-Dropdown.85d3f5b7.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.3bbb02a2.js";import"./activePanelState.ee613b81.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0beea281.js";import"./video.61743804.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.37b282ef.js";import"./darkModeState.c7ff6ad3.js";import"./AnimatedLogo.b7a972ed.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.b45d9c72.js";import"./V-Block.vue_vue&type=script&setup=true&lang.3e21cb15.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.1efafbd0.js";import"./userPopovers.f4b9fc60.js";const Y={class:"d-flex"},Z={class:"ml-3"},ee={class:"title is-4 is-narrow"},te={class:"w-100 mt-5"},ae=b("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var se=u({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:t}){const a=[{name:"Club Information",component:"clubInformation"},{name:"Club Contact",component:"clubRepresentatives"},{name:"Club Locations",component:"clubLocation"}],s=i(0),n=i(null),l=p((()=>null!=a[s.value]?a[s.value].component:n.value));return(e,n)=>{const u=r,i=o;return c(),d(i,null,{default:m((()=>[v(" <p>{{ company }}</p> "),b("div",Y,[b(u,{picture:`${f(z)}storage/${f(V).logo}`,size:"large"},null,8,["picture"]),b("div",Z,[b("h2",ee,y(f(V).company_name),1),b("p",null,"Club ID# "+y(f(V).id),1)])]),b("div",te,[b("ul",null,[(c(),d(g,null,_(a,((e,a)=>b("li",{key:`item-${a}`},[b(i,{class:["\r\n              mb-3\r\n              item_menu\r\n              d-flex\r\n              justify-content-between\r\n              align-items-center\r\n            ",s.value==a?"active":""],color:s.value==a?"warning":void 0,elevated:s.value==a,onClick:e=>(e=>{s.value=e,t("changeMenu",l)})(a)},{default:m((()=>[b("p",null,y(e.name),1),ae])),_:2},1032,["class","color","elevated","onClick"])]))),64))])])])),_:1})}}});const ne={class:"mb-4"},le=b("h1",{class:"title is-5 mb-0"},"Club Logo",-1),re=b("p",null,"This in how club is recognize",-1),oe={class:"d-flex justify-content-center"},ue={class:"text-center"},ie=b("h1",{class:"title is-5"},"Club Information",-1);var pe=u({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;j();const a=p((()=>({title:"Club General Information",subtitle:"Edit Club information"})));i([{typeInput:"text",name:"slogan",placeholder:"Slogan text",model:"",required:!0,class:"is-12"}]);const s=()=>{const e=l(l({},D(P.value)),D(L.value)),t=new FormData;for(var a in e)t.append(a,e[a]);O.value||k(t).then((e=>{if(e.data.status)M.success("Succeeded"),V.value=e.data.company;else for(var t in M.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{M.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=r,o=q,u=B;return c(),d(u,{buttons:t.buttons,step:t.step,titles:f(a),onSaveData:s},{default:m((()=>[b("div",ne,[le,re,b("div",oe,[b("div",ue,[b(l,{picture:`${f(z)}storage/${f(V).logo}`,class:"mb-4",size:"xl"},null,8,["picture"]),b(o,{"inputs-step":f(L)},null,8,["inputs-step"])])])]),v(' <div class="mb-4">\r\n      <h1 class="title is-5">Slogan</h1>\r\n      <inputsLayaut\r\n        :inputs-step="slogan"\r\n      />\r\n    </div> '),v("  "),ie,b(o,{"inputs-step":f(P)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),ce=u({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;j();const a=p((()=>({title:"Club Representatives",subtitle:"Edit Club representative"}))),s=()=>{const e=l({},D(I.value)),t=new FormData;for(var a in e)t.append(a,e[a]);O.value||$(t).then((e=>{if(e.data.status)M.success("Succeeded"),V.value=e.data.company;else for(var t in M.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{M.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=q,r=B;return c(),d(r,{buttons:t.buttons,step:t.step,titles:f(a),onSaveData:s},{default:m((()=>[b(l,{"inputs-step":f(I)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const de={class:"columns is-multiline"},me={class:"d-flex mb-3"},ve={class:"title is-5 mb-1"},be={class:"d-flex justify-content-end align-items-center"},fe=h(" Edit ");var ye=u({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["new"]},step:{type:Number,default:1}},setup(e){const t=e;j();const a=p((()=>({title:"Club Locations",subtitle:"Edit Club Locations"})));return(e,s)=>{const n=R,l=r,u=T,i=o,p=B;return c(),d(p,{buttons:t.buttons,titles:f(a),"new-route":{to:{name:"settings-clubinformation-locations-create"},title:"New Location"}},{default:m((()=>[b("div",de,[(c(!0),d(g,null,_(f(A),((e,t)=>(c(),d("div",{key:t,class:"column is-6"},[b(i,null,{default:m((()=>[b(n,{color:e.status?"success":"danger",label:e.status?"Active":"Inactive",class:"mb-4"},null,8,["color","label"]),b("div",me,[b(l,{squared:"",class:"mr-3",picture:`${f(z)}storage/${e.image}`,size:"xl"},null,8,["picture"]),b("div",null,[b("p",null,[b("small",null,"# "+y(e.id),1)]),b("h2",ve,y(e.name),1),b("p",null,"Address: "+y(e.address),1),b("p",null,"Phone: "+y(e.phone),1),v(' <a target="_blank" :href="location.map">\r\n                <i class="fas fa-map-marker-alt"></i>\r\n                View map\r\n              </a> ')])]),b("div",be,[b(u,{to:{name:"settings-clubinformation-locations-edit",query:{id:e.id}}},{default:m((()=>[fe])),_:2},1032,["to"])])])),_:2},1024)])))),128))])])),_:1},8,["buttons","titles"])}}});const ge={class:"page-content-inner"},_e={key:0,class:"columns is-multiline"},je={class:"column is-3"},he={class:"column is-9"};var Ce=u({expose:[],setup(e){U.value="Club Profile",C({title:"Club"});const t=i(!0);x((()=>{W().then((e=>{F(P,"company_city_id",H.value),F(I,"contact_city_id",H.value)})),X().then((e=>{F(P,"company_state_id",J.value),F(I,"contact_state_id",J.value)})),K().then((e=>{F(P,"company_country_id",Q.value),F(I,"contact_country_id",Q.value)})),E().then((e=>{for(var a in N(L,"logo",e.data.logo),e.data)N(P,a,e.data[a]),N(I,a,e.data[a]);t.value=!1}))}));const a=i("clubInformation"),s=e=>{a.value=e.value};return(e,n)=>{const l=se,r=pe,o=ce,u=ye,i=G;return c(),d(i,null,{default:m((()=>[v(" Content Wrapper "),b("div",ge,[t.value?v("v-if",!0):(c(),d("div",_e,[b("div",je,[b(l,{onChangeMenu:s})]),b("div",he,[w(b(r,null,null,512),[[S,"clubInformation"==a.value]]),w(b(o,null,null,512),[[S,"clubRepresentatives"==a.value]]),v("  <clubPayment\r\n          v-show=\"Component == 'clubPayment'\"\r\n        /> "),v(" <clubSubscription\r\n        v-show=\"Component == 'clubSubscription'\"\r\n        /> "),w(b(u,null,null,512),[[S,"clubLocation"==a.value]])])]))])])),_:1})}}});export default Ce;
