import{r as e,B as t}from"./vendor.84e48f7c.js";import{n as s}from"./index.b0eab88f.js";e([{typeInput:"switchEventChange",name:"is_diferent_card",values:["Same Credit Card","Different Credit Cards"],model:!1,class:"is-6 d-flex align-items-center"},{typeInput:"checkbox",name:"swipe",placeholder:"Swipe Credit Card",model:[],class:"is-6 d-flex justify-content-end"}]);const l=e(!1),a=e([{typeInput:"text",name:"card_name",placeholder:"Card Name",model:"",class:"is-12",isLabel:!0,keyUp:(e,t)=>{l.value=!1}},{typeInput:"number",name:"card_number",placeholder:"Card Number",model:"",class:"is-12",maxLength:16,isLabel:!0,keyUp:function(e,t){if(l.value=!1,!(this.model.length>16))return!0;this.model=this.model.substring(0,this.model.length-1)}},{typeInput:"number",name:"date_day_expired",placeholder:"Expiration Month",model:"",class:"is-6",maxLength:2,isLabel:!0,keyUp:function(e,t){l.value=!1,this.model.length>2&&(this.model=this.model.substr(0,this.model.length-1))},change:function(e,t){1==this.model.length&&(this.model=`0${this.model}`)}},{typeInput:"number",name:"date_year_expired",placeholder:"Expiration Year",model:"",class:"is-6",maxLength:2,isLabel:!0,keyUp:function(e,a){l.value=!1,this.model.length>2&&(this.model=this.model.substr(0,this.model.length-1)),2==this.model.length&&(parseFloat(this.model)<parseFloat(t().format("YY"))?(this.model="",this.hasError=!0,s.error("date expired")):this.hasError=!1)}},{typeInput:"number",name:"cvv",placeholder:"CVV",model:"",class:"is-12",maxLength:3,isLabel:!0,keyUp:function(e,t){l.value=!0,this.model.length>3&&(this.model=this.model.substr(0,this.model.length-1))}}]);export{l as f,a as p};
