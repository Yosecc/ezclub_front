var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&o(e,t,a[t]);return e};import{_ as i}from"./V-Progress.vue_vue&type=script&setup=true&lang.691e2c73.js";import{_ as c}from"./inputsLayaut.vue_vue&type=style&index=0&lang.93e88a3c.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.a97a12f7.js";import{d,r as p,o as m,h as v,k as f,N as y,O as g,K as _,j as b,z as k,A as j,b as h,E as C,L as x,D as w,i as O,H as S}from"./vendor.e3a29b40.js";import{_ as P}from"./V-Card.vue_vue&type=script&setup=true&lang.a508baf8.js";import{_ as V}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.e6765a40.js";import{u as N}from"./useNotyf.f1431f99.js";import{c as $,s as L,a as B}from"./config.547f04fb.js";import{s as A}from"./servicesPacks.68f6c2dc.js";import{c as E,l as J,d as R,b as z,e as I,f as D,g as F,h as M,A as H,s as K}from"./index.a5fdae58.js";import{i as W,l as q}from"./darkModeState.a53f3c67.js";import{j as G}from"./Companies.5f42566a.js";import"./V-Control.b36667bf.js";import"./V-Field.vue_vue&type=script&setup=true&lang.189c1bf7.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.16e258e3.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5145729d.js";import"./image_default.44c5e946.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.f00f67a3.js";import"./V-Placeload.9d0101ab.js";import"./notyf.es.f84e4201.js";import"./themeColors.4f0e93f3.js";const Q={class:"onboarding-wrapper onboarding-v4"},T={class:"onboarding-wrap"},U={class:"onboarding-wrap-inner d-flex justify-content-center"},X={class:"onboarding-content mt-4"},Y={class:"dark-inverted"},Z={class:"button-wrap"},ee={style:{"font-size":"1.3rem",color:"black","font-weight":"900"}};var ae=d({expose:[],props:{data:{type:Array},value:{type:Number,default:0}},emits:["changeSelect"],setup(e,{emit:a}){const t=p(e.value);return(a,s)=>{const l=u;return m(),v("div",Q,[f("div",T,[f("div",U,[(m(!0),v(y,null,g(e.data,((e,s)=>(m(),v("div",{class:["onboarding-card ",e.id==t.value?"active":""],key:`item-${s}`},[f("img",{class:"",src:e.image,alt:""},null,8,["src"]),f("div",X,[f("h3",Y,_(e.name),1),f("p",null,_(e.description),1),f("div",Z,[f(l,{color:"primary",onClick:s=>{return a.$emit("changeSelect",e.id),l=e.id,void(t.value=l);var l},rounded:"",elevated:""},{default:b((()=>[f("span",ee,"$"+_(e.price),1)])),_:2},1032,["onClick"])])])],2)))),128))])])])}}});const te={class:"auth-wrapper-inner is-single"},se={class:"auth-nav"},le=f("div",{class:"left"},null,-1),re={class:"center"},oe={class:"right"},ne={class:"dark-mode ml-auto"},ie=f("span",null,null,-1),ce={class:"single-form-wrap mt-6"},ue={class:"inner-wrap"},de={class:"auth-head"},pe={key:0,class:"form-card"},me={class:"d-flex justify-content-end"},ve=S(" Continue "),fe={key:1,class:"form-card"},ye={class:"d-flex justify-content-between"},ge=S(" Back "),_e=S(" Continue "),be={key:2,class:"form-card"},ke={class:"d-flex justify-content-around"},je=S(" Add Location "),he=S(" Remove Location "),Ce={class:"d-flex justify-content-between"},xe=S(" Back "),we=S(" Continue "),Oe={key:3,class:"form-card"},Se={class:"d-flex justify-content-between"},Pe=S(" Back "),Ve=S(" Continue "),Ne={key:4,class:"form-card"},$e={class:"d-flex justify-content-between"},Le=S(" Back "),Be=S(" Register ");var Ae=d({expose:[],setup(e){const s=w(),l=N(),r=p(!1);k({title:"Registration Process"}),j((()=>{0==$.value.length&&s.push({name:"auth-register"}),G.value.map((e=>{"company_city_id"==e.name&&(e.values=$.value),"company_state_id"==e.name&&(e.values=L.value),"company_country_id"==e.name&&(e.values=B.value)})),E.value.map((e=>{"city_id"==e.name&&(e.values=$.value),"state_id"==e.name&&(e.values=L.value),"country_id"==e.name&&(e.values=B.value)})),J.value.push(JSON.parse(JSON.stringify(E.value))),R.value.map((e=>{"contact_city_id"==e.name&&(e.values=$.value),"contact_state_id"==e.name&&(e.values=L.value),"contact_country_id"==e.name&&(e.values=B.value),"contact_name"==e.name&&(e.model=z.value.firstName),"contact_email"==e.name&&(e.model=z.value.email)}))}));const o=e=>{D.value.model=e},d=h((()=>A.value.find((e=>e.id==D.value.model)).locations_num)),S=e=>F.value.find((a=>a.name==e)),Q=(e,a={anidados:!1,array:!0})=>{const t=e=>{let t={};return a.array&&e.forEach((e=>{t[e.name]=e.model})),a.array||(t[e.name]=e.model),t};if(!a.anidados)return t(e);if(a.anidados){let a=[];return e.forEach((e=>{a.push(t(e))})),a}},T=async()=>{const e=(o=n(n(n(n(n({},Q(G.value)),Q(R.value)),z.value),Q(D.value,{array:!1})),Q(F.value)),i={locations:Q(J.value,{anidados:!0,array:!0})},a(o,t(i)));var o,i;console.log("data",e),await H.post("companies/create",e).then((e=>{let a=e.data.user;if(e.data.status)r.value=!0,K(a),l.success(`Welcome, ${a.name}`),s.push({name:"index"}),r.value=!1;else for(let t in e.data.errores)l.error(`${e.data.mensaje}: ${e.data.errores[t]}`)})).catch((e=>{console.log(e.response.data)}))},U=h((()=>1==I.value?"Company Information":3==I.value?"Company Locations":4==I.value?"Contact Information":2==I.value?"Service Packs":void 0)),X=e=>{I.value=e},Y=h((()=>100*I.value/4)),Z=()=>{J.value.push(JSON.parse(JSON.stringify(E.value)))};return(e,a)=>{const t=O("RouterLink"),s=i,l=c,r=u,n=ae,p=P,k=V;return m(),v("div",te,[f("div",se,[le,f("div",re,[f(t,{to:{name:"index"},class:""},{default:b((()=>[f("img",{src:C(q),width:"150",class:"d-block mr-auto ml-auto",alt:""},null,8,["src"])])),_:1})]),f("div",oe,[f("label",ne,[f("input",{type:"checkbox",checked:!C(W),onChange:a[1]||(a[1]=e=>{W.value=!e.target.checked})},null,40,["checked"]),ie])])]),f("div",ce,[f("div",ue,[f("div",de,[f("h2",null,_(C(U)),1)]),f(s,{size:"small",value:C(Y)},null,8,["value"]),1==C(I)?(m(),v("div",pe,[f(l,{"inputs-step":C(G)},null,8,["inputs-step"]),f("div",me,[f(r,{onClick:a[2]||(a[2]=e=>X(2)),color:"primary"},{default:b((()=>[ve])),_:1})])])):x("",!0),2==C(I)?(m(),v("div",fe,[f(n,{data:C(A),value:C(D).model,onChangeSelect:o},null,8,["data","value"]),f("div",ye,[f(r,{onClick:a[3]||(a[3]=e=>X(1)),color:"danger"},{default:b((()=>[ge])),_:1}),f(r,{onClick:a[4]||(a[4]=e=>X(3)),color:"primary"},{default:b((()=>[_e])),_:1})])])):x("",!0),3==C(I)?(m(),v("div",be,[(m(!0),v(y,null,g(C(J),((e,a)=>(m(),v(p,{key:`location-${a}`,class:"mb-4"},{default:b((()=>[f(l,{"inputs-step":e},null,8,["inputs-step"]),f("div",ke,[a+1==C(J).length&&C(d)>C(J).length?(m(),v(r,{key:0,onClick:Z,class:"mx-auto d-block",color:"info"},{default:b((()=>[je])),_:1})):x("",!0),a>0?(m(),v(r,{key:1,onClick:e=>(e=>{J.value.splice(e,1)})(a),class:"mx-auto d-block",color:"danger"},{default:b((()=>[he])),_:2},1032,["onClick"])):x("",!0)])])),_:2},1024)))),128)),f("div",Ce,[f(r,{onClick:a[5]||(a[5]=e=>X(2)),color:"danger"},{default:b((()=>[xe])),_:1}),f(r,{onClick:a[6]||(a[6]=e=>X(4)),color:"primary"},{default:b((()=>[we])),_:1})])])):x("",!0),4==C(I)?(m(),v("div",Oe,[f(l,{"inputs-step":C(R)},null,8,["inputs-step"]),f("div",Se,[f(r,{onClick:a[7]||(a[7]=e=>X(3)),color:"danger"},{default:b((()=>[Pe])),_:1}),f(r,{onClick:a[8]||(a[8]=e=>X(5)),color:"primary"},{default:b((()=>[Ve])),_:1})])])):x("",!0),5==C(I)?(m(),v("div",Ne,[f(k,{color:"orange",number:S("number_card").model,name:S("name_card").model,expiry:S("expiration_date").model,cvc:S("password_card").model,flipped:C(M),onFlip:a[9]||(a[9]=e=>M.value=!C(M))},null,8,["number","name","expiry","cvc","flipped"]),f(l,{class:"mt-6","inputs-step":C(F)},null,8,["inputs-step"]),f("div",$e,[f(r,{onClick:a[10]||(a[10]=e=>X(4)),color:"danger"},{default:b((()=>[Le])),_:1}),f(r,{onClick:T,color:"primary"},{default:b((()=>[Be])),_:1})])])):x("",!0)])])])}}});export default Ae;
