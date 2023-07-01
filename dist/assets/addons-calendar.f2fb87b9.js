import{_ as s,a as n}from"./DocumentationItem.7277d4ab.js";import{_ as a}from"./V-Control.c2f9b0a5.js";import{_ as p}from"./V-Field.vue_vue&type=script&setup=true&lang.7558a66e.js";import{j as t,h as r,i,k as e,l as m,a6 as l,aj as o,G as c,d as u,r as k,O as d,F as b,K as g}from"./vendor.3e3390b7.js";import{u as v,_ as f}from"./useMarkdownToc.7375fffd.js";import{p as V}from"./sidebarLayoutState.46d3c8c9.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.100687ab.js";import"./vue-scrollto.003bacce.js";const h=m("h3",{id:"datepicker",tabindex:"-1"},"Datepicker",-1),q=m("p",null,[c("Vuero ships with the "),m("code",null,"<V-Calendar />"),c(" component, a multipurpose calendar / datepicker component for your forms. Below is a basic example. Please check the "),m("a",{href:"https://vcalendar.io/"},"plugin documentation"),c(" for more details about usage.")],-1),w=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("script")]),c(),m("span",{class:"prism--token prism--attr-name"},"setup"),c(),m("span",{class:"prism--token prism--attr-name"},"lang"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("ts"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--script"},[m("span",{class:"prism--token prism--language-javascript"},[c("\n"),m("span",{class:"prism--token prism--keyword"},"import"),c(),m("span",{class:"prism--token prism--punctuation"},"{"),c(" ref "),m("span",{class:"prism--token prism--punctuation"},"}"),c(),m("span",{class:"prism--token prism--keyword"},"from"),c(" vue\n\n"),m("span",{class:"prism--token prism--keyword"},"const"),c(" date "),m("span",{class:"prism--token prism--operator"},"="),c(),m("span",{class:"prism--token prism--function"},"ref"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--keyword"},"null"),m("span",{class:"prism--token prism--punctuation"},")"),c("\n")])]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("script")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("v-date-picker")]),c(),m("span",{class:"prism--token prism--attr-name"},"v-model"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("frontmatter.state.date"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"color"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("green"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"trim-weeks"),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),c(),m("span",{class:"prism--token prism--attr-name"},"#default"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("{ inputValue, inputEvents }"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n          "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("input")]),c(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("input"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},":value"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputValue"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"v-on"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputEvents"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--punctuation"},"/>")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("v-date-picker")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br"),m("span",{class:"line-number"},"10"),m("br"),m("span",{class:"line-number"},"11"),m("br"),m("span",{class:"line-number"},"12"),m("br"),m("span",{class:"line-number"},"13"),m("br"),m("span",{class:"line-number"},"14"),m("br"),m("span",{class:"line-number"},"15"),m("br"),m("span",{class:"line-number"},"16"),m("br"),m("span",{class:"line-number"},"17"),m("br")])],-1);const y={state:{date:"2021-02-28T00:00:00.000Z"}},_={render:function(n,c){const u=a,k=p,d=t("v-date-picker"),b=s;return r(),i(b,{frontmatter:n.frontmatter},{code:e((()=>[w])),example:e((()=>[m(d,{modelValue:n.frontmatter.state.date,"onUpdate:modelValue":c[1]||(c[1]=s=>n.frontmatter.state.date=s),color:"green","trim-weeks":""},{default:e((({inputValue:s,inputEvents:n})=>[m(k,null,{default:e((()=>[m(u,null,{default:e((()=>[m("input",l({class:"input",value:s},o(n)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])])),default:e((()=>[h,q])),_:1},8,["frontmatter"])},data:()=>({frontmatter:y})},C=m("h3",{id:"daterangepicker",tabindex:"-1"},"DateRangepicker",-1),x=m("p",null,[m("code",null,"<V-Calendar />"),c(" can be turned into a date range picker if needed. Check the code example for more details about usage.")],-1),j=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("script")]),c(),m("span",{class:"prism--token prism--attr-name"},"setup"),c(),m("span",{class:"prism--token prism--attr-name"},"lang"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("ts"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--script"},[m("span",{class:"prism--token prism--language-javascript"},[c("\n"),m("span",{class:"prism--token prism--keyword"},"import"),c(),m("span",{class:"prism--token prism--punctuation"},"{"),c(" reactive "),m("span",{class:"prism--token prism--punctuation"},"}"),c(),m("span",{class:"prism--token prism--keyword"},"from"),c(" vue\n\n"),m("span",{class:"prism--token prism--keyword"},"const"),c(" date "),m("span",{class:"prism--token prism--operator"},"="),c(),m("span",{class:"prism--token prism--function"},"reactive"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--punctuation"},"{"),c("\n  start"),m("span",{class:"prism--token prism--operator"},":"),c(),m("span",{class:"prism--token prism--keyword"},"new"),c(),m("span",{class:"prism--token prism--class-name"},"Date"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--punctuation"},")"),m("span",{class:"prism--token prism--punctuation"},","),c("\n  end"),m("span",{class:"prism--token prism--operator"},":"),c(),m("span",{class:"prism--token prism--keyword"},"new"),c(),m("span",{class:"prism--token prism--class-name"},"Date"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--punctuation"},")"),m("span",{class:"prism--token prism--punctuation"},","),c("\n"),m("span",{class:"prism--token prism--punctuation"},"}"),m("span",{class:"prism--token prism--punctuation"},")"),c("\n")])]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("script")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("v-date-picker")]),c(),m("span",{class:"prism--token prism--attr-name"},"v-model"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("range"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"is-range"),c(),m("span",{class:"prism--token prism--attr-name"},"color"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("green"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"trim-weeks"),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),c(),m("span",{class:"prism--token prism--attr-name"},"#default"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("{ inputValue, inputEvents }"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Field")]),c(),m("span",{class:"prism--token prism--attr-name"},"addons"),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n          "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("input")]),c("\n            "),m("span",{class:"prism--token prism--attr-name"},":value"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputValue.start"),m("span",{class:"prism--token prism--punctuation"},'"')]),c("\n            "),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("input"),m("span",{class:"prism--token prism--punctuation"},'"')]),c("\n            "),m("span",{class:"prism--token prism--attr-name"},"v-on"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputEvents.start"),m("span",{class:"prism--token prism--punctuation"},'"')]),c("\n          "),m("span",{class:"prism--token prism--punctuation"},"/>")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n          "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("a")]),c(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("button is-static"),m("span",{class:"prism--token prism--punctuation"},'"')]),c("\n            "),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("i")]),c(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("iconify"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"data-icon"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("feather:arrow-right"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("i")]),c("\n          "),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("a")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n          "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("input")]),c(),m("span",{class:"prism--token prism--attr-name"},":value"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputValue.end"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("input"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"v-on"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputEvents.end"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--punctuation"},"/>")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("v-date-picker")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br"),m("span",{class:"line-number"},"10"),m("br"),m("span",{class:"line-number"},"11"),m("br"),m("span",{class:"line-number"},"12"),m("br"),m("span",{class:"line-number"},"13"),m("br"),m("span",{class:"line-number"},"14"),m("br"),m("span",{class:"line-number"},"15"),m("br"),m("span",{class:"line-number"},"16"),m("br"),m("span",{class:"line-number"},"17"),m("br"),m("span",{class:"line-number"},"18"),m("br"),m("span",{class:"line-number"},"19"),m("br"),m("span",{class:"line-number"},"20"),m("br"),m("span",{class:"line-number"},"21"),m("br"),m("span",{class:"line-number"},"22"),m("br"),m("span",{class:"line-number"},"23"),m("br"),m("span",{class:"line-number"},"24"),m("br"),m("span",{class:"line-number"},"25"),m("br"),m("span",{class:"line-number"},"26"),m("br"),m("span",{class:"line-number"},"27"),m("br"),m("span",{class:"line-number"},"28"),m("br"),m("span",{class:"line-number"},"29"),m("br"),m("span",{class:"line-number"},"30"),m("br"),m("span",{class:"line-number"},"31"),m("br"),m("span",{class:"line-number"},"32"),m("br")])],-1),E=m("a",{class:"button is-static"},[m("i",{class:"iconify","data-icon":"feather:arrow-right"})],-1);const T={state:{range:{start:"2021-02-08T00:00:00.000Z",end:"2021-02-14T00:00:00.000Z"}}},F={render:function(n,c){const u=a,k=p,d=t("v-date-picker"),b=s;return r(),i(b,{frontmatter:n.frontmatter},{code:e((()=>[j])),example:e((()=>[m(d,{modelValue:n.frontmatter.state.range,"onUpdate:modelValue":c[1]||(c[1]=s=>n.frontmatter.state.range=s),"is-range":"",color:"green","trim-weeks":""},{default:e((({inputValue:s,inputEvents:n})=>[m(k,{addons:""},{default:e((()=>[m(u,null,{default:e((()=>[m("input",l({value:s.start},o(n.start),{class:"input"}),null,16,["value"])])),_:2},1024),m(u,null,{default:e((()=>[E])),_:1}),m(u,null,{default:e((()=>[m("input",l({value:s.end},o(n.end),{class:"input"}),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])])),default:e((()=>[C,x])),_:1},8,["frontmatter"])},data:()=>({frontmatter:T})},D=m("h3",{id:"datetimepicker",tabindex:"-1"},"DateTimepicker",-1),Z=m("p",null,[m("code",null,"<V-Calendar />"),c(" can be turned into a date range picker if needed. Check the code example for more details about usage.")],-1),U=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("script")]),c(),m("span",{class:"prism--token prism--attr-name"},"setup"),c(),m("span",{class:"prism--token prism--attr-name"},"lang"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("ts"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--script"},[m("span",{class:"prism--token prism--language-javascript"},[c("\n"),m("span",{class:"prism--token prism--keyword"},"import"),c(),m("span",{class:"prism--token prism--punctuation"},"{"),c(" ref "),m("span",{class:"prism--token prism--punctuation"},"}"),c(),m("span",{class:"prism--token prism--keyword"},"from"),c(" vue\n\n"),m("span",{class:"prism--token prism--keyword"},"const"),c(" date "),m("span",{class:"prism--token prism--operator"},"="),c(),m("span",{class:"prism--token prism--function"},"ref"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--keyword"},"new"),c(),m("span",{class:"prism--token prism--class-name"},"Date"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--punctuation"},")"),m("span",{class:"prism--token prism--punctuation"},")"),c("\n")])]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("script")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("v-date-picker")]),c(),m("span",{class:"prism--token prism--attr-name"},"v-model"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("date"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"mode"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("dateTime"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),c(),m("span",{class:"prism--token prism--attr-name"},"#default"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("{ inputValue, inputEvents }"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n          "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("input")]),c(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("input"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},":value"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputValue"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"v-on"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputEvents"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--punctuation"},"/>")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("v-date-picker")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br"),m("span",{class:"line-number"},"10"),m("br"),m("span",{class:"line-number"},"11"),m("br"),m("span",{class:"line-number"},"12"),m("br"),m("span",{class:"line-number"},"13"),m("br"),m("span",{class:"line-number"},"14"),m("br"),m("span",{class:"line-number"},"15"),m("br"),m("span",{class:"line-number"},"16"),m("br"),m("span",{class:"line-number"},"17"),m("br")])],-1);const A={state:{date:"2021-02-28T16:20:00.000Z"}},I={render:function(n,c){const u=a,k=p,d=t("v-date-picker"),b=s;return r(),i(b,{frontmatter:n.frontmatter},{code:e((()=>[U])),example:e((()=>[m(d,{modelValue:n.frontmatter.state.date,"onUpdate:modelValue":c[1]||(c[1]=s=>n.frontmatter.state.date=s),color:"green",mode:"dateTime"},{default:e((({inputValue:s,inputEvents:n})=>[m(k,null,{default:e((()=>[m(u,null,{default:e((()=>[m("input",l({class:"input",value:s},o(n)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])])),default:e((()=>[D,Z])),_:1},8,["frontmatter"])},data:()=>({frontmatter:A})},L=m("h3",{id:"timepicker",tabindex:"-1"},"Timepicker",-1),B=m("p",null,[m("code",null,"<V-Calendar />"),c(" can be turned into a simple time picker if needed. You can add the "),m("code",null,"is24hr"),c(" attribute to display hours in 24h format. Check the code example for more details about usage.")],-1),G=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("script")]),c(),m("span",{class:"prism--token prism--attr-name"},"setup"),c(),m("span",{class:"prism--token prism--attr-name"},"lang"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("ts"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--script"},[m("span",{class:"prism--token prism--language-javascript"},[c("\n"),m("span",{class:"prism--token prism--keyword"},"import"),c(),m("span",{class:"prism--token prism--punctuation"},"{"),c(" ref "),m("span",{class:"prism--token prism--punctuation"},"}"),c(),m("span",{class:"prism--token prism--keyword"},"from"),c(" vue\n\n"),m("span",{class:"prism--token prism--keyword"},"const"),c(" date "),m("span",{class:"prism--token prism--operator"},"="),c(),m("span",{class:"prism--token prism--function"},"ref"),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--keyword"},"null"),m("span",{class:"prism--token prism--punctuation"},")"),c("\n")])]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("script")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("v-date-picker")]),c(),m("span",{class:"prism--token prism--attr-name"},"v-model"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("date"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"mode"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("dateTime"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"is24hr"),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("template")]),c(),m("span",{class:"prism--token prism--attr-name"},"#default"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("{ inputValue, inputEvents }"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n          "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),c("input")]),c(),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("input"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},":value"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputValue"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--attr-name"},"v-on"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),c("inputEvents"),m("span",{class:"prism--token prism--punctuation"},'"')]),c(),m("span",{class:"prism--token prism--punctuation"},"/>")]),c("\n        "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("v-date-picker")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),c("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),c("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br"),m("span",{class:"line-number"},"10"),m("br"),m("span",{class:"line-number"},"11"),m("br"),m("span",{class:"line-number"},"12"),m("br"),m("span",{class:"line-number"},"13"),m("br"),m("span",{class:"line-number"},"14"),m("br"),m("span",{class:"line-number"},"15"),m("br"),m("span",{class:"line-number"},"16"),m("br"),m("span",{class:"line-number"},"17"),m("br")])],-1);const K={state:{date:"2021-02-28T16:20:00.000Z"}},M={render:function(n,c){const u=a,k=p,d=t("v-date-picker"),b=s;return r(),i(b,{frontmatter:n.frontmatter},{code:e((()=>[G])),example:e((()=>[m(d,{modelValue:n.frontmatter.state.date,"onUpdate:modelValue":c[1]||(c[1]=s=>n.frontmatter.state.date=s),color:"green",mode:"time",is24hr:""},{default:e((({inputValue:s,inputEvents:n})=>[m(k,null,{default:e((()=>[m(u,null,{default:e((()=>[m("input",l({class:"input",value:s},o(n)),null,16,["value"])])),_:2},1024)])),_:2},1024)])),_:1},8,["modelValue"])])),default:e((()=>[L,B])),_:1},8,["frontmatter"])},data:()=>({frontmatter:K})},O={class:"page-content-inner"},P={class:"columns is-multiline"},R={key:0,class:"column is-3 toc-column"};var S=u({expose:[],setup(s){const a=k(null),p=v(a);return k(null),V.value="V-Calendar",d({title:"V-Calendar - Addons - Vuero"}),(s,t)=>{const e=n,l=_,o=F,c=I,u=M,k=f;return r(),i("div",O,[m(e,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"Addons"},{label:"V-Calendar",to:{name:"elements-addons-calendar"}}]}),m("div",P,[m("div",{ref:a,class:[[b(p).length>0?"is-9":"is-12"],"column doc-column"]},[m(l),m(o),m(c),m(u)],2),b(p).length?(r(),i("div",R,[m(k,{toc:b(p)},null,8,["toc"])])):g("",!0)])])}}});export default S;
