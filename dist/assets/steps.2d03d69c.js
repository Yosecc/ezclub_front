var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,n=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))r.call(a,t)&&o(e,t,a[t]);return e};import{_ as c}from"./V-Progress.vue_vue&type=script&setup=true&lang.2d046d86.js";import{m as i,_ as u}from"./Companies.14c7bc66.js";import{_ as d}from"./V-Button.vue_vue&type=script&setup=true&lang.e4f3f19e.js";import{d as p,r as m,o as v,h as f,k as y,L as g,N as _,J as b,j as k,y as h,z as j,b as C,D as w,K as x,B as O,i as S,G as P}from"./vendor.685e53b0.js";import{_ as V}from"./V-Card.vue_vue&type=script&setup=true&lang.e9093fe9.js";import{_ as N}from"./V-CreditCard.vue_vue&type=script&setup=true&lang.65c59340.js";import{u as $}from"./useNotyf.f1431f99.js";import{c as B,s as J,a as L}from"./config.ebac126a.js";import{s as R}from"./servicesPacks.9ffdac6b.js";import{c as z,l as A,d as E,b as I,e as D,f as F,g as M,h as G,A as K,s as W}from"./index.8906c91d.js";import{i as q,l as H}from"./darkModeState.ac572066.js";import"./V-Control.2f65f00c.js";import"./V-Field.vue_vue&type=script&setup=true&lang.c6cf6183.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.0ae318bf.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.146bedbc.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.fbfe4d00.js";import"./V-Placeload.e1b5c41e.js";import"./notyf.es.f84e4201.js";import"./themeColors.4f0e93f3.js";const Q={class:"onboarding-wrapper onboarding-v4"},T={class:"onboarding-wrap"},U={class:"onboarding-wrap-inner d-flex justify-content-center"},X={class:"onboarding-content mt-4"},Y={class:"dark-inverted"},Z={class:"button-wrap"},ee={style:{"font-size":"1.3rem",color:"black","font-weight":"900"}};var ae=p({expose:[],props:{data:{type:Array},value:{type:Number,default:0}},emits:["changeSelect"],setup(e,{emit:a}){const t=m(e.value);return(a,s)=>{const l=d;return v(),f("div",Q,[y("div",T,[y("div",U,[(v(!0),f(g,null,_(e.data,((e,s)=>(v(),f("div",{class:["onboarding-card ",e.id==t.value?"active":""],key:`item-${s}`},[y("img",{class:"",src:e.image,alt:""},null,8,["src"]),y("div",X,[y("h3",Y,b(e.name),1),y("p",null,b(e.description),1),y("div",Z,[y(l,{color:"primary",onClick:s=>{return a.$emit("changeSelect",e.id),l=e.id,void(t.value=l);var l},rounded:"",elevated:""},{default:k((()=>[y("span",ee,"$"+b(e.price),1)])),_:2},1032,["onClick"])])])],2)))),128))])])])}}});const te={class:"auth-wrapper-inner is-single"},se={class:"auth-nav"},le=y("div",{class:"left"},null,-1),re={class:"center"},oe={class:"right"},ne={class:"dark-mode ml-auto"},ce=y("span",null,null,-1),ie={class:"single-form-wrap mt-6"},ue={class:"inner-wrap"},de={class:"auth-head"},pe={key:0,class:"form-card"},me={class:"d-flex justify-content-end"},ve=P(" Continue "),fe={key:1,class:"form-card"},ye={class:"d-flex justify-content-between"},ge=P(" Back "),_e=P(" Continue "),be={key:2,class:"form-card"},ke={class:"d-flex justify-content-around"},he=P(" Add Location "),je=P(" Remove Location "),Ce={class:"d-flex justify-content-between"},we=P(" Back "),xe=P(" Continue "),Oe={key:3,class:"form-card"},Se={class:"d-flex justify-content-between"},Pe=P(" Back "),Ve=P(" Continue "),Ne={key:4,class:"form-card"},$e={class:"d-flex justify-content-between"},Be=P(" Back "),Je=P(" Register ");var Le=p({expose:[],setup(e){const s=O(),l=$(),r=m(!1);h({title:"Registration Process"}),j((()=>{0==B.value.length&&s.push({name:"auth-register"}),i.value.map((e=>{"company_city_id"==e.name&&(e.values=B.value),"company_state_id"==e.name&&(e.values=J.value),"company_country_id"==e.name&&(e.values=L.value)})),z.value.map((e=>{"city_id"==e.name&&(e.values=B.value),"state_id"==e.name&&(e.values=J.value),"country_id"==e.name&&(e.values=L.value)})),A.value.push(JSON.parse(JSON.stringify(z.value))),E.value.map((e=>{"contact_city_id"==e.name&&(e.values=B.value),"contact_state_id"==e.name&&(e.values=J.value),"contact_country_id"==e.name&&(e.values=L.value),"contact_name"==e.name&&(e.model=I.value.firstName),"contact_email"==e.name&&(e.model=I.value.email)}))}));const o=e=>{F.value.model=e},p=C((()=>R.value.find((e=>e.id==F.value.model)).locations_num)),P=e=>M.value.find((a=>a.name==e)),Q=(e,a={anidados:!1,array:!0})=>{const t=e=>{let t={};return a.array&&e.forEach((e=>{t[e.name]=e.model})),a.array||(t[e.name]=e.model),t};if(!a.anidados)return t(e);if(a.anidados){let a=[];return e.forEach((e=>{a.push(t(e))})),a}},T=async()=>{const e=(o=n(n(n(n(n({},Q(i.value)),Q(E.value)),I.value),Q(F.value,{array:!1})),Q(M.value)),c={locations:Q(A.value,{anidados:!0,array:!0})},a(o,t(c)));var o,c;console.log("data",e),await K.post("companies/create",e).then((e=>{let a=e.data.user;if(e.data.status)r.value=!0,W(a),l.success(`Welcome, ${a.name}`),s.push({name:"index"}),r.value=!1;else for(let t in e.data.errores)l.error(`${e.data.mensaje}: ${e.data.errores[t]}`)})).catch((e=>{console.log(e.response.data)}))},U=C((()=>1==D.value?"Company Information":3==D.value?"Company Locations":4==D.value?"Contact Information":2==D.value?"Service Packs":void 0)),X=e=>{D.value=e},Y=C((()=>100*D.value/4)),Z=()=>{A.value.push(JSON.parse(JSON.stringify(z.value)))};return(e,a)=>{const t=S("RouterLink"),s=c,l=u,r=d,n=ae,m=V,h=N;return v(),f("div",te,[y("div",se,[le,y("div",re,[y(t,{to:{name:"index"},class:""},{default:k((()=>[y("img",{src:w(H),width:"150",class:"d-block mr-auto ml-auto",alt:""},null,8,["src"])])),_:1})]),y("div",oe,[y("label",ne,[y("input",{type:"checkbox",checked:!w(q),onChange:a[1]||(a[1]=e=>{q.value=!e.target.checked})},null,40,["checked"]),ce])])]),y("div",ie,[y("div",ue,[y("div",de,[y("h2",null,b(w(U)),1)]),y(s,{size:"small",value:w(Y)},null,8,["value"]),1==w(D)?(v(),f("div",pe,[y(l,{"inputs-step":w(i)},null,8,["inputs-step"]),y("div",me,[y(r,{onClick:a[2]||(a[2]=e=>X(2)),color:"primary"},{default:k((()=>[ve])),_:1})])])):x("",!0),2==w(D)?(v(),f("div",fe,[y(n,{data:w(R),value:w(F).model,onChangeSelect:o},null,8,["data","value"]),y("div",ye,[y(r,{onClick:a[3]||(a[3]=e=>X(1)),color:"danger"},{default:k((()=>[ge])),_:1}),y(r,{onClick:a[4]||(a[4]=e=>X(3)),color:"primary"},{default:k((()=>[_e])),_:1})])])):x("",!0),3==w(D)?(v(),f("div",be,[(v(!0),f(g,null,_(w(A),((e,a)=>(v(),f(m,{key:`location-${a}`,class:"mb-4"},{default:k((()=>[y(l,{"inputs-step":e},null,8,["inputs-step"]),y("div",ke,[a+1==w(A).length&&w(p)>w(A).length?(v(),f(r,{key:0,onClick:Z,class:"mx-auto d-block",color:"info"},{default:k((()=>[he])),_:1})):x("",!0),a>0?(v(),f(r,{key:1,onClick:e=>(e=>{A.value.splice(e,1)})(a),class:"mx-auto d-block",color:"danger"},{default:k((()=>[je])),_:2},1032,["onClick"])):x("",!0)])])),_:2},1024)))),128)),y("div",Ce,[y(r,{onClick:a[5]||(a[5]=e=>X(2)),color:"danger"},{default:k((()=>[we])),_:1}),y(r,{onClick:a[6]||(a[6]=e=>X(4)),color:"primary"},{default:k((()=>[xe])),_:1})])])):x("",!0),4==w(D)?(v(),f("div",Oe,[y(l,{"inputs-step":w(E)},null,8,["inputs-step"]),y("div",Se,[y(r,{onClick:a[7]||(a[7]=e=>X(3)),color:"danger"},{default:k((()=>[Pe])),_:1}),y(r,{onClick:a[8]||(a[8]=e=>X(5)),color:"primary"},{default:k((()=>[Ve])),_:1})])])):x("",!0),5==w(D)?(v(),f("div",Ne,[y(h,{color:"orange",number:P("number_card").model,name:P("name_card").model,expiry:P("expiration_date").model,cvc:P("password_card").model,flipped:w(G),onFlip:a[9]||(a[9]=e=>G.value=!w(G))},null,8,["number","name","expiry","cvc","flipped"]),y(l,{class:"mt-6","inputs-step":w(M)},null,8,["inputs-step"]),y("div",$e,[y(r,{onClick:a[10]||(a[10]=e=>X(4)),color:"danger"},{default:k((()=>[Be])),_:1}),y(r,{onClick:T,color:"primary"},{default:k((()=>[Je])),_:1})])])):x("",!0)])])])}}});export default Le;
