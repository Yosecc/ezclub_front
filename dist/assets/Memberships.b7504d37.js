import{r as e,A as s}from"./vendor.b96c0b62.js";import{A as i,g as a,n as l}from"./index.767fa190.js";const t=e([]),n=e({}),r=async(e=null)=>{let s="memberships";null!=e&&(s=`memberships?status=${e}`);const a=await i.get(`${s}`);return t.value=a.data.memberships,a};e([]);const c=async e=>{const s=i.get(`memberships/${e}/edit`);return n.value=s.data,s},u=async e=>{const s=await i.post("memberships",e);return 200==s.status&&(l.success("Record update"),r()),s},d=async(e,s)=>await i.put(`memberships/${e}`,s),p=async e=>{e.status=1==e.status?0:1;const s=await i.put(`memberships/change_status/${e.id}`,{status:e.status});return s.data&&s.data.status?l.success("Record update"):l.error("error"),s},o=async e=>await i.get(`memberships/diciplines/${e}`),m=s([{typeInput:"switch",name:"status",placeholder:"Status",values:["","Active"],model:!0,default:!0,class:"is-3",required:!1,isLabel:!0},{typeInput:"switch",isLabel:!0,name:"is_taxes",placeholder:"Apply Taxes",model:!0,default:!0,values:["NO","YES"],class:"is-3"},{typeInput:"text",name:"name",placeholder:"Membership Name",model:"",class:"is-6",required:!0,isLabel:!0},{typeInput:"text",name:"description",placeholder:"Membership Description",model:"",class:"is-12",required:!0,isLabel:!0},{typeInput:"checkboxGroupSimpleAvatar",name:"locations",placeholder:"Locations",model:[],values:[],class:"is-12",required:!0},{typeInput:"checkboxGroup",name:"locations_options",text:"Locations Sale and Access",values:[],class:"is-12",required:!1,multilinea:!0,subClass:"column is-3 mt-0"},{typeInput:"checkboxGroupSimpleEventInput",name:"diciplines",text:"Disciplines",model:[],values:[],class:"is-12",checkboxColumns:"is-3",required:!1,change:function(e,s){(this.model.includes(0)||this.model.includes("All"))&&(a(s,"diciplines").model=[],a(s,"diciplines").values.forEach((e=>{a(s,"diciplines").model.push(e.id)}))),a(s,"all_diciplines").model&&this.model.length<=this.values.length&&(a(s,"all_diciplines").model=!1),a(s,"all_diciplines").model||(this.model.length,this.values.length)},click:function(e,s,i){}},{typeInput:"number",name:"diciplines_number",placeholder:"Number discipline access",model:"",class:"is-4",required:!1,isLabel:!0},{typeInput:"switchEventChangeInput",name:"all_diciplines",values:["","All Dsiciplines"],model:!1,default:!1,required:!1,class:"is-2",change:function(e){a(e,"diciplines_number").disabled=!this.model,a(e,"diciplines_number").required=this.model,this.model?(a(e,"diciplines").model=[],a(e,"diciplines_number").model=""):a(e,"diciplines").values.forEach((s=>{a(e,"diciplines").model.push(s.id)}))}}]),h=s([{typeInput:"inputsGroup",name:"amounts_recurring",text:"Recurring Prices",type:"number",model:{},values:[],class:"is-12 d-flex",required:!1,isLabel:!0}]),b=s([{typeInput:"inputsGroup",name:"amounts_uniques",text:"Temporary Pass",type:"number",model:{},values:[],class:"is-12 d-flex",required:!1,isLabel:!0}]),y=s([{typeInput:"textarea",name:"internals_notes",placeholder:"Internals Notes",model:"",class:"is-12",required:!1,isLabel:!0}]),I=s([{typeInput:"number",name:"penalty",placeholder:"Price Late fee",model:"",required:!0,isLabel:!0,class:"is-3"},{typeInput:"number",name:"days_penalty",placeholder:"Days late fee",model:6,required:!0,isLabel:!0,class:"is-3"},{typeInput:"number",name:"initiation_fee",placeholder:"Initation Fee Price",model:"",class:"is-3",required:!0,isLabel:!0},{typeInput:"number",name:"card_price",placeholder:"Card Price",model:"",class:"is-3",required:!0,isLabel:!0},{typeInput:"number",name:"hold_price",placeholder:"Hold Price",model:"",class:"is-3",required:!0,isLabel:!0},{typeInput:"selectData",name:"descuento_vet",placeholder:"Discount % LEO / VET / FR",model:"",values:[],required:!0,isLabel:!0,class:"is-3"}]),v=s([{typeInput:"selectDataActionChangeInput",name:"memberships_id",placeholder:"Membership Type",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0},{typeInput:"radioBoxsInput",name:"recurrences_id",placeholder:"Recurrence & Amount",values:[],model:"",disabled:!1,required:!0,class:"is-12",isLabel:!0,filterName:"descriptions",otros:"amount"}]);export{r as a,I as b,h as c,b as d,c as e,d as f,o as g,v as h,m as i,t as m,y as n,p,u as s};
