var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;import{_ as n}from"./inputsLayaut.vue_vue&type=style&index=0&lang.f70b005e.js";import{_ as i}from"./V-Control.237cc4d1.js";import{_ as c}from"./V-Card.vue_vue&type=script&setup=true&lang.513c973c.js";import{_ as r}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8d66525.js";import{_ as o}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.c7dbe33c.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.2d9493fa.js";import{d,G as p,o as v,h as m,k as f,D as y,F as h,j as b,a9 as _,O as g,E as k,K as x,Q as j,R as w,w as C,r as S,a6 as V,S as P,Y as $,J as z,P as A,U as O,a4 as R,c as T,u as I,L as N,ab as U}from"./vendor.c636f33b.js";import{b as q,m as D,A as L,n as E,P as F,g as M,F as B,a as G}from"./index.18cf3406.js";import{a as J,c as K,b as W,s as Y,t as Q,d as H,e as X,f as Z,g as ee,h as le,p as te,m as ae,i as se,j as ne,k as ie,o as ce,l as re,n as oe,q as ue,r as de,u as pe,v as ve,w as me,x as fe,y as ye,z as he,A as be,B as _e}from"./Store.c33086c5.js";import{_ as ge}from"./V-Tag.vue_vue&type=script&setup=true&lang.3160f209.js";import{_ as ke}from"./V-Placeload.c195e33d.js";import{_ as xe}from"./V-Field.vue_vue&type=script&setup=true&lang.1e8c9fad.js";import{_ as je}from"./V-Modal.vue_vue&type=script&setup=true&lang.d231cd7d.js";import{_ as we}from"./V-Loader.vue_vue&type=script&setup=true&lang.a4702afa.js";import{l as Ce,t as Se,b as Ve,c as Pe}from"./Companies.fe51c74e.js";import{_ as $e}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.7d3f940d.js";import{_ as ze,a as Ae}from"./search-4-dark.fb3880a5.js";import{p as Oe}from"./sidebarLayoutState.7607026f.js";import{l as Re,g as Te,i as Ie}from"./Inventory.2e2e2dae.js";import{g as Ne,a as Ue,p as qe,h as De}from"./Products.d5a5396b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.32e67a93.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9c624faa.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.0ab7597d.js";import"./useDropdown.35c6b80e.js";import"./V-Dropdown.2bdf3018.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e220a16b.js";import"./activePanelState.8d6f746c.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d35703da.js";import"./V-Message.vue_vue&type=script&setup=true&lang.085649cc.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.63bdcb05.js";import"./navbarLayoutState.62db125d.js";import"./video.c58ada5a.js";import"./darkModeState.77580bb1.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.cce55643.js";import"./AnimatedLogo.a42abb6a.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.e5a3139a.js";import"./V-Block.vue_vue&type=script&setup=true&lang.29ae6253.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.068e83d3.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1e8fe599.js";const Le={class:"card-grid-item-content"},Ee={class:"dark-inverted text-center"},Fe={class:"title is-6"},Me={class:"title is-5"},Be={key:0,class:"is-7 title"},Ge={key:1,class:"is-7 title"},Je={class:"card-grid-item-footer"},Ke=k(" ADD ");var We=d({expose:[],props:{product:{type:Object,default:{}}},setup:e=>(g(),p((()=>{})),(l,t)=>{const a=u;return v(),m("a",{href:"#",onClick:t[2]||(t[2]=_((l=>y(J)(e.product)),["prevent"])),class:"card-grid-item"},[f("img",{src:`${y(q)}storage/${e.product.photo}`,alt:"",onErrorOnce:t[1]||(t[1]=e=>e.target.src="https://via.placeholder.com/400x300")},null,40,["src"]),f("div",Le,[f("h3",Ee,[f("h2",Fe,h(e.product.name),1),f("h2",Me,h(y(D)(e.product.price)),1),e.product.stock?(v(),m("p",Be," Stock: "+h(e.product.stock.current_stock),1)):(v(),m("p",Ge,"Stock: 0"))])]),f("div",Je,[f(a,{color:"white",class:"w-100 justify-content-center"},{default:b((()=>[Ke])),_:1})])])})});const Ye={class:"table is-striped is-fullwidth"},Qe=f("thead",null,[f("tr",null,[f("th",{scope:"col"},"Description"),f("th",{scope:"col"},"Cuantity"),f("th",{scope:"col"},"Value")])],-1),He={class:"d-flex"},Xe={class:""},Ze=f("hr",null,null,-1),el={class:"table is-striped is-fullwidth"},ll=f("td",null,"SubTotal",-1),tl={class:"text-right"},al=f("td",null,"Tax",-1),sl={class:"text-right"},nl=f("td",null,[f("b",null,"Total")],-1),il={class:"text-right"},cl=k(" Checkout ");var rl=d({expose:[],props:{},emits:["proccessCheckout"],setup:(e,{emit:l})=>(g(),p((()=>{})),(e,l)=>{const t=ge,a=u,s=c;return v(),m(s,{class:"d-flex flex-column justify-content-between",style:{"min-height":"500px"}},{default:b((()=>[f("div",null,[x(e.$slots,"default"),f("table",Ye,[Qe,f("tbody",null,[(v(!0),m(j,null,w(y(W),((e,l)=>(v(),m("tr",{key:`cart-${l}`},[f("td",null,h(e.name),1),f("td",null,[f("div",He,[f(t,{color:"white",onClick:t=>y(K)("minus",e,l),label:"-",style:{cursor:"pointer"}},null,8,["onClick"]),f(t,{color:"white",label:e.count},null,8,["label"]),f(t,{color:"white",onClick:t=>y(K)("plus",e,l),label:"+",style:{cursor:"pointer"}},null,8,["onClick"])])]),f("td",null,h(y(D)(e.products_amount*e.count)),1)])))),128))])])]),f("div",Xe,[Ze,f("table",el,[f("tbody",null,[f("tr",null,[ll,f("td",tl,h(y(D)(y(Y))),1)]),f("tr",null,[al,f("td",sl,h(y(D)(y(Q))),1)]),f("tr",null,[nl,f("td",il,h(y(D)(y(H))),1)])])]),f(a,{color:"success",disabled:0==y(W).length,onClick:l[1]||(l[1]=l=>e.$emit("proccessCheckout")),class:"w-100 justify-content-center"},{default:b((()=>[cl])),_:1},8,["disabled"])])])),_:3})})});const ol={key:0,class:"mt-4 box-table-scroll w-100",style:{"overflow-y":"scroll"}},ul={class:"table is-hoverable is-fullwidth"},dl={key:1,class:"d-flex align-items-center mt-5 w-100"},pl={class:"ml-4 w-100"},vl={class:"table is-hoverable is-fullwidth"},ml=f("td",null,[f("b",null,"Name:")],-1),fl=f("td",null,[f("b",null,"Email:")],-1),yl={key:0},hl=f("td",null,[f("b",null,"Payment Method: ")],-1),bl={key:0,colspan:"2"},_l={key:1},gl={key:2};var kl=d({expose:[],props:{modelValue:{default:null},dato:{type:String,default:"name"},valor:{default:null}},emits:["update:modelValue","update:valor"],setup(e,{emit:l}){const t=e;C(t.valor,(()=>{console.log("cambia"),a.value=t.valor})),p((()=>{t.valor?a.value=t.valor:a.value="",s.value=[],n.value=!1,i.value=null}));const a=S(""),s=S([]),n=S(!1),i=S(null),o=S(!1),u=async()=>{s.value=[],i.value=null,l("update:modelValue",null);const e=await L.get(`search_member?value=${a.value}`);n.value=!0,s.value=e.data},d=async e=>await L.get(`orders/get_payment_methods/${e}`);return(e,p)=>{const _=r,g=ke,k=c,x=V("focus");return v(),m(k,{class:"\r\n      d-flex\r\n      justify-content-center\r\n      align-items-center\r\n      flex-column\r\n      position-relative\r\n    "},{default:b((()=>[P(f("input",{"onUpdate:modelValue":p[1]||(p[1]=e=>a.value=e),type:"text",class:"input custom-text-filter",placeholder:"Search",onKeyup:u,onChange:p[2]||(p[2]=l=>e.$emit("update:valor",a.value))},null,544),[[x],[$,a.value]]),n.value?(v(),m("div",ol,[f("table",ul,[f("tbody",null,[(v(!0),m(j,null,w(s.value,((e,s)=>(v(),m("tr",{onClick:s=>(e=>{n.value=!1,o.value=!0,d(e.id).then((s=>{i.value=e,i.value.cards=s.data,o.value=!1,"name"==t.dato?a.value=i.value.name+" "+i.value.last_name:a.value=i.value[t.dato],l("update:modelValue",i.value),l("update:valor",a.value)})).catch((e=>{o.value=!1,E.error(e.response.data)}))})(e),key:`member-${s}`},[f("td",null,[f(_,{picture:`${y(q)}storage/${e.photo}`,size:"medium"},null,8,["picture"])]),f("td",null,h(e.name)+" "+h(e.second_name)+" "+h(e.last_name),1),f("td",null,h(e.email),1)],8,["onClick"])))),128))])])])):z("",!0),i.value?(v(),m("div",dl,[f(_,{picture:`${y(q)}storage/${i.value.photo}`,size:"large"},null,8,["picture"]),f("div",pl,[f("table",vl,[f("tbody",null,[f("tr",null,[ml,f("td",null,h(i.value.name)+" "+h(i.value.second_name)+" "+h(i.value.last_name),1)]),f("tr",null,[fl,f("td",null,h(i.value.email),1)]),i.value.user?(v(),m("tr",yl,[hl,i.value.user.stripe_id?z("",!0):(v(),m("td",bl)),i.value.user.pm_type?(v(),m("td",_l,h(i.value.user.pm_type)+" **** "+h(i.value.user.pm_last_four),1)):(v(),m("td",gl,"It does not have a default payment method"))])):z("",!0)])])])])):z("",!0),o.value?(v(),m(g,{key:2,height:"100px",width:"100%",class:"mt-4"})):z("",!0)])),_:1})}}});const xl={class:"d-flex mb-4 justify-content-between"},jl={class:"title is-5"},wl=k(" Total: "),Cl={class:"title is-5"},Sl=k(" Cash Total: "),Vl={class:"\r\n          d-flex\r\n          justify-content-center\r\n          align-items-center\r\n          flex-column\r\n          mb-4\r\n        "},Pl=f("p",{class:"title is-5 mb-4"},"Change Back:",-1),$l={class:"title is-3 mb-0"},zl={class:"d-flex justify-content-center flex-wrap mb-4"},Al=f("div",{class:"w-100"},null,-1),Ol={class:"d-flex justify-content-center"},Rl=k("Reset"),Tl=k("Confirm");var Il=d({expose:[],setup:e=>(e,l)=>{const t=u,a=i,s=xe,n=je;return v(),m(n,{title:"",open:y(X),actions:"center",onClose:l[4]||(l[4]=e=>X.value=!1)},{content:b((()=>[f("div",xl,[f("p",jl,[wl,f("b",null,h(y(D)(y(H))),1)]),f("p",Cl,[Sl,f("b",null,h(y(D)(y(Z))),1)])]),f("div",Vl,[Pl,f("p",$l,[f("b",null,h(y(D)(y(ee))),1)])]),f("div",zl,[f(t,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:l[1]||(l[1]=e=>Z.value=y(H))},{default:b((()=>[k(" Full Payment "+h(y(D)(y(H))),1)])),_:1}),Al,(v(),m(j,null,w([5,10,20,50,100],((e,l)=>f(t,{key:`calculato-${l}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:l=>y(le)(e)},{default:b((()=>[k(" $"+h(e),1)])),_:2},1032,["onClick"]))),64))]),f("div",Ol,[f(s,null,{default:b((()=>[f(a,null,{default:b((()=>[P(f("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>A(Z)?Z.value=e:null),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[$,y(Z)]])])),_:1})])),_:1})])])),action:b((()=>[f(t,{onClick:l[3]||(l[3]=e=>Z.value=0),class:"d-flex justify-content-center",raised:""},{default:b((()=>[Rl])),_:1}),f(t,{color:"success",onClick:y(te),disabled:y(H)>y(Z),class:"d-flex justify-content-center",raised:""},{default:b((()=>[Tl])),_:1},8,["onClick","disabled"])])),_:1},8,["open"])}});const Nl=f("div",{id:"payment-element"},null,-1),Ul=k("Pay now "),ql=f("div",{id:"payment-message",class:"hidden"},null,-1);var Dl=d({expose:[],props:{url_payment:{type:String,required:!0},member_id:{type:Number,required:!0},new_setup_intent:{type:String,required:!0},data:{type:Object,required:!0}},emits:["PaymentAction"],setup(e,{emit:n}){const i=e,r=Stripe(F.value);C((()=>i.id),(e=>{console.log("cambio"),o.value=!0,k()}));const o=S(!0);S({id:i.id,amount:i.amount});const d=S(),y=S(null),h=S(null),g=S(!1);S(null);const k=async()=>{let e=await L.post(i.new_setup_intent).then((e=>{y.value=e.data.client_secret,d.value=r.elements({clientSecret:y.value,appearance:{theme:"night",rules:{".Input":{boxShadow:"none"}}}}),h.value=d.value.create("card",{classes:{base:"base_card"}}),h.value.mount("#payment-element")})).catch((e=>{o.value=!1}));return o.value=!1,e},x=S(null),w=async e=>{e.preventDefault(),g.value=!0;const{setupIntent:c,error:o}=await r.confirmCardSetup(y.value,{payment_method:{card:h.value,billing_details:{name:x.value}}});if(o)g.value=!1,E.error(o.message),k();else{const{payment_method:e}=c,r=((e,n)=>{for(var i in n||(n={}))t.call(n,i)&&s(e,i,n[i]);if(l)for(var i of l(n))a.call(n,i)&&s(e,i,n[i]);return e})({payment_method:e},i.data);console.log(r);const{data:o}=await L.post(i.url_payment,r).catch((e=>{g.value=!1}));o&&(n("PaymentAction",o),E.success("Success Payment"))}g.value=!1};return p((()=>{g.value=!1,k()})),(e,l)=>{const t=ke,a=u,s=we,n=c;return v(),m(j,null,[o.value?(v(),m(t,{key:0,height:"500px"})):z("",!0),P(f(n,{class:"mt-6"},{default:b((()=>[f("form",{onSubmit:_(w,["prevent"]),id:"payment-form"},[P(f("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":l[1]||(l[1]=e=>x.value=e),placeholder:"Name",type:"text"},null,512),[[$,x.value]]),Nl,f(s,{size:"small",active:g.value},{default:b((()=>[f(a,{id:"submit",class:"mt-4",color:"info"},{default:b((()=>[Ul])),_:1})])),_:1},8,["active"]),ql],40,["onSubmit"])])),_:1},512),[[O,!o.value]])],64)}}});const Ll={key:0,class:"mt-4 mx-2"},El={class:"columns is-multiline w-100"},Fl={class:"d-flex align-items-center"},Ml=f("p",{class:"title is-6 mb-0"},[f("i",{class:"fas fa-credit-card","aria-hidden":"true"})],-1),Bl={class:"ml-4"},Gl=f("p",{class:"title is-6 mb-2"},"Select Payment Method",-1),Jl={class:"title is-6 mb-0"},Kl={class:"column is-12"},Wl=f("div",{class:"d-flex align-items-center"},[f("p",{class:"title is-1 mb-0"},[f("i",{class:"fas fa-plus-circle","aria-hidden":"true"})]),f("div",{class:"ml-4"},[f("p",{class:"title is-4 mb-2"},"Add new card")])],-1);var Yl=d({expose:[],setup(e){const l=S(!1),t=S(!1),a=()=>{W.value.length?H.value?ae.value?t.value=!0:E.error("No hay miembro seleccionado"):E.error("No existe el total"):E.error("No hay productos en el carro")},s=e=>{se({invoice_pdf:e.invoice_pdf,order:e.order})};return(e,n)=>{const i=c,r=we,o=Dl;return e.order?z("",!0):(v(),m("div",Ll,[f(r,{size:"large",active:l.value},{default:b((()=>[f("div",El,[(v(!0),m(j,null,w(y(ae).cards,((e,a)=>(v(),m("div",{key:`card-${a}`,class:"column is-6"},[t.value?z("",!0):(v(),m(i,{key:0,onClick:t=>{return a={payment_method:e.id},ae.value.payment_method=a.payment_method,void(W.value.length?H.value?ae.value?confirm("Confirm Payment")&&(l.value=!0,ne({cart:W.value,total:H.value,member_id:ae.value.id,locations_id:M(Ce.value,"locations_id").model,payment_method:ae.value.payment_method}).then((e=>{l.value=!1,E.success("Success Payment"),se({invoice_pdf:e.data.invoice_pdf,order:e.data.order})})).catch((e=>{l.value=!1,E.error(e.response.data)}))):E.error("No hay miembro seleccionado"):E.error("No existe el total"):E.error("No hay productos en el carro"));var a},color:y(ae).payment_method==e.id?"success":void 0,class:"btn-card"},{default:b((()=>[f("div",Fl,[Ml,f("div",Bl,[Gl,f("p",Jl,h(e.card.brand)+" **** "+h(e.card.last4),1)])])])),_:2},1032,["onClick","color"]))])))),128)),f("div",Kl,[P(f(i,{onClick:a,color:"success",class:"btn-card"},{default:b((()=>[Wl])),_:1},512),[[O,!t.value]])])])])),_:1},8,["active"]),t.value?(v(),m(o,{key:0,new_setup_intent:`orders/new_setup_intent/${y(ae).id}`,member_id:y(ae).id,url_payment:"orders/store_new_card_and_payment",data:{cart:y(W),total:y(H),member_id:y(ae).id,locations_id:y(M)(y(Ce),"locations_id").model},onPaymentAction:s},null,8,["new_setup_intent","member_id","data"])):z("",!0)]))}}});const Ql=f("h1",{class:"title text-center is-4 success"}," Good Job! Success Payment ",-1),Hl=f("div",{class:"text-center mt-6"},[f("p",{class:"title is-5"},"What do you want to do with the receipt?")],-1),Xl={class:"columns is-multiline"},Zl={class:"column is-6 mt-6"},et={class:"d-flex justify-content-between align-items-center"},lt=f("div",{class:"d-flex align-items-center"},[f("p",{class:"title mb-0 mr-3 is-3"},[f("i",{class:"fas fa-print","aria-hidden":"true"})]),f("p",{class:"title text-center is-5"},"Print Receipt")],-1),tt={key:0,class:"title is-6"},at=f("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),st={class:"column is-6 mt-6"},nt={class:"d-flex justify-content-between align-items-center"},it=f("div",{class:"d-flex align-items-center"},[f("p",{class:"title mb-0 mr-3 is-3"},[f("i",{class:"iconify","data-icon":"feather:send","aria-hidden":"true"})]),f("p",{class:"title text-center is-5"},"Send Receipt Mail")],-1),ct={key:0,class:"title is-6"},rt=f("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),ot={key:0,class:"column is-6 mx-auto"},ut={class:"d-flex justify-content-between align-items-center"},dt=f("div",{class:"d-flex align-items-center"},[f("p",{class:"title mb-0 mr-3 is-3"},[f("i",{class:"iconify","data-icon":"feather:send","aria-hidden":"true"})]),f("p",{class:"title text-center is-5"},"Send Invoice Mail")],-1),pt={key:0,class:"title is-6"},vt=f("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),mt={key:1,class:"column is-12 text-center"},ft=f("i",{class:"iconify","data-icon":"feather:send","aria-hidden":"true"},null,-1),yt=k(" Send "),ht=f("i",{class:"iconify","data-icon":"feather:send","aria-hidden":"true"},null,-1),bt=k(" Send Invoice "),_t={key:2,class:"column is-12"};var gt=d({expose:[],props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:l}){R(),p((()=>{}));const t=S("receipt"),a=S(!1),s=()=>{a.value=!a.value},n=S(!1),i=S(null),r=S(!1),o=()=>{r.value=!0,re(ce.value.id,i.value).then((e=>{E.success("Send Success"),r.value=!1})).catch((e=>{for(var l in r.value=!1,E.error(e.response.data),e.response.data)E.error(`${l}: ${e.response.data[l]}`)}))},d=()=>{i.value=null,n.value=!1,l("update:modelValue",!1)},h=e=>{n.value=!0,t.value=e,"invoice"==t.value?i.value=ae.value.email:i.value=""},_=()=>{r.value=!0,oe(ce.value.id,i.value,ie.value).then((e=>{E.success("Send Success"),r.value=!1})).catch((e=>{for(var l in r.value=!1,E.error(e.response.data),e.response.data)E.error(`${l}: ${e.response.data[l]}`)}))};return(l,p)=>{const g=c,k=kl,x=u,j=we,w=je;return v(),m(w,{noclose:"",title:"",open:e.modelValue,actions:"center",onClose:d},{content:b((()=>[f(g,{color:"success",class:"outlined"},{default:b((()=>[Ql])),_:1}),Hl,f("div",Xl,[f("div",Zl,[f(g,{color:"info",class:"btn-card",onClick:s},{default:b((()=>[f("div",et,[lt,a.value?(v(),m("p",tt,[at])):z("",!0)])])),_:1})]),f("div",st,[f(g,{color:"warning",class:"btn-card",onClick:p[1]||(p[1]=e=>h("receipt"))},{default:b((()=>[f("div",nt,[it,"receipt"==t.value?(v(),m("p",ct,[rt])):z("",!0)])])),_:1})]),y(ae)&&y(ie)?(v(),m("div",ot,[f(g,{style:{background:"#673ab7"},class:"btn-card",onClick:p[2]||(p[2]=e=>h("invoice"))},{default:b((()=>[f("div",ut,[dt,"invoice"==t.value?(v(),m("p",pt,[vt])):z("",!0)])])),_:1})])):z("",!0),n.value?(v(),m("div",mt,[f(k,{dato:"email",valor:i.value,"onUpdate:valor":p[3]||(p[3]=e=>i.value=e),modelValue:y(ae),"onUpdate:modelValue":p[4]||(p[4]=e=>A(ae)?ae.value=e:null)},null,8,["valor","modelValue"]),f(j,{size:"large",active:r.value},{default:b((()=>["receipt"==t.value?(v(),m(x,{key:0,onClick:o,color:"success",class:"mt-4"},{default:b((()=>[ft,yt])),_:1})):z("",!0)])),_:1},8,["active"]),f(j,{size:"large",active:r.value},{default:b((()=>["invoice"==t.value?(v(),m(x,{key:0,onClick:_,style:{background:"#673ab7"},class:"mt-4"},{default:b((()=>[ht,bt])),_:1})):z("",!0)])),_:1},8,["active"])])):z("",!0),a.value?(v(),m("div",_t,[f("iframe",{style:{width:"100%"},height:"400px",src:`${y(B)}store/recibo?order=${y(ce).id}`,frameborder:"0"},null,8,["src"])])):z("",!0)])])),action:b((()=>[])),_:1},8,["open"])}}});const kt={class:"columns is-multiline",style:{"min-height":"350px"}},xt={class:"column is-3"},jt=f("p",{class:"title is-6 mb-1"},[f("b",null,"Total")],-1),wt={key:0,class:"title is-2"},Ct={key:1,class:"title is-2"},St={class:"column is-9"},Vt={class:"column is-12"},Pt={class:"d-flex"},$t={class:"d-flex justify-content-between align-items-start"},zt=f("div",null,[f("p",{class:"title is-3"},[f("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),f("p",{class:"title is-5"},"Debit Automatic")],-1),At={key:0,class:"title is-6"},Ot=f("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Rt=f("p",{class:"title is-3"},[f("i",{class:"fas fa-money-bill","aria-hidden":"true"})],-1),Tt=f("p",{class:"title is-5"},"Cash",-1),It={class:"d-flex justify-content-between align-items-start"},Nt=f("div",null,[f("p",{class:"title is-3"},[f("i",{class:"fas fa-money-check-alt","aria-hidden":"true"})]),f("p",{class:"title is-5"},"Swipe Card")],-1),Ut={key:0,class:"title is-6"},qt=f("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Dt={class:"is-4 column mx-auto"},Lt={class:"d-flex justify-content-between align-items-start"},Et=f("div",null,[f("p",{class:"title is-3"},[f("i",{class:"fas fa-receipt",style:{color:"white !important"},"aria-hidden":"true"})]),f("p",{class:"title is-5",style:{color:"white !important"}}," View Order ")],-1),Ft={key:0,class:"title is-6"},Mt=f("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),Bt={key:0,class:"mt-4 mx-2"},Gt={class:"column"},Jt=f("p",{class:"title is-1"},[f("i",{class:"lnir lnir-postcard","aria-hidden":"true"})],-1),Kt={class:"title is-5"},Wt={key:0,class:"column flex-column d-flex justify-content-between is-3"},Yt=f("p",{class:"title is-5"},"Cancel Payment",-1),Qt=f("p",{class:"title is-5"},"Retry Payment",-1),Ht={key:1,class:"column is-5"},Xt=f("p",{class:"title is-3"},"Finish payment",-1);var Zt=d({expose:[],props:{},emits:["proccessCheckout"],setup(e,{emit:l}){g();const t=S(!1);C((()=>ae.value),(()=>{t.value=!1})),p((()=>{console.log("se monta el checkout"),ce.value=null}));const a=S(!1),s=S(null),n=S(null),i=T((()=>!(!t.value&&Se.value.length&&!n.value&&!ce.value))),r=T((()=>!!(t.value||a.value.length||ce.value))),o=()=>{i.value||(Se.value.length?a.value=!a.value:a.value=!1,n.value&&(a.value=!0))},u=()=>{n.value=null,s.value=null,a.value=!1};return(e,l)=>{const d=c,p=kl,_=Il,g=Yl,k=gt,C=V("tooltip");return v(),m("div",kt,[f("div",xt,[f(d,{class:""},{default:b((()=>[x(e.$slots,"default"),f("div",null,[jt,y(ce)?(v(),m("p",wt,h(y(D)(y(ce).total)),1)):(v(),m("p",Ct,h(y(D)(y(H))),1))])])),_:3})]),f("div",St,[f(p,{class:"",modelValue:y(ae),"onUpdate:modelValue":l[1]||(l[1]=e=>A(ae)?ae.value=e:null)},null,8,["modelValue"])]),f("div",Vt,[f("div",Pt,[P(f(d,{color:"success",disabled:!y(ae),onClick:l[2]||(l[2]=e=>y(ae)?t.value=!t.value:t.value=!1),class:"mx-2 btn-card w-100"},{default:b((()=>[f("div",$t,[zt,t.value?(v(),m("p",At,[Ot])):z("",!0)])])),_:1},8,["disabled"]),[[C,y(ae)?"":"You must select a member"]]),f(d,{color:"warning",disabled:y(r),onClick:l[3]||(l[3]=e=>{ue.value=1,X.value=!0,y(te)}),class:"mx-2 btn-card w-100 justify-content-center"},{default:b((()=>[Rt,Tt])),_:1},8,["disabled"]),P(f(d,{color:"info",disabled:y(i),class:"mx-2 btn-card w-100 justify-content-center",onClick:o},{default:b((()=>[f("div",It,[Nt,a.value?(v(),m("p",Ut,[qt])):z("",!0)])])),_:1},8,["disabled"]),[[C,y(Se).length?"":"No posee terminales"]])]),f("div",Dt,[y(ce)?(v(),m(d,{key:0,style:{background:"#388e3c"},class:"mx-2 mx-auto btn-card justify-content-center",onClick:l[4]||(l[4]=e=>de.value=!0)},{default:b((()=>[f("div",Lt,[Et,y(de)?(v(),m("p",Ft,[Mt])):z("",!0)])])),_:1})):z("",!0)]),a.value?(v(),m("div",Bt,[(v(!0),m(j,null,w(y(Se),((e,t)=>(v(),m("div",{key:`terminal-${t}`,class:"columns is-multiline"},[f("div",Gt,[f(d,{class:["p-4 btn-card",n.value&&s.value==e.id?"is-3":""],disabled:n.value&&s.value==e.id,color:s.value==e.id?"info":"",onClick:l=>{return t=e.id,void(null==n.value?(s.value=t,confirm("Send Terminal")&&(E.success("Enviando...."),pe({cart:W.value,total:H.value,locations_id:M(Ce.value,"locations_id").model,terminal_id:s.value}).then((e=>{n.value=e.data,console.log("soy el paymentIntent",e.data),E.success("Recibido en el terminal")})).catch((e=>{E.error(e.response.data)})))):E.error("A payment Intent already exists, Select one of the following actions"));var t}},{default:b((()=>[Jt,f("p",Kt,h(e.label),1),f("p",null,"Serial number: "+h(e.serial_number),1),f("p",null,"Status: "+h(e.status),1)])),_:2},1032,["class","disabled","color","onClick"])]),n.value&&s.value==e.id?(v(),m("div",Wt,[f(d,{color:"danger",class:"mb-2 btn-card d-flex justify-content-center",onClick:l[5]||(l[5]=e=>{ve(n.value).then((e=>{u(),E.success("payment canceled")})).catch((e=>{E.error(e.response),e.response.data&&E.error(e.response.data)}))})},{default:b((()=>[Yt])),_:1}),f(d,{color:"warning",class:"btn-card d-flex justify-content-center",onClick:l[6]||(l[6]=e=>(E.success("Retry..."),void me(n.value,s.value).then((e=>{n.value=e.data,E.success("Received at the terminal")})).catch((e=>{E.error(e.response),e.response.data&&E.error(e.response.data)}))))},{default:b((()=>[Qt])),_:1})])):z("",!0),n.value&&s.value==e.id?(v(),m("div",Ht,[f(d,{color:"success",class:"\r\n                btn-card\r\n                h-100\r\n                d-flex\r\n                justify-content-center\r\n                align-items-center\r\n              ",onClick:l[7]||(l[7]=e=>{fe(n.value).then((e=>{u(),finishPaymentOrder({invoice_pdf:e.data.invoice_pdf,order:e.data.order})})).catch((e=>{E.error(e.response),e.response.data&&E.error(e.response.data)}))})},{default:b((()=>[Xt])),_:1})])):z("",!0)])))),128))])):z("",!0),f(_),t.value?(v(),m(g,{key:1})):z("",!0)]),f(k,{modelValue:y(de),"onUpdate:modelValue":l[8]||(l[8]=e=>A(de)?de.value=e:null)},null,8,["modelValue"])])}}});const ea={style:{"min-height":"400px"}},la={class:"d-flex justify-content-between mb-4"},ta=f("h3",{class:"title is-5 mb-2"},"Order",-1);var aa=d({expose:[],props:{},setup(e){g(),p((()=>{})),S([{step:1,name:"Shopping",icon:"fa-shopping-cart"},{step:2,name:"Receipt",icon:"fa-money-check"},{step:3,name:"Receipt",icon:"fa-receipt"}]);const l=()=>{ce.value=null,ye.value=!1,t.value=null,W.value=[]},t=S(null);return(e,t)=>{const a=ge,s=rl,n=Zt,i=je;return v(),m("div",ea,[f(s,{onProccessCheckout:t[1]||(t[1]=e=>ye.value=!0)},{default:b((()=>[f("div",la,[ta,y(W)?(v(),m(a,{key:0,color:"info",label:`${y(W).length} products`,rounded:"",elevated:""},null,8,["label"])):z("",!0)])])),_:1}),f(i,{open:y(ye),actions:"center",size:"big",noscroll:"",noclose:"",onClose:l},{header:b((()=>[])),content:b((()=>[f(n)])),action:b((()=>[])),_:1},8,["open"])])}}});const sa={key:0,class:"page-content-inner columns is-multiline"},na={class:"column is-8"},ia={class:"column is-8"},ca={class:"card-grid-toolbar"},ra={key:0,class:"columns is-multiline w-100"},oa=f("p",{class:"title is-7"},"View All",-1),ua={class:"title is-7"},da={class:"card-grid card-grid-v4"},pa=f("img",{class:"light-image",src:ze,alt:""},null,-1),va=f("img",{class:"dark-image",src:Ae,alt:""},null,-1),ma={class:"column is-4 card_counte"},fa={key:1},ya=f("h3",{class:"title is-5 mb-2"},"Sorry",-1),ha=f("p",null,"Sale not available: an inventory is open",-1);var ba=d({expose:[],setup(e){Oe.value="Store";const{cookies:l}=I();N({title:"Store"});const t=function(e){"object"==typeof e&&(e=this.model),Re.value=e,Te(e).then((e=>{Ie.value.length>0&&(1==Ie.value[0].status?_e.value=!0:_e.value=!1)})),Ne(e,"active"),Ue()},a=g(),s=R();p((()=>{he(),Ve().then((e=>{G(Ce,"locations_id",Pe.value.locations),M(Ce.value,"locations_id").change=t,null!=l.get("locations_id")&&(M(Ce.value,"locations_id").model=l.get("locations_id"),t(l.get("locations_id")))})),null!=a.query.payment_intent_client_secret&&"succeeded"==a.query.redirect_status&&be(a.query.payment_intent_client_secret).then((e=>{E.success("Payment"),s.replace({query:{}})}))}));const u=S("");S(null);const d=T((()=>u.value?qe.value.filter((e=>(console.log(e),console.log(u.value),e.name.match(new RegExp(u.value,"i"))||e.category.name.match(new RegExp(u.value,"i"))||e.product_categories_id==u.value||parseFloat(e.vard_code)==parseFloat(u.value)))):qe.value));return S(0),(e,l)=>{const t=n,a=i,s=c,p=r,_=o,g=We,k=aa,x=$e;return v(),m(x,null,{default:b((()=>[f(t,{"inputs-step":y(Ce)},null,8,["inputs-step"]),y(_e)?(v(),m("div",fa,[f(s,{radius:"large",color:"danger"},{default:b((()=>[ya,ha])),_:1})])):(v(),m("div",sa,[f("div",na,[f(a,{icon:"feather:search"},{default:b((()=>[P(f("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[$,u.value]])])),_:1})]),f("div",ia,[f("div",ca,[y(De)?(v(),m("div",ra,[f(s,{onClick:l[2]||(l[2]=e=>u.value=""),class:"\r\n                column\r\n                p-1\r\n                py-2\r\n                is-1\r\n                d-flex\r\n                flex-column\r\n                align-items-center\r\n                justify-content-center\r\n                text-center\r\n                cursor-pointer\r\n              "},{default:b((()=>[oa])),_:1}),(v(!0),m(j,null,w(y(De),((e,l)=>(v(),m(s,{onClick:l=>u.value=e.id,key:`categorie-${l}`,class:"\r\n                column\r\n                p-1\r\n                py-2\r\n                is-1.5\r\n                d-flex\r\n                flex-column\r\n                align-items-center\r\n                justify-content-center\r\n                text-center\r\n                cursor-pointer\r\n              "},{default:b((()=>[f(p,{size:"small",picture:`${y(q)}storage/${e.image}`},null,8,["picture"]),f("p",ua,h(e.name),1)])),_:2},1032,["onClick"])))),128))])):z("",!0)]),f("div",da,[f(_,{class:[0!==y(d).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n              search terms you've entered. Please try different search terms or\r\n              criteria.",larger:""},{image:b((()=>[pa,va])),_:1},8,["class"]),f(U,{name:"list",tag:"div",class:"columns is-multiline"},{default:b((()=>[(v(!0),m(j,null,w(y(d),(e=>(v(),m("div",{key:e.id,class:"column is-3 d-flex"},[f(g,{product:e},null,8,["product"])])))),128))])),_:1})])]),f("div",ma,[f(k)])]))])),_:1})}}});export default ba;
