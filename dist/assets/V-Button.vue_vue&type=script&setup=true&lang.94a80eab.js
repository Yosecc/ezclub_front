import{_ as a}from"./V-Placeload.410731c2.js";import{d as e,b as i,h as d,o as l,i as n,D as o,k as t,G as s,K as r,j as c}from"./vendor.1faf4f77.js";const u={key:0,class:"icon"},f={key:1,class:"icon"},p={key:3},y={key:4,class:"caret"},h={key:5,class:"caret"},v={key:0,class:"icon"},k={key:1,class:"icon"},g={key:3},b={key:4,class:"caret"},w={key:5,class:"caret"},B={key:0,class:"icon"},m={key:1,class:"icon"},C={key:3},S={key:4,class:"caret"},x={key:5,class:"caret"},$=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;var O=e({expose:[],props:{to:{type:[Object,String],default:void 0},href:{type:String,default:void 0},icon:{type:String,default:void 0},iconCaret:{type:String,default:void 0},placeload:{type:String,default:void 0,validator:a=>(null===a.match($)&&console.warn(`V-Button: invalid "${a}" placeload. Should be a valid css unit value.`),!0)},color:{type:String,default:void 0,validator:a=>-1!==[void 0,"primary","info","success","warning","danger","white"].indexOf(a)||(console.warn(`V-Button: invalid "${a}" color. Should be primary, info, success, warning, danger, white or undefined`),!1)},size:{type:String,default:void 0,validator:a=>-1!==[void 0,"big","huge"].indexOf(a)||(console.warn(`V-Button: invalid "${a}" size. Should be big, huge or undefined`),!1)},dark:{type:String,default:void 0,validator:a=>-1!==[void 0,"1","2","3","4","5","6"].indexOf(a)||(console.warn(`V-Button: invalid "${a}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1)},rounded:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},fullwidth:{type:Boolean,default:!1},light:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},darkOutlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},lower:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){const $=e,O=i((()=>$.icon&&-1!==$.icon.indexOf(":"))),V=i((()=>$.iconCaret&&-1!==$.iconCaret.indexOf(":"))),j=i((()=>["button","v-button",$.disabled&&"is-disabled",$.rounded&&"is-rounded",$.bold&&"is-bold",$.size&&`is-${$.size}`,$.lower&&"is-lower",$.fullwidth&&"is-fullwidth",$.outlined&&"is-outlined",$.dark&&`is-dark-bg-${$.dark}`,$.darkOutlined&&"is-dark-outlined",$.raised&&"is-raised",$.elevated&&"is-elevated",$.loading&&!$.placeload&&"is-loading",$.color&&`is-${$.color}`,$.light&&"is-light"]));return(i,z)=>{const _=a,D=d("RouterLink");return e.to?(l(),n(D,{key:0,"aria-hidden":$.placeload&&"true",to:e.to,class:o(j)},{default:c((()=>[o(O)?(l(),n("span",u,[t("i",{"aria-hidden":"true",class:"iconify","data-icon":e.icon},null,8,["data-icon"])])):e.icon?(l(),n("span",f,[t("i",{"aria-hidden":"true",class:e.icon},null,2)])):s("v-if",!0),$.placeload?(l(),n(_,{key:2,width:$.placeload},null,8,["width"])):(l(),n("span",p,[r(i.$slots,"default")])),o(V)?(l(),n("span",y,[t("i",{"aria-hidden":"true",class:"iconify","data-icon":e.iconCaret},null,8,["data-icon"])])):e.iconCaret?(l(),n("span",h,[t("i",{"aria-hidden":"true",class:e.iconCaret},null,2)])):s("v-if",!0)])),_:3},8,["aria-hidden","to","class"])):e.href?(l(),n("a",{key:1,"aria-hidden":$.placeload&&"true",href:e.href,class:o(j)},[o(O)?(l(),n("span",v,[t("i",{"aria-hidden":"true",class:"iconify","data-icon":e.icon},null,8,["data-icon"])])):e.icon?(l(),n("span",k,[t("i",{"aria-hidden":"true",class:e.icon},null,2)])):s("v-if",!0),$.placeload?(l(),n(_,{key:2,width:$.placeload},null,8,["width"])):(l(),n("span",g,[r(i.$slots,"default")])),o(V)?(l(),n("span",b,[t("i",{"aria-hidden":"true",class:"iconify","data-icon":e.iconCaret},null,8,["data-icon"])])):e.iconCaret?(l(),n("span",w,[t("i",{"aria-hidden":"true",class:e.iconCaret},null,2)])):s("v-if",!0)],10,["aria-hidden","href"])):(l(),n("button",{key:2,"aria-hidden":$.placeload&&"true",class:o(j),disabled:e.disabled},[o(O)?(l(),n("span",B,[t("i",{"aria-hidden":"true",class:"iconify","data-icon":e.icon},null,8,["data-icon"])])):e.icon?(l(),n("span",m,[t("i",{"aria-hidden":"true",class:e.icon},null,2)])):s("v-if",!0),$.placeload?(l(),n(_,{key:2,width:$.placeload},null,8,["width"])):(l(),n("span",C,[r(i.$slots,"default")])),o(V)?(l(),n("span",S,[t("i",{"aria-hidden":"true",class:"iconify","data-icon":e.iconCaret},null,8,["data-icon"])])):e.iconCaret?(l(),n("span",x,[t("i",{"aria-hidden":"true",class:e.iconCaret},null,2)])):s("v-if",!0)],10,["aria-hidden","disabled"]))}}});export{O as _};