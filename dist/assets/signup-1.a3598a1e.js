import{_ as s}from"./AnimatedLogo.a3e359ee.js";import{_ as e}from"./V-Control.4a6c84b4.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.e3fe440b.js";import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.94a80eab.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e1ab07d1.js";import{_ as t}from"./V-Modal.vue_vue&type=script&setup=true&lang.ac2f5202.js";import{d as n,r as u,a4 as o,O as r,H as c,_ as d,h as v,o as p,i as m,k as g,j as f,G as h,a8 as b,Q as y,R as _,a6 as x,E as w}from"./vendor.1faf4f77.js";import{t as k}from"./tiny-slider.3c41456c.js";import{s as j}from"./sleep.2a252ff4.js";import{u as C}from"./useNotyf.3b08462f.js";import"./V-Placeload.410731c2.js";import"./themeColors.4f0e93f3.js";const V={class:"signup-nav"},S={class:"signup-nav-inner"},z={id:"vuero-signup",class:"signup-wrapper"},P={class:"steps-container"},A=g("div",{class:"inner"},[g("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:user"})],-1),I=g("span",{class:"step-label"},"Profile Pic",-1),L=g("div",{class:"inner"},[g("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:shield"})],-1),B=g("span",{class:"step-label"},"Account",-1),E=g("div",{class:"inner"},[g("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})],-1),N=g("span",{class:"step-label"},"Done",-1),O={class:"hero is-fullheight"},U={class:"hero-body"},D={class:"container"},F={class:"column is-4 is-offset-1"},G=g("h1",{id:"main-signup-title",class:"title is-3 signup-title"}," Become a Vuero ",-1),R=g("h2",{id:"main-signup-subtitle",class:"subtitle signup-subtitle"}," And simply join an unmatched design experience. ",-1),T={class:"signup-card"},W={class:"columns is-multiline"},Y={class:"column is-6"},H=g("input",{type:"text",class:"input",autocomplete:"given-name"},null,-1),K=g("div",{class:"auth-label"},"First Name",-1),M={class:"column is-6"},Q=g("input",{type:"text",class:"input",autocomplete:"family-name"},null,-1),q=g("div",{class:"auth-label"},"Last Name",-1),J={class:"column is-12"},X=g("input",{type:"text",class:"input",autocomplete:"email"},null,-1),Z=g("div",{class:"auth-label"},"Email Address",-1),$=x('<div class="column is-12"><div class="signup-type"><div class="box-wrap"><input type="radio" name="signup_type" checked><div class="signup-box"><i aria-hidden="true" class="lnil lnil-coffee-cup"></i><div class="meta"><span>Free</span><span>Nice to get started</span></div></div></div><div class="box-wrap"><input type="radio" name="signup_type"><div class="signup-box"><i aria-hidden="true" class="lnil lnil-crown-alt-1"></i><div class="meta"><span>Paid</span><span>Get a lot more features</span></div></div></div></div></div>',1),ss=g("div",{class:"control is-agree"},[g("span",null,[w(" By continuing you agree to our "),g("a",{href:"#"},"Terms"),w(" and "),g("a",{href:"#"},"Privacy")])],-1),es={class:"button-wrap has-help"},as=w(" Continue "),ls=w(" Or "),is=w(" Sign In "),ts=w(" to your account. "),ns={class:"signup-profile-wrapper"},us=g("h1",{class:"title is-5 signup-title has-text-centered"}," Add a profile picture ",-1),os=g("h2",{class:"subtitle signup-subtitle has-text-centered"}," This is your visual identity. ",-1),rs={class:"picture-selector"},cs={class:"image-container"},ds=g("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"},null,-1),vs=g("div",{class:"divider-container"},[g("div",{class:"divider"},[g("span",null,"Or select an avatar")])],-1),ps={class:"image-wrapper"},ms={class:"button-wrap is-centered has-text-centered"},gs=w(" Continue "),fs={class:"column is-4 is-offset-4 username-form"},hs=g("h1",{class:"title is-5 signup-title has-text-centered"}," Pick a username ",-1),bs=g("h2",{class:"subtitle signup-subtitle has-text-centered"}," Your username is how others will find you on Vuero so pick a good one. You can change it later. ",-1),ys={class:"columns is-multiline"},_s={class:"column is-12"},xs=g("input",{type:"text",class:"input",autocomplete:"username"},null,-1),ws=g("div",{class:"auth-label"},"Username",-1),ks={class:"column is-12"},js=g("input",{type:"password",class:"input",autocomplete:"new-password"},null,-1),Cs=g("div",{class:"auth-label"},"Password",-1),Vs={class:"column is-12"},Ss=g("input",{type:"password",class:"input",autocomplete:"new-password"},null,-1),zs=g("div",{class:"auth-label"},"Confirm Password",-1),Ps={class:"column is-12"},As=g("label",{for:"send-marketing"},[g("span",null," Send me marketing and transaction emails ")],-1),Is=g("label",{for:"send-marketing",class:"form-switch ml-auto"},[g("input",{id:"send-marketing",type:"checkbox",class:"is-switch"}),g("i",{"aria-hidden":"true"})],-1),Ls={class:"button-wrap is-centered has-text-centered"},Bs=w(" Done "),Es={class:"has-text-centered"},Ns={class:"upload-demo-wrap"},Os=g("small",{class:"help-text"},"Use the slider to resize the image",-1),Us=g("wbr",null,null,-1),Ds=g("div",{class:"file"},[g("label",{class:"file-label"},[g("input",{class:"file-input",type:"file",name:"resume"}),g("span",{class:"file-cta"},[g("span",{class:"file-icon"},[g("i",{"aria-hidden":"true",class:"fas fa-cloud-upload-alt"})]),g("span",{class:"file-label"}," Choose a file… ")])])],-1),Fs=w(" Confirm ");var Gs=n({expose:[],setup(n){let x;const w=u(null),Gs=o(),Rs=C(),Ts=u(0),Ws=u(2),Ys=u(!1),Hs=u(70),Ks=u(!1),Ms=["/images/avatars/svg/vuero-1.svg","/images/avatars/svg/vuero-2.svg","/images/avatars/svg/vuero-3.svg","/images/avatars/svg/vuero-4.svg","/images/avatars/svg/vuero-5.svg","/images/avatars/svg/vuero-6.svg","/images/avatars/svg/vuero-7.svg","/images/avatars/svg/vuero-8.svg","/images/avatars/svg/vuero-9.svg","/images/avatars/svg/vuero-10.svg","/images/avatars/svg/vuero-11.svg","/images/avatars/svg/vuero-12.svg"],Qs=async()=>{Ys.value||(Ts.value++,Ys.value=!0,j(2e3),Rs.success("Welcome, Erik Kovalsky"),Gs.push({name:"sidebar-dashboards"}),Ys.value=!1)},qs=s=>{const e=s.indexCached,a=s.index;s.slideItems[e].classList.remove("active"),s.slideItems[a].classList.add("active"),s.displayIndex&&(Ws.value=s.displayIndex-1)};return r({title:"Auth Signup 1 - Vuero"}),c((()=>{w.value&&(x=k({container:w.value,controls:!1,nav:!1,mouseDrag:!0,startIndex:2,fixedWidth:100,gutter:40,slideBy:1,swipeAngle:!1,center:!1,loop:!0,edgePadding:325}),x.events.on("indexChanged",qs),qs(x.getInfo()))})),d((()=>{x&&(x.events.off("indexChanged",qs),x.destroy())})),(n,u)=>{const o=s,r=v("RouterLink"),c=e,d=a,x=l,k=i,j=v("Slider"),C=t;return p(),m("div",null,[g("div",V,[g("div",S,[g(r,{to:{name:"index"},class:"logo"},{default:f((()=>[g(o,{width:"36px",height:"36px"})])),_:1})])]),g("div",z,[g("div",{class:["signup-steps",[0===Ts.value&&"is-hidden"]]},[g("div",P,[g("div",{class:["step-icon is-active",[Ts.value>=1&&"is-active",Ts.value<1&&"is-inactive"]]},[A,I],2),g("div",{class:["step-icon",[Ts.value>=2&&"is-active",Ts.value<2&&"is-inactive"]]},[L,B],2),g("div",{class:["step-icon",[Ts.value>=3&&"is-active",Ts.value<3&&"is-inactive"]]},[E,N],2),g("progress",{class:"progress",value:Ts.value-1,max:2},"25%",8,["value"])])],2),g("img",{class:[[Ts.value>0&&"is-hidden"],"card-bg"],src:"/assets/vuero-signup.7a9b164d.webp",alt:""},null,2),g("div",O,[g("div",U,[g("div",D,[h(" Step 1 "),g("div",{class:["columns signup-columns",[0!==Ts.value&&"is-hidden"]]},[g("div",F,[G,R,g("div",T,[g("form",{class:"signup-form is-mobile-spaced",onSubmit:u[2]||(u[2]=b((()=>{}),["prevent"]))},[g("div",W,[g("div",Y,[g(d,null,{default:f((()=>[g(c,null,{default:f((()=>[H,K])),_:1})])),_:1})]),g("div",M,[g(d,null,{default:f((()=>[g(c,null,{default:f((()=>[Q,q])),_:1})])),_:1})]),g("div",J,[g(d,null,{default:f((()=>[g(c,null,{default:f((()=>[X,Z])),_:1})])),_:1})]),$]),ss,g("div",es,[g(x,{color:"primary",size:"big",bold:"",fullwidth:"",rounded:"",onClick:u[1]||(u[1]=s=>Ts.value++)},{default:f((()=>[as])),_:1}),g("span",null,[ls,g(r,{to:{name:"auth"}},{default:f((()=>[is])),_:1}),ts])])],32)])])],2),h(" Step 2 "),g("div",{class:["columns signup-columns",[1!==Ts.value&&"is-hidden"]]},[g("form",{class:"column is-8",onSubmit:u[6]||(u[6]=b((()=>{}),["prevent"]))},[g("div",ns,[us,os,g("div",rs,[g("div",cs,[g("img",{src:Ms[Ws.value],alt:""},null,8,["src"]),g("div",{class:"upload-button",role:"button",onClick:u[3]||(u[3]=s=>Ks.value=!0)},[ds])])])]),vs,g("div",{ref:w,class:"avatar-carousel resized-mobile"},[(p(),m(y,null,_(Ms,((s,e)=>g("div",{key:e,class:"carousel-item"},[g("div",ps,[g("img",{src:s,alt:"",onErrorOnce:u[4]||(u[4]=s=>s.target.src="https://via.placeholder.com/150x150")},null,40,["src"])])]))),64))],512),g("div",ms,[g(x,{color:"primary",size:"big",rounded:"",lower:"",onClick:u[5]||(u[5]=s=>Ts.value++)},{default:f((()=>[gs])),_:1})])],32)],2),h(" Step 3 "),g("div",{class:["columns signup-columns",[2!==Ts.value&&"is-hidden"]]},[g("div",fs,[hs,bs,g("form",{class:"signup-form",onSubmit:b(Qs,["prevent"])},[g("div",ys,[g("div",_s,[g(d,null,{default:f((()=>[g(c,null,{default:f((()=>[xs,ws])),_:1})])),_:1})]),g("div",ks,[g(d,null,{default:f((()=>[g(c,null,{default:f((()=>[js,Cs])),_:1})])),_:1})]),g("div",Vs,[g(d,null,{default:f((()=>[g(c,null,{default:f((()=>[Ss,zs])),_:1})])),_:1})]),g("div",Ps,[g(d,null,{default:f((()=>[g(c,{class:"has-switch"},{default:f((()=>[As,Is])),_:1})])),_:1})])]),g("div",Ls,[g(x,{size:"big",color:"primary",rounded:"",primary:"",lower:"",loading:Ys.value},{default:f((()=>[Bs])),_:1},8,["loading"])])],40,["onSubmit"])])],2)])])])]),h(" upload modal "),g(C,{open:Ks.value,title:"Upload and crop your picture",actions:"center",size:"small",onClose:u[8]||(u[8]=s=>Ks.value=!1)},{content:f((()=>[g("div",Es,[g("div",Ns,[g(k,{size:"big"})]),Os,g(d,{class:"resize-handler"},{default:f((()=>[g(c,null,{default:f((()=>[g(j,{modelValue:Hs.value,"onUpdate:modelValue":u[7]||(u[7]=s=>Hs.value=s),tooltips:!1},null,8,["modelValue"])])),_:1})])),_:1})])])),cancel:f((()=>[Us])),action:f((()=>[g(d,{grouped:""},{default:f((()=>[g(c,null,{default:f((()=>[Ds])),_:1}),g(c,null,{default:f((()=>[g(x,{class:"upload-result",size:"big",outlined:"",disabled:""},{default:f((()=>[Fs])),_:1})])),_:1})])),_:1})])),_:1},8,["open"])])}}});export default Gs;
