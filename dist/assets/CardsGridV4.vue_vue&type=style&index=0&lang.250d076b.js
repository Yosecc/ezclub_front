import{_ as a}from"./V-Control.46cc2837.js";import{_ as e}from"./V-Field.vue_vue&type=script&setup=true&lang.5cab5a8d.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.19e0de69.js";import{_ as i}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.e0366c94.js";import{_ as o}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e8b89c92.js";import{d as s,r,b as l,o as d,h as n,k as p,j as m,D as u,aa as g,i as c,S as h,Y as v,Q as y,R as f,F as j}from"./vendor.d0c8bc4f.js";import{_ as b,a as _}from"./search-4-dark.fb3880a5.js";const H=[{id:"1",title:"How to serve coffee at the office the proper way",published:"30 minutes ago",image:"/demo/photos/11.jpg",author:{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"info"}},{id:"2",title:"Teamwork can dramatically increase productivity",published:"4 hours ago",image:"/demo/photos/12.jpg",author:{id:15,avatar:"/demo/avatars/15.jpg",name:"Hilde V.",initials:"HV",color:"warning"}},{id:"3",title:"Is team building a scam or the next thing?",published:"5 hours ago",image:"/demo/photos/13.jpg",author:{id:24,avatar:"/demo/avatars/24.jpg",name:"Sandrine C.",initials:"SC",color:"h-purple"}},{id:"4",title:"3 things you should know when applying for developer jobs",published:"8 hours ago",image:"/demo/photos/14.jpg",author:{id:27,avatar:"/demo/avatars/27.jpg",name:"Carmen E.",initials:"CE",color:"h-purple"}},{id:"5",title:"The construction business massively invests in mobile apps",published:"1 day ago",image:"/demo/photos/15.jpg",author:{id:10,avatar:"/demo/avatars/10.jpg",name:"Henry G.",initials:"HG",color:"info"}},{id:"6",title:"Finding the right spot for your startup",published:"1 day ago",image:"/demo/photos/17.jpg",author:{id:22,avatar:"/demo/avatars/22.jpg",name:"Jimmy H.",initials:"JH",color:"info"}},{id:"7",title:"4 tips to make your business lunches awesome",published:"2 days ago",image:"/demo/photos/18.jpg",author:{id:22,avatar:"/demo/avatars/22.jpg",name:"Jimmy H.",initials:"JH",color:"info"}},{id:"8",title:"Setting up a design system for your app project",published:"2 days ago",image:"/demo/photos/18.jpg",author:{id:26,avatar:"/demo/avatars/26.jpg",name:"Courtney W.",initials:"CW",color:"info"}},{id:"9",title:"Setting up a design system for your app project",published:"3 days ago",image:"/demo/photos/20.jpg",author:{id:8,avatar:"/demo/avatars/8.jpg",name:"Erik K.",initials:"EK",color:"info"}},{id:"10",title:"Have you considered product management training?",published:"3 days ago",image:"/demo/photos/21.jpg",author:{id:14,avatar:"/demo/avatars/14.jpg",name:"Ryan B.",initials:"RB",color:"info"}},{id:"11",title:"Using flashy colors in your websites and apps",published:"3 days ago",image:"/demo/photos/22.jpg",author:{id:9,avatar:"/demo/avatars/9.jpg",name:"Ana B.",initials:"AB",color:"info"}},{id:"12",title:"Why it pays to profile your customers",published:"3 days ago",image:"/demo/photos/23.jpg",author:{id:40,avatar:"/demo/avatars/40.jpg",name:"Jeanne M.",initials:"JM",color:"info"}},{id:"13",title:"Building a consistent and talented team",published:"3 days ago",image:"/demo/photos/24.jpg",author:{id:19,avatar:"/demo/avatars/19.jpg",name:"Greta K.",initials:"GK",color:"info"}},{id:"14",title:"Building a consistent and talented team",published:"3 days ago",image:"/demo/photos/25.jpg",author:{id:28,avatar:"/demo/avatars/28.jpg",name:"Edouard F.",initials:"EF",color:"info"}},{id:"15",title:"What framework to choose to build a mobile app in 2020?",published:"3 days ago",image:"/demo/photos/26.jpg",author:{id:5,avatar:"/demo/avatars/5.jpg",name:"Mary L.",initials:"ML",color:"info"}},{id:"16",title:"Diving into building an e-commerce brand - part 1",published:"4 days ago",image:"/demo/photos/27.jpg",author:{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"success"}},{id:"17",title:"Diving into building an e-commerce brand - part 2",published:"4 days ago",image:"/demo/photos/28.jpg",author:{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"success"}},{id:"18",title:"How to make sure to reach the goals you set",published:"4 days ago",image:"/demo/photos/29.jpg",author:{id:31,avatar:"/demo/avatars/31.jpg",name:"Yasseen A.",initials:"YA",color:"info"}}],k={class:"card-grid-toolbar"},w={class:"buttons"},V=p("span",{class:"icon"},[p("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),B=p("span",null,"New Post",-1),E={class:"card-grid card-grid-v4"},M=p("img",{class:"light-image",src:b,alt:""},null,-1),P=p("img",{class:"dark-image",src:_,alt:""},null,-1),x={href:"#",class:"card-grid-item"},A={class:"card-grid-item-content"},C={class:"dark-inverted"},S={class:"card-grid-item-footer"},J={class:"meta"},R={class:"dark-inverted"};var F=s({expose:[],setup(s){const b=r(""),_=l((()=>b.value?H.filter((a=>a.title.match(new RegExp(b.value,"i"))||a.author.name.match(new RegExp(b.value,"i")))):H)),F=r(0),W=["All Posts","Recent Posts","Older Posts","Popular Posts"];return(s,r)=>{const l=a,H=c("Multiselect"),G=e,K=t,D=i,L=o;return d(),n("div",null,[p("div",k,[p(l,{icon:"feather:search"},{default:m((()=>[h(p("input",{"onUpdate:modelValue":r[1]||(r[1]=a=>b.value=a),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[v,b.value]])])),_:1}),p("div",w,[p(G,{class:"h-hidden-mobile"},{default:m((()=>[p(l,null,{default:m((()=>[p(H,{modelValue:F.value,"onUpdate:modelValue":r[2]||(r[2]=a=>F.value=a),options:W,"max-height":145,placeholder:"Select an option"},null,8,["modelValue"])])),_:1})])),_:1}),p(K,{color:"primary",raised:""},{default:m((()=>[V,B])),_:1})])]),p("div",E,[p(D,{class:[0!==u(_).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:m((()=>[M,P])),_:1},8,["class"]),p(g,{name:"list",tag:"div",class:"columns is-multiline"},{default:m((()=>[(d(!0),n(y,null,f(u(_),(a=>(d(),n("div",{key:a.id,class:"column is-3"},[p("a",x,[p("img",{src:a.image,alt:"",onErrorOnce:r[3]||(r[3]=a=>a.target.src="https://via.placeholder.com/400x300")},null,40,["src"]),p("div",A,[p("h3",C,j(a.title),1)]),p("div",S,[p(L,{picture:a.author.avatar,size:"small"},null,8,["picture"]),p("div",J,[p("span",R,j(a.author.name),1),p("span",null,j(a.published),1)])])])])))),128))])),_:1})])])}}});export{F as _};
