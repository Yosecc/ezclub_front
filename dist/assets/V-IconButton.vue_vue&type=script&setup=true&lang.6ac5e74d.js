import{d as a,b as e,o as i,h as o,E as n,k as d,K as l,i as t,j as s}from"./vendor.853b0a2b.js";const r={key:0,class:"icon"},c={key:1,class:"icon"},u={key:0,class:"icon"},f={key:1,class:"icon"},p={key:0,class:"icon"},y={key:1,class:"icon"};var b=a({expose:[],props:{icon:{type:String,required:!0},to:{type:Object,default:void 0},href:{type:String,default:void 0},color:{type:String,default:void 0,validator:a=>-1!==[void 0,"primary","info","success","warning","danger","white"].indexOf(a)||(console.warn(`V-IconButton: invalid "${a}" color. Should be primary, info, success, warning, danger, white or undefined`),!1)},dark:{type:String,default:void 0,validator:a=>!a||(-1!==["1","2","3","4","5","6"].indexOf(a)||(console.warn(`V-IconButton: invalid "${a}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1))},circle:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},light:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},darkOutlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(a){const b=a,h=e((()=>b.icon&&-1!==b.icon.indexOf(":"))),k=e((()=>[b.disabled&&"is-disabled",b.circle&&"is-circle",b.bold&&"is-bold",b.outlined&&"is-outlined",b.raised&&"is-raised",b.dark&&`is-dark-bg-${b.dark}`,b.darkOutlined&&"is-dark-outlined",b.elevated&&"is-elevated",b.loading&&"is-loading",b.color&&`is-${b.color}`,b.light&&"is-light"]));return(e,b)=>{const g=t("RouterLink");return a.to?(i(),o(g,{key:0,to:a.to,class:["button",n(k)]},{default:s((()=>[n(h)?(i(),o("span",r,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])])):a.icon?(i(),o("span",c,[d("i",{"aria-hidden":"true",class:a.icon},null,2)])):l("",!0)])),_:1},8,["to","class"])):a.href?(i(),o("a",{key:1,href:a.href,class:n(k)},[n(h)?(i(),o("span",u,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])])):a.icon?(i(),o("span",f,[d("i",{"aria-hidden":"true",class:a.icon},null,2)])):l("",!0)],10,["href"])):(i(),o("button",{key:2,class:["button",n(k)],disabled:a.disabled},[n(h)?(i(),o("span",p,[d("i",{"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,["data-icon"])])):a.icon?(i(),o("span",y,[d("i",{"aria-hidden":"true",class:a.icon},null,2)])):l("",!0)],10,["disabled"]))}}});export{b as _};
