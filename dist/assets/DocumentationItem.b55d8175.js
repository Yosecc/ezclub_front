import{d as e,h as t,o as a,i,k as o,Q as n,R as s,j as r,G as l,F as c,A as d,B as p,r as m,K as u}from"./vendor.0a671356.js";import{_ as v}from"./V-Icon.vue_vue&type=script&setup=true&lang.45d94437.js";const b={key:2,itemprop:"name"},h={key:2,itemprop:"name"},y={key:2,class:"breadcrumb-item"},f={key:2,itemprop:"name"};var k=e({expose:[],props:{items:{type:Array,required:!0},separator:{type:String,default:void 0,validator:e=>-1!==[void 0,"arrow","bullet","dot","succeeds"].indexOf(e)||(console.warn(`V-Breadcrumb: invalid "${e}" separator. Should be arrow, bullet, dot, succeeds or undefined`),!1)},align:{type:String,default:void 0,validator:e=>-1!==[void 0,"center","right"].indexOf(e)||(console.warn(`V-Breadcrumb: invalid "${e}" align. Should be center, right or undefined`),!1)},withIcons:{type:Boolean,default:!1}},setup:e=>(d,p)=>{const m=t("RouterLink");return a(),i("nav",{role:"navigation",class:["breadcrumb",[`has-${e.separator}-separator`,e.align&&`is-${e.align}`]],"aria-label":"breadcrumbs",itemscope:"",itemtype:"https://schema.org/BreadcrumbList"},[o("ul",null,[(a(!0),i(n,null,s(e.items,((t,n)=>(a(),i("li",{key:n,"aria-current":n===e.items.length-1?"page":"",itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[t.to?(a(),i(m,{key:0,class:"breadcrumb-item",itemprop:"item",to:t.to},{default:r((()=>[e.withIcons&&t.icon?(a(),i("span",{key:0,class:["icon is-small",[t.hideLabel&&e.withIcons&&!!t.icon&&"is-solo"]]},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":t.icon},null,8,["data-icon"])],2)):l("v-if",!0),t.hideLabel&&e.withIcons&&t.icon?(a(),i("meta",{key:1,itemprop:"name",content:t.label},null,8,["content"])):(a(),i("span",b,c(t.label),1)),o("meta",{itemprop:"position",content:n+1},null,8,["content"])])),_:2},1032,["to"])):t.link?(a(),i("a",{key:1,class:"breadcrumb-item",itemprop:"item",href:t.link},[e.withIcons&&t.icon?(a(),i("span",{key:0,class:["icon is-small",[t.hideLabel&&e.withIcons&&!!t.icon&&"is-solo"]]},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":t.icon},null,8,["data-icon"])],2)):l("v-if",!0),t.hideLabel&&e.withIcons&&t.icon?(a(),i("meta",{key:1,itemprop:"name",content:t.label},null,8,["content"])):(a(),i("span",h,c(t.label),1)),o("meta",{itemprop:"position",content:n+1},null,8,["content"])],8,["href"])):(a(),i("span",y,[e.withIcons&&t.icon?(a(),i("span",{key:0,class:["icon is-small",[t.hideLabel&&e.withIcons&&!!t.icon&&"is-solo"]]},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":t.icon},null,8,["data-icon"])],2)):l("v-if",!0),t.hideLabel&&e.withIcons&&t.icon?(a(),i("meta",{key:1,itemprop:"name",content:t.label},null,8,["content"])):(a(),i("span",f,c(t.label),1)),o("meta",{itemprop:"position",content:n+1},null,8,["content"])]))],8,["aria-current"])))),128))])],2)}});d("data-v-27dd004b");const g={class:"demo-card"},w={class:"demo-title"},I={class:"content"},x={key:0,class:"card-inner"},_={key:0,class:"demo-example"},L={key:1,class:"demo-code-wrapper"},$={class:"demo-code"},B={key:0,class:"demo-state"};p();var j=e({expose:[],props:{frontmatter:{type:Object},componentData:{type:Array,required:!1}},setup(e){const t=m(!1);return(n,s)=>{const r=v;return a(),i("div",g,[o("div",w,[o("div",I,[u(n.$slots,"default",{},void 0,!0)]),e.frontmatter.disable_code?l("v-if",!0):(a(),i("a",{key:0,class:["code-trigger",[t.value&&"is-active"]],onClick:s[1]||(s[1]=e=>t.value=!t.value)},[t.value?(a(),i(r,{key:1,style:{height:"16px"},icon:"feather:x"})):(a(),i(r,{key:0,style:{height:"16px"},icon:"feather:code"}))],2))]),e.frontmatter.disable_code&&e.frontmatter.disable_example?l("v-if",!0):(a(),i("div",x,[e.frontmatter.disable_code?l("v-if",!0):(a(),i("div",_,[u(n.$slots,"example",{},void 0,!0)])),!e.frontmatter.disable_code&&t.value?(a(),i("div",L,[o("div",$,[u(n.$slots,"code",{},void 0,!0)]),e.frontmatter.state?(a(),i("div",B,[o("pre",null,c(e.frontmatter.state),1)])):l("v-if",!0)])):l("v-if",!0)]))])}}});j.__scopeId="data-v-27dd004b";export{j as _,k as a};
