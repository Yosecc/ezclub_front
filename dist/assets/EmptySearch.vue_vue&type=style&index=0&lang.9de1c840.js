import{_ as s}from"./V-Control.45649f5a.js";import{d as a,r as e,o as l,h as r,k as c,j as i}from"./vendor.c210e0cb.js";const t={class:"search-results-wrapper"},n={class:"search-results-header"},o=c("input",{class:"input",placeholder:"Search again..."},null,-1),d=c("div",{class:"search-info"},[c("span",null,"0 results found")],-1),u={class:"tabs-inner"},p={class:"tabs is-disabled"},v=c("span",null,"All",-1),h=c("span",null,"People",-1),f=c("span",null,"Records",-1),g=c("li",{class:"tab-naver"},null,-1),m=c("div",{class:"search-results-body"},[c("div",{class:"page-placeholder"},[c("div",{class:"placeholder-content"},[c("img",{class:"light-image",src:"/assets/search-7.13f8397f.svg",alt:""}),c("img",{class:"dark-image",src:"/assets/search-7-dark.9ba8d20e.svg",alt:""}),c("h3",null,"We couldn't find any matching results."),c("p",{class:"is-larger"}," Too bad. Looks like we couldn't find any matching results for the search terms you've entered. Please try different search terms or criteria. ")])])],-1);var b=a({expose:[],setup(a){const b=e("all");return(a,e)=>{const k=s;return l(),r("div",t,[c("div",n,[c(k,{icon:"feather:search"},{default:i((()=>[o])),_:1}),d,c("div",u,[c("div",p,[c("ul",null,[c("li",{class:["all"===b.value&&"is-active"]},[c("a",{onClick:e[1]||(e[1]=s=>b.value="all")},[v])],2),c("li",{class:["people"===b.value&&"is-active"]},[c("a",{onClick:e[2]||(e[2]=s=>b.value="people")},[h])],2),c("li",{class:["records"===b.value&&"is-active"]},[c("a",{onClick:e[3]||(e[3]=s=>b.value="records")},[f])],2),g])])])]),m])}}});export{b as _};