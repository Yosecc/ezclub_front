import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.aa5c0d97.js";import{_ as a}from"./formLayaut.vue_vue&type=style&index=0&lang.0872bfe2.js";import{d as s,L as t,a4 as o,c as l,w as n,o as i,i as r,D as c,j as d,k as u}from"./vendor.512b7acb.js";import{i as p,s as m,c as f}from"./Memberships.4b071989.js";import{a as v}from"./Diciplines.19ed18a4.js";import{a as h,g as b,p as y,d as g,n as _}from"./index.839b10d7.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},isLoading:{type:Boolean,default:!1}},setup(s){const j=s,A=t(),x=o(),E=l((()=>"create"==j.type?{title:"Add a new membership",subtitle:"Add information for a new club membership"}:{title:"Edit membership",subtitle:"Edit information for a club membership"})),L=l((()=>p.value.find((e=>"locations_options"==e.name)))),S=l((()=>p.value.find((e=>"locations"==e.name))));n(S.value,(e=>{k(e)}));const k=e=>{let a=[];e.model.length>0&&(e.model.forEach((s=>{let t=e.values.find((e=>e.id==s));"create"==j.type&&a.push({name:"locationsSaleOrAccess",value:t.id,placeholder:t.name,values:[{placeholder:"Access",name:"access",model:["access"]},{placeholder:"Sale",name:"sale",model:["sale"]}]})})),h(p,"locations_options",a)),v(S.value.model).then((e=>{h(p,"diciplines",e.data),b(p.value,"diciplines").values.push({id:0,name:"All"})}))};l((()=>p.value.find((e=>"diciplines"==e.name))));const w=()=>{let e=y(p.value),a=[];"create"==j.type&&e.locations.length>0&&(e.locations.forEach((e=>{let s=L.value.values.find((a=>a.value==e));a.push({id:e,access:s.values.find((e=>"access"==e.name)).model.length?1:0,sale:s.values.find((e=>"sale"==e.name)).model.length?1:0})})),e.locations=a,delete e.locations_options);let s=[],t=e.amounts;for(var o in t)s.push({recurrences_id:parseFloat(o),amount:parseFloat(t[o])});e.amounts=s,console.log(e),"create"==j.type?m(e).then((e=>{g(p.value),x.back()})).catch((e=>{for(var a in console.log(e.response.data.errores),e.response.data.errores)e.response.data.errores[a].forEach((e=>{_.error(`${e}: ${a}`)}))})):f(A.query.id,e).then((e=>{_.success("Success")}))};return(t,o)=>{const l=e,n=a;return i(),r(n,{buttons:j.buttons,titles:c(E),"is-loading":s.isLoading,onSaveData:w},{default:d((()=>[u(l,{"inputs-step":c(p)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{j as _};
