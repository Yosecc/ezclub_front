import{d as r,c as a,i as e,j as i,F as d,I as o}from"./vendor.b96c0b62.js";var n=r({expose:[],props:{icon:{type:String,default:void 0},picture:{type:String,default:void 0},color:{type:String,default:void 0,validator:r=>!r||(-1!==["white","black","light","dark","primary","secondary","link","info","success","warning","danger"].indexOf(r)||(console.warn(`V-IconWrap: invalid "${r}" color. Should be white, black, light, dark, primary, secondary, link, info, success, warning, danger or undefined`),!1))},size:{type:String,default:void 0,validator:r=>-1!==[void 0,"large"].indexOf(r)||(console.warn(`V-IconWrap: invalid "${r}" size. Should be large or undefined`),!1)},dark:{type:String,default:void 0,validator:r=>-1!==[void 0,"1","2","3","4","5","6"].indexOf(r)||(console.warn(`V-IconWrap: invalid "${r}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1)},placeholder:{type:Boolean,default:!1},darkPrimary:{type:Boolean,default:!1},darkCardBordered:{type:Boolean,default:!1}},setup(r){const n=r,l=a((()=>n.icon&&-1!==n.icon.indexOf(":")));return(a,n)=>(e(),i("div",{class:["icon-wrap",[r.color&&`has-text-${r.color}`,r.size&&`is-${r.size}`,r.dark&&`is-dark-bg-${r.dark}`,r.darkPrimary&&"is-dark-primary",r.darkCardBordered&&"is-dark-card-bordered",r.picture&&"has-img",r.placeholder&&"is-placeholder"]]},[r.picture?(e(),i("img",{key:0,src:r.picture,alt:"",onErrorOnce:n[1]||(n[1]=r=>r.target.src="https://via.placeholder.com/32x32")},null,40,["src"])):d(l)?(e(),i("i",{key:1,"aria-hidden":"true",class:"iconify","data-icon":r.icon},null,8,["data-icon"])):r.icon?(e(),i("i",{key:2,"aria-hidden":"true",class:r.icon},null,2)):o("v-if",!0)],2))}});export{n as _};
