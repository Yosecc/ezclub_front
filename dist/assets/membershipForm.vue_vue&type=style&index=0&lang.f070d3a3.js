import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.85379bea.js";import{_ as a}from"./formLayaut.vue_vue&type=style&index=0&lang.5bc235de.js";import{d as s,b as t,w as o,o as l,h as n,B as i,D as r,j as u,k as c}from"./vendor.95b3aaf6.js";import{i as d,s as p}from"./Memberships.6f46d7cf.js";import{g as m}from"./Diciplines.94f5e2be.js";import{p as f,c as v,n as b,s as h,v as g}from"./Mixin.c770db5b.js";var y=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},isLoading:{type:Boolean,default:!1}},setup(s){const y=s,_=r(),j=t((()=>"create"==y.type?{title:"Add a new membership",subtitle:"Add information for a new club membership"}:{title:"Edit membership",subtitle:"Edit information for a club membership"})),L=t((()=>d.value.find((e=>"locations_options"==e.name)))),x=t((()=>d.value.find((e=>"locations"==e.name))));o(x.value,(e=>{A(e)}));const A=e=>{let a=[];e.model.length>0&&(e.model.forEach((s=>{let t=e.values.find((e=>e.id==s));a.push({name:"locationsSaleOrAccess",value:t.id,placeholder:t.name,values:[{placeholder:"Access",name:"access",model:["access"]},{placeholder:"Sale",name:"sale",model:["sale"]}]})})),h(d,"locations_options",a)),m(x.value.model).then((e=>{h(d,"diciplines",e.data)}))},E=t((()=>d.value.find((e=>"diciplines"==e.name))));o(E.value,(e=>{let a=parseFloat(g(d.value,"diciplines_number"));isNaN(a)||e.model.length>a&&b.error("You must select a limit of "+a+" diciplines")}));const S=()=>{let e=f(d.value),a=[];e.locations.length>0&&(e.locations.forEach((e=>{let s=L.value.values.find((a=>a.value==e));a.push({id:e,access:s.values.find((e=>"access"==e.name)).model.length?1:0,sale:s.values.find((e=>"sale"==e.name)).model.length?1:0})})),e.locations=a,delete e.locations_options);let s=[],t=e.amounts;for(var o in t)s.push({recurrences_id:parseFloat(o),amount:parseFloat(t[o])});e.amounts=s,console.log(e),p(e).then((e=>{v(d.value),_.back()})).catch((e=>{for(var a in e.response.data.rerrores)e.response.data.rerrores[a].forEach((e=>{b.error(e)}))}))};return(t,o)=>{const r=e,p=a;return l(),n(p,{buttons:y.buttons,titles:i(j),isLoading:s.isLoading,onSaveData:S},{default:u((()=>[c(r,{"inputs-step":i(d)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","isLoading"])}}});export{y as _};
