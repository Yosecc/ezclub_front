import{_ as e}from"./V-Placeload.fcff0d17.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.ab2fa679.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.136df1e4.js";import{_ as a}from"./V-Control.06dbdf31.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.2ea96b7e.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.5b52e0b2.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.31c9153e.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.fa78576f.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.0af97236.js";import{_ as c}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.178ecd78.js";import{d as i,O as p,r as d,o as v,b as m,h as f,i as y,P as _,ab as b,k as g,F as k,l as h,H as j,K as x,R as V,S as C,W as P,_ as S,G as w}from"./vendor.f6529162.js";import{p as U}from"./sidebarLayoutState.c8581ef5.js";import{l as I,a as K,b as q,d as A}from"./Inventory.3799e656.js";import{g as D,p as F}from"./Products.1a7ced1f.js";import{n as T,b as B}from"./index.b92f974c.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.7b1ab903.js";import"./useDropdown.a8f2ccfd.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.96926cc9.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.5bd41c94.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.eac658fd.js";import"./V-Card.vue_vue&type=script&setup=true&lang.8f5cfc5d.js";import"./V-Dropdown.4da156b3.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.5a6bc84a.js";import"./Companies.a3ac253c.js";import"./activePanelState.cd1f34a1.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.6bba97a1.js";import"./video.25f5791f.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.40ec76ad.js";import"./darkModeState.2811143e.js";import"./AnimatedLogo.2166ccdf.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14426616.js";import"./V-Block.vue_vue&type=script&setup=true&lang.ec12757f.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.995d3c8c.js";import"./userPopovers.f4b9fc60.js";const L={key:0,class:"page-content-inner"},$={class:"title is-4 mb-0"},z={class:"title is-6 mb-0"},E={key:0,class:"title is-6"},M={key:1},N={class:"title is-5"},G={key:2},H={class:"d-flex justify-content-end mb-4 w-100"},O=w("Back"),R=w("Save"),W=h("div",{class:"flex-table-header"},[h("span",null,"Product"),h("span",null,"SKU"),h("span",null,"Previous stock"),h("span",null,"Current stock"),h("span",null,"Total"),h("span",null,"Providers"),h("span",null,"Date of admission"),h("span",null,"Status")],-1),J={class:"flex-table-cell","data-th":"product"},Q={class:"light-text d-flex align-items-center"},X={class:"flex-table-cell","data-th":"SKU"},Y={class:"flex-table-cell","data-th":"current_stock"},Z={class:"flex-table-cell","data-th":"previous_stock"},ee={class:"flex-table-cell","data-th":"previous_stock"},te={class:"flex-table-cell","data-th":"previous_stock"},se={class:"flex-table-cell","data-th":"previous_stock"},ae={class:"flex-table-cell","data-th":"-"},le={class:"d-flex justify-content-end mt-4 w-100"},oe=w("Save"),ue=w("Confirm");var re=i({expose:[],setup(i){U.value="Inventory Create",p({title:"Inventory"});const w=_(),re=b();d([]),v((()=>{if(de.value=!0,!w.query.locations_id)return T.error("la location es requerida"),void console.error("la locacion es requerida");I.value=w.query.locations_id,D(I.value,"active").then((e=>{K(w.query.id).then((e=>{ie(),de.value=!1}))}))}));const ne=d([]),ce=m((()=>ne.value)),ie=()=>{F.value.forEach((e=>{let t=null,s=null,a=null,l=!1,o=null,u=null;if(null!=q.value.products){const r=q.value.products.find((t=>t.product_id==e.id));console.log("element",e),console.log("product",r),null!=r?(s=r.previous_stock,t=r.current_stock,a=t+s,l=!0,o=r.proveedor,u=r.ingreso):(s=e.stock?e.stock.current_stock:0,a=s)}let r={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:s,subtotal:a,status:l,sku:e.sku,proveedor:o,ingreso:u};0==q.value.status&&0==r.status||ne.value.push(r)}))},pe=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},de=d(!1),ve=d(!1),me=d("Processing Inventory... Please do not close the browser window until the process is complete"),fe=()=>{ve.value=!1,de.value=!0;let e={products:_e.value};A(e).then((e=>{console.log("response.data",e.data),T.success("Data Save"),de.value=!1}))},ye=d({}),_e=d([]),be=()=>{ve.value=!0,ce.value.forEach((e=>{_e.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})})),console.log(_e.value),ye.value=`Do you want to save ${_e.value.length} products out of ${F.value.length}? Products not added in inventory will have stock = 0`},ge=m((()=>null!=q.value.products?q.value.products.length:""));return(i,p)=>{const d=e,v=t,m=s,_=a,b=l,w=o,U=u,I=r,K=n,A=c;return f(),y(A,null,{default:g((()=>[k(q)?(f(),y("div",L,[h("h1",$,"Inventory #"+j(k(q).id),1),h("h1",z," Status: "+j(1==k(q).status?"Active":"Close"),1),k(q)?(f(),y("h1",E," Products: "+j(k(ge)),1)):x("",!0),de.value?(f(),y("div",M,[h("p",N,j(me.value),1),h(d,{height:"200px"})])):(f(),y("div",G,[h("div",H,[h(v,{raised:"",onClick:p[1]||(p[1]=e=>k(re).back()),class:"mr-3"},{default:g((()=>[O])),_:1}),k(q).status?(f(),y(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[R])),_:1})):x("",!0)]),h(U,null,{header:g((()=>[W])),body:g((()=>[(f(!0),y(V,null,C(ne.value,(e=>(f(),y("div",{key:e.id,class:"flex-table-item"},[h("div",J,[h("span",Q,[h(m,{picture:`${k(B)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),h("div",null,[h("p",null,j(e.name),1)])])]),h("div",X,[h("p",null,[h("small",null,j(e.sku),1)])]),h("div",Y,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==k(q).status,onKeyup:t=>pe(e),onChange:t=>pe(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[S,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),h("div",Z,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==k(q).status,onKeyup:t=>pe(e),onChange:t=>pe(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[S,e.current_stock]])])),_:2},1024)])),_:2},1024)]),h("div",ee,[h("p",null,j(isNaN(e.subtotal)?0:e.subtotal),1)]),h("div",te,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.proveedor=t,type:"text",class:"input",readonly:0==k(q).status},null,8,["onUpdate:modelValue","readonly"]),[[S,e.proveedor]])])),_:2},1024)])),_:2},1024)]),h("div",se,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.ingreso=t,type:"date",class:"input",readonly:0==k(q).status},null,8,["onUpdate:modelValue","readonly"]),[[S,e.ingreso]])])),_:2},1024)])),_:2},1024)]),h("div",ae,[e.status?(f(),y(w,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(f(),y(w,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),h("div",le,[k(q).status?(f(),y(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[oe])),_:1})):x("",!0)])])),h(K,{open:ve.value,actions:"center",onClose:p[2]||(p[2]=e=>ve.value=!1)},{content:g((()=>[h(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),h("p",null,j(ye.value),1)])),action:g((()=>[h(v,{color:"primary",onClick:fe,raised:""},{default:g((()=>[ue])),_:1})])),_:1},8,["open"])])):x("",!0)])),_:1})}}});export default re;