var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&r(e,o,i[o]);if(t)for(var o of t(i))s.call(i,o)&&r(e,o,i[o]);return e};import{_ as o,a as u}from"./staffSystemPermitions.vue_vue&type=style&index=0&lang.9bbddc59.js";import{_ as p}from"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import{_ as n}from"./formLayaut.vue_vue&type=style&index=0&lang.567c3df7.js";import{d as l,b as d,h as c,i as f,F as v,aa as m,k as y,l as b,r as j,K as _,O as g,o as h,w as S,P as w}from"./vendor.7d5213a2.js";import{i as x,b as V,c as k,d as P,e as E,f as A,h as C,j as O,k as $,p as D}from"./Staffs.a721c776.js";import{p as L,n as U,s as W,g as q,a as B,h as F}from"./index.d32ed65a.js";import{_ as I}from"./signComponent.vue_vue&type=script&setup=true&lang.35612793.js";import{_ as z}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.70ec2063.js";import{p as M}from"./sidebarLayoutState.9426e5be.js";import{a as N}from"./Companies.99c8e5e6.js";import{g as T,c as K,a as G,s as H,b as J,d as Q}from"./config.f2e82aa8.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import"./V-Placeload.d3fba449.js";import"./V-Control.3e38bffa.js";import"./V-Field.vue_vue&type=script&setup=true&lang.3d6ccab4.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.fa42be40.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.a80fc4a1.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.a8dad8dd.js";import"./V-Card.vue_vue&type=script&setup=true&lang.36121cf2.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.8686426d.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.5d78dab1.js";import"./pdf_icon.fd696258.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.adcd0d1a.js";import"./useDropdown.d4a254e8.js";import"./V-Dropdown.9baccf1a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ba1cd7fa.js";import"./activePanelState.4e56e973.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ae744ca1.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5baca42f.js";import"./video.fb469c9d.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.ae0cfa5f.js";import"./darkModeState.6047be35.js";import"./AnimatedLogo.1618784f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.df3892a3.js";import"./V-Block.vue_vue&type=script&setup=true&lang.9d9b0eff.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.4761d136.js";import"./userPopovers.f4b9fc60.js";var R=l({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const t=e;m();const a=d((()=>"create"==t.type?{title:"Add a new User",subtitle:"Add User"}:{title:"Edit User",subtitle:"Edit User"})),s=()=>{const e=L(x.value);V(e).then((e=>{U.success("Success")})).catch((e=>{for(var t in e.response.data)U.error(`${t}: ${e.response.data[t]}`)}))};return(e,r)=>{const i=p,o=n;return c(),f(o,{onSaveData:s,buttons:t.buttons,step:t.step,titles:v(a)},{default:y((()=>[b(i,{"inputs-step":v(x)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}}),X=l({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(e){const t=e;j([{name:"Waiver_010221.pdf",url:""}]);const a=d((()=>"create"==t.type?{title:"Create staff waiver",subtitle:"Add Waiver"}:{title:"Edit staff waiver",subtitle:"Edit Waiver"})),s=e=>{P(e,k.value.id).then((e=>{if(e.data.status)U.success("Sign Success");else for(var t in U.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{U.error(`${t} : ${e}`)}))})).catch((e=>{}))};return(e,r)=>{const i=I,o=n;return c(),f(o,{buttons:t.buttons,step:t.step,titles:v(a)},{default:y((()=>[v(k)?(c(),f(i,{key:0,onOnSign:s,"is-sign":"create"==t.type,waiver:`waiver_${v(k).id}.pdf`,"url-waiver":`staffs/generateWeiver/${v(k).id}`},null,8,["is-sign","waiver","url-waiver"])):_("",!0)])),_:1},8,["buttons","step","titles"])}}});const Y={class:"page-content-inner"},Z={class:"columns is-multiline"};var ee=l({expose:[],setup(e){const t=m(),a=w();M.value="Edit Staff",g({title:"Staffs"}),h((()=>{E(a.query.id).then((e=>{for(var t in e.data)if("rent_space"==t)W(A,t,null==e.data[t]?"":e.data[t]);else if("company_name_staff"==t)W(A,t,null==e.data[t]?"":e.data[t]);else if("ein"==t)W(A,t,null==e.data[t]?"":e.data[t]);else if("price_rent"==t)W(A,t,null==e.data[t]?"":e.data[t]);else if("locations"==t){let a=[];e.data[t].forEach((e=>{a.push(e.locations_id)})),W(C,t,a)}else if("staff_roles"==t){let a=[];e.data[t].forEach((e=>{a.push(e.staff_roles_id)})),W(C,t,a)}else W(A,t,e.data[t]),W(C,t,e.data[t]);q(x.value,"email").model=q(A.value,"email").model})),N().then((e=>{B(C,"locations",e.data.locations)})),T().then((e=>{B(A,"city_id",K.value)})),G().then((e=>{B(A,"state_id",H.value)})),J().then((e=>{B(A,"country_id",Q.value)})),O().then((e=>{B(C,"staff_roles",e.data.staff_roles)}))})),S((()=>k.value),(()=>{$(k.value.id).then((e=>{e.data&&(q(x.value,"email").model=e.data.email)}))}));const s=()=>{let e=i(i({},L(A.value)),L(C.value));const s=new FormData;for(var r in e)s.append(r,e[r]);F.value||D(a.query.id,s).then((e=>{if(e.data.status)U.success("Succeeded"),t.back();else for(var a in U.error(e.data.mensaje),e.data.errores)e.data.errores[a].forEach((e=>{U.error(`${a} : ${e}`)}))})).catch((e=>{console.log(e.response.data)}))};return(e,t)=>{const r=o,i=u,p=R,n=X,l=z;return c(),f(l,null,{default:y((()=>{var e;return[b("div",Y,[b("div",Z,[b("div",{class:"column is-12",style:[{display:"flex"},(null==(e=v(a).query)?void 0:e.sign)?{flexDirection:"column-reverse"}:{flexDirection:"column"}]},[b(r,{type:"edit",buttons:["back","save"],step:1,class:"mb-3",onSaveData:s}),b(i,{type:"edit",buttons:[],step:2,class:"mb-3"}),b(p,{type:"edit",buttons:["save"],class:"mb-3"}),v(k)?(c(),f(n,{key:0,class:"mb-4",type:v(k).sign?"edit":"create",buttons:[],step:3},null,8,["type"])):_("",!0)],4)])])]})),_:1})}}});export default ee;