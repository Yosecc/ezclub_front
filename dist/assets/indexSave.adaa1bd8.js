import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.8eeea7dc.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.9a09b9d1.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.20e31a61.js";import{_ as s}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.d16c15b9.js";import{_ as l}from"./V-Modal.vue_vue&type=script&setup=true&lang.51c86d52.js";import{_ as i}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.418b624a.js";import{_ as o}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.fa808ceb.js";import{_ as n}from"./V-Loader.vue_vue&type=script&setup=true&lang.f29df460.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.27adbf0b.js";import{d as u,u as c,r as p,b as d,O as v,o as m,w as f,h as y,i as g,ab as h,k as _,l as b,F as j,K as x,H as k,ac as w,R as V,S as C,B as P,G as S}from"./vendor.6c78dc37.js";import{_ as D,a as I}from"./search-4-dark.12f0bf0d.js";import{p as A}from"./sidebarLayoutState.b20c1332.js";import{l as T,g as Y,i as E,c as L,s as M}from"./Inventory.6133ce01.js";import{a as R,e as B,l as z}from"./Companies.b586ed9b.js";import{a as F,g as O,n as q}from"./index.a01cdf46.js";import{u as G}from"./index.d9e84969.js";import"./V-Control.4e9f0bab.js";import"./V-Field.vue_vue&type=script&setup=true&lang.6bc9f6e9.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.22cd5f87.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.740c377e.js";import"./V-Placeload.35780b71.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.a448915e.js";import"./useDropdown.06fe74bc.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bf72322e.js";import"./V-Dropdown.57d0cfaf.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.2dced437.js";import"./activePanelState.4fc6f3e5.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d70704d6.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.89a8bcfd.js";import"./video.b57e71ec.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.4b9b5c72.js";import"./darkModeState.dc4b3020.js";import"./AnimatedLogo.8e6d8d96.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.40e826fb.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8fe32076.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.bc7fc596.js";import"./userPopovers.f4b9fc60.js";const H={class:"page-content-inner"},K={class:"d-flex justify-content-between align-items-center"},N={class:"w-100"},U={key:0,class:"w-100"},W=b("h1",{class:"title is-4"},"Select a location",-1),J=S("New Inventory"),Q=S("Confirm"),X=S("Confirm"),Z={key:0,class:"title is-4"},$={class:"flex-list-wrapper flex-list-v1"},ee=b("img",{class:"light-image",src:D,alt:""},null,-1),te=b("img",{class:"dark-image",src:I,alt:""},null,-1),ae={class:"flex-table"},se=b("span",{class:""},"ID",-1),le=b("span",null,"Status",-1),ie=b("span",null,"Date Open",-1),oe=b("span",null,"Date Close",-1),ne=b("span",null,"Products Total",-1),re=b("span",{class:""},"Actions",-1),ue={class:"flex-list-inner"},ce={"data-th":"ID",class:"flex-table-cell"},pe={class:"item-name dark-inverted"},de={class:"flex-table-cell","data-th":"Status"},ve={key:0,class:"tag is-success is-rounded"},me={key:1,class:"tag is-rounded"},fe={key:2,class:"tag is-info is-rounded"},ye={class:"flex-table-cell","data-th":"Date Open"},ge={class:"light-text"},he={class:"flex-table-cell","data-th":"Date Close"},_e={key:0,class:"light-text"},be={key:1},je={class:"flex-table-cell","data-th":"Products Total"},xe={class:"light-text"},ke={class:"flex-table-cell","data-th":"Actions"},we=S("Close Inventory"),Ve=S("View");var Ce=u({expose:[],setup(u){const{cookies:S}=c(),D=p(""),I=d((()=>D.value?G.filter((e=>e.username.match(new RegExp(D.value,"i"))||e.position.match(new RegExp(D.value,"i"))||e.industry.match(new RegExp(D.value,"i"))||e.status.match(new RegExp(D.value,"i"))||e.location.match(new RegExp(D.value,"i")))):E.value));A.value="Inventory",v({title:"Inventory"});const Ce=h(),Pe=p(!1),Se=p(!1),De=p(""),Ie=p(null),Ae=p(!1);m((()=>{R().then((e=>{F(z,"locations_id",B.value),O(z.value,"locations_id").change=Te,null!=S.get("locations_id")&&(O(z.value,"locations_id").model=S.get("locations_id"),Te(S.get("locations_id")))}))}));const Te=function(e){"object"==typeof e&&(e=this.model),Ae.value=!0,T.value=e,Y(e).then((e=>{Ae.value=!1}))},Ye=()=>{Se.value=!1,Ae.value=!0,De.value="Processing Inventory... Please do not close the browser window until the process is complete",L(Ie.value).then((e=>{q.success("Success"),Ae.value=!1,De.value="",Y(),window.location.reload()})).catch((e=>{q.error(e.response.data),Ae.value=!1,De.value=""}))},Ee=()=>{Pe.value=!1,Ae.value=!0,De.value="wait a moment, you will be redirected",M().then((e=>{Ce.push({name:"settings-inventory-create",query:{id:e.data.inventory,locations_id:T.value}})})).catch((e=>{q.error(e.response.data.message),Ae.value=!1,De.value=e.response.data.message}))},Le=d((()=>{let e=[];return E.value.forEach((t=>{e.push([t.id,t.status,t.created_at,t.updated_at,100,1])})),e}));return f(Le,(e=>{Ae.value=!0,setTimeout((()=>{Ae.value=!1}),500)})),(u,c)=>{const p=e,d=t,v=a,m=s,f=l,h=i,S=o,D=n,A=r;return y(),g(A,null,{default:_((()=>[b("div",H,[b(v,{class:"mb-6"},{default:_((()=>[b("div",K,[b("div",N,[j(T)?x("",!0):(y(),g("div",U,[W])),b(p,{"inputs-step":j(z)},null,8,["inputs-step"])]),!Ae.value&&j(T)?(y(),g(d,{key:0,color:"primary",onClick:c[1]||(c[1]=e=>Pe.value=!0),raised:"",class:"mb-4"},{default:_((()=>[J])),_:1})):x("",!0)])])),_:1}),b(f,{open:Se.value,actions:"center",onClose:c[2]||(c[2]=e=>Se.value=!1)},{content:_((()=>[b(m,{title:" Are you sure you want to close inventory?",subtitle:"This action will modify the stock of all products for sale and cannot be undone"})])),action:_((()=>[b(d,{color:"primary",onClick:Ye,raised:""},{default:_((()=>[Q])),_:1})])),_:1},8,["open"]),b(f,{open:Pe.value,actions:"center",onClose:c[3]||(c[3]=e=>Pe.value=!1)},{content:_((()=>[b(m,{title:" Are you sure to create a new inventory?",subtitle:"This action blocks all movements related to sales, creation and editing of products in the system until the inventory is closed."})])),action:_((()=>[b(d,{color:"primary",onClick:Ee,raised:""},{default:_((()=>[X])),_:1})])),_:1},8,["open"]),Ae.value?(y(),g("h1",Z,k(De.value),1)):x("",!0),b(D,{size:"large",active:Ae.value},{default:_((()=>[b("div",$,[b(h,{class:[0!==j(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:_((()=>[ee,te])),_:1},8,["class"]),b("div",ae,[b("div",{class:["flex-table-header",[0===j(I).length&&"is-hidden"]]},[se,le,ie,oe,ne,re],2),b("div",ue,[b(w,{name:"list",tag:"div"},{default:_((()=>[(y(!0),g(V,null,C(j(I),(e=>(y(),g("div",{key:e.id,class:"flex-table-item"},[b("div",ce,[b("div",null,[b("span",pe,k(e.id),1)])]),b("div",de,[1===e.status?(y(),g("span",ve,"Active")):x("",!0),0===e.status?(y(),g("span",me,"Close")):x("",!0),2===e.status?(y(),g("span",fe,"Process")):x("",!0)]),b("div",ye,[b("span",ge,k(j(P)(e.created_at).format("dd - DD/MM/YYYY")),1)]),b("div",he,[e.close?(y(),g("span",_e,k(j(P)(e.close).format("dd - DD/MM/YYYY")),1)):(y(),g("span",be,"-"))]),b("div",je,[b("span",xe,k(e.products.length),1)]),b("div",ke,[1==e.status?(y(),g(d,{key:0,color:"success",onClick:t=>{Se.value=!0,Ie.value=e.id},raised:"",class:"mr-4"},{default:_((()=>[we])),_:2},1032,["onClick"])):x("",!0),b(d,{to:{name:"settings-inventory-create",query:{id:e.id,locations_id:j(T)}}},{default:_((()=>[Ve])),_:2},1032,["to"])])])))),128))])),_:1})])]),j(I).length>5?(y(),g(S,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])),_:1},8,["active"])])])),_:1})}}});export default Ce;
