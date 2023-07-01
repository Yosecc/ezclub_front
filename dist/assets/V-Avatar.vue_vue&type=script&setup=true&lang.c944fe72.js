import{d as a,r as e,h as r,i as o,L as i,l as t,H as l,K as d}from"./vendor.3e3390b7.js";var s=a({expose:[],props:{picture:{type:String,default:void 0},pictureDark:{type:String,default:void 0},placeholder:{type:String,default:"https://via.placeholder.com/50x50"},badge:{type:String,default:void 0},initials:{type:String,default:"?"},size:{type:String,default:void 0,validator:a=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(a)||(console.warn(`V-Avatar: invalid "${a}" size. Should be small, medium, large, big, xl or undefined`),!1)},color:{type:String,default:void 0,validator:a=>-1!==[void 0,"primary","success","info","warning","danger","h-purple","h-orange","h-blue","h-green","h-red","h-yellow"].indexOf(a)||(console.warn(`V-Avatar: invalid "${a}" color. Should be primary, success, info, warning, danger, h-purple, h-orange, h-blue, h-green, h-red, h-yellow or undefined`),!1)},dotColor:{type:String,default:void 0,validator:a=>-1!==[void 0,"primary","info","warning","danger","grey"].indexOf(a)||(console.warn(`V-Avatar: invalid "${a}" dotColor. Should be primary, info, warning, danger, grey or undefined`),!1)},squared:{type:Boolean,default:!1},dot:{type:Boolean,default:!1}},setup(a){const s=e(!0);return(e,n)=>(r(),o("div",{class:["v-avatar",[a.size&&`is-${a.size}`,a.dot&&"has-dot",a.dotColor&&`dot-${a.dotColor}`,a.squared&&a.dot&&"has-dot-squared"]]},[i(e.$slots,"avatar",{},(()=>[a.picture&&s.value?(r(),o("img",{key:0,class:["avatar",[a.squared&&"is-squared"]],src:a.picture,alt:"",onErrorOnce:n[1]||(n[1]=a=>[a.target.src="https://via.placeholder.com/150x150",void(s.value=!1)])},null,42,["src"])):(r(),o("span",{key:1,class:["avatar is-fake",[a.squared&&"is-squared",a.color&&`is-${a.color}`]]},[t("span",null,l(a.initials),1)],2)),a.picture&&a.pictureDark?(r(),o("img",{key:2,class:["avatar dark-image",[a.squared&&"is-squared"]],src:a.pictureDark,alt:"",onErrorOnce:n[2]||(n[2]=a=>a.target.src="https://via.placeholder.com/150x150")},null,42,["src"])):d("",!0)])),i(e.$slots,"badge",{},(()=>[a.badge?(r(),o("img",{key:0,class:"badge",src:a.badge,alt:"",onErrorOnce:n[3]||(n[3]=a=>a.target.src="https://via.placeholder.com/150x150")},null,40,["src"])):d("",!0)]))],2))}});export{s as _};
