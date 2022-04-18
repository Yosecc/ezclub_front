import{_ as e}from"./V-Placeload.632826ef.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.f7302fd6.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.05034d3a.js";import{_ as a}from"./V-Control.c35d44b1.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.e8c1cc62.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.b4878b08.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.55f6ec15.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.dbc956bd.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.efd369c7.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.e01fb9f2.js";import{d as c,y as p,r as d,z as v,c as m,o as f,h as y,A as _,B as b,j as g,D as k,k as h,J as j,K as x,L as V,O as S,F as C,S as P,G as w}from"./vendor.42a295ea.js";import{p as U}from"./sidebarLayoutState.52178f66.js";import{l as I,a as K,b as T,d as A}from"./Inventory.a160d298.js";import{g as D,p as q}from"./Products.0d2235ad.js";import{n as B,b as F}from"./index.1a06469b.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.8a055d59.js";import"./useDropdown.d90c2b4c.js";import"./Companies.a4797ab3.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.3856dadb.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.403db530.js";import"./V-Dropdown.3b79d4cd.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.796e641d.js";import"./activePanelState.2211c9ac.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.3096b4c8.js";import"./V-Message.vue_vue&type=script&setup=true&lang.29aa6339.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.18497c11.js";import"./navbarLayoutState.5c37b211.js";import"./video.0a3f5b0b.js";import"./darkModeState.d08d2b99.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.df39ff9a.js";import"./AnimatedLogo.d7113c02.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e380e6f2.js";import"./V-Block.vue_vue&type=script&setup=true&lang.965255fa.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.992cd783.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.2c67469b.js";const L={key:0,class:"page-content-inner"},z={class:"title is-4 mb-0"},$={class:"title is-6 mb-0"},M={key:0,class:"title is-6"},E={key:1},N={class:"title is-5"},G={key:2},J={class:"d-flex justify-content-end mb-4 w-100"},O=w("Back"),H=w("Save"),Q=h("div",{class:"flex-table-header"},[h("span",null,"Product"),h("span",null,"SKU"),h("span",null,"Previous stock"),h("span",null,"Current stock"),h("span",null,"Total"),h("span",null,"Providers"),h("span",null,"Date of admission"),h("span",null,"Status")],-1),R={class:"flex-table-cell","data-th":"product"},W={class:"light-text d-flex align-items-center"},X={class:"flex-table-cell","data-th":"SKU"},Y={class:"flex-table-cell","data-th":"current_stock"},Z={class:"flex-table-cell","data-th":"previous_stock"},ee={class:"flex-table-cell","data-th":"previous_stock"},te={class:"flex-table-cell","data-th":"previous_stock"},se={class:"flex-table-cell","data-th":"previous_stock"},ae={class:"flex-table-cell","data-th":"-"},le={class:"d-flex justify-content-end mt-4 w-100"},oe=w("Save"),ue=w("Confirm");var re=c({expose:[],setup(c){U.value="Inventory Create",p({title:"Inventory"});const w=_(),re=b();d([]),v((()=>{if(de.value=!0,!w.query.locations_id)return B.error("la location es requerida"),void console.error("la locacion es requerida");I.value=w.query.locations_id,D(I.value,"active").then((e=>{K(w.query.id).then((e=>{ce(),de.value=!1}))}))}));const ne=d([]),ie=m((()=>ne.value)),ce=()=>{q.value.forEach((e=>{let t=null,s=null,a=null,l=!1,o=null,u=null;if(null!=T.value.products){const r=T.value.products.find((t=>t.product_id==e.id));console.log("element",e),console.log("product",r),null!=r?(s=r.previous_stock,t=r.current_stock,a=t+s,l=!0,o=r.proveedor,u=r.ingreso):(s=e.stock?e.stock.current_stock:0,a=s)}let r={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:s,subtotal:a,status:l,sku:e.sku,proveedor:o,ingreso:u};0==T.value.status&&0==r.status||ne.value.push(r)}))},pe=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},de=d(!1),ve=d(!1),me=d("Processing Inventory... Please do not close the browser window until the process is complete"),fe=()=>{ve.value=!1,de.value=!0;let e={products:_e.value};A(e).then((e=>{console.log("response.data",e.data),B.success("Data Save"),de.value=!1}))},ye=d({}),_e=d([]),be=()=>{ve.value=!0,ie.value.forEach((e=>{_e.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})})),console.log(_e.value),ye.value=`Do you want to save ${_e.value.length} products out of ${q.value.length}? Products not added in inventory will have stock = 0`},ge=m((()=>null!=T.value.products?T.value.products.length:""));return(c,p)=>{const d=e,v=t,m=s,_=a,b=l,w=o,U=u,I=r,K=n,A=i;return f(),y(A,null,{default:g((()=>[k(T)?(f(),y("div",L,[h("h1",z,"Inventory #"+j(k(T).id),1),h("h1",$," Status: "+j(1==k(T).status?"Active":"Close"),1),k(T)?(f(),y("h1",M," Products: "+j(k(ge)),1)):x("",!0),de.value?(f(),y("div",E,[h("p",N,j(me.value),1),h(d,{height:"200px"})])):(f(),y("div",G,[h("div",J,[h(v,{raised:"",onClick:p[1]||(p[1]=e=>k(re).back()),class:"mr-3"},{default:g((()=>[O])),_:1}),k(T).status?(f(),y(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[H])),_:1})):x("",!0)]),h(U,null,{header:g((()=>[Q])),body:g((()=>[(f(!0),y(V,null,S(ne.value,(e=>(f(),y("div",{key:e.id,class:"flex-table-item"},[h("div",R,[h("span",W,[h(m,{picture:`${k(F)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),h("div",null,[h("p",null,j(e.name),1)])])]),h("div",X,[h("p",null,[h("small",null,j(e.sku),1)])]),h("div",Y,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[C(h("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==k(T).status,onKeyup:t=>pe(e),onChange:t=>pe(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[P,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),h("div",Z,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[C(h("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==k(T).status,onKeyup:t=>pe(e),onChange:t=>pe(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[P,e.current_stock]])])),_:2},1024)])),_:2},1024)]),h("div",ee,[h("p",null,j(isNaN(e.subtotal)?0:e.subtotal),1)]),h("div",te,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[C(h("input",{"onUpdate:modelValue":t=>e.proveedor=t,type:"text",class:"input",readonly:0==k(T).status},null,8,["onUpdate:modelValue","readonly"]),[[P,e.proveedor]])])),_:2},1024)])),_:2},1024)]),h("div",se,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[C(h("input",{"onUpdate:modelValue":t=>e.ingreso=t,type:"date",class:"input",readonly:0==k(T).status},null,8,["onUpdate:modelValue","readonly"]),[[P,e.ingreso]])])),_:2},1024)])),_:2},1024)]),h("div",ae,[e.status?(f(),y(w,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(f(),y(w,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),h("div",le,[k(T).status?(f(),y(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[oe])),_:1})):x("",!0)])])),h(K,{open:ve.value,actions:"center",onClose:p[2]||(p[2]=e=>ve.value=!1)},{content:g((()=>[h(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),h("p",null,j(ye.value),1)])),action:g((()=>[h(v,{color:"primary",onClick:fe,raised:""},{default:g((()=>[ue])),_:1})])),_:1},8,["open"])])):x("",!0)])),_:1})}}});export default re;
