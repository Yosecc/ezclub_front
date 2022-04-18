import{_ as e}from"./V-Placeload.b897843c.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.70e21a0f.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.affa0552.js";import{m as l,i as s,a as n,b as i,s as r,c as u,p as o,g as c,d,e as m,f as p,h as v,j as h,k as f,l as _,n as b,o as y,q as g,r as x,t as k,u as j,v as C,w,x as M,y as P}from"./Members.10b15448.js";import{b as S,P as $,A as D,F as I,e as E,v as Y,g as F,m as A,n as V,p as N,f as T,s as q,a as z}from"./index.a92ea6cf.js";import{d as W,w as L,z as O,c as B,r as H,D as R,o as U,h as G,K as J,A as K,j as Q,k as X,J as Z,L as ee,O as te,F as ae,R as le,a4 as se,G as ne,aa as ie,S as re,I as ue,y as oe}from"./vendor.d1a3c89d.js";import{_ as ce}from"./V-Button.vue_vue&type=script&setup=true&lang.e484ce11.js";import{_ as de}from"./V-Loader.vue_vue&type=script&setup=true&lang.df588183.js";import{_ as me}from"./V-Control.61107fd4.js";import{_ as pe}from"./V-Field.vue_vue&type=script&setup=true&lang.cd266ad4.js";import{_ as ve}from"./V-Modal.vue_vue&type=script&setup=true&lang.e6f3ce98.js";import{_ as he,a as fe,d as _e}from"./Companies.88697295.js";import{_ as be}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.d3b6617e.js";import{_ as ye}from"./signComponent.vue_vue&type=script&setup=true&lang.c8c9b36b.js";import{_ as ge}from"./pdf_icon.0c7d2419.js";import{_ as xe}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.d740cac0.js";import{_ as ke}from"./V-Block.vue_vue&type=script&setup=true&lang.25e2a244.js";import{_ as je}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.ef4fb6c6.js";import{p as Ce}from"./sidebarLayoutState.a11d51b9.js";import{g as we}from"./Discounts.23a33d27.js";import{g as Me}from"./Memberships.b84be09d.js";import{g as Pe,r as Se}from"./Recurrences.8750532a.js";import{h as $e}from"./Staffs.e8f2b87f.js";import{a as De}from"./Diciplines.06c83897.js";import{g as Ie}from"./config.41e7eb9b.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.7a5089bc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.2e028b39.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.fa5e9da0.js";import"./V-Dropdown.0747f2f0.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e9b51ce1.js";import"./useDropdown.c66a6279.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.ca7aaffa.js";import"./activePanelState.a69051ae.js";import"./fastpizza.c9124eb0.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.10056650.js";import"./V-Message.vue_vue&type=script&setup=true&lang.21ae8775.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.c7a6a0a8.js";import"./navbarLayoutState.f7f62a15.js";import"./video.d77d6f43.js";import"./darkModeState.a5b4739a.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.60378128.js";import"./AnimatedLogo.95c4db45.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.32fadef6.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.2ff8f9c8.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.66536429.js";const Ee={class:"d-flex justify-content-center align-items-center flex-column mb-4"},Ye={class:"mt-5 text-center"},Fe={class:"title is-5 is-narrow"},Ae={class:"w-100 mt-5"},Ve=X("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var Ne=W({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:n}){const i=e,r=K();L((()=>r.hash),(e=>{d.value=u.findIndex((e=>e.component==r.hash.slice(1)))})),O((()=>{""!=r.hash&&(d.value=u.findIndex((e=>e.component==r.hash.slice(1))))}));const u=[{name:"Personal Information",component:"personalInformation"},{name:"Membership/Contract",component:"memberMembership"},{name:"Family Members",component:"memberFamily"},{name:"Emergency",component:"memberEmergency"},{name:"Check-ins",component:"memberCheckins"},{name:"Purchases",component:"memberPurchases"}],o=[{name:"Personal Information",component:"personalInformation"},{name:"Waiver",component:"memberWaiver"}],c=B((()=>["Adult","Minor"].includes(i.category)?u:o)),d=H(0),m=H(null),p=B((()=>null!=c.value[d.value]?c.value[d.value].component:m.value));return(e,i)=>{const r=t,u=a;return R(l)?(U(),G(u,{key:0,color:R(s)?void 0:"danger"},{default:Q((()=>[X("div",Ee,[X(r,{picture:`${R(S)}storage/${R(l).photo}`,size:"xl"},null,8,["picture"]),X("div",Ye,[X("h2",Fe,Z(R(l).name)+" "+Z(R(l).second_name)+" "+Z(R(l).last_name),1)])]),X("div",Ae,[X("ul",null,[(U(!0),G(ee,null,te(R(c),((e,t)=>(U(),G("li",{key:`item-${t}`},[X(u,{class:["\n              mb-3\n              item_menu\n              d-flex\n              justify-content-between\n              align-items-center\n            ",d.value==t?"active":""],color:d.value==t?"warning":void 0,elevated:d.value==t,onClick:e=>(e=>{d.value=e,n("changeMenu",p)})(t)},{default:Q((()=>[X("p",null,Z(e.name),1),Ve])),_:2},1032,["class","color","elevated","onClick"])])))),128))])])])),_:1},8,["color"])):J("",!0)}}});const Te=X("div",{id:"payment-element"},null,-1),qe=ne(" Pay now "),ze=X("div",{id:"payment-message",class:"hidden"},null,-1);var We=W({expose:[],props:{amount:{type:Number,required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0}},setup(t){const l=t,s=Stripe($.value);L((()=>l.id),(e=>{console.log("cambio"),n.value=!0,d()}));const n=H(!0);H({id:l.id,amount:l.amount});const i=H(),r=B((()=>"stripe"!=l.url?{payment_type_id:3,amount:l.amount}:{id:l.id,member_mermship_id:l.member_membership,amount:l.amount,payment_type_id:1})),u=H(null),o=H(null),c=H(!1),d=async()=>{let e=await D.post(l.url,r.value).then((e=>{u.value=e.data.clientSecret,i.value=s.elements({clientSecret:u.value}),o.value=i.value.create("payment"),o.value.mount("#payment-element")})).catch((e=>{}));return n.value=!1,e},m=async e=>{e.preventDefault(),c.value=!0,await s.confirmPayment({elements:i.value,confirmParams:{return_url:`${I.value}members/process?payment_type=3&id=`+l.id+`&membership=${l.member_membership}`}}),c.value=!1};return O((()=>{d()})),(t,l)=>{const s=e,i=ce,r=de,u=a;return U(),G(ee,null,[n.value?(U(),G(s,{key:0,height:"500px"})):J("",!0),ae(X(u,{class:"mt-6"},{default:Q((()=>[X("form",{onSubmit:se(m,["prevent"]),id:"payment-form"},[Te,X(r,{size:"small",active:c.value},{default:Q((()=>[X(i,{id:"submit",class:"mt-4",color:"success"},{default:Q((()=>[qe])),_:1})])),_:1},8,["active"]),ze],40,["onSubmit"])])),_:1},512),[[le,!n.value]])],64)}}});const Le={class:"table is-hoverable is-striped is-fullwidth"},Oe=X("th",{scope:"col"},"Members",-1),Be=X("th",{scope:"col"},"Membership Name",-1),He=X("th",{scope:"col"},"Recurrence",-1),Re=X("th",{scope:"col"},"Prorated",-1),Ue=X("th",{scope:"col"},"Membership Cost",-1),Ge=X("th",{scope:"col"},"Initiation Fee",-1),Je=X("th",{scope:"col"},"Discount",-1),Ke=X("th",{scope:"col"},"Taxes",-1),Qe={key:0,scope:"col"},Xe=X("th",{scope:"col"},"Sub Total",-1),Ze={key:0},et={key:0},tt={key:1},at={key:2},lt={key:0},st=X("br",null,null,-1),nt={key:1},it={key:0},rt={key:1},ut={key:0},ot={key:0},ct={key:1},dt={key:1},mt={key:3},pt={class:"is-end"},vt={class:"d-flex justify-content-between"},ht=ne(" Card Payment "),ft=ne(" Cash Payment "),_t={class:"d-flex mb-4 justify-content-between"},bt={class:"title is-5"},yt=ne(" Total: "),gt={class:"title is-5"},xt=ne(" Cash Total: "),kt={class:"\r\n            d-flex\r\n            justify-content-center\r\n            align-items-center\r\n            flex-column\r\n            mb-4\r\n          "},jt=X("p",{class:"title is-5 mb-4"},"Change Back:",-1),Ct={class:"title is-3 mb-0"},wt={class:"d-flex justify-content-center flex-wrap mb-4"},Mt=X("div",{class:"w-100"},null,-1),Pt={class:"d-flex justify-content-center"},St=ne("Reset"),$t=ne("Confirm");var Dt=W({expose:[],setup(e){H(!1);const t=H(!1);O((()=>{console.log("se monto el payment")}));const s=B((()=>{let e=E(i.value,"memberships_id");return null!=e?e:[]})),u=B((()=>{let e=E(i.value,"recurrences_id");return null!=e?e:[]})),o=B((()=>{let e=Y(i.value,"initiation_fee");return null!=e?e:[]})),c=B((()=>{let e=F(i.value,"discount");return null!=e?e:[]})),d=B((()=>{let e=parseFloat(ie().format("DD")),t=0,a=0;return u.value.days>=30&&(a=e-u.value.payday,t=u.value.amount/u.value.days*a),{days:a,amount:Math.abs(Math.round(t))}})),m=B((()=>(e=>{if(""!=Y(i.value,"memberships_id"))return"percentaje"==(e=e.value?e.value:e).tax.type?{text:`${e.tax.value}%`,value:e.tax.value,type:"procentaje"}:{text:A(e.tax.value),value:e.tax.value}})(s))),p=H(null),v=B((()=>{let e=0;return e+=u.value.amount,Y(i.value,"is_initiation_fee").length||(e+=o.value),e-=d.value.amount,c.value.data&&("dolar"==c.value.data.type?e-=c.value.data.value:"percentaje"==c.value.data.type&&(e-=e/100*c.value.data.value)),e+=e/100*m.value.value,l.value.penalty&&(p.value=s.value.penalty,e+=p.value),l.value.leo_vet_fr&&(e-=e/100*s.value.descuento_vet),e})),h=B((()=>{let e=0;return e+=v.value,e})),f=H(!1),_=H(0),b=B((()=>{const e=parseFloat(_.value)-parseFloat(h.value);return e>0?e:0}));H(1);const y=async()=>{await r(n.value.id,{total:h.value,payment_type_id:1,cash:_.value,cash_back:b.value}).then((e=>{V.success("Payment Success"),window.location.reload()})).catch((e=>{}))};return(e,r)=>{const g=ce,x=a,k=We,j=me,C=pe,w=ve;return U(),G("div",null,[X(x,{class:""},{default:Q((()=>{return[X("table",Le,[X("thead",null,[X("tr",null,[Oe,Be,He,Re,Ue,Ge,Je,Ke,p.value?(U(),G("th",Qe,"Penalty")):J("",!0),Xe])]),0!=R(s).length?(U(),G("tbody",Ze,[X("tr",null,[X("td",null,[X("p",null,[X("b",null,Z(R(l).name)+" "+Z(R(l).second_name)+" "+Z(R(l).last_name),1)])]),0!=R(s).legnth?(U(),G("td",et,Z(R(s).name),1)):J("",!0),0!=R(u).length?(U(),G("td",tt,Z(R(u).descriptions),1)):J("",!0),0!=R(u).length?(U(),G("td",at,[R(u).days>=30?(U(),G("span",lt,[ne(Z(R(d).days)+" days : ",1),st,ne(" - "+Z(R(A)(R(d).amount)),1)])):(U(),G("span",nt,"-"))])):J("",!0),X("td",null,Z(R(A)((e=R(u),e.amount))),1),X("td",null,[R(Y)(R(i),"is_initiation_fee").length?(U(),G("span",rt,Z(R(A)(0)),1)):(U(),G("span",it,Z(R(A)(R(o))),1))]),X("td",null,[null!=R(c).data?(U(),G("span",ut,["dolar"==R(c).data.type?(U(),G("span",ot," - "+Z(R(A)(R(c).data.value)),1)):J("",!0),"percentaje"==R(c).data.type?(U(),G("span",ct,Z(R(c).data.value)+"%",1)):J("",!0)])):(U(),G("span",dt,"-"))]),X("td",null,Z(R(m).text),1),p.value?(U(),G("td",mt,Z(R(A)(p.value)),1)):J("",!0),X("td",null,Z(R(A)(R(v))),1)]),X("tr",null,[X("td",{style:{"text-align":"right"},colspan:p.value?"9":"8"}," Total ",8,["colspan"]),X("td",pt,Z(R(A)(R(h))),1)])])):J("",!0)]),X("div",vt,[X(g,{color:"success",disabled:0==R(s).length||isNaN(R(h)),onClick:r[1]||(r[1]=e=>t.value=!0)},{default:Q((()=>[ht])),_:1},8,["disabled"]),X(g,{disabled:0==R(s).length||isNaN(R(h)),color:"warning",onClick:r[2]||(r[2]=e=>f.value=!0)},{default:Q((()=>[ft])),_:1},8,["disabled"])])];var e})),_:1}),t.value?(U(),G(k,{key:0,class:"",url:`new_payment/${R(n).id}`,amount:R(h),id:R(l).id,member_membership:R(n).id},null,8,["url","amount","id","member_membership"])):J("",!0),X(w,{open:f.value,actions:"center",onClose:r[6]||(r[6]=e=>f.value=!1)},{content:Q((()=>[X("div",_t,[X("p",bt,[yt,X("b",null,Z(R(A)(R(h))),1)]),X("p",gt,[xt,X("b",null,Z(R(A)(_.value)),1)])]),X("div",kt,[jt,X("p",Ct,[X("b",null,Z(R(A)(R(b))),1)])]),X("div",wt,[X(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:r[3]||(r[3]=e=>_.value=R(h))},{default:Q((()=>[ne(" Full Payment "+Z(R(A)(R(h))),1)])),_:1}),Mt,(U(),G(ee,null,te([5,10,20,50,100],((e,t)=>X(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>_.value+=e},{default:Q((()=>[ne(" $"+Z(e),1)])),_:2},1032,["onClick"]))),64))]),X("div",Pt,[X(C,null,{default:Q((()=>[X(j,null,{default:Q((()=>[ae(X("input",{"onUpdate:modelValue":r[4]||(r[4]=e=>_.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[re,_.value]])])),_:1})])),_:1})])])),action:Q((()=>[X(g,{onClick:r[5]||(r[5]=e=>_.value=0),class:"d-flex justify-content-center",raised:""},{default:Q((()=>[St])),_:1}),X(g,{color:"success",onClick:y,disabled:R(h)>_.value,class:"d-flex justify-content-center",raised:""},{default:Q((()=>[$t])),_:1},8,["disabled"])])),_:1},8,["open"])])}}});const It=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Personal Information"),X("p",null,"Edit member's personal information")],-1),Et=ne(" Save Changes "),Yt=ne(" Convert to Members ");var Ft=W({expose:[],props:{category:{type:String,default:"Adult"}},setup(e){const t=e;B((()=>"Prospect"==t.category));const a=()=>{let e=N(u.value),t=new FormData;for(var a in e)"id_leo_vet_fr"==a?null==e[a]&&t.append(a,0):t.append(a,e[a]);o(t).then((e=>{V.success("Edit Success")}))};return(e,l)=>{const s=ce,n=he,i=be;return U(),G(i,null,{"header-left":Q((()=>[It])),"header-right":Q((()=>[X(s,{onClick:a,color:"primary"},{default:Q((()=>[Et])),_:1}),"Prospect"==t.category?(U(),G(s,{key:0,color:"info",class:"ml-3"},{default:Q((()=>[Yt])),_:1})):J("",!0)])),content:Q((()=>[X(n,{"inputs-step":R(u)},null,8,["inputs-step"])])),_:1})}}});const At={class:"columns is-multiline"},Vt={class:"d-flex align-items-start"},Nt=X("p",{class:"title is-1 mb-0"},[X("i",{class:"fas fa-credit-card","aria-hidden":"true"})],-1),Tt={class:"ml-4"},qt=X("p",{class:"title is-6 mb-2"},"Select Payment Method",-1),zt={class:"title is-6 mb-2"},Wt={key:0,class:"title is-6"},Lt={key:0,class:"column is-12"},Ot=X("div",{class:"d-flex align-items-center"},[X("p",{class:"title is-1 mb-0"},[X("i",{class:"fas fa-plus-circle","aria-hidden":"true"})]),X("div",{class:"ml-4"},[X("p",{class:"title is-4 mb-2"},"Add new card")])],-1);var Bt=W({expose:[],props:{method_default:{type:String,default:""},showNewCard:{type:Boolean,default:!0}},emits:["onMethodPayment","onNewCard"],setup(e,{emit:t}){K();const s=H([]),n=H(!0),i=H(null);O((()=>{l.value.id?(n.value=!0,c(l.value.id).then((e=>{n.value=!1,s.value=e.data})).catch((e=>{}))):console.error("Member Not Found")}));return(l,r)=>{const u=a,o=de;return U(),G(o,{size:"large",active:n.value},{default:Q((()=>[X("div",At,[(U(!0),G(ee,null,te(s.value,((a,l)=>(U(),G("div",{key:`card-${l}`,class:"column is-6"},[X(u,{onClick:e=>{return l=a.id,i.value=l,void t("onMethodPayment",l);var l},color:i.value==a.id?"success":void 0,class:"btn-card"},{default:Q((()=>[X("div",Vt,[Nt,X("div",Tt,[qt,X("p",zt,Z(a.card.brand)+" **** "+Z(a.card.last4),1),e.method_default==a.card.last4?(U(),G("p",Wt," Payment Default ")):J("",!0)])])])),_:2},1032,["onClick","color"])])))),128)),e.showNewCard?(U(),G("div",Lt,[X(u,{onClick:r[1]||(r[1]=e=>l.$emit("onNewCard")),color:"success",class:"btn-card"},{default:Q((()=>[Ot])),_:1})])):J("",!0)])])),_:1},8,["active"])}}});const Ht={class:"w-100 d-flex justify-content-end"},Rt=ne("Back"),Ut=X("div",{id:"payment-element"},null,-1),Gt=ne("Pay now "),Jt=X("div",{id:"payment-message",class:"hidden"},null,-1);var Kt=W({expose:[],props:{clientSecret:{type:String,required:!0},membership_member_id:{type:Number,required:!0},pm_last_four:{type:String,required:""}},emits:["PaymentAction"],setup(t,{emit:l}){const s=t,n=Stripe($.value);L((()=>s.clientSecret),(e=>{m()}));const i=H(),r=H(null),u=H(!1),o=H(null),c=H(!1),d=H(!0),m=async()=>(u.value=!0,i.value=await n.elements({clientSecret:s.clientSecret,appearance:{theme:"night",labels:"floating"}}),o.value=i.value.create("card",{classes:{base:"base_card"}}),o.value.mount("#payment-element"),i.value),p=async e=>{const{data:t}=await D.post("paymentStripe",{payment_method:e,membership_member_id:s.membership_member_id}).catch((e=>{c.value=!1}));return t},v=async e=>{e.preventDefault(),c.value=!0;const{setupIntent:t,error:a}=await n.confirmCardSetup(s.clientSecret,{payment_method:{card:o.value,billing_details:{name:r.value}}});if(a)c.value=!1,V.error(a.message);else{const{payment_method:e}=t,a=p(e);a&&(l("PaymentAction",a),V.success("Success Payment"))}c.value=!1};O((()=>{c.value=!1,d.value=!1}));const h=e=>{console.log("hhegu"),p(e)};return(l,s)=>{const n=e,i=ce,o=de,p=Bt,f=a;return U(),G(ee,null,[d.value?(U(),G(n,{key:0,height:"500px"})):J("",!0),ae(X(f,{class:"mt-6"},{default:Q((()=>[u.value?(U(),G("form",{key:0,onSubmit:se(v,["prevent"]),id:"payment-form"},[X("div",Ht,[X(i,{onClick:s[1]||(s[1]=e=>u.value=!1),class:"mb-4"},{default:Q((()=>[Rt])),_:1})]),ae(X("input",{id:"card-holder-name",class:"input mb-3","onUpdate:modelValue":s[2]||(s[2]=e=>r.value=e),placeholder:"Name",type:"text"},null,512),[[re,r.value]]),Ut,X(o,{size:"small",active:c.value},{default:Q((()=>[X(i,{id:"submit",class:"mt-4",color:"info"},{default:Q((()=>[Gt])),_:1})])),_:1},8,["active"]),Jt],40,["onSubmit"])):(U(),G(p,{key:1,onOnMethodPayment:h,onOnNewCard:s[3]||(s[3]=e=>m()),method_default:t.pm_last_four},null,8,["method_default"]))])),_:1},512),[[le,!d.value]])],64)}}});const Qt={class:"table is-hoverable is-striped is-fullwidth"},Xt=X("thead",null,[X("tr",null,[X("th",{scope:"col"},"Membership Name"),X("th",{scope:"col"},"Plan"),X("th",{scope:"col"},"Cost"),X("th",{scope:"col"},"Import")])],-1),Zt={style:{"text-align":"right"}},ea={key:0},ta=X("td",null,"Initiation Fee",-1),aa={style:{"text-align":"right"}},la={style:{"text-align":"right"}},sa=X("td",{colspan:"3",style:{"text-align":"right"}},[X("b",null,"Subtotal")],-1),na={style:{"text-align":"right"}},ia={colspan:"3",style:{"text-align":"right"}},ra={style:{"text-align":"right"}},ua=X("td",{colspan:"3",style:{"text-align":"right"}},[X("b",null,"Total")],-1),oa={style:{"text-align":"right"}},ca=X("td",{colspan:"3",style:{"text-align":"right"}},"Total recurrente",-1);var da=W({expose:[],props:{presupuesto:{type:Object,required:!0}},setup:e=>(t,l)=>{const s=a;return e.presupuesto?(U(),G(s,{key:0,class:"mb-4"},{default:Q((()=>[X("table",Qt,[Xt,X("tbody",null,[X("tr",null,[X("td",null,Z(e.presupuesto.name),1),X("td",null,Z(e.presupuesto.interval),1),X("td",null,Z(R(T)(10*e.presupuesto.membership.amount_subtotal)),1),X("td",Zt,Z(R(T)(10*e.presupuesto.membership.amount_subtotal)),1)]),e.presupuesto.is_initiation_fee?(U(),G("tr",ea,[X("td",null,Z(e.presupuesto.name),1),ta,X("td",null,Z(R(T)(e.presupuesto.initiation_fee)),1),X("td",aa,Z(R(T)(e.presupuesto.initiation_fee)),1)])):J("",!0),X("tr",la,[sa,X("td",null,Z(R(T)(10*e.presupuesto.amount_subtotal)),1)]),X("tr",na,[X("td",ia," Tax "+Z(e.presupuesto.percentage)+"% ",1),X("td",null,Z(R(T)(10*e.presupuesto.amount_tax)),1)]),X("tr",ra,[ua,X("td",null,Z(R(T)(10*e.presupuesto.amount_total)),1)]),X("tr",oa,[ca,X("td",null,Z(R(T)(10*e.presupuesto.membership.amount_total)),1)])])]),ue(t.$slots,"k")])),_:3})):J("",!0)}});const ma=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Membership / Contract"),X("p",null,"Edit member's membership and contract information")],-1),pa=ne(" Cancel Membership "),va=ne(" New Membership "),ha=X("h1",{class:"title is-6"},null,-1),fa={class:"table is-hoverable is-striped is-fullwidth"},_a=X("thead",null,[X("tr",null,[X("th",{scope:"col"},"Membership Name"),X("th",{scope:"col"},"Plan"),X("th",{scope:"col"},"Cost"),X("th",{scope:"col"},"Import")])],-1),ba={style:{"text-align":"right"}},ya={key:0},ga=X("td",null,"Initiation Fee",-1),xa={style:{"text-align":"right"}},ka={style:{"text-align":"right"}},ja={colspan:"3",style:{"text-align":"right"}},Ca={style:{"text-align":"right"}},wa=X("td",{colspan:"3",style:{"text-align":"right"}},[X("b",null,"Subtotal")],-1),Ma={style:{"text-align":"right"}},Pa=X("td",{colspan:"3",style:{"text-align":"right"}},[X("b",null,"Total")],-1),Sa={style:{"text-align":"right"}},$a=X("td",{colspan:"3",style:{"text-align":"right"}},"Total recurrente",-1),Da=ne(" Payment Card "),Ia=X("h1",{class:"title is-6"},"Active Contract Information",-1),Ea={class:"columns is-multiline"},Ya={class:"column is-12"},Fa={key:0,class:"columns is-multiline column mt-4 is-12"},Aa=X("b",null,"Contract Date:",-1),Va={class:"column is-12"},Na=X("h1",{class:"title is-6"},"Active Waiver Information",-1),Ta={class:"text-center"},qa=X("img",{src:ge,width:"40",alt:""},null,-1),za=ne(" View PDF ");var Wa=W({expose:[],props:{},setup(e){O((()=>{d(i.value),y()}));const t=H(null),s=H(null),r=H(null),u=H(null),o=()=>{m().then((e=>{V.success("Memberships Cancel"),window.location.reload()}))},c=H(null),f=()=>{const e=N(i.value);console.log(e);let t={memberships_id:e.memberships_id,recurrences_id:e.recurrences_id,is_initiation_fee:0==e.is_initiation_fee.length,member_id:l.value.id};p(t).then((e=>{c.value={name:e.data.membership.name,interval:e.data.quote.computed.recurring.interval,membership:{amount_subtotal:e.data.quote.computed.recurring.amount_subtotal,amount_total:e.data.quote.computed.recurring.amount_total},initiation_fee:e.data.membership.initiation_fee,percentage:e.data.tax.percentage,amount_tax:e.data.quote.total_details.amount_tax,amount_subtotal:e.data.quote.amount_subtotal,amount_total:e.data.quote.amount_total,is_initiation_fee:t.is_initiation_fee}})).catch((e=>{for(var t in e.response.data)e.response.data[t].forEach((e=>{V.error(`${t}  ${e}`)}))}))},_=H(null),b=()=>{const e=N(i.value);e.members_id=l.value.id,v(e).then((e=>{console.log(e.data),_.value=e.data.membership_member.id,u.value=e.data.clientSecret})).catch((e=>{for(var t in e.response.data.errores)e.response.data.errores[t].forEach((e=>{V.error(`${t}: ${e}`)}))}))},y=()=>{n.value&&(F(i.value,"is_initiation_fee").disabled=!0,F(i.value,"recurrences_id").disabled=!0,F(i.value,"amount").disabled=!0,F(i.value,"memberships_id").disabled=!0)},g=e=>{h(e,n.value.id).then((e=>{if(e.data.status)V.success("Sign Success");else for(var t in V.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{V.error(`${t} : ${e}`)}))})).catch((e=>{}))},x=e=>{console.log(e),window.location.reload()};return(e,d)=>{const m=ce,p=Kt,v=a,h=ce,y=da,k=he,j=ye,C=be;return U(),G("div",null,[X(C,null,{"header-left":Q((()=>[ma])),"header-right":Q((()=>[R(n)?(U(),G(m,{key:0,onClick:o,class:"mr-4"},{default:Q((()=>[pa])),_:1})):J("",!0),R(n)?J("",!0):(U(),G(m,{key:1,onClick:f,color:"primary"},{default:Q((()=>[va])),_:1}))])),content:Q((()=>[t.value?(U(),G(v,{key:0,class:"mb-4"},{default:Q((()=>[ha,X("table",fa,[_a,X("tbody",null,[X("tr",null,[X("td",null,Z(s.value.membership.name),1),X("td",null,Z(t.value.computed.recurring.interval),1),X("td",null,Z(R(T)(10*t.value.computed.recurring.amount_subtotal)),1),X("td",ba,Z(R(T)(10*t.value.computed.recurring.amount_subtotal)),1)]),1==s.value.is_initiation_fee?(U(),G("tr",ya,[X("td",null,Z(s.value.membership.name),1),ga,X("td",null,Z(R(T)(s.value.initiation_fee)),1),X("td",xa,Z(s.value.initiation_fee),1)])):J("",!0),X("tr",ka,[X("td",ja," Tax "+Z(r.value.percentage)+"% ",1),X("td",null,Z(t.value.total_details.amount_tax),1)]),X("tr",Ca,[wa,X("td",null,Z(R(T)(10*t.value.amount_subtotal)),1)]),X("tr",Ma,[Pa,X("td",null,Z(R(T)(10*t.value.amount_total)),1)]),X("tr",Sa,[$a,X("td",null,Z(R(T)(10*t.value.computed.recurring.amount_total)),1)])])]),X(p,{"client-secret":u.value,membership_member_id:s.value.id,onPaymentAction:x},null,8,["client-secret","membership_member_id"])])),_:1})):J("",!0),c.value?(U(),G(y,{key:1,presupuesto:c.value},{k:Q((()=>[X(h,{color:"info",onClick:b,class:"mt-4 py-1"},{default:Q((()=>[Da])),_:1}),u.value?(U(),G(p,{key:0,"client-secret":u.value,membership_member_id:_.value,pm_last_four:R(l).user.pm_last_four,onPaymentAction:x},null,8,["client-secret","membership_member_id","pm_last_four"])):J("",!0)])),_:1},8,["presupuesto"])):J("",!0),X(v,{class:"mb-4"},{default:Q((()=>[Ia,X("div",Ea,[X("div",Ya,[X(k,{"inputs-step":R(i)},null,8,["inputs-step"])]),R(l)&&R(n)?(U(),G("div",Fa,[X("div",null,[X("p",null,[Aa,ne(" "+Z(R(ie)(R(l).membership_members.created_at).format("ddd - DD MMM yyyy")),1)])]),X("div",Va,[X(j,{onOnSign:g,"is-sign":!R(n).sign,contract:`contract_${R(l).id}_${R(l).membership_members.id}_${R(l).personal_identifications}.pdf`,"url-contract":`generateContract/${R(l).id}`},null,8,["is-sign","contract","url-contract"])])])):J("",!0)])])),_:1}),J("",!0),R(l)&&R(n)?(U(),G(v,{key:3,class:"mb-4"},{default:Q((()=>[Na,X("div",Ta,[X("a",{target:"_blank",href:`${R(S)}generateWeiver/${R(l).id}`},[qa,X("p",null," weiver_"+Z(R(l).id)+"_"+Z(R(l).membership_members.id)+"_"+Z(R(l).personal_identifications)+".pdf ",1),X(h,{color:"success",outlined:"",class:"mt-4 py-1"},{default:Q((()=>[za])),_:1})],8,["href"])])])),_:1})):J("",!0)])),_:1})])}}});const La=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Family Members"),X("p",null,"Edit member's family members")],-1),Oa={class:"columns is-multiline"},Ba={key:0,class:"column is-4 mb-4"},Ha=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Parent"),X("p",null,"Edit parent contact")],-1),Ra=ne(" Save Changes "),Ua={class:""},Ga=X("h1",{class:"title is-5"},"Parent Contact Information",-1),Ja={class:"d-flex justify-content-end mr-6"};var Ka=W({expose:[],setup(e){H([{id:1,name:"Wonder Woman",subtitle:"Mother/Adult",img:"https://picsum.photos/150/150"},{id:2,name:"Lionel Messi",subtitle:"Father/Minor",img:"https://picsum.photos/150/151"}]);const a=()=>{const e=perpareDataInputs(b.value);y(e).then((e=>{V.success("Success")}))};return(e,s)=>{const n=t,i=xe,r=ke,u=be,o=ce,c=he;return U(),G("div",null,[R(l)&&"Adult"==R(l).category?(U(),G(u,{key:0},{"header-left":Q((()=>[La])),"header-right":Q((()=>[])),content:Q((()=>[X("div",Oa,[R(f)?(U(),G("div",Ba,[X(r,{title:`${R(f).name} ${R(f).second_name} ${R(f).last_name}`,class:"border-1 p-4 radius-small"},{icon:Q((()=>[X(n,{size:"medium",picture:`${R(S)}storage/${R(f).photo}`,subtitle:"Principal Family"},null,8,["picture"])])),action:Q((()=>[X(i,{"id-member":R(f).id},null,8,["id-member"])])),_:1},8,["title"])])):J("",!0),(U(!0),G(ee,null,te(R(_),((e,t)=>(U(),G("div",{class:"column is-4 mb-4",key:`family-${t}`},[X(r,{title:`${e.member.name} ${e.member.second_name} ${R(l).last_name}`,subtitle:e.member.relationships,class:"border-1 p-4 radius-small"},{icon:Q((()=>[X(n,{size:"medium",picture:`${R(S)}storage/${e.member.photo}`},null,8,["picture"])])),action:Q((()=>[X(i,{"id-member":e.members_id},null,8,["id-member"])])),_:2},1032,["title","subtitle"])])))),128))])])),_:1})):J("",!0),R(l)&&"Minor"==R(l).category?(U(),G(u,{key:1},{"header-left":Q((()=>[Ha])),"header-right":Q((()=>[X(o,{onClick:a,color:"primary"},{default:Q((()=>[Ra])),_:1})])),content:Q((()=>[X("div",Ua,[Ga,X("div",Ja,[X(n,{picture:`${R(S)}storage/${R(Y)(R(b),"parent_photo")}`,size:"large"},null,8,["picture"])]),X(c,{"inputs-step":R(b)},null,8,["inputs-step"])])])),_:1})):J("",!0)])}}});const Qa=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Emergency Contact"),X("p",null,"Edit member's emergency contact")],-1),Xa=ne(" Save Changes "),Za={class:""},el=X("h1",{class:"title is-5"},"Emergency Contact Information",-1);var tl=W({expose:[],setup(e){const t=()=>{const e=N(g.value);console.log(e),x(e).then((e=>{V.success("Success")}))};return(e,a)=>{const l=ce,s=he,n=be;return U(),G(n,null,{"header-left":Q((()=>[Qa])),"header-right":Q((()=>[X(l,{onClick:t,color:"primary"},{default:Q((()=>[Xa])),_:1})])),content:Q((()=>[X("div",Za,[el,X(s,{"inputs-step":R(g)},null,8,["inputs-step"])])])),_:1})}}});const al=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Check-ins History"),X("p",null,"Edit member's check-ins history")],-1),ll={class:"p-6"},sl={class:"d-flex"},nl=X("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),il=X("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),rl=ne(" Export "),ul={class:"mt-4"},ol={class:"table is-hoverable is-fullwidth"},cl=X("thead",null,[X("tr",null,[X("th",{scope:"col"},"DATE"),X("th",{scope:"col"},"TIME"),X("th",{scope:"col"},"STAFF")])],-1);var dl=W({expose:[],setup:e=>(e,t)=>{const a=me,s=pe,n=ce,i=be;return R(l)?(U(),G(i,{key:0},{"header-left":Q((()=>[al])),"header-right":Q((()=>[])),content:Q((()=>[X("div",ll,[X("div",sl,[X(s,{class:"field mr-3"},{default:Q((()=>[X(a,null,{default:Q((()=>[nl])),_:1})])),_:1}),X(s,{class:"field mr-3"},{default:Q((()=>[X(a,null,{default:Q((()=>[il])),_:1})])),_:1}),X(n,{color:"primary"},{default:Q((()=>[rl])),_:1})]),X("div",ul,[X("table",ol,[cl,X("tbody",null,[(U(!0),G(ee,null,te(R(k),((e,t)=>(U(),G("tr",{key:`access-${t}`},[X("td",null,Z(R(ie)(e.created_at).format("DD/MM/YYYY")),1),X("td",null,Z(R(ie)(e.created_at).format("HH:mm:ss")),1),X("td",null,Z(e.user.name),1)])))),128))])])])])])),_:1})):J("",!0)}});const ml=X("div",null,[X("h1",{class:"title is-4 mb-0"},"Purchases History"),X("p",null,"Edit member's purchases history")],-1),pl=X("p",{class:"title is-5"},"Card List",-1),vl={class:"mt-4"},hl={class:"table is-hoverable is-fullwidth"},fl=X("thead",null,[X("tr",null,[X("th",{scope:"col"},"Description"),X("th",{scope:"col"},"Created"),X("th",{scope:"col"},"Start Period"),X("th",{scope:"col"},"End Period"),X("th",{scope:"col"},"Mount"),X("th",{scope:"col"},"Download"),X("th",{scope:"col"},"Status")])],-1),_l={key:0},bl=X("i",{class:"fas fa-download","aria-hidden":"true"},null,-1);var yl=W({expose:[],setup(e){B((()=>n.value.payments)),B((()=>{let e=[];return C.value.forEach((t=>{e.push({membership:t.membership.name,payments:t.payments})})),e})),O((async()=>{await j(l.value.id)}));const t=e=>{};return(e,s)=>{const i=Bt,r=a,u=ce,o=be;return R(l)?(U(),G(o,{key:0},{"header-left":Q((()=>[ml])),"header-right":Q((()=>[])),content:Q((()=>[X(r,{class:"mb-4"},{default:Q((()=>[pl,X(i,{onOnMethodPayment:t,method_default:R(l).user.pm_last_four,"show-new-card":!1},null,8,["method_default"])])),_:1}),X(r,{class:"p-"},{default:Q((()=>[X("div",vl,[X("table",hl,[fl,R(n)?(U(),G("tbody",_l,[(U(!0),G(ee,null,te(R(l).invoices,((e,t)=>{var a;return U(),G("tr",{key:`invoice-${t}`},[X("td",null,Z(null!=(a=e.subscription)?a:"Others"),1),X("td",null,Z(R(ie)(e.created).format("MM/DD/YYYY")),1),X("td",null,Z(R(ie)(e.period_start).format("MM/DD/YYYY")),1),X("td",null,Z(R(ie)(e.period_end).format("MM/DD/YYYY")),1),X("td",null,Z(R(A)(e.total/100)),1),X("td",null,[X("a",{href:e.invoice_pdf,download:""},[X(u,null,{default:Q((()=>[bl])),_:1})],8,["href"])]),X("td",null,Z("paid"==e.status?"Paid":"error"),1)])})),128))])):J("",!0)])])])),_:1})])),_:1})):J("",!0)}}});const gl=X("div",null,[X("h1",{class:"title is-4 mb-0"}," Waiver "),X("p",null,"Edit member's waiver information")],-1),xl=ne(" Convert to Members "),kl={class:"columns is-multiline"},jl={class:"border-1 document_box p-4 d-flex justify-content-center radius-small"},Cl={href:"234",class:"text-center"},wl=X("img",{style:{width:"70px"},src:ge,alt:""},null,-1);var Ml=W({expose:[],setup(e){const t=H([{name:"Waiver_010221.pdf",url:""},{name:"Waiver_010221.pdf",url:""}]);return(e,a)=>{const l=ce,s=be;return U(),G(s,null,{"header-left":Q((()=>[gl])),"header-right":Q((()=>[X(l,{color:"info"},{default:Q((()=>[xl])),_:1})])),content:Q((()=>[X("div",kl,[(U(!0),G(ee,null,te(t.value,((e,t)=>(U(),G("div",{class:"column is-2 mb-4",key:`family-${t}`},[X("div",jl,[X("a",Cl,[wl,X("p",null,Z(e.name),1)])])])))),128))])])),_:1})}}});const Pl={key:1,class:"columns is-multiline"},Sl={class:"column is-3"},$l={class:"column is-9"},Dl={class:"title is-5 mb-0"},Il=ne(" Process Payment "),El=X("b",null,"Member since.",-1),Yl=X("b",null,"Membership Active:",-1),Fl=X("b",null,"Due Date: ",-1);var Al=W({expose:[],setup(t){const r=K();Ce.value="Member Profile",oe({title:"Members"});const o=H(!1),c=H("personalInformation"),d=e=>{c.value=e.value};L((()=>r.query),((e,t)=>{Object.keys(e).length>0&&(f(),h())}));const m=H("Filed Payment"),p=H("");L((()=>r.hash),(e=>{c.value=r.hash.slice(1)})),L((()=>r.query.id),(e=>{c.value="personalInformation"}));const v=H(!0),h=()=>{v.value=!0,setTimeout((()=>{v.value=!1}),500)};O((()=>{""!=r.hash&&(c.value=r.hash.slice(1)),fe().then((e=>{q(i,"locations_id",_e.value)})),Ie().then((e=>{q(u,"country_id",e.contries),q(u,"city_id",e.cities),q(u,"state_id",e.states),q(w,"city_id",e.cities),q(w,"state_id",e.states),q(w,"country_id",e.contries)})),Me().then((e=>{q(i,"memberships_id",e.data.memberships)})),we().then((e=>{q(i,"discount",e.data.discounts)})),Pe().then((e=>{q(i,"recurrences_id",e.data)})),$e().then((e=>{q(i,"staff_id",e.data)})),f()}));const f=async()=>{await M(r.query.id).then((e=>{for(var t in e.data)if("select_type"==t)"Individual"==e.data[t]?F(u.value,"select_type").model=!1:F(u.value,"select_type").model=!0;else if("membership_members"==t)for(var a in e.data[t]||(m.value="Does not have a membership",p.value="Does not have a membership go to the Membership/Contract section and create a new membership and press New Membership",console.error("no posee una membresia :(")),e.data[t])if("memberships_location"==a){if(!e.data[t][a])return void console.error("no posee una locacion :(");F(i.value,"locations_id").model=e.data[t][a].companies_locations_id,De([e.data[t][a].companies_locations_id]).then((e=>{q(i,"diciplines",e.data)}))}else if("recurrence"==a){let a=[];if(e.data[t].membership.amounts.forEach((e=>{let t=Se.value.find((t=>t.id==e.recurrences_id));t.amount=e.amount,a.push(t)})),F(i.value,"recurrences_id").model=e.data[t].recurrences_id,!a.find((a=>a.id==e.data[t].recurrences_id)))return void console.error("no tiene un plan de membresia :( recurrences");F(i.value,"amount").model=a.find((a=>a.id==e.data[t].recurrences_id)).amount}else"is_recurrence"==a?F(i.value,"recurrence").model=1==e.data[t][a]:"diciplines"==a?(F(i.value,"diciplines").model=[],e.data[t][a].forEach((e=>{F(i.value,"diciplines").model.push(e.diciplines_id)}))):"membership"==a?F(i.value,"initiation_fee").model=e.data[t][a].initiation_fee:"is_initiation_fee"==a?F(i.value,"is_initiation_fee").model=0==e.data[t][a]?[a]:[]:"discount"==a?(F(i.value,"discount").disabled=!0,null!=e.data[t][a]&&(F(i.value,"discount").model=e.data[t][a].id)):z(i,a,e.data[t][a]);else if("staff_id"==t)z(i,t,e.data[t]);else if("emergency"==t)for(a in e.data[t])z(g,a,e.data[t][a]);else if("guardian"==t)for(a in e.data[t])z(b,a,e.data[t][a]);else z(u,t,"leo_vet_fr"==t?1==e.data[t]?t:[]:e.data[t]);v.value=!1}))};return(t,u)=>{const h=e,f=Ne,_=ce,b=a,y=Dt,g=Ft,x=Wa,k=Ka,j=tl,C=dl,w=yl,M=Ml,S=je;return U(),G(S,null,{default:Q((()=>[v.value?(U(),G(h,{key:0,height:"500px"})):J("",!0),!v.value&&R(l)?(U(),G("div",Pl,[X("div",Sl,[X(f,{category:R(r).query.category,onChangeMenu:d},null,8,["category"])]),X("div",$l,[R(s)?J("",!0):(U(),G(b,{key:0,class:"mb-4 d-flex justify-content-between align-items-center",color:"danger"},{default:Q((()=>[X("div",null,[X("h3",Dl,Z(m.value),1),X("p",null,Z(p.value),1)]),X("div",null,[R(E)(R(i),"memberships_id")&&!R(P)?(U(),G(_,{key:0,color:"success",onClick:u[1]||(u[1]=e=>o.value=!0)},{default:Q((()=>[Il])),_:1})):J("",!0)])])),_:1})),o.value?(U(),G(y,{key:1,class:"mb-4"})):J("",!0),null!=R(l).membership_members?(U(),G(b,{key:2,class:"mb-4"},{default:Q((()=>[X("div",null,[X("p",null,[X("b",null,"Member #"+Z(R(l).id),1)]),X("p",null,[X("small",null,[El,ne(" "+Z(R(ie)(R(l).created_at).format("ddd - DD MMM YYYY")),1)])]),X("p",null,[Yl,ne(" "+Z(R(n).membership.name),1)]),X("p",null,[Fl,ne(" "+Z(R(ie)(R(l).subscription.proxima_factura).format("ddd - DD MMM YYYY")),1)])])])),_:1})):J("",!0),ae(X(g,{category:R(r).query.category},null,8,["category"]),[[le,"personalInformation"==c.value]]),ae(X(x,null,null,512),[[le,"memberMembership"==c.value]]),ae(X(k,null,null,512),[[le,"memberFamily"==c.value]]),ae(X(j,null,null,512),[[le,"memberEmergency"==c.value]]),ae(X(C,null,null,512),[[le,"memberCheckins"==c.value]]),ae(X(w,null,null,512),[[le,"memberPurchases"==c.value]]),ae(X(M,null,null,512),[[le,"memberWaiver"==c.value]])])])):J("",!0)])),_:1})}}});export default Al;
