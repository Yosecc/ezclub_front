import{_ as l}from"./V-Button.vue_vue&type=script&setup=true&lang.56502a24.js";import{_ as e}from"./V-Control.cd7a7d2f.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.68f25869.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.2afd81f7.js";import{_ as t}from"./UserPopoverContent.vue_vue&type=script&setup=true&lang.830ef7c4.js";import{d as i,r as o,ak as n,b as c,h as u,o as d,i as r,k as p,E as m,j as v,a4 as f,aj as h,G as b,F as _}from"./vendor.31bd1321.js";import{p as g}from"./userPopovers.f4b9fc60.js";const y={class:"form-layout is-stacked"},k={class:"form-outer"},V={class:"form-header-inner"},j=p("div",{class:"left"},[p("h3",null,"Schedule a meeting")],-1),C={class:"right"},x={class:"buttons"},z=_(" Cancel "),M=_(" Schedule "),w={class:"form-body"},S={class:"form-section"},A={class:"columns is-multiline"},E={class:"column is-12"},U=p("input",{type:"text",class:"input",placeholder:"What is this meeting about?"},null,-1),D={class:"columns v-calendar-combo"},P={class:"column is-6"},B=p("label",null,"Meeting date",-1),T={class:"column is-6"},W=p("label",{class:"is-vhidden"},"Meeting date",-1),F=p("label",null,"Meeting time",-1),J=p("label",{class:"is-vhidden"},"Meeting time",-1),N={class:"column is-12"},R=p("label",{class:"checkbox"},[p("input",{type:"checkbox",checked:""}),p("span"),_(" All day ")],-1),G=p("label",{class:"checkbox is-outlined is-primary"},[p("input",{type:"checkbox"}),p("span"),_(" Repeat every week ")],-1),K={class:"form-section is-grey"},L={class:"form-section-header"},q=p("div",{class:"left"},[p("h3",null,"Meeting details")],-1),H={class:"right"},I=_(" Add People "),O={class:"form-section-inner is-horizontal"},Q={class:"field is-horizontal"},X=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Participants")],-1),Y={class:"field-body"},Z={class:"participants"},$=p("button",{class:"add-participant"},[p("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:plus"})],-1),ll={class:"field is-horizontal"},el=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Where")],-1),al={class:"field-body"},sl=p("input",{class:"input",type:"text",placeholder:"e.g. Conference room"},null,-1),tl={class:"field is-horizontal"},il=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Meeting URL")],-1),ol={class:"field-body"},nl=p("input",{class:"input",type:"url",placeholder:"https://zoom.com/m/156546",inputmode:"url"},null,-1),cl={class:"field is-horizontal"},ul=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Calendar")],-1),dl={class:"field-body"},rl={class:"field is-horizontal"},pl=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Description")],-1),ml={class:"field-body"},vl=p("textarea",{class:"textarea",rows:"4",placeholder:"Tell us about any details you'd like us to know...",autocomplete:"off",autocapitalize:"off",spellcheck:"true"},null,-1),fl=p("a",{class:"add-link"},"Add Attachments",-1),hl={class:"form-section is-grey"},bl={class:"form-section-inner is-horizontal"},_l={class:"field is-horizontal"},gl=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Color Code")],-1),yl={class:"field-body"},kl=p("div",{class:"color-codes"},[p("div",{class:"color-code is-primary"}),p("div",{class:"color-code is-secondary"}),p("div",{class:"color-code is-info"}),p("div",{class:"color-code is-success"}),p("div",{class:"color-code is-purple"})],-1),Vl={class:"field is-horizontal"},jl=p("div",{class:"field-label is-normal"},[p("label",{class:"label"},"Notifications")],-1),Cl={class:"field-body"},xl=p("a",{class:"add-link"},"Add Notification",-1),zl={class:"multiselect-single-label"},Ml={class:"select-label-text"},wl={class:"select-label-text"};var Sl=i({expose:[],setup(i){const _=o(""),Sl=o(""),Al=o(""),El=o({start:new Date,end:new Date}),{y:Ul}=n(),Dl=c((()=>Ul.value>30));return(i,o)=>{const n=l,c=e,Ul=a,Pl=u("v-date-picker"),Bl=s,Tl=t,Wl=u("tippy"),Fl=u("Multiselect");return d(),r("div",y,[p("div",k,[p("div",{class:[[m(Dl)&&"is-stuck"],"form-header stuck-header"]},[p("div",V,[j,p("div",C,[p("div",x,[p(n,{icon:"lnir lnir-arrow-left rem-100",to:{name:"sidebar-layouts-profile-view"},light:"","dark-outlined":""},{default:v((()=>[z])),_:1}),p(n,{color:"primary",raised:""},{default:v((()=>[M])),_:1})])])])],2),p("div",w,[p("div",S,[p("div",A,[p("div",E,[p(Ul,null,{default:v((()=>[p(c,{icon:"feather:slack"},{default:v((()=>[U])),_:1})])),_:1})]),p(Pl,{modelValue:El.value,"onUpdate:modelValue":o[1]||(o[1]=l=>El.value=l),"is-range":"",color:"green","trim-weeks":"",class:"column is-6"},{default:v((({inputValue:l,inputEvents:e})=>[p("div",D,[p("div",P,[p(Ul,null,{default:v((()=>[B,p(c,{icon:"feather:calendar"},{default:v((()=>[p("input",f({placeholder:"Start Date",value:l.start,class:"input form-datepicker"},h(e.start)),null,16,["value"])])),_:2},1024)])),_:2},1024)]),p("div",T,[p(Ul,null,{default:v((()=>[W,p(c,{icon:"feather:calendar"},{default:v((()=>[p("input",f({placeholder:"End Date",value:l.end,class:"input form-datepicker"},h(e.end)),null,16,["value"])])),_:2},1024)])),_:2},1024)])])])),_:1},8,["modelValue"]),p(Pl,{modelValue:El.value.start,"onUpdate:modelValue":o[2]||(o[2]=l=>El.value.start=l),class:"column is-3",color:"green",mode:"time",is24hr:""},{default:v((({inputValue:l,inputEvents:e})=>[p(Ul,null,{default:v((()=>[F,p(c,null,{default:v((()=>[p("input",f({class:"input form-timepicker",value:l},h(e)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"]),p(Pl,{modelValue:El.value.end,"onUpdate:modelValue":o[3]||(o[3]=l=>El.value.end=l),class:"column is-3",color:"green",mode:"time",is24hr:""},{default:v((({inputValue:l,inputEvents:e})=>[p(Ul,null,{default:v((()=>[J,p(c,null,{default:v((()=>[p("input",f({class:"input form-timepicker",value:l},h(e)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"]),p("div",N,[p(Ul,null,{default:v((()=>[p(c,null,{default:v((()=>[R,G])),_:1})])),_:1})])])]),p("div",K,[p("div",L,[q,p("div",H,[p(n,{"dark-outlined":""},{default:v((()=>[I])),_:1})])]),p("div",O,[p("div",Q,[X,p("div",Y,[p(Ul,null,{default:v((()=>[p(c,null,{default:v((()=>[p("div",Z,[p(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:v((()=>[p(Tl,{user:m(g).user8},null,8,["user"])])),default:v((()=>[p(Bl,{picture:"/demo/avatars/8.jpg"})])),_:1}),p(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:v((()=>[p(Tl,{user:m(g).user122},null,8,["user"])])),default:v((()=>[p(Bl,{color:"warning",initials:"BT"})])),_:1}),p(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:v((()=>[p(Tl,{user:m(g).user18},null,8,["user"])])),default:v((()=>[p(Bl,{picture:"/demo/avatars/18.jpg"})])),_:1}),p(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:v((()=>[p(Tl,{user:m(g).user123},null,8,["user"])])),default:v((()=>[p(Bl,{color:"info",initials:"JD"})])),_:1}),p(Wl,{class:"has-help-cursor",interactive:"",placement:"top-start"},{content:v((()=>[p(Tl,{user:m(g).user7},null,8,["user"])])),default:v((()=>[p(Bl,{picture:"/demo/avatars/7.jpg"})])),_:1}),$])])),_:1})])),_:1})])]),p("div",ll,[el,p("div",al,[p(Ul,null,{default:v((()=>[p(c,{icon:"feather:map-pin"},{default:v((()=>[sl])),_:1})])),_:1})])]),p("div",tl,[il,p("div",ol,[p(Ul,null,{default:v((()=>[p(c,{icon:"feather:map-pin"},{default:v((()=>[nl])),_:1})])),_:1})])]),p("div",cl,[ul,p("div",dl,[p(Ul,null,{default:v((()=>[p(c,null,{default:v((()=>[p(Fl,{modelValue:_.value,"onUpdate:modelValue":o[4]||(o[4]=l=>_.value=l),placeholder:"Pick a calendar",options:["My Calendar","Team Calendar","Company Calendar"]},null,8,["modelValue"])])),_:1})])),_:1})])]),p("div",rl,[pl,p("div",ml,[p(Ul,null,{default:v((()=>[p(c,null,{default:v((()=>[vl,fl])),_:1})])),_:1})])])])]),p("div",hl,[p("div",bl,[p("div",_l,[gl,p("div",yl,[p(Ul,null,{default:v((()=>[p(c,null,{default:v((()=>[kl])),_:1})])),_:1})])]),p("div",Vl,[jl,p("div",Cl,[p(Ul,null,{default:v((()=>[p(c,null,{default:v((()=>[p(Fl,{modelValue:Sl.value,"onUpdate:modelValue":o[5]||(o[5]=l=>Sl.value=l),placeholder:"Select a channel",options:["Email","SMS","Slack","Project Board"]},null,8,["modelValue"]),xl])),_:1})])),_:1}),p(Ul,{class:"is-image-select"},{default:v((()=>[p(c,null,{default:v((()=>[p(Fl,{modelValue:Al.value,"onUpdate:modelValue":o[6]||(o[6]=l=>Al.value=l),placeholder:"Select a target",label:"name",value:"name",options:[{name:"All",value:"",icon:"/images/avatars/placeholder.jpg"},{name:"Erik K.",value:"eric",icon:"/demo/avatars/8.jpg"},{name:"Joshua S.",value:"joshua",icon:"/demo/avatars/12.jpg"},{name:"Melany W.",value:"melany",icon:"/demo/avatars/25.jpg"},{name:"Alice C.",value:"alice",icon:"/demo/avatars/7.jpg"},{name:"Esteban C.",value:"esteban",icon:"/demo/avatars/18.jpg"}]},{singlelabel:v((({value:l})=>[p("div",zl,[p("img",{class:"select-label-icon",src:l.icon,alt:""},null,8,["src"]),p("span",Ml,b(l.name),1)])])),option:v((({option:l})=>[p("img",{class:"select-option-icon",src:l.icon,alt:""},null,8,["src"]),p("span",wl,b(l.name),1)])),_:1},8,["modelValue","options"])])),_:1})])),_:1})])])])])])])])}}});export{Sl as _};
