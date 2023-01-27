import{_ as b}from"./V-Control.92200beb.js";import{_ as f}from"./V-PlaceholderPage.vue_vue_type_script_setup_true_lang.7e747268.js";import{_ as j}from"./V-Avatar.vue_vue_type_script_setup_true_lang.b4183814.js";import{_ as T}from"./CircleChart.vue_vue_type_script_setup_true_lang.1e45fd3b.js";import{d as v,o as d,e as u,f as a,t as r,a1 as _,r as k,c as C,w as l,u as g,a9 as w,H as y,L as A,F as B,G as S}from"./index.4457215e.js";import{_ as E,a as D}from"./search-5-dark.e9e43b85.js";const N={class:"grid-item"},M={class:"dark-inverted"},F={class:"icon-tabs-wrapper"},$={class:"icon-tabs"},J={class:"icon-tabs-inner"},H=a("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"},null,-1),W=a("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:briefcase"},null,-1),x=a("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check-circle"},null,-1),L=a("div",{class:"icon-tabs-naver"},null,-1),P={class:"chart-block"},V={class:"circle-chart-wrapper"},G={class:"stats"},z={class:"dark-inverted"},I=a("span",null,"Posts",-1),R={class:"chart-block"},U={class:"circle-chart-wrapper is-info"},K={class:"stats"},Y={class:"dark-inverted"},X=a("span",null,"Projects",-1),O={class:"chart-block"},q={class:"circle-chart-wrapper is-warning"},Q={class:"stats"},Z={class:"dark-inverted"},aa=a("span",null,"Tasks",-1),sa=_('<div class="buttons"><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:check"></i></span><span>Hire</span></button><button class="button v-button is-dark-outlined"><span class="icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></span><span>Talk</span></button></div>',1);var ea=v({expose:[],props:{activeTab:{type:String,default:"posts"},user:{type:Object}},setup(s){return(i,t)=>{const o=j,e=T;return d(),u("div",N,[a(o,{picture:s.user.avatar,badge:s.user.badge,size:"big"},null,8,["picture","badge"]),a("h3",M,r(s.user.fullName),1),a("p",null,r(s.user.position),1),a("div",F,[a("div",$,[a("div",J,[a("a",{"data-target-section":"subsection-1",class:["tab-item",[s.activeTab==="posts"&&"is-active"]],onClick:t[1]||(t[1]=c=>s.activeTab="posts")},[H],2),a("a",{"data-target-section":"subsection-2",class:["tab-item",[s.activeTab==="projects"&&"is-active"]],onClick:t[2]||(t[2]=c=>s.activeTab="projects")},[W],2),a("a",{"data-target-section":"subsection-3",class:["tab-item",[s.activeTab==="tasks"&&"is-active"]],onClick:t[3]||(t[3]=c=>s.activeTab="tasks")},[x],2),L])]),a("div",{class:["icon-tabs-content subsection-1",[s.activeTab==="posts"&&"is-active"]]},[a("div",P,[a("div",V,[a(e,{value:s.user.posts.progress,size:54},null,8,["value"])]),a("div",G,[a("span",z,r(s.user.posts.count),1),I])])],2),a("div",{class:["icon-tabs-content subsection-2",[s.activeTab==="projects"&&"is-active"]]},[a("div",R,[a("div",U,[a(e,{value:s.user.projects.progress,size:54},null,8,["value"])]),a("div",K,[a("span",Y,r(s.user.projects.count),1),X])])],2),a("div",{class:["icon-tabs-content subsection-3",[s.activeTab==="tasks"&&"is-active"]]},[a("div",O,[a("div",q,[a(e,{value:s.user.tasks.progress,size:54},null,8,["value"])]),a("div",Q,[a("span",Z,r(s.user.tasks.count),1),aa])])],2)]),sa])}}}),ta="/assets/team.d89779a8.svg",ia="/assets/team-dark.4a54d1ac.svg";const p=[{id:13,avatar:"/demo/avatars/13.jpg",badge:"/images/icons/stacks/illustrator.svg",username:"Tara S.",fullName:"Tara Svenson",initials:"TS",color:"danger",location:"New York, NY",position:"UI/UX Designer",bio:"This is a nice user description that we can use as demo content.",posts:{count:72,progress:85},projects:{count:12,progress:42},tasks:{count:17,progress:56},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"},{id:7,avatar:"/demo/avatars/7.jpg",name:"Alice C.",initials:"AC",color:"success"}]},{id:37,avatar:"/demo/avatars/37.jpg",badge:"/images/icons/flags/france.svg",username:"Helmut F.",fullName:"Helmut Fritz",initials:"HF",color:"h-purple",location:"Paris, France",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:16,progress:45},projects:{count:8,progress:24},tasks:{count:9,progress:72},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:25,avatar:"/demo/avatars/25.jpg",badge:"/images/icons/stacks/js.svg",username:"Melany W.",fullName:"Melany Wallace",initials:"MW",color:"success",location:"San Diego, CA",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:22,progress:31},projects:{count:11,progress:54},tasks:{count:15,progress:48},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:29,avatar:"/demo/avatars/29.jpg",badge:"/images/icons/stacks/python.svg",username:"Hakeem C.",fullName:"Hakeem Calami",initials:"HC",color:"info",location:"Berlin, Germany",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:4,progress:59},projects:{count:5,progress:38},tasks:{count:6,progress:21},team:[{id:28,avatar:"/demo/avatars/28.jpg",name:"Edouard F.",initials:"EF",color:"info"},{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"warning"}]},{id:39,avatar:"/demo/avatars/39.jpg",badge:"/images/icons/stacks/python.svg",username:"Alejandro B.",fullName:"Alejandro Badajoz",initials:"AB",color:"h-purple",location:"New York, NY",position:"Business Analyst",bio:"This is a nice user description that we can use as demo content.",posts:{count:7,progress:18},projects:{count:9,progress:57},tasks:{count:17,progress:38},team:[{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:23,avatar:"/demo/avatars/23.jpg",name:"Irina V.",initials:"IV",color:"danger"}]},{id:40,avatar:"/demo/avatars/40.jpg",badge:"/images/icons/stacks/android.svg",username:"Jeanne M.",fullName:"Jeanne Marchand",initials:"JM",color:"info",location:"Paris, France",position:"Mobile Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:23,progress:54},projects:{count:17,progress:78},tasks:{count:21,progress:26},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"}]},{id:19,avatar:"/demo/avatars/19.jpg",badge:"/images/icons/flags/germany.svg",username:"Greta K.",fullName:"Greta Kroppfer",initials:"GK",color:"h-yellow",location:"Los Angeles, CA",position:"Sales Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:5,progress:19},projects:{count:4,progress:29},tasks:{count:8,progress:59},team:[{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:27,avatar:"/demo/avatars/27.jpg",name:"Carmen E.",initials:"CE",color:"info"}]},{id:9,avatar:"/demo/avatars/9.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Anna B.",fullName:"Anna Baker",initials:"AB",color:"info",location:"San Francisco, CA",position:"UI/UX Designer",bio:"This is a nice user description that we can use as demo content.",posts:{count:12,progress:54},projects:{count:28,progress:59},tasks:{count:11,progress:79},team:[{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:23,avatar:"/demo/avatars/23.jpg",name:"Irina V.",initials:"IV",color:"danger"}]},{id:5,avatar:"/demo/avatars/5.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Mary L.",fullName:"Mary Lebowski",initials:"ML",color:"h-yellow",location:"San Diego, CA",position:"Project Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:17,progress:18},projects:{count:49,progress:28},tasks:{count:67,progress:27},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"},{id:7,avatar:"/demo/avatars/7.jpg",name:"Alice C.",initials:"AC",color:"success"}]},{id:32,avatar:"/demo/avatars/32.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Jonathan K.",fullName:"Jonathan Krugger",initials:"JK",color:"info",location:"Los Angeles, CA",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:44,progress:66},projects:{count:54,progress:48},tasks:{count:62,progress:21},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:36,avatar:"/demo/avatars/36.jpg",badge:"/images/icons/flags/france.svg",username:"Benoit L.",fullName:"Benoit Leblanc",initials:"BL",color:"h-purple",location:"Paris, France",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:31,progress:89},projects:{count:19,progress:87},tasks:{count:21,progress:65},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:31,avatar:"/demo/avatars/31.jpg",name:"Yasseen A.",initials:"YA",color:"h-purple"}]},{id:38,avatar:"/demo/avatars/38.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Christie D.",fullName:"Christie Dallas",initials:"CD",color:"info",location:"Los Angeles, CA",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:17,progress:48},projects:{count:98,progress:57},tasks:{count:35,progress:79},team:[{id:33,avatar:"/demo/avatars/33.jpg",name:"Harvey M.",initials:"HM",color:"warning"},{id:26,avatar:"/demo/avatars/26.jpg",name:"Courtney W.",initials:"CW",color:"info"}]},{id:26,avatar:"/demo/avatars/26.jpg",badge:"/images/icons/flags/australia.svg",username:"Courtney W.",fullName:"Courtney Wilson",initials:"CW",color:"info",location:"Melbourne, AU",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:34,progress:18},projects:{count:2,progress:57},tasks:{count:12,progress:38},team:[{id:21,avatar:"/demo/avatars/21.jpg",name:"Elizabet F.",initials:"EF",color:"warning"},{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:39,avatar:"/demo/avatars/39.jpg",name:"Alejandro B.",initials:"AB",color:"danger"}]},{id:16,avatar:"/demo/avatars/16.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Jason G.",fullName:"Jason Guarank",initials:"JG",color:"danger",location:"Houston, TX",position:"Business Analyst",bio:"This is a nice user description that we can use as demo content.",posts:{count:0,progress:55},projects:{count:12,progress:59},tasks:{count:12,progress:79},team:[{id:14,avatar:"/demo/avatars/14.jpg",name:"Ryan B.",initials:"RB",color:"warning"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"}]},{id:23,avatar:"/demo/avatars/23.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Irina V.",fullName:"Irina Vierbovsky",initials:"IV",color:"info",location:"San Jose, CA",position:"Project Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:6,progress:64},projects:{count:1,progress:88},tasks:{count:6,progress:100},team:[{id:189,avatar:null,name:"Alan T.",initials:"AT",color:"success"},{id:34,avatar:"/demo/avatars/34.jpg",name:"Daniel R.",initials:"DR",color:"h-yellow"}]},{id:28,avatar:"/demo/avatars/28.jpg",badge:"/images/icons/flags/france.svg",username:"Edouard F.",fullName:"Edouard Falant",initials:"EF",color:"success",location:"Paris, France",position:"Web Developer",bio:"This is a nice user description that we can use as demo content.",posts:{count:8,progress:44},projects:{count:16,progress:32},tasks:{count:19,progress:71},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:18,avatar:"/demo/avatars/18.jpg",name:"Esteban C.",initials:"EC",color:"h-purple"},{id:159,avatar:null,name:"John D.",initials:"JD",color:"info"}]},{id:7,avatar:"/demo/avatars/7.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Alice C.",fullName:"Alice Carasca",initials:"AC",color:"info",location:"San Diego, CA",position:"Software Engineer",bio:"This is a nice user description that we can use as demo content.",posts:{count:8,progress:22},projects:{count:22,progress:56},tasks:{count:39,progress:34},team:[{id:25,avatar:"/demo/avatars/25.jpg",name:"Melany W.",initials:"MW",color:"success"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"},{id:12,avatar:"/demo/avatars/12.jpg",name:"Joshua S.",initials:"JS",color:"warning"}]},{id:22,avatar:"/demo/avatars/22.jpg",badge:"/images/icons/flags/united-states-of-america.svg",username:"Dwayne H.",fullName:"Dwayne Hicks",initials:"DH",color:"info",location:"Los Angeles, CA",position:"Product Manager",bio:"This is a nice user description that we can use as demo content.",posts:{count:13,progress:18},projects:{count:15,progress:57},tasks:{count:14,progress:38},team:[{id:148,avatar:null,name:"Betty T.",initials:"BT",color:"h-yellow"},{id:198,avatar:null,name:"Sarah C.",initials:"SC",color:"h-purple"}]}],oa={class:"user-grid-toolbar is-reversed"},na={class:"tabs-inner"},ra={class:"tabs"},ca=a("span",null,"All",-1),la=a("span",null,"Team",-1),da=a("li",{class:"tab-naver"},null,-1),ua={class:"user-grid user-grid-v3"},ma=a("img",{class:"light-image",src:E,alt:""},null,-1),ga=a("img",{class:"dark-image",src:D,alt:""},null,-1),pa=a("img",{class:"light-image is-larger",src:ta,alt:""},null,-1),va=a("img",{class:"dark-image is-larger",src:ia,alt:""},null,-1);var ka=v({expose:[],props:{activeTab:{type:String,default:"all"}},setup(s){const i=k(""),t=C(()=>i.value?p.filter(o=>o.username.match(new RegExp(i.value,"i"))||o.location.match(new RegExp(i.value,"i"))||o.position.match(new RegExp(i.value,"i"))||o.badge.match(new RegExp(i.value,"i"))):p);return(o,e)=>{const c=b,m=f,h=ea;return d(),u("div",null,[a("div",oa,[a(c,{icon:"feather:search"},{default:l(()=>[y(a("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>i.value=n),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[A,i.value]])]),_:1}),a("div",na,[a("div",ra,[a("ul",null,[a("li",{class:[s.activeTab==="all"&&"is-active"]},[a("a",{onClick:e[2]||(e[2]=n=>s.activeTab="all")},[ca])],2),a("li",{class:[s.activeTab==="team"&&"is-active"]},[a("a",{onClick:e[3]||(e[3]=n=>s.activeTab="team")},[la])],2),da])])])]),a("div",ua,[a(m,{class:[g(t).length!==0&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:`Too bad. Looks like we couldn't find any matching results for the\r
          search terms you've entered. Please try different search terms or\r
          criteria.`,larger:""},{image:l(()=>[ma,ga]),_:1},8,["class"]),a("div",{id:"active-items-tab",class:["tab-content",[s.activeTab==="all"&&"is-active"]]},[a(w,{name:"list",tag:"div",class:"columns is-multiline is-flex-tablet-p is-half-tablet-p"},{default:l(()=>[(d(!0),u(B,null,S(g(t),n=>(d(),u("div",{key:n.id,class:"column is-3"},[a(h,{user:n},null,8,["user"])]))),128))]),_:1})],2),a("div",{id:"inactive-items-tab",class:["tab-content",[s.activeTab==="team"&&"is-active"]]},[a(m,{title:"No team members.",subtitle:`Looks like you don't have any team members yet. When you'll start\r
              adding some to your team, they will be showing up in here.`},{image:l(()=>[pa,va]),_:1})],2)])])}}});export{ka as _};
