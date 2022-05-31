import{_ as s}from"./GraphDropdown.6e90daa9.js";import{_ as a}from"./V-IconBox.vue_vue&type=script&setup=true&lang.336954e9.js";import{_ as e}from"./V-Block.vue_vue&type=script&setup=true&lang.ef21edbb.js";import{_ as l}from"./V-Control.f3c0402c.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.5b35dbee.js";import{_ as i}from"./V-Progress.vue_vue&type=script&setup=true&lang.b08000ff.js";import{_ as n}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{_ as o}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.95b9c245.js";import{_ as c}from"./V-Button.vue_vue&type=script&setup=true&lang.d214ebf5.js";import{t as r}from"./themeColors.4f0e93f3.js";import{p as d}from"./userPopovers.f4b9fc60.js";import{r as u,d as p,o as v,h as m,k as h,j as b,D as f,a6 as g,E as k,i as y,P as _,F as x}from"./vendor.7d033f41.js";var w="/images/icons/dashboards/banking/visa-squared-white.svg";const V={series:[{name:"Expenses",data:[318,150,49,152.13,421,1009,1220,418,113,45]},{name:"Earnings",data:[192,263,459,312,349,527,397,351,618,511]}],chart:{height:300,type:"area",toolbar:{show:!1}},colors:[r.green,r.info,r.orange],title:{text:"History",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},xaxis:{type:"datetime",categories:["2020-10-19T00:00:00.000Z","2020-10-20T01:30:00.000Z","2020-10-21T02:30:00.000Z","2020-10-22T03:30:00.000Z","2020-10-23T04:30:00.000Z","2020-10-24T05:30:00.000Z","2020-10-25T06:30:00.000Z","2020-10-26T06:30:00.000Z","2020-10-27T06:30:00.000Z","2020-10-28T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"},y:{formatter:function(s){return"$"+s}}}},T=["default"],j=[{value:"default",name:"Select an account",icon:"/demo/avatars/8.jpg"},{value:"4156 1000 56565 17",name:"4156 1000 56565 17",icon:"/images/icons/dashboards/banking/bank-1.svg"},{value:"2247 2427 89975 12",name:"2247 2427 89975 12",icon:"/images/icons/dashboards/banking/bank-2.svg"},{value:"2247 2427 89975 19",name:"2247 2427 89975 19",icon:"/images/icons/dashboards/banking/bank-3.svg"}],C=u(0),Z=["Last 10 days","Last month","Last 3 months","Last 6 months"],S={class:"banking-dashboard banking-dashboard-v1"},L={class:"columns is-multiline"},M={class:"column is-4"},$={class:"dashboard-card is-credit-cards"},z=g('<div class="title-wrap"><h3 class="dark-inverted">My Cards</h3><button class="button is-circle is-dark-outlined"><span class="icon is-small"><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i></span></button></div>',1),A={class:"card-block"},B={class:"card-block-inner is-dark-bordered-12"},D=h("div",{class:"credit-card is-theme-1"},[h("div",{class:"shape"}),h("div",{class:"top"},[h("div",{class:"card-number"},[h("span",null,"** 4628"),h("img",{src:w,alt:""})])]),h("div",{class:"bottom"},[h("span",null,"Credit Card")])],-1),E=h("div",{class:"credit-card-meta"},[h("span",null,"Card Balance"),h("span",{class:"dark-inverted"},"$2,834.31")],-1),O={class:"credit-card-end"},P=h("div",{class:"info-block-inner"},[h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Information"),h("a",{class:"action-link"},"Edit")]),h("div",{class:"info-block-line"},[h("h4",{class:"dark-inverted"},"Status"),h("span",null,[h("i",{"aria-hidden":"true",class:"fas fa-circle text-success"}),k(" Active ")])]),h("div",{class:"info-block-line"},[h("h4",{class:"dark-inverted"},"Expires in"),h("span",null,"134 days")]),h("div",{class:"info-block-line"},[h("h4",{class:"dark-inverted"},"Type"),h("span",{class:"has-image"},[h("img",{src:"/images/icons/dashboards/banking/visa-squared-color.svg",alt:""}),k(" Credit card ")])])],-1),F={class:"card-block-inner is-dark-bordered-12"},U=h("div",{class:"credit-card is-theme-2"},[h("div",{class:"shape"}),h("div",{class:"top"},[h("div",{class:"card-number"},[h("span",null,"** 2649"),h("img",{src:w,alt:""})])]),h("div",{class:"bottom"},[h("span",null,"Debit Card")])],-1),H=h("div",{class:"credit-card-meta"},[h("span",null,"Card Balance"),h("span",{class:"dark-inverted"},"$10,563.18")],-1),q={class:"credit-card-end"},I={class:"dashboard-card is-transactions"},G=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Transactions"),h("a",{class:"action-link"},"View All")],-1),J={class:"transactions"},K=h("i",{"aria-hidden":"true",class:"lnil lnil-service"},null,-1),Q=h("span",{class:"dark-inverted"},"- $41.49",-1),R=h("i",{"aria-hidden":"true",class:"lnil lnil-analytics-alt-1"},null,-1),Y=h("span",{class:"dark-inverted"},"+ $263.39",-1),N=h("i",{"aria-hidden":"true",class:"lnil lnil-cart-alt"},null,-1),W=h("span",{class:"dark-inverted"},"- $92.00",-1),X={class:"column is-8"},ss={class:"columns is-multiline"},as={class:"column is-6"},es={class:"dashboard-card"},ls=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Quick Transfer")],-1),ts={class:"multiselect-single-label"},is={class:"select-label-text"},ns={class:"select-label-text"},os=g('<p class="context-text"> Select one of your bank accounts to transfer some funds. The transfer cannot exceed 20% of your balance. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">Confirm</a></div></div></div>',2),cs={class:"dashboard-card","data-toggle":"popover","data-pop-mode":"hover","data-pop-width":"220","data-pop-title":"Level 3","data-pop-content":"Awesome! You're already a level 3 customer. Keep up for more.","data-pop-position":"auto","data-pop-icon":"lnil lnil-crown-alt-1","data-pop-iconbg":"green"},rs=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Overall Progress"),h("span",{class:"title-meta dark-inverted"},"Lvl 3")],-1),ds={class:"progress-wrap m-b-10 m-t-10"},us=g('<p class="context-text"> This is your Vuero customer level. Reach out higher levels to unlock achievements, special gifts, and more. </p><div class="level is-mobile"><div class="level-left"></div><div class="level-right"><div class="level-item"><a class="action-link">Details</a></div></div></div>',2),ps={class:"column is-6"},vs={class:"dashboard-card is-contacts"},ms=h("div",{class:"title-wrap"},[h("h3",{class:"dark-inverted"},"Send Money To")],-1),hs={class:"people-wrap"},bs={class:"people"},fs=h("div",{class:"actions"},[h("span",null,"See all Contacts"),h("a",{class:"is-dark-primary-hover"},[h("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})])],-1),gs={class:"transfer-form"},ks={class:"multiselect-single-label"},ys={class:"select-label-text"},_s={class:"select-label-text"},xs=g('<div class="field"><label>Amount</label><div class="field has-addons"><div class="control"><span class="select currency-select"><select><option>$</option><option>£</option><option>€</option></select></span></div><div class="control is-expanded"><input class="input" type="text" placeholder="Amount of money"></div></div></div><p class="context-text"> Funds will reach destination tomorrow. </p>',2),ws={class:"submit-wrap"},Vs=k(" Send Money "),Ts={class:"column is-12"},js={class:"dashboard-card is-income"};var Cs=p({expose:[],setup:r=>(r,u)=>{const p=s,g=a,k=e,w=y("Multiselect"),Cs=l,Zs=t,Ss=i,Ls=n,Ms=o,$s=y("tippy"),zs=c,As=y("apexchart");return v(),m("div",S,[h("div",L,[h("div",M,[h("div",$,[z,h("div",A,[h("div",B,[D,E,h("div",O,[h(p)])]),P,h("div",F,[U,H,h("div",q,[h(p)])])])]),h("div",I,[G,h("div",J,[h(k,{title:"Food Delivery",subtitle:"Oct 23, 2020 - 8:46pm",center:"",lighter:""},{icon:b((()=>[h(g,{color:"green",rounded:""},{default:b((()=>[K])),_:1})])),action:b((()=>[Q])),_:1}),h(k,{title:"Market Earnings",subtitle:"Oct 18, 2020 - 9:11am",center:"",lighter:""},{icon:b((()=>[h(g,{color:"orange",rounded:""},{default:b((()=>[R])),_:1})])),action:b((()=>[Y])),_:1}),h(k,{title:"Online Order",subtitle:"Oct 16, 2020 - 2:13pm",center:"",lighter:""},{icon:b((()=>[h(g,{color:"purple",rounded:""},{default:b((()=>[N])),_:1})])),action:b((()=>[W])),_:1})])])]),h("div",X,[h("div",ss,[h("div",as,[h("div",es,[ls,h(Zs,{class:"is-image-select has-curved-images"},{default:b((()=>[h(Cs,null,{default:b((()=>[h(w,{modelValue:f(T),"onUpdate:modelValue":u[1]||(u[1]=s=>_(T)?T.value=s:null),placeholder:"Select a language",label:"name","max-height":145,options:f(j)},{singlelabel:b((({value:s})=>[h("div",ts,[h("img",{class:"select-label-icon",src:s.icon,alt:""},null,8,["src"]),h("span",is,x(s.name),1)])])),option:b((({option:s})=>[h("img",{class:"select-option-icon",src:s.icon,alt:""},null,8,["src"]),h("span",ns,x(s.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),os]),h("div",cs,[rs,h("div",ds,[h(Ss,{size:"tiny",value:65})]),us])]),h("div",ps,[h("div",vs,[ms,h("div",hs,[h("div",bs,[h($s,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[h(Ms,{user:f(d).user122},null,8,["user"])])),default:b((()=>[h(Ls,{color:"warning",initials:"BT",size:"small"})])),_:1}),h($s,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[h(Ms,{user:f(d).user18},null,8,["user"])])),default:b((()=>[h(Ls,{picture:"/demo/avatars/18.jpg",size:"small"})])),_:1}),h($s,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[h(Ms,{user:f(d).user123},null,8,["user"])])),default:b((()=>[h(Ls,{color:"info",initials:"JD",size:"small"})])),_:1}),h($s,{class:"has-help-cursor",interactive:"",offset:[0,10],placement:"bottom-end"},{content:b((()=>[h(Ms,{user:f(d).user7},null,8,["user"])])),default:b((()=>[h(Ls,{picture:"/demo/avatars/7.jpg",size:"small"})])),_:1})]),fs]),h("div",gs,[h(Zs,{class:"is-image-select has-curved-images"},{default:b((()=>[h(Cs,null,{default:b((()=>[h(w,{modelValue:f(T),"onUpdate:modelValue":u[2]||(u[2]=s=>_(T)?T.value=s:null),placeholder:"Select a language",label:"name","max-height":145,options:f(j)},{singlelabel:b((({value:s})=>[h("div",ks,[h("img",{class:"select-label-icon",src:s.icon,alt:""},null,8,["src"]),h("span",ys,x(s.name),1)])])),option:b((({option:s})=>[h("img",{class:"select-option-icon",src:s.icon,alt:""},null,8,["src"]),h("span",_s,x(s.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1}),xs,h("div",ws,[h(zs,{color:"primary",size:"big",fullwidth:"",raised:"",bold:""},{default:b((()=>[Vs])),_:1})])])])]),h("div",Ts,[h("div",js,[h(Zs,{class:"is-minimal-select"},{default:b((()=>[h(Cs,null,{default:b((()=>[h(w,{modelValue:f(C),"onUpdate:modelValue":u[3]||(u[3]=s=>_(C)?C.value=s:null),options:f(Z),placeholder:"Select an option","max-height":145},null,8,["modelValue","options"])])),_:1})])),_:1}),h(As,{id:"income-chart",height:f(V).chart.height,type:f(V).chart.type,series:f(V).series,options:f(V)},null,8,["height","type","series","options"])])])])])])])}});export{Cs as _};