import{_ as e}from"./V-Placeload.e1b5c41e.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.e4f3f19e.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.119fc4d3.js";import{_ as a}from"./V-Control.2f65f00c.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.c6cf6183.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.62f4b657.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.5dbf56fc.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.c3d223fd.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.146bedbc.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.2e653848.js";import{d as p,y as c,r as d,z as v,b as f,o as m,h as y,A as _,B as b,j as g,D as k,k as h,J as j,K as x,L as V,N as C,F as P,R as S,G as w}from"./vendor.685e53b0.js";import{p as U}from"./sidebarLayoutState.b1e70c1b.js";import{l as I,a as K,b as T,d as A}from"./Inventory.c6d77de7.js";import{g as D,p as q}from"./Products.dd6a1f34.js";import{n as B}from"./ActivityPanel.vue_vue&type=style&index=0&lang.a64b7ff9.js";import{a as F}from"./index.a9908f9a.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.fb321217.js";import"./V-Message.vue_vue&type=script&setup=true&lang.8a404c76.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.5d7a09f8.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7327817.js";import"./navbarLayoutState.b1fefaec.js";import"./V-Dropdown.4b56e22f.js";import"./useDropdown.0a27f828.js";import"./video.89824664.js";import"./activePanelState.618a6e66.js";import"./darkModeState.ac572066.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.7abfdf0e.js";import"./AnimatedLogo.77bc3feb.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.0d63a362.js";import"./V-Block.vue_vue&type=script&setup=true&lang.218e9dd3.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9f34b4f7.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.0749519e.js";import"./Companies.368e3c29.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.0ae318bf.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.fbfe4d00.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./fastpizza.1e58d0ec.js";const L={key:0,class:"page-content-inner"},z={class:"title is-4 mb-0"},$={class:"title is-6 mb-0"},M={key:0,class:"title is-6"},N={key:1},E={class:"title is-5"},G={key:2},J={class:"d-flex justify-content-end mb-4 w-100"},R=w("Back"),H=w("Save"),O=h("div",{class:"flex-table-header"},[h("span",null,"Product"),h("span",null,"SKU"),h("span",null,"Previous stock"),h("span",null,"Current stock"),h("span",null,"Total"),h("span",null,"Providers"),h("span",null,"Date of admission"),h("span",null,"Status")],-1),Q={class:"flex-table-cell","data-th":"product"},W={class:"light-text d-flex align-items-center"},X={class:"flex-table-cell","data-th":"SKU"},Y={class:"flex-table-cell","data-th":"current_stock"},Z={class:"flex-table-cell","data-th":"previous_stock"},ee={class:"flex-table-cell","data-th":"previous_stock"},te={class:"flex-table-cell","data-th":"previous_stock"},se={class:"flex-table-cell","data-th":"previous_stock"},ae={class:"flex-table-cell","data-th":"-"},le={class:"d-flex justify-content-end mt-4 w-100"},oe=w("Save"),ue=w("Confirm");var re=p({expose:[],setup(p){U.value="Inventory Create",c({title:"Inventory"});const w=_(),re=b();d([]),v((()=>{if(de.value=!0,!w.query.locations_id)return B.error("la location es requerida"),void console.error("la locacion es requerida");I.value=w.query.locations_id,D(I.value,"active").then((e=>{K(w.query.id).then((e=>{pe(),de.value=!1}))}))}));const ne=d([]),ie=f((()=>ne.value)),pe=()=>{q.value.forEach((e=>{let t=null,s=null,a=null,l=!1,o=null,u=null;if(null!=T.value.products){const r=T.value.products.find((t=>t.product_id==e.id));console.log("element",e),console.log("product",r),null!=r?(s=r.previous_stock,t=r.current_stock,a=t+s,l=!0,o=r.proveedor,u=r.ingreso):(s=e.stock?e.stock.current_stock:0,a=s)}let r={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:s,subtotal:a,status:l,sku:e.sku,proveedor:o,ingreso:u};0==T.value.status&&0==r.status||ne.value.push(r)}))},ce=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},de=d(!1),ve=d(!1),fe=d("Processing Inventory... Please do not close the browser window until the process is complete"),me=()=>{ve.value=!1,de.value=!0;let e={products:_e.value};A(e).then((e=>{console.log("response.data",e.data),B.success("Data Save"),de.value=!1}))},ye=d({}),_e=d([]),be=()=>{ve.value=!0,ie.value.forEach((e=>{_e.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})})),console.log(_e.value),ye.value=`Do you want to save ${_e.value.length} products out of ${q.value.length}? Products not added in inventory will have stock = 0`},ge=f((()=>null!=T.value.products?T.value.products.length:""));return(p,c)=>{const d=e,v=t,f=s,_=a,b=l,w=o,U=u,I=r,K=n,A=i;return m(),y(A,null,{default:g((()=>[k(T)?(m(),y("div",L,[h("h1",z,"Inventory #"+j(k(T).id),1),h("h1",$," Status: "+j(1==k(T).status?"Active":"Close"),1),k(T)?(m(),y("h1",M," Products: "+j(k(ge)),1)):x("",!0),de.value?(m(),y("div",N,[h("p",E,j(fe.value),1),h(d,{height:"200px"})])):(m(),y("div",G,[h("div",J,[h(v,{color:"",raised:"",onClick:c[1]||(c[1]=e=>k(re).back()),class:"mr-3"},{default:g((()=>[R])),_:1}),k(T).status?(m(),y(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[H])),_:1})):x("",!0)]),h(U,null,{header:g((()=>[O])),body:g((()=>[(m(!0),y(V,null,C(ne.value,(e=>(m(),y("div",{key:e.id,class:"flex-table-item"},[h("div",Q,[h("span",W,[h(f,{picture:`${k(F)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),h("div",null,[h("p",null,j(e.name),1)])])]),h("div",X,[h("p",null,[h("small",null,j(e.sku),1)])]),h("div",Y,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==k(T).status,onKeyup:t=>ce(e),onChange:t=>ce(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[S,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),h("div",Z,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==k(T).status,onKeyup:t=>ce(e),onChange:t=>ce(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[S,e.current_stock]])])),_:2},1024)])),_:2},1024)]),h("div",ee,[h("p",null,j(isNaN(e.subtotal)?0:e.subtotal),1)]),h("div",te,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.proveedor=t,type:"text",class:"input",readonly:0==k(T).status},null,8,["onUpdate:modelValue","readonly"]),[[S,e.proveedor]])])),_:2},1024)])),_:2},1024)]),h("div",se,[h(b,null,{default:g((()=>[h(_,null,{default:g((()=>[P(h("input",{"onUpdate:modelValue":t=>e.ingreso=t,type:"date",class:"input",readonly:0==k(T).status},null,8,["onUpdate:modelValue","readonly"]),[[S,e.ingreso]])])),_:2},1024)])),_:2},1024)]),h("div",ae,[e.status?(m(),y(w,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(m(),y(w,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),h("div",le,[k(T).status?(m(),y(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[oe])),_:1})):x("",!0)])])),h(K,{open:ve.value,actions:"center",onClose:c[2]||(c[2]=e=>ve.value=!1)},{content:g((()=>[h(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),h("p",null,j(ye.value),1)])),action:g((()=>[h(v,{color:"primary",onClick:me,raised:""},{default:g((()=>[ue])),_:1})])),_:1},8,["open"])])):x("",!0)])),_:1})}}});export default re;