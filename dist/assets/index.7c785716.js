var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,l)=>{for(var u in l||(l={}))a.call(l,u)&&n(e,u,l[u]);if(t)for(var u of t(l))s.call(l,u)&&n(e,u,l[u]);return e};import{_ as u}from"./V-Avatar.vue_vue&type=script&setup=true&lang.0d774617.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.4216e99a.js";import{c as r,f as i,h as p,j as c,_ as d,k as v,m,e as b,b as f}from"./Companies.3fb82902.js";import{b as y,p as g,h as _,n as j,a as h,s as x}from"./index.1c4602e1.js";import{d as C,r as w,c as S,o as V,h as I,j as L,k as P,D as k,F as $,O as A,P as D,a2 as E,E as z,I as O,G as M,Q as T,R as F,L as N}from"./vendor.020847a3.js";import{_ as R}from"./formLayaut.vue_vue&type=style&index=0&lang.853d6f33.js";import{_ as q}from"./V-Tag.vue_vue&type=script&setup=true&lang.8ca56bab.js";import{_ as B}from"./V-Button.vue_vue&type=script&setup=true&lang.a2676413.js";import{_ as G}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.02a6ae8d.js";import{p as Q}from"./sidebarLayoutState.b80e4aa7.js";import{g as U,c as H,a as J,s as K,b as W,d as X}from"./config.569250df.js";import"./V-Control.d0a1f920.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6be6c11f.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.b2bcd2ae.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.27893404.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a4ce6817.js";import"./V-Placeload.643ab16e.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.4942b14b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7e9c5294.js";import"./useDropdown.dab445c8.js";import"./V-Dropdown.c24aed71.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a38ed7e8.js";import"./activePanelState.570bd0f8.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6b6e3edd.js";import"./V-Message.vue_vue&type=script&setup=true&lang.7bfdd0eb.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.0dd88ca7.js";import"./navbarLayoutState.f8e26459.js";import"./video.f966c499.js";import"./darkModeState.1bd2c1f2.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cf85c95a.js";import"./AnimatedLogo.d1752403.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33a8aac4.js";import"./V-Block.vue_vue&type=script&setup=true&lang.e07d9ced.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.57cbc3a5.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.f1fbccad.js";const Y={class:"d-flex"},Z={class:"ml-3"},ee={class:"title is-4 is-narrow"},te={class:"w-100 mt-5"},ae=P("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var se=C({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:t}){const a=[{name:"Club Information",component:"clubInformation"},{name:"Club Contact",component:"clubRepresentatives"},{name:"Club Locations",component:"clubLocation"}],s=w(0),n=w(null),l=S((()=>null!=a[s.value]?a[s.value].component:n.value));return(e,n)=>{const i=u,p=o;return V(),I(p,null,{default:L((()=>[P("div",Y,[P(i,{picture:`${k(y)}storage/${k(r).logo}`,size:"large"},null,8,["picture"]),P("div",Z,[P("h2",ee,$(k(r).company_name),1),P("p",null,"Club ID# "+$(k(r).id),1)])]),P("div",te,[P("ul",null,[(V(),I(A,null,D(a,((e,a)=>P("li",{key:`item-${a}`},[P(p,{class:["\n              mb-3\n              item_menu\n              d-flex\n              justify-content-between\n              align-items-center\n            ",s.value==a?"active":""],color:s.value==a?"warning":void 0,elevated:s.value==a,onClick:e=>(e=>{s.value=e,t("changeMenu",l)})(a)},{default:L((()=>[P("p",null,$(e.name),1),ae])),_:2},1032,["class","color","elevated","onClick"])]))),64))])])])),_:1})}}});const ne={class:"mb-4"},le=P("h1",{class:"title is-5 mb-0"},"Club Logo",-1),ue=P("p",null,"This in how club is recognize",-1),oe={class:"d-flex justify-content-center"},re={class:"text-center"},ie=P("h1",{class:"title is-5"},"Club Information",-1);var pe=C({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;E();const a=S((()=>({title:"Club General Information",subtitle:"Edit Club information"})));w([{typeInput:"text",name:"slogan",placeholder:"Slogan text",model:"",required:!0,class:"is-12"}]);const s=()=>{const e=l(l({},g(i.value)),g(p.value)),t=new FormData;for(var a in e)t.append(a,e[a]);_.value||c(t).then((e=>{if(e.data.status)j.success("Succeeded"),r.value=e.data.company;else for(var t in j.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{j.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=u,o=d,c=R;return V(),I(c,{buttons:t.buttons,step:t.step,titles:k(a),onSaveData:s},{default:L((()=>[P("div",ne,[le,ue,P("div",oe,[P("div",re,[P(l,{picture:`${k(y)}storage/${k(r).logo}`,class:"mb-4",size:"xl"},null,8,["picture"]),P(o,{"inputs-step":k(p)},null,8,["inputs-step"])])])]),ie,P(o,{"inputs-step":k(i)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),ce=C({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;E();const a=S((()=>({title:"Club Representatives",subtitle:"Edit Club representative"}))),s=()=>{const e=l({},g(v.value)),t=new FormData;for(var a in e)t.append(a,e[a]);_.value||m(t).then((e=>{if(e.data.status)j.success("Succeeded"),r.value=e.data.company;else for(var t in j.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{j.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=d,u=R;return V(),I(u,{buttons:t.buttons,step:t.step,titles:k(a),onSaveData:s},{default:L((()=>[P(l,{"inputs-step":k(v)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const de={class:"columns is-multiline"},ve={class:"d-flex mb-3"},me={class:"title is-5 mb-1"},be={class:"d-flex justify-content-end align-items-center"},fe=z(" Edit ");var ye=C({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["new"]},step:{type:Number,default:1}},setup(e){const t=e;E();const a=S((()=>({title:"Club Locations",subtitle:"Edit Club Locations"})));return(e,s)=>{const n=q,l=u,r=B,i=o,p=R;return V(),I(p,{buttons:t.buttons,titles:k(a),"new-route":{to:{name:"settings-clubinformation-locations-create"},title:"New Location"}},{default:L((()=>[P("div",de,[(V(!0),I(A,null,D(k(b),((e,t)=>(V(),I("div",{key:t,class:"column is-6"},[P(i,null,{default:L((()=>[P(n,{color:e.status?"success":"danger",label:e.status?"Active":"Inactive",class:"mb-4"},null,8,["color","label"]),P("div",ve,[P(l,{squared:"",class:"mr-3",picture:`${k(y)}storage/${e.image}`,size:"xl"},null,8,["picture"]),P("div",null,[P("p",null,[P("small",null,"# "+$(e.id),1)]),P("h2",me,$(e.name),1),P("p",null,"Address: "+$(e.address),1),P("p",null,"Phone: "+$(e.phone),1)])]),P("div",be,[P(r,{to:{name:"settings-clubinformation-locations-edit",query:{id:e.id}}},{default:L((()=>[fe])),_:2},1032,["to"])])])),_:2},1024)])))),128))])])),_:1},8,["buttons","titles"])}}});const ge={class:"page-content-inner"},_e={key:0,class:"columns is-multiline"},je={class:"column is-3"},he={class:"column is-9"};var xe=C({expose:[],setup(e){Q.value="Club Profile",O({title:"Club"});const t=w(!0);M((()=>{U().then((e=>{h(i,"company_city_id",H.value),h(v,"contact_city_id",H.value)})),J().then((e=>{h(i,"company_state_id",K.value),h(v,"contact_state_id",K.value)})),W().then((e=>{h(i,"company_country_id",X.value),h(v,"contact_country_id",X.value)})),f().then((e=>{for(var a in x(p,"logo",e.data.logo),e.data)x(i,a,e.data[a]),x(v,a,e.data[a]);t.value=!1}))}));const a=w("clubInformation"),s=e=>{a.value=e.value};return(e,n)=>{const l=se,u=pe,o=ce,r=ye,i=G;return V(),I(i,null,{default:L((()=>[P("div",ge,[t.value?N("",!0):(V(),I("div",_e,[P("div",je,[P(l,{onChangeMenu:s})]),P("div",he,[T(P(u,null,null,512),[[F,"clubInformation"==a.value]]),T(P(o,null,null,512),[[F,"clubRepresentatives"==a.value]]),T(P(r,null,null,512),[[F,"clubLocation"==a.value]])])]))])])),_:1})}}});export default xe;
