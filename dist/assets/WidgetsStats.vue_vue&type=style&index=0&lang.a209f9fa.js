import{d as e,o as t,i as s,L as a,k as i,G as l,U as r,S as o,h as n,H as d,j as c,E as p}from"./vendor.01c5c571.js";import{_ as u}from"./V-Avatar.vue_vue&type=script&setup=true&lang.bdc086ca.js";import{_ as h}from"./V-Tag.vue_vue&type=script&setup=true&lang.a0cbaab0.js";import{s as g,a as v,b as f,c as y,r as m}from"./revenueAreaChart.b32804a8.js";import{t as b}from"./themeColors.4f0e93f3.js";var w=e({expose:[],props:{straight:{type:Boolean,default:!1}},setup:e=>(i,l)=>(t(),s("div",{class:["stat-widget spark-tile-widget",[e.straight&&"is-straight"]]},[a(i.$slots,"default")],2))});const k={class:"widget-head"},S={class:"dark-inverted"},A={class:"line-stats"},B={class:"line-stat"},x={class:"current"},L={class:"line-stat"},W={class:"dark-inverted"};var q=e({expose:[],props:{title:{type:String,default:"Line stats widget"},currentLabel:{type:String,default:"Current Label"},currentValue:{type:String,default:"$75,648.43"},previousLabel:{type:String,default:"Previous Label"},previousValue:{type:String,default:"$91,512.18"},straight:{type:Boolean,default:!1}},setup:e=>(r,o)=>(t(),s("div",{class:["stat-widget line-stats-widget",[e.straight&&"is-straight"]]},[i("div",k,[i("h3",S,l(e.title),1)]),i("div",A,[i("div",B,[i("span",null,l(e.currentLabel),1),i("span",x,l(e.currentValue),1)]),i("div",L,[i("span",null,l(e.previousLabel),1),i("span",W,l(e.previousValue),1)])]),a(r.$slots,"default")],2))});const z={class:"stat-widget flex-stat-widget is-straight"},j={class:"chart-media"},T={class:"meta"},$={class:"dark-inverted"},_={class:"is-dark-primary"},F={class:"chart-container"};var M=e({expose:[],props:{title:{type:String,default:"Widget Title"},value:{type:String,default:"8,641.26"},text:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis: misera debilitas. Ita ne hoc quidem modo paria."},straight:{type:Boolean,default:!1}},setup:e=>(r,o)=>(t(),s("div",z,[i("div",j,[i("div",T,[i("h4",$,l(e.title),1),i("span",_,"$"+l(e.value),1),i("p",null,l(e.text),1)]),i("div",F,[a(r.$slots,"default")])])]))});const R={class:"widget-head"},Y={class:"dark-inverted"},C={class:"chart-group"},O={class:"group"},J={class:"group-content"},I={class:"dark-inverted"},P={class:"group"},V={class:"group-content"},D={class:"dark-inverted"},G={class:"group"},K={class:"group-content"},N={class:"dark-inverted"};var X=e({expose:[],props:{title:{type:String,default:"Grouped stats widget"},values:{type:Array,required:!0},labels:{type:Array,required:!0},straight:{type:Boolean,default:!1},gauge:{type:Boolean,default:!1}},setup:e=>(r,o)=>(t(),s("div",{class:["stat-widget grouped-stat-widget is-straight",[e.straight&&"is-straight"]]},[i("div",R,[i("h3",Y,l(e.title),1)]),i("div",C,[i("div",O,[i("div",J,[i("div",{class:["chart-container",[e.gauge&&"is-gauge"]]},[a(r.$slots,"chart1")],2),i("span",I,l(e.values[0]),1),i("p",null,l(e.labels[0]),1)])]),i("div",P,[i("div",V,[i("div",{class:["chart-container",[e.gauge&&"is-gauge"]]},[a(r.$slots,"chart2")],2),i("span",D,l(e.values[1]),1),i("p",null,l(e.labels[1]),1)])]),i("div",G,[i("div",K,[i("div",{class:["chart-container",[e.gauge&&"is-gauge"]]},[a(r.$slots,"chart3")],2),i("span",N,l(e.values[2]),1),i("p",null,l(e.labels[2]),1)])])])],2))});const E={class:"follow-block"},H={class:"follow-count"},U={class:"dark-inverted"},Q=i("span",null,"Based on your latest stats",-1),Z=i("a",{href:"#",class:"go-icon"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})],-1);var ee=e({expose:[],props:{icon:{type:String,required:!0},value:{type:String,required:!0},straight:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},colored:{type:Boolean,default:!1}},setup:e=>(a,r)=>(t(),s("div",{class:["stat-widget followers-stat-widget-v1",[e.straight&&"is-straight"]]},[i("div",E,[i("div",{class:["follow-icon",[e.squared&&"is-squared",e.colored&&"is-primary"]]},[i("i",{"aria-hidden":"true",class:e.icon},null,2)],2),i("div",H,[i("span",U,l(e.value)+" Followers",1),Q]),Z])],2))});const te={class:"is-media"},se={class:"double-line"},ae={class:"dark-inverted"},ie={class:"double-line"},le={class:"dark-inverted"},re=i("span",null,"Monthly Income",-1),oe={class:"avatars"},ne={class:"rating-wrap"},de=i("span",null,"Rating",-1),ce={class:"rating"},pe={class:"tag-wrap"},ue={class:"is-end"},he={class:"buttons"},ge=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit-2"})],-1),ve=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:eye"})],-1),fe=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trash-2"})],-1);var ye=e({expose:[],props:{rows:{type:Array,required:!0},squared:{type:Boolean,default:!1},circled:{type:Boolean,default:!1}},setup:e=>(a,n)=>{const d=u,c=h;return t(!0),s(o,null,r(e.rows,(a=>(t(),s("tr",{key:a.id},[i("td",te,[i(d,{picture:a.picture,initials:a.initials,size:"medium",color:a.color,squared:e.squared},null,8,["picture","initials","color","squared"])]),i("td",null,[i("div",se,[i("span",ae,l(a.name),1),i("span",null,"Member since "+l(a.membership),1)])]),i("td",null,[i("div",ie,[i("span",le,"$"+l(a.income),1),re])]),i("td",null,[i("div",oe,[(t(!0),s(o,null,r(a.skills,(e=>(t(),s(d,{key:e.id,picture:e.icon,size:"small"},null,8,["picture"])))),128))])]),i("td",null,[i("div",ne,[de,i("div",ce,[(t(),s(o,null,r(5,((e,t)=>i("i",{key:t,class:["fas fa-star",a.rating-t>0&&"selected"],"aria-hidden":"true"},null,2))),64))])])]),i("td",null,[i("div",pe,[i(c,{class:["Approved"===a.status&&"is-green","Pending"===a.status&&"is-info","Suspended"===a.status&&"is-orange"],label:a.status,elevated:""},null,8,["class","label"])])]),i("td",ue,[i("div",he,[i("button",{class:["button is-dark-outlined",[e.circled&&"is-circle"]]},[ge],2),i("button",{class:["button is-dark-outlined",[e.circled&&"is-circle"]]},[ve],2),i("button",{class:["button is-dark-outlined",[e.circled&&"is-circle"]]},[fe],2)])])])))),128)}});const me={class:"widget-head"},be={class:"dark-inverted"},we={class:"button v-button is-primary is-elevated"},ke=i("span",{class:"icon is-small"},[i("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),Se={class:"table is-hoverable is-fullwidth"};var Ae=e({expose:[],props:{title:{type:String,default:"Widget Title"},actionLabel:{type:String,default:"Add Item"},straight:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},circled:{type:Boolean,default:!1},data:{type:Array,required:!0}},setup:e=>(a,r)=>{const o=ye;return t(),s("div",{class:["stat-widget table-widget-v1",[e.straight&&"is-straight"]]},[i("div",me,[i("h3",be,l(e.title),1),i("button",we,[ke,i("span",null,l(e.actionLabel),1)])]),i("table",Se,[i("tbody",null,[i(o,{rows:e.data,squared:e.squared,circled:e.circled},null,8,["rows","squared","circled"])])])],2)}});const Be={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[b.accent],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$"+e}}}},xe={series:[65],chart:{height:150,type:"radialBar",offsetX:-10,toolbar:{show:!1}},colors:[b.purple],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!1,fontSize:"12px",fontWeight:400,offsetY:5,color:b.lightText},value:{show:!0,fontWeight:600,fontFamily:"Roboto, sans-serif",color:b.purple,fontSize:"16px",offsetY:5}}}},labels:["Progress"]},Le={series:[65],chart:{height:180,type:"radialBar",offsetX:-15,offsetY:-10,toolbar:{show:!1}},colors:[b.info,b.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:b.lightText,show:!1},value:{offsetY:5,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},We={series:[31],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[b.info],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},qe={series:[53],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[b.orange],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},ze={series:[84],chart:{height:102,type:"radialBar",offsetY:-10,toolbar:{show:!1}},colors:[b.green],plotOptions:{radialBar:{hollow:{size:"35%"},dataLabels:{show:!1}}},labels:[""]},je={series:[57],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[b.accent],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},Te={series:[36],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[b.orange],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},$e={series:[88],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[b.green],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},_e=[{id:0,picture:"/demo/avatars/8.gif",name:"Tina Dasilva",initials:"td",color:"info",membership:"Apr 2019",income:"7,854.32",skills:[{id:0,icon:"/images/icons/stacks/js.svg"},{id:1,icon:"/images/icons/stacks/html5.svg"},{id:2,icon:"/images/icons/stacks/css3.svg"}],rating:5,status:"Approved"},{id:1,picture:"/demo/avatars/1.gif",name:"John Wistmus",initials:"jw",color:"info",membership:"Jun 2018",income:"5,435.49",skills:[{id:3,icon:"/images/icons/stacks/reactjs.svg"},{id:4,icon:"/images/icons/stacks/nodejs.svg"}],rating:4,status:"Approved"},{id:2,picture:"/demo/avatars/4.gif",name:"Sam Watson",initials:"sw",color:"info",membership:"Jun 2020",income:"824.67",skills:[{id:5,icon:"/images/icons/stacks/csharp.svg"},{id:6,icon:"/images/icons/stacks/android.svg"},{id:7,icon:"/images/icons/stacks/laravel.svg"}],rating:5,status:"Pending"},{id:3,picture:null,name:"Jolaine Joestar",initials:"jj",color:"info",membership:"Feb 2020",income:"261.12",skills:[{id:8,icon:"/images/icons/stacks/illustrator.svg"}],rating:3,status:"Suspended"},{id:4,picture:"/demo/avatars/3.gif",name:"Anders Jensen",initials:"aj",color:"info",membership:"Nov 2020",income:"4,231.67",skills:[{id:3,icon:"/images/icons/stacks/reactjs.svg"},{id:9,icon:"/images/icons/stacks/vuejs.svg"}],rating:5,status:"Approved"}],Fe={class:"columns is-multiline"},Me={class:"column is-3"},Re={class:"column is-3"},Ye={class:"column is-3"},Ce={class:"column is-3"},Oe={class:"column is-6"},Je={class:"column is-6"},Ie={class:"column is-6"},Pe={class:"column is-6"},Ve={class:"column is-6"},De={class:"column is-6"},Ge={class:"column is-4"},Ke={class:"column is-4"},Ne={class:"column is-4"},Xe={class:"column is-12"},Ee={class:"column is-12"};var He=e({expose:[],setup:e=>(e,a)=>{const l=n("apexchart"),r=w,o=q,u=M,h=X,b=ee,k=Ae;return t(),s("div",Fe,[d("Spark Tile Widgets"),i("div",Me,[i(r,{straight:""},{default:c((()=>[i(l,{id:"widget-spark1",height:p(g).chart.height,type:p(g).chart.type,series:p(g).series,options:p(g)},null,8,["height","type","series","options"])])),_:1})]),i("div",Re,[i(r,{straight:""},{default:c((()=>[i(l,{id:"widget-spark2",height:p(v).chart.height,type:p(v).chart.type,series:p(v).series,options:p(v)},null,8,["height","type","series","options"])])),_:1})]),i("div",Ye,[i(r,{straight:""},{default:c((()=>[i(l,{id:"widget-spark3",height:p(f).chart.height,type:p(f).chart.type,series:p(f).series,options:p(f)},null,8,["height","type","series","options"])])),_:1})]),i("div",Ce,[i(r,{straight:""},{default:c((()=>[i(l,{id:"widget-spark4",height:p(y).chart.height,type:p(y).chart.type,series:p(y).series,options:p(y)},null,8,["height","type","series","options"])])),_:1})]),d("Line Stats Widget"),i("div",Oe,[i(o,{title:"Revenue","current-label":"This Month","current-value":"$75,648.43","previous-label":"Last Month","previous-value":"$91,512.18",straight:""},{default:c((()=>[i(l,{id:"line-stats-widget-chart",height:p(Be).chart.height,type:p(Be).chart.type,series:p(Be).series,options:p(Be)},null,8,["height","type","series","options"])])),_:1})]),d("Line Stats Widget"),i("div",Je,[i(o,{title:"Revenue","current-label":"This Month","current-value":"$75,648.43","previous-label":"Last Month","previous-value":"$91,512.18",straight:""},{default:c((()=>[i(l,{id:"line-stats-area-chart",height:p(m).chart.height,type:p(m).chart.type,series:p(m).series,options:p(m)},null,8,["height","type","series","options"])])),_:1})]),d("Flex Stat Widget"),i("div",Ie,[i(u,{title:"Sales Revenue",straight:""},{default:c((()=>[i(l,{id:"flex-stat-circle",height:p(xe).chart.height,type:p(xe).chart.type,series:p(xe).series,options:p(xe)},null,8,["height","type","series","options"])])),_:1})]),d("Flex Stat Widget"),i("div",Pe,[i(u,{title:"Sales Revenue",straight:""},{default:c((()=>[i(l,{id:"flex-stat-radial",height:p(Le).chart.height,type:p(Le).chart.type,series:p(Le).series,options:p(Le)},null,8,["height","type","series","options"])])),_:1})]),d("Grouped Stat Widget"),i("div",Ve,[i(h,{title:"Additional Stats",values:["264","1,203","3,078"],labels:["New Deals","Proposals","Closed Deals"]},{chart1:c((()=>[i(l,{id:"group-radial-1",height:p(We).chart.height,type:p(We).chart.type,series:p(We).series,options:p(We)},null,8,["height","type","series","options"])])),chart2:c((()=>[i(l,{id:"group-radial-2",height:p(qe).chart.height,type:p(qe).chart.type,series:p(qe).series,options:p(qe)},null,8,["height","type","series","options"])])),chart3:c((()=>[i(l,{id:"group-radial-3",height:p(ze).chart.height,type:p(ze).chart.type,series:p(ze).series,options:p(ze)},null,8,["height","type","series","options"])])),_:1})]),d("Grouped Stat Widget"),i("div",De,[i(h,{title:"Additional Stats",values:["264","1,203","3,078"],labels:["New Deals","Proposals","Closed Deals"],gauge:""},{chart1:c((()=>[i(l,{id:"group-gauge-1",height:p(je).chart.height,type:p(je).chart.type,series:p(je).series,options:p(je)},null,8,["height","type","series","options"])])),chart2:c((()=>[i(l,{id:"group-gauge-2",height:p(Te).chart.height,type:p(Te).chart.type,series:p(Te).series,options:p(Te)},null,8,["height","type","series","options"])])),chart3:c((()=>[i(l,{id:"group-gauge-3",height:p($e).chart.height,type:p($e).chart.type,series:p($e).series,options:p($e)},null,8,["height","type","series","options"])])),_:1})]),d("Followers Stat Widget"),i("div",Ge,[i(b,{icon:"fab fa-twitter",value:"138K",straight:""})]),d("Followers Stat Widget"),i("div",Ke,[i(b,{icon:"fab fa-twitter",value:"138K",straight:"",squared:""})]),d("Followers Stat Widget"),i("div",Ne,[i(b,{icon:"fab fa-twitter",value:"138K",straight:"",colored:""})]),d("Table Widget"),i("div",Xe,[i(k,{title:"Members","action-label":"Add Member",data:p(_e),straight:"",squared:""},null,8,["data"])]),d("Table Widget"),i("div",Ee,[i(k,{title:"Members","action-label":"Add Member",data:p(_e),straight:"",circled:""},null,8,["data"])])])}});export{He as _};
