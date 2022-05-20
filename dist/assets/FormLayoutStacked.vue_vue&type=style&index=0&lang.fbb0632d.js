import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{_ as e}from"./V-Control.46cc2837.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.5cab5a8d.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import{_ as t}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.67afcfe6.js";import{d as i,r as o,aj as n,b as c,o as u,h as d,k as r,D as p,j as m,i as v,a2 as f,ai as h,F as b,E as _}from"./vendor.d0c8bc4f.js";import{p as g}from"./userPopovers.f4b9fc60.js";const y={class:"form-layout is-stacked"},k={class:"form-outer"},V={class:"form-header-inner"},j=r("div",{class:"left"},[r("h3",null,"Schedule a meeting")],-1),C={class:"right"},x={class:"buttons"},z=_(" Cancel "),M=_(" Schedule "),w={class:"form-body"},S={class:"form-section"},A={class:"columns is-multiline"},E={class:"column is-12"},U=r("input",{type:"text",class:"input",placeholder:"What is this meeting about?"},null,-1),D={class:"columns v-calendar-combo"},P={class:"column is-6"},B=r("label",null,"Meeting date",-1),T={class:"column is-6"},W=r("label",{class:"is-vhidden"},"Meeting date",-1),F=r("label",null,"Meeting time",-1),J=r("label",{class:"is-vhidden"},"Meeting time",-1),N={class:"column is-12"},R=r("label",{class:"checkbox"},[r("input",{type:"checkbox",checked:""}),r("span"),_(" All day ")],-1),K=r("label",{class:"checkbox is-outlined is-primary"},[r("input",{type:"checkbox"}),r("span"),_(" Repeat every week ")],-1),L={class:"form-section is-grey"},q={class:"form-section-header"},G=r("div",{class:"left"},[r("h3",null,"Meeting details")],-1),H={class:"right"},I=_(" Add People "),O={class:"form-section-inner is-horizontal"},Q={class:"field is-horizontal"},X=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Participants")],-1),Y={class:"field-body"},Z={class:"participants"},$=r("button",{class:"add-participant"},[r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"})],-1),ll={class:"field is-horizontal"},el=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Where")],-1),al={class:"field-body"},sl=r("input",{class:"input",type:"text",placeholder:"e.g. Conference room"},null,-1),tl={class:"field is-horizontal"},il=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Meeting URL")],-1),ol={class:"field-body"},nl=r("input",{class:"input",type:"url",placeholder:"https://zoom.com/m/156546",inputmode:"url"},null,-1),cl={class:"field is-horizontal"},ul=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Calendar")],-1),dl={class:"field-body"},rl={class:"field is-horizontal"},pl=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Description")],-1),ml={class:"field-body"},vl=r("textarea",{class:"textarea",rows:"4",placeholder:"Tell us about any details you'd like us to know...",autocomplete:"off",autocapitalize:"off",spellcheck:"true"},null,-1),fl=r("a",{class:"add-link"},"Add Attachments",-1),hl={class:"form-section is-grey"},bl={class:"form-section-inner is-horizontal"},_l={class:"field is-horizontal"},gl=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Color Code")],-1),yl={class:"field-body"},kl=r("div",{class:"color-codes"},[r("div",{class:"color-code is-primary"}),r("div",{class:"color-code is-secondary"}),r("div",{class:"color-code is-info"}),r("div",{class:"color-code is-success"}),r("div",{class:"color-code is-purple"})],-1),Vl={class:"field is-horizontal"},jl=r("div",{class:"field-label is-normal"},[r("label",{class:"label"},"Notifications")],-1),Cl={class:"field-body"},xl=r("a",{class:"add-link"},"Add Notification",-1),zl={class:"multiselect-single-label"},Ml={class:"select-label-text"},wl={class:"select-label-text"};var Sl=i({expose:[],setup(i){const _=o(""),Sl=o(""),Al=o(""),El=o({start:new Date,end:new Date}),{y:Ul}=n(),Dl=c((()=>Ul.value>30));return(i,o)=>{const n=l,c=e,Ul=a,Pl=v("v-date-picker"),Bl=s,Tl=t,Wl=v("tippy"),Fl=v("Multiselect");return u(),d("div",y,[r("div",k,[r("div",{class:[[p(Dl)&&"is-stuck"],"form-header stuck-header"]},[r("div",V,[j,r("div",C,[r("div",x,[r(n,{icon:"lnir lnir-arrow-left rem-100",to:{name:"sidebar-layouts-profile-view"},light:"","dark-outlined":""},{default:m((()=>[z])),_:1}),r(n,{color:"primary",raised:""},{default:m((()=>[M])),_:1})])])])],2),r("div",w,[r("div",S,[r("div",A,[r("div",E,[r(Ul,null,{default:m((()=>[r(c,{icon:"feather:slack"},{default:m((()=>[U])),_:1})])),_:1})]),r(Pl,{modelValue:El.value,"onUpdate:modelValue":o[1]||(o[1]=l=>El.value=l),"is-range":"",color:"green","trim-weeks":"",class:"column is-6"},{default:m((({inputValue:l,inputEvents:e})=>[r("div",D,[r("div",P,[r(Ul,null,{default:m((()=>[B,r(c,{icon:"feather:calendar"},{default:m((()=>[r("input",f({placeholder:"Start Date",value:l.start,class:"input form-datepicker"},h(e.start)),null,16,["value"])])),_:2},1024)])),_:2},1024)]),r("div",T,[r(Ul,null,{default:m((()=>[W,r(c,{icon:"feather:calendar"},{default:m((()=>[r("input",f({placeholder:"End Date",value:l.end,class:"input form-datepicker"},h(e.end)),null,16,["value"])])),_:2},1024)])),_:2},1024)])])])),_:1},8,["modelValue"]),r(Pl,{modelValue:El.value.start,"onUpdate:modelValue":o[2]||(o[2]=l=>El.value.start=l),class:"column is-3",color:"green",mode:"time",is24hr:""},{default:m((({inputValue:l,inputEvents:e})=>[r(Ul,null,{default:m((()=>[F,r(c,null,{default:m((()=>[r("input",f({class:"input form-timepicker",value:l},h(e)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"]),r(Pl,{modelValue:El.value.end,"onUpdate:modelValue":o[3]||(o[3]=l=>El.value.end=l),class:"column is-3",color:"green",mode:"time",is24hr:""},{default:m((({inputValue:l,inputEvents:e})=>[r(Ul,null,{default:m((()=>[J,r(c,null,{default:m((()=>[r("input",f({class:"input form-timepicker",value:l},h(e)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"]),r("div",N,[r(Ul,null,{default:m((()=>[r(c,null,{default:m((()=>[R,K])),_:1})])),_:1})])])]),r("div",L,[r("div",q,[G,r("div",H,[r(n,{"dark-outlined":""},{default:m((()=>[I])),_:1})])]),r("div",O,[r("div",Q,[X,r("div",Y,[r(Ul,null,{default:m((()=>[r(c,null,{default:m((()=>[r("div",Z,[r(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:m((()=>[r(Tl,{user:p(g).user8},null,8,["user"])])),default:m((()=>[r(Bl,{picture:"/demo/avatars/8.jpg"})])),_:1}),r(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:m((()=>[r(Tl,{user:p(g).user122},null,8,["user"])])),default:m((()=>[r(Bl,{color:"warning",initials:"BT"})])),_:1}),r(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:m((()=>[r(Tl,{user:p(g).user18},null,8,["user"])])),default:m((()=>[r(Bl,{picture:"/demo/avatars/18.jpg"})])),_:1}),r(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:m((()=>[r(Tl,{user:p(g).user123},null,8,["user"])])),default:m((()=>[r(Bl,{color:"info",initials:"JD"})])),_:1}),r(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:m((()=>[r(Tl,{user:p(g).user7},null,8,["user"])])),default:m((()=>[r(Bl,{picture:"/demo/avatars/7.jpg"})])),_:1}),$])])),_:1})])),_:1})])]),r("div",ll,[el,r("div",al,[r(Ul,null,{default:m((()=>[r(c,{icon:"feather:map-pin"},{default:m((()=>[sl])),_:1})])),_:1})])]),r("div",tl,[il,r("div",ol,[r(Ul,null,{default:m((()=>[r(c,{icon:"feather:map-pin"},{default:m((()=>[nl])),_:1})])),_:1})])]),r("div",cl,[ul,r("div",dl,[r(Ul,null,{default:m((()=>[r(c,null,{default:m((()=>[r(Fl,{modelValue:_.value,"onUpdate:modelValue":o[4]||(o[4]=l=>_.value=l),placeholder:"Pick a calendar",options:["My Calendar","Team Calendar","Company Calendar"]},null,8,["modelValue"])])),_:1})])),_:1})])]),r("div",rl,[pl,r("div",ml,[r(Ul,null,{default:m((()=>[r(c,null,{default:m((()=>[vl,fl])),_:1})])),_:1})])])])]),r("div",hl,[r("div",bl,[r("div",_l,[gl,r("div",yl,[r(Ul,null,{default:m((()=>[r(c,null,{default:m((()=>[kl])),_:1})])),_:1})])]),r("div",Vl,[jl,r("div",Cl,[r(Ul,null,{default:m((()=>[r(c,null,{default:m((()=>[r(Fl,{modelValue:Sl.value,"onUpdate:modelValue":o[5]||(o[5]=l=>Sl.value=l),placeholder:"Select a channel",options:["Email","SMS","Slack","Project Board"]},null,8,["modelValue"]),xl])),_:1})])),_:1}),r(Ul,{class:"is-image-select"},{default:m((()=>[r(c,null,{default:m((()=>[r(Fl,{modelValue:Al.value,"onUpdate:modelValue":o[6]||(o[6]=l=>Al.value=l),placeholder:"Select a target",label:"name",value:"name",options:[{name:"All",value:"",icon:"/images/avatars/placeholder.jpg"},{name:"Erik K.",value:"eric",icon:"/demo/avatars/8.jpg"},{name:"Joshua S.",value:"joshua",icon:"/demo/avatars/12.jpg"},{name:"Melany W.",value:"melany",icon:"/demo/avatars/25.jpg"},{name:"Alice C.",value:"alice",icon:"/demo/avatars/7.jpg"},{name:"Esteban C.",value:"esteban",icon:"/demo/avatars/18.jpg"}]},{singlelabel:m((({value:l})=>[r("div",zl,[r("img",{class:"select-label-icon",src:l.icon,alt:""},null,8,["src"]),r("span",Ml,b(l.name),1)])])),option:m((({option:l})=>[r("img",{class:"select-option-icon",src:l.icon,alt:""},null,8,["src"]),r("span",wl,b(l.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})])])])])])])])}}});export{Sl as _};
