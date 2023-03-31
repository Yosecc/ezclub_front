var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{d as s,c as o,h as u,i as c,F as p,k as g,K as v,l as y,R as d,S as f,P as m,j as b,G as h,H as P}from"./vendor.b43d5946.js";const k={role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","data-filter-hide":""},j=y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),O=y("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),x={class:"pagination-list"},_={key:0},q=h(" 1 "),w={key:1},D=y("span",{class:"pagination-ellipsis"},"…",-1),G={key:2},L=y("span",{class:"pagination-ellipsis"},"…",-1),M={key:3};var N=s({expose:[],props:{itemPerPage:{type:Number,required:!0},totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},maxLinksDisplayed:{type:Number,default:5}},emits:["onPaginate"],setup(e,{emit:s}){const N=e,I=m(),R=o((()=>Math.ceil(N.totalItems/N.itemPerPage)||1)),S=o((()=>R.value>N.maxLinksDisplayed-2?N.maxLinksDisplayed-2:R.value)),$=o((()=>{const e=[];let a=N.currentPage-Math.floor(S.value/2),t=a+(S.value-Math.ceil(S.value%2));a<1&&(a=1,t=a+(S.value-1)),t>R.value&&(t=R.value,a=t-(S.value-1));for(let r=a;r<=t;r+=1)e.push(r);return e})),E=o((()=>$.value[0]>1)),F=o((()=>$.value[$.value.length-1]<R.value)),H=(e=1)=>{const o=Math.min(e,R.value),u=(c=((e,a)=>{for(var t in a||(a={}))n.call(a,t)&&l(e,t,a[t]);if(r)for(var t of r(a))i.call(a,t)&&l(e,t,a[t]);return e})({},I.query),a(c,t({page:o<=1?void 0:o})));var c;return s("onPaginate",e),{name:I.name,params:I.params,query:u}};return(a,t)=>{const r=b("RouterLink");return u(),c("nav",k,[p(R)>1?(u(),c(r,{key:0,to:H(e.currentPage-1),class:"pagination-previous has-chevron"},{default:g((()=>[j])),_:1},8,["to"])):v("",!0),p(R)>1?(u(),c(r,{key:1,to:H(e.currentPage+1),class:"pagination-next has-chevron"},{default:g((()=>[O])),_:1},8,["to"])):v("",!0),y("ul",x,[p(E)?(u(),c("li",_,[y(r,{to:H(1),class:"pagination-link justify-content-center","aria-label":"Goto page 1"},{default:g((()=>[q])),_:1},8,["to"])])):v("",!0),p($)[0]>2?(u(),c("li",w,[D])):v("",!0),(u(!0),c(d,null,f(p($),(a=>(u(),c("li",{key:a},[y(r,{to:H(a),class:["pagination-link justify-content-center",[e.currentPage===a&&"is-current"]],"aria-label":`Goto page ${a}`,"aria-current":e.currentPage===a?"page":""},{default:g((()=>[h(P(a),1)])),_:2},1032,["to","aria-label","aria-current","class"])])))),128)),p($)[p($).length-1]<p(R)-1?(u(),c("li",G,[L])):v("",!0),p(F)?(u(),c("li",M,[y(r,{to:H(p(R)),class:"pagination-link justify-content-center","aria-label":`Goto page ${p(R)}`},{default:g((()=>[h(P(p(R)),1)])),_:1},8,["to","aria-label"])])):v("",!0)])])}}});export{N as _};
