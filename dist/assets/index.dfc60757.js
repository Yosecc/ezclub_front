import{_ as e}from"./V-Control.e6c5ff74.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.782723fd.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.40d7e57a.js";import{d as t,u as l,r as o,o as r,O as i,h as n,i as u,l as c,F as d,a2 as m,W as p,_ as f,ah as v,D as g,G as h,E as b,ac as _,j as k}from"./vendor.5900a5e9.js";import{_ as w}from"./logo_positive.0bae3533.js";import{_ as y}from"./logo_negative.99437a85.js";import{i as j}from"./darkModeState.2151b6b7.js";import{u as x}from"./useNotyf.346d3f59.js";import{k as V,A as C,l as S}from"./index.16a56777.js";import"./V-Placeload.587d3033.js";import"./themeColors.4f0e93f3.js";const F=v();g("data-v-76a6b266");const L={class:"auth-wrapper-inner is-single"},E={class:"auth-nav"},I=c("div",{class:"left"},null,-1),M={class:"center",style:{"padding-top":"134px"}},P={key:0,src:w,width:"250",class:"d-block mr-auto ml-auto",alt:""},R={key:1,src:y,width:"250",class:"d-block mr-auto ml-auto",alt:""},U={class:"right"},W={class:"dark-mode ml-auto"},A=c("span",null,null,-1),B={class:"single-form-wrap"},D={class:"inner-wrap"},G={class:"form-card"},N={class:"login-form"},O=c("label",{for:"remember-me",class:"form-switch is-primary"},[c("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),c("i",{"aria-hidden":"true"})],-1),$=c("div",{class:"setting-meta"},[c("label",{for:"remember-me"},[c("span",null,"Remember Me")])],-1),q=h(" Sign In "),z=c("div",{class:"forgot-link has-text-centered"},null,-1);b();var H=t({expose:[],setup(t){const{cookies:v}=l();o("login");const g=o(!1),h=_(),b=x(),w=o(""),y=o(""),H=async()=>{""!=w.value&&""!=y.value&&await C.post("login",{email:w.value,password:y.value}).then((e=>{let a=e.data.user;console.log("Login",e),e.data.status&&(g.value=!0,S(a).then((e=>{b.success(`Welcome back, ${a.name}`),v.get("locations_id")?h.push({name:"index"}):h.push({name:"selectlocation"}),g.value=!1})))})).catch((e=>{422==e.response.status&&b.error(e.response.data.message)}))};r((()=>{null!=v.get("background")&&(J.value=v.get("background")),V.value&&h.push({path:"/"})})),i({title:"Login"});const J=o("#F39C12");return(t,l)=>{const o=k("RouterLink"),r=e,i=a,v=s;return n(),u("div",L,[c("div",E,[I,c("div",M,[c(o,{to:{name:"index"},class:""},{default:F((()=>[d(j)?(n(),u("img",P)):(n(),u("img",R))])),_:1})]),c("div",U,[c("label",W,[c("input",{type:"checkbox",checked:!d(j),onChange:l[1]||(l[1]=e=>{j.value=!e.target.checked})},null,40,["checked"]),A])])]),c("div",B,[c("div",D,[c("div",G,[c("form",{onSubmit:m(H,["prevent"])},[c("div",N,[c(i,null,{default:F((()=>[c(r,{icon:"feather:user"},{default:F((()=>[p(c("input",{type:"text",class:"input",placeholder:"Email",autocomplete:"email","onUpdate:modelValue":l[2]||(l[2]=e=>w.value=e)},null,512),[[f,w.value]])])),_:1})])),_:1}),c(i,null,{default:F((()=>[c(r,{icon:"feather:lock"},{default:F((()=>[p(c("input",{type:"password","onUpdate:modelValue":l[3]||(l[3]=e=>y.value=e),placeholder:"Password",class:"input",autocomplete:"current-password"},null,512),[[f,y.value]])])),_:1})])),_:1}),c(r,{class:"setting-item"},{default:F((()=>[O,$])),_:1}),c(r,{class:"login"},{default:F((()=>[c(v,{loading:g.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:F((()=>[q])),_:1},8,["loading"])])),_:1})])],40,["onSubmit"])]),z])])])}}});H.__scopeId="data-v-76a6b266";export default H;
