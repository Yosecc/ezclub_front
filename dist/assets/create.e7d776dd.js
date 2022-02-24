import{_ as e}from"./V-Placeload.ec1fe97e.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.18dfabcd.js";import{_ as a}from"./V-Control.70f7b974.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.8caeb9ca.js";import{_ as o}from"./V-Tag.vue_vue&type=script&setup=true&lang.5554d4bf.js";import{_ as u}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.015c4b9e.js";import{_ as r}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.10bd3bfc.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.533d5625.js";import{_ as c}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.03c1ef2b.js";import{d as i,z as p,r as d,A as v,b as m,o as f,h as _,B as y,U as b,j,D as k,k as h,J as g,K as x,L as V,N as P,F as S,R as w,G as C}from"./vendor.3b9a49d2.js";import{p as T}from"./sidebarLayoutState.9d5a55d2.js";import{a as I,b as A,d as U}from"./Inventory.d84b30ac.js";import{g as D,p as L}from"./Products.17f4f896.js";import{n as z}from"./Mixin.dd32d622.js";import{a as B}from"./index.111a2eb1.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.1af5c6c5.js";import"./useDropdown.4b88246a.js";import"./V-Dropdown.5634df5b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.725db5d0.js";import"./activePanelState.d422980e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.729240c7.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f4c30d64.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.db2a2ca9.js";import"./navbarLayoutState.607bf9e0.js";import"./video.7e4ace56.js";import"./darkModeState.9048b099.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.9336f53f.js";import"./AnimatedLogo.d39560aa.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5fbfe7cf.js";import"./V-Block.vue_vue&type=script&setup=true&lang.fd027cc2.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.7c436ff6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.b8cff140.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";const M={key:0,class:"page-content-inner"},$={class:"title is-4 mb-0"},F={class:"title is-6 mb-0"},N={key:0,class:"title is-6"},E={key:1},q={class:"title is-5"},G={key:2},J={class:"d-flex justify-content-end mb-4 w-100"},K=C("Save"),R=h("div",{class:"flex-table-header"},[h("span",null,"Product"),h("span",null,"Previous stock"),h("span",null,"Current stock"),h("span",null,"Total"),h("span",null,"-")],-1),H={class:"flex-table-cell","data-th":"product"},O={class:"light-text d-flex align-items-center"},Q={class:"flex-table-cell","data-th":"current_stock"},W={class:"flex-table-cell","data-th":"previous_stock"},X={class:"flex-table-cell","data-th":"previous_stock"},Y={class:"flex-table-cell","data-th":"-"},Z={class:"d-flex justify-content-end mt-4 w-100"},ee=C("Save"),te=C("Confirm");var se=i({expose:[],setup(i){T.value="Inventory Create",p({title:"Inventory"});const C=y();b(),d([]),v((()=>{oe.value=!0,D().then((e=>{I(C.query.id).then((e=>{le(),setTimeout((()=>{oe.value=!1}),1e3)}))}))}));const se=d([]),ae=m((()=>se.value)),le=()=>{L.value.forEach((e=>{let t=null,s=null,a=null,l=!1;if(null!=A.value.products){let o=A.value.products.find((t=>t.product_id==e.id));null!=o&&(t=o.current_stock,s=o.previous_stock,a=t+s,l=!0)}let o={id:e.id,name:e.name,photo:e.photo,current_stock:t,previous_stock:s,subtotal:a,status:l};0==A.value.status&&0==o.status||se.value.push(o)}))},oe=d(!1),ue=d(!1),re=d("Processing Inventory... Please do not close the browser window until the process is complete"),ne=()=>{ue.value=!1,oe.value=!0;let e={products:ie.value};U(e).then((e=>{console.log("response.data",e.data),z.success("Data Save"),oe.value=!1}))},ce=d({}),ie=d([]),pe=()=>{ue.value=!0,ae.value.forEach((e=>{null!=e.previous_stock&&null!=e.current_stock&&ie.value.push({product_id:e.id,previous_stock:e.previous_stock,current_stock:e.current_stock})})),ce.value=`Do you want to save ${ie.value.length} products out of ${L.value.length}? Products not added in inventory will have stock = 0`},de=m((()=>null!=A.value.products?A.value.products.length:""));return(i,p)=>{const d=e,v=t,m=s,y=a,b=l,C=o,T=u,I=r,U=n,D=c;return f(),_(D,null,{default:j((()=>[k(A)?(f(),_("div",M,[h("h1",$,"Inventory #"+g(k(A).id),1),h("h1",F," Status: "+g(1==k(A).status?"Active":"Close"),1),k(A)?(f(),_("h1",N," Products: "+g(k(de)),1)):x("",!0),oe.value?(f(),_("div",E,[h("p",q,g(re.value),1),h(d,{height:"200px"})])):(f(),_("div",G,[h("div",J,[k(A).status?(f(),_(v,{key:0,color:"success",onClick:pe,raised:""},{default:j((()=>[K])),_:1})):x("",!0)]),h(T,null,{header:j((()=>[R])),body:j((()=>[(f(!0),_(V,null,P(se.value,(e=>(f(),_("div",{key:e.id,class:"flex-table-item"},[h("div",H,[h("span",O,[h(m,{picture:`${k(B)}storage/${e.photo}`,color:"primary",size:"medium",class:"mr-3"},null,8,["picture"]),h("div",null,[h("p",null,g(e.name),1)])])]),h("div",Q,[h(b,null,{default:j((()=>[h(y,null,{default:j((()=>[S(h("input",{"onUpdate:modelValue":t=>e.previous_stock=t,type:"number",class:"input",readonly:0==k(A).status},null,8,["onUpdate:modelValue","readonly"]),[[w,e.previous_stock]])])),_:2},1024)])),_:2},1024)]),h("div",W,[h(b,null,{default:j((()=>[h(y,null,{default:j((()=>[S(h("input",{"onUpdate:modelValue":t=>e.current_stock=t,type:"number",class:"input",readonly:0==k(A).status},null,8,["onUpdate:modelValue","readonly"]),[[w,e.current_stock]])])),_:2},1024)])),_:2},1024)]),h("div",X,[h("p",null,g(isNaN(e.subtotal)?"":e.subtotal),1)]),h("div",Y,[e.status?(f(),_(C,{key:0,color:"success",label:"Save",rounded:"",elevated:""})):(f(),_(C,{key:1,color:void 0,label:"Pending",rounded:"",elevated:""}))])])))),128))])),_:1}),h("div",Z,[k(A).status?(f(),_(v,{key:0,color:"success",onClick:pe,raised:""},{default:j((()=>[ee])),_:1})):x("",!0)])])),h(U,{open:ue.value,actions:"center",onClose:p[1]||(p[1]=e=>ue.value=!1)},{content:j((()=>[h(I,{title:"Are you sure you want to save the changes?",subtitle:"This action will affect the stock of all products and cannot be undone."}),h("p",null,g(ce.value),1)])),action:j((()=>[h(v,{color:"primary",onClick:ne,raised:""},{default:j((()=>[te])),_:1})])),_:1},8,["open"])])):x("",!0)])),_:1})}}});export default se;
