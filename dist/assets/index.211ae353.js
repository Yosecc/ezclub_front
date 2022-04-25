var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,l)=>{for(var u in l||(l={}))a.call(l,u)&&n(e,u,l[u]);if(t)for(var u of t(l))s.call(l,u)&&n(e,u,l[u]);return e};import{_ as u}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8d66525.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.513c973c.js";import{c as r,e as i,f as p,h as c,j as d,k as v,d as m,b as f}from"./Companies.66421503.js";import{b,p as y,h as g,n as _,a as j,s as h}from"./index.91d8990f.js";import{d as x,r as C,c as S,o as w,h as V,j as L,k as I,D as P,F as k,Q as $,R as A,a4 as D,E,L as z,G as M,S as O,U as T,J as F}from"./vendor.c636f33b.js";import{_ as N}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f70b005e.js";import{_ as R}from"./formLayaut.vue_vue&type=style&index=0&lang.1999c880.js";import{_ as q}from"./V-Tag.vue_vue&type=script&setup=true&lang.3160f209.js";import{_ as B}from"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import{_ as G}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.97b832d8.js";import{p as U}from"./sidebarLayoutState.7607026f.js";import{g as J,c as Q,a as H,s as K,b as W,d as X}from"./config.c1a5f583.js";import"./V-Control.237cc4d1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.32e67a93.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.d231cd7d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9c624faa.js";import"./V-Placeload.c195e33d.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.0c1f8e0b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.65052920.js";import"./useDropdown.35c6b80e.js";import"./V-Dropdown.2bdf3018.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e220a16b.js";import"./activePanelState.8d6f746c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.9960c6a6.js";import"./V-Message.vue_vue&type=script&setup=true&lang.085649cc.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.63bdcb05.js";import"./navbarLayoutState.52d982af.js";import"./video.c58ada5a.js";import"./darkModeState.77580bb1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cce55643.js";import"./AnimatedLogo.a42abb6a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e5a3139a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.29ae6253.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.068e83d3.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1e8fe599.js";const Y={class:"d-flex"},Z={class:"ml-3"},ee={class:"title is-4 is-narrow"},te={class:"w-100 mt-5"},ae=I("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var se=x({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:t}){const a=[{name:"Club Information",component:"clubInformation"},{name:"Club Contact",component:"clubRepresentatives"},{name:"Club Locations",component:"clubLocation"}],s=C(0),n=C(null),l=S((()=>null!=a[s.value]?a[s.value].component:n.value));return(e,n)=>{const i=u,p=o;return w(),V(p,null,{default:L((()=>[I("div",Y,[I(i,{picture:`${P(b)}storage/${P(r).logo}`,size:"large"},null,8,["picture"]),I("div",Z,[I("h2",ee,k(P(r).company_name),1),I("p",null,"Club ID# "+k(P(r).id),1)])]),I("div",te,[I("ul",null,[(w(),V($,null,A(a,((e,a)=>I("li",{key:`item-${a}`},[I(p,{class:["\n              mb-3\n              item_menu\n              d-flex\n              justify-content-between\n              align-items-center\n            ",s.value==a?"active":""],color:s.value==a?"warning":void 0,elevated:s.value==a,onClick:e=>(e=>{s.value=e,t("changeMenu",l)})(a)},{default:L((()=>[I("p",null,k(e.name),1),ae])),_:2},1032,["class","color","elevated","onClick"])]))),64))])])])),_:1})}}});const ne={class:"mb-4"},le=I("h1",{class:"title is-5 mb-0"},"Club Logo",-1),ue=I("p",null,"This in how club is recognize",-1),oe={class:"d-flex justify-content-center"},re={class:"text-center"},ie=I("h1",{class:"title is-5"},"Club Information",-1);var pe=x({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;D();const a=S((()=>({title:"Club General Information",subtitle:"Edit Club information"})));C([{typeInput:"text",name:"slogan",placeholder:"Slogan text",model:"",required:!0,class:"is-12"}]);const s=()=>{const e=l(l({},y(i.value)),y(p.value)),t=new FormData;for(var a in e)t.append(a,e[a]);g.value||c(t).then((e=>{if(e.data.status)_.success("Succeeded"),r.value=e.data.company;else for(var t in _.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{_.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=u,o=N,c=R;return w(),V(c,{buttons:t.buttons,step:t.step,titles:P(a),onSaveData:s},{default:L((()=>[I("div",ne,[le,ue,I("div",oe,[I("div",re,[I(l,{picture:`${P(b)}storage/${P(r).logo}`,class:"mb-4",size:"xl"},null,8,["picture"]),I(o,{"inputs-step":P(p)},null,8,["inputs-step"])])])]),ie,I(o,{"inputs-step":P(i)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),ce=x({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;D();const a=S((()=>({title:"Club Representatives",subtitle:"Edit Club representative"}))),s=()=>{const e=l({},y(d.value)),t=new FormData;for(var a in e)t.append(a,e[a]);g.value||v(t).then((e=>{if(e.data.status)_.success("Succeeded"),r.value=e.data.company;else for(var t in _.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{_.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=N,u=R;return w(),V(u,{buttons:t.buttons,step:t.step,titles:P(a),onSaveData:s},{default:L((()=>[I(l,{"inputs-step":P(d)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const de={class:"columns is-multiline"},ve={class:"d-flex mb-3"},me={class:"title is-5 mb-1"},fe={class:"d-flex justify-content-end align-items-center"},be=E(" Edit ");var ye=x({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["new"]},step:{type:Number,default:1}},setup(e){const t=e;D();const a=S((()=>({title:"Club Locations",subtitle:"Edit Club Locations"})));return(e,s)=>{const n=q,l=u,r=B,i=o,p=R;return w(),V(p,{buttons:t.buttons,titles:P(a),"new-route":{to:{name:"settings-clubinformation-locations-create"},title:"New Location"}},{default:L((()=>[I("div",de,[(w(!0),V($,null,A(P(m),((e,t)=>(w(),V("div",{key:t,class:"column is-6"},[I(i,null,{default:L((()=>[I(n,{color:e.status?"success":"danger",label:e.status?"Active":"Inactive",class:"mb-4"},null,8,["color","label"]),I("div",ve,[I(l,{squared:"",class:"mr-3",picture:`${P(b)}storage/${e.image}`,size:"xl"},null,8,["picture"]),I("div",null,[I("p",null,[I("small",null,"# "+k(e.id),1)]),I("h2",me,k(e.name),1),I("p",null,"Address: "+k(e.address),1),I("p",null,"Phone: "+k(e.phone),1)])]),I("div",fe,[I(r,{to:{name:"settings-clubinformation-locations-edit",query:{id:e.id}}},{default:L((()=>[be])),_:2},1032,["to"])])])),_:2},1024)])))),128))])])),_:1},8,["buttons","titles"])}}});const ge={class:"page-content-inner"},_e={key:0,class:"columns is-multiline"},je={class:"column is-3"},he={class:"column is-9"};var xe=x({expose:[],setup(e){U.value="Club Profile",z({title:"Club"});const t=C(!0);M((()=>{J().then((e=>{j(i,"company_city_id",Q.value),j(d,"contact_city_id",Q.value)})),H().then((e=>{j(i,"company_state_id",K.value),j(d,"contact_state_id",K.value)})),W().then((e=>{j(i,"company_country_id",X.value),j(d,"contact_country_id",X.value)})),f().then((e=>{for(var a in h(p,"logo",e.data.logo),e.data)h(i,a,e.data[a]),h(d,a,e.data[a]);t.value=!1}))}));const a=C("clubInformation"),s=e=>{a.value=e.value};return(e,n)=>{const l=se,u=pe,o=ce,r=ye,i=G;return w(),V(i,null,{default:L((()=>[I("div",ge,[t.value?F("",!0):(w(),V("div",_e,[I("div",je,[I(l,{onChangeMenu:s})]),I("div",he,[O(I(u,null,null,512),[[T,"clubInformation"==a.value]]),O(I(o,null,null,512),[[T,"clubRepresentatives"==a.value]]),O(I(r,null,null,512),[[T,"clubLocation"==a.value]])])]))])])),_:1})}}});export default xe;
