import{d as e,o as t,h as a,k as o,Q as i,R as n,i as s,j as r,J as l,F as c,A as d,B as p,r as m,K as u}from"./vendor.d0c8bc4f.js";import{_ as h}from"./V-Icon.vue_vue&type=script&setup=true&lang.84f721dd.js";const b={key:2,itemprop:"name"},y={key:2,itemprop:"name"},v={key:2,class:"breadcrumb-item"},f={key:2,itemprop:"name"};var k=e({expose:[],props:{items:{type:Array,required:!0},separator:{type:String,default:void 0,validator:e=>-1!==[void 0,"arrow","bullet","dot","succeeds"].indexOf(e)||(console.warn(`V-Breadcrumb: invalid "${e}" separator. Should be arrow, bullet, dot, succeeds or undefined`),!1)},align:{type:String,default:void 0,validator:e=>-1!==[void 0,"center","right"].indexOf(e)||(console.warn(`V-Breadcrumb: invalid "${e}" align. Should be center, right or undefined`),!1)},withIcons:{type:Boolean,default:!1}},setup:e=>(d,p)=>{const m=s("RouterLink");return t(),a("nav",{role:"navigation",class:["breadcrumb",[`has-${e.separator}-separator`,e.align&&`is-${e.align}`]],"aria-label":"breadcrumbs",itemscope:"",itemtype:"https://schema.org/BreadcrumbList"},[o("ul",null,[(t(!0),a(i,null,n(e.items,((i,n)=>(t(),a("li",{key:n,"aria-current":n===e.items.length-1?"page":"",itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[i.to?(t(),a(m,{key:0,class:"breadcrumb-item",itemprop:"item",to:i.to},{default:r((()=>[e.withIcons&&i.icon?(t(),a("span",{key:0,class:["icon is-small",[i.hideLabel&&e.withIcons&&!!i.icon&&"is-solo"]]},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":i.icon},null,8,["data-icon"])],2)):l("",!0),i.hideLabel&&e.withIcons&&i.icon?(t(),a("meta",{key:1,itemprop:"name",content:i.label},null,8,["content"])):(t(),a("span",b,c(i.label),1)),o("meta",{itemprop:"position",content:n+1},null,8,["content"])])),_:2},1032,["to"])):i.link?(t(),a("a",{key:1,class:"breadcrumb-item",itemprop:"item",href:i.link},[e.withIcons&&i.icon?(t(),a("span",{key:0,class:["icon is-small",[i.hideLabel&&e.withIcons&&!!i.icon&&"is-solo"]]},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":i.icon},null,8,["data-icon"])],2)):l("",!0),i.hideLabel&&e.withIcons&&i.icon?(t(),a("meta",{key:1,itemprop:"name",content:i.label},null,8,["content"])):(t(),a("span",y,c(i.label),1)),o("meta",{itemprop:"position",content:n+1},null,8,["content"])],8,["href"])):(t(),a("span",v,[e.withIcons&&i.icon?(t(),a("span",{key:0,class:["icon is-small",[i.hideLabel&&e.withIcons&&!!i.icon&&"is-solo"]]},[o("i",{"aria-hidden":"true",class:"iconify","data-icon":i.icon},null,8,["data-icon"])],2)):l("",!0),i.hideLabel&&e.withIcons&&i.icon?(t(),a("meta",{key:1,itemprop:"name",content:i.label},null,8,["content"])):(t(),a("span",f,c(i.label),1)),o("meta",{itemprop:"position",content:n+1},null,8,["content"])]))],8,["aria-current"])))),128))])],2)}});d("data-v-423fdaa6");const g={class:"demo-card"},w={class:"demo-title"},I={class:"content"},x={key:0,class:"card-inner"},_={key:0,class:"demo-example"},L={key:1,class:"demo-code-wrapper"},$={class:"demo-code"},B={key:0,class:"demo-state"};p();var j=e({expose:[],props:{frontmatter:{type:Object},componentData:{type:Array,required:!1}},setup(e){const i=m(!1);return(n,s)=>{const r=h;return t(),a("div",g,[o("div",w,[o("div",I,[u(n.$slots,"default",{},void 0,!0)]),e.frontmatter.disable_code?l("",!0):(t(),a("a",{key:0,class:["code-trigger",[i.value&&"is-active"]],onClick:s[1]||(s[1]=e=>i.value=!i.value)},[i.value?(t(),a(r,{key:1,style:{height:"16px"},icon:"feather:x"})):(t(),a(r,{key:0,style:{height:"16px"},icon:"feather:code"}))],2))]),e.frontmatter.disable_code&&e.frontmatter.disable_example?l("",!0):(t(),a("div",x,[e.frontmatter.disable_code?l("",!0):(t(),a("div",_,[u(n.$slots,"example",{},void 0,!0)])),!e.frontmatter.disable_code&&i.value?(t(),a("div",L,[o("div",$,[u(n.$slots,"code",{},void 0,!0)]),e.frontmatter.state?(t(),a("div",B,[o("pre",null,c(e.frontmatter.state),1)])):l("",!0)])):l("",!0)]))])}}});j.__scopeId="data-v-423fdaa6";export{j as _,k as a};
