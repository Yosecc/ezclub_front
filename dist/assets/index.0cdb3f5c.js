import{_ as a}from"./V-Control.b8a16a92.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{d as t,u as l,r as o,ad as r,o as i,P as n,h as c,i as u,j as d,I as m,l as p,F as v,a2 as f,W as g,_ as h,a3 as _,D as b,G as k,E as w}from"./vendor.84e48f7c.js";import{_ as y}from"./logo_positive.0bae3533.js";import{_ as j}from"./logo_negative.99437a85.js";import{i as x}from"./darkModeState.0452d175.js";import{u as F}from"./useNotyf.c0628090.js";import{k as S,A as V,l as C}from"./index.8a348250.js";import"./V-Placeload.8fe4e440.js";import"./themeColors.4f0e93f3.js";const P=_();b("data-v-8c18cca2");const I={class:"auth-wrapper-inner is-single"},L={class:"auth-nav"},E=p("div",{class:"left"},null,-1),M={class:"center",style:{"padding-top":"134px"}},R={key:0,src:y,width:"250",class:"d-block mr-auto ml-auto",alt:""},U={key:1,src:j,width:"250",class:"d-block mr-auto ml-auto",alt:""},W={class:"right"},A={class:"dark-mode ml-auto"},B=p("span",null,null,-1),D={class:"single-form-wrap"},G={class:"inner-wrap"},N={class:"form-card"},T={class:"login-form"},$=p("label",{for:"remember-me",class:"form-switch is-primary"},[p("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),p("i",{"aria-hidden":"true"})],-1),q=p("div",{class:"setting-meta"},[p("label",{for:"remember-me"},[p("span",null,"Remember Me")])],-1),z=k(" Sign In "),H=p("div",{class:"forgot-link has-text-centered"},[m(" <a>Forgot Password?</a> ")],-1);w();var J=t({expose:[],setup(t){const{cookies:_}=l();o("login");const b=o(!1),k=r(),w=F(),y=o(""),j=o(""),J=async()=>{""!=y.value&&""!=j.value&&await V.post("login",{email:y.value,password:j.value}).then((a=>{let e=a.data.user;console.log("Login",a),a.data.status&&(b.value=!0,C(e).then((a=>{w.success(`Welcome back, ${e.name}`),_.get("locations_id")?k.push({name:"index"}):k.push({name:"selectlocation"}),b.value=!1})))})).catch((a=>{422==a.response.status&&w.error(a.response.data.message)}))};i((()=>{null!=_.get("background")&&(K.value=_.get("background")),S.value&&k.push({path:"/"})})),n({title:"Login"});const K=o("#F39C12");return(t,l)=>{const o=c("RouterLink"),r=a,i=e,n=s;return u(),d("div",I,[m("Fake navigation"),p("div",L,[E,p("div",M,[p(o,{to:{name:"index"},class:""},{default:P((()=>[v(x)?(u(),d("img",R)):(u(),d("img",U))])),_:1})]),p("div",W,[p("label",A,[p("input",{type:"checkbox",checked:!v(x),onChange:l[1]||(l[1]=a=>{x.value=!a.target.checked})},null,40,["checked"]),B])])]),m("Single Centered Form"),p("div",D,[p("div",G,[m("Form Title"),m("Form"),p("div",N,[p("form",{onSubmit:f(J,["prevent"])},[p("div",T,[p(i,null,{default:P((()=>[p(r,{icon:"feather:user"},{default:P((()=>[g(p("input",{type:"text",class:"input",placeholder:"Email",autocomplete:"email","onUpdate:modelValue":l[2]||(l[2]=a=>y.value=a)},null,512),[[h,y.value]])])),_:1})])),_:1}),p(i,null,{default:P((()=>[p(r,{icon:"feather:lock"},{default:P((()=>[g(p("input",{type:"password","onUpdate:modelValue":l[3]||(l[3]=a=>j.value=a),placeholder:"Password",class:"input",autocomplete:"current-password"},null,512),[[h,j.value]])])),_:1})])),_:1}),m(" Switch "),p(r,{class:"setting-item"},{default:P((()=>[$,q])),_:1}),m(" Submit "),p(r,{class:"login"},{default:P((()=>[p(n,{loading:b.value,color:"primary",bold:"",fullwidth:"",raised:""},{default:P((()=>[z])),_:1},8,["loading"])])),_:1})])],40,["onSubmit"])]),H])])])}}});J.__scopeId="data-v-8c18cca2";export default J;
