import{_ as z}from"./V-Placeload.9684d098.js";import{_ as G}from"./V-Button.vue_vue_type_script_setup_true_lang.72d178c7.js";import{_ as O}from"./V-Avatar.vue_vue_type_script_setup_true_lang.b4183814.js";import{_ as W}from"./V-Control.92200beb.js";import{_ as J}from"./V-Field.vue_vue_type_script_setup_true_lang.33752939.js";import{_ as Q}from"./V-Tag.vue_vue_type_script_setup_true_lang.0d8ff65f.js";import{_ as X}from"./V-FlexTable.vue_vue_type_script_setup_true_lang.2a15ef97.js";import{_ as Y}from"./V-PlaceholderSection.vue_vue_type_script_setup_true_lang.7396220c.js";import{_ as Z}from"./V-Modal.vue_vue_type_script_setup_true_lang.f0368080.js";import{_ as w}from"./SidebarLayout.vue_vue_type_script_setup_true_lang.a7af6f4a.js";import{d as tt,B as et,r as f,j as ot,n as B,c as F,o as u,e as c,w as s,D as st,u as n,f as t,t as _,y as C,F as at,G as nt,C as lt,H as V,L as $,i as P,a7 as rt}from"./index.4457215e.js";import{p as ut}from"./sidebarLayoutState.d2b676a9.js";import{l as K,a as ct,b as a,d as it}from"./Inventory.9ab6d84b.js";import{g as dt,p as N}from"./Products.d4085bf4.js";import"./ActivityPanel.vue_vue_type_style_index_0_lang.8acd0baa.js";import"./useDropdown.d2881c63.js";import"./inputsLayaut.vue_vue_type_style_index_0_lang.bc2ca8d6.js";import"./V-SwitchSegment.vue_vue_type_script_setup_true_lang.96e64ac9.js";import"./V-Checkbox.vue_vue_type_script_setup_true_lang.70a8d51f.js";import"./V-Card.vue_vue_type_script_setup_true_lang.f80f1beb.js";import"./V-Dropdown.c58eb584.js";import"./V-Icon.vue_vue_type_script_setup_true_lang.a0e27302.js";import"./Companies.4f645ec0.js";import"./activePanelState.d3359fb3.js";import"./fastpizza.70124fcb.js";import"./TaskPanel.vue_vue_type_style_index_0_lang.50493a6a.js";import"./video.d6dbc99d.js";import"./SearchPanel.vue_vue_type_style_index_0_lang.63cec0b9.js";import"./darkModeState.1f6503fc.js";import"./AnimatedLogo.d670690a.js";import"./V-IconBox.vue_vue_type_script_setup_true_lang.772b752f.js";import"./V-Block.vue_vue_type_script_setup_true_lang.00657afe.js";import"./UserPopoverContent.vue_vue_type_script_setup_true_lang.5fb53f85.js";import"./userPopovers.f4b9fc60.js";const _t={key:0,class:"page-content-inner"},pt={class:"title is-4 mb-0"},vt={class:"title is-6 mb-0"},mt={key:0,class:"title is-6"},ft={key:1},ht={class:"title is-5"},yt={key:2},kt={class:"d-flex justify-content-end mb-4 w-100"},gt=P("Back"),bt=P("Save"),xt=t("div",{class:"flex-table-header"},[t("span",null,"Product"),t("span",null,"SKU"),t("span",null,"Previous stock"),t("span",null,"Current stock"),t("span",null,"Total"),t("span",null,"Providers"),t("span",null,"Date of admission"),t("span",null,"Status")],-1),Ct={class:"flex-table-cell","data-th":"product"},Vt={class:"light-text d-flex align-items-center"},$t={class:"flex-table-cell","data-th":"SKU"},Pt={class:"flex-table-cell","data-th":"current_stock"},St={class:"flex-table-cell","data-th":"previous_stock"},Ut={class:"flex-table-cell","data-th":"previous_stock"},It={class:"flex-table-cell","data-th":"previous_stock"},Dt={class:"flex-table-cell","data-th":"previous_stock"},Tt={class:"flex-table-cell","data-th":"-"},Bt={class:"d-flex justify-content-end mt-4 w-100"},Ft=P("Save"),Kt=P("Confirm");var fe=tt({expose:[],setup(Nt){ut.value="Inventory Create",et({title:"Inventory"});const S=st(),q=rt();f([]),ot(()=>{if(h.value=!0,S.query.locations_id)K.value=S.query.locations_id;else{B.error("la location es requerida"),console.error("la locacion es requerida");return}dt(K.value,"active").then(e=>{ct(S.query.id).then(l=>{L(),h.value=!1})})});const U=f([]),A=F(()=>U.value),L=()=>{N.value.forEach(e=>{let l=null,p=null,i=null,x=!1,v=null,m=null;if(a.value.products!=null){const d=a.value.products.find(I=>I.product_id==e.id);console.log("element",e),console.log("product",d),d!=null?(p=d.previous_stock,l=d.current_stock,i=l+p,x=!0,v=d.proveedor,m=d.ingreso):(p=e.stock?e.stock.current_stock:0,i=p)}let y={id:e.id,name:e.name,photo:e.photo,current_stock:l,previous_stock:p,subtotal:i,status:x,sku:e.sku,proveedor:v,ingreso:m};a.value.status==0&&y.status==!1||U.value.push(y)})},k=e=>{e.subtotal=parseFloat(e.previous_stock)+parseFloat(e.current_stock)},h=f(!1),g=f(!1),M=f("Processing Inventory... Please do not close the browser window until the process is complete"),j=()=>{g.value=!1,h.value=!0;let e={products:b.value};it(e).then(l=>{console.log("response.data",l.data),B.success("Data Save"),h.value=!1})},D=f({}),b=f([]),T=()=>{g.value=!0,A.value.forEach(e=>{b.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.subtotal,proveedor:e.proveedor,ingreso:e.ingreso})}),console.log(b.value),D.value=`Do you want to save ${b.value.length} products out of ${N.value.length}? Products not added in inventory will have stock = 0`},E=F(()=>a.value.products!=null?a.value.products.length:"");return(e,l)=>{const p=z,i=G,x=O,v=W,m=J,y=Q,d=X,I=Y,R=Z,H=w;return u(),c(H,null,{default:s(()=>[n(a)?(u(),c("div",_t,[t("h1",pt,"Inventory #"+_(n(a).id),1),t("h1",vt," Status: "+_(n(a).status==1?"Active":"Close"),1),n(a)?(u(),c("h1",mt," Products: "+_(n(E)),1)):C("",!0),h.value?(u(),c("div",ft,[t("p",ht,_(M.value),1),t(p,{height:"200px"})])):(u(),c("div",yt,[t("div",kt,[t(i,{raised:"",onClick:l[1]||(l[1]=o=>n(q).back()),class:"mr-3"},{default:s(()=>[gt]),_:1}),n(a).status?(u(),c(i,{key:0,color:"success",onClick:T,raised:""},{default:s(()=>[bt]),_:1})):C("",!0)]),t(d,null,{header:s(()=>[xt]),body:s(()=>[(u(!0),c(at,null,nt(U.value,o=>(u(),c("div",{key:o.id,class:"flex-table-item"},[t("div",Ct,[t("span",Vt,[t(x,{picture:`${n(lt)}storage/${o.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),t("div",null,[t("p",null,_(o.name),1)])])]),t("div",$t,[t("p",null,[t("small",null,_(o.sku),1)])]),t("div",Pt,[t(m,null,{default:s(()=>[t(v,null,{default:s(()=>[V(t("input",{"onUpdate:modelValue":r=>o.previous_stock=r,type:"number",class:"input",readonly:n(a).status==0,onKeyup:r=>k(o),onChange:r=>k(o)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[$,o.previous_stock]])]),_:2},1024)]),_:2},1024)]),t("div",St,[t(m,null,{default:s(()=>[t(v,null,{default:s(()=>[V(t("input",{"onUpdate:modelValue":r=>o.current_stock=r,type:"number",class:"input",readonly:n(a).status==0,onKeyup:r=>k(o),onChange:r=>k(o)},null,40,["onUpdate:modelValue","readonly","onKeyup","onChange"]),[[$,o.current_stock]])]),_:2},1024)]),_:2},1024)]),t("div",Ut,[t("p",null,_(isNaN(o.subtotal)?0:o.subtotal),1)]),t("div",It,[t(m,null,{default:s(()=>[t(v,null,{default:s(()=>[V(t("input",{"onUpdate:modelValue":r=>o.proveedor=r,type:"text",class:"input",readonly:n(a).status==0},null,8,["onUpdate:modelValue","readonly"]),[[$,o.proveedor]])]),_:2},1024)]),_:2},1024)]),t("div",Dt,[t(m,null,{default:s(()=>[t(v,null,{default:s(()=>[V(t("input",{"onUpdate:modelValue":r=>o.ingreso=r,type:"date",class:"input",readonly:n(a).status==0},null,8,["onUpdate:modelValue","readonly"]),[[$,o.ingreso]])]),_:2},1024)]),_:2},1024)]),t("div",Tt,[o.status?(u(),c(y,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(u(),c(y,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])]))),128))]),_:1}),t("div",Bt,[n(a).status?(u(),c(i,{key:0,color:"success",onClick:T,raised:""},{default:s(()=>[Ft]),_:1})):C("",!0)])])),t(R,{open:g.value,actions:"center",onClose:l[2]||(l[2]=o=>g.value=!1)},{content:s(()=>[t(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),t("p",null,_(D.value),1)]),action:s(()=>[t(i,{color:"primary",onClick:j,raised:""},{default:s(()=>[Kt]),_:1})]),_:1},8,["open"])])):C("",!0)]),_:1})}}});export{fe as default};
