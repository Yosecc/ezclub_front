import{A as e,n as a}from"./index.56773f49.js";import{r as s,c as t}from"./vendor.c636f33b.js";const i=s([]),r=t((()=>JSON.parse(JSON.stringify(i.value)))),c=async()=>{const a=await e.get("diciplines_get");return i.value=a.data.diciplines,a.data.diciplines},n=s({}),o=async a=>{const s=await e.get(`diciplines/${a}/edit`);return n.value=s.data,s},d=async a=>await e.get("locations/diciplines/get",{params:{locations:a}}),p=async s=>{s.status=1==s.status?0:1;const t=await e.put(`diciplines/change_status/${s.id}`,{status:s.status});return t.data&&t.data.status?a.success("Record update"):a.error("error"),t},l=async s=>{const t=await e.post("diciplines",s);return t.data&&t.data.status?(a.success("Record update"),c()):a.error("error"),t},u=async(s,t)=>{const i=await e.put(`diciplines/${s}`,t);return i.data&&i.data.status?a.success("Record update"):a.error("error"),i},m=s([{typeInput:"checkbox",name:"CombineDiscipline",placeholder:"Combine Discipline",model:[],required:!0,class:"is-2"},{typeInput:"checkbox",name:"status",placeholder:"Can be add it to membership",model:[],required:!0,class:"is-3"},{typeInput:"text",name:"name",placeholder:"Discipline Name",model:"",required:!0,class:"is-7"},{typeInput:"checkboxGroupSimple",text:"Locations",name:"locations",placeholder:"Locations",model:[],values:[],required:!0,class:"is-12"},{typeInput:"checkboxGroupSimple",name:"trainers",text:"Trainers",model:[],values:[],required:!0,class:"is-12"},{typeInput:"textarea",name:"descrptions",placeholder:"Discipline Description",model:"",required:!0,class:"is-12"},{typeInput:"textarea",name:"notes",placeholder:"Internal Notes",model:"",required:!1,class:"is-12"}]);export{d as a,r as b,o as c,i as d,u as e,c as g,m as i,p,l as s};
