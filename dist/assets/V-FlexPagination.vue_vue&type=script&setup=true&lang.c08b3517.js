var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{d as s,L as o,b as u,h as c,o as p,i as f,D as v,j as g,G as y,k as d,Q as m,R as b,E as h,F as P}from"./vendor.1faf4f77.js";const k={role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","data-filter-hide":""},j=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),O=d("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),x={class:"pagination-list"},_={key:0},D=h(" 1 "),L={key:1},q=d("span",{class:"pagination-ellipsis"},"…",-1),w={key:2},G=d("span",{class:"pagination-ellipsis"},"…",-1),M={key:3};var N=s({expose:[],props:{itemPerPage:{type:Number,required:!0},totalItems:{type:Number,required:!0},currentPage:{type:Number,default:1},maxLinksDisplayed:{type:Number,default:5}},emits:["onPaginate"],setup(e,{emit:s}){const N=e,I=o(),E=u((()=>Math.ceil(N.totalItems/N.itemPerPage)||1)),R=u((()=>E.value>N.maxLinksDisplayed-2?N.maxLinksDisplayed-2:E.value)),$=u((()=>{const e=[];let a=N.currentPage-Math.floor(R.value/2),t=a+(R.value-Math.ceil(R.value%2));a<1&&(a=1,t=a+(R.value-1)),t>E.value&&(t=E.value,a=t-(R.value-1));for(let r=a;r<=t;r+=1)e.push(r);return e})),F=u((()=>$.value[0]>1)),Q=u((()=>$.value[$.value.length-1]<E.value)),S=(e=1)=>{const o=Math.min(e,E.value),u=(c=((e,a)=>{for(var t in a||(a={}))i.call(a,t)&&l(e,t,a[t]);if(r)for(var t of r(a))n.call(a,t)&&l(e,t,a[t]);return e})({},I.query),a(c,t({page:o<=1?void 0:o})));var c;return s("onPaginate",e),{name:I.name,params:I.params,query:u}};return(a,t)=>{const r=c("RouterLink");return p(),f("nav",k,[v(E)>1?(p(),f(r,{key:0,to:S(e.currentPage-1),class:"pagination-previous has-chevron"},{default:g((()=>[j])),_:1},8,["to"])):y("v-if",!0),v(E)>1?(p(),f(r,{key:1,to:S(e.currentPage+1),class:"pagination-next has-chevron"},{default:g((()=>[O])),_:1},8,["to"])):y("v-if",!0),d("ul",x,[v(F)?(p(),f("li",_,[d(r,{to:S(1),class:"pagination-link justify-content-center","aria-label":"Goto page 1"},{default:g((()=>[D])),_:1},8,["to"])])):y("v-if",!0),v($)[0]>2?(p(),f("li",L,[q])):y("v-if",!0),(p(!0),f(m,null,b(v($),(a=>(p(),f("li",{key:a},[d(r,{to:S(a),class:["pagination-link justify-content-center",[e.currentPage===a&&"is-current"]],"aria-label":`Goto page ${a}`,"aria-current":e.currentPage===a?"page":""},{default:g((()=>[h(P(a),1)])),_:2},1032,["to","aria-label","aria-current","class"])])))),128)),v($)[v($).length-1]<v(E)-1?(p(),f("li",w,[G])):y("v-if",!0),v(Q)?(p(),f("li",M,[d(r,{to:S(v(E)),class:"pagination-link justify-content-center","aria-label":`Goto page ${v(E)}`},{default:g((()=>[h(P(v(E)),1)])),_:1},8,["to","aria-label"])])):y("v-if",!0)])])}}});export{N as _};
