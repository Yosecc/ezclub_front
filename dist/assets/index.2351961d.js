var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,l=(e,l)=>{for(var u in l||(l={}))a.call(l,u)&&n(e,u,l[u]);if(t)for(var u of t(l))s.call(l,u)&&n(e,u,l[u]);return e};import{_ as u}from"./V-Avatar.vue_vue&type=script&setup=true&lang.fbee71d9.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.a58c6b96.js";import{c as r,e as i,f as p,h as c,_ as d,j as v,k as m,d as f,a as b}from"./Companies.612c55ca.js";import{b as y,p as g,h as _,n as j,s as h,a as x}from"./index.ce008232.js";import{d as C,r as w,c as S,o as V,h as L,j as I,k as P,D as k,J as $,L as A,O as z,B as D,G as E,y as O,z as M,F as T,R as B,K as F}from"./vendor.9b3dcac4.js";import{_ as N}from"./formLayaut.vue_vue&type=style&index=0&lang.97a3214d.js";import{_ as R}from"./V-Tag.vue_vue&type=script&setup=true&lang.0a21f1c9.js";import{_ as q}from"./V-Button.vue_vue&type=script&setup=true&lang.75bfbbbd.js";import{_ as G}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.084e159c.js";import{p as J}from"./sidebarLayoutState.f248b5df.js";import{b as K,c as U,d as H,s as Q,e as W,a as X}from"./config.ec631f27.js";import"./V-Control.1394aaca.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8dbce097.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.79bd5af3.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2fea259d.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6280e35f.js";import"./V-Placeload.c1ea57dd.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.243e6bbe.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.213b7b8a.js";import"./useDropdown.9e78c75e.js";import"./V-Dropdown.a5ec7ba6.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.d7d70284.js";import"./activePanelState.361fa067.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ac867459.js";import"./V-Message.vue_vue&type=script&setup=true&lang.99710929.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.1f69cb04.js";import"./navbarLayoutState.9391fded.js";import"./video.4ec3e36a.js";import"./darkModeState.88cf3bf6.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.65a1d80b.js";import"./AnimatedLogo.d5741cf2.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.59a18dd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.6846fe7f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9210e6fa.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.49de4d23.js";const Y={class:"d-flex"},Z={class:"ml-3"},ee={class:"title is-4 is-narrow"},te={class:"w-100 mt-5"},ae=P("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var se=C({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:t}){const a=[{name:"Club Information",component:"clubInformation"},{name:"Club Contact",component:"clubRepresentatives"},{name:"Club Locations",component:"clubLocation"}],s=w(0),n=w(null),l=S((()=>null!=a[s.value]?a[s.value].component:n.value));return(e,n)=>{const i=u,p=o;return V(),L(p,null,{default:I((()=>[P("div",Y,[P(i,{picture:`${k(y)}storage/${k(r).logo}`,size:"large"},null,8,["picture"]),P("div",Z,[P("h2",ee,$(k(r).company_name),1),P("p",null,"Club ID# "+$(k(r).id),1)])]),P("div",te,[P("ul",null,[(V(),L(A,null,z(a,((e,a)=>P("li",{key:`item-${a}`},[P(p,{class:["\n              mb-3\n              item_menu\n              d-flex\n              justify-content-between\n              align-items-center\n            ",s.value==a?"active":""],color:s.value==a?"warning":void 0,elevated:s.value==a,onClick:e=>(e=>{s.value=e,t("changeMenu",l)})(a)},{default:I((()=>[P("p",null,$(e.name),1),ae])),_:2},1032,["class","color","elevated","onClick"])]))),64))])])])),_:1})}}});const ne={class:"mb-4"},le=P("h1",{class:"title is-5 mb-0"},"Club Logo",-1),ue=P("p",null,"This in how club is recognize",-1),oe={class:"d-flex justify-content-center"},re={class:"text-center"},ie=P("h1",{class:"title is-5"},"Club Information",-1);var pe=C({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;D();const a=S((()=>({title:"Club General Information",subtitle:"Edit Club information"})));w([{typeInput:"text",name:"slogan",placeholder:"Slogan text",model:"",required:!0,class:"is-12"}]);const s=()=>{const e=l(l({},g(i.value)),g(p.value)),t=new FormData;for(var a in e)t.append(a,e[a]);_.value||c(t).then((e=>{if(e.data.status)j.success("Succeeded"),r.value=e.data.company;else for(var t in j.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{j.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=u,o=d,c=N;return V(),L(c,{buttons:t.buttons,step:t.step,titles:k(a),onSaveData:s},{default:I((()=>[P("div",ne,[le,ue,P("div",oe,[P("div",re,[P(l,{picture:`${k(y)}storage/${k(r).logo}`,class:"mb-4",size:"xl"},null,8,["picture"]),P(o,{"inputs-step":k(p)},null,8,["inputs-step"])])])]),ie,P(o,{"inputs-step":k(i)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),ce=C({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1}},setup(e){const t=e;D();const a=S((()=>({title:"Club Representatives",subtitle:"Edit Club representative"}))),s=()=>{const e=l({},g(v.value)),t=new FormData;for(var a in e)t.append(a,e[a]);_.value||m(t).then((e=>{if(e.data.status)j.success("Succeeded"),r.value=e.data.company;else for(var t in j.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{j.error(`${t} : ${e}`)}))}))};return(e,n)=>{const l=d,u=N;return V(),L(u,{buttons:t.buttons,step:t.step,titles:k(a),onSaveData:s},{default:I((()=>[P(l,{"inputs-step":k(v)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});const de={class:"columns is-multiline"},ve={class:"d-flex mb-3"},me={class:"title is-5 mb-1"},fe={class:"d-flex justify-content-end align-items-center"},be=E(" Edit ");var ye=C({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["new"]},step:{type:Number,default:1}},setup(e){const t=e;D();const a=S((()=>({title:"Club Locations",subtitle:"Edit Club Locations"})));return(e,s)=>{const n=R,l=u,r=q,i=o,p=N;return V(),L(p,{buttons:t.buttons,titles:k(a),"new-route":{to:{name:"settings-clubinformation-locations-create"},title:"New Location"}},{default:I((()=>[P("div",de,[(V(!0),L(A,null,z(k(f),((e,t)=>(V(),L("div",{key:t,class:"column is-6"},[P(i,null,{default:I((()=>[P(n,{color:e.status?"success":"danger",label:e.status?"Active":"Inactive",class:"mb-4"},null,8,["color","label"]),P("div",ve,[P(l,{squared:"",class:"mr-3",picture:`${k(y)}storage/${e.image}`,size:"xl"},null,8,["picture"]),P("div",null,[P("p",null,[P("small",null,"# "+$(e.id),1)]),P("h2",me,$(e.name),1),P("p",null,"Address: "+$(e.address),1),P("p",null,"Phone: "+$(e.phone),1)])]),P("div",fe,[P(r,{to:{name:"settings-clubinformation-locations-edit",query:{id:e.id}}},{default:I((()=>[be])),_:2},1032,["to"])])])),_:2},1024)])))),128))])])),_:1},8,["buttons","titles"])}}});const ge={class:"page-content-inner"},_e={key:0,class:"columns is-multiline"},je={class:"column is-3"},he={class:"column is-9"};var xe=C({expose:[],setup(e){J.value="Club Profile",O({title:"Club"});const t=w(!0);M((()=>{K().then((e=>{h(i,"company_city_id",U.value),h(v,"contact_city_id",U.value)})),H().then((e=>{h(i,"company_state_id",Q.value),h(v,"contact_state_id",Q.value)})),W().then((e=>{h(i,"company_country_id",X.value),h(v,"contact_country_id",X.value)})),b().then((e=>{for(var a in x(p,"logo",e.data.logo),e.data)x(i,a,e.data[a]),x(v,a,e.data[a]);t.value=!1}))}));const a=w("clubInformation"),s=e=>{a.value=e.value};return(e,n)=>{const l=se,u=pe,o=ce,r=ye,i=G;return V(),L(i,null,{default:I((()=>[P("div",ge,[t.value?F("",!0):(V(),L("div",_e,[P("div",je,[P(l,{onChangeMenu:s})]),P("div",he,[T(P(u,null,null,512),[[B,"clubInformation"==a.value]]),T(P(o,null,null,512),[[B,"clubRepresentatives"==a.value]]),T(P(r,null,null,512),[[B,"clubLocation"==a.value]])])]))])])),_:1})}}});export default xe;
