import{_ as e}from"./inputsLayaut.vue_vue&type=style&index=0&lang.07c6f3f3.js";import{_ as t}from"./formLayaut.vue_vue&type=style&index=0&lang.e1e53d60.js";import{d as s,b as l,r as a,o as r,h as n,D as u,U as i,j as p,k as d}from"./vendor.20c6e26b.js";var o=s({expose:[],props:{type:{type:String,default:"create"},buttons:{type:Array,default:["save","back"]},step:{type:Number,default:1}},setup(s){const o=s;i();const c=l((()=>"create"==o.type?{title:"Add a new schedule",subtitle:"Add information for a new schedule"}:{title:"Edit schedule",subtitle:"Edit information for a schedule"})),m=a([{typeInput:"select",name:"discipline",placeholder:"Discipline",values:[""],model:"",required:!0,class:"is-6"},{typeInput:"select",name:"trainer",placeholder:"Trainer",values:[""],model:"",required:!0,class:"is-6"},{typeInput:"date",name:"start",placeholder:"Start Date & Time",model:"",required:!0,class:"is-6"},{typeInput:"date",name:"end",placeholder:"End Date & Time",model:"",required:!0,class:"is-6"},{typeInput:"select",name:"recurrence",placeholder:"Recurrence",values:["One time only","Daily","Weekly","Monthly","Yearly","Custom"],model:"",required:!0,class:"is-6"},{typeInput:"text",name:"select",placeholder:"select",model:"",required:!0,class:"is-6"},{typeInput:"select",name:"location",placeholder:"Location",values:[""],model:"",required:!0,class:"is-6"},{typeInput:"select",name:"capacity",placeholder:"Capacity",values:[""],model:"",required:!0,class:"is-6"},{typeInput:"select",name:"type_of_member",placeholder:"Type of Member",values:["Adults Only","Kids Only","Adult & Kids"],model:"",required:!0,class:"is-6"},{typeInput:"select",name:"Level",placeholder:"Level",values:["All Levels","Pro","Expert","Meidum","Beginner"],model:"",required:!0,class:"is-6"}]);return(s,l)=>{const a=e,i=t;return r(),n(i,{buttons:o.buttons,step:o.step,titles:u(c)},{default:p((()=>[d(a,{"inputs-step":m.value},null,8,["inputs-step"])])),_:1},8,["buttons","step","titles"])}}});export{o as _};
