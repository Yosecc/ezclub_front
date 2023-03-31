import{_ as e}from"./V-Control.9f6b030b.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import{_ as i}from"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.55f1942d.js";import{_ as s}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as a}from"./V-IconButton.vue_vue&type=script&setup=true&lang.d0683519.js";import{d as t,ab as n,r as u,h as c,i as o,j as r,l as d,a2 as p,F as m,k as f,I as h,T as v,ag as b,G as y}from"./vendor.b96c0b62.js";import{V as k}from"./vue-scrollto.599f0d9d.js";import{u as g}from"./useNotyf.fe715992.js";import{s as _}from"./sleep.2a252ff4.js";const x={class:"mobile-steps is-active"},S={class:"steps has-content-centered is-thin is-horizontal is-short"},C=d("span",{class:"steps-marker"},null,-1),V=d("p",{class:"step-number"},"Step 1",-1),w=d("span",{class:"steps-marker"},null,-1),A=d("p",{class:"step-number"},"Step 2",-1),T=d("span",{class:"steps-marker"},null,-1),E=d("p",{class:"step-number"},"Step 3",-1),L=d("span",{class:"steps-marker"},null,-1),F=d("p",{class:"step-number"},"Step 4",-1),O=d("span",{class:"steps-marker"},null,-1),Q=d("p",{class:"step-number"},"Step 5",-1),j={class:"stepper-form"},G={class:"form-sections"},I={key:0,id:"form-step-0",class:"form-section is-active"},P={class:"form-section-title"},q=d("span",null,"General Information",-1),B=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"},null,-1),D={class:"form-section-inner"},M=d("input",{type:"text",class:"input",placeholder:"What is this shipment about?"},null,-1),R=d("button",{class:"input-button"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"}),d("span",null,"Add shipment group")],-1),U={class:"fieldset"},W=d("input",{type:"text",class:"input",placeholder:"Group name"},null,-1),N=d("input",{type:"text",class:"input",placeholder:"Group description"},null,-1),z=d("label",{class:"checkbox"},[d("input",{type:"checkbox",checked:""}),d("span"),y(" Fragile ")],-1),K=d("div",{class:"fieldset-separator"},null,-1),X=d("div",{class:"flex-label"},[d("h4",null,"Control Service")],-1),Y=d("label",null,"Type",-1),Z=d("label",null,"Additional Notes",-1),$=d("input",{type:"text",class:"input",placeholder:"Add some additional notes"},null,-1),H=d("label",null,"Method",-1),J=d("label",null,"Quantity (units)",-1),ee=d("input",{type:"number",class:"input",placeholder:"Enter a quantity"},null,-1),le=d("label",null,"Duration (days)",-1),ie=d("input",{type:"number",class:"input",placeholder:"Enter a storage duration"},null,-1),se={class:"buttons"},ae=y("Add Shipment"),te={class:"form-section-output"},ne={class:"output"},ue=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:archive"},null,-1),ce=d("span",null,"15 i9 Laptops - b2",-1),oe={class:"action"},re={key:0,id:"form-step-1",class:"form-section is-active"},de={class:"form-section-title"},pe=d("span",null,"Shipment Owner",-1),me=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"},null,-1),fe={class:"form-section-inner"},he=d("input",{type:"text",class:"input",placeholder:"Owning company name"},null,-1),ve=d("button",{class:"input-button"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"}),d("span",null,"Add contact")],-1),be={class:"fieldset"},ye=d("input",{type:"text",class:"input",placeholder:"Full name"},null,-1),ke=d("input",{type:"text",class:"input",placeholder:"Email address"},null,-1),ge=d("label",{class:"checkbox"},[d("input",{type:"checkbox",checked:""}),d("span"),y(" Primary ")],-1),_e=d("input",{type:"text",class:"input",placeholder:"Phone number"},null,-1),xe={class:"form-section-output"},Se={class:"output"},Ce=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:user"},null,-1),Ve=d("span",null,"Erik Kovalsky",-1),we={class:"action"},Ae={class:"output"},Te=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:user"},null,-1),Ee=d("span",null,"Elsa Walker",-1),Le={class:"action"},Fe={key:0,id:"form-step-2",class:"form-section is-active"},Oe={class:"form-section-title"},Qe=d("span",null,"Shipment Taxes",-1),je=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"},null,-1),Ge={class:"form-section-inner"},Ie=d("input",{type:"text",class:"input",placeholder:"Company Tax ID"},null,-1),Pe={class:"columns"},qe={class:"column is-6"},Be={class:"column is-6"},De={key:0,id:"form-step-3",class:"form-section is-active"},Me={class:"form-section-title"},Re=d("span",null,"Options",-1),Ue=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"},null,-1),We=d("div",{class:"form-section-inner"},[d("div",{class:"options"},[d("div",{class:"option"},[d("input",{type:"checkbox"}),d("div",{class:"indicator"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),d("div",{class:"option-inner"},[d("i",{"aria-hidden":"true",class:"lnil lnil-consulting"}),d("h4",null,"Double check"),d("p",null,"Second control pass")])]),d("div",{class:"option"},[d("input",{type:"checkbox"}),d("div",{class:"indicator"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),d("div",{class:"option-inner"},[d("i",{"aria-hidden":"true",class:"lnil lnil-tie"}),d("h4",null,"Agent"),d("p",null,"Dedicated agent")])]),d("div",{class:"option"},[d("input",{type:"checkbox"}),d("div",{class:"indicator"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),d("div",{class:"option-inner"},[d("i",{"aria-hidden":"true",class:"lnil lnil-handshake"}),d("h4",null,"Insurance"),d("p",null,"Level 1-3 goods")])]),d("div",{class:"option"},[d("input",{type:"checkbox"}),d("div",{class:"indicator"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),d("div",{class:"option-inner"},[d("i",{"aria-hidden":"true",class:"lnil lnil-licencse"}),d("h4",null,"Extension"),d("p",null,"License extension")])]),d("div",{class:"option"},[d("input",{type:"checkbox"}),d("div",{class:"indicator"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),d("div",{class:"option-inner"},[d("i",{"aria-hidden":"true",class:"lnil lnil-pie-chart-alt"}),d("h4",null,"BI Reports"),d("p",null,"Custom made reports")])]),d("div",{class:"option"},[d("input",{type:"checkbox"}),d("div",{class:"indicator"},[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})]),d("div",{class:"option-inner"},[d("i",{"aria-hidden":"true",class:"lnil lnil-customer"}),d("h4",null,"Metrics"),d("p",null,"Setup live metrics")])])])],-1),Ne={key:0,id:"form-step-4",class:"form-section is-active"},ze={class:"form-section-title"},Ke=d("span",null,"Validation",-1),Xe=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:help-circle"},null,-1),Ye=d("div",{class:"form-section-inner"},[d("div",{class:"validation-box"},[d("div",{class:"box-content"},[d("h3",null,"Excellent"),d("p",null," Before submitting the form, make sure you've filled all the required fields. Once submitted, you won't be able to change the info for this shipment. ")]),d("div",{class:"box-illustration"},[d("img",{src:"/assets/1.ff57597f.svg",alt:""})])])],-1),Ze={class:"navigation-buttons"},$e={class:"buttons is-right"},He=y(" Continue "),Je={class:"form-stepper"},el={key:0,class:"steps is-vertical is-thin is-short"},ll=d("a",{href:"#",class:"steps-marker"},null,-1),il=d("div",{class:"steps-content"},[d("p",{class:"step-number"},"STEP 1"),d("p",{class:"step-info"},"General Information")],-1),sl=d("a",{href:"#",class:"steps-marker"},null,-1),al=d("div",{class:"steps-content"},[d("p",{class:"step-number"},"STEP 2"),d("p",{class:"step-info"},"Shipment Owner")],-1),tl=d("a",{href:"#",class:"steps-marker"},null,-1),nl=d("div",{class:"steps-content"},[d("p",{class:"step-number"},"STEP 3"),d("p",{class:"step-info"},"Shipment Taxes")],-1),ul=d("a",{href:"#",class:"steps-marker"},null,-1),cl=d("div",{class:"steps-content"},[d("p",{class:"step-number"},"STEP 4"),d("p",{class:"step-info"},"Options")],-1),ol=d("a",{href:"#",class:"steps-marker"},null,-1),rl=d("div",{class:"steps-content"},[d("p",{class:"step-number"},"STEP 5"),d("p",{class:"step-info"},"Validation")],-1),dl={key:1,class:"form-help"},pl={key:0,id:"help-section-0",class:"form-help-inner is-active"},ml=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),fl=d("h3",null,"General Information",-1),hl=d("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam humano apparet. ",-1),vl=d("div",{class:"list-wrap"},[d("ul",null,[d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")])])],-1),bl={key:1,id:"help-section-1",class:"form-help-inner is-active"},yl=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),kl=d("h3",null,"Shipment Owner",-1),gl=d("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ",-1),_l=d("div",{class:"list-wrap"},[d("ul",null,[d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")])])],-1),xl={key:2,id:"help-section-2",class:"form-help-inner is-active"},Sl=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),Cl=d("h3",null,"Shipment Taxes",-1),Vl=d("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere etiam humano apparet. ",-1),wl=d("div",{class:"list-wrap"},[d("ul",null,[d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")])])],-1),Al={key:3,id:"help-section-3",class:"form-help-inner is-active"},Tl=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),El=d("h3",null,"Options",-1),Ll=d("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ",-1),Fl=d("div",{class:"list-wrap"},[d("ul",null,[d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")])])],-1),Ol={key:4,id:"help-section-4",class:"form-help-inner is-active"},Ql=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),jl=d("h3",null,"Validation",-1),Gl=d("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum videmus in musicis? An eiusdem modi? Quae similitudo in genere. ",-1),Il=d("div",{class:"list-wrap"},[d("ul",null,[d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")]),d("li",null,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"}),d("span",null,"Some nice list item")])])],-1);var Pl=t({expose:[],setup(t){const y=n(),Pl=g(),{scrollTo:ql}=k,Bl=u(0),Dl=u(!1),Ml=u(-1),Rl=u(""),Ul=u(""),Wl=u(""),Nl=u(""),zl=async()=>{if(4===Bl.value){if(Dl.value)return;return Dl.value=!0,Pl.success("Your shipment is successfully stored!"),await _(1e3),void y.push({name:"sidebar-dashboards"})}Dl.value=!0,await _(400),Bl.value+=1,b((()=>{ql(`#form-step-${Bl.value}`,1e3),Dl.value=!1}))};return(t,n)=>{const u=e,b=l,y=i,k=c("Multiselect"),g=s,_=a;return o(),r("div",null,[d("div",x,[d("ul",S,[d("li",{class:[[0===Bl.value&&"is-active"],"steps-segment"]},[C,d("a",{href:"#",class:"steps-content",onClick:n[1]||(n[1]=p((e=>Bl.value>=0&&m(ql)("#form-step-0",800,{offset:-150})),["prevent"]))},[V])],2),d("li",{class:[[1===Bl.value&&"is-active"],"steps-segment"]},[w,d("a",{href:"#",class:"steps-content",onClick:n[2]||(n[2]=p((e=>Bl.value>=1&&m(ql)("#form-step-1",800,{offset:-150})),["prevent"]))},[A])],2),d("li",{class:[[2===Bl.value&&"is-active"],"steps-segment"]},[T,d("a",{href:"#",class:"steps-content",onClick:n[3]||(n[3]=p((e=>Bl.value>=2&&m(ql)("#form-step-2",800,{offset:-150})),["prevent"]))},[E])],2),d("li",{class:[[3===Bl.value&&"is-active"],"steps-segment"]},[L,d("a",{href:"#",class:"steps-content",onClick:n[4]||(n[4]=p((e=>Bl.value>=3&&m(ql)("#form-step-3",800,{offset:-150})),["prevent"]))},[F])],2),d("li",{class:[[4===Bl.value&&"is-active"],"steps-segment"]},[O,d("a",{href:"#",class:"steps-content",onClick:n[5]||(n[5]=p((e=>Bl.value>=4&&m(ql)("#form-step-4",800,{offset:-150})),["prevent"]))},[Q])],2)])]),d("div",j,[d("div",G,[Bl.value>=0?(o(),r("div",I,[d("h3",P,[q,d("button",{class:"help-button",onClick:n[6]||(n[6]=e=>0===Ml.value?Ml.value=-1:Ml.value=0)},[B])]),d("div",D,[d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[M])),_:1})])),_:1}),d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[R])),_:1})])),_:1}),d("div",U,[d(b,{grouped:""},{default:f((()=>[d(u,{expanded:""},{default:f((()=>[W])),_:1}),d(u,{subcontrol:""},{default:f((()=>[d(y,{color:"primary","label-true":"Other","label-false":"Ground"})])),_:1})])),_:1}),d(b,{grouped:""},{default:f((()=>[d(u,{expanded:""},{default:f((()=>[N])),_:1}),d(u,{subcontrol:""},{default:f((()=>[z])),_:1})])),_:1}),K,d(b,{grouped:""},{default:f((()=>[d(u,{expanded:""},{default:f((()=>[X])),_:1}),d(u,{subcontrol:""},{default:f((()=>[d(y,{"label-true":"ON","label-false":"OFF"})])),_:1})])),_:1}),d(b,null,{default:f((()=>[Y,d(u,null,{default:f((()=>[d(k,{modelValue:Rl.value,"onUpdate:modelValue":n[7]||(n[7]=e=>Rl.value=e),options:["X-REF Quality","SERPA Check","AMF Check"],placeholder:"Select a control type"},null,8,["modelValue"])])),_:1})])),_:1}),d(b,null,{default:f((()=>[Z,d(u,null,{default:f((()=>[$])),_:1})])),_:1}),d(b,null,{default:f((()=>[H,d(u,null,{default:f((()=>[d(k,{modelValue:Ul.value,"onUpdate:modelValue":n[8]||(n[8]=e=>Ul.value=e),options:["LVL 1 Security warehouse","LVL 2 Security warehouse","LVL 3 Security warehouse"],placeholder:"Select a storage"},null,8,["modelValue"])])),_:1})])),_:1}),d(b,null,{default:f((()=>[J,d(u,null,{default:f((()=>[ee])),_:1})])),_:1}),d(b,null,{default:f((()=>[le,d(u,null,{default:f((()=>[ie])),_:1})])),_:1}),d(b,null,{default:f((()=>[d("div",se,[d(g,null,{default:f((()=>[ae])),_:1})])])),_:1})])]),d("div",te,[d("div",ne,[ue,ce,d("div",oe,[d(_,{icon:"feather:trash-2"})])])])])):h("v-if",!0),d(v,{name:"fade-slow"},{default:f((()=>[Bl.value>=1?(o(),r("div",re,[d("h3",de,[pe,d("button",{class:"help-button",onClick:n[9]||(n[9]=e=>1===Ml.value?Ml.value=-1:Ml.value=1)},[me])]),d("div",fe,[d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[he])),_:1})])),_:1}),d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[ve])),_:1})])),_:1}),d("div",be,[d(b,{grouped:""},{default:f((()=>[d(u,{expanded:""},{default:f((()=>[ye])),_:1}),d(u,{subcontrol:""},{default:f((()=>[d(y,{"label-true":"Ground","label-false":"Other"})])),_:1})])),_:1}),d(b,{grouped:""},{default:f((()=>[d(u,{expanded:""},{default:f((()=>[ke])),_:1}),d(u,{subcontrol:""},{default:f((()=>[ge])),_:1})])),_:1}),d(b,{grouped:""},{default:f((()=>[d(u,{expanded:""},{default:f((()=>[_e])),_:1}),d(u,{subcontrol:""})])),_:1})])]),d("div",xe,[d("div",Se,[Ce,Ve,d("div",we,[d(_,{icon:"feather:trash-2"})])]),d("div",Ae,[Te,Ee,d("div",Le,[d(_,{icon:"feather:trash-2"})])])])])):h("v-if",!0)])),_:1}),d(v,{name:"fade-slow"},{default:f((()=>[Bl.value>=2?(o(),r("div",Fe,[d("h3",Oe,[Qe,d("button",{class:"help-button",onClick:n[10]||(n[10]=e=>2===Ml.value?Ml.value=-1:Ml.value=2)},[je])]),d("div",Ge,[d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[Ie])),_:1})])),_:1}),d("div",Pe,[d("div",qe,[d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[d(k,{modelValue:Wl.value,"onUpdate:modelValue":n[11]||(n[11]=e=>Wl.value=e),options:["VAT","RFC","SFC"],placeholder:"Tax Type"},null,8,["modelValue"])])),_:1})])),_:1})]),d("div",Be,[d(b,null,{default:f((()=>[d(u,null,{default:f((()=>[d(k,{modelValue:Nl.value,"onUpdate:modelValue":n[12]||(n[12]=e=>Nl.value=e),options:["W-12 Form","W-12a Form","Z-Form"],placeholder:"Tax Statements"},null,8,["modelValue"])])),_:1})])),_:1})])])])])):h("v-if",!0)])),_:1}),d(v,{name:"fade-slow"},{default:f((()=>[Bl.value>=3?(o(),r("div",De,[d("h3",Me,[Re,d("button",{class:"help-button",onClick:n[13]||(n[13]=e=>3===Ml.value?Ml.value=-1:Ml.value=3)},[Ue])]),We])):h("v-if",!0)])),_:1}),d(v,{name:"fade-slow"},{default:f((()=>[Bl.value>=4?(o(),r("div",Ne,[d("h3",ze,[Ke,d("button",{class:"help-button",onClick:n[14]||(n[14]=e=>4===Ml.value?Ml.value=-1:Ml.value=4)},[Xe])]),Ye])):h("v-if",!0)])),_:1}),d("div",Ze,[d("div",$e,[d(g,{color:"primary",bold:"",loading:Dl.value,onClick:zl},{default:f((()=>[He])),_:1},8,["loading"])])])]),d("div",Je,[-1===Ml.value?(o(),r("ul",el,[d("li",{id:"step-segment-0",class:[[0===Bl.value&&"is-active"],"steps-segment"],onClick:n[15]||(n[15]=p((e=>Bl.value>=0&&m(ql)("#form-step-0",800,{offset:-20})),["prevent"]))},[ll,il],2),d("li",{id:"step-segment-1",class:[[1===Bl.value&&"is-active"],"steps-segment"],onClick:n[16]||(n[16]=p((e=>Bl.value>=1&&m(ql)("#form-step-1",800,{offset:-20})),["prevent"]))},[sl,al],2),d("li",{id:"step-segment-2",class:[[2===Bl.value&&"is-active"],"steps-segment"],onClick:n[17]||(n[17]=p((e=>Bl.value>=2&&m(ql)("#form-step-2",800,{offset:-20})),["prevent"]))},[tl,nl],2),d("li",{id:"step-segment-3",class:[[3===Bl.value&&"is-active"],"steps-segment"],onClick:n[18]||(n[18]=p((e=>Bl.value>=3&&m(ql)("#form-step-3",800,{offset:-20})),["prevent"]))},[ul,cl],2),d("li",{id:"step-segment-4",class:[[4===Bl.value&&"is-active"],"steps-segment"],onClick:n[19]||(n[19]=p((e=>Bl.value>=4&&m(ql)("#form-step-4",800,{offset:-20})),["prevent"]))},[ol,rl],2)])):(o(),r("div",dl,[0===Ml.value?(o(),r("div",pl,[d("button",{class:"close-help-button",onClick:n[20]||(n[20]=e=>Ml.value=-1)},[ml]),fl,hl,vl])):h("v-if",!0),1===Ml.value?(o(),r("div",bl,[d("button",{class:"close-help-button",onClick:n[21]||(n[21]=e=>Ml.value=-1)},[yl]),kl,gl,_l])):h("v-if",!0),2===Ml.value?(o(),r("div",xl,[d("button",{class:"close-help-button",onClick:n[22]||(n[22]=e=>Ml.value=-1)},[Sl]),Cl,Vl,wl])):h("v-if",!0),3===Ml.value?(o(),r("div",Al,[d("button",{class:"close-help-button",onClick:n[23]||(n[23]=e=>Ml.value=-1)},[Tl]),El,Ll,Fl])):h("v-if",!0),4===Ml.value?(o(),r("div",Ol,[d("button",{class:"close-help-button",onClick:n[24]||(n[24]=e=>Ml.value=-1)},[Ql]),jl,Gl,Il])):h("v-if",!0)]))])])])}}});export{Pl as _};
