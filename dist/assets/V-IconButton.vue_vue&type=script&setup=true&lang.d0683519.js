import{d as a,c as e,h as i,i as n,j as o,F as d,l,I as t,k as s}from"./vendor.b96c0b62.js";const c={key:0,class:"icon"},r={key:1,class:"icon"},u={key:0,class:"icon"},f={key:1,class:"icon"},p={key:0,class:"icon"},y={key:1,class:"icon"};var h=a({expose:[],props:{icon:{type:String,required:!0},to:{type:Object,default:void 0},href:{type:String,default:void 0},color:{type:String,default:void 0,validator:a=>-1!==[void 0,"primary","info","success","warning","danger","white"].indexOf(a)||(console.warn(`V-IconButton: invalid "${a}" color. Should be primary, info, success, warning, danger, white or undefined`),!1)},dark:{type:String,default:void 0,validator:a=>!a||(-1!==["1","2","3","4","5","6"].indexOf(a)||(console.warn(`V-IconButton: invalid "${a}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1))},circle:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},light:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},darkOutlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(a){const h=a,k=e((()=>h.icon&&-1!==h.icon.indexOf(":"))),b=e((()=>[h.disabled&&"is-disabled",h.circle&&"is-circle",h.bold&&"is-bold",h.outlined&&"is-outlined",h.raised&&"is-raised",h.dark&&`is-dark-bg-${h.dark}`,h.darkOutlined&&"is-dark-outlined",h.elevated&&"is-elevated",h.loading&&"is-loading",h.color&&`is-${h.color}`,h.light&&"is-light"]));return(e,h)=>{const v=i("RouterLink");return a.to?(n(),o(v,{key:0,to:a.to,class:["button",d(b)]},{default:s((()=>[d(k)?(n(),o("span",c,[l("i",{"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])])):a.icon?(n(),o("span",r,[l("i",{"aria-hidden":"true",class:a.icon},null,2)])):t("v-if",!0)])),_:1},8,["to","class"])):a.href?(n(),o("a",{key:1,href:a.href,class:d(b)},[d(k)?(n(),o("span",u,[l("i",{"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])])):a.icon?(n(),o("span",f,[l("i",{"aria-hidden":"true",class:a.icon},null,2)])):t("v-if",!0)],10,["href"])):(n(),o("button",{key:2,class:["button",d(b)],disabled:a.disabled},[d(k)?(n(),o("span",p,[l("i",{"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])])):a.icon?(n(),o("span",y,[l("i",{"aria-hidden":"true",class:a.icon},null,2)])):t("v-if",!0)],10,["disabled"]))}}});export{h as _};
