import{_ as e}from"./Companies.a4797ab3.js";import{_ as a}from"./formLayaut.vue_vue&type=style&index=0&lang.de409503.js";import{d as s,c as t,w as o,o as l,h as n,D as i,A as r,B as c,j as d,k as p}from"./vendor.42a295ea.js";import{i as u,s as m,b as f}from"./Memberships.a308408f.js";import{a as v}from"./Diciplines.90191189.js";import{p as h,c as b,n as g,s as y,g as _}from"./index.1a06469b.js";var j=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},isLoading:{type:Boolean,default:!1}},setup(s){const j=s,A=r(),E=c(),S=t((()=>"create"==j.type?{title:"Add a new membership",subtitle:"Add information for a new club membership"}:{title:"Edit membership",subtitle:"Edit information for a club membership"})),x=t((()=>u.value.find((e=>"locations_options"==e.name)))),k=t((()=>u.value.find((e=>"locations"==e.name))));o(k.value,(e=>{w(e)}));const w=e=>{let a=[];e.model.length>0&&(e.model.forEach((s=>{let t=e.values.find((e=>e.id==s));"create"==j.type&&a.push({name:"locationsSaleOrAccess",value:t.id,placeholder:t.name,values:[{placeholder:"Access",name:"access",model:["access"]},{placeholder:"Sale",name:"sale",model:["sale"]}]})})),y(u,"locations_options",a)),v(k.value.model).then((e=>{y(u,"diciplines",e.data),_(u.value,"diciplines").values.push({id:0,name:"All"})}))};t((()=>u.value.find((e=>"diciplines"==e.name))));const D=()=>{let e=h(u.value),a=[];"create"==j.type&&e.locations.length>0&&(e.locations.forEach((e=>{let s=x.value.values.find((a=>a.value==e));a.push({id:e,access:s.values.find((e=>"access"==e.name)).model.length?1:0,sale:s.values.find((e=>"sale"==e.name)).model.length?1:0})})),e.locations=a,delete e.locations_options);let s=[],t=e.amounts;for(var o in t)s.push({recurrences_id:parseFloat(o),amount:parseFloat(t[o])});e.amounts=s,console.log(e),"create"==j.type?m(e).then((e=>{b(u.value),E.back()})).catch((e=>{for(var a in console.log(e.response.data.errores),e.response.data.errores)e.response.data.errores[a].forEach((e=>{g.error(`${e}: ${a}`)}))})):f(A.query.id,e).then((e=>{g.success("Success")}))};return(t,o)=>{const r=e,c=a;return l(),n(c,{buttons:j.buttons,titles:i(S),"is-loading":s.isLoading,onSaveData:D},{default:d((()=>[p(r,{"inputs-step":i(u)},null,8,["inputs-step"])])),_:1},8,["buttons","titles","is-loading"])}}});export{j as _};