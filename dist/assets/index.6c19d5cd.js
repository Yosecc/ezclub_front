import{a as e,c as t,l as a,_ as s}from"./Companies.a4797ab3.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.f7302fd6.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.a7cae2c2.js";import{_ as i}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.dbc956bd.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.efd369c7.js";import{_ as n}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.3495097a.js";import{_ as u}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.382c98aa.js";import{_ as c}from"./V-Loader.vue_vue&type=script&setup=true&lang.70c23558.js";import{_ as p}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e01fb9f2.js";import{d,u as v,r as m,c as f,y,z as g,w as _,o as h,h as b,B as j,j as x,k,D as w,K as V,J as C,a8 as P,L as D,O as S,aa as I,G as T}from"./vendor.42a295ea.js";import{_ as A,a as Y}from"./search-4-dark.fb3880a5.js";import{p as L}from"./sidebarLayoutState.52178f66.js";import{l as M,g as E,i as R,c as z,s as B}from"./Inventory.a160d298.js";import{s as O,g as q,n as F}from"./index.1a06469b.js";import{u as G}from"./index.d9e84969.js";import"./V-Control.c35d44b1.js";import"./V-Field.vue_vue&type=script&setup=true&lang.e8c1cc62.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3856dadb.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.403db530.js";import"./V-Placeload.632826ef.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8a055d59.js";import"./useDropdown.d90c2b4c.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.05034d3a.js";import"./V-Dropdown.3b79d4cd.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.796e641d.js";import"./activePanelState.2211c9ac.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.3096b4c8.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.b4878b08.js";import"./V-Message.vue_vue&type=script&setup=true&lang.29aa6339.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.18497c11.js";import"./navbarLayoutState.5c37b211.js";import"./video.0a3f5b0b.js";import"./darkModeState.d08d2b99.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.df39ff9a.js";import"./AnimatedLogo.d7113c02.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e380e6f2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.965255fa.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.992cd783.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.2c67469b.js";const J={class:"page-content-inner"},K={class:"d-flex justify-content-between align-items-center"},N={class:"w-100"},U={key:0,class:"w-100"},W=k("h1",{class:"title is-4"},"Select a location",-1),H=T("New Inventory"),Q=T("Confirm"),X=T("Confirm"),Z={key:0,class:"title is-4"},$={class:"flex-list-wrapper flex-list-v1"},ee=k("img",{class:"light-image",src:A,alt:""},null,-1),te=k("img",{class:"dark-image",src:Y,alt:""},null,-1),ae={class:"flex-table"},se=k("span",{class:""},"ID",-1),le=k("span",null,"Status",-1),oe=k("span",null,"Date Open",-1),ie=k("span",null,"Date Close",-1),re=k("span",null,"Products Total",-1),ne=k("span",{class:""},"Actions",-1),ue={class:"flex-list-inner"},ce={"data-th":"ID",class:"flex-table-cell"},pe={class:"item-name dark-inverted"},de={class:"flex-table-cell","data-th":"Status"},ve={key:0,class:"tag is-success is-rounded"},me={key:1,class:"tag is-rounded"},fe={key:2,class:"tag is-info is-rounded"},ye={class:"flex-table-cell","data-th":"Date Open"},ge={class:"light-text"},_e={class:"flex-table-cell","data-th":"Date Close"},he={key:0,class:"light-text"},be={key:1},je={class:"flex-table-cell","data-th":"Products Total"},xe={class:"light-text"},ke={class:"flex-table-cell","data-th":"Actions"},we=T("Close Inventory"),Ve=T("View");var Ce=d({expose:[],setup(d){const{cookies:T}=v(),A=m(""),Y=f((()=>A.value?G.filter((e=>e.username.match(new RegExp(A.value,"i"))||e.position.match(new RegExp(A.value,"i"))||e.industry.match(new RegExp(A.value,"i"))||e.status.match(new RegExp(A.value,"i"))||e.location.match(new RegExp(A.value,"i")))):R.value));L.value="Inventory",y({title:"Inventory"});const Ce=j(),Pe=m(!1),De=m(!1),Se=m(""),Ie=m(null),Te=m(!1);g((()=>{e().then((e=>{O(a,"locations_id",t.value.locations),q(a.value,"locations_id").change=Ae,null!=T.get("locations_id")&&(q(a.value,"locations_id").model=T.get("locations_id"),Ae(T.get("locations_id")))}))}));const Ae=function(e){"object"==typeof e&&(e=this.model),Te.value=!0,M.value=e,E(e).then((e=>{Te.value=!1}))},Ye=()=>{De.value=!1,Te.value=!0,Se.value="Processing Inventory... Please do not close the browser window until the process is complete",z(Ie.value).then((e=>{F.success("Success"),Te.value=!1,Se.value="",E(),window.location.reload()})).catch((e=>{F.error(e.response.data),Te.value=!1,Se.value=""}))},Le=()=>{Pe.value=!1,Te.value=!0,Se.value="wait a moment, you will be redirected",B().then((e=>{Ce.push({name:"settings-inventory-create",query:{id:e.data.inventory,locations_id:M.value}})})).catch((e=>{F.error(e.response.data.message),Te.value=!1,Se.value=e.response.data.message}))},Me=f((()=>{let e=[];return R.value.forEach((t=>{e.push([t.id,t.status,t.created_at,t.updated_at,100,1])})),e}));return _(Me,(e=>{Te.value=!0,setTimeout((()=>{Te.value=!1}),500)})),(e,t)=>{const d=s,v=l,m=o,f=i,y=r,g=n,_=u,j=c,T=p;return h(),b(T,null,{default:x((()=>[k("div",J,[k(m,{class:"mb-6"},{default:x((()=>[k("div",K,[k("div",N,[w(M)?V("",!0):(h(),b("div",U,[W])),k(d,{"inputs-step":w(a)},null,8,["inputs-step"])]),!Te.value&&w(M)?(h(),b(v,{key:0,color:"primary",onClick:t[1]||(t[1]=e=>Pe.value=!0),raised:"",class:"mb-4"},{default:x((()=>[H])),_:1})):V("",!0)])])),_:1}),k(y,{open:De.value,actions:"center",onClose:t[2]||(t[2]=e=>De.value=!1)},{content:x((()=>[k(f,{title:" Are you sure you want to close inventory?",subtitle:"This action will modify the stock of all products for sale and cannot be undone"})])),action:x((()=>[k(v,{color:"primary",onClick:Ye,raised:""},{default:x((()=>[Q])),_:1})])),_:1},8,["open"]),k(y,{open:Pe.value,actions:"center",onClose:t[3]||(t[3]=e=>Pe.value=!1)},{content:x((()=>[k(f,{title:" Are you sure to create a new inventory?",subtitle:"This action blocks all movements related to sales, creation and editing of products in the system until the inventory is closed."})])),action:x((()=>[k(v,{color:"primary",onClick:Le,raised:""},{default:x((()=>[X])),_:1})])),_:1},8,["open"]),Te.value?(h(),b("h1",Z,C(Se.value),1)):V("",!0),k(j,{size:"large",active:Te.value},{default:x((()=>[k("div",$,[k(g,{class:[0!==w(Y).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n            search terms you've entered. Please try different search terms or\n            criteria.",larger:""},{image:x((()=>[ee,te])),_:1},8,["class"]),k("div",ae,[k("div",{class:["flex-table-header",[0===w(Y).length&&"is-hidden"]]},[se,le,oe,ie,re,ne],2),k("div",ue,[k(P,{name:"list",tag:"div"},{default:x((()=>[(h(!0),b(D,null,S(w(Y),(e=>(h(),b("div",{key:e.id,class:"flex-table-item"},[k("div",ce,[k("div",null,[k("span",pe,C(e.id),1)])]),k("div",de,[1===e.status?(h(),b("span",ve,"Active")):V("",!0),0===e.status?(h(),b("span",me,"Close")):V("",!0),2===e.status?(h(),b("span",fe,"Process")):V("",!0)]),k("div",ye,[k("span",ge,C(w(I)(e.created_at).format("dd - DD/MM/YYYY")),1)]),k("div",_e,[e.close?(h(),b("span",he,C(w(I)(e.close).format("dd - DD/MM/YYYY")),1)):(h(),b("span",be,"-"))]),k("div",je,[k("span",xe,C(e.products.length),1)]),k("div",ke,[1==e.status?(h(),b(v,{key:0,color:"success",onClick:t=>{De.value=!0,Ie.value=e.id},raised:"",class:"mr-4"},{default:x((()=>[we])),_:2},1032,["onClick"])):V("",!0),k(v,{to:{name:"settings-inventory-create",query:{id:e.id,locations_id:w(M)}}},{default:x((()=>[Ve])),_:2},1032,["to"])])])))),128))])),_:1})])]),w(Y).length>5?(h(),b(_,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):V("",!0)])])),_:1},8,["active"])])])),_:1})}}});export default Ce;
