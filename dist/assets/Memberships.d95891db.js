<<<<<<< HEAD:dist/assets/Memberships.b802f458.js
import{A as e}from"./index.ea01e17d.js";import{n as s}from"./Mixin.d9b7e9cd.js";import{r as t}from"./vendor.20c6e26b.js";const a=t([]),r=t({}),i=async()=>{const s=await e.get("memberships");return a.value=s.data.memberships,s};t([]);const n=async s=>{const t=e.get(`memberships/${s}/edit`);return r.value=t.data,t},o=async t=>{const a=await e.post("memberships",t);return a.data&&a.data.status?(s.success("Record update"),i()):s.error("error"),a},p=async(s,t)=>await e.put(`memberships/${s}`,t),u=async t=>{t.status=1==t.status?0:1;const a=await e.put(`memberships/change_status/${t.id}`,{status:t.status});return a.data&&a.data.status?s.success("Record update"):s.error("error"),a},c=t([{typeInput:"checkbox",name:"status",placeholder:"Status",model:[""],class:"is-12",required:!1},{typeInput:"text",name:"name",placeholder:"Membership Name",model:"",class:"is-4",required:!0},{typeInput:"text",name:"description",placeholder:"Membership Description",model:"",class:"is-4",required:!0},{typeInput:"number",name:"diciplines_number",placeholder:"Number discipline access",model:"",class:"is-4",required:!0},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"checkboxGroup",name:"locations_options",text:"Locations Sale and Access",values:[""],class:"is-12",required:!1,multilinea:!0,subClass:"column is-3 mt-0"},{typeInput:"checkboxGroupSimple",name:"diciplines",text:"Diciplines",model:[],values:[],class:"is-12",required:!0},{typeInput:"inputsGroup",name:"amounts",text:"Amounts",type:"number",model:{},values:[""],class:"is-12 d-flex",required:!0},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[],class:"is-4",required:!0,filterOptionText:function(e){return"percentaje"==e.type?`${e.name} | ${e.value}%`:`${e.name} | $${e.value}`}},{typeInput:"number",name:"initiation_fee",placeholder:"Initation Fee",model:"",class:"is-4",required:!0},{typeInput:"textarea",name:"internals_notes",placeholder:"Internals Notes",model:"",class:"is-12",required:!1}]);export{n as a,p as b,i as g,c as i,a as m,u as p,o as s};
=======
import{A as e}from"./index.86279b2e.js";import{n as s}from"./Mixin.cdfef6ee.js";import{r as a}from"./vendor.eb57aacd.js";const t=a([]),r=a({}),i=async()=>{const s=await e.get("memberships");return t.value=s.data.memberships,s};a([]);const n=async s=>{const a=e.get(`memberships/${s}/edit`);return r.value=a.data,a},o=async a=>{const t=await e.post("memberships",a);return t.data&&t.data.status?(s.success("Record update"),i()):s.error("error"),t},p=async(s,a)=>await e.put(`memberships/${s}`,a),u=async a=>{a.status=1==a.status?0:1;const t=await e.put(`memberships/change_status/${a.id}`,{status:a.status});return t.data&&t.data.status?s.success("Record update"):s.error("error"),t},c=a([{typeInput:"checkbox",name:"status",placeholder:"Status",model:[""],class:"is-12",required:!1},{typeInput:"text",name:"name",placeholder:"Membership Name",model:"",class:"is-4",required:!0},{typeInput:"text",name:"description",placeholder:"Membership Description",model:"",class:"is-4",required:!0},{typeInput:"number",name:"diciplines_number",placeholder:"Number discipline access",model:"",class:"is-4",required:!0},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"checkboxGroup",name:"locations_options",text:"Locations Sale and Access",values:[""],class:"is-12",required:!1,multilinea:!0,subClass:"column is-3 mt-0"},{typeInput:"checkboxGroupSimple",name:"diciplines",text:"Diciplines",model:[],values:[],class:"is-12",required:!0},{typeInput:"inputsGroup",name:"amounts",text:"Amounts",type:"number",model:{},values:[""],class:"is-12 d-flex",required:!0},{typeInput:"selectData",name:"taxes_id",placeholder:"Apply Taxes",model:"",values:[],class:"is-4",required:!0,filterOptionText:function(e){return"percentaje"==e.type?`${e.name} | ${e.value}%`:`${e.name} | $${e.value}`}},{typeInput:"number",name:"initiation_fee",placeholder:"Initation Fee",model:"",class:"is-4",required:!0},{typeInput:"textarea",name:"internals_notes",placeholder:"Internals Notes",model:"",class:"is-12",required:!1}]);export{n as a,p as b,i as g,c as i,t as m,u as p,o as s};
>>>>>>> 4d6c8f042779fb7780963bc48ad59415eb6ca886:dist/assets/Memberships.d95891db.js
