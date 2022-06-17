import{d as e,o as s,h as t,L as a,k as i,G as l,S as r,R as o,j as n,E as d,i as c}from"./vendor.19da945b.js";import{_ as p}from"./V-Avatar.vue_vue&type=script&setup=true&lang.91600a65.js";import{_ as h}from"./V-Tag.vue_vue&type=script&setup=true&lang.285f71aa.js";import{s as u,a as g,b as v,c as f,r as y}from"./revenueAreaChart.b32804a8.js";import{t as m}from"./themeColors.4f0e93f3.js";var b=e({expose:[],props:{straight:{type:Boolean,default:!1}},setup:e=>(i,l)=>(s(),t("div",{class:["stat-widget spark-tile-widget",[e.straight&&"is-straight"]]},[a(i.$slots,"default")],2))});const w={class:"widget-head"},k={class:"dark-inverted"},S={class:"line-stats"},A={class:"line-stat"},B={class:"current"},x={class:"line-stat"},L={class:"dark-inverted"};var q=e({expose:[],props:{title:{type:String,default:"Line stats widget"},currentLabel:{type:String,default:"Current Label"},currentValue:{type:String,default:"$75,648.43"},previousLabel:{type:String,default:"Previous Label"},previousValue:{type:String,default:"$91,512.18"},straight:{type:Boolean,default:!1}},setup:e=>(r,o)=>(s(),t("div",{class:["stat-widget line-stats-widget",[e.straight&&"is-straight"]]},[i("div",w,[i("h3",k,l(e.title),1)]),i("div",S,[i("div",A,[i("span",null,l(e.currentLabel),1),i("span",B,l(e.currentValue),1)]),i("div",x,[i("span",null,l(e.previousLabel),1),i("span",L,l(e.previousValue),1)])]),a(r.$slots,"default")],2))});const z={class:"stat-widget flex-stat-widget is-straight"},j={class:"chart-media"},$={class:"meta"},_={class:"dark-inverted"},M={class:"is-dark-primary"},R={class:"chart-container"};var T=e({expose:[],props:{title:{type:String,default:"Widget Title"},value:{type:String,default:"8,641.26"},text:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria."},straight:{type:Boolean,default:!1}},setup:e=>(r,o)=>(s(),t("div",z,[i("div",j,[i("div",$,[i("h4",_,l(e.title),1),i("span",M,"$"+l(e.value),1),i("p",null,l(e.text),1)]),i("div",R,[a(r.$slots,"default")])])]))});const W={class:"widget-head"},Y={class:"dark-inverted"},C={class:"chart-group"},F={class:"group"},O={class:"group-content"},J={class:"dark-inverted"},I={class:"group"},P={class:"group-content"},V={class:"dark-inverted"},D={class:"group"},K={class:"group-content"},N={class:"dark-inverted"};var G=e({expose:[],props:{title:{type:String,default:"Grouped stats widget"},values:{type:Array,required:!0},labels:{type:Array,required:!0},straight:{type:Boolean,default:!1},gauge:{type:Boolean,default:!1}},setup:e=>(r,o)=>(s(),t("div",{class:["stat-widget grouped-stat-widget is-straight",[e.straight&&"is-straight"]]},[i("div",W,[i("h3",Y,l(e.title),1)]),i("div",C,[i("div",F,[i("div",O,[i("div",{class:["chart-container",[e.gauge&&"is-gauge"]]},[a(r.$slots,"chart1")],2),i("span",J,l(e.values[0]),1),i("p",null,l(e.labels[0]),1)])]),i("div",I,[i("div",P,[i("div",{class:["chart-container",[e.gauge&&"is-gauge"]]},[a(r.$slots,"chart2")],2),i("span",V,l(e.values[1]),1),i("p",null,l(e.labels[1]),1)])]),i("div",D,[i("div",K,[i("div",{class:["chart-container",[e.gauge&&"is-gauge"]]},[a(r.$slots,"chart3")],2),i("span",N,l(e.values[2]),1),i("p",null,l(e.labels[2]),1)])])])],2))});const X={class:"follow-block"},E={class:"follow-count"},H={class:"dark-inverted"},Q=i("span",null,"Based on your latest stats",-1),U=i("a",{href:"#",class:"go-icon"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})],-1);var Z=e({expose:[],props:{icon:{type:String,required:!0},value:{type:String,required:!0},straight:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},colored:{type:Boolean,default:!1}},setup:e=>(a,r)=>(s(),t("div",{class:["stat-widget followers-stat-widget-v1",[e.straight&&"is-straight"]]},[i("div",X,[i("div",{class:["follow-icon",[e.squared&&"is-squared",e.colored&&"is-primary"]]},[i("i",{"aria-hidden":"true",class:e.icon},null,2)],2),i("div",E,[i("span",H,l(e.value)+" Followers",1),Q]),U])],2))});const ee={class:"is-media"},se={class:"double-line"},te={class:"dark-inverted"},ae={class:"double-line"},ie={class:"dark-inverted"},le=i("span",null,"Monthly Income",-1),re={class:"avatars"},oe={class:"rating-wrap"},ne=i("span",null,"Rating",-1),de={class:"rating"},ce={class:"tag-wrap"},pe={class:"is-end"},he={class:"buttons"},ue=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit-2"})],-1),ge=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:eye"})],-1),ve=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trash-2"})],-1);var fe=e({expose:[],props:{rows:{type:Array,required:!0},squared:{type:Boolean,default:!1},circled:{type:Boolean,default:!1}},setup:e=>(a,n)=>{const d=p,c=h;return s(!0),t(o,null,r(e.rows,(a=>(s(),t("tr",{key:a.id},[i("td",ee,[i(d,{picture:a.picture,initials:a.initials,size:"medium",color:a.color,squared:e.squared},null,8,["picture","initials","color","squared"])]),i("td",null,[i("div",se,[i("span",te,l(a.name),1),i("span",null,"Member since "+l(a.membership),1)])]),i("td",null,[i("div",ae,[i("span",ie,"$"+l(a.income),1),le])]),i("td",null,[i("div",re,[(s(!0),t(o,null,r(a.skills,(e=>(s(),t(d,{key:e.id,picture:e.icon,size:"small"},null,8,["picture"])))),128))])]),i("td",null,[i("div",oe,[ne,i("div",de,[(s(),t(o,null,r(5,((e,s)=>i("i",{key:s,class:["fas fa-star",a.rating-s>0&&"selected"],"aria-hidden":"true"},null,2))),64))])])]),i("td",null,[i("div",ce,[i(c,{class:["Approved"===a.status&&"is-green","Pending"===a.status&&"is-info","Suspended"===a.status&&"is-orange"],label:a.status,elevated:""},null,8,["class","label"])])]),i("td",pe,[i("div",he,[i("button",{class:["button is-dark-outlined",[e.circled&&"is-circle"]]},[ue],2),i("button",{class:["button is-dark-outlined",[e.circled&&"is-circle"]]},[ge],2),i("button",{class:["button is-dark-outlined",[e.circled&&"is-circle"]]},[ve],2)])])])))),128)}});const ye={class:"widget-head"},me={class:"dark-inverted"},be={class:"button v-button is-primary is-elevated"},we=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),ke={class:"table is-hoverable is-fullwidth"};var Se=e({expose:[],props:{title:{type:String,default:"Widget Title"},actionLabel:{type:String,default:"Add Item"},straight:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},circled:{type:Boolean,default:!1},data:{type:Array,required:!0}},setup:e=>(a,r)=>{const o=fe;return s(),t("div",{class:["stat-widget table-widget-v1",[e.straight&&"is-straight"]]},[i("div",ye,[i("h3",me,l(e.title),1),i("button",be,[we,i("span",null,l(e.actionLabel),1)])]),i("table",ke,[i("tbody",null,[i(o,{rows:e.data,squared:e.squared,circled:e.circled},null,8,["rows","squared","circled"])])])],2)}});const Ae={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[m.accent],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$"+e}}}},Be={series:[65],chart:{height:150,type:"radialBar",offsetX:-10,toolbar:{show:!1}},colors:[m.purple],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!1,fontSize:"12px",fontWeight:400,offsetY:5,color:m.lightText},value:{show:!0,fontWeight:600,fontFamily:"Roboto, sans-serif",color:m.purple,fontSize:"16px",offsetY:5}}}},labels:["Progress"]},xe={series:[65],chart:{height:180,type:"radialBar",offsetX:-15,offsetY:-10,toolbar:{show:!1}},colors:[m.info,m.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:m.lightText,show:!1},value:{offsetY:5,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},Le={series:[31],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[m.info],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},qe={series:[53],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[m.orange],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},ze={series:[84],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[m.green],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},je={series:[57],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[m.accent],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},$e={series:[36],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[m.orange],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},_e={series:[88],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[m.green],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},Me=[{id:0,picture:"/demo/avatars/8.gif",name:"Tina Dasilva",initials:"td",color:"info",membership:"Apr 2019",income:"7,854.32",skills:[{id:0,icon:"/images/icons/stacks/js.svg"},{id:1,icon:"/images/icons/stacks/html5.svg"},{id:2,icon:"/images/icons/stacks/css3.svg"}],rating:5,status:"Approved"},{id:1,picture:"/demo/avatars/1.gif",name:"John Wistmus",initials:"jw",color:"info",membership:"Jun 2018",income:"5,435.49",skills:[{id:3,icon:"/images/icons/stacks/reactjs.svg"},{id:4,icon:"/images/icons/stacks/nodejs.svg"}],rating:4,status:"Approved"},{id:2,picture:"/demo/avatars/4.gif",name:"Sam Watson",initials:"sw",color:"info",membership:"Jun 2020",income:"824.67",skills:[{id:5,icon:"/images/icons/stacks/csharp.svg"},{id:6,icon:"/images/icons/stacks/android.svg"},{id:7,icon:"/images/icons/stacks/laravel.svg"}],rating:5,status:"Pending"},{id:3,picture:null,name:"Jolaine Joestar",initials:"jj",color:"info",membership:"Feb 2020",income:"261.12",skills:[{id:8,icon:"/images/icons/stacks/illustrator.svg"}],rating:3,status:"Suspended"},{id:4,picture:"/demo/avatars/3.gif",name:"Anders Jensen",initials:"aj",color:"info",membership:"Nov 2020",income:"4,231.67",skills:[{id:3,icon:"/images/icons/stacks/reactjs.svg"},{id:9,icon:"/images/icons/stacks/vuejs.svg"}],rating:5,status:"Approved"}],Re={class:"columns is-multiline"},Te={class:"column is-3"},We={class:"column is-3"},Ye={class:"column is-3"},Ce={class:"column is-3"},Fe={class:"column is-6"},Oe={class:"column is-6"},Je={class:"column is-6"},Ie={class:"column is-6"},Pe={class:"column is-6"},Ve={class:"column is-6"},De={class:"column is-4"},Ke={class:"column is-4"},Ne={class:"column is-4"},Ge={class:"column is-12"},Xe={class:"column is-12"};var Ee=e({expose:[],setup:e=>(e,a)=>{const l=c("apexchart"),r=b,o=q,p=T,h=G,m=Z,w=Se;return s(),t("div",Re,[i("div",Te,[i(r,{straight:""},{default:n((()=>[i(l,{id:"widget-spark1",height:d(u).chart.height,type:d(u).chart.type,series:d(u).series,options:d(u)},null,8,["height","type","series","options"])])),_:1})]),i("div",We,[i(r,{straight:""},{default:n((()=>[i(l,{id:"widget-spark2",height:d(g).chart.height,type:d(g).chart.type,series:d(g).series,options:d(g)},null,8,["height","type","series","options"])])),_:1})]),i("div",Ye,[i(r,{straight:""},{default:n((()=>[i(l,{id:"widget-spark3",height:d(v).chart.height,type:d(v).chart.type,series:d(v).series,options:d(v)},null,8,["height","type","series","options"])])),_:1})]),i("div",Ce,[i(r,{straight:""},{default:n((()=>[i(l,{id:"widget-spark4",height:d(f).chart.height,type:d(f).chart.type,series:d(f).series,options:d(f)},null,8,["height","type","series","options"])])),_:1})]),i("div",Fe,[i(o,{title:"Revenue","current-label":"This Month","current-value":"$75,648.43","previous-label":"Last Month","previous-value":"$91,512.18",straight:""},{default:n((()=>[i(l,{id:"line-stats-widget-chart",height:d(Ae).chart.height,type:d(Ae).chart.type,series:d(Ae).series,options:d(Ae)},null,8,["height","type","series","options"])])),_:1})]),i("div",Oe,[i(o,{title:"Revenue","current-label":"This Month","current-value":"$75,648.43","previous-label":"Last Month","previous-value":"$91,512.18",straight:""},{default:n((()=>[i(l,{id:"line-stats-area-chart",height:d(y).chart.height,type:d(y).chart.type,series:d(y).series,options:d(y)},null,8,["height","type","series","options"])])),_:1})]),i("div",Je,[i(p,{title:"Sales Revenue",straight:""},{default:n((()=>[i(l,{id:"flex-stat-circle",height:d(Be).chart.height,type:d(Be).chart.type,series:d(Be).series,options:d(Be)},null,8,["height","type","series","options"])])),_:1})]),i("div",Ie,[i(p,{title:"Sales Revenue",straight:""},{default:n((()=>[i(l,{id:"flex-stat-radial",height:d(xe).chart.height,type:d(xe).chart.type,series:d(xe).series,options:d(xe)},null,8,["height","type","series","options"])])),_:1})]),i("div",Pe,[i(h,{title:"Additional Stats",values:["264","1,203","3,078"],labels:["New Deals","Proposals","Closed Deals"]},{chart1:n((()=>[i(l,{id:"group-radial-1",height:d(Le).chart.height,type:d(Le).chart.type,series:d(Le).series,options:d(Le)},null,8,["height","type","series","options"])])),chart2:n((()=>[i(l,{id:"group-radial-2",height:d(qe).chart.height,type:d(qe).chart.type,series:d(qe).series,options:d(qe)},null,8,["height","type","series","options"])])),chart3:n((()=>[i(l,{id:"group-radial-3",height:d(ze).chart.height,type:d(ze).chart.type,series:d(ze).series,options:d(ze)},null,8,["height","type","series","options"])])),_:1})]),i("div",Ve,[i(h,{title:"Additional Stats",values:["264","1,203","3,078"],labels:["New Deals","Proposals","Closed Deals"],gauge:""},{chart1:n((()=>[i(l,{id:"group-gauge-1",height:d(je).chart.height,type:d(je).chart.type,series:d(je).series,options:d(je)},null,8,["height","type","series","options"])])),chart2:n((()=>[i(l,{id:"group-gauge-2",height:d($e).chart.height,type:d($e).chart.type,series:d($e).series,options:d($e)},null,8,["height","type","series","options"])])),chart3:n((()=>[i(l,{id:"group-gauge-3",height:d(_e).chart.height,type:d(_e).chart.type,series:d(_e).series,options:d(_e)},null,8,["height","type","series","options"])])),_:1})]),i("div",De,[i(m,{icon:"fab fa-twitter",value:"138K",straight:""})]),i("div",Ke,[i(m,{icon:"fab fa-twitter",value:"138K",straight:"",squared:""})]),i("div",Ne,[i(m,{icon:"fab fa-twitter",value:"138K",straight:"",colored:""})]),i("div",Ge,[i(w,{title:"Members","action-label":"Add Member",data:d(Me),straight:"",squared:""},null,8,["data"])]),i("div",Xe,[i(w,{title:"Members","action-label":"Add Member",data:d(Me),straight:"",circled:""},null,8,["data"])])])}});export{Ee as _};
