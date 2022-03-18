import{a as e,c as t,l as a,_ as s}from"./Companies.7d0f7197.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.a508baf8.js";import{_ as i}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.3abc5d60.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.daae4ec3.js";import{_ as n}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.814e506a.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.5556d9f6.js";import{_ as c}from"./V-Loader.vue_vue&type=script&setup=true&lang.22d608b6.js";import{_ as p}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.2b0913ad.js";import{d,u as v,r as m,b as f,z as y,A as g,w as _,o as h,h as b,D as j,j as x,k,E as w,L as V,K as C,a8 as P,N as D,O as S,H as I}from"./vendor.e3a29b40.js";import{_ as T,a as A}from"./search-4-dark.fb3880a5.js";import{p as Y}from"./sidebarLayoutState.436b738a.js";import{l as E,g as L,i as M,c as R,s as z}from"./Inventory.9da08c71.js";import{s as B,i as O,n as q}from"./ActivityPanel.vue_vue&type=style&index=0&lang.6ca24eb8.js";import{h as F}from"./moment.08a7f518.js";import{u as N}from"./index.d9e84969.js";import"./V-Control.b36667bf.js";import"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.16e258e3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f00f67a3.js";import"./index.33529e5c.js";import"./V-Placeload.9d0101ab.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.5c60cd1f.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.eb96c098.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f3abd056.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.b59ccca7.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1a89ef3a.js";import"./navbarLayoutState.eac28a0a.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import"./V-Dropdown.7404a3e2.js";import"./useDropdown.dfad556c.js";import"./video.674f0486.js";import"./activePanelState.5a49edcb.js";import"./darkModeState.a53f3c67.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2f79059e.js";import"./AnimatedLogo.e43df3fc.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5e6c3f74.js";import"./V-Block.vue_vue&type=script&setup=true&lang.f5251e79.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.16aa198e.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.c5504f9b.js";import"./notyf.es.f84e4201.js";import"./fastpizza.1e58d0ec.js";const H={class:"page-content-inner"},K={class:"d-flex justify-content-between align-items-center"},U={class:"w-100"},W={key:0,class:"w-100"},G=k("h1",{class:"title is-4"},"Select a location",-1),J=I("New Inventory"),Q=I("Confirm"),X=I("Confirm"),Z={key:0,class:"title is-4"},$={class:"flex-list-wrapper flex-list-v1"},ee=k("img",{class:"light-image",src:T,alt:""},null,-1),te=k("img",{class:"dark-image",src:A,alt:""},null,-1),ae={class:"flex-table"},se=k("span",{class:""},"ID",-1),le=k("span",null,"Status",-1),oe=k("span",null,"Date Open",-1),ie=k("span",null,"Date Close",-1),re=k("span",null,"Products Total",-1),ne=k("span",{class:""},"Actions",-1),ue={class:"flex-list-inner"},ce={"data-th":"ID",class:"flex-table-cell"},pe={class:"item-name dark-inverted"},de={class:"flex-table-cell","data-th":"Status"},ve={key:0,class:"tag is-success is-rounded"},me={key:1,class:"tag is-rounded"},fe={key:2,class:"tag is-info is-rounded"},ye={class:"flex-table-cell","data-th":"Date Open"},ge={class:"light-text"},_e={class:"flex-table-cell","data-th":"Date Close"},he={key:0,class:"light-text"},be={key:1},je={class:"flex-table-cell","data-th":"Products Total"},xe={class:"light-text"},ke={class:"flex-table-cell","data-th":"Actions"},we=I("Close Inventory"),Ve=I("View");var Ce=d({expose:[],setup(d){const{cookies:I}=v(),T=m(""),A=f((()=>T.value?N.filter((e=>e.username.match(new RegExp(T.value,"i"))||e.position.match(new RegExp(T.value,"i"))||e.industry.match(new RegExp(T.value,"i"))||e.status.match(new RegExp(T.value,"i"))||e.location.match(new RegExp(T.value,"i")))):M.value));Y.value="Inventory",y({title:"Inventory"});const Ce=j(),Pe=m(!1),De=m(!1),Se=m(""),Ie=m(null),Te=m(!1);g((()=>{e().then((e=>{B(a,"locations_id",t.value.locations),O(a.value,"locations_id").change=Ae,null!=I.get("locations_id")&&(O(a.value,"locations_id").model=I.get("locations_id"),Ae(I.get("locations_id")))}))}));const Ae=function(e){"object"==typeof e&&(e=this.model),Te.value=!0,E.value=e,L(e).then((e=>{Te.value=!1}))},Ye=()=>{De.value=!1,Te.value=!0,Se.value="Processing Inventory... Please do not close the browser window until the process is complete",R(Ie.value).then((e=>{q.success("Success"),Te.value=!1,Se.value="",L()})).catch((e=>{q.error(e.response.data),Te.value=!1,Se.value=""}))},Ee=()=>{Pe.value=!1,Te.value=!0,Se.value="wait a moment, you will be redirected",z().then((e=>{Ce.push({name:"settings-inventory-create",query:{id:e.data.inventory,locations_id:E.value}})})).catch((e=>{q.error(e.response.data.message),Te.value=!1,Se.value=e.response.data.message}))},Le=f((()=>{let e=[];return M.value.forEach((t=>{e.push([t.id,t.status,t.created_at,t.updated_at,100,1])})),e}));return _(Le,(e=>{Te.value=!0,setTimeout((()=>{Te.value=!1}),500)})),(e,t)=>{const d=s,v=l,m=o,f=i,y=r,g=n,_=u,j=c,I=p;return h(),b(I,null,{default:x((()=>[k("div",H,[k(m,{class:"mb-6"},{default:x((()=>[k("div",K,[k("div",U,[w(E)?V("",!0):(h(),b("div",W,[G])),k(d,{"inputs-step":w(a)},null,8,["inputs-step"])]),!Te.value&&w(E)?(h(),b(v,{key:0,color:"primary",onClick:t[1]||(t[1]=e=>Pe.value=!0),raised:"",class:"mb-4"},{default:x((()=>[J])),_:1})):V("",!0)])])),_:1}),k(y,{open:De.value,actions:"center",onClose:t[2]||(t[2]=e=>De.value=!1)},{content:x((()=>[k(f,{title:" Are you sure you want to close inventory?",subtitle:"This action will modify the stock of all products for sale and cannot be undone"})])),action:x((()=>[k(v,{color:"primary",onClick:Ye,raised:""},{default:x((()=>[Q])),_:1})])),_:1},8,["open"]),k(y,{open:Pe.value,actions:"center",onClose:t[3]||(t[3]=e=>Pe.value=!1)},{content:x((()=>[k(f,{title:" Are you sure to create a new inventory?",subtitle:"This action blocks all movements related to sales, creation and editing of products in the system until the inventory is closed."})])),action:x((()=>[k(v,{color:"primary",onClick:Ee,raised:""},{default:x((()=>[X])),_:1})])),_:1},8,["open"]),Te.value?(h(),b("h1",Z,C(Se.value),1)):V("",!0),k(j,{size:"large",active:Te.value},{default:x((()=>[k("div",$,[k(g,{class:[0!==w(A).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:x((()=>[ee,te])),_:1},8,["class"]),k("div",ae,[k("div",{class:["flex-table-header",[0===w(A).length&&"is-hidden"]]},[se,le,oe,ie,re,ne],2),k("div",ue,[k(P,{name:"list",tag:"div"},{default:x((()=>[(h(!0),b(D,null,S(w(A),(e=>(h(),b("div",{key:e.id,class:"flex-table-item"},[k("div",ce,[k("div",null,[k("span",pe,C(e.id),1)])]),k("div",de,[1===e.status?(h(),b("span",ve,"Active")):V("",!0),0===e.status?(h(),b("span",me,"Close")):V("",!0),2===e.status?(h(),b("span",fe,"Process")):V("",!0)]),k("div",ye,[k("span",ge,C(w(F)(e.created_at).format("dd - DD/MM/YYYY")),1)]),k("div",_e,[e.close?(h(),b("span",he,C(w(F)(e.close).format("dd - DD/MM/YYYY")),1)):(h(),b("span",be,"-"))]),k("div",je,[k("span",xe,C(e.products.length),1)]),k("div",ke,[1==e.status?(h(),b(v,{key:0,color:"success",onClick:t=>{De.value=!0,Ie.value=e.id},raised:"",class:"mr-4"},{default:x((()=>[we])),_:2},1032,["onClick"])):V("",!0),k(v,{to:{name:"settings-inventory-create",query:{id:e.id,locations_id:w(E)}}},{default:x((()=>[Ve])),_:2},1032,["to"])])])))),128))])),_:1})])]),w(A).length>5?(h(),b(_,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):V("",!0)])])),_:1},8,["active"])])])),_:1})}}});export default Ce;
