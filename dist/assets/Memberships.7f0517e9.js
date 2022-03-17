import{A as e}from"./index.a5fdae58.js";import{n as s,g as t}from"./Mixin.4fbb484e.js";import{r as i}from"./vendor.e3a29b40.js";const a=i([]),n=i({}),l=async()=>{const s=await e.get("memberships");return a.value=s.data.memberships,s};i([]);const r=async s=>{const t=e.get(`memberships/${s}/edit`);return n.value=t.data,t},u=async t=>{const i=await e.post("memberships",t);return i.data&&i.data.status?(s.success("Record update"),l()):s.error("error"),i},o=async(s,t)=>await e.put(`memberships/${s}`,t),c=async t=>{t.status=1==t.status?0:1;const i=await e.put(`memberships/change_status/${t.id}`,{status:t.status});return i.data&&i.data.status?s.success("Record update"):s.error("error"),i},p=i([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,class:"is-12",required:!1},{typeInput:"text",name:"name",placeholder:"Membership Name",model:"",class:"is-6",required:!0},{typeInput:"switchEventChangeInput",name:"all_diciplines",values:["","All Diciplines"],model:!1,default:!1,required:!1,class:"is-2",change:function(e){t(e,"diciplines_number").disabled=!this.model,t(e,"diciplines_number").required=this.model,this.model?t(e,"diciplines").model=[]:t(e,"diciplines").values.forEach((s=>{t(e,"diciplines").model.push(s.id)}))}},{typeInput:"number",name:"diciplines_number",placeholder:"Number discipline access",model:"",class:"is-4",required:!0},{typeInput:"text",name:"description",placeholder:"Membership Description",model:"",class:"is-12",required:!0},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"checkboxGroup",name:"locations_options",text:"Locations Sale and Access",values:[],class:"is-12",required:!1,multilinea:!0,subClass:"column is-3 mt-0"},{typeInput:"checkboxGroupSimpleEventInput",name:"diciplines",text:"Diciplines",model:[],values:[],class:"is-12",required:!1,change:function(e,s){},click:function(e,i,a){const n=t(i,"diciplines_number").model;if(""!=n&&(n<=this.model.length&&(e.returnValue=!1),n==this.model.length))if(this.model.includes(a)){const e=this.model.findIndex((e=>e==a));this.model.splice(1,e)}else s.error("You must select a limit of "+n+" diciplines")}},{typeInput:"inputsGroup",name:"amounts",text:"Amounts",type:"number",model:{},values:[],class:"is-12 d-flex",required:!0},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[],class:"is-4",required:!0,filterOptionText:function(e){return"percentaje"==e.type?`${e.name} | ${e.value}%`:`${e.name} | $${e.value}`}},{typeInput:"number",name:"initiation_fee",placeholder:"Initation Fee",model:"",class:"is-4",required:!0},{typeInput:"textarea",name:"internals_notes",placeholder:"Internals Notes",model:"",class:"is-12",required:!1}]);export{r as a,o as b,l as g,p as i,a as m,c as p,u as s};