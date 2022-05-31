import{_ as e}from"./V-Control.f3c0402c.js";import{_ as a}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.e662762e.js";import{_ as i}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{_ as l}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.cce79e4a.js";import{d as s,r as t,b as r,o as n,h as c,k as o,j as u,D as d,aa as p,J as m,S as v,Y as f,Q as g,R as h,F as b,E as y}from"./vendor.7d033f41.js";import{_ as k,a as j}from"./search-4-dark.12f0bf0d.js";const x=[{id:0,name:"Introduction to Html5",picture:"/demo/photos/courses/1.jpg",category:"Web Development",difficulty:1,price:26,skill:{icon:"lnil lnil-html5",name:"Html5"},author:{id:8,picture:"/demo/avatars/8.jpg",username:"Erik K.",initials:"EK",color:"info"}},{id:1,name:"Mastering VueJS and Typescript",picture:"/demo/photos/courses/2.png",category:"Web Development",difficulty:4,price:12,skill:{icon:"lnir lnir-nodejs",name:"NodeJS"},author:{id:12,picture:"/demo/avatars/12.jpg",username:"Joshua S.",initials:"JS",color:"info"}},{id:2,name:"Discovering CSS3 and Stylesheets",picture:"/demo/photos/courses/3.jpg",category:"Web Development",difficulty:2,price:16,skill:{icon:"lnir lnir-css3",name:"CSS3"},author:{id:12,picture:"/demo/avatars/5.jpg",username:"Mary L.",initials:"ML",color:"info"}},{id:3,name:"Get Started with Laravel 6",picture:"/demo/photos/courses/4.png",category:"Web Development",difficulty:3,price:0,skill:{icon:"lnir lnir-laravel",name:"Laravel"},author:{id:18,picture:"/demo/avatars/18.jpg",username:"Esteban C.",initials:"EC",color:"info"}},{id:4,name:"Python Basics for Beginners",picture:"/demo/photos/courses/5.jpeg",category:"Web Development",difficulty:1,price:8,skill:{icon:"lnir lnir-python",name:"Python"},author:{id:18,picture:"/demo/avatars/18.jpg",username:"Esteban C.",initials:"EC",color:"info"}},{id:5,name:"Mastering State with React Hooks",picture:"/demo/photos/courses/6.jpg",category:"Web Development",difficulty:4,price:25,skill:{icon:"lnir lnir-react",name:"ReactJS"},author:{id:30,picture:"/demo/avatars/30.jpg",username:"Clément D.",initials:"CD",color:"info"}},{id:6,name:"Setting up an Express Server",picture:"/demo/photos/courses/7.png",category:"Web Development",difficulty:3,price:12,skill:{icon:"lnir lnir-nodejs",name:"NodeJS"},author:{id:38,picture:"/demo/avatars/38.jpg",username:"Christie D.",initials:"CD",color:"info"}},{id:7,name:"Learning to use Kubernetes",picture:"/demo/photos/courses/9.jpg",category:"Web Development",difficulty:5,price:34,skill:{icon:"lnir lnir-chrome",name:"Kubernetes"},author:{id:30,picture:"/demo/avatars/30.jpg",username:"Clément D.",initials:"CD",color:"info"}},{id:8,name:"Another Angular Crash Course",picture:"/demo/photos/courses/11.jpg",category:"Web Development",difficulty:4,price:22,skill:{icon:"lnir lnir-angular",name:"Angular"},author:{id:34,picture:"/demo/avatars/34.jpg",username:"Daniel R.",initials:"DR",color:"info"}},{id:9,name:"learning Advanced Docker Concepts",picture:"/demo/photos/courses/12.jpg",category:"Web Development",difficulty:5,price:35,skill:{icon:"lnir lnir-docker",name:"Docker"},author:{id:30,picture:"/demo/avatars/30.jpg",username:"Clément D.",initials:"CD",color:"info"}}],D={class:"list-flex-toolbar is-reversed"},C={class:"tabs-inner"},S={class:"tabs"},E=o("span",null,"All",-1),_=o("span",null,"Saved",-1),W=o("li",{class:"tab-naver"},null,-1),w={class:"flex-list-wrapper flex-list-v3"},R=o("img",{class:"light-image",src:k,alt:""},null,-1),T=o("img",{class:"dark-image",src:j,alt:""},null,-1),A={class:"flex-table"},J=o("span",{class:"is-grow-lg"},"Course",-1),L=o("span",null,"Category",-1),P=o("span",null,"Main Skill",-1),M=o("span",null,"Difficulty",-1),V=o("span",{class:"cell-end"},"Actions",-1),K={class:"flex-list-inner"},H={class:"flex-table-cell is-media is-grow-lg"},N={class:"item-name dark-inverted"},B={class:"item-meta"},F={class:"flex-media"},Y={class:"meta"},z={class:"flex-table-cell","data-th":"Category"},G={class:"light-text"},I={class:"flex-table-cell","data-th":"Main Skill"},O={class:"light-text no-push"},Q={class:"flex-table-cell","data-th":"Difficulty"},U={class:"dot-levels"},$={class:"flex-table-cell cell-end","data-th":"Actions"},q={class:"\r\n                      button\r\n                      v-button\r\n                      has-dot\r\n                      dark-outlined\r\n                      is-pushed-mobile\r\n                    "},X=y(" Purchase "),Z=o("i",{"aria-hidden":"true",class:"fas fa-circle dot"},null,-1),ee=o("img",{class:"light-image is-larger",src:"/assets/courses.3bd7bb6f.svg",alt:""},null,-1),ae=o("img",{class:"dark-image is-larger",src:"/assets/courses-dark.6232f01b.svg",alt:""},null,-1);var ie=s({expose:[],props:{activeTab:{type:String,default:"all"}},setup(s){const k=t(""),j=r((()=>k.value?x.filter((e=>e.name.match(new RegExp(k.value,"i"))||e.category.match(new RegExp(k.value,"i"))||e.skill.name.match(new RegExp(k.value,"i"))||e.author.username.match(new RegExp(k.value,"i")))):x));return(t,r)=>{const x=e,ie=a,le=i,se=l;return n(),c("div",null,[o("div",D,[o(x,{icon:"feather:search"},{default:u((()=>[v(o("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>k.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[f,k.value]])])),_:1}),o("div",C,[o("div",S,[o("ul",null,[o("li",{class:["all"===s.activeTab&&"is-active"]},[o("a",{onClick:r[2]||(r[2]=e=>s.activeTab="all")},[E])],2),o("li",{class:["saved"===s.activeTab&&"is-active"]},[o("a",{onClick:r[3]||(r[3]=e=>s.activeTab="saved")},[_])],2),W])])])]),o("div",w,[o(ie,{class:[0!==d(j).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:u((()=>[R,T])),_:1},8,["class"]),o("div",{id:"active-items-tab",class:["tab-content",["all"===s.activeTab&&"is-active"]]},[o("div",A,[o("div",{class:["flex-table-header",[0===d(j).length&&"is-hidden"]]},[J,L,P,M,V],2),o("div",K,[o(p,{name:"list",tag:"div"},{default:u((()=>[(n(!0),c(g,null,h(d(j),(e=>(n(),c("div",{key:e.id,class:"flex-table-item"},[o("div",H,[o("img",{class:"media",src:e.picture,alt:"",onErrorOnce:r[4]||(r[4]=e=>e.target.src="https://via.placeholder.com/150x110")},null,40,["src"]),o("div",null,[o("span",N,b(e.name),1),o("div",B,[o("div",F,[o(le,{picture:e.author.picture,size:"small"},null,8,["picture"]),o("div",Y,[o("span",null,"by "+b(e.author.username),1)])])])])]),o("div",z,[o("span",G,b(e.category),1)]),o("div",I,[o("i",{"aria-hidden":"true",class:["cell-icon is-pushed-mobile",e.skill.icon]},null,2),o("span",O,b(e.skill.name),1)]),o("div",Q,[o("span",U,[o("i",{class:["fas fa-circle dot active",e.difficulty>=1?"active":""],"aria-hidden":"true"},null,2),o("i",{class:["fas fa-circle dot",e.difficulty>=2?"active":""],"aria-hidden":"true"},null,2),o("i",{class:["fas fa-circle dot",e.difficulty>=3?"active":""],"aria-hidden":"true"},null,2),o("i",{class:["fas fa-circle dot",e.difficulty>=4?"active":""],"aria-hidden":"true"},null,2),o("i",{class:["fas fa-circle dot",5===e.difficulty?"active":""],"aria-hidden":"true"},null,2)])]),o("div",$,[o("a",q,[X,Z,y(" $"+b(e.price),1)])])])))),128))])),_:1})])]),d(j).length>5?(n(),c(se,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):m("",!0)],2),o("div",{id:"inactive-items-tab",class:["tab-content",["saved"===s.activeTab&&"is-active"]]},[o(ie,{title:"No saved courses.",subtitle:"Looks like you don't have any saved courses yet. You can add a\r\n              course to your saved courses by visiting the course details and\r\n              clicking on the bookmark button."},{image:u((()=>[ee,ae])),_:1})],2)])])}}});export{ie as _};
