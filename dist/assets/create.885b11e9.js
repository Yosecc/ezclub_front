var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,o)=>{for(var p in o||(o={}))a.call(o,p)&&r(e,p,o[p]);if(t)for(var p of t(o))s.call(o,p)&&r(e,p,o[p]);return e};import{_ as p,a as u,b as i}from"./staffWaiver.vue_vue&type=script&setup=true&lang.eaa88e75.js";import{_ as n}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.084e159c.js";import{d as c,y as l,z as v,r as d,o as m,h as f,A as y,j,k as b,K as g}from"./vendor.9b3dcac4.js";import{p as _}from"./sidebarLayoutState.f248b5df.js";import{i as S,b as V,c as h,f as x,d as P}from"./Staffs.c2d55d3d.js";import{c as k,s as w,p as C,h as O,n as A}from"./index.ce008232.js";import{a as L}from"./Companies.612c55ca.js";import{b as D,c as I,d as T,s as z,e as B,a as M}from"./config.ec631f27.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.fbee71d9.js";import"./formLayaut.vue_vue&type=style&index=0&lang.97a3214d.js";import"./V-Placeload.c1ea57dd.js";import"./V-Button.vue_vue&type=script&setup=true&lang.75bfbbbd.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.243e6bbe.js";import"./signComponent.vue_vue&type=script&setup=true&lang.c58ff8dd.js";import"./pdf_icon.43aa5531.js";import"./V-Card.vue_vue&type=script&setup=true&lang.a58c6b96.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.213b7b8a.js";import"./useDropdown.9e78c75e.js";import"./V-Dropdown.a5ec7ba6.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.d7d70284.js";import"./activePanelState.361fa067.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ac867459.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.0a21f1c9.js";import"./V-Message.vue_vue&type=script&setup=true&lang.99710929.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.1f69cb04.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.2fea259d.js";import"./navbarLayoutState.9391fded.js";import"./video.4ec3e36a.js";import"./darkModeState.88cf3bf6.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.65a1d80b.js";import"./AnimatedLogo.d5741cf2.js";import"./V-Control.1394aaca.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8dbce097.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.59a18dd6.js";import"./V-Block.vue_vue&type=script&setup=true&lang.6846fe7f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9210e6fa.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.49de4d23.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.79bd5af3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.6280e35f.js";const E={class:"page-content-inner"},F={class:"columns is-multiline"},W={class:"column is-12"},$={key:0};var K=c({expose:[],setup(e){y(),_.value="New Staff",l({title:"Staffs"}),v((()=>{k(S.value),k(V.value),L().then((e=>{w(V,"locations",e.data.locations)})),D().then((e=>{w(S,"city_id",I.value)})),T().then((e=>{w(S,"state_id",z.value)})),B().then((e=>{w(S,"country_id",M.value)})),h().then((e=>{w(V,"staff_roles",e.data.staff_roles)}))}));const t=d(1);d([{step:1,text:"Staff Information",categories:[]},{step:2,text:"System Permissions",categories:[]},{step:3,text:"Sign Waiver",categories:[]}]);const a=()=>{let e=o(o({},C(S.value)),C(V.value));const a=new FormData;for(var s in e)a.append(s,e[s]);O.value||x(a).then((e=>{if(e.data.status)A.success("Succeeded"),t.value=3,P.value=e.data.staff;else for(var a in A.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{A.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,s)=>{const r=p,o=u,c=i,l=n;return m(),f(l,null,{default:j((()=>[b("div",E,[b("div",F,[b("div",W,[1==t.value||2==t.value?(m(),f("div",$,[b(r,{type:"create",buttons:["back","save"],step:1,class:"mb-3",onSaveData:a}),b(o,{type:"create",buttons:[],step:2,class:"mb-3"})])):g("",!0),3==t.value?(m(),f(c,{key:1,type:"create",buttons:["back"],step:3})):g("",!0)])])])])),_:1})}}});export default K;
