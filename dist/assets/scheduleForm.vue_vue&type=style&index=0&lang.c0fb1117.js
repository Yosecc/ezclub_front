import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.a2676413.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.4216e99a.js";import{b as t,c as s,l as i,e as l,_ as n}from"./Companies.3fb82902.js";import{_ as o}from"./formLayaut.vue_vue&type=style&index=0&lang.853d6f33.js";import{_ as d}from"./V-Avatar.vue_vue&type=script&setup=true&lang.0d774617.js";import{r as c,d as r,u,c as m,w as p,G as f,z as _,o as v,h,k as y,j as g,D as b,O as E,P as I,a2 as D,L as S,F as w,E as q}from"./vendor.020847a3.js";import{A as Y,a as k,g as x,d as L,n as j,p as M,c as A,b as O}from"./index.1c4602e1.js";import{g as $,d as C}from"./Diciplines.7b40d8ce.js";import{h as N,t as H}from"./Staffs.229031a9.js";c([]);const J=c([]),T=c([]),G=async e=>{const a=await Y.get(`schedule?locations_id=${e}`);return T.value=a.data,a},F=c(),V=c([{typeInput:"selectDataActionChange",name:"discipline_id",placeholder:"Discipline",values:[""],model:"",required:!0,class:"is-6"},{typeInput:"checkboxGroupSimpleEventInput",name:"location_id",text:"Locations",values:[""],model:[],required:!0,class:"is-12"}]),B=c([{typeInput:"switchEventChangeInput",name:"mismoshorariostrainers",values:["","Mismos horarios para todos los trainers seleccionados"],model:!1,required:!0,class:"is-6",click:function(){},change:function(){}}]);c([{typeInput:"switchEventChangeInput",name:"mismoshorariosdias",values:["","Mismos horarios para todos los dias"],model:!0,required:!0,class:"is-6",click:function(){},change:function(){}}]);const K=c([{typeInput:"switchEventChangeInput",name:"mismasfechas",values:["","Mismas fechas para todas las locaciones"],model:!0,required:!0,class:"is-12",click:function(){},change:function(){}}]),P=[{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"time",name:"start_time",placeholder:"Start Time",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"end Date",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"time",name:"end_time",placeholder:"end Time",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"number",name:"capacity",placeholder:"Capacity people num",values:null,model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"select",name:"type_of_member",placeholder:"Type of Member",values:["Adults Only","Kids Only","Adult & Kids"],model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"select",name:"level",placeholder:"Level",values:["All Levels","Pro","Expert","Medium","Beginner"],model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"color",name:"color",placeholder:"Color",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",name:"is_recurrence",placeholder:"Recurrence",values:["","Recurrence"],model:!1,required:!0,class:"is-3",isLabel:!0,change:function(){}},{typeInput:"checkboxGroupSimpleEventInput",name:"recurrence",text:"Dias de la semana",default:[1,2,3,4,5,6,0],values:[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:0,name:"Sunday"},{id:"All",name:"All"}],model:[],required:!0,disabled:!0,class:"is-12",click:function(){},change:function(){}}],R=c([{typeInput:"checkboxGroupSimpleEventInput",name:"trainers_id",text:"Trainers",values:[""],model:[],required:!0,class:"is-12"}]),W=c(null),z={class:"d-flex justify-content-between"},U=q(" DELETE"),Q=y("h3",{class:"title is-5 mb-2"},"Warning Edit",-1),X={class:"d-flex align-items-center"},Z={class:"ml-3 title is-6"};var ee=r({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1},selectInfoData:{type:Object,default:null},idEvent:{type:Number,default:null}},emits:["addEvent","deleteEvent"],setup(r,{emit:q}){const T=r;D();const{cookies:G}=u(),ee=m((()=>"create"==T.type?{title:"Add a new schedule",subtitle:"Add information for a new schedule"}:{title:"Edit schedule",subtitle:"Edit information for a schedule"}));p((()=>T.idEvent),(()=>{"edit"==T.type&&(J.value=[],A(V.value),(async e=>{const a=await Y.get(`schedule/${e}/edit`);return F.value=a.data,a})(T.idEvent).then((e=>{x(V.value,"location_id").model.push(F.value.locations_id),x(V.value,"discipline_id").model=F.value.class.dicipline_id,se(F.value.locations_id)})).catch((e=>{console.log(e.response.status),404==e.response.status&&console.log(T.idEvent)})))})),p((()=>l.value),(()=>{k(V,"location_id",l.value)})),p((()=>T.selectInfoData),(()=>{J.value=[],A(V.value),null!=G.get("locations_id")&&(x(V.value,"location_id").model.push(parseFloat(G.get("locations_id"))),se(G.get("locations_id")))}));const ae=function(e){"object"==typeof e&&(e=this.model),se(e)};p((()=>x(i.value,"locations_id").model),(e=>{se(e)})),f((()=>{t().then((e=>{k(i,"locations_id",s.value.locations),x(i.value,"locations_id").change=ae,null!=G.get("locations_id")&&(x(i.value,"locations_id").model=G.get("locations_id"),ae(G.get("locations_id")))})),$().then((e=>{k(V,"discipline_id",C.value)})),x(V.value,"location_id").change=se,x(V.value,"location_id").click=function(){},x(K.value,"mismasfechas").change=function(){x(K.value,"mismasfechas").model||le()},N().then((e=>{k(R,"trainers_id",H.value)}))}));const te=function(e,a){L([this],"trainers_id").forEach((a=>{null==J.value.find((e=>e.locations_id==this.locations_id)).trainers.find((e=>e.staffs_id==a.id))?J.value.find((e=>e.locations_id==this.locations_id)).trainers.push({locations_id:this.locations_id,staffs_id:a.id,name:a.name}):a.id==e.target.value&&J.value.find((e=>e.locations_id==this.locations_id)).trainers.splice(J.value.find((e=>e.locations_id==this.locations_id)).trainers.findIndex((e=>e.staffs_id==a.id)),1)}))};p((()=>x(K.value,"mismasfechas").model),(()=>{x(K.value,"mismasfechas").model&&le()}));const se=function(e,a){let t=null;t="object"==typeof e?e.target.value:e,L(V.value,"location_id").forEach((e=>{if(null==J.value.find((a=>a.locations_id==e.id))){x(B.value,"mismoshorariostrainers").change=ne,x(B.value,"mismoshorariostrainers").locations_id=e.id;let a=c(JSON.parse(JSON.stringify(P))).value;if(T.selectInfoData&&(x(a,"start_date").model=_(T.selectInfoData.start).format("YYYY-MM-DD"),x(a,"start_time").model=_(T.selectInfoData.start).format("HH:mm:ss"),x(a,"end_date").model=_(T.selectInfoData.end).format("YYYY-MM-DD"),x(a,"end_time").model=_(T.selectInfoData.end).format("HH:mm:ss")),"edit"==T.type){if(null==F.value)return j.error("Error Desconocido"),void window.location.reload();x(a,"start_date").model=_(F.value.start_date).format("YYYY-MM-DD"),x(a,"start_time").model=_(F.value.start_date).format("HH:mm:ss"),x(a,"end_date").model=_(F.value.end_date).format("YYYY-MM-DD"),x(a,"end_time").model=_(F.value.end_date).format("HH:mm:ss"),x(a,"capacity").model=F.value.capacity,x(a,"color").model=F.value.color,F.value.recurrence.length>0&&(x(a,"is_recurrence").model=!0,x(a,"recurrence").model=F.value.recurrence,x(a,"recurrence").disabled=!1),x(a,"type_of_member").model=F.value.type_of_member,x(a,"level").model=F.value.level}x(a,"start_date").change=ie,x(a,"end_date").change=ie,x(a,"capacity").change=ie,x(a,"end_time").change=ie,x(a,"start_time").change=ie,x(a,"is_recurrence").change=function(){x(a,"recurrence").disabled=this.model},x(a,"recurrence").click=function(){},x(a,"recurrence").change=function(){this.model.includes("All")&&(this.model=this.default)};let t=c(JSON.parse(JSON.stringify(R.value[0]))).value;t.change=te,t.click=function(){},t.locations_id=e.id,"edit"==T.type&&F.value.trainers.forEach((e=>{t.model.push(e.staffs_id)})),a.push(t),J.value.push({locations_id:e.id,name:e.name,start_date:x(a,"start_date"),start_time:x(a,"start_time"),end_date:x(a,"end_date"),end_time:x(a,"end_time"),capacity:x(a,"capacity"),recurrence:x(a,"recurrence"),inputsfechas:a,type_of_member:x(a,"type_of_member"),level:x(a,"level"),color:x(a,"color"),trainers:[]})}else e.id==t&&J.value.splice(J.value.findIndex((a=>a.locations_id==e.id)),1)}))},ie=function(){x(K.value,"mismasfechas").model&&le()},le=function(){let e=J.value.find((e=>e.locations_id==L(V.value,"location_id")[0].id));J.value.filter((e=>e.locations_id!=L(V.value,"location_id")[0].id)).forEach((a=>{x(a.inputsfechas,"start_date").model=x(e.inputsfechas,"start_date").model,x(a.inputsfechas,"end_date").model=x(e.inputsfechas,"end_date").model,x(a.inputsfechas,"end_time").model=x(e.inputsfechas,"end_time").model,x(a.inputsfechas,"start_time").model=x(e.inputsfechas,"start_time").model,x(a.inputsfechas,"capacity").model=x(e.inputsfechas,"capacity").model,x(a.inputsfechas,"color").model=x(e.inputsfechas,"color").model,x(a.inputsfechas,"type_of_member").model=x(e.inputsfechas,"type_of_member").model,x(a.inputsfechas,"level").model=x(e.inputsfechas,"level").model,x(a.inputsfechas,"recurrence").model=x(e.inputsfechas,"recurrence").model}))},ne=function(e){let a=null,t=null;"number"==typeof e?(t=e,a=x(B.value,"mismoshorariostrainers").model):(t=this.locations_id,a=!x(B.value,"mismoshorariostrainers").model);let s=J.value.find((e=>e.locations_id==t)),i=s.trainers[0],l=x(i.inputsDias,"semana").model,n=s.trainers.filter((e=>e.staffs_id!=i.staffs_id)),o=null;n.forEach((e=>{o=c(JSON.parse(JSON.stringify(e.days))),a?(x(e.inputsDias,"semana").model=l,e.days=i.days):(x(e.inputsDias,"semana").model=x(e.inputsDias,"semana").default,e.days=o)}))},oe=()=>{const e=M(V.value).discipline_id,a=M(V.value).location_id;let t=[];a.forEach((e=>{let a=J.value.find((a=>a.locations_id==e)),s=[];a.trainers.forEach((e=>{s.push({staffs_id:e.staffs_id})})),t.push({locations_id:a.locations_id,start_date:a.start_date.model+" "+a.start_time.model,end_date:a.end_date.model+" "+a.end_time.model,capacity:a.capacity.model,recurrence:JSON.stringify(a.recurrence.model),type_of_member:a.type_of_member.model,level:a.level.model,color:a.color.model,trainers:s})})),W.value={dicipline_id:e,status:!0,locations:t},"create"==T.type?(async e=>await Y.post("schedule",e))(W.value).then((e=>{j.success("Save Success"),e.data.forEach((e=>{q("addEvent",e),J.value=[],A(V.value)}))})).catch((e=>{for(var a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{j.error(`${a} ${e}`)}))})):(async(e,a)=>{const t=await Y.put(`schedule/${e}`,a);return F.value=t.data,t})(F.value.id,W.value).then((e=>{j.success("Success Update"),e.data.forEach((e=>{q("addEvent",e),J.value=[],A(V.value)}))})).catch((e=>{for(var a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{j.error(`${a} ${e}`)}))}))},de=()=>{const e=F.value.id;(async e=>await Y.delete(`schedule/${e}`))(e).then((e=>{q("deleteEvent",F.value.id),J.value=[],A(V.value)})).catch((a=>{404==a.response.status&&(console.log("props.idEvent",e),q("deleteEvent",e))}))};return(t,s)=>{const i=e,l=a,c=n,r=o,u=d;return v(),h(E,null,[y(r,{buttons:T.buttons,step:T.step,titles:b(ee),class:"mb-2",onSaveData:oe,color:"warning"},{default:g((()=>["create"!=T.type?(v(),h(l,{key:0,color:"warning"},{default:g((()=>[y("div",z,[y(i,{onClick:de,icon:"fa fa-times",color:"danger",elevated:""},{default:g((()=>[U])),_:1}),Q])])),_:1})):S("",!0),y(c,{"inputs-step":b(V)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"]),(v(!0),h(E,null,I(b(J),((e,a)=>(v(),h(l,{key:`location-${a}`,class:"mb-4"},{default:g((()=>[y("div",X,[y(u,{picture:`${b(O)}storage/${e.image}`},null,8,["picture"]),y("h1",Z,w(e.name),1)]),y(c,{"inputs-step":b(K)},null,8,["inputs-step"]),y(c,{"inputs-step":e.inputsfechas},null,8,["inputs-step"])])),_:2},1024)))),128))],64)}}});export{ee as _,G as g};
