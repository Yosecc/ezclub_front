import{r as e}from"./vendor.2a366383.js";const a=e([{typeInput:"switchEventChange",name:"is_diferent_card",values:["Same Credit Card","Different Credit Cards"],model:!1,class:"is-6 d-flex align-items-center"},{typeInput:"checkbox",name:"swipe",placeholder:"Swipe Credit Card",model:[],class:"is-6 d-flex justify-content-end"}]),t=e(!1),l=e([{typeInput:"text",name:"card_name",placeholder:"Credit Card Name",model:"",class:"is-12",isLabel:!0,keyUp:(e,a)=>{t.value=!1}},{typeInput:"text",name:"card_number",placeholder:"Credit Card Number",model:"",class:"is-12",maxLength:19,isLabel:!0,keyUp:(e,a)=>{t.value=!1;const l=e.which?e.which:e.keyCode;return 8==l||l>=48&&l<=57&&void(a.model=a.model.replace(/[^\dA-Z]/g,"").replace(/(.{4})/g,"$1 ").trim())}},{typeInput:"text",name:"date_expired",placeholder:"Expiration Date",model:"",class:"is-6",maxLength:5,isLabel:!0,keyUp:(e,a)=>{t.value=!1;const l=e.which?e.which:e.keyCode;return 8==l||(l>=48&&l<=57?void(a.model.length<4&&(a.model=a.model.replace(/[^\dA-Z]/g,"").replace(/(.{2})/g,"$1/").trim())):(a.model=a.model.substr(0,a.model.length-1),!1))}},{typeInput:"number",name:"cvv",placeholder:"CVV",model:"",class:"is-6",maxLength:3,isLabel:!0,keyUp:(e,a)=>{t.value=!0;const l=e.which?e.which:e.keyCode;return 8==l||(l>=48&&l<=57||(a.model=a.model.substr(0,a.model.length-1),!1))}}]);export{t as f,a as o,l as p};
