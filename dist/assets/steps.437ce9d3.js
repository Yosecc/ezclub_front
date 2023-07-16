var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&o(e,t,a[t]);return e};import{_ as i}from"./V-Progress.vue_vue&type=script&setup=true&lang.17630d6f.js";import{_ as c}from"./inputsLayaut.vue_vue&type=style&index=0&lang.fe67fad1.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{d,r as p,h as m,i as v,l as f,R as y,S as _,H as g,k,O as b,o as h,b as j,F as C,K as x,ad as w,j as O,G as S}from"./vendor.4454b83d.js";import{_ as P}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as V}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.5c7df7df.js";import{u as N}from"./useNotyf.6f12e924.js";import{c as $,s as B,d as L}from"./config.72386dcf.js";import{s as R}from"./servicesPacks.d38d5f5a.js";import{x as J,q as z,y as A,t as E,z as F,B as I,C as q,D,A as M,l as G}from"./index.f93c57bf.js";import{i as H,l as K}from"./darkModeState.f2041097.js";import{q as W}from"./Companies.145e38df.js";import"./V-Control.63a8a239.js";import"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.260ce9ba.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import"./V-Placeload.28979271.js";import"./themeColors.4f0e93f3.js";const Q={class:"onboarding-wrapper onboarding-v4"},T={class:"onboarding-wrap"},U={class:"onboarding-wrap-inner d-flex justify-content-center"},X={class:"onboarding-content mt-4"},Y={class:"dark-inverted"},Z={class:"button-wrap"},ee={style:{"font-size":"1.3rem",color:"black","font-weight":"900"}};var ae=d({expose:[],props:{data:{type:Array},value:{type:Number,default:0}},emits:["changeSelect"],setup(e,{emit:a}){const t=p(e.value);return(a,s)=>{const l=u;return m(),v("div",Q,[f("div",T,[f("div",U,[(m(!0),v(y,null,_(e.data,((e,s)=>(m(),v("div",{class:["onboarding-card ",e.id==t.value?"active":""],key:`item-${s}`},[f("img",{class:"",src:e.image,alt:""},null,8,["src"]),f("div",X,[f("h3",Y,g(e.name),1),f("p",null,g(e.description),1),f("div",Z,[f(l,{color:"primary",onClick:s=>{return a.$emit("changeSelect",e.id),l=e.id,void(t.value=l);var l},rounded:"",elevated:""},{default:k((()=>[f("span",ee,"$"+g(e.price),1)])),_:2},1032,["onClick"])])])],2)))),128))])])])}}});const te={class:"auth-wrapper-inner is-single"},se={class:"auth-nav"},le=f("div",{class:"left"},null,-1),re={class:"center"},oe={class:"right"},ne={class:"dark-mode ml-auto"},ie=f("span",null,null,-1),ce={class:"single-form-wrap mt-6"},ue={class:"inner-wrap"},de={class:"auth-head"},pe={key:0,class:"form-card"},me={class:"d-flex justify-content-end"},ve=S(" Continue "),fe={key:1,class:"form-card"},ye={class:"d-flex justify-content-between"},_e=S(" Back "),ge=S(" Continue "),ke={key:2,class:"form-card"},be={class:"d-flex justify-content-around"},he=S(" Add Location "),je=S(" Remove Location "),Ce={class:"d-flex justify-content-between"},xe=S(" Back "),we=S(" Continue "),Oe={key:3,class:"form-card"},Se={class:"d-flex justify-content-between"},Pe=S(" Back "),Ve=S(" Continue "),Ne={key:4,class:"form-card"},$e={class:"d-flex justify-content-between"},Be=S(" Back "),Le=S(" Register ");var Re=d({expose:[],setup(e){const s=w(),l=N(),r=p(!1);b({title:"Registration Process"}),h((()=>{0==$.value.length&&s.push({name:"auth-register"}),W.value.map((e=>{"company_city_id"==e.name&&(e.values=$.value),"company_state_id"==e.name&&(e.values=B.value),"company_country_id"==e.name&&(e.values=L.value)})),J.value.map((e=>{"city_id"==e.name&&(e.values=$.value),"state_id"==e.name&&(e.values=B.value),"country_id"==e.name&&(e.values=L.value)})),z.value.push(JSON.parse(JSON.stringify(J.value))),A.value.map((e=>{"contact_city_id"==e.name&&(e.values=$.value),"contact_state_id"==e.name&&(e.values=B.value),"contact_country_id"==e.name&&(e.values=L.value),"contact_name"==e.name&&(e.model=E.value.firstName),"contact_email"==e.name&&(e.model=E.value.email)}))}));const o=e=>{I.value.model=e},d=j((()=>R.value.find((e=>e.id==I.value.model)).locations_num)),S=e=>q.value.find((a=>a.name==e)),Q=(e,a={anidados:!1,array:!0})=>{const t=e=>{let t={};return a.array&&e.forEach((e=>{t[e.name]=e.model})),a.array||(t[e.name]=e.model),t};if(!a.anidados)return t(e);if(a.anidados){let a=[];return e.forEach((e=>{a.push(t(e))})),a}},T=async()=>{const e=(o=n(n(n(n(n({},Q(W.value)),Q(A.value)),E.value),Q(I.value,{array:!1})),Q(q.value)),i={locations:Q(z.value,{anidados:!0,array:!0})},a(o,t(i)));var o,i;console.log("data",e),await M.post("companies/create",e).then((e=>{let a=e.data.user;if(e.data.status)r.value=!0,G(a),l.success(`Welcome, ${a.name}`),s.push({name:"index"}),r.value=!1;else for(let t in e.data.errores)l.error(`${e.data.mensaje}: ${e.data.errores[t]}`)})).catch((e=>{console.log(e.response.data)}))},U=j((()=>1==F.value?"Company Information":3==F.value?"Company Locations":4==F.value?"Contact Information":2==F.value?"Service Packs":void 0)),X=e=>{F.value=e},Y=j((()=>100*F.value/4)),Z=()=>{z.value.push(JSON.parse(JSON.stringify(J.value)))};return(e,a)=>{const t=O("RouterLink"),s=i,l=c,r=u,n=ae,p=P,b=V;return m(),v("div",te,[f("div",se,[le,f("div",re,[f(t,{to:{name:"index"},class:""},{default:k((()=>[f("img",{src:C(K),width:"150",class:"d-block mr-auto ml-auto",alt:""},null,8,["src"])])),_:1})]),f("div",oe,[f("label",ne,[f("input",{type:"checkbox",checked:!C(H),onChange:a[1]||(a[1]=e=>{H.value=!e.target.checked})},null,40,["checked"]),ie])])]),f("div",ce,[f("div",ue,[f("div",de,[f("h2",null,g(C(U)),1)]),f(s,{size:"small",value:C(Y)},null,8,["value"]),1==C(F)?(m(),v("div",pe,[f(l,{"inputs-step":C(W)},null,8,["inputs-step"]),f("div",me,[f(r,{onClick:a[2]||(a[2]=e=>X(2)),color:"primary"},{default:k((()=>[ve])),_:1})])])):x("",!0),2==C(F)?(m(),v("div",fe,[f(n,{data:C(R),value:C(I).model,onChangeSelect:o},null,8,["data","value"]),f("div",ye,[f(r,{onClick:a[3]||(a[3]=e=>X(1)),color:"danger"},{default:k((()=>[_e])),_:1}),f(r,{onClick:a[4]||(a[4]=e=>X(3)),color:"primary"},{default:k((()=>[ge])),_:1})])])):x("",!0),3==C(F)?(m(),v("div",ke,[(m(!0),v(y,null,_(C(z),((e,a)=>(m(),v(p,{key:`location-${a}`,class:"mb-4"},{default:k((()=>[f(l,{"inputs-step":e},null,8,["inputs-step"]),f("div",be,[a+1==C(z).length&&C(d)>C(z).length?(m(),v(r,{key:0,onClick:Z,class:"mx-auto d-block",color:"info"},{default:k((()=>[he])),_:1})):x("",!0),a>0?(m(),v(r,{key:1,onClick:e=>(e=>{z.value.splice(e,1)})(a),class:"mx-auto d-block",color:"danger"},{default:k((()=>[je])),_:2},1032,["onClick"])):x("",!0)])])),_:2},1024)))),128)),f("div",Ce,[f(r,{onClick:a[5]||(a[5]=e=>X(2)),color:"danger"},{default:k((()=>[xe])),_:1}),f(r,{onClick:a[6]||(a[6]=e=>X(4)),color:"primary"},{default:k((()=>[we])),_:1})])])):x("",!0),4==C(F)?(m(),v("div",Oe,[f(l,{"inputs-step":C(A)},null,8,["inputs-step"]),f("div",Se,[f(r,{onClick:a[7]||(a[7]=e=>X(3)),color:"danger"},{default:k((()=>[Pe])),_:1}),f(r,{onClick:a[8]||(a[8]=e=>X(5)),color:"primary"},{default:k((()=>[Ve])),_:1})])])):x("",!0),5==C(F)?(m(),v("div",Ne,[f(b,{color:"orange",number:S("number_card").model,name:S("name_card").model,expiry:S("expiration_date").model,cvc:S("password_card").model,flipped:C(D),onFlip:a[9]||(a[9]=e=>D.value=!C(D))},null,8,["number","name","expiry","cvc","flipped"]),f(l,{class:"mt-6","inputs-step":C(q)},null,8,["inputs-step"]),f("div",$e,[f(r,{onClick:a[10]||(a[10]=e=>X(4)),color:"danger"},{default:k((()=>[Be])),_:1}),f(r,{onClick:T,color:"primary"},{default:k((()=>[Le])),_:1})])])):x("",!0)])])])}}});export default Re;
