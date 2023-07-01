import{_ as a}from"./GraphDropdown.a81deaf6.js";import{_ as s}from"./V-IconBox.vue_vue&type=script&setup=true&lang.2d6f8970.js";import{_ as e}from"./V-Block.vue_vue&type=script&setup=true&lang.531bdf90.js";import{_ as l}from"./V-Control.c2f9b0a5.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import{_ as i}from"./V-Progress.vue_vue&type=script&setup=true&lang.0cef1d2c.js";import{_ as n}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{_ as c}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.f2e3b340.js";import{_ as o}from"./V-Button.vue_vue&type=script&setup=true&lang.af2254ff.js";import{t as r}from"./themeColors.4f0e93f3.js";import{p as d}from"./userPopovers.f4b9fc60.js";import{r as u,d as p,h as v,i as m,l as h,k as f,F as g,aa as b,G as k,j as y,Q as _,H as x}from"./vendor.3e3390b7.js";var w="/images/icons/dashboards/banking/visa-squared-white.svg";const V={series:[{name:"Expenses",data:[318,150,49,152.13,421,1009,1220,418,113,45]},{name:"Earnings",data:[192,263,459,312,349,527,397,351,618,511]}],chart:{height:300,type:"area",toolbar:{show:!1}},colors:[r.green,r.info,r.orange],title:{text:"History",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-10-19T00:00:00.000Z","2020-10-20T01:30:00.000Z","2020-10-21T02:30:00.000Z","2020-10-22T03:30:00.000Z","2020-10-23T04:30:00.000Z","2020-10-24T05:30:00.000Z","2020-10-25T06:30:00.000Z","2020-10-26T06:30:00.000Z","2020-10-27T06:30:00.000Z","2020-10-28T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"},y:{formatter:function(a){return"$"+a}}}},T=["default"],j=[{value:"default",name:"Select an account",icon:"/demo/avatars/8.jpg"},{value:"4156 1000 56565 17",name:"4156 1000 56565 17",icon:"/images/icons/dashboards/banking/bank-1.svg"},{value:"2247 2427 89975 12",name:"2247 2427 89975 12",icon:"/images/icons/dashboards/banking/bank-2.svg"},{value:"2247 2427 89975 19",name:"2247 2427 89975 19",icon:"/images/icons/dashboards/banking/bank-3.svg"}],C=u(0),Z=["Last 10 days","Last month","Last 3 months","Last 6 months"],S={class:"banking-dashboard banking-dashboard-v1"},L={class:"columns is-multiline"},M={class:"column is-4"},$={class:"dashboard-card is-credit-cards"},z=b('<div class="title-wrap"><h3 class="dark-inverted">My Cards</h3><button class="button is-circle is-dark-outlined"><span class="icon is-small"><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i></span></button></div>',1),A={class:"card-block"},B={class:"card-block-inner is-dark-bordered-12"},O=h("div",{class:"credit-card is-theme-1"},[h("div",{class:"shape"}),h("div",{class:"top"},[h("div",{class:"card-number"},[h("span",null,"** 4628"),h("img",{src:w,alt:""})])]),h("div",{class:"bottom"},[h("span",null,"Credit Card")])],-1),D=h("div",{class:"credit-card-meta"},[h("span",null,"Card Balance"),h("span",{class:"dark-inverted"},"$2,834.31")],-1),E={class:"credit-card-end"},F=h("div",{class:"info-block-inner"},[h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Information"),h("a",{class:"action-link"},"Edit")]),h("div",{class:"info-block-line"},[h("h4",{class:"dark-inverted"},"Status"),h("span",null,[h("i",{"aria-hidden":"true",class:"fas fa-circle text-success"}),k(" Active ")])]),h("div",{class:"info-block-line"},[h("h4",{class:"dark-inverted"},"Expires in"),h("span",null,"134 days")]),h("div",{class:"info-block-line"},[h("h4",{class:"dark-inverted"},"Type"),h("span",{class:"has-image"},[h("img",{src:"/images/icons/dashboards/banking/visa-squared-color.svg",alt:""}),k(" Credit card ")])])],-1),H={class:"card-block-inner is-dark-bordered-12"},P=h("div",{class:"credit-card is-theme-2"},[h("div",{class:"shape"}),h("div",{class:"top"},[h("div",{class:"card-number"},[h("span",null,"** 2649"),h("img",{src:w,alt:""})])]),h("div",{class:"bottom"},[h("span",null,"Debit Card")])],-1),U=h("div",{class:"credit-card-meta"},[h("span",null,"Card Balance"),h("span",{class:"dark-inverted"},"$10,563.18")],-1),q={class:"credit-card-end"},G={class:"dashboard-card is-transactions"},I=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Transactions"),h("a",{class:"action-link"},"View All")],-1),Q={class:"transactions"},J=h("i",{"aria-hidden":"true",class:"lnil lnil-service"},null,-1),K=h("span",{class:"dark-inverted"},"- $41.49",-1),R=h("i",{"aria-hidden":"true",class:"lnil lnil-analytics-alt-1"},null,-1),Y=h("span",{class:"dark-inverted"},"+ $263.39",-1),N=h("i",{"aria-hidden":"true",class:"lnil lnil-cart-alt"},null,-1),W=h("span",{class:"dark-inverted"},"- $92.00",-1),X={class:"column is-8"},aa={class:"columns is-multiline"},sa={class:"column is-6"},ea={class:"dashboard-card"},la=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Quick Transfer")],-1),ta={class:"multiselect-single-label"},ia={class:"select-label-text"},na={class:"select-label-text"},ca=b('<p class="context-text"> Select one of your bank accounts to transfer some funds. The transfer cannot exceed 20% of your balance. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">Confirm</a></div></div></div>',2),oa={class:"dashboard-card","data-toggle":"popover","data-pop-mode":"hover","data-pop-width":"220","data-pop-title":"Level 3","data-pop-content":"Awesome! You're already a level 3 customer. Keep up for more.","data-pop-position":"auto","data-pop-icon":"lnil lnil-crown-alt-1","data-pop-iconbg":"green"},ra=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Overall Progress"),h("span",{class:"title-meta dark-inverted"},"Lvl 3")],-1),da={class:"progress-wrap m-b-10 m-t-10"},ua=b('<p class="context-text"> This is your Vuero customer level. Reach out higher levels to unlock achievements, special gifts, and more. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">Details</a></div></div></div>',2),pa={class:"column is-6"},va={class:"dashboard-card is-contacts"},ma=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Send Money To")],-1),ha={class:"people-wrap"},fa={class:"people"},ga=h("div",{class:"actions"},[h("span",null,"See all Contacts"),h("a",{class:"is-dark-primary-hover"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})])],-1),ba={class:"transfer-form"},ka={class:"multiselect-single-label"},ya={class:"select-label-text"},_a={class:"select-label-text"},xa=b('<div class="field"><label>Amount</label><div class="field has-addons"><div class="control"><span class="select currency-select"><select><option>$</option><option>£</option><option>€</option></select></span></div><div class="control is-expanded"><input class="input" type="text" placeholder="Amount of money"></div></div></div><p class="context-text"> Funds will reach destination tomorrow. </p>',2),wa={class:"submit-wrap"},Va=k(" Send Money "),Ta={class:"column is-12"},ja={class:"dashboard-card is-income"};var Ca=p({expose:[],setup:r=>(r,u)=>{const p=a,b=s,k=e,w=y("Multiselect"),Ca=l,Za=t,Sa=i,La=n,Ma=c,$a=y("tippy"),za=o,Aa=y("apexchart");return v(),m("div",S,[h("div",L,[h("div",M,[h("div",$,[z,h("div",A,[h("div",B,[O,D,h("div",E,[h(p)])]),F,h("div",H,[P,U,h("div",q,[h(p)])])])]),h("div",G,[I,h("div",Q,[h(k,{title:"Food Delivery",subtitle:"Oct 23, 2020 - 8:46pm",center:"",lighter:""},{icon:f((()=>[h(b,{color:"green",rounded:""},{default:f((()=>[J])),_:1})])),action:f((()=>[K])),_:1}),h(k,{title:"Market Earnings",subtitle:"Oct 18, 2020 - 9:11am",center:"",lighter:""},{icon:f((()=>[h(b,{color:"orange",rounded:""},{default:f((()=>[R])),_:1})])),action:f((()=>[Y])),_:1}),h(k,{title:"Online Order",subtitle:"Oct 16, 2020 - 2:13pm",center:"",lighter:""},{icon:f((()=>[h(b,{color:"purple",rounded:""},{default:f((()=>[N])),_:1})])),action:f((()=>[W])),_:1})])])]),h("div",X,[h("div",aa,[h("div",sa,[h("div",ea,[la,h(Za,{class:"is-image-select has-curved-images"},{default:f((()=>[h(Ca,null,{default:f((()=>[h(w,{modelValue:g(T),"onUpdate:modelValue":u[1]||(u[1]=a=>_(T)?T.value=a:null),placeholder:"Select a language",label:"name","max-height":145,options:g(j)},{singlelabel:f((({value:a})=>[h("div",ta,[h("img",{class:"select-label-icon",src:a.icon,alt:""},null,8,["src"]),h("span",ia,x(a.name),1)])])),option:f((({option:a})=>[h("img",{class:"select-option-icon",src:a.icon,alt:""},null,8,["src"]),h("span",na,x(a.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),ca]),h("div",oa,[ra,h("div",da,[h(Sa,{size:"tiny",value:65})]),ua])]),h("div",pa,[h("div",va,[ma,h("div",ha,[h("div",fa,[h($a,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:f((()=>[h(Ma,{user:g(d).user122},null,8,["user"])])),default:f((()=>[h(La,{color:"warning",initials:"BT",size:"small"})])),_:1}),h($a,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:f((()=>[h(Ma,{user:g(d).user18},null,8,["user"])])),default:f((()=>[h(La,{picture:"/demo/avatars/18.jpg",size:"small"})])),_:1}),h($a,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:f((()=>[h(Ma,{user:g(d).user123},null,8,["user"])])),default:f((()=>[h(La,{color:"info",initials:"JD",size:"small"})])),_:1}),h($a,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:f((()=>[h(Ma,{user:g(d).user7},null,8,["user"])])),default:f((()=>[h(La,{picture:"/demo/avatars/7.jpg",size:"small"})])),_:1})]),ga]),h("div",ba,[h(Za,{class:"is-image-select has-curved-images"},{default:f((()=>[h(Ca,null,{default:f((()=>[h(w,{modelValue:g(T),"onUpdate:modelValue":u[2]||(u[2]=a=>_(T)?T.value=a:null),placeholder:"Select a language",label:"name","max-height":145,options:g(j)},{singlelabel:f((({value:a})=>[h("div",ka,[h("img",{class:"select-label-icon",src:a.icon,alt:""},null,8,["src"]),h("span",ya,x(a.name),1)])])),option:f((({option:a})=>[h("img",{class:"select-option-icon",src:a.icon,alt:""},null,8,["src"]),h("span",_a,x(a.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),xa,h("div",wa,[h(za,{color:"primary",size:"big",fullwidth:"",raised:"",bold:""},{default:f((()=>[Va])),_:1})])])])]),h("div",Ta,[h("div",ja,[h(Za,{class:"is-minimal-select"},{default:f((()=>[h(Ca,null,{default:f((()=>[h(w,{modelValue:g(C),"onUpdate:modelValue":u[3]||(u[3]=a=>_(C)?C.value=a:null),options:g(Z),placeholder:"Select an option","max-height":145},null,8,["modelValue","options"])])),_:1})])),_:1}),h(Aa,{id:"income-chart",height:g(V).chart.height,type:g(V).chart.type,series:g(V).series,options:g(V)},null,8,["height","type","series","options"])])])])])])])}});export{Ca as _};
