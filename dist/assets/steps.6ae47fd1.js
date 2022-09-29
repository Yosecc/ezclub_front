var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,o=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&n(e,t,a[t]);return e};import{_ as i}from"./V-Progress.vue_vue&type=script&setup=true&lang.abd6f14d.js";import{_ as c}from"./inputsLayaut.vue_vue&type=style&index=0&lang.307cf958.js";import{_ as u}from"./V-Button.vue_vue&type=script&setup=true&lang.01c675bc.js";import{d,r as p,i as v,j as m,l as f,I as y,S as g,U as _,H as k,k as b,aa as C,P as h,o as j,b as S,h as x,F as w,G as P}from"./vendor.435948fe.js";import{_ as O}from"./V-Card.vue_vue&type=script&setup=true&lang.c3c49687.js";import{_ as E}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.58cc6578.js";import{u as V}from"./useNotyf.0717b6da.js";import{c as N,s as T,d as A}from"./config.9312d47a.js";import{s as F}from"./servicesPacks.d4a7e982.js";import{x as I,t as R,y as $,w as B,z as L,B as D,C as J,D as z,A as M,q}from"./index.45f98682.js";import{i as G,l as H}from"./darkModeState.010a41bc.js";import{r as K}from"./Companies.6af0e74d.js";import"./V-Control.b1909844.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c5d05587.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.e09ee376.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5e6f86b7.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.13b10a39.js";import"./V-Placeload.9c5aed6e.js";import"./themeColors.4f0e93f3.js";const U={class:"onboarding-wrapper onboarding-v4"},W={class:"onboarding-wrap"},Y={class:"onboarding-wrap-inner d-flex justify-content-center"},Q={class:"onboarding-content mt-4"},X={class:"dark-inverted"},Z={class:"button-wrap"},ee={style:{"font-size":"1.3rem",color:"black","font-weight":"900"}};var ae=d({expose:[],props:{data:{type:Array},value:{type:Number,default:0}},emits:["changeSelect"],setup(e,{emit:a}){const t=p(e.value);return(a,s)=>{const l=u;return v(),m("div",U,[f("div",W,[f("div",Y,[y("Card"),(v(!0),m(g,null,_(e.data,((e,s)=>(v(),m("div",{class:["onboarding-card ",e.id==t.value?"active":""],key:`item-${s}`},[f("img",{class:"",src:e.image,alt:""},null,8,["src"]),y(' <img\r\n            class="dark-image"\r\n            src="/@src/assets/illustrations/onboarding/set5-1-dark.svg"\r\n            alt=""\r\n          /> '),f("div",Q,[f("h3",X,k(e.name),1),f("p",null,k(e.description),1),f("div",Z,[f(l,{color:"primary",onClick:s=>{return a.$emit("changeSelect",e.id),l=e.id,void(t.value=l);var l},rounded:"",elevated:""},{default:b((()=>[f("span",ee,"$"+k(e.price),1)])),_:2},1032,["onClick"])])])],2)))),128))])])])}}});const te={class:"auth-wrapper-inner is-single"},se={class:"auth-nav"},le=f("div",{class:"left"},null,-1),re={class:"center"},ne={class:"right"},oe={class:"dark-mode ml-auto"},ie=f("span",null,null,-1),ce={class:"single-form-wrap mt-6"},ue={class:"inner-wrap"},de={class:"auth-head"},pe={key:0,class:"form-card"},ve={class:"d-flex justify-content-end"},me=P(" Continue "),fe={key:1,class:"form-card"},ye={class:"d-flex justify-content-between"},ge=P(" Back "),_e=P(" Continue "),ke={key:2,class:"form-card"},be={class:"d-flex justify-content-around"},Ce=P(" Add Location "),he=P(" Remove Location "),je={class:"d-flex justify-content-between"},Se=P(" Back "),xe=P(" Continue "),we={key:3,class:"form-card"},Pe={class:"d-flex justify-content-between"},Oe=P(" Back "),Ee=P(" Continue "),Ve={key:4,class:"form-card"},Ne={class:"d-flex justify-content-between"},Te=P(" Back "),Ae=P(" Register ");var Fe=d({expose:[],setup(e){const s=C(),l=V(),r=p(!1);h({title:"Registration Process"}),j((()=>{0==N.value.length&&s.push({name:"auth-register"}),K.value.map((e=>{"company_city_id"==e.name&&(e.values=N.value),"company_state_id"==e.name&&(e.values=T.value),"company_country_id"==e.name&&(e.values=A.value)})),I.value.map((e=>{"city_id"==e.name&&(e.values=N.value),"state_id"==e.name&&(e.values=T.value),"country_id"==e.name&&(e.values=A.value)})),R.value.push(JSON.parse(JSON.stringify(I.value))),$.value.map((e=>{"contact_city_id"==e.name&&(e.values=N.value),"contact_state_id"==e.name&&(e.values=T.value),"contact_country_id"==e.name&&(e.values=A.value),"contact_name"==e.name&&(e.model=B.value.firstName),"contact_email"==e.name&&(e.model=B.value.email)}))}));const n=e=>{D.value.model=e},d=S((()=>F.value.find((e=>e.id==D.value.model)).locations_num)),P=e=>J.value.find((a=>a.name==e)),U=(e,a={anidados:!1,array:!0})=>{const t=e=>{let t={};return a.array&&e.forEach((e=>{t[e.name]=e.model})),a.array||(t[e.name]=e.model),t};if(!a.anidados)return t(e);if(a.anidados){let a=[];return e.forEach((e=>{a.push(t(e))})),a}},W=async()=>{const e=(n=o(o(o(o(o({},U(K.value)),U($.value)),B.value),U(D.value,{array:!1})),U(J.value)),i={locations:U(R.value,{anidados:!0,array:!0})},a(n,t(i)));var n,i;console.log("data",e),await M.post("companies/create",e).then((e=>{let a=e.data.user;if(e.data.status)r.value=!0,q(a),l.success(`Welcome, ${a.name}`),s.push({name:"index"}),r.value=!1;else for(let t in e.data.errores)l.error(`${e.data.mensaje}: ${e.data.errores[t]}`)})).catch((e=>{console.log(e.response.data)}))},Y=S((()=>1==L.value?"Company Information":3==L.value?"Company Locations":4==L.value?"Contact Information":2==L.value?"Service Packs":void 0)),Q=e=>{L.value=e},X=S((()=>100*L.value/4)),Z=()=>{R.value.push(JSON.parse(JSON.stringify(I.value)))};return(e,a)=>{const t=x("RouterLink"),s=i,l=c,r=u,o=ae,p=O,C=E;return v(),m("div",te,[y("Fake navigation"),f("div",se,[le,f("div",re,[f(t,{to:{name:"index"},class:""},{default:b((()=>[f("img",{src:w(H),width:"150",class:"d-block mr-auto ml-auto",alt:""},null,8,["src"])])),_:1})]),f("div",ne,[f("label",oe,[f("input",{type:"checkbox",checked:!w(G),onChange:a[1]||(a[1]=e=>{G.value=!e.target.checked})},null,40,["checked"]),ie])])]),y("Single Centered Form"),f("div",ce,[f("div",ue,[y("Form Title"),f("div",de,[f("h2",null,k(w(Y)),1)]),f(s,{size:"small",value:w(X)},null,8,["value"]),y(" STEP 1 COMPANY "),1==w(L)?(v(),m("div",pe,[f(l,{"inputs-step":w(K)},null,8,["inputs-step"]),f("div",ve,[f(r,{onClick:a[2]||(a[2]=e=>Q(2)),color:"primary"},{default:b((()=>[me])),_:1})])])):y("v-if",!0),y(" STEP 2 SERVICES PACKS "),2==w(L)?(v(),m("div",fe,[f(o,{data:w(F),value:w(D).model,onChangeSelect:n},null,8,["data","value"]),f("div",ye,[f(r,{onClick:a[3]||(a[3]=e=>Q(1)),color:"danger"},{default:b((()=>[ge])),_:1}),f(r,{onClick:a[4]||(a[4]=e=>Q(3)),color:"primary"},{default:b((()=>[_e])),_:1})])])):y("v-if",!0),y(" STEP 3 LOCATIONS "),3==w(L)?(v(),m("div",ke,[(v(!0),m(g,null,_(w(R),((e,a)=>(v(),m(p,{key:`location-${a}`,class:"mb-4"},{default:b((()=>[f(l,{"inputs-step":e},null,8,["inputs-step"]),f("div",be,[a+1==w(R).length&&w(d)>w(R).length?(v(),m(r,{key:0,onClick:Z,class:"mx-auto d-block",color:"info"},{default:b((()=>[Ce])),_:1})):y("v-if",!0),a>0?(v(),m(r,{key:1,onClick:e=>(e=>{R.value.splice(e,1)})(a),class:"mx-auto d-block",color:"danger"},{default:b((()=>[he])),_:2},1032,["onClick"])):y("v-if",!0)])])),_:2},1024)))),128)),f("div",je,[f(r,{onClick:a[5]||(a[5]=e=>Q(2)),color:"danger"},{default:b((()=>[Se])),_:1}),f(r,{onClick:a[6]||(a[6]=e=>Q(4)),color:"primary"},{default:b((()=>[xe])),_:1})])])):y("v-if",!0),y(" STEP 4 CONTACT "),4==w(L)?(v(),m("div",we,[f(l,{"inputs-step":w($)},null,8,["inputs-step"]),f("div",Pe,[f(r,{onClick:a[7]||(a[7]=e=>Q(3)),color:"danger"},{default:b((()=>[Oe])),_:1}),f(r,{onClick:a[8]||(a[8]=e=>Q(5)),color:"primary"},{default:b((()=>[Ee])),_:1})])])):y("v-if",!0),y(" STEP 5 CREDICt CARD "),5==w(L)?(v(),m("div",Ve,[f(C,{color:"orange",number:P("number_card").model,name:P("name_card").model,expiry:P("expiration_date").model,cvc:P("password_card").model,flipped:w(z),onFlip:a[9]||(a[9]=e=>z.value=!w(z))},null,8,["number","name","expiry","cvc","flipped"]),f(l,{class:"mt-6","inputs-step":w(J)},null,8,["inputs-step"]),f("div",Ne,[f(r,{onClick:a[10]||(a[10]=e=>Q(4)),color:"danger"},{default:b((()=>[Te])),_:1}),f(r,{onClick:W,color:"primary"},{default:b((()=>[Ae])),_:1})])])):y("v-if",!0),y("Form")])])])}}});export default Fe;
