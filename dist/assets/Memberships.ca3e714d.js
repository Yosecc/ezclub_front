import{A as e,n as s,g as t}from"./index.d2859fa6.js";import{r as a}from"./vendor.42a295ea.js";const i=a([]),l=a({}),n=async()=>{const s=await e.get("memberships");return i.value=s.data.memberships,s};a([]);const r=async s=>{const t=e.get(`memberships/${s}/edit`);return l.value=t.data,t},d=async t=>{const a=await e.post("memberships",t);return a.data&&a.data.status?(s.success("Record update"),n()):s.error("error"),a},c=async(s,t)=>await e.put(`memberships/${s}`,t),u=async t=>{t.status=1==t.status?0:1;const a=await e.put(`memberships/change_status/${t.id}`,{status:t.status});return a.data&&a.data.status?s.success("Record update"):s.error("error"),a},p=async s=>await e.get(`memberships/diciplines/${s}`),o=a([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,class:"is-12",required:!1},{typeInput:"text",name:"name",placeholder:"Membership Name",model:"",class:"is-6",required:!0},{typeInput:"text",name:"description",placeholder:"Membership Description",model:"",class:"is-6",required:!0},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"checkboxGroup",name:"locations_options",text:"Locations Sale and Access",values:[],class:"is-12",required:!1,multilinea:!0,subClass:"column is-3 mt-0"},{typeInput:"checkboxGroupSimpleEventInput",name:"diciplines",text:"Diciplines",model:[],values:[],class:"is-12",required:!1,change:function(e,s){console.log(this.model),(this.model.includes(0)||this.model.includes("All"))&&(t(s,"diciplines").model=[],t(s,"diciplines").values.forEach((e=>{t(s,"diciplines").model.push(e.id)}))),t(s,"all_diciplines").model&&this.model.length<=this.values.length&&(t(s,"all_diciplines").model=!1),t(s,"all_diciplines").model||(this.model.length,this.values.length)},click:function(e,s,t){}},{typeInput:"number",name:"diciplines_number",placeholder:"Number discipline access",model:"",class:"is-4",required:!0},{typeInput:"switchEventChangeInput",name:"all_diciplines",values:["","All Diciplines"],model:!1,default:!1,required:!1,class:"is-2",change:function(e){t(e,"diciplines_number").disabled=!this.model,t(e,"diciplines_number").required=this.model,this.model?(t(e,"diciplines").model=[],t(e,"diciplines_number").model=""):t(e,"diciplines").values.forEach((s=>{t(e,"diciplines").model.push(s.id)}))}},{typeInput:"inputsGroup",name:"amounts",text:"Amounts",type:"number",model:{},values:[],class:"is-12 d-flex",required:!0},{typeInput:"number",name:"descuento_vet",placeholder:"Discount % LEO / VET / FR",model:"",required:!0,class:"is-2"},{typeInput:"number",name:"penalty",placeholder:"Late fee",model:"",required:!1,class:"is-2"},{typeInput:"number",name:"days_penalty",placeholder:"Days late fee",model:6,required:!1,class:"is-2"},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[],class:"is-3",required:!0,filterOptionText:function(e){return"percentaje"==e.type?`${e.name} | ${e.value}%`:`${e.name} | $${e.value}`}},{typeInput:"number",name:"initiation_fee",placeholder:"Initation Fee",model:"",class:"is-3",required:!0},{typeInput:"textarea",name:"internals_notes",placeholder:"Internals Notes",model:"",class:"is-12",required:!1}]);export{r as a,c as b,p as c,n as g,o as i,i as m,u as p,d as s};