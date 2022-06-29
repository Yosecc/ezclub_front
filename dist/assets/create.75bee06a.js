var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.11428d90.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.47545b30.js";import{d as n,O as l,H as c,r as v,o as d,h as m,P as f,a9 as y,j,k as b,K as g}from"./vendor.853b0a2b.js";import{p as _}from"./sidebarLayoutState.68347789.js";import{a as S,i as V,d as h,e as x,f as P}from"./Staffs.2aac1a72.js";import{e as w,a as k,p as O,h as C,n as L}from"./index.8f8c2b3e.js";import{a as A}from"./Companies.454fa4b6.js";import{g as D,c as I,a as B,s as z,b as E,d as F}from"./config.1fb69cd1.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.1fe405fc.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.3aee5091.js";import"./V-Button.vue_vue&type=script&setup=true&lang.3174687b.js";import"./V-Placeload.54ed2d56.js";import"./V-Control.bab08fd1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.57862c84.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.a423434c.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f868e188.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3d4964e7.js";import"./V-Card.vue_vue&type=script&setup=true&lang.13431cdb.js";import"./formLayaut.vue_vue&type=style&index=0&lang.e2250c75.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.eae7234f.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.07dcabec.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.2625c997.js";import"./useDropdown.9fd8f548.js";import"./V-Dropdown.20b61679.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cddd26f6.js";import"./activePanelState.9b514b5d.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.eb4f08be.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.17decad6.js";import"./video.5be088fe.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.624ff565.js";import"./darkModeState.6f39e39b.js";import"./AnimatedLogo.e7829b2f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.36c68532.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ee7d7200.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.5ca17476.js";import"./userPopovers.f4b9fc60.js";const M={class:"page-content-inner"},T={class:"columns is-multiline"},$={class:"column is-12"},q={key:0};var H=n({expose:[],setup(e){f();const t=y();_.value="New Staff",l({title:"Staffs"}),c((()=>{S.value=null,w(V.value),w(h.value),A().then((e=>{k(h,"locations",e.data.locations)})),D().then((e=>{k(V,"city_id",I.value)})),B().then((e=>{k(V,"state_id",z.value)})),E().then((e=>{k(V,"country_id",F.value)})),x().then((e=>{k(h,"staff_roles",e.data.staff_roles)}))}));const a=v(1);v([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const s=()=>{let e=o(o({},O(V.value)),O(h.value));const s=new FormData;for(var r in e)s.append(r,e[r]);C.value||P(s).then((e=>{if(e.data.status)L.success("Succeeded"),a.value=3,S.value=e.data.staff,t.push({name:"settings-staff-edit",query:{id:S.value.id,sign:!0}});else for(var s in L.error(e.data.mensaje),e.data.errores)e.data.errores[s].forEach((e=>{L.error(`${s} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=p,o=u,n=i;return d(),m(n,null,{default:j((()=>[b("div",M,[b("div",T,[b("div",$,[1==a.value||2==a.value?(d(),m("div",q,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0)])])])])),_:1})}}});export default H;
