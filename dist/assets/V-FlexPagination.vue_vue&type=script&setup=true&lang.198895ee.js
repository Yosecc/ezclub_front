var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{d as s,O as o,b as u,h as c,o as p,i as v,E as f,j as g,H as y,k as d,S as b,U as m,F as h,G as P}from"./vendor.d343baf9.js";const k={role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","data-filter-hide":""},j=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),O=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),x={class:"pagination-list"},_={key:0},q=h(" 1 "),w={key:1},D=d("span",{class:"pagination-ellipsis"},"…",-1),G={key:2},L=d("span",{class:"pagination-ellipsis"},"…",-1),M={key:3};var N=s({expose:[],props:{itemPerPage:{type:Number,required:!0},totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},maxLinksDisplayed:{type:Number,default:5}},emits:["onPaginate"],setup(e,{emit:s}){const N=e,I=o(),E=u((()=>Math.ceil(N.totalItems/N.itemPerPage)||1)),S=u((()=>E.value>N.maxLinksDisplayed-2?N.maxLinksDisplayed-2:E.value)),$=u((()=>{const e=[];let a=N.currentPage-Math.floor(S.value/2),t=a+(S.value-Math.ceil(S.value%2));a<1&&(a=1,t=a+(S.value-1)),t>E.value&&(t=E.value,a=t-(S.value-1));for(let r=a;r<=t;r+=1)e.push(r);return e})),F=u((()=>$.value[0]>1)),H=u((()=>$.value[$.value.length-1]<E.value)),R=(e=1)=>{const o=Math.min(e,E.value),u=(c=((e,a)=>{for(var t in a||(a={}))i.call(a,t)&&l(e,t,a[t]);if(r)for(var t of r(a))n.call(a,t)&&l(e,t,a[t]);return e})({},I.query),a(c,t({page:o<=1?void 0:o})));var c;return s("onPaginate",e),{name:I.name,params:I.params,query:u}};return(a,t)=>{const r=c("RouterLink");return p(),v("nav",k,[f(E)>1?(p(),v(r,{key:0,to:R(e.currentPage-1),class:"pagination-previous has-chevron"},{default:g((()=>[j])),_:1},8,["to"])):y("v-if",!0),f(E)>1?(p(),v(r,{key:1,to:R(e.currentPage+1),class:"pagination-next has-chevron"},{default:g((()=>[O])),_:1},8,["to"])):y("v-if",!0),d("ul",x,[f(F)?(p(),v("li",_,[d(r,{to:R(1),class:"pagination-link justify-content-center","aria-label":"Goto page 1"},{default:g((()=>[q])),_:1},8,["to"])])):y("v-if",!0),f($)[0]>2?(p(),v("li",w,[D])):y("v-if",!0),(p(!0),v(b,null,m(f($),(a=>(p(),v("li",{key:a},[d(r,{to:R(a),class:["pagination-link justify-content-center",[e.currentPage===a&&"is-current"]],"aria-label":`Goto page ${a}`,"aria-current":e.currentPage===a?"page":""},{default:g((()=>[h(P(a),1)])),_:2},1032,["to","aria-label","aria-current","class"])])))),128)),f($)[f($).length-1]<f(E)-1?(p(),v("li",G,[L])):y("v-if",!0),f(H)?(p(),v("li",M,[d(r,{to:R(f(E)),class:"pagination-link justify-content-center","aria-label":`Goto page ${f(E)}`},{default:g((()=>[h(P(f(E)),1)])),_:1},8,["to","aria-label"])])):y("v-if",!0)])])}}});export{N as _};
