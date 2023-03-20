import{_ as a}from"./V-Control.3e38bffa.js";import{_ as s}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.d47cc176.js";import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import{_ as i}from"./CircleChart.vue_vue&type=script&setup=true&lang.75cb86d4.js";import{d as t,h as o,i as n,l as r,H as l,a8 as c,r as u,b as d,k as p,F as m,ab as g,W as v,_ as b,R as h,S as f}from"./vendor.7d5213a2.js";import{_ as j,a as k}from"./search-5-dark.e9e43b85.js";const T={class:"grid-item"},y={class:"dark-inverted"},C={class:"icon-tabs-wrapper"},w={class:"icon-tabs"},A={class:"icon-tabs-inner"},B=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"},null,-1),E=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:briefcase"},null,-1),S=r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check-circle"},null,-1),D=r("div",{class:"icon-tabs-naver"},null,-1),N={class:"chart-block"},M={class:"circle-chart-wrapper"},F={class:"stats"},J={class:"dark-inverted"},W=r("span",null,"Posts",-1),H={class:"chart-block"},P={class:"circle-chart-wrapper is-info"},_={class:"stats"},L={class:"dark-inverted"},V=r("span",null,"Projects",-1),z={class:"chart-block"},x={class:"circle-chart-wrapper is-warning"},I={class:"stats"},R={class:"dark-inverted"},G=r("span",null,"Tasks",-1),K=c('<div class="buttons"><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span><span>Hire</span></button><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></span><span>Talk</span></button></div>',1);var U=t({expose:[],props:{activeTab:{type:String,default:"posts"},user:{type:Object}},setup:a=>(s,t)=>{const c=e,u=i;return o(),n("div",T,[r(c,{picture:a.user.avatar,badge:a.user.badge,size:"big"},null,8,["picture","badge"]),r("h3",y,l(a.user.fullName),1),r("p",null,l(a.user.position),1),r("div",C,[r("div",w,[r("div",A,[r("a",{"data-target-section":"subsection-1",class:["tab-item",["posts"===a.activeTab&&"is-active"]],onClick:t[1]||(t[1]=s=>a.activeTab="posts")},[B],2),r("a",{"data-target-section":"subsection-2",class:["tab-item",["projects"===a.activeTab&&"is-active"]],onClick:t[2]||(t[2]=s=>a.activeTab="projects")},[E],2),r("a",{"data-target-section":"subsection-3",class:["tab-item",["tasks"===a.activeTab&&"is-active"]],onClick:t[3]||(t[3]=s=>a.activeTab="tasks")},[S],2),D])]),r("div",{class:["icon-tabs-content subsection-1",["posts"===a.activeTab&&"is-active"]]},[r("div",N,[r("div",M,[r(u,{value:a.user.posts.progress,size:54},null,8,["value"])]),r("div",F,[r("span",J,l(a.user.posts.count),1),W])])],2),r("div",{class:["icon-tabs-content subsection-2",["projects"===a.activeTab&&"is-active"]]},[r("div",H,[r("div",P,[r(u,{value:a.user.projects.progress,size:54},null,8,["value"])]),r("div",_,[r("span",L,l(a.user.projects.count),1),V])])],2),r("div",{class:["icon-tabs-content subsection-3",["tasks"===a.activeTab&&"is-active"]]},[r("div",z,[r("div",x,[r(u,{value:a.user.tasks.progress,size:54},null,8,["value"])]),r("div",I,[r("span",R,l(a.user.tasks.count),1),G])])],2)]),K])}});const Y=[{id:13,avatar:"/demo/avatars/13.jpg",badge:"/images/icons/stacks/illustrator.svg",username:"Tara S.",fullName:"Tara Svenson",initials:"TS",color:"danger",location:"New York, NY",position:"UI/UX Designer",bio:"This is a nice user description that we can use as demo content.",posts:{count:72,progress:85},projects:{count:12,progress:42},tasks:{count:17,progress:56},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"},{id:7,avatar:"/demo/avatars/7.jpg",name:"Alice C.",initials:"AC",color:"success"}]},{id:37,avatar:"/demo/avatars/37.jpg",badge:"/images/icons/flags/france.svg",username:"Helmut F.",fullName:"Helmut Fritz",initials:"HF",color:"h-purple",location:"Paris, France",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:16,progress:45},projects:{count:8,progress:24},tasks:{count:9,progress:72},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:25,avatar:"/demo/avatars/25.jpg",badge:"/images/icons/stacks/js.svg",username:"Melany W.",fullName:"Melany Wallace",initials:"MW",color:"success",location:"San Diego, CA",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:22,progress:31},projects:{count:11,progress:54},tasks:{count:15,progress:48},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:29,avatar:"/demo/avatars/29.jpg",badge:"/images/icons/stacks/python.svg",username:"Hakeem C.",fullName:"Hakeem Calami",initials:"HC",color:"info",location:"Berlin, Germany",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:4,progress:59},projects:{count:5,progress:38},tasks:{count:6,progress:21},team:[{id:28,avatar:"/demo/avatars/28.jpg",name:"Edouard F.",initials:"EF",color:"info"},{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"warning"}]},{id:39,avatar:"/demo/avatars/39.jpg",badge:"/images/icons/stacks/python.svg",username:"Alejandro B.",fullName:"Alejandro Badajoz",initials:"AB",color:"h-purple",location:"New York, NY",position:"Business Analyst",bio:"This is a nice user description that we can use as demo content.",posts:{count:7,progress:18},projects:{count:9,progress:57},tasks:{count:17,progress:38},team:[{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:23,avatar:"/demo/avatars/23.jpg",name:"Irina V.",initials:"IV",color:"danger"}]},{id:40,avatar:"/demo/avatars/40.jpg",badge:"/images/icons/stacks/android.svg",username:"Jeanne M.",fullName:"Jeanne Marchand",initials:"JM",color:"info",location:"Paris, France",position:"Mobile Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:23,progress:54},projects:{count:17,progress:78},tasks:{count:21,progress:26},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"}]},{id:19,avatar:"/demo/avatars/19.jpg",badge:"/images/icons/flags/germany.svg",username:"Greta K.",fullName:"Greta Kroppfer",initials:"GK",color:"h-yellow",location:"Los Angeles, CA",position:"Sales Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:5,progress:19},projects:{count:4,progress:29},tasks:{count:8,progress:59},team:[{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:27,avatar:"/demo/avatars/27.jpg",name:"Carmen E.",initials:"CE",color:"info"}]},{id:9,avatar:"/demo/avatars/9.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Anna B.",fullName:"Anna Baker",initials:"AB",color:"info",location:"San Francisco, CA",position:"UI/UX Designer",bio:"This is a nice user description that we can use as demo content.",posts:{count:12,progress:54},projects:{count:28,progress:59},tasks:{count:11,progress:79},team:[{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:23,avatar:"/demo/avatars/23.jpg",name:"Irina V.",initials:"IV",color:"danger"}]},{id:5,avatar:"/demo/avatars/5.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Mary L.",fullName:"Mary Lebowski",initials:"ML",color:"h-yellow",location:"San Diego, CA",position:"Project Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:17,progress:18},projects:{count:49,progress:28},tasks:{count:67,progress:27},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"},{id:7,avatar:"/demo/avatars/7.jpg",name:"Alice C.",initials:"AC",color:"success"}]},{id:32,avatar:"/demo/avatars/32.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Jonathan K.",fullName:"Jonathan Krugger",initials:"JK",color:"info",location:"Los Angeles, CA",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:44,progress:66},projects:{count:54,progress:48},tasks:{count:62,progress:21},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:36,avatar:"/demo/avatars/36.jpg",badge:"/images/icons/flags/france.svg",username:"Benoit L.",fullName:"Benoit Leblanc",initials:"BL",color:"h-purple",location:"Paris, France",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:31,progress:89},projects:{count:19,progress:87},tasks:{count:21,progress:65},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:31,avatar:"/demo/avatars/31.jpg",name:"Yasseen A.",initials:"YA",color:"h-purple"}]},{id:38,avatar:"/demo/avatars/38.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Christie D.",fullName:"Christie Dallas",initials:"CD",color:"info",location:"Los Angeles, CA",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:17,progress:48},projects:{count:98,progress:57},tasks:{count:35,progress:79},team:[{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"warning"},{id:26,avatar:"/demo/avatars/26.jpg",name:"Courtney W.",initials:"CW",color:"info"}]},{id:26,avatar:"/demo/avatars/26.jpg",badge:"/images/icons/flags/australia.svg",username:"Courtney W.",fullName:"Courtney Wilson",initials:"CW",color:"info",location:"Melbourne, AU",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:34,progress:18},projects:{count:2,progress:57},tasks:{count:12,progress:38},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:16,avatar:"/demo/avatars/16.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Jason G.",fullName:"Jason Guarank",initials:"JG",color:"danger",location:"Houston, TX",position:"Business Analyst",bio:"This is a nice user description that we can use as demo content.",posts:{count:0,progress:55},projects:{count:12,progress:59},tasks:{count:12,progress:79},team:[{id:14,avatar:"/demo/avatars/14.jpg",name:"Ryan B.",initials:"RB",color:"warning"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"}]},{id:23,avatar:"/demo/avatars/23.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Irina V.",fullName:"Irina Vierbovsky",initials:"IV",color:"info",location:"San Jose, CA",position:"Project Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:6,progress:64},projects:{count:1,progress:88},tasks:{count:6,progress:100},team:[{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:34,avatar:"/demo/avatars/34.jpg",name:"Daniel R.",initials:"DR",color:"h-yellow"}]},{id:28,avatar:"/demo/avatars/28.jpg",badge:"/images/icons/flags/france.svg",username:"Edouard F.",fullName:"Edouard Falant",initials:"EF",color:"success",location:"Paris, France",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:8,progress:44},projects:{count:16,progress:32},tasks:{count:19,progress:71},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"}]},{id:7,avatar:"/demo/avatars/7.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Alice C.",fullName:"Alice Carasca",initials:"AC",color:"info",location:"San Diego, CA",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:8,progress:22},projects:{count:22,progress:56},tasks:{count:39,progress:34},team:[{id:25,avatar:"/demo/avatars/25.jpg",name:"Melany W.",initials:"MW",color:"success"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:12,avatar:"/demo/avatars/12.jpg",name:"Joshua S.",initials:"JS",color:"warning"}]},{id:22,avatar:"/demo/avatars/22.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Dwayne H.",fullName:"Dwayne Hicks",initials:"DH",color:"info",location:"Los Angeles, CA",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:13,progress:18},projects:{count:15,progress:57},tasks:{count:14,progress:38},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"}]}],X={class:"user-grid-toolbar is-reversed"},O={class:"tabs-inner"},q={class:"tabs"},Q=r("span",null,"All",-1),Z=r("span",null,"Team",-1),$=r("li",{class:"tab-naver"},null,-1),aa={class:"user-grid user-grid-v3"},sa=r("img",{class:"light-image",src:j,alt:""},null,-1),ea=r("img",{class:"dark-image",src:k,alt:""},null,-1),ia=r("img",{class:"light-image is-larger",src:"/assets/team.d89779a8.svg",alt:""},null,-1),ta=r("img",{class:"dark-image is-larger",src:"/assets/team-dark.4a54d1ac.svg",alt:""},null,-1);var oa=t({expose:[],props:{activeTab:{type:String,default:"all"}},setup(e){const i=u(""),t=d((()=>i.value?Y.filter((a=>a.username.match(new RegExp(i.value,"i"))||a.location.match(new RegExp(i.value,"i"))||a.position.match(new RegExp(i.value,"i"))||a.badge.match(new RegExp(i.value,"i")))):Y));return(l,c)=>{const u=a,d=s,j=U;return o(),n("div",null,[r("div",X,[r(u,{icon:"feather:search"},{default:p((()=>[v(r("input",{"onUpdate:modelValue":c[1]||(c[1]=a=>i.value=a),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[b,i.value]])])),_:1}),r("div",O,[r("div",q,[r("ul",null,[r("li",{class:["all"===e.activeTab&&"is-active"]},[r("a",{onClick:c[2]||(c[2]=a=>e.activeTab="all")},[Q])],2),r("li",{class:["team"===e.activeTab&&"is-active"]},[r("a",{onClick:c[3]||(c[3]=a=>e.activeTab="team")},[Z])],2),$])])])]),r("div",aa,[r(d,{class:[0!==m(t).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:p((()=>[sa,ea])),_:1},8,["class"]),r("div",{id:"active-items-tab",class:["tab-content",["all"===e.activeTab&&"is-active"]]},[r(g,{name:"list",tag:"div",class:"columns is-multiline is-flex-tablet-p is-half-tablet-p"},{default:p((()=>[(o(!0),n(h,null,f(m(t),(a=>(o(),n("div",{key:a.id,class:"column is-3"},[r(j,{user:a},null,8,["user"])])))),128))])),_:1})],2),r("div",{id:"inactive-items-tab",class:["tab-content",["team"===e.activeTab&&"is-active"]]},[r(d,{title:"No team members.",subtitle:"Looks like you don't have any team members yet. When you'll start\r\n              adding some to your team, they will be showing up in here."},{image:p((()=>[ia,ta])),_:1})],2)])])}}});export{oa as _};