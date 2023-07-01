import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.0348186d.js";import{_ as a}from"./V-Card.vue_vue&type=script&setup=true&lang.36121cf2.js";import{_ as t}from"./inputsLayaut.vue_vue&type=style&index=0&lang.4f31d1cb.js";import{_ as s}from"./formLayaut.vue_vue&type=style&index=0&lang.567c3df7.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import{r as l,d as n,u as o,b as d,w as r,o as c,B as u,h as m,i as p,l as f,k as _,F as v,R as h,S as y,aa as g,K as b,H as E,G as I}from"./vendor.7d5213a2.js";import{A as D,a as S,g as w,f as q,n as x,p as Y,e as k,b as L}from"./index.607eaa23.js";import{a as j,d as M}from"./Diciplines.338e94b9.js";import{a as A,e as $,l as C,f as O}from"./Companies.fe967c8d.js";import{g as H,t as N}from"./Staffs.f8e6b65d.js";l([]);const T=l([]),J=l([]),G=async e=>{const a=await D.get(`schedule?locations_id=${e}`);return J.value=a.data,a},B=l(),F=l([{typeInput:"selectDataActionChange",name:"discipline_id",placeholder:"Discipline",values:[""],model:"",required:!0,class:"is-6"},{typeInput:"checkboxGroupSimpleEventInput",name:"location_id",text:"Locations",values:[""],model:[],required:!0,class:"is-12"}]),K=l([{typeInput:"switchEventChangeInput",name:"mismoshorariostrainers",values:["","Mismos horarios para todos los trainers seleccionados"],model:!1,required:!0,class:"is-6",click:function(){},change:function(){}}]);l([{typeInput:"switchEventChangeInput",name:"mismoshorariosdias",values:["","Mismos horarios para todos los dias"],model:!0,required:!0,class:"is-6",click:function(){},change:function(){}}]);const R=l([{typeInput:"switchEventChangeInput",name:"mismasfechas",values:["","Mismas fechas para todas las locaciones"],model:!0,required:!0,class:"is-12",click:function(){},change:function(){}}]),V=[{typeInput:"date",name:"start_date",placeholder:"Start Date",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"time",name:"start_time",placeholder:"Start Time",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"date",name:"end_date",placeholder:"end Date",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"time",name:"end_time",placeholder:"end Time",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"number",name:"capacity",placeholder:"Capacity people num",values:null,model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"select",name:"type_of_member",placeholder:"Type of Member",values:["Adults Only","Kids Only","Adult & Kids"],model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"select",name:"level",placeholder:"Level",values:["All Levels","Pro","Expert","Medium","Beginner"],model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"color",name:"color",placeholder:"Color",model:"",required:!0,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",name:"is_recurrence",placeholder:"Recurrence",values:["","Recurrence"],model:!1,required:!0,class:"is-3",isLabel:!0,change:function(){}},{typeInput:"checkboxGroupSimpleEventInput",name:"recurrence",text:"Dias de la semana",default:[1,2,3,4,5,6,0],values:[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:0,name:"Sunday"},{id:"All",name:"All"}],model:[],required:!0,disabled:!0,class:"is-12",click:function(){},change:function(){}}],W=l([{typeInput:"checkboxGroupSimpleEventInput",name:"trainers_id",text:"Trainers",values:[""],model:[],required:!0,class:"is-12"}]),P=l(null),U={class:"d-flex justify-content-between"},z=I(" DELETE"),Q=f("h3",{class:"title is-5 mb-2"},"Warning Edit",-1),X={class:"d-flex align-items-center"},Z={class:"ml-3 title is-6"};var ee=n({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save"]},step:{type:Number,default:1},selectInfoData:{type:Object,default:null},idEvent:{type:Number,default:null}},emits:["addEvent","deleteEvent"],setup(n,{emit:I}){const J=n;g();const{cookies:G}=o(),ee=d((()=>"create"==J.type?{title:"Add a new schedule",subtitle:"Add information for a new schedule"}:{title:"Edit schedule",subtitle:"Edit information for a schedule"}));r((()=>J.idEvent),(()=>{"edit"==J.type&&(T.value=[],k(F.value),(async e=>{const a=await D.get(`schedule/${e}/edit`);return B.value=a.data,a})(J.idEvent).then((e=>{w(F.value,"location_id").model.push(B.value.locations_id),w(F.value,"discipline_id").model=B.value.class.dicipline_id,se(B.value.locations_id)})).catch((e=>{console.log(e.response.status),404==e.response.status&&console.log(J.idEvent)})))})),r((()=>O.value),(()=>{S(F,"location_id",O.value)})),r((()=>J.selectInfoData),(()=>{T.value=[],k(F.value),null!=G.get("locations_id")&&(w(F.value,"location_id").model.push(parseFloat(G.get("locations_id"))),se(G.get("locations_id")))}));const ae=function(e){"object"==typeof e&&(e=this.model),se(e)};r((()=>w(C.value,"locations_id").model),(e=>{se(e)})),c((()=>{A().then((e=>{S(C,"locations_id",$.value),w(C.value,"locations_id").change=ae,null!=G.get("locations_id")&&(w(C.value,"locations_id").model=G.get("locations_id"),ae(G.get("locations_id")))})),j().then((e=>{S(F,"discipline_id",M.value)})),w(F.value,"location_id").change=se,w(F.value,"location_id").click=function(){},w(R.value,"mismasfechas").change=function(){w(R.value,"mismasfechas").model||le()},H().then((e=>{S(W,"trainers_id",N.value)}))}));const te=function(e,a){q([this],"trainers_id").forEach((a=>{null==T.value.find((e=>e.locations_id==this.locations_id)).trainers.find((e=>e.staffs_id==a.id))?T.value.find((e=>e.locations_id==this.locations_id)).trainers.push({locations_id:this.locations_id,staffs_id:a.id,name:a.name}):a.id==e.target.value&&T.value.find((e=>e.locations_id==this.locations_id)).trainers.splice(T.value.find((e=>e.locations_id==this.locations_id)).trainers.findIndex((e=>e.staffs_id==a.id)),1)}))};r((()=>w(R.value,"mismasfechas").model),(()=>{w(R.value,"mismasfechas").model&&le()}));const se=function(e,a){let t=null;t="object"==typeof e?e.target.value:e,q(F.value,"location_id").forEach((e=>{if(null==T.value.find((a=>a.locations_id==e.id))){w(K.value,"mismoshorariostrainers").change=ne,w(K.value,"mismoshorariostrainers").locations_id=e.id;let a=l(JSON.parse(JSON.stringify(V))).value;if(J.selectInfoData&&(w(a,"start_date").model=u(J.selectInfoData.start).format("YYYY-MM-DD"),w(a,"start_time").model=u(J.selectInfoData.start).format("HH:mm:ss"),w(a,"end_date").model=u(J.selectInfoData.end).format("YYYY-MM-DD"),w(a,"end_time").model=u(J.selectInfoData.end).format("HH:mm:ss")),"edit"==J.type){if(null==B.value)return x.error("Error Desconocido"),void window.location.reload();w(a,"start_date").model=u(B.value.start_date).format("YYYY-MM-DD"),w(a,"start_time").model=u(B.value.start_date).format("HH:mm:ss"),w(a,"end_date").model=u(B.value.end_date).format("YYYY-MM-DD"),w(a,"end_time").model=u(B.value.end_date).format("HH:mm:ss"),w(a,"capacity").model=B.value.capacity,w(a,"color").model=B.value.color,B.value.recurrence.length>0&&(w(a,"is_recurrence").model=!0,w(a,"recurrence").model=B.value.recurrence,w(a,"recurrence").disabled=!1),w(a,"type_of_member").model=B.value.type_of_member,w(a,"level").model=B.value.level}w(a,"start_date").change=ie,w(a,"end_date").change=ie,w(a,"capacity").change=ie,w(a,"end_time").change=ie,w(a,"start_time").change=ie,w(a,"is_recurrence").change=function(){w(a,"recurrence").disabled=this.model},w(a,"recurrence").click=function(){},w(a,"recurrence").change=function(){this.model.includes("All")&&(this.model=this.default)};let t=l(JSON.parse(JSON.stringify(W.value[0]))).value;t.change=te,t.click=function(){},t.locations_id=e.id,"edit"==J.type&&B.value.trainers.forEach((e=>{t.model.push(e.staffs_id)})),t.filter=function(e){return e.name+" "+e.last_name},console.log("inputsTrainersw",t),a.push(t),T.value.push({locations_id:e.id,name:e.name,start_date:w(a,"start_date"),start_time:w(a,"start_time"),end_date:w(a,"end_date"),end_time:w(a,"end_time"),capacity:w(a,"capacity"),recurrence:w(a,"recurrence"),inputsfechas:a,type_of_member:w(a,"type_of_member"),level:w(a,"level"),color:w(a,"color"),trainers:[]})}else e.id==t&&T.value.splice(T.value.findIndex((a=>a.locations_id==e.id)),1)}))},ie=function(){w(R.value,"mismasfechas").model&&le()},le=function(){let e=T.value.find((e=>e.locations_id==q(F.value,"location_id")[0].id));T.value.filter((e=>e.locations_id!=q(F.value,"location_id")[0].id)).forEach((a=>{w(a.inputsfechas,"start_date").model=w(e.inputsfechas,"start_date").model,w(a.inputsfechas,"end_date").model=w(e.inputsfechas,"end_date").model,w(a.inputsfechas,"end_time").model=w(e.inputsfechas,"end_time").model,w(a.inputsfechas,"start_time").model=w(e.inputsfechas,"start_time").model,w(a.inputsfechas,"capacity").model=w(e.inputsfechas,"capacity").model,w(a.inputsfechas,"color").model=w(e.inputsfechas,"color").model,w(a.inputsfechas,"type_of_member").model=w(e.inputsfechas,"type_of_member").model,w(a.inputsfechas,"level").model=w(e.inputsfechas,"level").model,w(a.inputsfechas,"recurrence").model=w(e.inputsfechas,"recurrence").model}))},ne=function(e){let a=null,t=null;"number"==typeof e?(t=e,a=w(K.value,"mismoshorariostrainers").model):(t=this.locations_id,a=!w(K.value,"mismoshorariostrainers").model);let s=T.value.find((e=>e.locations_id==t)),i=s.trainers[0],n=w(i.inputsDias,"semana").model,o=s.trainers.filter((e=>e.staffs_id!=i.staffs_id)),d=null;o.forEach((e=>{d=l(JSON.parse(JSON.stringify(e.days))),a?(w(e.inputsDias,"semana").model=n,e.days=i.days):(w(e.inputsDias,"semana").model=w(e.inputsDias,"semana").default,e.days=d)}))},oe=()=>{const e=Y(F.value).discipline_id,a=Y(F.value).location_id;let t=[];a.forEach((e=>{let a=T.value.find((a=>a.locations_id==e)),s=[];a.trainers.forEach((e=>{s.push({staffs_id:e.staffs_id})})),t.push({locations_id:a.locations_id,start_date:a.start_date.model+" "+a.start_time.model,end_date:a.end_date.model+" "+a.end_time.model,capacity:a.capacity.model,recurrence:JSON.stringify(a.recurrence.model),type_of_member:a.type_of_member.model,level:a.level.model,color:a.color.model,trainers:s})})),P.value={dicipline_id:e,status:!0,locations:t},"create"==J.type?(async e=>await D.post("schedule",e))(P.value).then((e=>{x.success("Save Success"),e.data.forEach((e=>{I("addEvent",e),T.value=[],k(F.value)}))})).catch((e=>{for(var a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{x.error(`${a} ${e}`)}))})):(async(e,a)=>{const t=await D.put(`schedule/${e}`,a);return B.value=t.data,t})(B.value.id,P.value).then((e=>{x.success("Success Update"),e.data.forEach((e=>{I("addEvent",e),T.value=[],k(F.value)}))})).catch((e=>{for(var a in e.response.data.errores)e.response.data.errores[a].forEach((e=>{x.error(`${a} ${e}`)}))}))},de=()=>{const e=B.value.id;(async e=>await D.delete(`schedule/${e}`))(e).then((e=>{I("deleteEvent",B.value.id),T.value=[],k(F.value)})).catch((a=>{404==a.response.status&&I("deleteEvent",e)}))};return(l,n)=>{const o=e,d=a,r=t,c=s,u=i;return m(),p(h,null,[f(c,{buttons:J.buttons,step:J.step,titles:v(ee),class:"mb-2",onSaveData:oe,color:"warning"},{default:_((()=>["create"!=J.type?(m(),p(d,{key:0,color:"warning"},{default:_((()=>[f("div",U,[f(o,{onClick:de,icon:"fa fa-times",color:"danger",elevated:""},{default:_((()=>[z])),_:1}),Q])])),_:1})):b("",!0),f(r,{"inputs-step":v(F)},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"]),(m(!0),p(h,null,y(v(T),((e,a)=>(m(),p(d,{key:`location-${a}`,class:"mb-4"},{default:_((()=>[f("div",X,[f(u,{picture:`${v(L)}storage/${e.image}`},null,8,["picture"]),f("h1",Z,E(e.name),1)]),f(r,{"inputs-step":v(R)},null,8,["inputs-step"]),f(r,{"inputs-step":e.inputsfechas},null,8,["inputs-step"])])),_:2},1024)))),128))],64)}}});export{ee as _,G as g};
