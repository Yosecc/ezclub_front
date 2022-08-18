import{_ as e}from"./V-Placeload.8ccc7bfb.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import{_ as s}from"./V-Control.a9c2cbb9.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.a4d012f3.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.df44a07c.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.cda52abd.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.3bca87dd.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.5d45ce20.js";import{_ as i}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.72d242e7.js";import{d as c,P as p,O as d,aa as v,r as m,I as f,b as y,o as _,i as b,j as k,H as g,E as h,k as j,G as x,S as V,U as C,W as P,_ as S,F as w}from"./vendor.5bccebbb.js";import{p as U}from"./sidebarLayoutState.620c70af.js";import{l as I,a as D,b as K,d as q}from"./Inventory.d4d7a232.js";import{g as A,p as F}from"./Products.e16b524d.js";import{n as T,b as B}from"./index.0622f2b5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.241008cf.js";import"./useDropdown.04bc7533.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80224232.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3df65f9d.js";import"./V-Card.vue_vue&type=script&setup=true&lang.cb28cdf7.js";import"./V-Dropdown.e4c10296.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.c4247789.js";import"./Companies.4241e8c8.js";import"./activePanelState.5e0ea050.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.22802a6a.js";import"./video.3bfbcca0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f802abe5.js";import"./darkModeState.ac3ed3a0.js";import"./AnimatedLogo.1a22360b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6f79d543.js";import"./userPopovers.f4b9fc60.js";const L={key:0,class:"page-content-inner"},$={class:"title is-4 mb-0"},z={class:"title is-6 mb-0"},E={key:0,class:"title is-6"},M={key:1},N={class:"title is-5"},W={key:2},G={class:"d-flex justify-content-end mb-4 w-100"},H=w("Back"),O=w("Save"),J=j("div",{class:"flex-table-header"},[g(" <span>ID</span> "),j("span",null,"Product"),j("span",null,"SKU"),j("span",null,"Previous stock"),j("span",null,"Current stock"),j("span",null,"Total"),j("span",null,"Providers"),j("span",null,"Date of admission"),j("span",null,"Status")],-1),Q={class:"flex-table-cell","data-th":"product"},R={class:"light-text d-flex align-items-center"},X={class:"flex-table-cell","data-th":"SKU"},Y={class:"flex-table-cell","data-th":"current_stock"},Z={class:"flex-table-cell","data-th":"previous_stock"},ee={class:"flex-table-cell","data-th":"previous_stock"},te={class:"flex-table-cell","data-th":"previous_stock"},ae={class:"flex-table-cell","data-th":"previous_stock"},se={class:"flex-table-cell","data-th":"-"},le={class:"d-flex justify-content-end mt-4 w-100"},oe=w("Save"),ue=w("Confirm");var re=c({expose:[],setup(c){U.value="Inventory Create",p({title:"Inventory"});const w=d(),re=v();m([]),f((()=>{if(de.value=!0,!w.query.locations_id)return T.error("la location es requerida"),void console.error("la locacion es requerida");I.value=w.query.locations_id,A(I.value,"active").then((e=>{D(w.query.id).then((e=>{ce(),de.value=!1}))}))}));const ne=m([]),ie=y((()=>ne.value)),ce=()=>{F.value.forEach((e=>{let t=null,a=null,s=null,l=!1,o=null,u=null;if(null!=K.value.products){const r=K.value.products.find((t=>t.product_id==e.id));console.log("element",e),console.log("product",r),null!=r?(a=r.previous_stock,t=r.current_stock,s=t+a,l=!0,o=r.proveedor,u=r.ingreso):(a=e.stock?e.stock.current_stock:0,s=a)}let r={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:a,subtotal:s,status:l,sku:e.sku,proveedor:o,ingreso:u};0==K.value.status&&0==r.status||ne.value.push(r)}))},pe=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},de=m(!1),ve=m(!1),me=m("Processing Inventory... Please do not close the browser window until the process is complete"),fe=()=>{ve.value=!1,de.value=!0;let e={products:_e.value};q(e).then((e=>{console.log("response.data",e.data),T.success("Data Save"),de.value=!1}))},ye=m({}),_e=m([]),be=()=>{ve.value=!0,ie.value.forEach((e=>{_e.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})})),console.log(_e.value),ye.value=`Do you want to save ${_e.value.length} products out of ${F.value.length}? Products not added in inventory will have stock = 0`},ke=y((()=>null!=K.value.products?K.value.products.length:""));return(c,p)=>{const d=e,v=t,m=a,f=s,y=l,w=o,U=u,I=r,D=n,q=i;return _(),b(q,null,{default:k((()=>[g(" Content Wrapper "),h(K)?(_(),b("div",L,[j("h1",$,"Inventory #"+x(h(K).id),1),j("h1",z," Status: "+x(1==h(K).status?"Active":"Close"),1),h(K)?(_(),b("h1",E," Products: "+x(h(ke)),1)):g("v-if",!0),de.value?(_(),b("div",M,[j("p",N,x(me.value),1),j(d,{height:"200px"})])):(_(),b("div",W,[j("div",G,[j(v,{raised:"",onClick:p[1]||(p[1]=e=>h(re).back()),class:"mr-3"},{default:k((()=>[H])),_:1}),h(K).status?(_(),b(v,{key:0,color:"success",onClick:be,raised:""},{default:k((()=>[O])),_:1})):g("v-if",!0)]),j(U,null,{header:k((()=>[J])),body:k((()=>[(_(!0),b(V,null,C(ne.value,(e=>(_(),b("div",{key:e.id,class:"flex-table-item"},[g(' <div class="flex-table-cell is-bold" data-th="ID">\r\n                <span class="dark-text">{{ row.id }}</span>\r\n              </div> '),j("div",Q,[j("span",R,[j(m,{picture:`${h(B)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),j("div",null,[j("p",null,x(e.name),1)])])]),j("div",X,[j("p",null,[j("small",null,x(e.sku),1)])]),j("div",Y,[j(y,null,{default:k((()=>[j(f,null,{default:k((()=>[P(j("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==h(K).status,onKeyup:t=>pe(e),onChange:t=>pe(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[S,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),j("div",Z,[j(y,null,{default:k((()=>[j(f,null,{default:k((()=>[P(j("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==h(K).status,onKeyup:t=>pe(e),onChange:t=>pe(e)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[S,e.current_stock]])])),_:2},1024)])),_:2},1024)]),j("div",ee,[j("p",null,x(isNaN(e.subtotal)?0:e.subtotal),1)]),j("div",te,[j(y,null,{default:k((()=>[j(f,null,{default:k((()=>[P(j("input",{"onUpdate:modelValue":t=>e.proveedor=t,type:"text",class:"input",readonly:0==h(K).status},null,8,["onUpdate:modelValue","readonly"]),[[S,e.proveedor]])])),_:2},1024)])),_:2},1024)]),j("div",ae,[j(y,null,{default:k((()=>[j(f,null,{default:k((()=>[P(j("input",{"onUpdate:modelValue":t=>e.ingreso=t,type:"date",class:"input",readonly:0==h(K).status},null,8,["onUpdate:modelValue","readonly"]),[[S,e.ingreso]])])),_:2},1024)])),_:2},1024)]),j("div",se,[e.status?(_(),b(w,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(_(),b(w,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),j("div",le,[h(K).status?(_(),b(v,{key:0,color:"success",onClick:be,raised:""},{default:k((()=>[oe])),_:1})):g("v-if",!0)])])),j(D,{open:ve.value,actions:"center",onClose:p[2]||(p[2]=e=>ve.value=!1)},{content:k((()=>[j(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),j("p",null,x(ye.value),1)])),action:k((()=>[j(v,{color:"primary",onClick:fe,raised:""},{default:k((()=>[ue])),_:1})])),_:1},8,["open"])])):g("v-if",!0)])),_:1})}}});export default re;
