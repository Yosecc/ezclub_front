import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as l}from"./V-IconButton.vue_vue&type=script&setup=true&lang.d0683519.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.78d7227b.js";import{_ as t}from"./V-Control.9f6b030b.js";import{_ as i}from"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import{d as s,r as o,aj as n,c as u,h as r,i as d,j as c,l as p,k as f,F as m,I as v,G as h}from"./vendor.b96c0b62.js";import{u as g}from"./useNotyf.fe715992.js";import{s as b}from"./sleep.2a252ff4.js";const y={class:"account-box is-form is-footerless"},_={class:"form-head-inner"},F=p("div",{class:"left"},[p("h3",null,"General Info"),p("p",null,"Edit your account's general information")],-1),V={class:"right"},x={class:"buttons"},k=h(" Go Back "),w=h(" Save Changes "),j={class:"form-body"},U={class:"fieldset"},L=p("div",{class:"fieldset-heading"},[p("h4",null,"Profile Picture"),p("p",null,"This is how others will recognize you")],-1),I={class:"fieldset"},R=p("div",{class:"fieldset-heading"},[p("h4",null,"Personal Info"),p("p",null,"Others diserve to know you more")],-1),z={class:"columns is-multiline"},N={class:"column is-6"},P=p("input",{type:"text",class:"input",placeholder:"First Name",autocomplete:"given-name"},null,-1),A={class:"column is-6"},C=p("input",{type:"text",class:"input",placeholder:"Last Name",autocomplete:"family-name"},null,-1),G={class:"column is-12"},S=p("input",{type:"text",class:"input",placeholder:"Job Title",autocomplete:"organization-title"},null,-1),T={class:"column is-12"},B=p("input",{type:"text",class:"input",placeholder:"Location",autocomplete:"country-name"},null,-1),Y={class:"column is-12"},E=p("textarea",{class:"textarea",rows:"4",placeholder:"About / Bio",autocomplete:"off",autocapitalize:"off",spellcheck:"true"},null,-1),D={class:"fieldset"},J=p("div",{class:"fieldset-heading"},[p("h4",null,"Professional Info"),p("p",null,"This can help you to win some opportunities")],-1),M={class:"columns is-multiline"},O={class:"column is-6"},$={class:"column is-6"},q={class:"column is-6"},H={class:"column is-6"},K={class:"column is-12"},Q={class:"fieldset"},W=p("div",{class:"fieldset-heading"},[p("h4",null,"Social Profiles"),p("p",null,"This can help others finding you on social media")],-1),X={class:"columns is-multiline"},Z={class:"column is-6"},ee=p("input",{type:"text",class:"input",placeholder:"Facebook URL",inputmode:"url"},null,-1),le={class:"column is-6"},ae=p("input",{type:"text",class:"input",placeholder:"Twitter URL",inputmode:"url"},null,-1),te={class:"column is-6"},ie=p("input",{type:"text",class:"input",placeholder:"Dribbble URL",inputmode:"url"},null,-1),se={class:"column is-6"},oe=p("input",{type:"text",class:"input",placeholder:"Instagram URL",inputmode:"url"},null,-1),ne={class:"column is-6"},ue=p("input",{type:"text",class:"input",placeholder:"Github URL",inputmode:"url"},null,-1),re={class:"column is-6"},de=p("input",{type:"text",class:"input",placeholder:"Gitlab URL",inputmode:"url"},null,-1);var ce=s({expose:[],setup(s){const h=o(!1),ce=o(!1),pe=o(""),fe=o(""),me=o(""),ve=o(""),he=o(["software","saas","engineering"]),ge=[{value:"software",label:"Software"},{value:"saas",label:"SaaS"},{value:"engineering",label:"Engineering"}],be=g(),{y:ye}=n(),_e=u((()=>ye.value>30)),Fe=async()=>{ce.value=!0,await b(),be.success("Your changes have been successfully saved!"),ce.value=!1};return(s,o)=>{const n=e,u=l,g=a,b=t,be=i,ye=r("Multiselect");return d(),c("div",y,[p("div",{class:["form-head stuck-header",[m(_e)&&"is-stuck"]]},[p("div",_,[F,p("div",V,[p("div",x,[p(n,{to:{name:"sidebar-layouts-profile-view"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:f((()=>[k])),_:1}),p(n,{color:"primary",raised:"",loading:ce.value,onClick:Fe},{default:f((()=>[w])),_:1},8,["loading"])])])])],2),p("div",j,[v("Fieldset"),p("div",U,[L,p(g,{size:"xl",class:"profile-v-avatar"},{avatar:f((()=>[v(' <img\r\n              v-if="!isUploading"\r\n              class="avatar"\r\n              src="/demo/avatars/8.jpg"\r\n              alt=""\r\n              @error.once="\r\n                $event.target.src = \'https://via.placeholder.com/150x150\'\r\n              "\r\n            /> '),v(' <V-FilePond\r\n              v-else\r\n              class="profile-filepond"\r\n              name="profile_filepond"\r\n              :chunk-retry-delays="[500, 1000, 3000]"\r\n              label-idle="<i class=\'lnil lnil-cloud-upload\'></i>"\r\n              :accepted-file-types="[\'image/png\', \'image/jpeg\', \'image/gif\']"\r\n              :image-preview-height="140"\r\n              :image-resize-target-width="140"\r\n              :image-resize-target-height="140"\r\n              image-crop-aspect-ratio="1:1"\r\n              style-panel-layout="compact circle"\r\n              style-load-indicator-position="center bottom"\r\n              style-progress-indicator-position="right bottom"\r\n              style-button-remove-item-position="left bottom"\r\n              style-button-process-item-position="right bottom"\r\n              @addfile="onAddFile"\r\n              @removefile="onRemoveFile"\r\n            /> '),h.value?(d(),c(u,{key:1,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",onClick:o[2]||(o[2]=e=>h.value=!1)})):(d(),c(u,{key:0,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",onClick:o[1]||(o[1]=e=>h.value=!0)}))])),_:1})]),v("Fieldset"),p("div",I,[R,p("div",z,[v("Field"),p("div",N,[p(be,null,{default:f((()=>[p(b,{icon:"feather:user"},{default:f((()=>[P])),_:1})])),_:1})]),v("Field"),p("div",A,[p(be,null,{default:f((()=>[p(b,{icon:"feather:user"},{default:f((()=>[C])),_:1})])),_:1})]),v("Field"),p("div",G,[p(be,null,{default:f((()=>[p(b,{icon:"feather:briefcase"},{default:f((()=>[S])),_:1})])),_:1})]),v("Field"),p("div",T,[p(be,null,{default:f((()=>[p(b,{icon:"feather:map-pin"},{default:f((()=>[B])),_:1})])),_:1})]),v("Field"),p("div",Y,[p(be,null,{default:f((()=>[p(b,null,{default:f((()=>[E])),_:1})])),_:1})])])]),v("Fieldset"),p("div",D,[J,p("div",M,[v("Field"),p("div",O,[p(be,null,{default:f((()=>[p(b,null,{default:f((()=>[p(ye,{modelValue:pe.value,"onUpdate:modelValue":o[3]||(o[3]=e=>pe.value=e),placeholder:"Experience",options:["0-2 years","2-5 years","5-10 years","10+ years"]},null,8,["modelValue"])])),_:1})])),_:1})]),v("Field"),p("div",$,[p(be,null,{default:f((()=>[p(b,null,{default:f((()=>[p(ye,{modelValue:fe.value,"onUpdate:modelValue":o[4]||(o[4]=e=>fe.value=e),placeholder:"Is this your first job?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),v("Field"),p("div",q,[p(be,null,{default:f((()=>[p(b,null,{default:f((()=>[p(ye,{modelValue:me.value,"onUpdate:modelValue":o[5]||(o[5]=e=>me.value=e),placeholder:"Are you flexible?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),v("Field"),p("div",H,[p(be,null,{default:f((()=>[p(b,null,{default:f((()=>[p(ye,{modelValue:ve.value,"onUpdate:modelValue":o[6]||(o[6]=e=>ve.value=e),placeholder:"Do you work remotely?",options:["Yes","No"]},null,8,["modelValue"])])),_:1})])),_:1})]),v("Field"),p("div",K,[p(be,null,{default:f((()=>[p(b,null,{default:f((()=>[p(ye,{modelValue:he.value,"onUpdate:modelValue":o[7]||(o[7]=e=>he.value=e),mode:"tags",searchable:!0,"create-tag":!0,options:ge,placeholder:"Add tags"},null,8,["modelValue"])])),_:1})])),_:1})])])]),v("Fieldset"),p("div",Q,[W,p("div",X,[v("Field"),p("div",Z,[p(be,null,{default:f((()=>[p(b,{icon:"fab fa-facebook-f"},{default:f((()=>[ee])),_:1})])),_:1})]),v("Field"),p("div",le,[p(be,null,{default:f((()=>[p(b,{icon:"fab fa-twitter"},{default:f((()=>[ae])),_:1})])),_:1})]),v("Field"),p("div",te,[p(be,null,{default:f((()=>[p(b,{icon:"fab fa-dribbble"},{default:f((()=>[ie])),_:1})])),_:1})]),v("Field"),p("div",se,[p(be,null,{default:f((()=>[p(b,{icon:"fab fa-instagram"},{default:f((()=>[oe])),_:1})])),_:1})]),v("Field"),p("div",ne,[p(be,null,{default:f((()=>[p(b,{icon:"fab fa-github"},{default:f((()=>[ue])),_:1})])),_:1})]),v("Field"),p("div",re,[p(be,null,{default:f((()=>[p(b,{icon:"fab fa-gitlab"},{default:f((()=>[de])),_:1})])),_:1})])])])])])}}});export{ce as _};
