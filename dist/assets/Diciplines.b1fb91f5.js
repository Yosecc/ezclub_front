import{r as e,b as a}from"./vendor.435948fe.js";import{A as s,n as t}from"./index.45f98682.js";const i=e([]),r=a((()=>JSON.parse(JSON.stringify(i.value)))),n=async()=>{const e=await s.get("diciplines_get");return i.value=e.data.diciplines,e.data.diciplines},c=e({}),o=async e=>{const a=await s.get(`diciplines/${e}/edit`);return c.value=a.data,a},l=async e=>await s.get("locations/diciplines/get",{params:{locations:e}}),d=async e=>{e.status=1==e.status?0:1;const a=await s.put(`diciplines/change_status/${e.id}`,{status:e.status});return a.data&&a.data.status?t.success("Record update"):t.error("error"),a},p=async e=>{const a=await s.post("diciplines",e);return a.data&&a.data.status?(t.success("Record update"),n()):t.error("error"),a},u=async(e,a)=>{const i=await s.put(`diciplines/${e}`,a);return i.data&&i.data.status?t.success("Record update"):t.error("error"),i},m=e([{typeInput:"checkbox",name:"CombineDiscipline",placeholder:"Combine Discipline",model:[],required:!1,isLabel:!0,class:"is-2"},{typeInput:"checkbox",name:"status",placeholder:"Can be add it to membership",model:[],required:!0,isLabel:!0,class:"is-3"},{typeInput:"text",name:"name",placeholder:"Discipline Name",model:"",required:!0,isLabel:!0,class:"is-7"},{typeInput:"checkboxGroupSimple",text:"Locations",name:"locations",placeholder:"Locations",model:[],values:[],required:!0,isLabel:!0,class:"is-12"},{typeInput:"checkboxGroupSimple",name:"trainers",text:"Trainers",model:[],values:[],required:!0,isLabel:!0,class:"is-12"},{typeInput:"textarea",name:"descrptions",placeholder:"Discipline Description",model:"",required:!0,isLabel:!0,class:"is-12"},{typeInput:"textarea",name:"notes",placeholder:"Internal Notes",model:"",required:!1,isLabel:!0,class:"is-12"}]);export{n as a,r as b,o as c,i as d,u as e,l as g,m as i,d as p,p as s};
