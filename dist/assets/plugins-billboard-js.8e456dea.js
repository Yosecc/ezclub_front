import{_ as s,a as n}from"./DocumentationItem.6c0d57a6.js";import{h as p,i as a,k as r,l as i,G as t,d as e,r as o,O as m,F as l,K as c}from"./vendor.6c78dc37.js";import{r as u,_ as k}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.87807f98.js";import{_ as b}from"./V-Card.vue_vue&type=script&setup=true&lang.20e31a61.js";import{u as d,_ as g}from"./useMarkdownToc.7585c9b6.js";import{s as f}from"./splineSimple.21e8d406.js";import{t as h}from"./themeColors.4f0e93f3.js";import{p as v}from"./sidebarLayoutState.b20c1332.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.2dced437.js";import"./vue-scrollto.2e888712.js";const y=i("h3",{id:"v-billboardjs",tabindex:"-1"},"V-BillboardJS",-1),j=i("p",null,[t("Vuero ships with the "),i("code",null,"<V-BillboardJS />"),t(" component, a custom vue3 wrapper for the "),i("a",{href:"https://naver.github.io/billboard.js/"},"billboard.js"),t(" library."),i("br"),t(" Check the code for more details.")],-1),x=i("div",{class:"language-vue line-numbers-mode"},[i("pre",null,[i("code",null,[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),t("script")]),t(),i("span",{class:"prism--token prism--attr-name"},"setup"),t(),i("span",{class:"prism--token prism--attr-name"},"lang"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),t("ts"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),i("span",{class:"prism--token prism--script"},[i("span",{class:"prism--token prism--language-javascript"},[t("\n"),i("span",{class:"prism--token prism--keyword"},"import"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t(" radar "),i("span",{class:"prism--token prism--punctuation"},"}"),t(),i("span",{class:"prism--token prism--keyword"},"from"),t(),i("span",{class:"prism--token prism--string"},"'billboard.js'"),t("\n\n"),i("span",{class:"prism--token prism--keyword"},"import"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t(" themeColors "),i("span",{class:"prism--token prism--punctuation"},"}"),t(),i("span",{class:"prism--token prism--keyword"},"from"),t(),i("span",{class:"prism--token prism--string"},"'/@src/utils/themeColors'"),t("\n\n"),i("span",{class:"prism--token prism--keyword"},"const"),t(" billboardJsOptions "),i("span",{class:"prism--token prism--operator"},"="),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n  data"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n    x"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--string"},"'x'"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    columns"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"["),t("\n      "),i("span",{class:"prism--token prism--punctuation"},"["),i("span",{class:"prism--token prism--string"},"'x'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--string"},"'Data A'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--string"},"'Data B'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--string"},"'Data C'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--string"},"'Data D'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--string"},"'Data E'"),i("span",{class:"prism--token prism--punctuation"},"]"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      "),i("span",{class:"prism--token prism--punctuation"},"["),i("span",{class:"prism--token prism--string"},"'data1'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"330"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"350"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"200"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"380"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"150"),i("span",{class:"prism--token prism--punctuation"},"]"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      "),i("span",{class:"prism--token prism--punctuation"},"["),i("span",{class:"prism--token prism--string"},"'data2'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"130"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"100"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"30"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"200"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"80"),i("span",{class:"prism--token prism--punctuation"},"]"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      "),i("span",{class:"prism--token prism--punctuation"},"["),i("span",{class:"prism--token prism--string"},"'data3'"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"230"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"153"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"85"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"300"),i("span",{class:"prism--token prism--punctuation"},","),t(),i("span",{class:"prism--token prism--number"},"250"),i("span",{class:"prism--token prism--punctuation"},"]"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    "),i("span",{class:"prism--token prism--punctuation"},"]"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    colors"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n      data1"),i("span",{class:"prism--token prism--operator"},":"),t(" themeColors"),i("span",{class:"prism--token prism--punctuation"},"."),t("accent"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      data2"),i("span",{class:"prism--token prism--operator"},":"),t(" themeColors"),i("span",{class:"prism--token prism--punctuation"},"."),t("primary"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      data3"),i("span",{class:"prism--token prism--operator"},":"),t(" themeColors"),i("span",{class:"prism--token prism--punctuation"},"."),t("info"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      data4"),i("span",{class:"prism--token prism--operator"},":"),t(" themeColors"),i("span",{class:"prism--token prism--punctuation"},"."),t("purple"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    type"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--function"},"radar"),i("span",{class:"prism--token prism--punctuation"},"("),i("span",{class:"prism--token prism--punctuation"},")"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    labels"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--boolean"},"true"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  radar"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n    axis"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n      max"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"400"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    level"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n      depth"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"4"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    direction"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n      clockwise"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--boolean"},"true"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  size"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n    height"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"280"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  padding"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n    bottom"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"20"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  title"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n    text"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--string"},"'Radar Chart'"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    position"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--string"},"'top-left'"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    padding"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n      bottom"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"20"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      right"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"20"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      top"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"0"),i("span",{class:"prism--token prism--punctuation"},","),t("\n      left"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--number"},"20"),i("span",{class:"prism--token prism--punctuation"},","),t("\n    "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  legend"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--punctuation"},"{"),t("\n    position"),i("span",{class:"prism--token prism--operator"},":"),t(),i("span",{class:"prism--token prism--string"},"'inset'"),i("span",{class:"prism--token prism--punctuation"},","),t("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),t("\n"),i("span",{class:"prism--token prism--punctuation"},"}"),t("\n")])]),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),t("script")]),i("span",{class:"prism--token prism--punctuation"},">")]),t("\n\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),t("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),t("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),t("V-BillboardJS")]),t(),i("span",{class:"prism--token prism--attr-name"},":options"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),t("billboardJsOptions"),i("span",{class:"prism--token prism--punctuation"},'"')]),t(),i("span",{class:"prism--token prism--punctuation"},"/>")]),t("\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),t("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),t("\n")])]),i("div",{class:"line-numbers-wrapper"},[i("span",{class:"line-number"},"1"),i("br"),i("span",{class:"line-number"},"2"),i("br"),i("span",{class:"line-number"},"3"),i("br"),i("span",{class:"line-number"},"4"),i("br"),i("span",{class:"line-number"},"5"),i("br"),i("span",{class:"line-number"},"6"),i("br"),i("span",{class:"line-number"},"7"),i("br"),i("span",{class:"line-number"},"8"),i("br"),i("span",{class:"line-number"},"9"),i("br"),i("span",{class:"line-number"},"10"),i("br"),i("span",{class:"line-number"},"11"),i("br"),i("span",{class:"line-number"},"12"),i("br"),i("span",{class:"line-number"},"13"),i("br"),i("span",{class:"line-number"},"14"),i("br"),i("span",{class:"line-number"},"15"),i("br"),i("span",{class:"line-number"},"16"),i("br"),i("span",{class:"line-number"},"17"),i("br"),i("span",{class:"line-number"},"18"),i("br"),i("span",{class:"line-number"},"19"),i("br"),i("span",{class:"line-number"},"20"),i("br"),i("span",{class:"line-number"},"21"),i("br"),i("span",{class:"line-number"},"22"),i("br"),i("span",{class:"line-number"},"23"),i("br"),i("span",{class:"line-number"},"24"),i("br"),i("span",{class:"line-number"},"25"),i("br"),i("span",{class:"line-number"},"26"),i("br"),i("span",{class:"line-number"},"27"),i("br"),i("span",{class:"line-number"},"28"),i("br"),i("span",{class:"line-number"},"29"),i("br"),i("span",{class:"line-number"},"30"),i("br"),i("span",{class:"line-number"},"31"),i("br"),i("span",{class:"line-number"},"32"),i("br"),i("span",{class:"line-number"},"33"),i("br"),i("span",{class:"line-number"},"34"),i("br"),i("span",{class:"line-number"},"35"),i("br"),i("span",{class:"line-number"},"36"),i("br"),i("span",{class:"line-number"},"37"),i("br"),i("span",{class:"line-number"},"38"),i("br"),i("span",{class:"line-number"},"39"),i("br"),i("span",{class:"line-number"},"40"),i("br"),i("span",{class:"line-number"},"41"),i("br"),i("span",{class:"line-number"},"42"),i("br"),i("span",{class:"line-number"},"43"),i("br"),i("span",{class:"line-number"},"44"),i("br"),i("span",{class:"line-number"},"45"),i("br"),i("span",{class:"line-number"},"46"),i("br"),i("span",{class:"line-number"},"47"),i("br"),i("span",{class:"line-number"},"48"),i("br"),i("span",{class:"line-number"},"49"),i("br"),i("span",{class:"line-number"},"50"),i("br"),i("span",{class:"line-number"},"51"),i("br"),i("span",{class:"line-number"},"52"),i("br"),i("span",{class:"line-number"},"53"),i("br"),i("span",{class:"line-number"},"54"),i("br"),i("span",{class:"line-number"},"55"),i("br"),i("span",{class:"line-number"},"56"),i("br"),i("span",{class:"line-number"},"57"),i("br"),i("span",{class:"line-number"},"58"),i("br"),i("span",{class:"line-number"},"59"),i("br")])],-1);const C={state:{flipped:!1}},D={render:function(n,i){const t=s;return p(),a(t,{frontmatter:n.frontmatter},{code:r((()=>[x])),default:r((()=>[y,j])),_:1},8,["frontmatter"])},data:()=>({frontmatter:C})},V=i("h3",{id:"v-billboardjs-props",tabindex:"-1"},"V-BillboardJS Props",-1),w=i("p",null,[t("Here is the full props available for "),i("code",null,"<V-BillboardJS />"),t(" component:")],-1),B=i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"Props"),i("th",null,"Default"),i("th",null,"Type")])]),i("tbody",null,[i("tr",null,[i("td",null,"options"),i("td",null,[i("span",{class:"is-array"},[i("code",null,"{}")])]),i("td",null,[i("a",{href:"https://naver.github.io/billboard.js/release/latest/doc/Options.html"},"Billboard.js Options")])])])],-1);const _={disable_code:!0},J={render:function(n,i){const t=s;return p(),a(t,{frontmatter:n.frontmatter},{default:r((()=>[V,w,B])),_:1},8,["frontmatter"])},data:()=>({frontmatter:_})},S={class:"page-content-inner"},O={class:"columns is-multiline"},P={class:"columns is-mutliline"},q={class:"column is-6"},z={class:"column is-6"},A={key:0,class:"column is-3 toc-column"};var E=e({expose:[],setup(s){const t=o(null),e=d(t);return v.value="V-BillboardJS",m({title:"V-BillboardJS - Plugins - Vuero"}),(s,o)=>{const m=n,d=D,v=k,y=b,j=J,x=g;return p(),a("div",S,[i(m,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Components",to:{name:"components"}},{label:"Plugins"},{label:"V-BillboardJS",to:{name:"components-plugins-billboard-js"}}]}),i("div",O,[i("div",{ref:t,class:[[l(e).length>0?"is-9":"is-12"],"column doc-column"]},[i(d),i("div",P,[i("div",q,[i(y,null,{default:r((()=>[i(v,{options:{data:{x:"x",columns:[["x","Data A","Data B","Data C","Data D","Data E"],["data1",330,350,200,380,150],["data2",130,100,30,200,80],["data3",230,153,85,300,250]],colors:{data1:l(h).accent,data2:l(h).primary,data3:l(h).info,data4:l(h).purple},type:l(u)(),labels:!0},radar:{axis:{max:400},level:{depth:4},direction:{clockwise:!0}},size:{height:280},padding:{bottom:20},title:{text:"Radar Chart",position:"top-left",padding:{bottom:20,right:20,top:0,left:20}},legend:{position:"inset"}}},null,8,["options"])])),_:1})]),i("div",z,[i(y,{type:"smooth"},{default:r((()=>[i(v,{options:l(f).options},null,8,["options"])])),_:1})])]),i(j)],2),l(e).length?(p(),a("div",A,[i(x,{toc:l(e)},null,8,["toc"])])):c("",!0)])])}}});export default E;
