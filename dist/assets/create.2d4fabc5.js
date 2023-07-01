import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.20e31a61.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.f29df460.js";import{_ as l}from"./inputsLayaut.vue_vue&type=style&index=0&lang.8eeea7dc.js";import{_ as a}from"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.c78b8053.js";import{_ as s}from"./V-Control.4e9f0bab.js";import{_ as i}from"./V-Field.vue_vue&type=script&setup=true&lang.6bc9f6e9.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.9a09b9d1.js";import{_ as o}from"./Presupuesto.vue_vue&type=script&setup=true&lang.8fe9fce4.js";import{_ as n}from"./SearchBar.vue_vue&type=style&index=0&lang.0453179e.js";import{d as c,e as r,i as d,f as p,s as m,j as v,w as f,o as y,_,b}from"./subscription-method-stripe-checkout.vue_vue&type=script&setup=true&lang.c4cc63dd.js";import{_ as h}from"./V-Tag.vue_vue&type=script&setup=true&lang.89a8bcfd.js";import{_ as g}from"./V-Modal.vue_vue&type=script&setup=true&lang.51c86d52.js";import{d as j,u as x,r as k,A as w,w as S,b as C,h as z,i as P,l as V,k as O,R as T,L as N,W as I,X as J,K as A,S as L,F as Y,H as B,O as D,o as M,P as U,ab as $,U as E,G as H}from"./vendor.6c78dc37.js";import{s as q,p as F,b as R,c as G,d as K,e as W,f as X}from"./ManualPayment.5b7f7014.js";import{c as Q}from"./Companies.b586ed9b.js";import{n as Z,m as ee,a as te,g as le,e as ae,s as se}from"./index.a01cdf46.js";import{_ as ie}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.27adbf0b.js";import{p as ue}from"./sidebarLayoutState.b20c1332.js";import{e as oe,c as ne,s as ce,d as re}from"./config.2b27774b.js";import{i as de}from"./Members.4056a12c.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.22cd5f87.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.740c377e.js";import"./V-Placeload.35780b71.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.bf72322e.js";import"./Discounts.fd07ed15.js";import"./MemberCards.73525e7e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.a448915e.js";import"./useDropdown.06fe74bc.js";import"./V-Dropdown.57d0cfaf.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.2dced437.js";import"./activePanelState.4fc6f3e5.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.d70704d6.js";import"./video.b57e71ec.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.4b9b5c72.js";import"./darkModeState.dc4b3020.js";import"./AnimatedLogo.8e6d8d96.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.40e826fb.js";import"./V-Block.vue_vue&type=script&setup=true&lang.8fe32076.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.bc7fc596.js";import"./userPopovers.f4b9fc60.js";import"./Diciplines.478c92d6.js";import"./Memberships.33406660.js";const pe={class:"d-flex justify-content-between align-items-start"},me=V("div",null,[V("p",{class:"title is-3"},[V("i",{class:"fas fa-mobile","aria-hidden":"true"})]),V("p",{class:"title is-5"},"Terminal")],-1),ve={class:"title is-6"},fe={key:0},ye={key:0,class:"mt-4 mx-2"},_e={class:"column is-8"},be=V("p",{class:"title is-1"},[V("i",{class:"lnir lnir-postcard","aria-hidden":"true"})],-1),he={class:"title is-5 mb-0"},ge={style:{"font-size":"10px"},class:"is-7 mb-0"},je={style:{"font-size":"10px"},class:"is-7 mb-0"},xe={style:{"font-size":"10px"},class:"is-7 mb-0"},ke={style:{"font-size":"10px"},class:"is-7 mb-0"},we={style:{"font-size":"10px"},class:"is-7 mb-0"},Se={key:0},Ce=V("p",{class:"title is-7 text-capitalize m-0"},"retry",-1),ze=V("p",{class:"title is-6"},[V("i",{class:"lnil lnil-reload"})],-1),Pe={class:"column is-4"},Ve=V("div",null,[V("p",{class:"title is-6 mb-0"},"Terminal status")],-1),Oe=V("p",{class:"title is-5"},[V("i",{class:"lnil lnil-reload"})],-1),Te=V("div",null,[V("p",{class:"title is-6 mb-0"},"Cancel payment")],-1),Ne=V("p",{class:"title is-5"},[V("i",{class:"lnil lnil-trash-can"})],-1),Ie={key:0,class:"column is-12"},Je=V("div",null,[V("p",{class:"title is-6 mb-0"},"Clean and Close")],-1),Ae={key:0},Le=V("p",{class:"title is-5"},[V("i",{class:"lnil lnil-checkmark-circle"})],-1);var Ye=j({expose:[],props:{total:{type:Number,required:!0},define_status:{type:Boolean,default:!0}},emits:["onPayment"],setup(l,{emit:a}){const s=l,{cookies:i}=x(),u=k(!1),o=k([]),n=()=>{u.value=!0;let e=Q.value.locations;if(e.length&&i.get("locations_id")){let t=e.find((e=>e.id==i.get("locations_id")));if(null!=t){let e=t.terminales;e.length&&(o.value=e)}}0==o.value&&Z.error("No terminals found at this location")},c=w(JSON.parse(JSON.stringify({id:null,label:"",status:!1,amount:0}))),r=k(!1);S((()=>u.value),(e=>{c.id=null,c.label="",c.status=!1,c.amount=0,r.value=!1,y.value=!1,d.value=!1,j.value=0,q.value=JSON.parse(JSON.stringify(R)),F.value=JSON.parse(JSON.stringify(G))}));const d=k(!1),p=k(10);S((()=>q.value.status),(e=>{d.value&&("succeeded"==e?(Z.success("Payment Success"),u.value=!1,j.value<=p.value&&f()):"failed"==e?Z.error(q.value.failure_message):"in_progress"==e&&Z.success("Payment in progress")),d.value||"succeeded"==e&&D()}));const m=C((()=>{let e={status:"",message:"",color:""};return e.status=q.value.status,"succeeded"==e.status&&(e.color="success"),"failed"==e.status&&(e.color="danger"),"in_progress"==e.status&&(e.color="info"),e})),v=()=>{"in_progress"!=q.value.status?"succeeded"!=q.value.status?null!=c.id?(h(),r.value=!0,K(c).then((e=>{r.value=!1,Z.success(e.data.message)})).catch((e=>{r.value=!1}))):console.log("alert. no selecciono el terminal de pago"):Z.error("Payment processed"):Z.error("Terminal busy")},f=()=>{a("onPayment",{amount:s.total,payment_type_id:5})},y=k(!1),_=C((()=>null!=c.id)),b=()=>{_.value||(u.value=!1)},h=()=>{new Pusher("2cd5b586808b2f41f8e6",{cluster:"us2"}).subscribe("terminal_channel").bind("terminal_event",(function(e){d.value=!0,null==e.terminal?q.value=JSON.parse(JSON.stringify(R)):q.value=e.terminal,null==e.payment_intent?F.value=JSON.parse(JSON.stringify(G)):F.value=e.payment_intent}))},j=k(0),D=()=>{j.value=0;let e=setInterval((()=>{j.value++,j.value==p.value&&clearInterval(e)}),1e3)};return(l,i)=>{const d=e,f=t,_=g;return z(),P(T,null,[V(d,{onClick:n,color:s.define_status?"info":void 0,class:"btn-card w-100 justify-content-center"},{default:O((()=>[V("div",pe,[me,V("p",ve,[N(l.$slots,"righttop")])])])),_:3},8,["color"]),V(_,{title:"",open:u.value,actions:"center",size:"big",noclose:"",onClose:b},{content:O((()=>[I(V("div",null,[N(l.$slots,"modalprev")],512),[[J,!s.define_status]]),0==o.value.length?(z(),P("p",fe,"'No terminals found at this location'")):A("",!0),I(V("div",null,[o.value.length?(z(),P("div",ye,[V(f,{size:"small",active:r.value},{default:O((()=>[(z(!0),P(T,null,L(o.value,((e,t)=>(z(),P(d,{key:`terminal-${t}`,class:"columns is-multiline mb-4"},{default:O((()=>[V("div",_e,[V(d,{class:"p-4 btn-card d-flex justify-content-between",color:Y(c).id==e.id?Y(m).color:void 0,onClick:t=>(e=>{c.id=e.id,c.label=e.label,c.status=e.status,c.amount=s.total,v()})(e)},{default:O((()=>[V("div",null,[be,V("p",he,B(e.label),1),V("p",null,"Status: "+B(e.status),1)]),V("div",null,[V("p",ge," ID: "+B(Y(F).id),1),V("p",je," Amount: "+B(Y(ee)(Y(F).amount/100)),1),V("p",xe," Date: "+B(Y(F).created),1),V("p",ke," PI. Status: "+B(Y(F).status),1),V("p",we," Status: "+B(Y(q).status),1),"failed"==Y(q).status?(z(),P("div",Se,[V(d,{class:"\n                          d-flex\n                          justify-content-between\n                          mt-4\n                          p-2\n                          align-items-center\n                        "},{default:O((()=>[Ce,ze])),_:1})])):A("",!0)])])),_:2},1032,["color","onClick"])]),V("div",Pe,[V(f,{size:"small",active:y.value},{default:O((()=>[V(d,{color:"warning",outlined:"",onClick:t=>(e=>{"succeeded"!=q.value.status&&(y.value=!0,W({id:e.id}).then((()=>{y.value=!1})).catch((()=>{y.value=!1})))})(e),class:"d-flex justify-content-between mb-4"},{default:O((()=>[Ve,Oe])),_:2},1032,["onClick"])])),_:2},1032,["active"]),V(f,{size:"small",active:y.value},{default:O((()=>[V(d,{color:"danger",outlined:"",onClick:t=>(e=>{"succeeded"!=q.value.status&&(y.value=!0,X({id:e.id,payment_type_id:F.value.id}).then((()=>{u.value=!1,y.value=!1})).catch((()=>{y.value=!1})))})(e),class:"d-flex justify-content-between"},{default:O((()=>[Te,Ne])),_:2},1032,["onClick"])])),_:2},1032,["active"])]),"succeeded"==Y(q).status?(z(),P("div",Ie,[V(f,{size:"small",active:y.value},{default:O((()=>[V(d,{color:j.value==p.value?"success":void 0,outlined:"",onClick:t=>(e=>{j.value==p.value&&(X({id:e.id,payment_type_id:null}),u.value=!1,y.value=!1,a("onPayment",{amount:s.total,payment_type_id:5}))})(e),class:"d-flex justify-content-between"},{default:O((()=>[Je,j.value<p.value?(z(),P("p",Ae,"Loading ... "+B(j.value),1)):A("",!0),Le])),_:2},1032,["color","onClick"])])),_:2},1032,["active"])])):A("",!0)])),_:2},1024)))),128))])),_:1},8,["active"])])):A("",!0)],512),[[J,s.define_status]])])),action:O((()=>[])),_:1},8,["open"])],64)}}});const Be={class:"columns is-multiline"},De={class:"column is-9"},Me=V("h1",{class:"title is-4"},"1. Select a membership",-1),Ue={class:"columns is-multiline"},$e={class:"title is-4"},Ee={class:"column is-3"},He={class:"title is-5 text-left mt-2"},qe={key:0},Fe={key:1},Re={key:0,class:"column is-12"},Ge=V("h1",{class:"title is-4"},"2. Approve the budget",-1),Ke=H("Accept and continue "),We={key:1,class:"column is-12"},Xe=V("h1",{class:"title is-4"}," 3. Enter the member's email. ",-1),Qe={class:"columns is-multiline"},Ze={class:"column is-3"},et=V("p",{class:"title is-6 mb-1"},[V("b",null,"Total")],-1),tt={class:"title is-3 mb-0"},lt={class:"is-3 column"},at=V("p",{class:"title is-6"}," You must load a card to continue. If you do not have a card, define the paymentType option as cash ",-1),st={class:"column is-3"},it=V("p",{class:"title is-6"}," You must load a card to continue. If you do not have a card, define the paymentType option as cash ",-1);var ut=j({expose:[],setup(g){ue.value="Subscriptions",D({title:"Subscriptions"}),U(),$();const j=k([]),x=k(!0),N=k(!1),J=k(null),H=k(null);w({number:5,status:!1,time:5e3});const q=C((()=>{const e=j.value.find((e=>e.id==m.memberships_id));return null==e?void 0:e.amounts.filter((e=>e.is_recurrence==x.value&&null!=e.recurrencia))})),F=C((()=>{for(var e in m)null!=le(d.value,e)&&(m[e]=le(d.value,e).model);return m}));S((()=>m.memberships_id),(e=>{m.recurrences_id=null,p.value=null,N.value=!1})),M((()=>{Q(),c().then((e=>{j.value=e.data})),r(1,"membership").then((e=>{te(d,"discount",e.data.discounts)})),le(d,"payment_type_id").model=3,oe().then((e=>{te(de,"city_id",ne.value),te(de,"state_id",ce.value),te(de,"country_id",re.value),le(de.value,"country_id").model=34}))}));const R=()=>{N.value=!0,setTimeout((()=>{window.scrollTo(0,window.scrollY+500)}),300)},G=()=>{p.value=null,N.value=!1,K.value=!0,v(F.value).then((e=>{p.value=e.data,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight),K.value=!1}),300)})).catch((e=>{K.value=!1}))},K=k(!1),W=async e=>{H.value?(K.value=!0,m.email=H.value,m.subscription_payment_type_id=le(d,"payment_type_id").model,Object.assign(m,e),console.log("solicitud",m),await f(m).then((e=>{window.location.href=e.data.url})).catch((e=>{Z.error("Error"),K.value=!1}))):Z.error("Email is required")},X=()=>{setTimeout((()=>{if(J.value)for(var e in console.log(J.value),J.value)"photo"!=e&&se(de,e,J.value[e]);else se(de,"email",H.value);let t=window.scrollY+window.scrollY/4;window.scrollTo(0,t)}),300)},Q=async()=>{ae(d.value),ae(de.value),p.value=null,m.memberships_id=null,m.recurrences_id=null,m.is_initiation_fee=!1,m.is_card_price=!1,m.discount=null,m.is_last_month=!1,m.prorrateo=!0,m.schedules="",m.leo_vet_fr=!1,m.multigym=!1},pe=C((()=>le(d,"payment_type_id").model));C((()=>!le(de.value,"category").model));const me=k(!1),ve=C((()=>!(3!=pe.value||!me.value)||1==pe.value)),fe=(e=null)=>{e&&e.payment_method_id&&(me.value=!0)};return(c,r)=>{const v=e,f=t,g=l,k=a,w=s,S=i,C=u,D=o,M=n,U=y,$=h,F=_,Q=b,Z=Ye,te=ie,le=E("tooltip");return z(),P(te,null,{default:O((()=>[V("div",Be,[V("div",De,[Me,V(v,{class:"mb-4"},{default:O((()=>[V(f,{size:"large",active:!j.value.length},{default:O((()=>[V("div",Ue,[(z(!0),P(T,null,L(j.value,((e,t)=>(z(),P("div",{key:`membership-${t}`,class:"column is-4 btn btn-card",onClick:t=>Y(m).memberships_id=e.id},[V(v,{color:Y(m).memberships_id==e.id?"primary":void 0,class:"h-100"},{default:O((()=>[V("div",null,[V("h1",$e,B(e.name),1)])])),_:2},1032,["color"])],8,["onClick"])))),128))])])),_:1},8,["active"])])),_:1}),V(v,{class:""},{default:O((()=>[V(g,{"inputs-step":Y(d)},null,8,["inputs-step"])])),_:1})]),V("div",Ee,[V(v,{class:"h-100 d-flex flex-column justify-content-between"},{default:O((()=>[V("div",null,[V(S,null,{default:O((()=>[V(w,null,{default:O((()=>[V(k,{modelValue:x.value,"onUpdate:modelValue":r[1]||(r[1]=e=>x.value=e),label:"Recurring Subscription",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),(z(!0),P(T,null,L(Y(q),((e,t)=>(z(),P("div",{key:`membership-precios-${t}`,class:"btn btn-card",onClick:t=>Y(m).recurrences_id=e.id},[V(v,{color:Y(m).recurrences_id==e.id?"primary":void 0,class:"mb-3 py-4"},{default:O((()=>[V("p",null,B(e.recurrencia.descriptions),1),V("p",He,B(Y(ee)(e.amount)),1)])),_:2},1032,["color"])],8,["onClick"])))),128))]),V("div",null,[V(f,{size:"large",active:K.value},{default:O((()=>[V(C,{onClick:G,color:Y(p)?void 0:"primary",class:"d-flex justify-content-center mt-6 py-5 w-100",style:{"text-align":"center","text-transform":"uppercase","font-size":"20px","font-weight":"900"}},{default:O((()=>[Y(p)?(z(),P("span",Fe," restart")):(z(),P("span",qe,"start subscription"))])),_:1},8,["color"])])),_:1},8,["active"])])])),_:1})]),Y(p)?(z(),P("div",Re,[Ge,V(v,null,{default:O((()=>[V(D,{presupuesto:Y(p)},null,8,["presupuesto"]),N.value?A("",!0):(z(),P(C,{key:0,onClick:R,color:"primary",class:"d-flex justify-content-center py-5 px-6 ml-auto",style:{"text-align":"center","text-transform":"uppercase","font-size":"20px","font-weight":"900"}},{default:O((()=>[Ke])),_:1}))])),_:1})])):A("",!0),Y(p)&&N.value?(z(),P("div",We,[Xe,V(v,{style:{"margin-bottom":"24px"}},{default:O((()=>[V(M,{dato:"email",valor:H.value,"onUpdate:valor":r[2]||(r[2]=e=>H.value=e),modelValue:J.value,"onUpdate:modelValue":r[3]||(r[3]=e=>J.value=e),"not-payment-methods":!0,"not-search":!0,onOnSubmit:X},null,8,["valor","modelValue"])])),_:1}),V(v,{style:{"margin-bottom":"24px"}},{default:O((()=>[V("div",Qe,[V("div",Ze,[V(f,{size:"small",class:"h-100",active:K.value},{default:O((()=>[V(v,{class:"mb-4 h-100"},{default:O((()=>[V("div",null,[et,V("p",tt,B(Y(ee)(Y(p).total)),1)])])),_:1})])),_:1},8,["active"])]),V("div",lt,[V(f,{size:"small",active:K.value},{default:O((()=>[V(U,{total:Y(p).total,onOnPayment:W},null,8,["total"])])),_:1},8,["active"])]),V("div",{class:["column",(Y(pe),"is-3")]},[V(f,{size:"small",active:K.value},{default:O((()=>[V(Q,{total:Y(p).total,onOnPayment:W,define_status:Y(ve)},{righttop:O((()=>[3!=Y(pe)||me.value?A("",!0):I((z(),P($,{key:0,color:"solid",label:"?"},null,512)),[[le,"You must load a card to continue. If you do not have a card, define the paymentType option as cash "]])])),modalprev:O((()=>[at,V(f,{size:"small",class:"h-100 mr-0",active:K.value},{default:O((()=>[V(F,{total:20,card:!1,user:{email:H.value,id:null},"new-user":!0,"text-card":"Cards (+)",outline:!0,onOnPayment:fe},{righttop:O((()=>[I(V($,{color:"solid",label:"?"},null,512),[[le,"This option does not generate any charge to the card"]])])),_:1},8,["user","text-card"])])),_:1},8,["active"])])),_:1},8,["total","define_status"])])),_:1},8,["active"])],2),V("div",st,[V(f,{size:"small",active:K.value},{default:O((()=>[V(Z,{total:Y(p).total,onOnPayment:W,define_status:!(3==Y(pe)&&!me.value)},{righttop:O((()=>[me.value?A("",!0):I((z(),P($,{key:0,color:"solid",label:"?"},null,512)),[[le,"You must load a card to continue. If you do not have a card, define the paymentType option as cash "]])])),modalprev:O((()=>[it,V(f,{size:"small",class:"h-100 mr-0",active:K.value},{default:O((()=>[V(F,{total:20,card:!1,user:{email:H.value,id:null},"new-user":!0,"text-card":"Cards (+)",outline:!0,onOnPayment:fe},{righttop:O((()=>[I(V($,{color:"solid",label:"?"},null,512),[[le,"This option does not generate any charge to the card"]])])),_:1},8,["user","text-card"])])),_:1},8,["active"])])),_:1},8,["total","define_status"])])),_:1},8,["active"])])])])),_:1})])):A("",!0)])])),_:1})}}});export default ut;