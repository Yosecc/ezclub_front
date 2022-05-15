var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&o(e,t,a[t]);return e};import{_ as i}from"./V-Progress.vue_vue&type=script&setup=true&lang.ff604937.js";import{_ as c}from"./inputsLayaut.vue_vue&type=style&index=0&lang.82aafae5.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.2c6b8d85.js";import{d,r as p,o as m,h as v,k as f,Q as y,R as _,F as g,j as b,L as k,G as h,b as j,D as C,J as x,a4 as w,i as O,E as S}from"./vendor.ce9b165f.js";import{_ as P}from"./V-Card.vue_vue&type=script&setup=true&lang.258df990.js";import{_ as V}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.045d3fe5.js";import{u as N}from"./useNotyf.6cda34cd.js";import{c as $,s as B,d as L}from"./config.7f265e6d.js";import{s as J}from"./servicesPacks.1b4b9e2b.js";import{x as R,t as E,y as z,w as A,z as D,B as F,C as I,D as M,A as q,q as G}from"./index.8fcbf188.js";import{i as Q,l as W}from"./darkModeState.56630ad4.js";import{m as H}from"./Companies.2e58841c.js";import"./V-Control.0057af57.js";import"./V-Field.vue_vue&type=script&setup=true&lang.03c5873e.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.2ef57134.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.7317bbf9.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3b04d82c.js";import"./V-Placeload.47aacffe.js";import"./themeColors.4f0e93f3.js";const K={class:"onboarding-wrapper onboarding-v4"},T={class:"onboarding-wrap"},U={class:"onboarding-wrap-inner d-flex justify-content-center"},X={class:"onboarding-content mt-4"},Y={class:"dark-inverted"},Z={class:"button-wrap"},ee={style:{"font-size":"1.3rem",color:"black","font-weight":"900"}};var ae=d({expose:[],props:{data:{type:Array},value:{type:Number,default:0}},emits:["changeSelect"],setup(e,{emit:a}){const t=p(e.value);return(a,s)=>{const l=u;return m(),v("div",K,[f("div",T,[f("div",U,[(m(!0),v(y,null,_(e.data,((e,s)=>(m(),v("div",{class:["onboarding-card ",e.id==t.value?"active":""],key:`item-${s}`},[f("img",{class:"",src:e.image,alt:""},null,8,["src"]),f("div",X,[f("h3",Y,g(e.name),1),f("p",null,g(e.description),1),f("div",Z,[f(l,{color:"primary",onClick:s=>{return a.$emit("changeSelect",e.id),l=e.id,void(t.value=l);var l},rounded:"",elevated:""},{default:b((()=>[f("span",ee,"$"+g(e.price),1)])),_:2},1032,["onClick"])])])],2)))),128))])])])}}});const te={class:"auth-wrapper-inner is-single"},se={class:"auth-nav"},le=f("div",{class:"left"},null,-1),re={class:"center"},oe={class:"right"},ne={class:"dark-mode ml-auto"},ie=f("span",null,null,-1),ce={class:"single-form-wrap mt-6"},ue={class:"inner-wrap"},de={class:"auth-head"},pe={key:0,class:"form-card"},me={class:"d-flex justify-content-end"},ve=S(" Continue "),fe={key:1,class:"form-card"},ye={class:"d-flex justify-content-between"},_e=S(" Back "),ge=S(" Continue "),be={key:2,class:"form-card"},ke={class:"d-flex justify-content-around"},he=S(" Add Location "),je=S(" Remove Location "),Ce={class:"d-flex justify-content-between"},xe=S(" Back "),we=S(" Continue "),Oe={key:3,class:"form-card"},Se={class:"d-flex justify-content-between"},Pe=S(" Back "),Ve=S(" Continue "),Ne={key:4,class:"form-card"},$e={class:"d-flex justify-content-between"},Be=S(" Back "),Le=S(" Register ");var Je=d({expose:[],setup(e){const s=w(),l=N(),r=p(!1);k({title:"Registration Process"}),h((()=>{0==$.value.length&&s.push({name:"auth-register"}),H.value.map((e=>{"company_city_id"==e.name&&(e.values=$.value),"company_state_id"==e.name&&(e.values=B.value),"company_country_id"==e.name&&(e.values=L.value)})),R.value.map((e=>{"city_id"==e.name&&(e.values=$.value),"state_id"==e.name&&(e.values=B.value),"country_id"==e.name&&(e.values=L.value)})),E.value.push(JSON.parse(JSON.stringify(R.value))),z.value.map((e=>{"contact_city_id"==e.name&&(e.values=$.value),"contact_state_id"==e.name&&(e.values=B.value),"contact_country_id"==e.name&&(e.values=L.value),"contact_name"==e.name&&(e.model=A.value.firstName),"contact_email"==e.name&&(e.model=A.value.email)}))}));const o=e=>{F.value.model=e},d=j((()=>J.value.find((e=>e.id==F.value.model)).locations_num)),S=e=>I.value.find((a=>a.name==e)),K=(e,a={anidados:!1,array:!0})=>{const t=e=>{let t={};return a.array&&e.forEach((e=>{t[e.name]=e.model})),a.array||(t[e.name]=e.model),t};if(!a.anidados)return t(e);if(a.anidados){let a=[];return e.forEach((e=>{a.push(t(e))})),a}},T=async()=>{const e=(o=n(n(n(n(n({},K(H.value)),K(z.value)),A.value),K(F.value,{array:!1})),K(I.value)),i={locations:K(E.value,{anidados:!0,array:!0})},a(o,t(i)));var o,i;console.log("data",e),await q.post("companies/create",e).then((e=>{let a=e.data.user;if(e.data.status)r.value=!0,G(a),l.success(`Welcome, ${a.name}`),s.push({name:"index"}),r.value=!1;else for(let t in e.data.errores)l.error(`${e.data.mensaje}: ${e.data.errores[t]}`)})).catch((e=>{console.log(e.response.data)}))},U=j((()=>1==D.value?"Company Information":3==D.value?"Company Locations":4==D.value?"Contact Information":2==D.value?"Service Packs":void 0)),X=e=>{D.value=e},Y=j((()=>100*D.value/4)),Z=()=>{E.value.push(JSON.parse(JSON.stringify(R.value)))};return(e,a)=>{const t=O("RouterLink"),s=i,l=c,r=u,n=ae,p=P,k=V;return m(),v("div",te,[f("div",se,[le,f("div",re,[f(t,{to:{name:"index"},class:""},{default:b((()=>[f("img",{src:C(W),width:"150",class:"d-block mr-auto ml-auto",alt:""},null,8,["src"])])),_:1})]),f("div",oe,[f("label",ne,[f("input",{type:"checkbox",checked:!C(Q),onChange:a[1]||(a[1]=e=>{Q.value=!e.target.checked})},null,40,["checked"]),ie])])]),f("div",ce,[f("div",ue,[f("div",de,[f("h2",null,g(C(U)),1)]),f(s,{size:"small",value:C(Y)},null,8,["value"]),1==C(D)?(m(),v("div",pe,[f(l,{"inputs-step":C(H)},null,8,["inputs-step"]),f("div",me,[f(r,{onClick:a[2]||(a[2]=e=>X(2)),color:"primary"},{default:b((()=>[ve])),_:1})])])):x("",!0),2==C(D)?(m(),v("div",fe,[f(n,{data:C(J),value:C(F).model,onChangeSelect:o},null,8,["data","value"]),f("div",ye,[f(r,{onClick:a[3]||(a[3]=e=>X(1)),color:"danger"},{default:b((()=>[_e])),_:1}),f(r,{onClick:a[4]||(a[4]=e=>X(3)),color:"primary"},{default:b((()=>[ge])),_:1})])])):x("",!0),3==C(D)?(m(),v("div",be,[(m(!0),v(y,null,_(C(E),((e,a)=>(m(),v(p,{key:`location-${a}`,class:"mb-4"},{default:b((()=>[f(l,{"inputs-step":e},null,8,["inputs-step"]),f("div",ke,[a+1==C(E).length&&C(d)>C(E).length?(m(),v(r,{key:0,onClick:Z,class:"mx-auto d-block",color:"info"},{default:b((()=>[he])),_:1})):x("",!0),a>0?(m(),v(r,{key:1,onClick:e=>(e=>{E.value.splice(e,1)})(a),class:"mx-auto d-block",color:"danger"},{default:b((()=>[je])),_:2},1032,["onClick"])):x("",!0)])])),_:2},1024)))),128)),f("div",Ce,[f(r,{onClick:a[5]||(a[5]=e=>X(2)),color:"danger"},{default:b((()=>[xe])),_:1}),f(r,{onClick:a[6]||(a[6]=e=>X(4)),color:"primary"},{default:b((()=>[we])),_:1})])])):x("",!0),4==C(D)?(m(),v("div",Oe,[f(l,{"inputs-step":C(z)},null,8,["inputs-step"]),f("div",Se,[f(r,{onClick:a[7]||(a[7]=e=>X(3)),color:"danger"},{default:b((()=>[Pe])),_:1}),f(r,{onClick:a[8]||(a[8]=e=>X(5)),color:"primary"},{default:b((()=>[Ve])),_:1})])])):x("",!0),5==C(D)?(m(),v("div",Ne,[f(k,{color:"orange",number:S("number_card").model,name:S("name_card").model,expiry:S("expiration_date").model,cvc:S("password_card").model,flipped:C(M),onFlip:a[9]||(a[9]=e=>M.value=!C(M))},null,8,["number","name","expiry","cvc","flipped"]),f(l,{class:"mt-6","inputs-step":C(I)},null,8,["inputs-step"]),f("div",$e,[f(r,{onClick:a[10]||(a[10]=e=>X(4)),color:"danger"},{default:b((()=>[Be])),_:1}),f(r,{onClick:T,color:"primary"},{default:b((()=>[Le])),_:1})])])):x("",!0)])])])}}});export default Je;
