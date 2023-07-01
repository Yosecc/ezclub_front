import{A as e,g as s,n as i}from"./index.c3b2fa6a.js";import{r as a,A as l}from"./vendor.4454b83d.js";const t=a([]),n=a({}),r=async(s=null)=>{let i="memberships";null!=s&&(i=`memberships?status=${s}`);const a=await e.get(`${i}`);return t.value=a.data.memberships,a};a([]);const u=async s=>{const i=e.get(`memberships/${s}/edit`);return n.value=i.data,i},c=async s=>{const a=await e.post("memberships",s);return 200==a.status&&(i.success("Record update"),r()),a},d=async(s,i)=>await e.put(`memberships/${s}`,i),p=async s=>{s.status=1==s.status?0:1;const a=await e.put(`memberships/change_status/${s.id}`,{status:s.status});return a.data&&a.data.status?i.success("Record update"):i.error("error"),a},o=async s=>await e.get(`memberships/diciplines/${s}`),m=l([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,class:"is-3",required:!1,isLabel:!0},{typeInput:"switch",isLabel:!0,name:"is_taxes",placeholder:"Apply Taxes",model:!0,default:!0,values:["NO","YES"],class:"is-3"},{typeInput:"text",name:"name",placeholder:"Membership Name",model:"",class:"is-6",required:!0,isLabel:!0},{typeInput:"text",name:"description",placeholder:"Membership Description",model:"",class:"is-12",required:!0,isLabel:!0},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"checkboxGroup",name:"locations_options",text:"Locations Sale and Access",values:[],class:"is-12",required:!1,multilinea:!0,subClass:"column is-3 mt-0"},{typeInput:"checkboxGroupSimpleEventInput",name:"diciplines",text:"Disciplines",model:[],values:[],class:"is-12",checkboxColumns:"is-3",required:!1,change:function(e,i){(this.model.includes(0)||this.model.includes("All"))&&(s(i,"diciplines").model=[],s(i,"diciplines").values.forEach((e=>{s(i,"diciplines").model.push(e.id)}))),s(i,"all_diciplines").model&&this.model.length<=this.values.length&&(s(i,"all_diciplines").model=!1),s(i,"all_diciplines").model||(this.model.length,this.values.length)},click:function(e,s,i){}},{typeInput:"number",name:"diciplines_number",placeholder:"Number discipline access",model:"",class:"is-4",required:!1,isLabel:!0},{typeInput:"switchEventChangeInput",name:"all_diciplines",values:["","All Dsiciplines"],model:!1,default:!1,required:!1,class:"is-2",change:function(e){s(e,"diciplines_number").disabled=!this.model,s(e,"diciplines_number").required=this.model,this.model?(s(e,"diciplines").model=[],s(e,"diciplines_number").model=""):s(e,"diciplines").values.forEach((i=>{s(e,"diciplines").model.push(i.id)}))}}]),h=l([{typeInput:"inputsGroup",name:"amounts_recurring",text:"Recurring Prices",type:"number",model:{},values:[],class:"is-12 d-flex",required:!1,isLabel:!0}]),b=l([{typeInput:"inputsGroup",name:"amounts_uniques",text:"Temporary Pass",type:"number",model:{},values:[],class:"is-12 d-flex",required:!1,isLabel:!0}]),y=l([{typeInput:"textarea",name:"internals_notes",placeholder:"Internals Notes",model:"",class:"is-12",required:!1,isLabel:!0}]),I=l([{typeInput:"number",name:"multigym",placeholder:"MultiGym",model:"",required:!0,isLabel:!0,class:"is-3"},{typeInput:"number",name:"penalty",placeholder:"Price Late fee",model:"",required:!0,isLabel:!0,class:"is-3"},{typeInput:"number",name:"days_penalty",placeholder:"Days late fee",model:6,required:!0,isLabel:!0,class:"is-3"},{typeInput:"number",name:"initiation_fee",placeholder:"Initation Fee Price",model:"",class:"is-3",required:!0,isLabel:!0},{typeInput:"number",name:"card_price",placeholder:"Card Price",model:"",class:"is-3",required:!0,isLabel:!0},{typeInput:"number",name:"hold_price",placeholder:"Hold Price",model:"",class:"is-3",required:!0,isLabel:!0},{typeInput:"selectData",name:"descuento_vet",placeholder:"Discount % LEO / VET / FR",model:"",values:[],required:!0,isLabel:!0,class:"is-3"}]),v=l([{typeInput:"selectDataActionChangeInput",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0},{typeInput:"radioBoxsInput",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0,filterName:"descriptions",otros:"amount"}]);export{r as a,I as b,h as c,b as d,u as e,d as f,o as g,v as h,m as i,t as m,y as n,p,c as s};
