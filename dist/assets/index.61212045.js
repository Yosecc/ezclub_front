import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.216555ac.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.a19772d7.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.f9122334.js";import{_ as s}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.d7fe48d3.js";import{_ as l}from"./V-Modal.vue_vue&type=script&setup=true&lang.6d68e761.js";import{_ as i}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.b1a805d4.js";import{_ as o}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.dfb313e9.js";import{_ as n}from"./V-Loader.vue_vue&type=script&setup=true&lang.52d1cec5.js";import{_ as r}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.20132096.js";import{d as u,u as c,r as p,b as d,O as v,H as m,w as f,o as y,h as g,a9 as h,j as _,k as j,E as b,K as x,G as k,aa as w,R as V,S as C,A as P,F as S}from"./vendor.c210e0cb.js";import{_ as D,a as I}from"./search-4-dark.12f0bf0d.js";import{p as A}from"./sidebarLayoutState.56e6ff2f.js";import{l as T,g as Y,i as E,c as L,s as M}from"./Inventory.abcb44fb.js";import{a as R,d as z,l as B}from"./Companies.a0ad3c72.js";import{a as F,g as O,n as q}from"./index.0dd75cf6.js";import{u as G}from"./index.d9e84969.js";import"./V-Control.45649f5a.js";import"./V-Field.vue_vue&type=script&setup=true&lang.62a71784.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.4304a3c4.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.c257ea05.js";import"./V-Placeload.141ef784.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7fec429f.js";import"./useDropdown.d008e23c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.ac8876f8.js";import"./V-Dropdown.6f020dd9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.6420ba03.js";import"./activePanelState.2c623a96.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6d21c535.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.983318ce.js";import"./video.307aaf8f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.19f427af.js";import"./darkModeState.1bbf1abb.js";import"./AnimatedLogo.24dfbe8f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.eda5e5c1.js";import"./V-Block.vue_vue&type=script&setup=true&lang.590d89f0.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9bad41e6.js";import"./userPopovers.f4b9fc60.js";const H={class:"page-content-inner"},K={class:"d-flex justify-content-between align-items-center"},N={class:"w-100"},U={key:0,class:"w-100"},W=j("h1",{class:"title is-4"},"Select a location",-1),J=S("New Inventory"),Q=S("Confirm"),X=S("Confirm"),Z={key:0,class:"title is-4"},$={class:"flex-list-wrapper flex-list-v1"},ee=j("img",{class:"light-image",src:D,alt:""},null,-1),te=j("img",{class:"dark-image",src:I,alt:""},null,-1),ae={class:"flex-table"},se=j("span",{class:""},"ID",-1),le=j("span",null,"Status",-1),ie=j("span",null,"Date Open",-1),oe=j("span",null,"Date Close",-1),ne=j("span",null,"Products Total",-1),re=j("span",{class:""},"Actions",-1),ue={class:"flex-list-inner"},ce={"data-th":"ID",class:"flex-table-cell"},pe={class:"item-name dark-inverted"},de={class:"flex-table-cell","data-th":"Status"},ve={key:0,class:"tag is-success is-rounded"},me={key:1,class:"tag is-rounded"},fe={key:2,class:"tag is-info is-rounded"},ye={class:"flex-table-cell","data-th":"Date Open"},ge={class:"light-text"},he={class:"flex-table-cell","data-th":"Date Close"},_e={key:0,class:"light-text"},je={key:1},be={class:"flex-table-cell","data-th":"Products Total"},xe={class:"light-text"},ke={class:"flex-table-cell","data-th":"Actions"},we=S("Close Inventory"),Ve=S("View");var Ce=u({expose:[],setup(u){const{cookies:S}=c(),D=p(""),I=d((()=>D.value?G.filter((e=>e.username.match(new RegExp(D.value,"i"))||e.position.match(new RegExp(D.value,"i"))||e.industry.match(new RegExp(D.value,"i"))||e.status.match(new RegExp(D.value,"i"))||e.location.match(new RegExp(D.value,"i")))):E.value));A.value="Inventory",v({title:"Inventory"});const Ce=h(),Pe=p(!1),Se=p(!1),De=p(""),Ie=p(null),Ae=p(!1);m((()=>{R().then((e=>{F(B,"locations_id",z.value),O(B.value,"locations_id").change=Te,null!=S.get("locations_id")&&(O(B.value,"locations_id").model=S.get("locations_id"),Te(S.get("locations_id")))}))}));const Te=function(e){"object"==typeof e&&(e=this.model),Ae.value=!0,T.value=e,Y(e).then((e=>{Ae.value=!1}))},Ye=()=>{Se.value=!1,Ae.value=!0,De.value="Processing Inventory... Please do not close the browser window until the process is complete",L(Ie.value).then((e=>{q.success("Success"),Ae.value=!1,De.value="",Y(),window.location.reload()})).catch((e=>{q.error(e.response.data),Ae.value=!1,De.value=""}))},Ee=()=>{Pe.value=!1,Ae.value=!0,De.value="wait a moment, you will be redirected",M().then((e=>{Ce.push({name:"settings-inventory-create",query:{id:e.data.inventory,locations_id:T.value}})})).catch((e=>{q.error(e.response.data.message),Ae.value=!1,De.value=e.response.data.message}))},Le=d((()=>{let e=[];return E.value.forEach((t=>{e.push([t.id,t.status,t.created_at,t.updated_at,100,1])})),e}));return f(Le,(e=>{Ae.value=!0,setTimeout((()=>{Ae.value=!1}),500)})),(u,c)=>{const p=e,d=t,v=a,m=s,f=l,h=i,S=o,D=n,A=r;return y(),g(A,null,{default:_((()=>[j("div",H,[j(v,{class:"mb-6"},{default:_((()=>[j("div",K,[j("div",N,[b(T)?x("",!0):(y(),g("div",U,[W])),j(p,{"inputs-step":b(B)},null,8,["inputs-step"])]),!Ae.value&&b(T)?(y(),g(d,{key:0,color:"primary",onClick:c[1]||(c[1]=e=>Pe.value=!0),raised:"",class:"mb-4"},{default:_((()=>[J])),_:1})):x("",!0)])])),_:1}),j(f,{open:Se.value,actions:"center",onClose:c[2]||(c[2]=e=>Se.value=!1)},{content:_((()=>[j(m,{title:" Are you sure you want to close inventory?",subtitle:"This action will modify the stock of all products for sale and cannot be undone"})])),action:_((()=>[j(d,{color:"primary",onClick:Ye,raised:""},{default:_((()=>[Q])),_:1})])),_:1},8,["open"]),j(f,{open:Pe.value,actions:"center",onClose:c[3]||(c[3]=e=>Pe.value=!1)},{content:_((()=>[j(m,{title:" Are you sure to create a new inventory?",subtitle:"This action blocks all movements related to sales, creation and editing of products in the system until the inventory is closed."})])),action:_((()=>[j(d,{color:"primary",onClick:Ee,raised:""},{default:_((()=>[X])),_:1})])),_:1},8,["open"]),Ae.value?(y(),g("h1",Z,k(De.value),1)):x("",!0),j(D,{size:"large",active:Ae.value},{default:_((()=>[j("div",$,[j(h,{class:[0!==b(I).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:_((()=>[ee,te])),_:1},8,["class"]),j("div",ae,[j("div",{class:["flex-table-header",[0===b(I).length&&"is-hidden"]]},[se,le,ie,oe,ne,re],2),j("div",ue,[j(w,{name:"list",tag:"div"},{default:_((()=>[(y(!0),g(V,null,C(b(I),(e=>(y(),g("div",{key:e.id,class:"flex-table-item"},[j("div",ce,[j("div",null,[j("span",pe,k(e.id),1)])]),j("div",de,[1===e.status?(y(),g("span",ve,"Active")):x("",!0),0===e.status?(y(),g("span",me,"Close")):x("",!0),2===e.status?(y(),g("span",fe,"Process")):x("",!0)]),j("div",ye,[j("span",ge,k(b(P)(e.created_at).format("dd - DD/MM/YYYY")),1)]),j("div",he,[e.close?(y(),g("span",_e,k(b(P)(e.close).format("dd - DD/MM/YYYY")),1)):(y(),g("span",je,"-"))]),j("div",be,[j("span",xe,k(e.products.length),1)]),j("div",ke,[1==e.status?(y(),g(d,{key:0,color:"success",onClick:t=>{Se.value=!0,Ie.value=e.id},raised:"",class:"mr-4"},{default:_((()=>[we])),_:2},1032,["onClick"])):x("",!0),j(d,{to:{name:"settings-inventory-create",query:{id:e.id,locations_id:b(T)}}},{default:_((()=>[Ve])),_:2},1032,["to"])])])))),128))])),_:1})])]),b(I).length>5?(y(),g(S,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):x("",!0)])])),_:1},8,["active"])])])),_:1})}}});export default Ce;
