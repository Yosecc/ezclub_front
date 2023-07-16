import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import{_ as a}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{s as l,_ as s}from"./MemberCards.2805a0da.js";import{_ as n}from"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import{d as i,r as u,i as o,j as r,k as c,I as d,l as m,S as p,H as f,L as v,G as y,b as _,A as b,F as g,W as h,X as C,U as k,_ as x,u as j,w as S}from"./vendor.84e48f7c.js";import{n as N,m as w,A as O}from"./index.5855fd6a.js";import{_ as J}from"./V-Control.b8a16a92.js";import{_ as P}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as z}from"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.12764c4e.js";import{c as V}from"./Companies.679555f4.js";const B={class:"d-flex justify-content-between align-items-start"},q=m("p",{class:"title is-3"},[m("i",{class:"fas fa-credit-card","aria-hidden":"true"})],-1),T={class:"title is-5"},$={key:0,class:"title is-6"},I=m("p",null,[m("b",null,"Cards")],-1),F={key:0,class:"pb-3 mb-5"},A=y(" Sync Cards "),L=y("Confirm");var D=i({expose:[],props:{total:{type:Number,required:!0},user:{type:Object,required:!0},card:{type:Boolean,default:!1},textCard:{type:String,default:"Debit Automatic"},newUser:{type:Boolean,dafutl:!1},outline:{type:Boolean,dafutl:!1}},emits:["onPayment"],setup(i,{emit:y}){const _=i,b=u(!1),g=()=>{null!=x.value?(b.value=!1,y("onPayment",{amount:_.total,payment_type_id:3,payment_method_id:x.value})):N.error("Select card")},h=u(!1),C=u(!0),k=()=>{l(_.user.id).then((e=>{C.value=!1,setTimeout((()=>{C.value=!0}),100)}))},x=u(null);return(l,u)=>{const y=e,j=t,S=a,N=s,w=n;return o(),r(p,null,[_.card?(o(),r(j,{key:1,class:"h-100",size:"small",active:l.isLoaderActive},{default:c((()=>[m(y,{color:"success",outlined:"",onClick:u[2]||(u[2]=e=>b.value=!0),class:"\r\n        mr-4\r\n        btn-card\r\n        text-center\r\n        px-2\r\n        h-100\r\n        d-flex\r\n        align-items-center\r\n        justify-content-center\r\n      ",style:{"font-size":"14px"}},{default:c((()=>[I,v(l.$slots,"default")])),_:3})])),_:1},8,["active"])):(o(),r(y,{key:0,onClick:u[1]||(u[1]=e=>b.value=!0),color:"success",class:"mx-2 btn-card w-100 justify-content-center h-100",outlined:_.outline},{default:c((()=>[m("div",B,[m("div",null,[q,m("p",T,f(_.textCard),1)]),(o(),r("p",$,[v(l.$slots,"righttop"),d(' <i class="fas fa-check" aria-hidden="true"></i> ')]))])])),_:3},8,["outlined"])),d("  "),m(w,{title:"",size:"big",open:b.value,actions:"center",onClose:u[4]||(u[4]=e=>b.value=!1)},{content:c((()=>[i.newUser?d("v-if",!0):(o(),r("div",F,[m(j,{size:"large",active:h.value},{default:c((()=>[m(S,{color:"undefined",onClick:k,class:"d-flex justify-content-center",raised:""},{default:c((()=>[A])),_:1})])),_:1},8,["active"])])),_.user&&b.value&&C.value?(o(),r(N,{key:1,"show-option":!0,class:"mb-6",modelValue:x.value,"onUpdate:modelValue":u[3]||(u[3]=e=>x.value=e),method_default:_.user.pm_last_four,"show-new-card":!0,user:_.user,"on-new-card-u-r-l":"v2/stripe/setup","add-card-stripe-u-r-l":"v2/stripe/addCard",v2:!0,actions:[]},null,8,["modelValue","method_default","user"])):d("v-if",!0)])),action:c((()=>[m(S,{color:"success",onClick:g,disabled:!x.value,class:"d-flex justify-content-center",raised:""},{default:c((()=>[L])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const U={class:"d-flex justify-content-between align-items-start"},E=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-money-bill-wave","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Cash")],-1),M={class:"title is-6"},R={class:"d-flex mb-4 justify-content-between"},G={class:"title is-5"},H=y(" Total: "),W={class:"title is-5"},X=y(" Cash Total: "),K={class:"\r\n            d-flex\r\n            justify-content-center\r\n            align-items-center\r\n            flex-column\r\n            mb-4\r\n          "},Q=m("p",{class:"title is-5 mb-4"},"Change Back:",-1),Y={class:"title is-3 mb-0"},Z={class:"d-flex justify-content-center flex-wrap mb-4"},ee=m("div",{class:"w-100"},null,-1),te={class:"d-flex justify-content-center"},ae=y("Reset"),le=y("Confirm"),se=y("Confirm");var ne=i({expose:[],props:{total:{type:Number,required:!0},define_status:{type:Boolean,default:!0},email:{type:String,default:""}},emits:["onPayment"],setup(t,{emit:l}){const s=t,i=u(!1),j=u(0),S=_((()=>{const e=parseFloat(j.value)-parseFloat(s.total);return e>0?e:0})),O=()=>{i.value=!1,l("onPayment",{cash:j.value,changeBack:S.value,amount:s.total,payment_type_id:1})},V=()=>{i.value=!0,B.modal=!1},B=b({modal:!1,confirm:!1,email:""}),q=()=>{""!=s.email&&null!=s.email?(B.email=s.email,B.modal=!0):N.error("Email is required")};return(l,u)=>{const _=e,b=a,N=J,T=P,$=n,I=z;return o(),r(p,null,[m(_,{onClick:q,color:s.define_status?"warning":void 0,class:"btn-card w-100 justify-content-center"},{default:c((()=>[m("div",U,[E,m("p",M,[v(l.$slots,"righttop"),d(' <i class="fas fa-check" aria-hidden="true"></i> ')])])])),_:3},8,["color"]),m($,{title:"",open:i.value,actions:"center",onClose:u[4]||(u[4]=e=>i.value=!1)},{content:c((()=>[h(m("div",null,[v(l.$slots,"modalprev")],512),[[C,!s.define_status]]),h(m("div",null,[m("div",R,[m("p",G,[H,m("b",null,f(g(w)(t.total)),1)]),m("p",W,[X,m("b",null,f(g(w)(j.value)),1)])]),m("div",K,[Q,m("p",Y,[m("b",null,f(g(w)(g(S))),1)])]),m("div",Z,[m(b,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:u[1]||(u[1]=e=>j.value=t.total)},{default:c((()=>[y(" Full Payment "+f(g(w)(t.total)),1)])),_:1}),ee,(o(),r(p,null,k([5,10,20,50,100],((e,t)=>m(b,{key:`calculato-${t}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t=>(e=>{j.value=parseFloat(j.value)+parseFloat(e)})(e)},{default:c((()=>[y(" $"+f(e),1)])),_:2},1032,["onClick"]))),64))]),m("div",te,[m(T,null,{default:c((()=>[m(N,null,{default:c((()=>[h(m("input",{"onUpdate:modelValue":u[2]||(u[2]=e=>j.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[x,j.value]])])),_:1})])),_:1})])],512),[[C,s.define_status]])])),action:c((()=>[m(b,{onClick:u[3]||(u[3]=e=>j.value=0),class:"d-flex justify-content-center",raised:""},{default:c((()=>[ae])),_:1}),m(b,{color:"success",onClick:O,disabled:t.total>j.value,class:"d-flex justify-content-center",raised:""},{default:c((()=>[le])),_:1},8,["disabled"])])),_:1},8,["open"]),m($,{open:g(B).modal,actions:"center",onClose:u[5]||(u[5]=e=>g(B).modal=!1)},{content:c((()=>[m(I,{title:g(B).email,subtitle:"Please confirm the email before continuing"},null,8,["title"])])),action:c((()=>[m(b,{onClick:V,color:"primary",raised:""},{default:c((()=>[se])),_:1})])),_:1},8,["open"])],64)}}});const ie=u([{typeInput:"text",name:"description",placeholder:"Description",model:"",class:"is-12",isLabel:!0,required:!0},{typeInput:"text",name:"amount",placeholder:"Amount",model:"",class:"is-12",isLabel:!0,required:!0}]),ue={failure_code:null,failure_message:null,process_payment_intent:{payment_intent:""},status:"",type:""},oe={amount:0,id:"",created:"",status:""},re=u(JSON.parse(JSON.stringify(ue))),ce=u(JSON.parse(JSON.stringify(oe))),de=async(e={})=>await O.post("make-manual-payment",e),me=async e=>{const t=await O.post("v2/stripe/stopTerminal",e);return re.value=JSON.parse(JSON.stringify(ue)),ce.value=JSON.parse(JSON.stringify(oe)),t},pe={class:"d-flex justify-content-between align-items-start"},fe=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-mobile","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Terminal")],-1),ve={class:"title is-6"},ye={key:0},_e={key:0,class:"mt-4 mx-2"},be={class:"column is-8"},ge=m("p",{class:"title is-1"},[m("i",{class:"lnir lnir-postcard","aria-hidden":"true"})],-1),he={class:"title is-5 mb-0"},Ce={style:{"font-size":"10px"},class:"is-7 mb-0"},ke={style:{"font-size":"10px"},class:"is-7 mb-0"},xe={style:{"font-size":"10px"},class:"is-7 mb-0"},je={style:{"font-size":"10px"},class:"is-7 mb-0"},Se={style:{"font-size":"10px"},class:"is-7 mb-0"},Ne={key:0},we=m("p",{class:"title is-7 text-capitalize m-0"},"retry",-1),Oe=m("p",{class:"title is-6"},[m("i",{class:"lnil lnil-reload"})],-1),Je={class:"column is-4"},Pe=m("div",null,[m("p",{class:"title is-6 mb-0"},"Terminal status")],-1),ze=m("p",{class:"title is-5"},[m("i",{class:"lnil lnil-reload"})],-1),Ve=m("div",null,[m("p",{class:"title is-6 mb-0"},"Cancel payment")],-1),Be=m("p",{class:"title is-5"},[m("i",{class:"lnil lnil-trash-can"})],-1),qe={key:0,class:"column is-12"},Te=m("div",null,[m("p",{class:"title is-6 mb-0"},"Clean and Close")],-1),$e={key:0},Ie=m("p",{class:"title is-5"},[m("i",{class:"lnil lnil-checkmark-circle"})],-1),Fe=y("Confirm");var Ae=i({expose:[],props:{total:{type:Number,required:!0},define_status:{type:Boolean,default:!0},email:{type:String,default:""}},emits:["onPayment"],setup(l,{emit:s}){const i=l,{cookies:y}=j(),x=u(!1),J=u([]),P=()=>{x.value=!0,R.modal=!1;let e=V.value.locations;if(e.length&&y.get("locations_id")){let t=e.find((e=>e.id==y.get("locations_id")));if(null!=t){let e=t.terminales;e.length&&(J.value=e)}}0==J.value&&N.error("No terminals found at this location")},B=b(JSON.parse(JSON.stringify({id:null,label:"",status:!1,amount:0}))),q=u(!1);S((()=>x.value),(e=>{B.id=null,B.label="",B.status=!1,B.amount=0,q.value=!1,L.value=!1,T.value=!1,H.value=0,re.value=JSON.parse(JSON.stringify(ue)),ce.value=JSON.parse(JSON.stringify(oe))}));const T=u(!1),$=u(10);S((()=>re.value.status),(e=>{T.value&&("succeeded"==e?(N.success("Payment Success"),x.value=!1,H.value<=$.value&&A()):"failed"==e?N.error(re.value.failure_message):"in_progress"==e&&N.success("Payment in progress")),T.value||"succeeded"==e&&W()}));const I=_((()=>{let e={status:"",message:"",color:""};return e.status=re.value.status,"succeeded"==e.status&&(e.color="success"),"failed"==e.status&&(e.color="danger"),"in_progress"==e.status&&(e.color="info"),e})),F=()=>{"in_progress"!=re.value.status?"succeeded"!=re.value.status?null!=B.id?(M(),q.value=!0,(async e=>{const t=await O.post("v2/stripe/paymentIntentTerminal",e);return null==t.data.terminal?re.value=JSON.parse(JSON.stringify(ue)):re.value=t.data.terminal,null==t.data.payment_intent?ce.value=JSON.parse(JSON.stringify(oe)):ce.value=t.data.payment_intent,t})(B).then((e=>{q.value=!1,N.success(e.data.message)})).catch((e=>{q.value=!1}))):console.log("alert. no selecciono el terminal de pago"):N.error("Payment processed"):N.error("Terminal busy")},A=()=>{s("onPayment",{amount:i.total,payment_type_id:5})},L=u(!1),D=e=>{"succeeded"!=re.value.status&&(L.value=!0,(async e=>{const t=await O.post("v2/stripe/consultaTerminal",e);return null==t.data.terminal?re.value=JSON.parse(JSON.stringify(ue)):re.value=t.data.terminal,null==t.data.payment_intent?ce.value=JSON.parse(JSON.stringify(oe)):ce.value=t.data.payment_intent,t})({id:e.id}).then((()=>{L.value=!1})).catch((()=>{L.value=!1})))},U=_((()=>null!=B.id)),E=()=>{U.value||(x.value=!1)},M=()=>{new Pusher("2cd5b586808b2f41f8e6",{cluster:"us2"}).subscribe("terminal_channel").bind("terminal_event",(function(e){T.value=!0,null==e.terminal?re.value=JSON.parse(JSON.stringify(ue)):re.value=e.terminal,null==e.payment_intent?ce.value=JSON.parse(JSON.stringify(oe)):ce.value=e.payment_intent}))},R=b({modal:!1,confirm:!1,email:""}),G=()=>{""!=i.email&&null!=i.email?(R.email=i.email,R.modal=!0):N.error("Email is required")},H=u(0),W=()=>{H.value=0;let e=setInterval((()=>{H.value++,H.value==$.value&&clearInterval(e)}),1e3)};return(l,u)=>{const y=e,_=t,b=n,j=z,S=a;return o(),r(p,null,[m(y,{onClick:G,color:i.define_status?"info":void 0,class:"btn-card w-100 justify-content-center"},{default:c((()=>[m("div",pe,[fe,m("p",ve,[v(l.$slots,"righttop"),d(' <i class="fas fa-check" aria-hidden="true"></i> ')])])])),_:3},8,["color"]),m(b,{title:"",open:x.value,actions:"center",size:"big",noclose:"",onClose:E},{content:c((()=>[h(m("div",null,[v(l.$slots,"modalprev")],512),[[C,!i.define_status]]),0==J.value.length?(o(),r("p",ye,"'No terminals found at this location'")):d("v-if",!0),h(m("div",null,[J.value.length?(o(),r("div",_e,[m(_,{size:"small",active:q.value},{default:c((()=>[(o(!0),r(p,null,k(J.value,((e,t)=>(o(),r(y,{key:`terminal-${t}`,class:"columns is-multiline mb-4"},{default:c((()=>[d(" <p>{{ terminal }}</p> "),m("div",be,[m(y,{class:"p-4 btn-card d-flex justify-content-between",color:g(B).id==e.id?g(I).color:void 0,onClick:t=>(e=>{B.id=e.id,B.label=e.label,B.status=e.status,B.amount=i.total,F()})(e)},{default:c((()=>[m("div",null,[ge,m("p",he,f(e.label),1),m("p",null,"Status: "+f(e.status),1)]),m("div",null,[m("p",Ce," ID: "+f(g(ce).id),1),m("p",ke," Amount: "+f(g(w)(g(ce).amount/100)),1),m("p",xe," Date: "+f(g(ce).created),1),m("p",je," PI. Status: "+f(g(ce).status),1),m("p",Se," Status: "+f(g(re).status),1),"failed"==g(re).status?(o(),r("div",Ne,[m(y,{class:"\r\n                          d-flex\r\n                          justify-content-between\r\n                          mt-4\r\n                          p-2\r\n                          align-items-center\r\n                        "},{default:c((()=>[we,Oe])),_:1})])):d("v-if",!0)])])),_:2},1032,["color","onClick"])]),m("div",Je,[m(_,{size:"small",active:L.value},{default:c((()=>[m(y,{color:"warning",outlined:"",onClick:t=>D(e),class:"d-flex justify-content-between mb-4"},{default:c((()=>[Pe,ze])),_:2},1032,["onClick"])])),_:2},1032,["active"]),m(_,{size:"small",active:L.value},{default:c((()=>[m(y,{color:"danger",outlined:"",onClick:t=>(e=>{"succeeded"!=re.value.status&&(L.value=!0,me({id:e.id,payment_type_id:ce.value.id}).then((()=>{x.value=!1,L.value=!1})).catch((()=>{L.value=!1})))})(e),class:"d-flex justify-content-between"},{default:c((()=>[Ve,Be])),_:2},1032,["onClick"])])),_:2},1032,["active"])]),"succeeded"==g(re).status?(o(),r("div",qe,[m(_,{size:"small",active:L.value},{default:c((()=>[m(y,{color:H.value==$.value?"success":void 0,outlined:"",onClick:t=>(e=>{H.value==$.value&&(me({id:e.id,payment_type_id:null}),x.value=!1,L.value=!1,s("onPayment",{amount:i.total,payment_type_id:5}))})(e),class:"d-flex justify-content-between"},{default:c((()=>[Te,H.value<$.value?(o(),r("p",$e,"Loading ... "+f(H.value),1)):d("v-if",!0),Ie])),_:2},1032,["color","onClick"])])),_:2},1032,["active"])])):d("v-if",!0),d("")])),_:2},1024)))),128))])),_:1},8,["active"])])):d("v-if",!0)],512),[[C,i.define_status]])])),action:c((()=>[d(' <VButton @click="cash = 0" class="d-flex justify-content-center" raised\r\n        >Reset</VButton\r\n      >\r\n      <VButton\r\n        color="success"\r\n        @click="payment"\r\n        :disabled="total > cash"\r\n        class="d-flex justify-content-center"\r\n        raised\r\n        >Confirm</VButton\r\n      > ')])),_:1},8,["open"]),m(b,{open:g(R).modal,actions:"center",onClose:u[1]||(u[1]=e=>g(R).modal=!1)},{content:c((()=>[m(j,{title:g(R).email,subtitle:"Please confirm the email before continuing"},null,8,["title"])])),action:c((()=>[m(S,{onClick:P,color:"primary",raised:""},{default:c((()=>[Fe])),_:1})])),_:1},8,["open"])],64)}}});const Le={class:"d-flex justify-content-between align-items-start"},De=m("div",null,[m("p",{class:"title is-3"},[m("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),m("p",{class:"title is-5"},"Debit Card")],-1),Ue={key:0,class:"title is-6"},Ee=y("Confirm");var Me=i({expose:[],props:{total:{type:Number,required:!0},user:{type:Object,required:!0},email:{type:String,default:""}},emits:["onPayment"],setup(t,{emit:l}){const s=t,i=u(!1),p=()=>{i.value=!1,f.modal=!1,l("onPayment",{amount:s.total,payment_type_id:3})},f=b({modal:!1,confirm:!1,email:""}),v=()=>{""!=s.email&&null!=s.email?(f.email=s.email,f.modal=!0):N.error("Email is required")};return(t,l)=>{const s=z,i=a,u=n,y=e;return o(),r(y,{onClick:v,color:"success",class:"mx-2 btn-card w-100 justify-content-center",outlined:""},{default:c((()=>[m("div",Le,[De,(o(),r("p",Ue,[d(' <i class="fas fa-check" aria-hidden="true"></i> ')]))]),m(u,{open:g(f).modal,actions:"center",onClose:l[1]||(l[1]=e=>g(f).modal=!1)},{content:c((()=>[m(s,{title:g(f).email,subtitle:"Please confirm the email before continuing"},null,8,["title"])])),action:c((()=>[m(i,{onClick:p,color:"primary",raised:""},{default:c((()=>[Ee])),_:1})])),_:1},8,["open"])])),_:1})}}});export{D as _,ne as a,Ae as b,Me as c,de as d,ie as m};
