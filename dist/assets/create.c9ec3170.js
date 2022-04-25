import{_ as e}from"./V-Placeload.982e0955.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.667d2417.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.471307b0.js";import{_ as s}from"./V-Control.5136ae9f.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.5cc17432.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.8ff326ca.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.a55e00fc.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.d55e8125.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.b069e1cd.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.89cc6b21.js";import{d as p,O as c,L as d,a4 as v,r as m,H as f,c as y,o as _,i as b,j as g,G as k,D as h,k as j,F as x,Q as V,R as C,S,Y as P,E as w}from"./vendor.512b7acb.js";import{p as U}from"./sidebarLayoutState.08ab8119.js";import{l as I,a as D,b as T,d as K}from"./Inventory.d994e360.js";import{g as L,p as q}from"./Products.c59a258c.js";import{n as A,b as F}from"./index.fa2868cb.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.913acdcb.js";import"./useDropdown.10df4d81.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.b5a3a3a2.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.65c51667.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.ba945660.js";import"./V-Dropdown.b805b674.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.f78f5288.js";import"./Companies.153102da.js";import"./activePanelState.53d13aa7.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.65aad7e6.js";import"./V-Message.vue_vue&type=script&setup=true&lang.4f410568.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.14f85ffe.js";import"./navbarLayoutState.a9abea7f.js";import"./video.81ca49e0.js";import"./darkModeState.8ae54720.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.c6af2930.js";import"./AnimatedLogo.afd186e6.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.33fcd2c5.js";import"./V-Block.vue_vue&type=script&setup=true&lang.7ac5b30d.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.9114be65.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.9d07b6d1.js";const B={key:0,class:"page-content-inner"},$={class:"title is-4 mb-0"},z={class:"title is-6 mb-0"},E={key:0,class:"title is-6"},M={key:1},N={class:"title is-5"},G={key:2},H={class:"d-flex justify-content-end mb-4 w-100"},O=w("Back"),Q=w("Save"),R=j("div",{class:"flex-table-header"},[k(" <span>ID</span> "),j("span",null,"Product"),j("span",null,"SKU"),j("span",null,"Previous stock"),j("span",null,"Current stock"),j("span",null,"Total"),j("span",null,"Providers"),j("span",null,"Date of admission"),j("span",null,"Status")],-1),W={class:"flex-table-cell","data-th":"product"},Y={class:"light-text d-flex align-items-center"},J={class:"flex-table-cell","data-th":"SKU"},X={class:"flex-table-cell","data-th":"current_stock"},Z={class:"flex-table-cell","data-th":"previous_stock"},ee={class:"flex-table-cell","data-th":"previous_stock"},te={class:"flex-table-cell","data-th":"previous_stock"},ae={class:"flex-table-cell","data-th":"previous_stock"},se={class:"flex-table-cell","data-th":"-"},le={class:"d-flex justify-content-end mt-4 w-100"},oe=w("Save"),ue=w("Confirm");var re=p({expose:[],setup(p){U.value="Inventory Create",c({title:"Inventory"});const w=d(),re=v();m([]),f((()=>{if(de.value=!0,!w.query.locations_id)return A.error("la location es requerida"),void console.error("la locacion es requerida");I.value=w.query.locations_id,L(I.value,"active").then((e=>{D(w.query.id).then((e=>{pe(),de.value=!1}))}))}));const ne=m([]),ie=y((()=>ne.value)),pe=()=>{q.value.forEach((e=>{let t=null,a=null,s=null,l=!1,o=null,u=null;if(null!=T.value.products){const r=T.value.products.find((t=>t.product_id==e.id));console.log("element",e),console.log("product",r),null!=r?(a=r.previous_stock,t=r.current_stock,s=t+a,l=!0,o=r.proveedor,u=r.ingreso):(a=e.stock?e.stock.current_stock:0,s=a)}let r={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:a,subtotal:s,status:l,sku:e.sku,proveedor:o,ingreso:u};0==T.value.status&&0==r.status||ne.value.push(r)}))},ce=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},de=m(!1),ve=m(!1),me=m("Processing Inventory... Please do not close the browser window until the process is complete"),fe=()=>{ve.value=!1,de.value=!0;let e={products:_e.value};K(e).then((e=>{console.log("response.data",e.data),A.success("Data Save"),de.value=!1}))},ye=m({}),_e=m([]),be=()=>{ve.value=!0,ie.value.forEach((e=>{_e.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})})),console.log(_e.value),ye.value=`Do you want to save ${_e.value.length} products out of ${q.value.length}? Products not added in inventory will have stock = 0`},ge=y((()=>null!=T.value.products?T.value.products.length:""));return(p,c)=>{const d=e,v=t,m=a,f=s,y=l,w=o,U=u,I=r,D=n,K=i;return _(),b(K,null,{default:g((()=>[k(" Content Wrapper "),h(T)?(_(),b("div",B,[j("h1",$,"Inventory #"+x(h(T).id),1),j("h1",z," Status: "+x(1==h(T).status?"Active":"Close"),1),h(T)?(_(),b("h1",E," Products: "+x(h(ge)),1)):k("v-if",!0),de.value?(_(),b("div",M,[j("p",N,x(me.value),1),j(d,{height:"200px"})])):(_(),b("div",G,[j("div",H,[j(v,{raised:"",onClick:c[1]||(c[1]=e=>h(re).back()),class:"mr-3"},{default:g((()=>[O])),_:1}),h(T).status?(_(),b(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[Q])),_:1})):k("v-if",!0)]),j(U,null,{header:g((()=>[R])),body:g((()=>[(_(!0),b(V,null,C(ne.value,(e=>(_(),b("div",{key:e.id,class:"flex-table-item"},[k(' <div class="flex-table-cell is-bold" data-th="ID">\n                <span class="dark-text">{{ row.id }}</span>\n              </div> '),j("div",W,[j("span",Y,[j(m,{picture:`${h(F)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),j("div",null,[j("p",null,x(e.name),1)])])]),j("div",J,[j("p",null,[j("small",null,x(e.sku),1)])]),j("div",X,[j(y,null,{default:g((()=>[j(f,null,{default:g((()=>[S(j("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==h(T).status,onKeyup:t=>ce(e),onChange:t=>ce(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[P,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),j("div",Z,[j(y,null,{default:g((()=>[j(f,null,{default:g((()=>[S(j("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==h(T).status,onKeyup:t=>ce(e),onChange:t=>ce(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[P,e.current_stock]])])),_:2},1024)])),_:2},1024)]),j("div",ee,[j("p",null,x(isNaN(e.subtotal)?0:e.subtotal),1)]),j("div",te,[j(y,null,{default:g((()=>[j(f,null,{default:g((()=>[S(j("input",{"onUpdate:modelValue":t=>e.proveedor=t,type:"text",class:"input",readonly:0==h(T).status},null,8,["onUpdate:modelValue","readonly"]),[[P,e.proveedor]])])),_:2},1024)])),_:2},1024)]),j("div",ae,[j(y,null,{default:g((()=>[j(f,null,{default:g((()=>[S(j("input",{"onUpdate:modelValue":t=>e.ingreso=t,type:"date",class:"input",readonly:0==h(T).status},null,8,["onUpdate:modelValue","readonly"]),[[P,e.ingreso]])])),_:2},1024)])),_:2},1024)]),j("div",se,[e.status?(_(),b(w,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(_(),b(w,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),j("div",le,[h(T).status?(_(),b(v,{key:0,color:"success",onClick:be,raised:""},{default:g((()=>[oe])),_:1})):k("v-if",!0)])])),j(D,{open:ve.value,actions:"center",onClose:c[2]||(c[2]=e=>ve.value=!1)},{content:g((()=>[j(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),j("p",null,x(ye.value),1)])),action:g((()=>[j(v,{color:"primary",onClick:fe,raised:""},{default:g((()=>[ue])),_:1})])),_:1},8,["open"])])):k("v-if",!0)])),_:1})}}});export default re;
