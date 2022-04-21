import{_ as e}from"./V-Placeload.98b104a8.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d48be775.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.0cc151d4.js";import{m as l,i as s,a as n,b as i,s as r,c as u,p as o,g as c,d,e as m,f as p,h as v,j as h,k as f,l as _,n as b,o as y,q as g,r as x,t as k,u as j,v as C,w,x as M,y as P,z as S}from"./Members.48b44767.js";import{b as $,P as D,A as I,F as E,e as Y,v as F,g as A,m as V,n as N,p as T,f as q,a as z,s as W}from"./index.0a8619b7.js";import{d as L,w as O,G as B,c as H,r as R,D as U,o as G,h as J,L as Q,J as K,j as X,k as Z,F as ee,O as te,P as ae,Q as le,R as se,a7 as ne,E as ie,z as re,W as ue,H as oe,I as ce}from"./vendor.6f1ebb59.js";import{_ as de}from"./V-Button.vue_vue&type=script&setup=true&lang.0044528a.js";import{_ as me}from"./V-Loader.vue_vue&type=script&setup=true&lang.fc0f67e4.js";import{_ as pe}from"./V-Control.9d085c3f.js";import{_ as ve}from"./V-Field.vue_vue&type=script&setup=true&lang.511e2268.js";import{_ as he}from"./V-Modal.vue_vue&type=script&setup=true&lang.c37f85a5.js";import{_ as fe}from"./inputsLayaut.vue_vue&type=style&index=0&lang.07608343.js";import{_ as _e}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.214b6561.js";import{_ as be}from"./signComponent.vue_vue&type=script&setup=true&lang.53d49d4a.js";import{_ as ye}from"./pdf_icon.551549d4.js";import{_ as ge}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.ed23339b.js";import{_ as xe}from"./V-Block.vue_vue&type=script&setup=true&lang.46343492.js";import{_ as ke}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.419ca451.js";import{p as je}from"./sidebarLayoutState.f77399c8.js";import{g as Ce}from"./Discounts.f2109f97.js";import{g as we}from"./Memberships.dc44ed64.js";import{g as Me,r as Pe}from"./Recurrences.8ee78482.js";import{h as Se}from"./Staffs.45a055e5.js";import{a as $e}from"./Diciplines.afc8a6a4.js";import{e as De}from"./config.c7a8b6da.js";import{b as Ie,d as Ee}from"./Companies.41d94d6d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.711f7bfa.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.090ffe3f.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.1c8c767a.js";import"./V-Dropdown.2a04da02.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ef96ea8c.js";import"./useDropdown.054755a3.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.34a7238e.js";import"./activePanelState.3c211562.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.249b183c.js";import"./V-Message.vue_vue&type=script&setup=true&lang.0f275a15.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.28efd80f.js";import"./navbarLayoutState.ebe4daef.js";import"./video.11ba5555.js";import"./darkModeState.f6b1b75a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f027517e.js";import"./AnimatedLogo.d0948e72.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.660f76f8.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.aed52bf0.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.1340fdda.js";const Ye={class:"d-flex justify-content-center align-items-center flex-column mb-4"},Fe={class:"mt-5 text-center"},Ae={class:"title is-5 is-narrow"},Ve={class:"w-100 mt-5"},Ne=Z("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var Te=L({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:n}){const i=e,r=K();O((()=>r.hash),(e=>{d.value=u.findIndex((e=>e.component==r.hash.slice(1)))})),B((()=>{""!=r.hash&&(d.value=u.findIndex((e=>e.component==r.hash.slice(1))))}));const u=[{name:"Personal Information",component:"personalInformation"},{name:"Membership/Contract",component:"memberMembership"},{name:"Family Members",component:"memberFamily"},{name:"Emergency",component:"memberEmergency"},{name:"Check-ins",component:"memberCheckins"},{name:"Purchases",component:"memberPurchases"}],o=[{name:"Personal Information",component:"personalInformation"},{name:"Waiver",component:"memberWaiver"}],c=H((()=>["Adult","Minor"].includes(i.category)?u:o)),d=R(0),m=R(null),p=H((()=>null!=c.value[d.value]?c.value[d.value].component:m.value));return(e,i)=>{const r=t,u=a;return U(l)?(G(),J(u,{key:0,color:U(s)?void 0:"danger"},{default:X((()=>[Z("div",Ye,[Z(r,{picture:`${U($)}storage/${U(l).photo}`,size:"xl"},null,8,["picture"]),Z("div",Fe,[Z("h2",Ae,ee(U(l).name)+" "+ee(U(l).second_name)+" "+ee(U(l).last_name),1)])]),Z("div",Ve,[Z("ul",null,[(G(!0),J(te,null,ae(U(c),((e,t)=>(G(),J("li",{key:`item-${t}`},[Z(u,{class:["\n              mb-3\n              item_menu\n              d-flex\n              justify-content-between\n              align-items-center\n            ",d.value==t?"active":""],color:d.value==t?"warning":void 0,elevated:d.value==t,onClick:e=>(e=>{d.value=e,n("changeMenu",p)})(t)},{default:X((()=>[Z("p",null,ee(e.name),1),Ne])),_:2},1032,["class","color","elevated","onClick"])])))),128))])])])),_:1},8,["color"])):Q("",!0)}}});const qe=Z("div",{id:"payment-element"},null,-1),ze=ie(" Pay now "),We=Z("div",{id:"payment-message",class:"hidden"},null,-1);var Le=L({expose:[],props:{amount:{type:Number,required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0}},setup(t){const l=t,s=Stripe(D.value);O((()=>l.id),(e=>{console.log("cambio"),n.value=!0,d()}));const n=R(!0);R({id:l.id,amount:l.amount});const i=R(),r=H((()=>"stripe"!=l.url?{payment_type_id:3,amount:l.amount}:{id:l.id,member_mermship_id:l.member_membership,amount:l.amount,payment_type_id:1})),u=R(null),o=R(null),c=R(!1),d=async()=>{let e=await I.post(l.url,r.value).then((e=>{u.value=e.data.clientSecret,i.value=s.elements({clientSecret:u.value}),o.value=i.value.create("payment"),o.value.mount("#payment-element")})).catch((e=>{}));return n.value=!1,e},m=async e=>{e.preventDefault(),c.value=!0,await s.confirmPayment({elements:i.value,confirmParams:{return_url:`${E.value}members/process?payment_type=3&id=`+l.id+`&membership=${l.member_membership}`}}),c.value=!1};return B((()=>{d()})),(t,l)=>{const s=e,i=de,r=me,u=a;return G(),J(te,null,[n.value?(G(),J(s,{key:0,height:"500px"})):Q("",!0),le(Z(u,{class:"mt-6"},{default:X((()=>[Z("form",{onSubmit:ne(m,["prevent"]),id:"payment-form"},[qe,Z(r,{size:"small",active:c.value},{default:X((()=>[Z(i,{id:"submit",class:"mt-4",color:"success"},{default:X((()=>[ze])),_:1})])),_:1},8,["active"]),We],40,["onSubmit"])])),_:1},512),[[se,!n.value]])],64)}}});const Oe={class:"table is-hoverable is-striped is-fullwidth"},Be=Z("th",{scope:"col"},"Members",-1),He=Z("th",{scope:"col"},"Membership Name",-1),Re=Z("th",{scope:"col"},"Recurrence",-1),Ue=Z("th",{scope:"col"},"Prorated",-1),Ge=Z("th",{scope:"col"},"Membership Cost",-1),Je=Z("th",{scope:"col"},"Initiation Fee",-1),Qe=Z("th",{scope:"col"},"Discount",-1),Ke=Z("th",{scope:"col"},"Taxes",-1),Xe={key:0,scope:"col"},Ze=Z("th",{scope:"col"},"Sub Total",-1),et={key:0},tt={key:0},at={key:1},lt={key:2},st={key:0},nt=Z("br",null,null,-1),it={key:1},rt={key:0},ut={key:1},ot={key:0},ct={key:0},dt={key:1},mt={key:1},pt={key:3},vt={class:"is-end"},ht={class:"d-flex justify-content-between"},ft=ie(" Card Payment "),_t=ie(" Cash Payment "),bt={class:"d-flex mb-4 justify-content-between"},yt={class:"title is-5"},gt=ie(" Total: "),xt={class:"title is-5"},kt=ie(" Cash Total: "),jt={class:"\n            d-flex\n            justify-content-center\n            align-items-center\n            flex-column\n            mb-4\n          "},Ct=Z("p",{class:"title is-5 mb-4"},"Change Back:",-1),wt={class:"title is-3 mb-0"},Mt={class:"d-flex justify-content-center flex-wrap mb-4"},Pt=Z("div",{class:"w-100"},null,-1),St={class:"d-flex justify-content-center"},$t=ie("Reset"),Dt=ie("Confirm");var It=L({expose:[],setup(e){R(!1);const t=R(!1);B((()=>{console.log("se monto el payment")}));const s=H((()=>{let e=Y(i.value,"memberships_id");return null!=e?e:[]})),u=H((()=>{let e=Y(i.value,"recurrences_id");return null!=e?e:[]})),o=H((()=>{let e=F(i.value,"initiation_fee");return null!=e?e:[]})),c=H((()=>{let e=A(i.value,"discount");return null!=e?e:[]})),d=H((()=>{let e=parseFloat(re().format("DD")),t=0,a=0;return u.value.days>=30&&(a=e-u.value.payday,t=u.value.amount/u.value.days*a),{days:a,amount:Math.abs(Math.round(t))}})),m=H((()=>(e=>{if(""!=F(i.value,"memberships_id"))return"percentaje"==(e=e.value?e.value:e).tax.type?{text:`${e.tax.value}%`,value:e.tax.value,type:"procentaje"}:{text:V(e.tax.value),value:e.tax.value}})(s))),p=R(null),v=H((()=>{let e=0;return e+=u.value.amount,F(i.value,"is_initiation_fee").length||(e+=o.value),e-=d.value.amount,c.value.data&&("dolar"==c.value.data.type?e-=c.value.data.value:"percentaje"==c.value.data.type&&(e-=e/100*c.value.data.value)),e+=e/100*m.value.value,l.value.penalty&&(p.value=s.value.penalty,e+=p.value),l.value.leo_vet_fr&&(e-=e/100*s.value.descuento_vet),e})),h=H((()=>{let e=0;return e+=v.value,e})),f=R(!1),_=R(0),b=H((()=>{const e=parseFloat(_.value)-parseFloat(h.value);return e>0?e:0}));R(1);const y=async()=>{await r(n.value.id,{total:h.value,payment_type_id:1,cash:_.value,cash_back:b.value}).then((e=>{N.success("Payment Success"),window.location.reload()})).catch((e=>{}))};return(e,r)=>{const g=de,x=a,k=Le,j=pe,C=ve,w=he;return G(),J("div",null,[Z(x,{class:""},{default:X((()=>{return[Z("table",Oe,[Z("thead",null,[Z("tr",null,[Be,He,Re,Ue,Ge,Je,Qe,Ke,p.value?(G(),J("th",Xe,"Penalty")):Q("",!0),Ze])]),0!=U(s).length?(G(),J("tbody",et,[Z("tr",null,[Z("td",null,[Z("p",null,[Z("b",null,ee(U(l).name)+" "+ee(U(l).second_name)+" "+ee(U(l).last_name),1)])]),0!=U(s).legnth?(G(),J("td",tt,ee(U(s).name),1)):Q("",!0),0!=U(u).length?(G(),J("td",at,ee(U(u).descriptions),1)):Q("",!0),0!=U(u).length?(G(),J("td",lt,[U(u).days>=30?(G(),J("span",st,[ie(ee(U(d).days)+" days : ",1),nt,ie(" - "+ee(U(V)(U(d).amount)),1)])):(G(),J("span",it,"-"))])):Q("",!0),Z("td",null,ee(U(V)((e=U(u),e.amount))),1),Z("td",null,[U(F)(U(i),"is_initiation_fee").length?(G(),J("span",ut,ee(U(V)(0)),1)):(G(),J("span",rt,ee(U(V)(U(o))),1))]),Z("td",null,[null!=U(c).data?(G(),J("span",ot,["dolar"==U(c).data.type?(G(),J("span",ct," - "+ee(U(V)(U(c).data.value)),1)):Q("",!0),"percentaje"==U(c).data.type?(G(),J("span",dt,ee(U(c).data.value)+"%",1)):Q("",!0)])):(G(),J("span",mt,"-"))]),Z("td",null,ee(U(m).text),1),p.value?(G(),J("td",pt,ee(U(V)(p.value)),1)):Q("",!0),Z("td",null,ee(U(V)(U(v))),1)]),Z("tr",null,[Z("td",{style:{"text-align":"right"},colspan:p.value?"9":"8"}," Total ",8,["colspan"]),Z("td",vt,ee(U(V)(U(h))),1)])])):Q("",!0)]),Z("div",ht,[Z(g,{color:"success",disabled:0==U(s).length||isNaN(U(h)),onClick:r[1]||(r[1]=e=>t.value=!0)},{default:X((()=>[ft])),_:1},8,["disabled"]),Z(g,{disabled:0==U(s).length||isNaN(U(h)),color:"warning",onClick:r[2]||(r[2]=e=>f.value=!0)},{default:X((()=>[_t])),_:1},8,["disabled"])])];var e})),_:1}),t.value?(G(),J(k,{key:0,class:"",url:`new_payment/${U(n).id}`,amount:U(h),id:U(l).id,member_membership:U(n).id},null,8,["url","amount","id","member_membership"])):Q("",!0),Z(w,{open:f.value,actions:"center",onClose:r[6]||(r[6]=e=>f.value=!1)},{content:X((()=>[Z("div",bt,[Z("p",yt,[gt,Z("b",null,ee(U(V)(U(h))),1)]),Z("p",xt,[kt,Z("b",null,ee(U(V)(_.value)),1)])]),Z("div",jt,[Ct,Z("p",wt,[Z("b",null,ee(U(V)(U(b))),1)])]),Z("div",Mt,[Z(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:r[3]||(r[3]=e=>_.value=U(h))},{default:X((()=>[ie(" Full Payment "+ee(U(V)(U(h))),1)])),_:1}),Pt,(G(),J(te,null,ae([5,10,20,50,100],((e,t)=>Z(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>_.value+=e},{default:X((()=>[ie(" $"+ee(e),1)])),_:2},1032,["onClick"]))),64))]),Z("div",St,[Z(C,null,{default:X((()=>[Z(j,null,{default:X((()=>[le(Z("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>_.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[ue,_.value]])])),_:1})])),_:1})])])),action:X((()=>[Z(g,{onClick:r[5]||(r[5]=e=>_.value=0),class:"d-flex justify-content-center",raised:""},{default:X((()=>[$t])),_:1}),Z(g,{color:"success",onClick:y,disabled:U(h)>_.value,class:"d-flex justify-content-center",raised:""},{default:X((()=>[Dt])),_:1},8,["disabled"])])),_:1},8,["open"])])}}});const Et=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Personal Information"),Z("p",null,"Edit member's personal information")],-1),Yt=ie(" Save Changes "),Ft=ie(" Convert to Members ");var At=L({expose:[],props:{category:{type:String,default:"Adult"}},setup(e){const t=e;H((()=>"Prospect"==t.category));const a=()=>{let e=T(u.value),t=new FormData;for(var a in e)"id_leo_vet_fr"==a?null==e[a]&&t.append(a,0):t.append(a,e[a]);o(t).then((e=>{N.success("Edit Success")}))};return(e,l)=>{const s=de,n=fe,i=_e;return G(),J(i,null,{"header-left":X((()=>[Et])),"header-right":X((()=>[Z(s,{onClick:a,color:"primary"},{default:X((()=>[Yt])),_:1}),"Prospect"==t.category?(G(),J(s,{key:0,color:"info",class:"ml-3"},{default:X((()=>[Ft])),_:1})):Q("",!0)])),content:X((()=>[Z(n,{"inputs-step":U(u)},null,8,["inputs-step"])])),_:1})}}});const Vt={class:"columns is-multiline"},Nt={class:"d-flex align-items-start"},Tt=Z("p",{class:"title is-1 mb-0"},[Z("i",{class:"fas fa-credit-card","aria-hidden":"true"})],-1),qt={class:"ml-4"},zt=Z("p",{class:"title is-6 mb-2"},"Select Payment Method",-1),Wt={class:"title is-6 mb-2"},Lt={key:0,class:"title is-6"},Ot={key:0,class:"column is-12"},Bt=Z("div",{class:"d-flex align-items-center"},[Z("p",{class:"title is-1 mb-0"},[Z("i",{class:"fas fa-plus-circle","aria-hidden":"true"})]),Z("div",{class:"ml-4"},[Z("p",{class:"title is-4 mb-2"},"Add new card")])],-1);var Ht=L({expose:[],props:{method_default:{type:String,default:""},showNewCard:{type:Boolean,default:!0}},emits:["onMethodPayment","onNewCard"],setup(e,{emit:t}){K();const s=R([]),n=R(!0),i=R(null);B((()=>{l.value.id?(n.value=!0,c(l.value.id).then((e=>{n.value=!1,s.value=e.data})).catch((e=>{}))):console.error("Member Not Found")}));return(l,r)=>{const u=a,o=me;return G(),J(o,{size:"large",active:n.value},{default:X((()=>[Z("div",Vt,[(G(!0),J(te,null,ae(s.value,((a,l)=>(G(),J("div",{key:`card-${l}`,class:"column is-6"},[Z(u,{onClick:e=>{return l=a.id,i.value=l,void t("onMethodPayment",l);var l},color:i.value==a.id?"success":void 0,class:"btn-card"},{default:X((()=>[Z("div",Nt,[Tt,Z("div",qt,[zt,Z("p",Wt,ee(a.card.brand)+" **** "+ee(a.card.last4),1),e.method_default==a.card.last4?(G(),J("p",Lt," Payment Default ")):Q("",!0)])])])),_:2},1032,["onClick","color"])])))),128)),e.showNewCard?(G(),J("div",Ot,[Z(u,{onClick:r[1]||(r[1]=e=>l.$emit("onNewCard")),color:"success",class:"btn-card"},{default:X((()=>[Bt])),_:1})])):Q("",!0)])])),_:1},8,["active"])}}});const Rt={class:"w-100 d-flex justify-content-end"},Ut=ie("Back"),Gt=Z("div",{id:"payment-element"},null,-1),Jt=ie("Pay now "),Qt=Z("div",{id:"payment-message",class:"hidden"},null,-1);var Kt=L({expose:[],props:{clientSecret:{type:String,required:!0},membership_member_id:{type:Number,required:!0},pm_last_four:{type:String,required:""}},emits:["PaymentAction"],setup(t,{emit:l}){const s=t,n=Stripe(D.value);O((()=>s.clientSecret),(e=>{m()}));const i=R(),r=R(null),u=R(!1),o=R(null),c=R(!1),d=R(!0),m=async()=>(u.value=!0,i.value=await n.elements({clientSecret:s.clientSecret,appearance:{theme:"night",labels:"floating"}}),o.value=i.value.create("card",{classes:{base:"base_card"}}),o.value.mount("#payment-element"),i.value),p=async e=>{const{data:t}=await I.post("paymentStripe",{payment_method:e,membership_member_id:s.membership_member_id}).catch((e=>{c.value=!1}));return t},v=async e=>{e.preventDefault(),c.value=!0;const{setupIntent:t,error:a}=await n.confirmCardSetup(s.clientSecret,{payment_method:{card:o.value,billing_details:{name:r.value}}});if(a)c.value=!1,N.error(a.message);else{const{payment_method:e}=t,a=p(e);a&&(l("PaymentAction",a),N.success("Success Payment"))}c.value=!1};B((()=>{c.value=!1,d.value=!1}));const h=e=>{console.log("hhegu"),p(e)};return(l,s)=>{const n=e,i=de,o=me,p=Ht,f=a;return G(),J(te,null,[d.value?(G(),J(n,{key:0,height:"500px"})):Q("",!0),le(Z(f,{class:"mt-6"},{default:X((()=>[u.value?(G(),J("form",{key:0,onSubmit:ne(v,["prevent"]),id:"payment-form"},[Z("div",Rt,[Z(i,{onClick:s[1]||(s[1]=e=>u.value=!1),class:"mb-4"},{default:X((()=>[Ut])),_:1})]),le(Z("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":s[2]||(s[2]=e=>r.value=e),placeholder:"Name",type:"text"},null,512),[[ue,r.value]]),Gt,Z(o,{size:"small",active:c.value},{default:X((()=>[Z(i,{id:"submit",class:"mt-4",color:"info"},{default:X((()=>[Jt])),_:1})])),_:1},8,["active"]),Qt],40,["onSubmit"])):(G(),J(p,{key:1,onOnMethodPayment:h,onOnNewCard:s[3]||(s[3]=e=>m()),method_default:t.pm_last_four},null,8,["method_default"]))])),_:1},512),[[se,!d.value]])],64)}}});const Xt={class:"table is-hoverable is-striped is-fullwidth"},Zt=Z("thead",null,[Z("tr",null,[Z("th",{scope:"col"},"Membership Name"),Z("th",{scope:"col"},"Plan"),Z("th",{scope:"col"},"Cost"),Z("th",{scope:"col"},"Import")])],-1),ea={style:{"text-align":"right"}},ta={key:0},aa=Z("td",null,"Initiation Fee",-1),la={style:{"text-align":"right"}},sa={style:{"text-align":"right"}},na=Z("td",{colspan:"3",style:{"text-align":"right"}},[Z("b",null,"Subtotal")],-1),ia={style:{"text-align":"right"}},ra={colspan:"3",style:{"text-align":"right"}},ua={style:{"text-align":"right"}},oa=Z("td",{colspan:"3",style:{"text-align":"right"}},[Z("b",null,"Total")],-1),ca={style:{"text-align":"right"}},da=Z("td",{colspan:"3",style:{"text-align":"right"}},"Total recurrente",-1);var ma=L({expose:[],props:{presupuesto:{type:Object,required:!0}},setup:e=>(t,l)=>{const s=a;return e.presupuesto?(G(),J(s,{key:0,class:"mb-4"},{default:X((()=>[Z("table",Xt,[Zt,Z("tbody",null,[Z("tr",null,[Z("td",null,ee(e.presupuesto.name),1),Z("td",null,ee(e.presupuesto.interval),1),Z("td",null,ee(U(q)(10*e.presupuesto.membership.amount_subtotal)),1),Z("td",ea,ee(U(q)(10*e.presupuesto.membership.amount_subtotal)),1)]),e.presupuesto.is_initiation_fee?(G(),J("tr",ta,[Z("td",null,ee(e.presupuesto.name),1),aa,Z("td",null,ee(U(q)(e.presupuesto.initiation_fee)),1),Z("td",la,ee(U(q)(e.presupuesto.initiation_fee)),1)])):Q("",!0),Z("tr",sa,[na,Z("td",null,ee(U(q)(10*e.presupuesto.amount_subtotal)),1)]),Z("tr",ia,[Z("td",ra," Tax "+ee(e.presupuesto.percentage)+"% ",1),Z("td",null,ee(U(q)(10*e.presupuesto.amount_tax)),1)]),Z("tr",ua,[oa,Z("td",null,ee(U(q)(10*e.presupuesto.amount_total)),1)]),Z("tr",ca,[da,Z("td",null,ee(U(q)(10*e.presupuesto.membership.amount_total)),1)])])]),oe(t.$slots,"k")])),_:3})):Q("",!0)}});const pa=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Membership / Contract"),Z("p",null,"Edit member's membership and contract information")],-1),va=ie(" HOLD Membership "),ha={key:0},fa=ie(" Cancel Membership "),_a=ie(" New Membership "),ba=Z("h1",{class:"title is-6"},null,-1),ya={class:"table is-hoverable is-striped is-fullwidth"},ga=Z("thead",null,[Z("tr",null,[Z("th",{scope:"col"},"Membership Name"),Z("th",{scope:"col"},"Plan"),Z("th",{scope:"col"},"Cost"),Z("th",{scope:"col"},"Import")])],-1),xa={style:{"text-align":"right"}},ka={key:0},ja=Z("td",null,"Initiation Fee",-1),Ca={style:{"text-align":"right"}},wa={style:{"text-align":"right"}},Ma={colspan:"3",style:{"text-align":"right"}},Pa={style:{"text-align":"right"}},Sa=Z("td",{colspan:"3",style:{"text-align":"right"}},[Z("b",null,"Subtotal")],-1),$a={style:{"text-align":"right"}},Da=Z("td",{colspan:"3",style:{"text-align":"right"}},[Z("b",null,"Total")],-1),Ia={style:{"text-align":"right"}},Ea=Z("td",{colspan:"3",style:{"text-align":"right"}},"Total recurrente",-1),Ya=ie(" Payment Card "),Fa=Z("h1",{class:"title is-6"},"Active Contract Information",-1),Aa={class:"columns is-multiline"},Va={class:"column is-12"},Na={key:0,class:"columns is-multiline column mt-4 is-12"},Ta=Z("b",null,"Contract Date:",-1),qa={class:"column is-12"},za=Z("h1",{class:"title is-6"},"Active Waiver Information",-1),Wa={class:"text-center"},La=Z("img",{src:ye,width:"40",alt:""},null,-1),Oa=ie(" View PDF ");var Ba=L({expose:[],props:{},setup(e){B((()=>{d(i.value),g()}));const t=R(null),s=R(null),r=R(null),u=R(null),o=()=>{m().then((e=>{N.success("Memberships Cancel"),window.location.reload()}))},c=R(null),_=()=>{const e=T(i.value);console.log(e);let t={memberships_id:e.memberships_id,recurrences_id:e.recurrences_id,is_initiation_fee:0==e.is_initiation_fee.length,member_id:l.value.id};p(t).then((e=>{c.value={name:e.data.membership.name,interval:e.data.quote.computed.recurring.interval,membership:{amount_subtotal:e.data.quote.computed.recurring.amount_subtotal,amount_total:e.data.quote.computed.recurring.amount_total},initiation_fee:e.data.membership.initiation_fee,percentage:e.data.tax.percentage,amount_tax:e.data.quote.total_details.amount_tax,amount_subtotal:e.data.quote.amount_subtotal,amount_total:e.data.quote.amount_total,is_initiation_fee:t.is_initiation_fee}})).catch((e=>{for(var t in e.response.data)e.response.data[t].forEach((e=>{N.error(`${t}  ${e}`)}))}))},b=R(null),y=()=>{const e=T(i.value);e.members_id=l.value.id,v(e).then((e=>{console.log(e.data),b.value=e.data.membership_member.id,u.value=e.data.clientSecret})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{N.error(`${t}: ${e}`)}))}))},g=()=>{n.value&&(A(i.value,"is_initiation_fee").disabled=!0,A(i.value,"recurrences_id").disabled=!0,A(i.value,"amount").disabled=!0,A(i.value,"memberships_id").disabled=!0)},x=e=>{h(e,n.value.id).then((e=>{if(e.data.status)N.success("Sign Success");else for(var t in N.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{N.error(`${t} : ${e}`)}))})).catch((e=>{}))},k=e=>{console.log(e),window.location.reload()},j=()=>{f(n.value.id).then((e=>{N.success("Success Pause"),window.location.reload()}))};return(e,d)=>{const m=de,p=Kt,v=a,h=de,f=ma,g=fe,C=be,w=_e;return G(),J("div",null,[Z(w,null,{"header-left":X((()=>[pa])),"header-right":X((()=>[U(n)?(G(),J(m,{key:0,color:"info",outlined:null==U(l).subscription.pause_collection,onClick:j,class:"mr-4"},{default:X((()=>[va,null!=U(l).subscription.pause_collection?(G(),J("span",ha,"Active until: "+ee(U(l).subscription.pause_collection.resumes_at),1)):Q("",!0)])),_:1},8,["outlined"])):Q("",!0),U(n)?(G(),J(m,{key:1,color:"warning",outlined:"",onClick:o,class:"mr-4"},{default:X((()=>[fa])),_:1})):Q("",!0),U(n)?Q("",!0):(G(),J(m,{key:2,onClick:_,color:"primary"},{default:X((()=>[_a])),_:1}))])),content:X((()=>[t.value?(G(),J(v,{key:0,class:"mb-4"},{default:X((()=>[ba,Z("table",ya,[ga,Z("tbody",null,[Z("tr",null,[Z("td",null,ee(s.value.membership.name),1),Z("td",null,ee(t.value.computed.recurring.interval),1),Z("td",null,ee(U(q)(10*t.value.computed.recurring.amount_subtotal)),1),Z("td",xa,ee(U(q)(10*t.value.computed.recurring.amount_subtotal)),1)]),1==s.value.is_initiation_fee?(G(),J("tr",ka,[Z("td",null,ee(s.value.membership.name),1),ja,Z("td",null,ee(U(q)(s.value.initiation_fee)),1),Z("td",Ca,ee(s.value.initiation_fee),1)])):Q("",!0),Z("tr",wa,[Z("td",Ma," Tax "+ee(r.value.percentage)+"% ",1),Z("td",null,ee(t.value.total_details.amount_tax),1)]),Z("tr",Pa,[Sa,Z("td",null,ee(U(q)(10*t.value.amount_subtotal)),1)]),Z("tr",$a,[Da,Z("td",null,ee(U(q)(10*t.value.amount_total)),1)]),Z("tr",Ia,[Ea,Z("td",null,ee(U(q)(10*t.value.computed.recurring.amount_total)),1)])])]),Z(p,{"client-secret":u.value,membership_member_id:s.value.id,onPaymentAction:k},null,8,["client-secret","membership_member_id"])])),_:1})):Q("",!0),c.value?(G(),J(f,{key:1,presupuesto:c.value},{k:X((()=>[Z(h,{color:"info",onClick:y,class:"mt-4 py-1"},{default:X((()=>[Ya])),_:1}),u.value?(G(),J(p,{key:0,"client-secret":u.value,membership_member_id:b.value,pm_last_four:U(l).user.pm_last_four,onPaymentAction:k},null,8,["client-secret","membership_member_id","pm_last_four"])):Q("",!0)])),_:1},8,["presupuesto"])):Q("",!0),Z(v,{class:"mb-4"},{default:X((()=>[Fa,Z("div",Aa,[Z("div",Va,[Z(g,{"inputs-step":U(i)},null,8,["inputs-step"])]),U(l)&&U(n)?(G(),J("div",Na,[Z("div",null,[Z("p",null,[Ta,ie(" "+ee(U(re)(U(l).membership_members.created_at).format("ddd - DD MMM yyyy")),1)])]),Z("div",qa,[Z(C,{onOnSign:x,"is-sign":!U(n).sign,contract:`contract_${U(l).id}_${U(l).membership_members.id}_${U(l).personal_identifications}.pdf`,"url-contract":`generateContract/${U(l).id}`},null,8,["is-sign","contract","url-contract"])])])):Q("",!0)])])),_:1}),Q("",!0),U(l)&&U(n)?(G(),J(v,{key:3,class:"mb-4"},{default:X((()=>[za,Z("div",Wa,[Z("a",{target:"_blank",href:`${U($)}generateWeiver/${U(l).id}`},[La,Z("p",null," weiver_"+ee(U(l).id)+"_"+ee(U(l).membership_members.id)+"_"+ee(U(l).personal_identifications)+".pdf ",1),Z(h,{color:"success",outlined:"",class:"mt-4 py-1"},{default:X((()=>[Oa])),_:1})],8,["href"])])])),_:1})):Q("",!0)])),_:1})])}}});const Ha=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Family Members"),Z("p",null,"Edit member's family members")],-1),Ra={class:"columns is-multiline"},Ua={key:0,class:"column is-4 mb-4"},Ga=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Parent"),Z("p",null,"Edit parent contact")],-1),Ja=ie(" Save Changes "),Qa={class:""},Ka=Z("h1",{class:"title is-5"},"Parent Contact Information",-1),Xa={class:"d-flex justify-content-end mr-6"};var Za=L({expose:[],setup(e){R([{id:1,name:"Wonder Woman",subtitle:"Mother/Adult",img:"https://picsum.photos/150/150"},{id:2,name:"Lionel Messi",subtitle:"Father/Minor",img:"https://picsum.photos/150/151"}]);const a=()=>{const e=perpareDataInputs(y.value);g(e).then((e=>{N.success("Success")}))};return(e,s)=>{const n=t,i=ge,r=xe,u=_e,o=de,c=fe;return G(),J("div",null,[U(l)&&"Adult"==U(l).category?(G(),J(u,{key:0},{"header-left":X((()=>[Ha])),"header-right":X((()=>[])),content:X((()=>[Z("div",Ra,[U(_)?(G(),J("div",Ua,[Z(r,{title:`${U(_).name} ${U(_).second_name} ${U(_).last_name}`,class:"border-1 p-4 radius-small"},{icon:X((()=>[Z(n,{size:"medium",picture:`${U($)}storage/${U(_).photo}`,subtitle:"Principal Family"},null,8,["picture"])])),action:X((()=>[Z(i,{"id-member":U(_).id},null,8,["id-member"])])),_:1},8,["title"])])):Q("",!0),(G(!0),J(te,null,ae(U(b),((e,t)=>(G(),J("div",{class:"column is-4 mb-4",key:`family-${t}`},[Z(r,{title:`${e.member.name} ${e.member.second_name} ${U(l).last_name}`,subtitle:e.member.relationships,class:"border-1 p-4 radius-small"},{icon:X((()=>[Z(n,{size:"medium",picture:`${U($)}storage/${e.member.photo}`},null,8,["picture"])])),action:X((()=>[Z(i,{"id-member":e.members_id},null,8,["id-member"])])),_:2},1032,["title","subtitle"])])))),128))])])),_:1})):Q("",!0),U(l)&&"Minor"==U(l).category?(G(),J(u,{key:1},{"header-left":X((()=>[Ga])),"header-right":X((()=>[Z(o,{onClick:a,color:"primary"},{default:X((()=>[Ja])),_:1})])),content:X((()=>[Z("div",Qa,[Ka,Z("div",Xa,[Z(n,{picture:`${U($)}storage/${U(F)(U(y),"parent_photo")}`,size:"large"},null,8,["picture"])]),Z(c,{"inputs-step":U(y)},null,8,["inputs-step"])])])),_:1})):Q("",!0)])}}});const el=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Emergency Contact"),Z("p",null,"Edit member's emergency contact")],-1),tl=ie(" Save Changes "),al={class:""},ll=Z("h1",{class:"title is-5"},"Emergency Contact Information",-1);var sl=L({expose:[],setup(e){const t=()=>{const e=T(x.value);console.log(e),k(e).then((e=>{N.success("Success")}))};return(e,a)=>{const l=de,s=fe,n=_e;return G(),J(n,null,{"header-left":X((()=>[el])),"header-right":X((()=>[Z(l,{onClick:t,color:"primary"},{default:X((()=>[tl])),_:1})])),content:X((()=>[Z("div",al,[ll,Z(s,{"inputs-step":U(x)},null,8,["inputs-step"])])])),_:1})}}});const nl=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Check-ins History"),Z("p",null,"Edit member's check-ins history")],-1),il={class:"p-6"},rl={class:"d-flex"},ul=Z("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),ol=Z("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),cl=ie(" Export "),dl={class:"mt-4"},ml={class:"table is-hoverable is-fullwidth"},pl=Z("thead",null,[Z("tr",null,[Z("th",{scope:"col"},"DATE"),Z("th",{scope:"col"},"TIME"),Z("th",{scope:"col"},"STAFF")])],-1);var vl=L({expose:[],setup:e=>(e,t)=>{const a=pe,s=ve,n=de,i=_e;return U(l)?(G(),J(i,{key:0},{"header-left":X((()=>[nl])),"header-right":X((()=>[])),content:X((()=>[Z("div",il,[Z("div",rl,[Z(s,{class:"field mr-3"},{default:X((()=>[Z(a,null,{default:X((()=>[ul])),_:1})])),_:1}),Z(s,{class:"field mr-3"},{default:X((()=>[Z(a,null,{default:X((()=>[ol])),_:1})])),_:1}),Z(n,{color:"primary"},{default:X((()=>[cl])),_:1})]),Z("div",dl,[Z("table",ml,[pl,Z("tbody",null,[(G(!0),J(te,null,ae(U(j),((e,t)=>(G(),J("tr",{key:`access-${t}`},[Z("td",null,ee(U(re)(e.created_at).format("DD/MM/YYYY")),1),Z("td",null,ee(U(re)(e.created_at).format("HH:mm:ss")),1),Z("td",null,ee(e.user.name),1)])))),128))])])])])])),_:1})):Q("",!0)}});const hl=Z("div",null,[Z("h1",{class:"title is-4 mb-0"},"Purchases History"),Z("p",null,"Edit member's purchases history")],-1),fl=Z("p",{class:"title is-5"},"Card List",-1),_l={class:"mt-4"},bl={class:"table is-hoverable is-fullwidth"},yl=Z("thead",null,[Z("tr",null,[Z("th",{scope:"col"},"Description"),Z("th",{scope:"col"},"Created"),Z("th",{scope:"col"},"Start Period"),Z("th",{scope:"col"},"End Period"),Z("th",{scope:"col"},"Mount"),Z("th",{scope:"col"},"Download"),Z("th",{scope:"col"},"Status")])],-1),gl={key:0},xl=Z("i",{class:"fas fa-download","aria-hidden":"true"},null,-1);var kl=L({expose:[],setup(e){H((()=>n.value.payments)),H((()=>{let e=[];return w.value.forEach((t=>{e.push({membership:t.membership.name,payments:t.payments})})),e})),B((async()=>{await C(l.value.id)}));const t=e=>{};return(e,s)=>{const i=Ht,r=a,u=de,o=_e;return U(l)?(G(),J(o,{key:0},{"header-left":X((()=>[hl])),"header-right":X((()=>[])),content:X((()=>[Z(r,{class:"mb-4"},{default:X((()=>[fl,Z(i,{onOnMethodPayment:t,method_default:U(l).user.pm_last_four,"show-new-card":!1},null,8,["method_default"])])),_:1}),Z(r,{class:"p-"},{default:X((()=>[Z("div",_l,[Z("table",bl,[yl,U(n)?(G(),J("tbody",gl,[(G(!0),J(te,null,ae(U(l).invoices,((e,t)=>{var a;return G(),J("tr",{key:`invoice-${t}`},[Z("td",null,ee(null!=(a=e.subscription)?a:"Others"),1),Z("td",null,ee(U(re)(e.created).format("MM/DD/YYYY")),1),Z("td",null,ee(U(re)(e.period_start).format("MM/DD/YYYY")),1),Z("td",null,ee(U(re)(e.period_end).format("MM/DD/YYYY")),1),Z("td",null,ee(U(V)(e.total/100)),1),Z("td",null,[Z("a",{href:e.invoice_pdf,download:""},[Z(u,null,{default:X((()=>[xl])),_:1})],8,["href"])]),Z("td",null,ee("paid"==e.status?"Paid":"error"),1)])})),128))])):Q("",!0)])])])),_:1})])),_:1})):Q("",!0)}}});const jl=Z("div",null,[Z("h1",{class:"title is-4 mb-0"}," Waiver "),Z("p",null,"Edit member's waiver information")],-1),Cl=ie(" Convert to Members "),wl={class:"columns is-multiline"},Ml={class:"border-1 document_box p-4 d-flex justify-content-center radius-small"},Pl={href:"234",class:"text-center"},Sl=Z("img",{style:{width:"70px"},src:ye,alt:""},null,-1);var $l=L({expose:[],setup(e){const t=R([{name:"Waiver_010221.pdf",url:""},{name:"Waiver_010221.pdf",url:""}]);return(e,a)=>{const l=de,s=_e;return G(),J(s,null,{"header-left":X((()=>[jl])),"header-right":X((()=>[Z(l,{color:"info"},{default:X((()=>[Cl])),_:1})])),content:X((()=>[Z("div",wl,[(G(!0),J(te,null,ae(t.value,((e,t)=>(G(),J("div",{class:"column is-2 mb-4",key:`family-${t}`},[Z("div",Ml,[Z("a",Pl,[Sl,Z("p",null,ee(e.name),1)])])])))),128))])])),_:1})}}});const Dl={key:1,class:"columns is-multiline"},Il={class:"column is-3"},El={class:"column is-9"},Yl={class:"title is-5 mb-0"},Fl=ie(" Process Payment "),Al=Z("b",null,"Member since.",-1),Vl=Z("b",null,"Membership Active:",-1),Nl=Z("b",null,"Due Date: ",-1);var Tl=L({expose:[],setup(t){const r=K();je.value="Member Profile",ce({title:"Members"});const o=R(!1),c=R("personalInformation"),d=e=>{c.value=e.value};O((()=>r.query),((e,t)=>{Object.keys(e).length>0&&(f(),h())}));const m=R("Filed Payment"),p=R("");O((()=>r.hash),(e=>{c.value=r.hash.slice(1)})),O((()=>r.query.id),(e=>{c.value="personalInformation"}));const v=R(!0),h=()=>{v.value=!0,setTimeout((()=>{v.value=!1}),500)};B((()=>{""!=r.hash&&(c.value=r.hash.slice(1)),Ie().then((e=>{z(i,"locations_id",Ee.value)})),De().then((e=>{z(u,"country_id",e.contries),z(u,"city_id",e.cities),z(u,"state_id",e.states),z(M,"city_id",e.cities),z(M,"state_id",e.states),z(M,"country_id",e.contries)})),we().then((e=>{z(i,"memberships_id",e.data.memberships)})),Ce().then((e=>{z(i,"discount",e.data.discounts)})),Me().then((e=>{z(i,"recurrences_id",e.data)})),Se().then((e=>{z(i,"staff_id",e.data)})),f()}));const f=async()=>{await P(r.query.id).then((e=>{for(var t in e.data)if("select_type"==t)"Individual"==e.data[t]?A(u.value,"select_type").model=!1:A(u.value,"select_type").model=!0;else if("membership_members"==t)for(var a in e.data[t]||(m.value="Does not have a membership",p.value="Does not have a membership go to the Membership/Contract section and create a new membership and press New Membership",console.error("no posee una membresia :(")),e.data[t])if("memberships_location"==a){if(!e.data[t][a])return void console.error("no posee una locacion :(");A(i.value,"locations_id").model=e.data[t][a].companies_locations_id,$e([e.data[t][a].companies_locations_id]).then((e=>{z(i,"diciplines",e.data)}))}else if("recurrence"==a){let a=[];if(e.data[t].membership.amounts.forEach((e=>{let t=Pe.value.find((t=>t.id==e.recurrences_id));t.amount=e.amount,a.push(t)})),A(i.value,"recurrences_id").model=e.data[t].recurrences_id,!a.find((a=>a.id==e.data[t].recurrences_id)))return void console.error("no tiene un plan de membresia :( recurrences");A(i.value,"amount").model=a.find((a=>a.id==e.data[t].recurrences_id)).amount}else"is_recurrence"==a?A(i.value,"recurrence").model=1==e.data[t][a]:"diciplines"==a?(A(i.value,"diciplines").model=[],e.data[t][a].forEach((e=>{A(i.value,"diciplines").model.push(e.diciplines_id)}))):"membership"==a?A(i.value,"initiation_fee").model=e.data[t][a].initiation_fee:"is_initiation_fee"==a?A(i.value,"is_initiation_fee").model=0==e.data[t][a]?[a]:[]:"discount"==a?(A(i.value,"discount").disabled=!0,null!=e.data[t][a]&&(A(i.value,"discount").model=e.data[t][a].id)):W(i,a,e.data[t][a]);else if("staff_id"==t)W(i,t,e.data[t]);else if("emergency"==t)for(a in e.data[t])W(x,a,e.data[t][a]);else if("guardian"==t)for(a in e.data[t])W(y,a,e.data[t][a]);else W(u,t,"leo_vet_fr"==t?1==e.data[t]?t:[]:e.data[t]);v.value=!1}))};return(t,u)=>{const h=e,f=Te,_=de,b=a,y=It,g=At,x=Ba,k=Za,j=sl,C=vl,w=kl,M=$l,P=ke;return G(),J(P,null,{default:X((()=>[v.value?(G(),J(h,{key:0,height:"500px"})):Q("",!0),!v.value&&U(l)?(G(),J("div",Dl,[Z("div",Il,[Z(f,{category:U(r).query.category,onChangeMenu:d},null,8,["category"])]),Z("div",El,[U(s)?Q("",!0):(G(),J(b,{key:0,class:"mb-4 d-flex justify-content-between align-items-center",color:"danger"},{default:X((()=>[Z("div",null,[Z("h3",Yl,ee(m.value),1),Z("p",null,ee(p.value),1)]),Z("div",null,[U(Y)(U(i),"memberships_id")&&!U(S)?(G(),J(_,{key:0,color:"success",onClick:u[1]||(u[1]=e=>o.value=!0)},{default:X((()=>[Fl])),_:1})):Q("",!0)])])),_:1})),o.value?(G(),J(y,{key:1,class:"mb-4"})):Q("",!0),null!=U(l).membership_members?(G(),J(b,{key:2,class:"mb-4"},{default:X((()=>[Z("div",null,[Z("p",null,[Z("b",null,"Member #"+ee(U(l).id),1)]),Z("p",null,[Z("small",null,[Al,ie(" "+ee(U(re)(U(l).created_at).format("ddd - DD MMM YYYY")),1)])]),Z("p",null,[Vl,ie(" "+ee(U(n).membership.name),1)]),Z("p",null,[Nl,ie(" "+ee(U(re)(U(l).subscription.proxima_factura).format("ddd - DD MMM YYYY")),1)])])])),_:1})):Q("",!0),le(Z(g,{category:U(r).query.category},null,8,["category"]),[[se,"personalInformation"==c.value]]),le(Z(x,null,null,512),[[se,"memberMembership"==c.value]]),le(Z(k,null,null,512),[[se,"memberFamily"==c.value]]),le(Z(j,null,null,512),[[se,"memberEmergency"==c.value]]),le(Z(C,null,null,512),[[se,"memberCheckins"==c.value]]),le(Z(w,null,null,512),[[se,"memberPurchases"==c.value]]),le(Z(M,null,null,512),[[se,"memberWaiver"==c.value]])])])):Q("",!0)])),_:1})}}});export default Tl;
