import{a as e,c as t,l,_ as a}from"./Companies.57563fa8.js";import{_ as s}from"./V-Card.vue_vue&type=script&setup=true&lang.a508baf8.js";import{_ as n}from"./V-Avatar.vue_vue&type=script&setup=true&lang.acbf948e.js";import{_ as o}from"./V-Control.b36667bf.js";import{_ as u}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.814e506a.js";import{_ as c}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{r,b as i,d,A as p,o as m,h as v,k as f,E as y,K as _,j as h,a4 as b,B as g,H as k,J as x,N as j,O as C,w,L as S,G as V,R as P,S as $,X as T,Q as E,u as A,z as R,D as U,a8 as z}from"./vendor.e3a29b40.js";import{A as B,a as D,P as F,F as L}from"./index.4e4bd47d.js";import{n as q,m as O,s as I,i as M}from"./ActivityPanel.vue_vue&type=style&index=0&lang.1e718eba.js";import{_ as N}from"./V-Tag.vue_vue&type=script&setup=true&lang.eb96c098.js";import{_ as H}from"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import{_ as G}from"./V-Modal.vue_vue&type=script&setup=true&lang.daae4ec3.js";import{_ as J}from"./V-Placeload.9d0101ab.js";import{_ as K}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.f9411205.js";import{_ as Q,a as W}from"./search-4-dark.fb3880a5.js";import{p as X}from"./sidebarLayoutState.436b738a.js";import{l as Y,g as Z,i as ee}from"./Inventory.7a000ddf.js";import{g as te,a as le,p as ae,d as se}from"./Products.d23005eb.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.16e258e3.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f00f67a3.js";import"./useDropdown.dfad556c.js";import"./V-Dropdown.7404a3e2.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1a89ef3a.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";import"./activePanelState.5a49edcb.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.7f2f91ae.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f3abd056.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.b59ccca7.js";import"./navbarLayoutState.37063f98.js";import"./video.674f0486.js";import"./darkModeState.a53f3c67.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.2f79059e.js";import"./AnimatedLogo.e43df3fc.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5e6c3f74.js";import"./V-Block.vue_vue&type=script&setup=true&lang.f5251e79.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.16aa198e.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.c5504f9b.js";const ne=r([]),oe=r(!1),ue=e=>{const t=ne.value.findIndex((t=>t.product_id==e.id));if(e.stock&&e.stock.current_stock>0)if(-1==t)ne.value.push({product_id:e.id,count:1,products_amount:e.price,name:e.name,stock:e.stock.current_stock});else{ne.value.find((t=>t.product_id==e.id)).count+1<=e.stock.current_stock?ne.value.find((t=>t.product_id==e.id)).count++:q.error("Sin Stock")}else q.error("Sin Stock")},ce=i((()=>{let e=0;return ne.value.forEach((t=>{e+=t.products_amount*t.count})),e})),re=i((()=>ce.value/100*7)),ie=i((()=>ce.value+re.value)),de=(e,t,l)=>{"minus"==e?(t.count>0&&t.count--,0==t.count&&ne.value.splice(l,1)):t.count+1<=t.stock?t.count++:q.error("Sin Stock")},pe=r(0),me=i((()=>{const e=parseFloat(pe.value)-parseFloat(ie.value);return e>0?e:0})),ve=e=>{pe.value=parseFloat(pe.value)+parseFloat(e)},fe=r(null),ye=r({email:null,phone:null,barcode:null}),_e=()=>{const e={total:ie.value,tax_id:1,payment_type_id:fe.value,email:ye.value.email,phone:ye.value.phone,barcode:ye.value.barcode,change_back:me.value,products:ne.value};xe(e).then((e=>{console.log(e.data),1==fe.value&&(fe.value=null,ye.value.email=null,ye.value.phone=null,ye.value.barcode=null,pe.value=0,ne.value=[],ge.value=3,he.value=!1),3==fe.value&&(ke.value=e.data.order),ke.value=e.data.order,q.success("Success")})).catch((e=>{q.error(e.response.data.message)}))},he=r(!1),be=r(!1),ge=r(1),ke=r(null),xe=async e=>await B.post("orders",e),je=r(""),Ce=async()=>{const e=await B.get(`orders/send_receipt/${ke.value}`,{params:{type:je.value}});return q.success("Send"),ge.value=1,e},we={class:"card-grid-item-content"},Se={class:"dark-inverted text-center"},Ve={class:"title is-6"},Pe={class:"title is-5"},$e={key:0,class:"is-7 title"},Te={key:1,class:"is-7 title"},Ee={class:"card-grid-item-footer"},Ae=k(" ADD ");var Re=d({expose:[],props:{product:{type:Object,default:{}}},setup:e=>(g(),p((()=>{})),(t,l)=>{const a=c;return m(),v("a",{href:"#",onClick:l[2]||(l[2]=b((t=>y(ue)(e.product)),["prevent"])),class:"card-grid-item"},[f("img",{src:`${y(D)}storage/${e.product.photo}`,alt:"",onErrorOnce:l[1]||(l[1]=e=>e.target.src="https://via.placeholder.com/400x300")},null,40,["src"]),f("div",we,[f("h3",Se,[f("h2",Ve,_(e.product.name),1),f("h2",Pe,_(y(O)(e.product.price)),1),e.product.stock?(m(),v("p",$e," Stock: "+_(e.product.stock.current_stock),1)):(m(),v("p",Te,"Stock: 0"))])]),f("div",Ee,[f(a,{color:"white",class:"w-100 justify-content-center"},{default:h((()=>[Ae])),_:1})])])})});const Ue={class:"table is-striped is-fullwidth"},ze=f("thead",null,[f("tr",null,[f("th",{scope:"col"},"Description"),f("th",{scope:"col"},"Cuantity"),f("th",{scope:"col"},"Value")])],-1),Be={class:"d-flex"},De={class:""},Fe=f("hr",null,null,-1),Le={class:"table is-striped is-fullwidth"},qe=f("td",null,"SubTotal",-1),Oe={class:"text-right"},Ie=f("td",null,"Tax",-1),Me={class:"text-right"},Ne=f("td",null,[f("b",null,"Total")],-1),He={class:"text-right"},Ge=k(" Checkout ");var Je=d({expose:[],props:{},emits:["proccessCheckout"],setup:(e,{emit:t})=>(g(),p((()=>{})),(e,t)=>{const l=N,a=c,n=s;return m(),v(n,{class:"d-flex flex-column justify-content-between",style:{"min-height":"500px"}},{default:h((()=>[f("div",null,[x(e.$slots,"default"),f("table",Ue,[ze,f("tbody",null,[(m(!0),v(j,null,C(y(ne),((e,t)=>(m(),v("tr",{key:`cart-${t}`},[f("td",null,_(e.name),1),f("td",null,[f("div",Be,[f(l,{color:"white",onClick:l=>y(de)("minus",e,t),label:"-",style:{cursor:"pointer"}},null,8,["onClick"]),f(l,{color:"white",label:e.count},null,8,["label"]),f(l,{color:"white",onClick:l=>y(de)("plus",e,t),label:"+",style:{cursor:"pointer"}},null,8,["onClick"])])]),f("td",null,_(y(O)(e.products_amount*e.count)),1)])))),128))])])]),f("div",De,[Fe,f("table",Le,[f("tbody",null,[f("tr",null,[qe,f("td",Oe,_(y(O)(y(ce))),1)]),f("tr",null,[Ie,f("td",Me,_(y(O)(y(re))),1)]),f("tr",null,[Ne,f("td",He,_(y(O)(y(ie))),1)])])]),f(a,{color:"success",disabled:0==y(ne).length,onClick:t[1]||(t[1]=t=>e.$emit("proccessCheckout")),class:"w-100 justify-content-center"},{default:h((()=>[Ge])),_:1},8,["disabled"])])])),_:3})})});const Ke=f("div",{id:"payment-element"},null,-1),Qe=k(" Pay now "),We=f("div",{id:"payment-message",class:"hidden"},null,-1);var Xe=d({expose:[],props:{amount:{type:Number,required:!0},order_id:{type:Number,required:!0}},setup(e){const t=e,l=Stripe(F.value);w((()=>t.id),(e=>{console.log("cambio"),a.value=!0,u()}));const a=r(!0);r({id:t.id,amount:t.amount});const n=r(),o=i((()=>(console.log(t.order_id),{id:t.order_id,amount:t.amount,payment_type_id:1}))),u=async()=>{let e=await B.post(`orders/paymentStripeProduct/${t.order_id}`,o.value).then((e=>{n.value=l.elements({clientSecret:e.data.clientSecret,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}});n.value.create("payment").mount("#payment-element")})).catch((e=>{}));return a.value=!1,e},d=async e=>{e.preventDefault();const{error:a}=await l.confirmPayment({elements:n.value,confirmParams:{return_url:`${L.value}store?id=`+t.order_id}});"card_error"===a.type||"validation_error"===a.type?console.log(a.message):console.log("An unexpected error occured.")};return p((()=>{u()})),(e,t)=>{const l=J,n=c,o=s;return m(),v(j,null,[a.value?(m(),v(l,{key:0,height:"500px"})):S("",!0),V(f(o,{class:"mt-6"},{default:h((()=>[f("form",{onSubmit:b(d,["prevent"]),id:"payment-form"},[Ke,f(n,{id:"submit",class:"mt-4",color:"success"},{default:h((()=>[Qe])),_:1}),We],40,["onSubmit"])])),_:1},512),[[P,!a.value]])],64)}}});const Ye={class:"table is-striped is-fullwidth"},Ze=f("td",null,[f("p",{class:"title is-4"},[f("b",null,"Total")])],-1),et={class:"text-right"},tt={class:"title is-4"},lt=k(" Card "),at=k(" Cash "),st={class:"d-flex mb-4 justify-content-between"},nt={class:"title is-5"},ot=k(" Total: "),ut={class:"title is-5"},ct=k(" Cash Total: "),rt={class:"\n            d-flex\n            justify-content-center\n            align-items-center\n            flex-column\n            mb-4\n          "},it=f("p",{class:"title is-5 mb-4"},"Change Back:",-1),dt={class:"title is-3 mb-0"},pt={class:"d-flex justify-content-center flex-wrap mb-4"},mt=f("div",{class:"w-100"},null,-1),vt={class:"d-flex justify-content-center"},ft=k("Reset"),yt=k("Confirm");var _t=d({expose:[],props:{},emits:["proccessCheckout"],setup(e,{emit:t}){g(),p((()=>{}));const l=()=>{be.value=!0,fe.value=3,_e()};return w((()=>ke.value),(e=>{console.log("acambio")})),(e,t)=>{const a=o,n=H,u=c,r=G,i=Xe,d=s;return m(),v(d,{class:"d-flex flex-column justify-content-between",style:{"min-height":"500px"}},{default:h((()=>[f("div",null,[x(e.$slots,"default"),f("table",Ye,[f("tbody",null,[f("tr",null,[Ze,f("td",et,[f("p",tt,_(y(O)(y(ie))),1)])])])]),f(n,null,{default:h((()=>[f(a,null,{default:h((()=>[V(f("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>y(ye).email=e),class:"input",placeholder:"Email"},null,512),[[$,y(ye).email]])])),_:1})])),_:1}),f(n,null,{default:h((()=>[f(a,null,{default:h((()=>[V(f("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>y(ye).phone=e),class:"input",placeholder:"Phone"},null,512),[[$,y(ye).phone]])])),_:1})])),_:1}),f(n,null,{default:h((()=>[f(a,null,{default:h((()=>[V(f("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>y(ye).barcode=e),class:"input",placeholder:"Barcode"},null,512),[[$,y(ye).barcode]])])),_:1})])),_:1})]),f("div",null,[f(u,{color:"success",disabled:0==y(ne).length,onClick:l,class:"w-100 justify-content-center mb-4"},{default:h((()=>[lt])),_:1},8,["disabled"]),f(u,{color:"warning",disabled:0==y(ne).length,onClick:t[4]||(t[4]=e=>{fe.value=1,he.value=!0,y(_e)}),class:"w-100 justify-content-center mb-4"},{default:h((()=>[at])),_:1},8,["disabled"])]),f(r,{title:"",open:y(he),actions:"center",onClose:t[8]||(t[8]=e=>he.value=!1)},{content:h((()=>[f("div",st,[f("p",nt,[ot,f("b",null,_(y(O)(y(ie))),1)]),f("p",ut,[ct,f("b",null,_(y(O)(y(pe))),1)])]),f("div",rt,[it,f("p",dt,[f("b",null,_(y(O)(y(me))),1)])]),f("div",pt,[f(u,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t[5]||(t[5]=e=>pe.value=y(ie))},{default:h((()=>[k(" Full Payment "+_(y(O)(y(ie))),1)])),_:1}),mt,(m(),v(j,null,C([5,10,20,50,100],((e,t)=>f(u,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>y(ve)(e)},{default:h((()=>[k(" $"+_(e),1)])),_:2},1032,["onClick"]))),64))]),f("div",vt,[f(n,null,{default:h((()=>[f(a,null,{default:h((()=>[V(f("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>T(pe)?pe.value=e:null),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[$,y(pe)]])])),_:1})])),_:1})])])),action:h((()=>[f(u,{color:"",onClick:t[7]||(t[7]=e=>pe.value=0),class:"d-flex justify-content-center",raised:""},{default:h((()=>[ft])),_:1}),f(u,{color:"success",onClick:y(_e),disabled:y(ie)>y(pe),class:"d-flex justify-content-center",raised:""},{default:h((()=>[yt])),_:1},8,["onClick","disabled"])])),_:1},8,["open"]),f(r,{open:y(be),actions:"center",onClose:t[9]||(t[9]=e=>be.value=!1)},{content:h((()=>[y(ke)?(m(),v(i,{key:0,amount:y(ie),order_id:y(ke)},null,8,["amount","order_id"])):S("",!0)])),action:h((()=>[])),_:1},8,["open"])])),_:3})}}});const ht=f("h1",{class:"title is-5 text-center"},"PURCHASE COMPLETE!",-1),bt={class:"select"},gt=f("option",{value:""},"Select data",-1),kt=f("option",{value:"email"},"Email",-1),xt=f("option",{value:"phone"},"Phone",-1),jt=f("option",{value:"barcode"},"Barcode",-1),Ct=k(" Send Receipt "),wt={class:""},St=k(" Complete ");var Vt=d({expose:[],props:{},emits:["proccessCheckout"],setup:(e,{emit:t})=>(g(),p((()=>{})),(e,t)=>{const l=o,a=H,n=c,u=s;return m(),v(u,{class:"d-flex flex-column justify-content-between",style:{"min-height":"500px"}},{default:h((()=>[f("div",null,[x(e.$slots,"default"),ht,f(a,null,{default:h((()=>[f(l,null,{default:h((()=>[f("div",bt,[V(f("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>T(je)?je.value=e:null)},[gt,kt,xt,jt],512),[[E,y(je)]])])])),_:1})])),_:1}),f(n,{color:"success",class:"mx-auto text-center d-block",onClick:y(Ce)},{default:h((()=>[Ct])),_:1},8,["onClick"])]),f("div",wt,[f(n,{color:"success",onClick:t[2]||(t[2]=e=>ge.value=1),class:"w-100 justify-content-center"},{default:h((()=>[St])),_:1})])])),_:3})})});const Pt={style:{"min-height":"400px"}},$t={class:"d-flex justify-content-between mb-4"},Tt=f("h3",{class:"title is-5 mb-2"},"Order",-1),Et={class:"d-flex justify-content-between mb-4"},At=f("h3",{class:"title is-5 mb-2"},"Order",-1);var Rt=d({expose:[],props:{},setup(e){g(),p((()=>{}));const t=r([{step:1,name:"Shopping",icon:"fa-shopping-cart"},{step:2,name:"Receipt",icon:"fa-money-check"},{step:3,name:"Receipt",icon:"fa-receipt"}]);return(e,l)=>{const a=s,n=N,o=Je,u=_t,c=Vt;return m(),v("div",Pt,[f(a,{class:"mb-4 d-flex justify-content-around"},{default:h((()=>[(m(!0),v(j,null,C(t.value,((e,t)=>(m(),v("p",{key:`sterpmenu-${t}`,style:{"font-size":"20px"},title:e.name,class:e.step==y(ge)?"text-primary":"",onClick:t=>ge.value=e.step},[f("i",{class:["fas",e.icon],"aria-hidden":"true"},null,2)],10,["title","onClick"])))),128))])),_:1}),1==y(ge)?(m(),v(o,{key:0,onProccessCheckout:l[1]||(l[1]=e=>ge.value=2)},{default:h((()=>[f("div",$t,[Tt,y(ne)?(m(),v(n,{key:0,color:"info",label:`${y(ne).length} products`,rounded:"",elevated:""},null,8,["label"])):S("",!0)])])),_:1})):S("",!0),2==y(ge)?(m(),v(u,{key:1},{default:h((()=>[f("div",Et,[At,y(ne)?(m(),v(n,{key:0,color:"info",label:`${y(ne).length} products`,rounded:"",elevated:""},null,8,["label"])):S("",!0)])])),_:1})):S("",!0),3==y(ge)?(m(),v(c,{key:2})):S("",!0)])}}});const Ut={key:0,class:"page-content-inner columns is-multiline"},zt={class:"column is-8"},Bt={class:"card-grid-toolbar"},Dt={key:0,class:"columns is-multiline w-100"},Ft=f("p",null,"View All",-1),Lt={class:"card-grid card-grid-v4"},qt=f("img",{class:"light-image",src:Q,alt:""},null,-1),Ot=f("img",{class:"dark-image",src:W,alt:""},null,-1),It={class:"column is-4 card_counte"},Mt={key:1},Nt=f("h3",{class:"title is-5 mb-2"},"Sorry",-1),Ht=f("p",null,"Sale not available: an inventory is open",-1);var Gt=d({expose:[],setup(c){X.value="Store";const{cookies:d}=A();R({title:"Store"});const b=function(e){"object"==typeof e&&(e=this.model),Y.value=e,Z(e).then((e=>{ee.value.length>0&&(1==ee.value[0].status?oe.value=!0:oe.value=!1)})),te(e,"active"),le()},k=g(),x=U();p((()=>{e().then((e=>{I(l,"locations_id",t.value.locations),M(l.value,"locations_id").change=b,null!=d.get("locations_id")&&(M(l.value,"locations_id").model=d.get("locations_id"),b(d.get("locations_id")))})),null!=k.query.payment_intent_client_secret&&"succeeded"==k.query.redirect_status&&(async e=>await B.post("orders/activate",{payment_intent_client_secret:e}))(k.query.payment_intent_client_secret).then((e=>{q.success("Payment"),x.replace({query:{}})}))}));const w=r("");r(null);const P=i((()=>w.value?ae.value.filter((e=>e.name.match(new RegExp(w.value,"i"))||e.category.name.match(new RegExp(w.value,"i"))||e.product_categories_id==w.value||e.vard_code==w.value)):ae.value));return r(0),(e,t)=>{const c=a,r=s,i=n,d=o,p=u,b=Re,g=Rt,k=K;return m(),v(k,null,{default:h((()=>[f(c,{"inputs-step":y(l)},null,8,["inputs-step"]),y(oe)?(m(),v("div",Mt,[f(r,{radius:"large",color:"danger"},{default:h((()=>[Nt,Ht])),_:1})])):(m(),v("div",Ut,[f("div",zt,[f("div",Bt,[y(se)?(m(),v("div",Dt,[f(r,{onClick:t[1]||(t[1]=e=>w.value=""),class:"\n                column\n                is-2\n                d-flex\n                flex-column\n                align-items-center\n                justify-content-center\n                text-center\n                cursor-pointer\n              "},{default:h((()=>[Ft])),_:1}),(m(!0),v(j,null,C(y(se),((e,t)=>(m(),v(r,{onClick:t=>w.value=e.id,key:`categorie-${t}`,class:"\n                column\n                is-2\n                d-flex\n                flex-column\n                align-items-center\n                justify-content-center\n                text-center\n                cursor-pointer\n              "},{default:h((()=>[f(i,{size:"medium",picture:`${y(D)}storage/${e.image}`},null,8,["picture"]),f("p",null,_(e.name),1)])),_:2},1032,["onClick"])))),128))])):S("",!0),f(d,{icon:"feather:search"},{default:h((()=>[V(f("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>w.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[$,w.value]])])),_:1})]),f("div",Lt,[f(p,{class:[0!==y(P).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n              search terms you've entered. Please try different search terms or\n              criteria.",larger:""},{image:h((()=>[qt,Ot])),_:1},8,["class"]),f(z,{name:"list",tag:"div",class:"columns is-multiline"},{default:h((()=>[(m(!0),v(j,null,C(y(P),(e=>(m(),v("div",{key:e.id,class:"column is-3"},[f(b,{product:e},null,8,["product"])])))),128))])),_:1})])]),f("div",It,[f(g)])]))])),_:1})}}});export default Gt;
