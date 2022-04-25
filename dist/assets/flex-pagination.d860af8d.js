import{_ as s,a as n}from"./DocumentationItem.02c0fec5.js";import{o as a,h as t,j as p,k as r,E as e,d as i,c as l,L as m,D as o,O as u}from"./vendor.c636f33b.js";import{_ as c}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.9a971c58.js";import{p as k}from"./sidebarLayoutState.7607026f.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.e220a16b.js";const d=r("h3",{id:"v-flexpagination",tabindex:"-1"},"V-FlexPagination",-1),b=r("p",null,[e("Vuero provides a custom pagination component called "),r("code",null,"<V-FlexPagination />"),e(". Check the markup for more details about usage.")],-1),g=r("div",{class:"language-vue line-numbers-mode"},[r("pre",null,[r("code",null,[r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--punctuation"},"<"),e("script")]),e(),r("span",{class:"prism--token prism--attr-name"},"setup"),e(),r("span",{class:"prism--token prism--attr-name"},"lang"),r("span",{class:"prism--token prism--attr-value"},[r("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),r("span",{class:"prism--token prism--punctuation"},'"'),e("ts"),r("span",{class:"prism--token prism--punctuation"},'"')]),r("span",{class:"prism--token prism--punctuation"},">")]),r("span",{class:"prism--token prism--script"},[r("span",{class:"prism--token prism--language-javascript"},[e("\n"),r("span",{class:"prism--token prism--keyword"},"import"),e(),r("span",{class:"prism--token prism--punctuation"},"{"),e(" useRoute "),r("span",{class:"prism--token prism--punctuation"},"}"),e(),r("span",{class:"prism--token prism--keyword"},"from"),e(),r("span",{class:"prism--token prism--string"},"'vue-router'"),e("\n\n"),r("span",{class:"prism--token prism--keyword"},"const"),e(" route "),r("span",{class:"prism--token prism--operator"},"="),e(),r("span",{class:"prism--token prism--function"},"useRoute"),r("span",{class:"prism--token prism--punctuation"},"("),r("span",{class:"prism--token prism--punctuation"},")"),e("\n"),r("span",{class:"prism--token prism--keyword"},"const"),e(" currentPage "),r("span",{class:"prism--token prism--operator"},"="),e(),r("span",{class:"prism--token prism--function"},"computed"),r("span",{class:"prism--token prism--punctuation"},"("),r("span",{class:"prism--token prism--punctuation"},"("),r("span",{class:"prism--token prism--punctuation"},")"),e(),r("span",{class:"prism--token prism--operator"},"=>"),e(),r("span",{class:"prism--token prism--punctuation"},"{"),e("\n  "),r("span",{class:"prism--token prism--keyword"},"try"),e(),r("span",{class:"prism--token prism--punctuation"},"{"),e("\n    "),r("span",{class:"prism--token prism--keyword"},"return"),e(" Number"),r("span",{class:"prism--token prism--punctuation"},"."),r("span",{class:"prism--token prism--function"},"parseInt"),r("span",{class:"prism--token prism--punctuation"},"("),e("route"),r("span",{class:"prism--token prism--punctuation"},"."),e("query"),r("span",{class:"prism--token prism--punctuation"},"."),e("page "),r("span",{class:"prism--token prism--keyword"},"as"),e(" string"),r("span",{class:"prism--token prism--punctuation"},")"),e(),r("span",{class:"prism--token prism--operator"},"||"),e(),r("span",{class:"prism--token prism--number"},"1"),e("\n  "),r("span",{class:"prism--token prism--punctuation"},"}"),e(),r("span",{class:"prism--token prism--keyword"},"catch"),e(),r("span",{class:"prism--token prism--punctuation"},"{"),r("span",{class:"prism--token prism--punctuation"},"}"),e("\n  "),r("span",{class:"prism--token prism--keyword"},"return"),e(),r("span",{class:"prism--token prism--number"},"1"),e("\n"),r("span",{class:"prism--token prism--punctuation"},"}"),r("span",{class:"prism--token prism--punctuation"},")"),e("\n")])]),r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--punctuation"},"</"),e("script")]),r("span",{class:"prism--token prism--punctuation"},">")]),e("\n\n"),r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--punctuation"},"<"),e("template")]),r("span",{class:"prism--token prism--punctuation"},">")]),e("\n  "),r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--punctuation"},"<"),e("V-FlexPagination")]),e("\n    "),r("span",{class:"prism--token prism--attr-name"},":item-per-page"),r("span",{class:"prism--token prism--attr-value"},[r("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),r("span",{class:"prism--token prism--punctuation"},'"'),e("8"),r("span",{class:"prism--token prism--punctuation"},'"')]),e("\n    "),r("span",{class:"prism--token prism--attr-name"},":total-items"),r("span",{class:"prism--token prism--attr-value"},[r("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),r("span",{class:"prism--token prism--punctuation"},'"'),e("512"),r("span",{class:"prism--token prism--punctuation"},'"')]),e("\n    "),r("span",{class:"prism--token prism--attr-name"},":current-page"),r("span",{class:"prism--token prism--attr-value"},[r("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),r("span",{class:"prism--token prism--punctuation"},'"'),e("currentPage"),r("span",{class:"prism--token prism--punctuation"},'"')]),e("\n    "),r("span",{class:"prism--token prism--attr-name"},":max-links-displayed"),r("span",{class:"prism--token prism--attr-value"},[r("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),r("span",{class:"prism--token prism--punctuation"},'"'),e("5"),r("span",{class:"prism--token prism--punctuation"},'"')]),e("\n  "),r("span",{class:"prism--token prism--punctuation"},"/>")]),e("\n"),r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--tag"},[r("span",{class:"prism--token prism--punctuation"},"</"),e("template")]),r("span",{class:"prism--token prism--punctuation"},">")]),e("\n")])]),r("div",{class:"line-numbers-wrapper"},[r("span",{class:"line-number"},"1"),r("br"),r("span",{class:"line-number"},"2"),r("br"),r("span",{class:"line-number"},"3"),r("br"),r("span",{class:"line-number"},"4"),r("br"),r("span",{class:"line-number"},"5"),r("br"),r("span",{class:"line-number"},"6"),r("br"),r("span",{class:"line-number"},"7"),r("br"),r("span",{class:"line-number"},"8"),r("br"),r("span",{class:"line-number"},"9"),r("br"),r("span",{class:"line-number"},"10"),r("br"),r("span",{class:"line-number"},"11"),r("br"),r("span",{class:"line-number"},"12"),r("br"),r("span",{class:"line-number"},"13"),r("br"),r("span",{class:"line-number"},"14"),r("br"),r("span",{class:"line-number"},"15"),r("br"),r("span",{class:"line-number"},"16"),r("br"),r("span",{class:"line-number"},"17"),r("br"),r("span",{class:"line-number"},"18"),r("br"),r("span",{class:"line-number"},"19"),r("br"),r("span",{class:"line-number"},"20"),r("br")])],-1);const f={},v={render:function(n,r){const e=s;return a(),t(e,{frontmatter:n.frontmatter},{code:p((()=>[g])),default:p((()=>[d,b])),_:1},8,["frontmatter"])},data:()=>({frontmatter:f})},y=r("h3",{id:"v-flexpagination-props",tabindex:"-1"},"V-FlexPagination Props",-1),x=r("p",null,[e("Here is the full props available for "),r("code",null,"<V-FlexPagination />"),e(" component:")],-1),h=r("table",null,[r("thead",null,[r("tr",null,[r("th",null,"Props"),r("th",null,"Default"),r("th",null,"Type")])]),r("tbody",null,[r("tr",null,[r("td",null,[e("itemPerPage"),r("br"),r("strong",null,"required")]),r("td",null,[r("span",{class:"is-undefined"},[r("code",null,"undefined")])]),r("td",null,"number")]),r("tr",null,[r("td",null,[e("totalItems"),r("br"),r("strong",null,"required")]),r("td",null,[r("span",{class:"is-undefined"},[r("code",null,"undefined")])]),r("td",null,"number")]),r("tr",null,[r("td",null,"currentPage"),r("td",null,[r("span",{class:"is-number"},[r("code",null,"1")])]),r("td",null,"number")]),r("tr",null,[r("td",null,"maxLinksDisplayed"),r("td",null,[r("span",{class:"is-number"},[r("code",null,"5")])]),r("td",null,"number")])])],-1);const P={disable_code:!0},V={render:function(n,r){const e=s;return a(),t(e,{frontmatter:n.frontmatter},{default:p((()=>[y,x,h])),_:1},8,["frontmatter"])},data:()=>({frontmatter:P})},w={class:"page-content-inner"},q={class:"columns"},F={class:"column is-12"},j={class:"mt-4"},_={class:"mt-4 mb-6"};var I=i({expose:[],setup(s){const p=u(),e=l((()=>{try{return Number.parseInt(p.query.page)||1}catch{}return 1}));return k.value="V-FlexPagination",m({title:"V-FlexPagination - Components - Vuero"}),(s,p)=>{const i=n,l=v,m=c,u=V;return a(),t("div",w,[r(i,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Components",to:{name:"components"}},{label:"V-FlexPagination",to:{name:"components-flex-pagination"}}]}),r("div",q,[r("div",F,[r(l),r("div",j,[r(m,{"item-per-page":8,"total-items":512,"current-page":o(e)},null,8,["current-page"])]),r("div",_,[r(m,{"item-per-page":8,"total-items":512,"current-page":o(e),"max-links-displayed":6},null,8,["current-page"])]),r(u)])])])}}});export default I;
