import{_ as e}from"./V-Placeload.134a05d9.js";import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.e7b64613.js";import{m as s,i as l,b as n,c as r,d as i,e as u,p as o,f as c,h as m,j as d,k as p,l as v,n as f,o as y,q as b,r as h,t as _,u as g,v as k,w as x,x as j,y as C,z as w,A as M,B as P,C as $,D as S,E as D,F as E}from"./Members.23657a47.js";import{b as I,P as V,A as F,F as z,c as A,v as Y,g as T,m as q,n as N,p as L,e as W,h as B,a as O,s as H}from"./index.fd8fa13d.js";import{d as R,w as U,G,b as J,r as Q,D as K,o as X,h as Z,J as ee,O as te,j as ae,k as se,F as le,Q as ne,R as re,S as ie,U as ue,a8 as oe,E as ce,z as me,Y as de,L as pe}from"./vendor.7d033f41.js";import{_ as ve}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{_ as fe}from"./V-Loader.vue_vue&type=script&setup=true&lang.4e35c32c.js";import{_ as ye}from"./V-Control.f3c0402c.js";import{_ as be}from"./V-Field.vue_vue&type=script&setup=true&lang.5b35dbee.js";import{_ as he}from"./V-Modal.vue_vue&type=script&setup=true&lang.345ddd7c.js";import{_ as _e}from"./V-Tag.vue_vue&type=script&setup=true&lang.fe421256.js";import{_ as ge}from"./inputsLayaut.vue_vue&type=style&index=0&lang.87a4afde.js";import{_ as ke}from"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.e6c5b514.js";import{_ as xe,a as je,b as Ce}from"./Presupuesto.vue_vue&type=script&setup=true&lang.0dd509d3.js";import{_ as we}from"./MemberCards.vue_vue&type=script&setup=true&lang.3b0b7a7d.js";import{_ as Me}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.dac939a6.js";import{_ as Pe}from"./signComponent.vue_vue&type=script&setup=true&lang.5ef28462.js";import{_ as $e}from"./pdf_icon.4e54e04e.js";import{_ as Se}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.f0ca3e30.js";import{_ as De}from"./V-Block.vue_vue&type=script&setup=true&lang.ef21edbb.js";import{_ as Ee}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.32051f1f.js";import{p as Ie,f as Ve}from"./PaymentMethodsData.0de3a26c.js";import{_ as Fe}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.8f81b0d8.js";import{p as ze}from"./sidebarLayoutState.66c24736.js";import{g as Ae}from"./Discounts.9956f52a.js";import{a as Ye}from"./Memberships.a6f8c680.js";import{g as Te}from"./Recurrences.deca24fb.js";import{h as qe}from"./Staffs.0b72b926.js";import{g as Ne}from"./Diciplines.762c22c8.js";import{e as Le}from"./config.3be58afc.js";import{b as We,d as Be}from"./Companies.4bc0c059.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.867c7ae8.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.9e628ea0.js";import"./V-Dropdown.fdfb8a5a.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.cb218406.js";import"./useDropdown.216b8c2e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.48133fa4.js";import"./activePanelState.4624fcc4.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.17943e3c.js";import"./V-Message.vue_vue&type=script&setup=true&lang.e3b595c4.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.0ce2c394.js";import"./navbarLayoutState.7490ad3b.js";import"./video.3ed9ceae.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.d069f918.js";import"./darkModeState.b2a23e7f.js";import"./AnimatedLogo.707bad0f.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.336954e9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.95b9c245.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.4e8b4716.js";const Oe={class:"d-flex justify-content-center align-items-center flex-column mb-4"},He={class:"mt-5 text-center"},Re={class:"title is-5 is-narrow"},Ue={class:"w-100 mt-5"},Ge=se("i",{class:"iconify",style:{"font-size":"20px",color:"white"},"data-icon":"feather:arrow-right","aria-hidden":"true"},null,-1);var Je=R({expose:[],props:{category:{type:String,default:"Adult"}},emits:["changeMenu"],setup(e,{emit:n}){const r=e,i=te();U((()=>i.hash),(e=>{m.value=u.findIndex((e=>e.component==i.hash.slice(1)))})),G((()=>{""!=i.hash&&(m.value=u.findIndex((e=>e.component==i.hash.slice(1))))}));const u=[{name:"Personal Information",component:"personalInformation"},{name:"Membership/Contract",component:"memberMembership"},{name:"Family Members",component:"memberFamily"},{name:"Emergency",component:"memberEmergency"},{name:"Check-ins",component:"memberCheckins"},{name:"Purchases",component:"memberPurchases"}],o=[{name:"Personal Information",component:"personalInformation"},{name:"Waiver",component:"memberWaiver"}],c=J((()=>["Adult","Minor"].includes(r.category)?u:o)),m=Q(0),d=Q(null),p=J((()=>null!=c.value[m.value]?c.value[m.value].component:d.value));return(e,r)=>{const i=t,u=a;return K(s)?(X(),Z(u,{key:0,color:K(l)?void 0:"danger"},{default:ae((()=>[se("div",Oe,[se(i,{picture:K(s).photo?`${K(I)}storage/${K(s).photo}`:"",size:"xl"},null,8,["picture"]),se("div",He,[se("h2",Re,le(K(s).name)+" "+le(K(s).second_name)+" "+le(K(s).last_name),1)])]),se("div",Ue,[se("ul",null,[(X(!0),Z(ne,null,re(K(c),((e,t)=>(X(),Z("li",{key:`item-${t}`},[se(u,{class:["\n              mb-3\n              item_menu\n              d-flex\n              justify-content-between\n              align-items-center\n            ",m.value==t?"active":""],color:m.value==t?"warning":void 0,elevated:m.value==t,onClick:e=>(e=>{m.value=e,n("changeMenu",p)})(t)},{default:ae((()=>[se("p",null,le(e.name),1),Ge])),_:2},1032,["class","color","elevated","onClick"])])))),128))])])])),_:1},8,["color"])):ee("",!0)}}});const Qe=se("div",{id:"payment-element"},null,-1),Ke=ce(" Pay now "),Xe=se("div",{id:"payment-message",class:"hidden"},null,-1);var Ze=R({expose:[],props:{amount:{type:Number,required:!0},id:{type:Number,required:!0},url:{type:String,default:"stripe"},member_membership:{type:Number,default:0}},setup(t){const s=t,l=Stripe(V.value);U((()=>s.id),(e=>{console.log("cambio"),n.value=!0,m()}));const n=Q(!0);Q({id:s.id,amount:s.amount});const r=Q(),i=J((()=>"stripe"!=s.url?{payment_type_id:3,amount:s.amount}:{id:s.id,member_mermship_id:s.member_membership,amount:s.amount,payment_type_id:1})),u=Q(null),o=Q(null),c=Q(!1),m=async()=>{let e=await F.post(s.url,i.value).then((e=>{u.value=e.data.clientSecret,r.value=l.elements({clientSecret:u.value}),o.value=r.value.create("payment"),o.value.mount("#payment-element")})).catch((e=>{}));return n.value=!1,e},d=async e=>{e.preventDefault(),c.value=!0,await l.confirmPayment({elements:r.value,confirmParams:{return_url:`${z.value}members/process?payment_type=3&id=`+s.id+`&membership=${s.member_membership}`}}),c.value=!1};return G((()=>{m()})),(t,s)=>{const l=e,r=ve,i=fe,u=a;return X(),Z(ne,null,[n.value?(X(),Z(l,{key:0,height:"500px"})):ee("",!0),ie(se(u,{class:"mt-6"},{default:ae((()=>[se("form",{onSubmit:oe(d,["prevent"]),id:"payment-form"},[Qe,se(i,{size:"small",active:c.value},{default:ae((()=>[se(r,{id:"submit",class:"mt-4",color:"success"},{default:ae((()=>[Ke])),_:1})])),_:1},8,["active"]),Xe],40,["onSubmit"])])),_:1},512),[[ue,!n.value]])],64)}}});const et={class:"table is-hoverable is-striped is-fullwidth"},tt=se("th",{scope:"col"},"Members",-1),at=se("th",{scope:"col"},"Membership Name",-1),st=se("th",{scope:"col"},"Recurrence",-1),lt=se("th",{scope:"col"},"Prorated",-1),nt=se("th",{scope:"col"},"Membership Cost",-1),rt=se("th",{scope:"col"},"Initiation Fee",-1),it=se("th",{scope:"col"},"Discount",-1),ut=se("th",{scope:"col"},"Taxes",-1),ot={key:0,scope:"col"},ct=se("th",{scope:"col"},"Sub Total",-1),mt={key:0},dt={key:0},pt={key:1},vt={key:2},ft={key:0},yt=se("br",null,null,-1),bt={key:1},ht={key:0},_t={key:1},gt={key:0},kt={key:0},xt={key:1},jt={key:1},Ct={key:3},wt={class:"is-end"},Mt={class:"d-flex justify-content-between"},Pt=ce(" Card Payment "),$t=ce(" Cash Payment "),St={class:"d-flex mb-4 justify-content-between"},Dt={class:"title is-5"},Et=ce(" Total: "),It={class:"title is-5"},Vt=ce(" Cash Total: "),Ft={class:"\r\n            d-flex\r\n            justify-content-center\r\n            align-items-center\r\n            flex-column\r\n            mb-4\r\n          "},zt=se("p",{class:"title is-5 mb-4"},"Change Back:",-1),At={class:"title is-3 mb-0"},Yt={class:"d-flex justify-content-center flex-wrap mb-4"},Tt=se("div",{class:"w-100"},null,-1),qt={class:"d-flex justify-content-center"},Nt=ce("Reset"),Lt=ce("Confirm");var Wt=R({expose:[],setup(e){Q(!1);const t=Q(!1);G((()=>{console.log("se monto el payment")}));const l=J((()=>{let e=A(r,"memberships_id");return null!=e?e:[]})),u=J((()=>{let e=A(r,"recurrences_id");return null!=e?e:[]})),o=J((()=>{let e=Y(r,"initiation_fee");return null!=e?e:[]})),c=J((()=>{let e=T(r,"discount");return null!=e?e:[]})),m=J((()=>{let e=parseFloat(me().format("DD")),t=0,a=0;return u.value.days>=30&&(a=e-u.value.payday,t=u.value.amount/u.value.days*a),{days:a,amount:Math.abs(Math.round(t))}})),d=J((()=>(e=>{if(""!=Y(r,"memberships_id"))return"percentaje"==(e=e.value?e.value:e).tax.type?{text:`${e.tax.value}%`,value:e.tax.value,type:"procentaje"}:{text:q(e.tax.value),value:e.tax.value}})(l))),p=Q(null),v=J((()=>{let e=0;return e+=u.value.amount,Y(r,"is_initiation_fee").length||(e+=o.value),e-=m.value.amount,c.value.data&&("dolar"==c.value.data.type?e-=c.value.data.value:"percentaje"==c.value.data.type&&(e-=e/100*c.value.data.value)),e+=e/100*d.value.value,s.value.penalty&&(p.value=l.value.penalty,e+=p.value),s.value.leo_vet_fr&&(e-=e/100*l.value.descuento_vet),e})),f=J((()=>{let e=0;return e+=v.value,e})),y=Q(!1),b=Q(0),h=J((()=>{const e=parseFloat(b.value)-parseFloat(f.value);return e>0?e:0}));Q(1);const _=async()=>{await i(n.value.id,{total:f.value,payment_type_id:1,cash:b.value,cash_back:h.value}).then((e=>{N.success("Payment Success"),window.location.reload()})).catch((e=>{}))};return(e,i)=>{const g=ve,k=a,x=Ze,j=ye,C=be,w=he;return X(),Z("div",null,[se(k,{class:""},{default:ae((()=>{return[se("table",et,[se("thead",null,[se("tr",null,[tt,at,st,lt,nt,rt,it,ut,p.value?(X(),Z("th",ot,"Penalty")):ee("",!0),ct])]),0!=K(l).length?(X(),Z("tbody",mt,[se("tr",null,[se("td",null,[se("p",null,[se("b",null,le(K(s).name)+" "+le(K(s).second_name)+" "+le(K(s).last_name),1)])]),0!=K(l).legnth?(X(),Z("td",dt,le(K(l).name),1)):ee("",!0),0!=K(u).length?(X(),Z("td",pt,le(K(u).descriptions),1)):ee("",!0),0!=K(u).length?(X(),Z("td",vt,[K(u).days>=30?(X(),Z("span",ft,[ce(le(K(m).days)+" days : ",1),yt,ce(" - "+le(K(q)(K(m).amount)),1)])):(X(),Z("span",bt,"-"))])):ee("",!0),se("td",null,le(K(q)((e=K(u),e.amount))),1),se("td",null,[K(Y)(K(r),"is_initiation_fee").length?(X(),Z("span",_t,le(K(q)(0)),1)):(X(),Z("span",ht,le(K(q)(K(o))),1))]),se("td",null,[null!=K(c).data?(X(),Z("span",gt,["dolar"==K(c).data.type?(X(),Z("span",kt," - "+le(K(q)(K(c).data.value)),1)):ee("",!0),"percentaje"==K(c).data.type?(X(),Z("span",xt,le(K(c).data.value)+"%",1)):ee("",!0)])):(X(),Z("span",jt,"-"))]),se("td",null,le(K(d).text),1),p.value?(X(),Z("td",Ct,le(K(q)(p.value)),1)):ee("",!0),se("td",null,le(K(q)(K(v))),1)]),se("tr",null,[se("td",{style:{"text-align":"right"},colspan:p.value?"9":"8"}," Total ",8,["colspan"]),se("td",wt,le(K(q)(K(f))),1)])])):ee("",!0)]),se("div",Mt,[se(g,{color:"success",disabled:0==K(l).length||isNaN(K(f)),onClick:i[1]||(i[1]=e=>t.value=!0)},{default:ae((()=>[Pt])),_:1},8,["disabled"]),se(g,{disabled:0==K(l).length||isNaN(K(f)),color:"warning",onClick:i[2]||(i[2]=e=>y.value=!0)},{default:ae((()=>[$t])),_:1},8,["disabled"])])];var e})),_:1}),t.value?(X(),Z(x,{key:0,class:"",url:`new_payment/${K(n).id}`,amount:K(f),id:K(s).id,member_membership:K(n).id},null,8,["url","amount","id","member_membership"])):ee("",!0),se(w,{open:y.value,actions:"center",onClose:i[6]||(i[6]=e=>y.value=!1)},{content:ae((()=>[se("div",St,[se("p",Dt,[Et,se("b",null,le(K(q)(K(f))),1)]),se("p",It,[Vt,se("b",null,le(K(q)(b.value)),1)])]),se("div",Ft,[zt,se("p",At,[se("b",null,le(K(q)(K(h))),1)])]),se("div",Yt,[se(g,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:i[3]||(i[3]=e=>b.value=K(f))},{default:ae((()=>[ce(" Full Payment "+le(K(q)(K(f))),1)])),_:1}),Tt,(X(),Z(ne,null,re([5,10,20,50,100],((e,t)=>se(g,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>b.value+=e},{default:ae((()=>[ce(" $"+le(e),1)])),_:2},1032,["onClick"]))),64))]),se("div",qt,[se(C,null,{default:ae((()=>[se(j,null,{default:ae((()=>[ie(se("input",{"onUpdate:modelValue":i[4]||(i[4]=e=>b.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[de,b.value]])])),_:1})])),_:1})])])),action:ae((()=>[se(g,{onClick:i[5]||(i[5]=e=>b.value=0),class:"d-flex justify-content-center",raised:""},{default:ae((()=>[Nt])),_:1}),se(g,{color:"success",onClick:_,disabled:K(f)>b.value,class:"d-flex justify-content-center",raised:""},{default:ae((()=>[Lt])),_:1},8,["disabled"])])),_:1},8,["open"])])}}});const Bt=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Personal Information"),se("p",null,"Edit member's personal information")],-1),Ot=ce(" Save Changes "),Ht=ce(" Convert to Members ");var Rt=R({expose:[],props:{category:{type:String,default:"Adult"}},setup(e){const t=e;J((()=>"Prospect"==t.category));const a=Q(!1),s=()=>{a.value=!0;let e=L(u.value),t=new FormData;for(var s in e)t.append(s,e[s]);o(t).then((e=>{N.success("Edit Success"),a.value=!1})).catch((e=>{a.value=!1}))};return(e,l)=>{const n=ve,r=fe,i=ge,o=ke;return X(),Z(o,null,{"header-left":ae((()=>[Bt])),"header-right":ae((()=>[se(r,{size:"small",active:a.value},{default:ae((()=>[se(n,{onClick:s,color:"primary"},{default:ae((()=>[Ot])),_:1}),"Prospect"==t.category?(X(),Z(n,{key:0,color:"info",class:"ml-3"},{default:ae((()=>[Ht])),_:1})):ee("",!0)])),_:1},8,["active"])])),content:ae((()=>[se(i,{"inputs-step":K(u)},null,8,["inputs-step"])])),_:1})}}});const Ut=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Membership / Contract"),se("p",null,"Edit member's membership and contract information")],-1),Gt={class:"columns is-multiline justify-content-center"},Jt={key:0,class:"column is-12"},Qt=se("p",null,[se("small",null,"Membership")],-1),Kt={class:"title is-4 mb-0"},Xt={key:0},Zt={class:"text-right"},ea=se("b",null,"Payment Method:",-1),ta={class:"title is-4"},aa={key:1,class:"column is-4 mb-6 mt-4"},sa=se("p",null,[se("b",null,"HOLD Membership")],-1),la={key:2,class:"column is-4 mb-6 mt-4"},na=se("p",null,[se("b",null,"Pause Payment")],-1),ra=ce("Confirm"),ia={key:3,class:"column is-4 mb-6 mt-4"},ua=se("p",null,[se("b",null,"Cancel Membership")],-1),oa={key:4,class:"column is-4 mb-6 mt-4"},ca=se("p",null,[se("b",null,"Payment Now")],-1),ma={key:5,class:"mb-4 column is-12"},da=ce("Save Changes"),pa=ce(" New Membership "),va={key:7,class:"column is-12 mb-6 mt-4"},fa={key:1},ya={class:"d-flex justify-content-end w-100"},ba=ce("Cancel"),ha={key:8,class:"columns is-multiline column mt-4 is-12"},_a=se("b",null,"Contract Date:",-1),ga={class:"column is-12"},ka=se("h1",{class:"title is-6"},"Active Waiver Information",-1),xa={class:"text-center"},ja=se("img",{src:$e,width:"40",alt:""},null,-1),Ca=ce(" View PDF ");var wa=R({expose:[],props:{},setup(t){G((()=>{c(r)})),Q(null),Q(null),Q(null),Q(null),Q(null);const l=Q(!1);Q(null);const i=J((()=>{if(s.value&&n.value){let e=["locations_id","diciplines","staff_id","discount"];return r.filter((t=>e.includes(t.name)))}return r})),o=()=>{console.log(r),T(r,"amount").required=!1,T(r,"initiation_fee").required=!1,T(r,"diciplines").required=!1;const e=L(r);v(e).then((e=>{N.success("Success"),l.value=!1,T(r,"amount").required=!0,T(r,"initiation_fee").required=!0,T(r,"diciplines").required=!0}))},g=async()=>{l.value=!0,await f(r,u.value),l.value=!1},k=()=>{confirm("Are you sure you want to perform this action?")&&(l.value=!0,y().then((e=>{N.success("Memberships Cancel"),window.location.reload(),l.value=!1})))},x=e=>{b(e,n.value.id).then((e=>{if(e.data.status)N.success("Sign Success");else for(var t in N.error(e.data.mensaje),e.data.errores)e.data.errores[t].forEach((e=>{N.error(`${t} : ${e}`)}))})).catch((e=>{}))},j=e=>{},C=Q(!1),w=Q(null),M=()=>{confirm("Are you sure you want to perform this action?")&&(l.value=!0,h(n.value.id,w.value).then((e=>{N.success("Success Pause"),l.value=!1})).catch((e=>{for(var t in l.value=!1,e.response.data.errores)e.response.data.errores[t].forEach((e=>{N.error(`${t}: ${e}`)}))})))},P=Q(!1),$=(e,t=3,a={})=>{if(!confirm("Do you want to try the payment?"))return;let l={invoice_id:s.value.subscription.latest_invoice,payment_type_id:t,payment_method:e,total:s.value.subscription.total_invoice};1==t&&(l.changeBack=a.changeBack,l.cash=a.cash),console.log("llaj",l),_(n.value.id,l).then((e=>{N.success("success"),window.location.reload()})).catch((e=>{if("object"==typeof e.response.data)for(var t in e.response.data)"array"==typeof e.response.data[t]||N.error(e.response.data[t]);else N.error(e.response.data)}))},S=e=>{$(null,1,e)};return(t,r)=>{const u=a,c=fe,v=ve,f=he,y=xe,b=we,h=ge,_=Me,D=ve,E=e,V=je,F=Ce,z=Pe,A=ke;return X(),Z(A,null,{"header-left":ae((()=>[Ut])),content:ae((()=>[se("div",Gt,[K(s)&&K(n)?(X(),Z("div",Jt,[se(u,{class:"d-flex justify-content-between",color:"info"},{default:ae((()=>[se("span",null,[Qt,se("p",Kt,le(K(n).membership.name),1),se("p",null,le(K(n).recurrence.descriptions),1),K(n).discount?(X(),Z("p",Xt,le(K(n).discount.value),1)):ee("",!0)]),se("span",Zt,[se("p",null,[se("small",null,[ea,ce(" "+le(K(n).payment_type.name),1)])]),se("p",null,[se("small",null,le(K(n).recurrence.is_recurrence?"Recurrence":"no recurrence"),1)]),se("p",ta,le(K(q)(K(s).subscription.total_invoice/100)),1)])])),_:1})])):ee("",!0),K(s)&&K(n)?(X(),Z("div",aa,[K(s).membership_members.is_recurrence?(X(),Z(c,{key:0,size:"small",active:l.value},{default:ae((()=>[K(n)&&K(s).subscription?(X(),Z(u,{key:0,color:"info",outlined:null==K(s).subscription.pause_collection,onClick:M,class:"mr-4 btn-card text-center"},{default:ae((()=>[sa])),_:1},8,["outlined"])):ee("",!0)])),_:1},8,["active"])):ee("",!0)])):ee("",!0),K(s)&&K(n)?(X(),Z("div",la,[K(s).membership_members.is_recurrence?(X(),Z(c,{key:0,size:"small",active:l.value},{default:ae((()=>[K(n)&&K(s).subscription?(X(),Z(u,{key:0,color:"warning",outlined:null==K(s).subscription.pause_collection,onClick:r[1]||(r[1]=e=>C.value=!0),class:"mr-4 btn-card text-center"},{default:ae((()=>[na])),_:1},8,["outlined"])):ee("",!0)])),_:1},8,["active"])):ee("",!0),se(f,{open:C.value,actions:"center",onClose:r[3]||(r[3]=e=>C.value=!1)},{content:ae((()=>[ie(se("input",{type:"date","onUpdate:modelValue":r[2]||(r[2]=e=>w.value=e),class:"input"},null,512),[[de,w.value]])])),action:ae((()=>[se(v,{onClick:M,color:"primary",raised:""},{default:ae((()=>[ra])),_:1})])),_:1},8,["open"])])):ee("",!0),K(s)&&K(n)?(X(),Z("div",ia,[K(s).membership_members.is_recurrence?(X(),Z(c,{key:0,size:"small",active:l.value},{default:ae((()=>[K(n)?(X(),Z(u,{key:0,color:"danger",outlined:"",onClick:k,class:"mr-4 btn-card text-center"},{default:ae((()=>[ua])),_:1})):ee("",!0)])),_:1},8,["active"])):ee("",!0)])):ee("",!0),K(s)&&K(n)?(X(),Z("div",oa,[K(s).membership_members.is_recurrence?(X(),Z(c,{key:0,size:"small",active:l.value},{default:ae((()=>[K(n)?(X(),Z(u,{key:0,color:"success",outlined:"",onClick:r[4]||(r[4]=e=>P.value=!P.value),class:"mr-4 btn-card text-center"},{default:ae((()=>[ca])),_:1})):ee("",!0)])),_:1},8,["active"])):ee("",!0)])):ee("",!0),P.value?(X(),Z("div",ma,[K(s).user?(X(),Z(b,{key:0,onOnMethodPayment:$,memberid:K(s).id,method_default:K(s).user.pm_last_four,"show-new-card":!1,class:"mb-4",ancho:"is-4"},{default:ae((()=>[se(y,{total:K(s).subscription.total_invoice,margin:"mx-0",class:"is-4",onOnPaymentCash:S},null,8,["total"])])),_:1},8,["memberid","method_default"])):ee("",!0)])):ee("",!0),K(m).length?ee("",!0):(X(),Z(u,{key:6,class:"mb-4 column is-12"},{default:ae((()=>[se(h,{"inputs-step":K(i)},null,8,["inputs-step"]),K(s).trainers?(X(),Z(_,{key:0,avatars:K(d)(K(s).trainers),size:"small"},null,8,["avatars"])):ee("",!0),K(s)&&K(n)?(X(),Z(c,{key:1,size:"small",active:l.value},{default:ae((()=>[se(D,{class:"mt-5",onClick:o,color:"primary"},{default:ae((()=>[da])),_:1})])),_:1},8,["active"])):ee("",!0),K(p)?ee("",!0):(X(),Z(c,{key:2,size:"small",active:l.value},{default:ae((()=>[K(n)?ee("",!0):(X(),Z(D,{key:0,class:"mt-5",onClick:g,color:"primary"},{default:ae((()=>[pa])),_:1}))])),_:1},8,["active"]))])),_:1})),K(n)?ee("",!0):(X(),Z("div",va,[l.value?(X(),Z(E,{key:0,height:"300px",class:"mb-4"})):ee("",!0),K(m).length?(X(),Z("div",fa,[(X(!0),Z(ne,null,re(K(m),((e,a)=>(X(),Z(F,{key:`presupuesto-${a}`,class:"mb-4",presupuesto:e},{default:ae((()=>[se("div",ya,[se(V,{member:e.member,member_id:K(s).id,membresia:e.membresia,contact:t.dataContact,presupuesto_id:e.presupuesto_id,"categories-members":t.categoriesMembers,"notas-input":t.notasInput,total:e.totales.upfront.amount_total,onPaymentAction:j,type:"edit"},null,8,["member","member_id","membresia","contact","presupuesto_id","categories-members","notas-input","total"])])])),_:2},1032,["presupuesto"])))),128)),se(D,{onClick:r[5]||(r[5]=e=>m.value=[]),color:"danger"},{default:ae((()=>[ba])),_:1})])):ee("",!0)])),K(s)&&K(n)?(X(),Z("div",ha,[se("div",null,[se("p",null,[_a,ce(" "+le(K(me)(K(s).membership_members.created_at).format("ddd - DD MMM yyyy")),1)])]),se("div",ga,[se(z,{onOnSign:x,"is-sign":!K(n).sign,contract:`contract_${K(s).id}_${K(s).membership_members.id}_${K(s).personal_identifications}.pdf`,"url-contract":`generateContract/${K(s).id}`},null,8,["is-sign","contract","url-contract"])])])):ee("",!0),ee("",!0),K(s)&&K(n)?(X(),Z(u,{key:10,class:"mb-4"},{default:ae((()=>[ka,se("div",xa,[se("a",{target:"_blank",href:`${K(I)}generateWeiver/${K(s).id}`},[ja,se("p",null," weiver_"+le(K(s).id)+"_"+le(K(s).membership_members.id)+"_"+le(K(s).personal_identifications)+".pdf ",1),se(v,{color:"success",outlined:"",class:"mt-4 py-1"},{default:ae((()=>[Ca])),_:1})],8,["href"])])])),_:1})):ee("",!0)])])),_:1})}}});const Ma=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Family Members"),se("p",null,"Edit member's family members")],-1),Pa={class:"columns is-multiline"},$a={key:0,class:"column is-4 mb-4"},Sa=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Parent"),se("p",null,"Edit parent contact")],-1),Da=ce(" Save Changes "),Ea={class:""},Ia=se("h1",{class:"title is-5"},"Parent Contact Information",-1),Va={class:"d-flex justify-content-end mr-6"};var Fa=R({expose:[],setup(e){Q([{id:1,name:"Wonder Woman",subtitle:"Mother/Adult",img:"https://picsum.photos/150/150"},{id:2,name:"Lionel Messi",subtitle:"Father/Minor",img:"https://picsum.photos/150/151"}]);const a=()=>{const e=perpareDataInputs(x.value);j(e).then((e=>{N.success("Success")}))};return(e,l)=>{const n=t,r=Se,i=De,u=ke,o=ve,c=ge;return X(),Z("div",null,[K(s)&&"Adult"==K(s).category?(X(),Z(u,{key:0},{"header-left":ae((()=>[Ma])),"header-right":ae((()=>[])),content:ae((()=>[se("div",Pa,[K(g)?(X(),Z("div",$a,[se(i,{title:`${K(g).name} ${K(g).second_name} ${K(g).last_name}`,class:"border-1 p-4 radius-small"},{icon:ae((()=>[se(n,{size:"medium",picture:`${K(I)}storage/${K(g).photo}`,subtitle:"Principal Family"},null,8,["picture"])])),action:ae((()=>[se(r,{"id-member":K(g).id},null,8,["id-member"])])),_:1},8,["title"])])):ee("",!0),(X(!0),Z(ne,null,re(K(k),((e,t)=>(X(),Z("div",{class:"column is-4 mb-4",key:`family-${t}`},[se(i,{title:`${e.member.name} ${e.member.second_name} ${K(s).last_name}`,subtitle:e.member.relationships,class:"border-1 p-4 radius-small"},{icon:ae((()=>[se(n,{size:"medium",picture:`${K(I)}storage/${e.member.photo}`},null,8,["picture"])])),action:ae((()=>[se(r,{"id-member":e.members_id},null,8,["id-member"])])),_:2},1032,["title","subtitle"])])))),128))])])),_:1})):ee("",!0),K(s)&&"Minor"==K(s).category?(X(),Z(u,{key:1},{"header-left":ae((()=>[Sa])),"header-right":ae((()=>[se(o,{onClick:a,color:"primary"},{default:ae((()=>[Da])),_:1})])),content:ae((()=>[se("div",Ea,[Ia,se("div",Va,[se(n,{picture:`${K(I)}storage/${K(Y)(K(x),"parent_photo")}`,size:"large"},null,8,["picture"])]),se(c,{"inputs-step":K(x)},null,8,["inputs-step"])])])),_:1})):ee("",!0)])}}});const za=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Emergency Contact"),se("p",null,"Edit member's emergency contact")],-1),Aa=ce(" Save Changes "),Ya={class:""},Ta=se("h1",{class:"title is-5"},"Emergency Contact Information",-1);var qa=R({expose:[],setup(e){const t=()=>{const e=L(C.value);console.log(e),w(e).then((e=>{N.success("Success")}))};return(e,a)=>{const s=ve,l=ge,n=ke;return X(),Z(n,null,{"header-left":ae((()=>[za])),"header-right":ae((()=>[se(s,{onClick:t,color:"primary"},{default:ae((()=>[Aa])),_:1})])),content:ae((()=>[se("div",Ya,[Ta,se(l,{"inputs-step":K(C)},null,8,["inputs-step"])])])),_:1})}}});const Na=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Check-ins History"),se("p",null,"Edit member's check-ins history")],-1),La={class:"p-6"},Wa={class:"d-flex"},Ba=se("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),Oa=se("input",{type:"date",class:"input",placeholder:"input.placeholder"},null,-1),Ha=ce(" Export "),Ra={class:"mt-4"},Ua={class:"table is-hoverable is-fullwidth"},Ga=se("thead",null,[se("tr",null,[se("th",{scope:"col"},"DATE"),se("th",{scope:"col"},"TIME"),se("th",{scope:"col"},"STAFF")])],-1);var Ja=R({expose:[],setup:e=>(e,t)=>{const a=ye,l=be,n=ve,r=ke;return K(s)?(X(),Z(r,{key:0},{"header-left":ae((()=>[Na])),"header-right":ae((()=>[])),content:ae((()=>[se("div",La,[se("div",Wa,[se(l,{class:"field mr-3"},{default:ae((()=>[se(a,null,{default:ae((()=>[Ba])),_:1})])),_:1}),se(l,{class:"field mr-3"},{default:ae((()=>[se(a,null,{default:ae((()=>[Oa])),_:1})])),_:1}),se(n,{color:"primary"},{default:ae((()=>[Ha])),_:1})]),se("div",Ra,[se("table",Ua,[Ga,se("tbody",null,[(X(!0),Z(ne,null,re(K(M),((e,t)=>(X(),Z("tr",{key:`access-${t}`},[se("td",null,le(K(me)(e.created_at).format("DD/MM/YYYY")),1),se("td",null,le(K(me)(e.created_at).format("HH:mm:ss")),1),se("td",null,le(e.user.name),1)])))),128))])])])])])),_:1})):ee("",!0)}});const Qa=ce(" New Card "),Ka={class:"column is-8 mx-auto"};var Xa=R({expose:[],setup(e){const t=Q(!1);G((()=>{W(Ie.value)}));const a=()=>{const e=L(Ie.value);B.value||(t.value=!0,P(s.value.id,e).then((e=>{N.success("Success"),t.value=!1,W(Ie.value)})).catch((e=>{if("object"==typeof e.response.data)for(var a in e.response.data)e.response.data[a].forEach((e=>{N.error(`${a} : ${e}`)}));else N.error(e.response.data);t.value=!1})))};return(e,s)=>{const l=ve,n=fe,r=Ee,i=ye,u=be,o=ge,c=ke;return X(),Z(c,null,{"header-right":ae((()=>[se(n,{active:t.value,size:"small"},{default:ae((()=>[se(l,{onClick:a,color:"primary"},{default:ae((()=>[Qa])),_:1})])),_:1},8,["active"])])),content:ae((()=>[se(u,null,{default:ae((()=>[se(i,null,{default:ae((()=>[se(r,{color:"orange",flipped:K(Ve),onFlip:s[1]||(s[1]=e=>Ve.value=!K(Ve)),number:K(T)(K(Ie),"card_number").model,name:K(T)(K(Ie),"card_name").model,expiry:`${K(T)(K(Ie),"date_day_expired").model}/${K(T)(K(Ie),"date_year_expired").model}`,cvc:K(T)(K(Ie),"cvv").model},null,8,["flipped","number","name","expiry","cvc"])])),_:1})])),_:1}),se("div",Ka,[se(o,{"inputs-step":K(Ie)},null,8,["inputs-step"])])])),_:1})}}});const Za=se("div",null,[se("h1",{class:"title is-4 mb-0"},"Purchases History"),se("p",null,"Edit member's purchases history")],-1),es=se("p",{class:"title is-5"},"Card List",-1),ts={class:"mt-4"},as={class:"table is-hoverable is-fullwidth"},ss=se("thead",null,[se("tr",null,[se("th",{scope:"col"},"Description"),se("th",{scope:"col"},"Created"),se("th",{scope:"col"},"Mount"),se("th",{scope:"col"},"Download"),se("th",{scope:"col"},"Status")])],-1),ls={key:0},ns=se("td",null,le("Subscription"),-1),rs=se("i",{class:"fas fa-download","aria-hidden":"true"},null,-1);var is=R({expose:[],setup(e){J((()=>n.value.payments)),J((()=>{let e=[];return S.value.forEach((t=>{e.push({membership:t.membership.name,payments:t.payments})})),e})),G((async()=>{await $(s.value.id)}));const t=e=>{};return(e,l)=>{const r=we,i=Xa,u=ve,o=a,c=ke;return K(s)?(X(),Z(c,{key:0},{"header-left":ae((()=>[Za])),"header-right":ae((()=>[])),content:ae((()=>[es,K(s).user?(X(),Z(r,{key:0,"show-option":!0,class:"mb-6",onOnMethodPayment:t,method_default:K(s).user.pm_last_four,"show-new-card":!1},null,8,["method_default"])):ee("",!0),se(i),se(o,{class:"p-"},{default:ae((()=>[se("div",ts,[se("table",as,[ss,K(n)?(X(),Z("tbody",ls,[(X(!0),Z(ne,null,re(K(n).payments,((e,t)=>(X(),Z("tr",{key:`invoice-${t}`},[ns,se("td",null,le(K(me)(e.created_at).format("MM/DD/YYYY")),1),se("td",null,le(K(q)(e.amount/100)),1),se("td",null,[se("a",{href:e.invoice_pdf,download:""},[se(u,null,{default:ae((()=>[rs])),_:1})],8,["href"])]),se("td",null,le(e.status?"Paid":"Error"),1)])))),128))])):ee("",!0)])])])),_:1})])),_:1})):ee("",!0)}}});const us=se("div",null,[se("h1",{class:"title is-4 mb-0"}," Waiver "),se("p",null,"Edit member's waiver information")],-1),os=ce(" Convert to Members "),cs={class:"columns is-multiline"},ms={class:"border-1 document_box p-4 d-flex justify-content-center radius-small"},ds={href:"234",class:"text-center"},ps=se("img",{style:{width:"70px"},src:$e,alt:""},null,-1);var vs=R({expose:[],setup(e){const t=Q([{name:"Waiver_010221.pdf",url:""},{name:"Waiver_010221.pdf",url:""}]);return(e,a)=>{const s=ve,l=ke;return X(),Z(l,null,{"header-left":ae((()=>[us])),"header-right":ae((()=>[se(s,{color:"info"},{default:ae((()=>[os])),_:1})])),content:ae((()=>[se("div",cs,[(X(!0),Z(ne,null,re(t.value,((e,t)=>(X(),Z("div",{class:"column is-2 mb-4",key:`family-${t}`},[se("div",ms,[se("a",ds,[ps,se("p",null,le(e.name),1)])])])))),128))])])),_:1})}}});const fs={key:0,class:"columns is-multiline"},ys={class:"column is-3"},bs={class:"column is-9"},hs={class:"columns is-multiline column is-12"},_s={class:"columns is-multiline column is-12"},gs={key:1,class:"columns is-multiline"},ks={class:"column is-3"},xs={class:"column is-9"},js={class:"title is-5 mb-0"},Cs={key:0},ws={class:"d-flex justify-content-between"},Ms=se("b",null,"Member since.",-1),Ps=se("b",null,"Membership Active:",-1),$s=se("b",null,"Due Date: ",-1),Ss={key:0};var Ds=R({expose:[],setup(t){const i=te();ze.value="Member Profile",pe({title:"Members"});const o=Q(!1),c=Q("personalInformation"),m=e=>{c.value=e.value};U((()=>i.query),((e,t)=>{Object.keys(e).length>0&&(y(),f())}));const d=Q("FAILED PAYMENT"),p=Q("");U((()=>i.hash),(e=>{c.value=i.hash.slice(1)})),U((()=>i.query.id),(e=>{c.value="personalInformation"}));const v=Q(!0),f=()=>{v.value=!0,setTimeout((()=>{v.value=!1}),500)};G((()=>{""!=i.hash&&(c.value=i.hash.slice(1)),We().then((e=>{O(r,"locations_id",Be.value)})),Le().then((e=>{O(u,"country_id",e.contries),O(u,"city_id",e.cities),O(u,"state_id",e.states),O(D,"city_id",e.cities),O(D,"state_id",e.states),O(D,"country_id",e.contries)})),Ye().then((e=>{O(r,"memberships_id",e.data.memberships)})),Ae().then((e=>{O(r,"discount",e.data.discounts)})),Te().then((e=>{O(r,"recurrences_id",e.data)})),qe().then((e=>{O(r,"staff_id",e.data)})),y()}));const y=async()=>{await E(i.query.id).then((e=>{for(var t in console.log("response.data",e.data),e.data)if("select_type"==t)"Individual"==e.data[t]?(T(u.value,"select_type").model=!1,T(u.value,"company_name").typeInput="hidden"):(T(u.value,"select_type").model=!0,T(u.value,"company_name").typeInput="text");else if("membership_members"==t)for(var a in e.data[t]||(d.value="Does not have a membership",p.value="Does not have a membership go to the Membership/Contract section and create a new membership and press New Membership",console.error("no posee una membresia :(")),e.data[t])"memberships_location"==a?e.data[t][a]?(T(r,"locations_id").model=e.data[t][a].companies_locations_id,Ne([e.data[t][a].companies_locations_id]).then((e=>{O(r,"diciplines",e.data)}))):console.error("no posee una locacion :("):"diciplines"==a?(T(r,"diciplines").model=[],e.data[t][a].forEach((e=>{T(r,"diciplines").model.push(e.diciplines_id)}))):null!=T(r,a)&&H(r,a,e.data[t][a]);else if("trainers"==t){let a=[];e.data[t].forEach((e=>{a.push(e.id)})),H(r,"staff_id",a)}else if("emergency"==t)for(a in e.data[t])H(C,a,e.data[t][a]);else if("guardian"==t)for(a in e.data[t])H(x,a,e.data[t][a]);else H(u,t,"leo_vet_fr"==t?1==e.data[t]:e.data[t]);v.value=!1}))};return(t,r)=>{const u=e,f=Je,y=a,b=Wt,h=_e,_=Rt,g=wa,k=Fa,x=qa,j=Ja,C=is,w=vs,M=Fe;return X(),Z(M,null,{default:ae((()=>[v.value?(X(),Z("div",fs,[se("div",ys,[se(u,{height:"700px"})]),se("div",bs,[se("div",hs,[se(u,{height:"150px"})]),se("div",_s,[se(u,{height:"420px"})])])])):ee("",!0),!v.value&&K(s)?(X(),Z("div",gs,[se("div",ks,[se(f,{category:K(i).query.category,onChangeMenu:m},null,8,["category"])]),se("div",xs,[K(l)?ee("",!0):(X(),Z(y,{key:0,class:"mb-4 d-flex justify-content-between align-items-center",color:"danger"},{default:ae((()=>[se("div",null,[se("h3",js,le(d.value),1),se("p",null,le(p.value),1),K(s).subscription?(X(),Z("small",Cs,[se("p",null,le(K(s).subscription.status),1)])):ee("",!0)])])),_:1})),o.value?(X(),Z(b,{key:1,class:"mb-4"})):ee("",!0),null!=K(s).membership_members?(X(),Z(y,{key:2,class:"mb-4"},{default:ae((()=>[se("div",ws,[se("div",null,[se("p",null,[se("b",null,"Member #"+le(K(s).id),1)]),se("p",null,[se("small",null,[Ms,ce(" "+le(K(me)(K(s).created_at).format("ddd - DD MMM YYYY")),1)])]),se("p",null,[Ps,ce(" "+le(K(n).membership.name),1)]),se("p",null,[$s,ce(" "+le(K(me)(K(s).subscription.proxima_factura).format("ddd - DD MMM YYYY")),1)])]),K(s).subscription?(X(),Z("div",Ss,[se(h,{color:"info",label:K(s).subscription.status,rounded:""},null,8,["label"])])):ee("",!0)])])),_:1})):ee("",!0),ie(se(_,{category:K(i).query.category},null,8,["category"]),[[ue,"personalInformation"==c.value]]),ie(se(g,null,null,512),[[ue,"memberMembership"==c.value]]),ie(se(k,null,null,512),[[ue,"memberFamily"==c.value]]),ie(se(x,null,null,512),[[ue,"memberEmergency"==c.value]]),ie(se(j,null,null,512),[[ue,"memberCheckins"==c.value]]),ie(se(C,null,null,512),[[ue,"memberPurchases"==c.value]]),ie(se(w,null,null,512),[[ue,"memberWaiver"==c.value]])])])):ee("",!0)])),_:1})}}});export default Ds;
