var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,l)=>{for(var r in l||(l={}))a.call(l,r)&&n(e,r,l[r]);if(t)for(var r of t(l))s.call(l,r)&&n(e,r,l[r]);return e};import{_ as r}from"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{d as u,r as i,c,i as p,j as d,k as m,I as v,l as f,F as b,H as y,S as g,U as _,ab as j,G as h,P as C,o as x,W as w,X as S}from"./vendor.b96c0b62.js";import{c as V,h as P,j as L,k,m as I,n as $,f as A,a as z}from"./Companies.cfda0987.js";import{b as D,p as E,h as O,n as M,a as F,s as N}from"./index.65e49cfc.js";import{_ as q}from"./inputsLayaut.vue_vue&type=style&index=0&lang.082bb801.js";import{_ as B}from"./formLayaut.vue_vue&type=style&index=0&lang.c811f515.js";import{_ as R}from"./V-Tag.vue_vue&type=script&setup=true&lang.42120ae5.js";import{_ as T}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as G}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7939d52c.js";import{p as U}from"./sidebarLayoutState.a7097173.js";import{g as W,c as H,a as X,s as J,b as K,d as Q}from"./config.dc81ec17.js";import"./V-Control.9f6b030b.js";import"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.7d0df25a.js";import"./V-Placeload.43c61814.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.72c1da57.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.905c9e6e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ce6cc8c6.js";import"./useDropdown.51b21268.js";import"./V-Dropdown.5a213405.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./activePanelState.a3a15c4d.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.cf9fc2aa.js";import"./video.19485659.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.3bd9126b.js";import"./darkModeState.1cad08fb.js";import"./AnimatedLogo.3baf4ecb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.31d8f19f.js";import"./V-Block.vue_vue&type=script&setup=true&lang.96a9aa0d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.0dc1dec1.js";import"./userPopovers.f4b9fc60.js";const Y={class:"d-flex"},Z={class:"ml-3"},ee={class:"title is-4 is-narrow"},te={class:"w-100 mt-5"},ae=f("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var se=u({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:t}){const a=[{name:"Club Information",component:"clubInformation"},{name:"Club Contact",component:"clubRepresentatives"},{name:"Club Locations",component:"clubLocation"}],s=i(0),n=i(null),l=c((()=>null!=a[s.value]?a[s.value].component:n.value));return(e,n)=>{const u=r,i=o;return p(),d(i,null,{default:m((()=>[v(" <p>{{ company }}</p> "),f("div",Y,[f(u,{picture:`${b(D)}storage/${b(V).logo}`,size:"large"},null,8,["picture"]),f("div",Z,[f("h2",ee,y(b(V).company_name),1),f("p",null,"Club ID# "+y(b(V).id),1)])]),f("div",te,[f("ul",null,[(p(),d(g,null,_(a,((e,a)=>f("li",{key:`item-${a}`},[f(i,{class:["\r\n              mb-3\r\n              item_menu\r\n              d-flex\r\n              justify-content-between\r\n              align-items-center\r\n            ",s.value==a?"active":""],color:s.value==a?"warning":void 0,elevated:s.value==a,onClick:e=>(e=>{s.value=e,t("changeMenu",l)})(a)},{default:m((()=>[f("p",null,y(e.name),1),ae])),_:2},1032,["class","color","elevated","onClick"])]))),64))])])])),_:1})}}});const ne={class:"mb-4"},le=f("h1",{class:"title is-5 mb-0"},"Club Logo",-1),re=f("p",null,"This in how club is recognize",-1),oe={class:"d-flex justify-content-center"},ue={class:"text-center"},ie=f("h1",{class:"title is-5"},"Club Information",-1);var ce=u({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;j();const a=c((()=>({title:"Club General Information",subtitle:"Edit Club information"})));i([{typeInput:"text",name:"slogan",placeholder:"Slogan text",model:"",required:!0,class:"is-12"}]);const s=()=>{const e=l(l({},E(P.value)),E(L.value)),t=new FormData;for(var a in e)t.append(a,e[a]);O.value||k(t).then((e=>{if(e.data.status)M.success("Succeeded"),V.value=e.data.company;else for(var t in M.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{M.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=r,o=q,u=B;return p(),d(u,{buttons:t.buttons,step:t.step,titles:b(a),onSaveData:s},{default:m((()=>[f("div",ne,[le,re,f("div",oe,[f("div",ue,[f(l,{picture:`${b(D)}storage/${b(V).logo}`,class:"mb-4",size:"xl"},null,8,["picture"]),f(o,{"inputs-step":b(L)},null,8,["inputs-step"])])])]),v(' <div class="mb-4">\r\n      <h1 class="title is-5">Slogan</h1>\r\n      <inputsLayaut\r\n        :inputs-step="slogan"\r\n      />\r\n    </div> '),v("  "),ie,f(o,{"inputs-step":b(P)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),pe=u({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;j();const a=c((()=>({title:"Club Representatives",subtitle:"Edit Club representative"}))),s=()=>{const e=l({},E(I.value)),t=new FormData;for(var a in e)t.append(a,e[a]);O.value||$(t).then((e=>{if(e.data.status)M.success("Succeeded"),V.value=e.data.company;else for(var t in M.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{M.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=q,r=B;return p(),d(r,{buttons:t.buttons,step:t.step,titles:b(a),onSaveData:s},{default:m((()=>[f(l,{"inputs-step":b(I)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const de={class:"columns is-multiline"},me={class:"d-flex mb-3"},ve={class:"title is-5 mb-1"},fe={class:"d-flex justify-content-end align-items-center"},be=h(" Edit ");var ye=u({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["new"]},step:{type:Number,default:1}},setup(e){const t=e;j();const a=c((()=>({title:"Club Locations",subtitle:"Edit Club Locations"})));return(e,s)=>{const n=R,l=r,u=T,i=o,c=B;return p(),d(c,{buttons:t.buttons,titles:b(a),"new-route":{to:{name:"settings-clubinformation-locations-create"},title:"New Location"}},{default:m((()=>[f("div",de,[(p(!0),d(g,null,_(b(A),((e,t)=>(p(),d("div",{key:t,class:"column is-6"},[f(i,null,{default:m((()=>[f(n,{color:e.status?"success":"danger",label:e.status?"Active":"Inactive",class:"mb-4"},null,8,["color","label"]),f("div",me,[f(l,{squared:"",class:"mr-3",picture:`${b(D)}storage/${e.image}`,size:"xl"},null,8,["picture"]),f("div",null,[f("p",null,[f("small",null,"# "+y(e.id),1)]),f("h2",ve,y(e.name),1),f("p",null,"Address: "+y(e.address),1),f("p",null,"Phone: "+y(e.phone),1),v(' <a target="_blank" :href="location.map">\r\n                <i class="fas fa-map-marker-alt"></i>\r\n                View map\r\n              </a> ')])]),f("div",fe,[f(u,{to:{name:"settings-clubinformation-locations-edit",query:{id:e.id}}},{default:m((()=>[be])),_:2},1032,["to"])])])),_:2},1024)])))),128))])])),_:1},8,["buttons","titles"])}}});const ge={class:"page-content-inner"},_e={key:0,class:"columns is-multiline"},je={class:"column is-3"},he={class:"column is-9"};var Ce=u({expose:[],setup(e){U.value="Club Profile",C({title:"Club"});const t=i(!0);x((()=>{W().then((e=>{F(P,"company_city_id",H.value),F(I,"contact_city_id",H.value)})),X().then((e=>{F(P,"company_state_id",J.value),F(I,"contact_state_id",J.value)})),K().then((e=>{F(P,"company_country_id",Q.value),F(I,"contact_country_id",Q.value)})),z().then((e=>{for(var a in N(L,"logo",e.data.logo),e.data)N(P,a,e.data[a]),N(I,a,e.data[a]);t.value=!1}))}));const a=i("clubInformation"),s=e=>{a.value=e.value};return(e,n)=>{const l=se,r=ce,o=pe,u=ye,i=G;return p(),d(i,null,{default:m((()=>[v(" Content Wrapper "),f("div",ge,[t.value?v("v-if",!0):(p(),d("div",_e,[f("div",je,[f(l,{onChangeMenu:s})]),f("div",he,[w(f(r,null,null,512),[[S,"clubInformation"==a.value]]),w(f(o,null,null,512),[[S,"clubRepresentatives"==a.value]]),v("  <clubPayment\r\n          v-show=\"Component == 'clubPayment'\"\r\n        /> "),v(" <clubSubscription\r\n        v-show=\"Component == 'clubSubscription'\"\r\n        /> "),w(f(u,null,null,512),[[S,"clubLocation"==a.value]])])]))])])),_:1})}}});export default Ce;
