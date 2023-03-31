import{_ as s,a as n}from"./DocumentationItem.13d1a95c.js";import{_ as a}from"./V-FilePond.vue_vue&type=script&setup=true&lang.771ddb62.js";import{_ as p}from"./V-Control.9f6b030b.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import{i,j as r,k as e,l as o,G as m,d as l,r as c,P as u,F as k,I as d}from"./vendor.b96c0b62.js";import{u as b,_ as g}from"./useMarkdownToc.72ca0dd7.js";import{p as f}from"./sidebarLayoutState.a7097173.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.0b7fcd84.js";import"./vue-scrollto.599f0d9d.js";const y=o("h3",{id:"v-filepond",tabindex:"-1"},"V-FilePond",-1),v=o("p",null,[m("Vuero ships with the "),o("code",null,"<V-FilePond />"),m(" component, a custom credit card previewer. Check the code for more details.")],-1),h=o("div",{class:"language-vue line-numbers-mode"},[o("pre",null,[o("code",null,[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"<"),m("script")]),m(),o("span",{class:"prism--token prism--attr-name"},"setup"),m(),o("span",{class:"prism--token prism--attr-name"},"lang"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("ts"),o("span",{class:"prism--token prism--punctuation"},'"')]),o("span",{class:"prism--token prism--punctuation"},">")]),o("span",{class:"prism--token prism--script"},[o("span",{class:"prism--token prism--language-javascript"},[m("\n"),o("span",{class:"prism--token prism--keyword"},"import"),m(),o("span",{class:"prism--token prism--punctuation"},"{"),m(" ref "),o("span",{class:"prism--token prism--punctuation"},"}"),m(),o("span",{class:"prism--token prism--keyword"},"from"),m(" vue\n\n"),o("span",{class:"prism--token prism--keyword"},"const"),m(),o("span",{class:"prism--token prism--function-variable prism--function"},"onAddFile"),m(),o("span",{class:"prism--token prism--operator"},"="),m(),o("span",{class:"prism--token prism--punctuation"},"("),o("span",{class:"prism--token prism--parameter"},[m("error"),o("span",{class:"prism--token prism--operator"},":"),m(" any"),o("span",{class:"prism--token prism--punctuation"},","),m(" fileInfo"),o("span",{class:"prism--token prism--operator"},":"),m(" any")]),o("span",{class:"prism--token prism--punctuation"},")"),m(),o("span",{class:"prism--token prism--operator"},"=>"),m(),o("span",{class:"prism--token prism--punctuation"},"{"),m("\n  "),o("span",{class:"prism--token prism--keyword"},"if"),m(),o("span",{class:"prism--token prism--punctuation"},"("),m("error"),o("span",{class:"prism--token prism--punctuation"},")"),m(),o("span",{class:"prism--token prism--punctuation"},"{"),m("\n    console"),o("span",{class:"prism--token prism--punctuation"},"."),o("span",{class:"prism--token prism--function"},"error"),o("span",{class:"prism--token prism--punctuation"},"("),m("error"),o("span",{class:"prism--token prism--punctuation"},")"),m("\n    "),o("span",{class:"prism--token prism--keyword"},"return"),m("\n  "),o("span",{class:"prism--token prism--punctuation"},"}"),m("\n\n  "),o("span",{class:"prism--token prism--keyword"},"const"),m(" _file "),o("span",{class:"prism--token prism--operator"},"="),m(" fileInfo"),o("span",{class:"prism--token prism--punctuation"},"."),m("file "),o("span",{class:"prism--token prism--keyword"},"as"),m(" File\n  "),o("span",{class:"prism--token prism--keyword"},"if"),m(),o("span",{class:"prism--token prism--punctuation"},"("),m("_file"),o("span",{class:"prism--token prism--punctuation"},")"),m(),o("span",{class:"prism--token prism--punctuation"},"{"),m("\n    wizardData"),o("span",{class:"prism--token prism--punctuation"},"."),m("logo "),o("span",{class:"prism--token prism--operator"},"="),m(" _file\n  "),o("span",{class:"prism--token prism--punctuation"},"}"),m("\n"),o("span",{class:"prism--token prism--punctuation"},"}"),m("\n\n"),o("span",{class:"prism--token prism--keyword"},"const"),m(),o("span",{class:"prism--token prism--function-variable prism--function"},"onRemoveFile"),m(),o("span",{class:"prism--token prism--operator"},"="),m(),o("span",{class:"prism--token prism--punctuation"},"("),o("span",{class:"prism--token prism--parameter"},[m("error"),o("span",{class:"prism--token prism--operator"},":"),m(" any"),o("span",{class:"prism--token prism--punctuation"},","),m(" fileInfo"),o("span",{class:"prism--token prism--operator"},":"),m(" any")]),o("span",{class:"prism--token prism--punctuation"},")"),m(),o("span",{class:"prism--token prism--operator"},"=>"),m(),o("span",{class:"prism--token prism--punctuation"},"{"),m("\n  "),o("span",{class:"prism--token prism--keyword"},"if"),m(),o("span",{class:"prism--token prism--punctuation"},"("),m("error"),o("span",{class:"prism--token prism--punctuation"},")"),m(),o("span",{class:"prism--token prism--punctuation"},"{"),m("\n    console"),o("span",{class:"prism--token prism--punctuation"},"."),o("span",{class:"prism--token prism--function"},"error"),o("span",{class:"prism--token prism--punctuation"},"("),m("error"),o("span",{class:"prism--token prism--punctuation"},")"),m("\n    "),o("span",{class:"prism--token prism--keyword"},"return"),m("\n  "),o("span",{class:"prism--token prism--punctuation"},"}"),m("\n\n  wizardData"),o("span",{class:"prism--token prism--punctuation"},"."),m("logo "),o("span",{class:"prism--token prism--operator"},"="),m(),o("span",{class:"prism--token prism--keyword"},"null"),m("\n"),o("span",{class:"prism--token prism--punctuation"},"}"),m("\n")])]),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"</"),m("script")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n\n"),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"<"),m("template")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n  "),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"<"),m("V-Field")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n    "),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"<"),m("V-Control")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n      "),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"<"),m("V-FilePond")]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"class"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("profile-filepond"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"name"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("profile_filepond"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},":chunk-retry-delays"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("[500, 1000, 3000]"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"label-idle"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("<i class="),o("span",{class:"prism--token prism--punctuation"},"'"),m("lnil lnil-cloud-upload"),o("span",{class:"prism--token prism--punctuation"},"'"),m("></i>"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},":accepted-file-types"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("["),o("span",{class:"prism--token prism--punctuation"},"'"),m("image/png"),o("span",{class:"prism--token prism--punctuation"},"'"),m(", "),o("span",{class:"prism--token prism--punctuation"},"'"),m("image/jpeg"),o("span",{class:"prism--token prism--punctuation"},"'"),m(", "),o("span",{class:"prism--token prism--punctuation"},"'"),m("image/gif"),o("span",{class:"prism--token prism--punctuation"},"'"),m("]"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},":image-preview-height"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("140"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},":image-resize-target-width"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("140"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},":image-resize-target-height"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("140"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"image-crop-aspect-ratio"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("1:1"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"style-panel-layout"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("compact circle"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"style-load-indicator-position"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("center bottom"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"style-progress-indicator-position"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("right bottom"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"style-button-remove-item-position"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("left bottom"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"style-button-process-item-position"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("right bottom"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"@addfile"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("onAddFile"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n        "),o("span",{class:"prism--token prism--attr-name"},"@removefile"),o("span",{class:"prism--token prism--attr-value"},[o("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),o("span",{class:"prism--token prism--punctuation"},'"'),m("onRemoveFile"),o("span",{class:"prism--token prism--punctuation"},'"')]),m("\n      "),o("span",{class:"prism--token prism--punctuation"},"/>")]),m("\n    "),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"</"),m("V-Control")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n  "),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"</"),m("V-Field")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n"),o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--tag"},[o("span",{class:"prism--token prism--punctuation"},"</"),m("template")]),o("span",{class:"prism--token prism--punctuation"},">")]),m("\n")])]),o("div",{class:"line-numbers-wrapper"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br"),o("span",{class:"line-number"},"4"),o("br"),o("span",{class:"line-number"},"5"),o("br"),o("span",{class:"line-number"},"6"),o("br"),o("span",{class:"line-number"},"7"),o("br"),o("span",{class:"line-number"},"8"),o("br"),o("span",{class:"line-number"},"9"),o("br"),o("span",{class:"line-number"},"10"),o("br"),o("span",{class:"line-number"},"11"),o("br"),o("span",{class:"line-number"},"12"),o("br"),o("span",{class:"line-number"},"13"),o("br"),o("span",{class:"line-number"},"14"),o("br"),o("span",{class:"line-number"},"15"),o("br"),o("span",{class:"line-number"},"16"),o("br"),o("span",{class:"line-number"},"17"),o("br"),o("span",{class:"line-number"},"18"),o("br"),o("span",{class:"line-number"},"19"),o("br"),o("span",{class:"line-number"},"20"),o("br"),o("span",{class:"line-number"},"21"),o("br"),o("span",{class:"line-number"},"22"),o("br"),o("span",{class:"line-number"},"23"),o("br"),o("span",{class:"line-number"},"24"),o("br"),o("span",{class:"line-number"},"25"),o("br"),o("span",{class:"line-number"},"26"),o("br"),o("span",{class:"line-number"},"27"),o("br"),o("span",{class:"line-number"},"28"),o("br"),o("span",{class:"line-number"},"29"),o("br"),o("span",{class:"line-number"},"30"),o("br"),o("span",{class:"line-number"},"31"),o("br"),o("span",{class:"line-number"},"32"),o("br"),o("span",{class:"line-number"},"33"),o("br"),o("span",{class:"line-number"},"34"),o("br"),o("span",{class:"line-number"},"35"),o("br"),o("span",{class:"line-number"},"36"),o("br"),o("span",{class:"line-number"},"37"),o("br"),o("span",{class:"line-number"},"38"),o("br"),o("span",{class:"line-number"},"39"),o("br"),o("span",{class:"line-number"},"40"),o("br"),o("span",{class:"line-number"},"41"),o("br"),o("span",{class:"line-number"},"42"),o("br"),o("span",{class:"line-number"},"43"),o("br"),o("span",{class:"line-number"},"44"),o("br"),o("span",{class:"line-number"},"45"),o("br"),o("span",{class:"line-number"},"46"),o("br"),o("span",{class:"line-number"},"47"),o("br"),o("span",{class:"line-number"},"48"),o("br"),o("span",{class:"line-number"},"49"),o("br")])],-1);const w={state:{flipped:!1}},_={render:function(n,m){const l=a,c=p,u=t,k=s;return i(),r(k,{frontmatter:n.frontmatter},{code:e((()=>[h])),example:e((()=>[o(u,{grouped:""},{default:e((()=>[o(c,null,{default:e((()=>[o(l,{class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom"})])),_:1}),o(c,null,{default:e((()=>[o(l,{size:"small",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom"})])),_:1}),o(c,null,{default:e((()=>[o(l,{size:"tiny",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom"})])),_:1})])),_:1})])),default:e((()=>[y,v])),_:1},8,["frontmatter"])},data:()=>({frontmatter:w}),__hmrId:"C:/Users/yosec/OneDrive/Documentos/devilbox1/data/www/ezclub_front/documentation/plugins/filepond/v-filepond-documentation.md"},V=o("h3",{id:"v-filepond-props",tabindex:"-1"},"V-FilePond Props",-1),q=o("p",null,[m("Here is the props added for "),o("code",null,"<V-FilePond />"),m(" component, you can check all options available on "),o("a",{href:"https://pqina.nl/filepond/docs/patterns/api/filepond-instance/#properties"},"filepond official documentation"),m(":")],-1),F=o("table",null,[o("thead",null,[o("tr",null,[o("th",null,"Props"),o("th",null,"Default"),o("th",null,"Type")])]),o("tbody",null,[o("tr",null,[o("td",null,"size"),o("td",null,[o("span",{class:"is-string"},[o("code",null,"grey")])]),o("td",null,[o("code",null,"small"),m(", "),o("code",null,"tiny")])])])],-1);const j={disable_code:!0},z={render:function(n,a){const p=s;return i(),r(p,{frontmatter:n.frontmatter},{default:e((()=>[V,q,F])),_:1},8,["frontmatter"])},data:()=>({frontmatter:j}),__hmrId:"C:/Users/yosec/OneDrive/Documentos/devilbox1/data/www/ezclub_front/documentation/plugins/filepond/v-filepond-props-documentation.md"},P={class:"page-content-inner"},x={class:"columns is-multiline"},D={key:0,class:"column is-3 toc-column"};var I=l({expose:[],setup(s){const a=c(null),p=b(a);return c(null),f.value="V-FilePond",u({title:"V-FilePond - Addons - Vuero"}),(s,t)=>{const e=n,m=_,l=z,c=g;return i(),r("div",P,[o(e,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"Addons"},{label:"V-FilePond",to:{name:"elements-addons-filepond"}}]}),o("div",x,[o("div",{ref:a,class:[[k(p).length>0?"is-9":"is-12"],"column doc-column"]},[o(m),o(l)],2),k(p).length?(i(),r("div",D,[o(c,{toc:k(p)},null,8,["toc"])])):d("v-if",!0)])])}}});export default I;
