import{_ as e}from"./V-AnimatedCheckbox.vue_vue&type=style&index=0&lang.9feae371.js";import{d as t,y as i,D as a,o as l,c as s,L as d,N as n,e as o,F as m,t as c,E as r}from"./vendor.777d9173.js";const u={class:"flex-meta is-light"},p={href:"#"},g={class:"flex-end"},v={class:"tag is-rounded"};var P=t({expose:[],props:{todos:{type:Array,required:!0,default:[]},modelValue:{type:Array,default:[]},color:{type:String,default:void 0}},emits:["update:modelValue"],setup(t,{emit:c}){const r=i(t.modelValue);return a(r,(()=>{c("update:modelValue",r.value)})),(i,a)=>{const c=e;return l(),s("div",null,[(l(!0),s(d,null,n(t.todos,(e=>(l(),s("div",{key:e.id,class:"inner-list-item media-flex-center"},[o(c,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),value:e.title,color:t.color},null,8,["modelValue","value","color"]),o("div",u,[o("a",p,m(e.title),1),o("span",null,m(e.time),1)]),o("div",g,[o("span",v,m(e.status),1)])])))),128))])}}});const f={class:"widget-head"},y={class:"dark-inverted"},b={class:"tabbed-controls"},w=o("div",{class:"tabbed-naver"},null,-1),h={class:"inner-list"},M={class:"inner-list"};var k=t({expose:[],props:{title:{type:String,required:!0,default:"List Widget"},labels:{type:Array,default:["Recent","Popular"]},straight:{type:Boolean,default:!1},toggled:{type:Boolean,default:!1}},setup(e){let t=i(e.toggled);const a=()=>{t.value=!t.value};return(i,d)=>(l(),s("div",{class:["list-widget tabbed-widget",[e.straight&&"is-straight"]]},[o("div",f,[o("h3",y,m(e.title),1),o("div",b,[o("a",{class:["tabbed-control",[!c(t)&&"is-active"]],onClick:a},[o("span",null,m(e.labels[0]),1)],2),o("a",{class:["tabbed-control",[c(t)&&"is-active"]],onClick:a},[o("span",null,m(e.labels[1]),1)],2),w])]),o("div",{class:["inner-list-wrapper",[!c(t)&&"is-active"]]},[o("div",h,[r(i.$slots,"tab1")])],2),o("div",{class:["inner-list-wrapper",[c(t)&&"is-active"]]},[o("div",M,[r(i.$slots,"tab2")])],2)],2))}});const R=i([{id:0,completed:!0,title:"Call Mike R.",time:"at 8:30am",status:"Pending"},{id:1,completed:!1,title:"Finish document review",time:"at 11:30am",status:"Pending"},{id:2,completed:!1,title:"Project Meeting",time:"at 12:00pm",status:"Pending"},{id:3,completed:!1,title:"Meet with Kacey M.",time:"at 3:00pm",status:"Pending"},{id:4,completed:!1,title:"Review final draft",time:"at 6:00pm",status:"Pending"}]),x=i([{id:0,completed:!0,title:"Call Mike R.",time:"at 8:30am",status:"Pending"},{id:1,completed:!1,title:"Finish document review",time:"at 11:30am",status:"Pending"},{id:2,completed:!0,title:"Project Meeting",time:"at 12:00pm",status:"Pending"},{id:3,completed:!0,title:"Meet with Kacey M.",time:"at 3:00pm",status:"Pending"},{id:4,completed:!1,title:"Review final draft",time:"at 6:00pm",status:"Pending"}]),V=i([{id:0,completed:!0,title:"Call Mike R.",time:"at 8:30am",status:"Pending"},{id:1,completed:!1,title:"Finish document review",time:"at 11:30am",status:"Pending"},{id:2,completed:!1,title:"Project Meeting",time:"at 12:00pm",status:"Pending"},{id:3,completed:!1,title:"Meet with Kacey M.",time:"at 3:00pm",status:"Pending"},{id:4,completed:!1,title:"Review final draft",time:"at 6:00pm",status:"Pending"}]),C=i([{id:0,completed:!0,title:"Call Mike R.",time:"at 8:30am",status:"Pending"},{id:1,completed:!1,title:"Finish document review",time:"at 11:30am",status:"Pending"},{id:2,completed:!0,title:"Project Meeting",time:"at 12:00pm",status:"Pending"},{id:3,completed:!0,title:"Meet with Kacey M.",time:"at 3:00pm",status:"Pending"},{id:4,completed:!1,title:"Review final draft",time:"at 6:00pm",status:"Pending"}]);export{k as _,C as a,P as b,R as c,x as d,V as t};
