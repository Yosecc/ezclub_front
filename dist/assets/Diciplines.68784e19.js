<<<<<<< HEAD:dist/assets/Diciplines.5e7d07fe.js
import{r as e,b as a}from"./vendor.84e48f7c.js";import{A as s,n as t}from"./index.7b297ef5.js";const i=e([]),r=a((()=>JSON.parse(JSON.stringify(i.value)))),c=async()=>{const e=await s.get("diciplines_get");return i.value=e.data.diciplines,e.data.diciplines},n=e({}),o=async e=>{const a=await s.get(`diciplines/${e}/edit`);return n.value=a.data,a},l=async e=>await s.get("locations/diciplines/get",{params:{locations:e}}),d=async e=>{e.status=1==e.status?0:1;const a=await s.put(`diciplines/change_status/${e.id}`,{status:e.status});return a.data&&a.data.status?t.success("Record update"):t.error("error"),a},p=async e=>{const a=await s.post("diciplines",e);return a.data&&a.data.status?(t.success("Record update"),c()):t.error("error"),a},u=async(e,a)=>{const i=await s.put(`diciplines/${e}`,a);return i.data&&i.data.status?t.success("Record update"):t.error("error"),i},m=e([{typeInput:"checkbox",name:"CombineDiscipline",placeholder:"Combine Discipline",model:[],required:!1,isLabel:!0,class:"is-2"},{typeInput:"checkbox",name:"status",placeholder:"Can be add it to membership",model:[],required:!0,isLabel:!0,class:"is-3"},{typeInput:"text",name:"name",placeholder:"Discipline Name",model:"",required:!0,isLabel:!0,class:"is-7"},{typeInput:"checkboxGroupSimple",text:"Locations",name:"locations",placeholder:"Locations",model:[],values:[],required:!0,isLabel:!0,class:"is-12"},{typeInput:"checkboxGroupSimple",name:"trainers",text:"Trainers",model:[],values:[],required:!0,isLabel:!0,class:"is-12"},{typeInput:"textarea",name:"descrptions",placeholder:"Discipline Description",model:"",required:!0,isLabel:!0,class:"is-12"},{typeInput:"textarea",name:"notes",placeholder:"Internal Notes",model:"",required:!1,isLabel:!0,class:"is-12"}]);export{c as a,r as b,o as c,i as d,u as e,l as g,m as i,d as p,p as s};
=======
import{A as e,n as a}from"./index.f93c57bf.js";import{r as s,b as t}from"./vendor.4454b83d.js";const i=s([]),r=t((()=>JSON.parse(JSON.stringify(i.value)))),c=async()=>{const a=await e.get("diciplines_get");return i.value=a.data.diciplines,a.data.diciplines},n=s({}),o=async a=>{const s=await e.get(`diciplines/${a}/edit`);return n.value=s.data,s},l=async a=>await e.get("locations/diciplines/get",{params:{locations:a}}),d=async s=>{s.status=1==s.status?0:1;const t=await e.put(`diciplines/change_status/${s.id}`,{status:s.status});return t.data&&t.data.status?a.success("Record update"):a.error("error"),t},p=async s=>{const t=await e.post("diciplines",s);return t.data&&t.data.status?(a.success("Record update"),c()):a.error("error"),t},u=async(s,t)=>{const i=await e.put(`diciplines/${s}`,t);return i.data&&i.data.status?a.success("Record update"):a.error("error"),i},m=s([{typeInput:"checkbox",name:"CombineDiscipline",placeholder:"Combine Discipline",model:[],required:!1,isLabel:!0,class:"is-2"},{typeInput:"checkbox",name:"status",placeholder:"Can be add it to membership",model:[],required:!0,isLabel:!0,class:"is-3"},{typeInput:"text",name:"name",placeholder:"Discipline Name",model:"",required:!0,isLabel:!0,class:"is-7"},{typeInput:"checkboxGroupSimple",text:"Locations",name:"locations",placeholder:"Locations",model:[],values:[],required:!0,isLabel:!0,class:"is-12"},{typeInput:"checkboxGroupSimple",name:"trainers",text:"Trainers",model:[],values:[],required:!0,isLabel:!0,class:"is-12"},{typeInput:"textarea",name:"descrptions",placeholder:"Discipline Description",model:"",required:!0,isLabel:!0,class:"is-12"},{typeInput:"textarea",name:"notes",placeholder:"Internal Notes",model:"",required:!1,isLabel:!0,class:"is-12"}]);export{c as a,r as b,o as c,i as d,u as e,l as g,m as i,d as p,p as s};
>>>>>>> f74634b016b85cac5d0c40f100eb257996c0e0e9:dist/assets/Diciplines.68784e19.js
