import{_ as e}from"./V-Placeload.72e6de58.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.9233a2bf.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bf625c73.js";import{_ as a}from"./V-Control.e16eda34.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.7ab7a74f.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.6a87dd80.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.26c7d71f.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.6817a784.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.47db5da5.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7e509fcc.js";import{d as p,L as c,r as d,G as v,c as m,o as f,h as y,O as _,a4 as g,j as b,D as k,k as h,F as j,J as x,Q as V,R as S,S as C,Y as P,E as w}from"./vendor.19059cc4.js";import{p as U}from"./sidebarLayoutState.efc25bb1.js";import{l as I,a as T,b as D,d as K}from"./Inventory.8a312ebd.js";import{g as L,p as q}from"./Products.57eb1d5f.js";import{n as A,b as F}from"./index.baf361a5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.d8328939.js";import"./useDropdown.63c50e3d.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.89489468.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.2af61529.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.53f2a136.js";import"./V-Dropdown.fd74f7e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.4b194de7.js";import"./Companies.c782ca78.js";import"./activePanelState.922a5593.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.0cc73652.js";import"./V-Message.vue_vue&type=script&setup=true&lang.6b830a51.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.7cc10ad0.js";import"./navbarLayoutState.9c1af26a.js";import"./video.00981ddd.js";import"./darkModeState.192f5f6e.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2089f3a0.js";import"./AnimatedLogo.496829ee.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.cc282596.js";import"./V-Block.vue_vue&type=script&setup=true&lang.bfd23873.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.8511020c.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.a82f9e10.js";const B={key:0,class:"page-content-inner"},$={class:"title is-4 mb-0"},z={class:"title is-6 mb-0"},E={key:0,class:"title is-6"},M={key:1},N={class:"title is-5"},G={key:2},J={class:"d-flex justify-content-end mb-4 w-100"},O=w("Back"),Q=w("Save"),R=h("div",{class:"flex-table-header"},[h("span",null,"Product"),h("span",null,"SKU"),h("span",null,"Previous stock"),h("span",null,"Current stock"),h("span",null,"Total"),h("span",null,"Providers"),h("span",null,"Date of admission"),h("span",null,"Status")],-1),Y={class:"flex-table-cell","data-th":"product"},H={class:"light-text d-flex align-items-center"},W={class:"flex-table-cell","data-th":"SKU"},X={class:"flex-table-cell","data-th":"current_stock"},Z={class:"flex-table-cell","data-th":"previous_stock"},ee={class:"flex-table-cell","data-th":"previous_stock"},te={class:"flex-table-cell","data-th":"previous_stock"},se={class:"flex-table-cell","data-th":"previous_stock"},ae={class:"flex-table-cell","data-th":"-"},le={class:"d-flex justify-content-end mt-4 w-100"},oe=w("Save"),ue=w("Confirm");var re=p({expose:[],setup(p){U.value="Inventory Create",c({title:"Inventory"});const w=_(),re=g();d([]),v((()=>{if(de.value=!0,!w.query.locations_id)return A.error("la location es requerida"),void console.error("la locacion es requerida");I.value=w.query.locations_id,L(I.value,"active").then((e=>{T(w.query.id).then((e=>{pe(),de.value=!1}))}))}));const ne=d([]),ie=m((()=>ne.value)),pe=()=>{q.value.forEach((e=>{let t=null,s=null,a=null,l=!1,o=null,u=null;if(null!=D.value.products){const r=D.value.products.find((t=>t.product_id==e.id));console.log("element",e),console.log("product",r),null!=r?(s=r.previous_stock,t=r.current_stock,a=t+s,l=!0,o=r.proveedor,u=r.ingreso):(s=e.stock?e.stock.current_stock:0,a=s)}let r={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:s,subtotal:a,status:l,sku:e.sku,proveedor:o,ingreso:u};0==D.value.status&&0==r.status||ne.value.push(r)}))},ce=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},de=d(!1),ve=d(!1),me=d("Processing Inventory... Please do not close the browser window until the process is complete"),fe=()=>{ve.value=!1,de.value=!0;let e={products:_e.value};K(e).then((e=>{console.log("response.data",e.data),A.success("Data Save"),de.value=!1}))},ye=d({}),_e=d([]),ge=()=>{ve.value=!0,ie.value.forEach((e=>{_e.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})})),console.log(_e.value),ye.value=`Do you want to save ${_e.value.length} products out of ${q.value.length}? Products not added in inventory will have stock = 0`},be=m((()=>null!=D.value.products?D.value.products.length:""));return(p,c)=>{const d=e,v=t,m=s,_=a,g=l,w=o,U=u,I=r,T=n,K=i;return f(),y(K,null,{default:b((()=>[k(D)?(f(),y("div",B,[h("h1",$,"Inventory #"+j(k(D).id),1),h("h1",z," Status: "+j(1==k(D).status?"Active":"Close"),1),k(D)?(f(),y("h1",E," Products: "+j(k(be)),1)):x("",!0),de.value?(f(),y("div",M,[h("p",N,j(me.value),1),h(d,{height:"200px"})])):(f(),y("div",G,[h("div",J,[h(v,{raised:"",onClick:c[1]||(c[1]=e=>k(re).back()),class:"mr-3"},{default:b((()=>[O])),_:1}),k(D).status?(f(),y(v,{key:0,color:"success",onClick:ge,raised:""},{default:b((()=>[Q])),_:1})):x("",!0)]),h(U,null,{header:b((()=>[R])),body:b((()=>[(f(!0),y(V,null,S(ne.value,(e=>(f(),y("div",{key:e.id,class:"flex-table-item"},[h("div",Y,[h("span",H,[h(m,{picture:`${k(F)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),h("div",null,[h("p",null,j(e.name),1)])])]),h("div",W,[h("p",null,[h("small",null,j(e.sku),1)])]),h("div",X,[h(g,null,{default:b((()=>[h(_,null,{default:b((()=>[C(h("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==k(D).status,onKeyup:t=>ce(e),onChange:t=>ce(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[P,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),h("div",Z,[h(g,null,{default:b((()=>[h(_,null,{default:b((()=>[C(h("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==k(D).status,onKeyup:t=>ce(e),onChange:t=>ce(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[P,e.current_stock]])])),_:2},1024)])),_:2},1024)]),h("div",ee,[h("p",null,j(isNaN(e.subtotal)?0:e.subtotal),1)]),h("div",te,[h(g,null,{default:b((()=>[h(_,null,{default:b((()=>[C(h("input",{"onUpdate:modelValue":t=>e.proveedor=t,type:"text",class:"input",readonly:0==k(D).status},null,8,["onUpdate:modelValue","readonly"]),[[P,e.proveedor]])])),_:2},1024)])),_:2},1024)]),h("div",se,[h(g,null,{default:b((()=>[h(_,null,{default:b((()=>[C(h("input",{"onUpdate:modelValue":t=>e.ingreso=t,type:"date",class:"input",readonly:0==k(D).status},null,8,["onUpdate:modelValue","readonly"]),[[P,e.ingreso]])])),_:2},1024)])),_:2},1024)]),h("div",ae,[e.status?(f(),y(w,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(f(),y(w,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),h("div",le,[k(D).status?(f(),y(v,{key:0,color:"success",onClick:ge,raised:""},{default:b((()=>[oe])),_:1})):x("",!0)])])),h(T,{open:ve.value,actions:"center",onClose:c[2]||(c[2]=e=>ve.value=!1)},{content:b((()=>[h(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),h("p",null,j(ye.value),1)])),action:b((()=>[h(v,{color:"primary",onClick:fe,raised:""},{default:b((()=>[ue])),_:1})])),_:1},8,["open"])])):x("",!0)])),_:1})}}});export default re;
