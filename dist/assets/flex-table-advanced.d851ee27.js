import{_ as s,a as n}from"./DocumentationItem.4f91f0e5.js";import{o as a,h as p,j as t,k as i,E as r,d as m,L as e,D as l}from"./vendor.ce9b165f.js";import{_ as o}from"./V-Control.0057af57.js";import{_ as c}from"./V-Field.vue_vue&type=script&setup=true&lang.03c5873e.js";import{_ as u}from"./V-FlexTableRowMedia.vue_vue&type=script&setup=true&lang.6fe4a274.js";import{_ as k}from"./V-FlexTable.vue_vue&type=script&setup=true&lang.07db7c5f.js";import{_ as b}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.bbf8373c.js";import{f as g}from"./table.112d64f4.js";import{p as d}from"./sidebarLayoutState.73320808.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.22d246c1.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.6997ebf4.js";import"./V-AvatarStack.vue_vue&type=script&setup=true&lang.68cf3670.js";import"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.17ae15d8.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.a9cbc0ec.js";import"./V-Dropdown.ea9ea7d8.js";import"./useDropdown.8fc6e73f.js";const v=i("h3",{id:"advanced-table",tabindex:"-1"},"Advanced table",-1),f=i("p",null,[r("Vuero provides a custom table component called "),i("code",null,"<V-FlexTable />"),r(". It looks like a table but is not an Html5 table. Instead, it uses the flexbox technology and is fully responsive. Check the markup for more details about usage.")],-1),x=i("div",{class:"language-vue line-numbers-mode"},[i("pre",null,[i("code",null,[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("script")]),r(),i("span",{class:"prism--token prism--attr-name"},"setup"),r(),i("span",{class:"prism--token prism--attr-name"},"lang"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("ts"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),i("span",{class:"prism--token prism--script"},[i("span",{class:"prism--token prism--language-javascript"},[r("\n"),i("span",{class:"prism--token prism--keyword"},"const"),r(" data "),i("span",{class:"prism--token prism--operator"},"="),r(),i("span",{class:"prism--token prism--punctuation"},"["),r("\n  "),i("span",{class:"prism--token prism--punctuation"},"{"),r("\n    id"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--number"},"0"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    username"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'Erik K.'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    position"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'Product Manager'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    picture"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'/demo/avatars/8.jpg'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    badge"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'/images/icons/flags/united-states-of-america.svg'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    location"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'Las Vegas, NV'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    industry"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'Software'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    status"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'Active'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n    contacts"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--punctuation"},"["),r("\n      "),i("span",{class:"prism--token prism--punctuation"},"{"),r("\n        id"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--number"},"0"),i("span",{class:"prism--token prism--punctuation"},","),r("\n        picture"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'/demo/avatars/25.jpg'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n        initials"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'AC'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n        color"),i("span",{class:"prism--token prism--operator"},":"),r(),i("span",{class:"prism--token prism--string"},"'info'"),i("span",{class:"prism--token prism--punctuation"},","),r("\n      "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),r("\n      "),i("span",{class:"prism--token prism--comment"},"// and more contacts ..."),r("\n    "),i("span",{class:"prism--token prism--punctuation"},"]"),i("span",{class:"prism--token prism--punctuation"},","),r("\n  "),i("span",{class:"prism--token prism--punctuation"},"}"),i("span",{class:"prism--token prism--punctuation"},","),r("\n  "),i("span",{class:"prism--token prism--comment"},"// and more data ..."),r("\n"),i("span",{class:"prism--token prism--punctuation"},"]"),r("\n")])]),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("script")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("div")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("flex-table-wrapper mt-4"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n    "),i("span",{class:"prism--token prism--comment"},"\x3c!--Custom table toolbar--\x3e"),r("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("div")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("flex-table-toolbar"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("div")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("left"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-Field")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-Control")]),r(),i("span",{class:"prism--token prism--attr-name"},"icon"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("feather:search"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n            "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("input")]),r("\n              "),i("span",{class:"prism--token prism--attr-name"},"type"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("text"),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n              "),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("input is-rounded"),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n              "),i("span",{class:"prism--token prism--attr-name"},"placeholder"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("Filter..."),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n            "),i("span",{class:"prism--token prism--punctuation"},"/>")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("V-Field")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("div")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("div")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("right"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-Field")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n            "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("div")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("select is-rounded"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n              "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("select")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n                "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("option")]),r(),i("span",{class:"prism--token prism--attr-name"},"selected"),i("span",{class:"prism--token prism--punctuation"},">")]),r("10 results per page"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n                "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("25 results per page"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n                "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("50 results per page"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n                "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("100 results per page"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("option")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n              "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("select")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n            "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("div")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("V-Control")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("V-Field")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("div")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("div")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n\n    "),i("span",{class:"prism--token prism--comment"},"\x3c!--V-FlexTable--\x3e"),r("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-FlexTable")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("template")]),r(),i("span",{class:"prism--token prism--attr-name"},"#header"),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("div")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("flex-table-header"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("span")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("is-grow"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("User"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("Location"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("Industry"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("Status"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("Relations"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n          "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("span")]),r(),i("span",{class:"prism--token prism--attr-name"},"class"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("cell-end"),i("span",{class:"prism--token prism--punctuation"},'"')]),i("span",{class:"prism--token prism--punctuation"},">")]),r("Actions"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("span")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("div")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("template")]),r(),i("span",{class:"prism--token prism--attr-name"},"#body"),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n        "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-FlexTableRowMedia")]),r(),i("span",{class:"prism--token prism--attr-name"},":rows"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("data"),i("span",{class:"prism--token prism--punctuation"},'"')]),r(),i("span",{class:"prism--token prism--punctuation"},"/>")]),r("\n      "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("V-FlexTable")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n\n    "),i("span",{class:"prism--token prism--comment"},"\x3c!--Table Pagination--\x3e"),r("\n    "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"<"),r("V-FlexPagination")]),r("\n      "),i("span",{class:"prism--token prism--attr-name"},":item-per-page"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("10"),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n      "),i("span",{class:"prism--token prism--attr-name"},":total-items"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("873"),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n      "),i("span",{class:"prism--token prism--attr-name"},":current-page"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("42"),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n      "),i("span",{class:"prism--token prism--attr-name"},":max-links-displayed"),i("span",{class:"prism--token prism--attr-value"},[i("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),i("span",{class:"prism--token prism--punctuation"},'"'),r("5"),i("span",{class:"prism--token prism--punctuation"},'"')]),r("\n    "),i("span",{class:"prism--token prism--punctuation"},"/>")]),r("\n  "),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("div")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n"),i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--tag"},[i("span",{class:"prism--token prism--punctuation"},"</"),r("template")]),i("span",{class:"prism--token prism--punctuation"},">")]),r("\n")])]),i("div",{class:"line-numbers-wrapper"},[i("span",{class:"line-number"},"1"),i("br"),i("span",{class:"line-number"},"2"),i("br"),i("span",{class:"line-number"},"3"),i("br"),i("span",{class:"line-number"},"4"),i("br"),i("span",{class:"line-number"},"5"),i("br"),i("span",{class:"line-number"},"6"),i("br"),i("span",{class:"line-number"},"7"),i("br"),i("span",{class:"line-number"},"8"),i("br"),i("span",{class:"line-number"},"9"),i("br"),i("span",{class:"line-number"},"10"),i("br"),i("span",{class:"line-number"},"11"),i("br"),i("span",{class:"line-number"},"12"),i("br"),i("span",{class:"line-number"},"13"),i("br"),i("span",{class:"line-number"},"14"),i("br"),i("span",{class:"line-number"},"15"),i("br"),i("span",{class:"line-number"},"16"),i("br"),i("span",{class:"line-number"},"17"),i("br"),i("span",{class:"line-number"},"18"),i("br"),i("span",{class:"line-number"},"19"),i("br"),i("span",{class:"line-number"},"20"),i("br"),i("span",{class:"line-number"},"21"),i("br"),i("span",{class:"line-number"},"22"),i("br"),i("span",{class:"line-number"},"23"),i("br"),i("span",{class:"line-number"},"24"),i("br"),i("span",{class:"line-number"},"25"),i("br"),i("span",{class:"line-number"},"26"),i("br"),i("span",{class:"line-number"},"27"),i("br"),i("span",{class:"line-number"},"28"),i("br"),i("span",{class:"line-number"},"29"),i("br"),i("span",{class:"line-number"},"30"),i("br"),i("span",{class:"line-number"},"31"),i("br"),i("span",{class:"line-number"},"32"),i("br"),i("span",{class:"line-number"},"33"),i("br"),i("span",{class:"line-number"},"34"),i("br"),i("span",{class:"line-number"},"35"),i("br"),i("span",{class:"line-number"},"36"),i("br"),i("span",{class:"line-number"},"37"),i("br"),i("span",{class:"line-number"},"38"),i("br"),i("span",{class:"line-number"},"39"),i("br"),i("span",{class:"line-number"},"40"),i("br"),i("span",{class:"line-number"},"41"),i("br"),i("span",{class:"line-number"},"42"),i("br"),i("span",{class:"line-number"},"43"),i("br"),i("span",{class:"line-number"},"44"),i("br"),i("span",{class:"line-number"},"45"),i("br"),i("span",{class:"line-number"},"46"),i("br"),i("span",{class:"line-number"},"47"),i("br"),i("span",{class:"line-number"},"48"),i("br"),i("span",{class:"line-number"},"49"),i("br"),i("span",{class:"line-number"},"50"),i("br"),i("span",{class:"line-number"},"51"),i("br"),i("span",{class:"line-number"},"52"),i("br"),i("span",{class:"line-number"},"53"),i("br"),i("span",{class:"line-number"},"54"),i("br"),i("span",{class:"line-number"},"55"),i("br"),i("span",{class:"line-number"},"56"),i("br"),i("span",{class:"line-number"},"57"),i("br"),i("span",{class:"line-number"},"58"),i("br"),i("span",{class:"line-number"},"59"),i("br"),i("span",{class:"line-number"},"60"),i("br"),i("span",{class:"line-number"},"61"),i("br"),i("span",{class:"line-number"},"62"),i("br"),i("span",{class:"line-number"},"63"),i("br"),i("span",{class:"line-number"},"64"),i("br"),i("span",{class:"line-number"},"65"),i("br"),i("span",{class:"line-number"},"66"),i("br"),i("span",{class:"line-number"},"67"),i("br"),i("span",{class:"line-number"},"68"),i("br"),i("span",{class:"line-number"},"69"),i("br"),i("span",{class:"line-number"},"70"),i("br"),i("span",{class:"line-number"},"71"),i("br"),i("span",{class:"line-number"},"72"),i("br"),i("span",{class:"line-number"},"73"),i("br"),i("span",{class:"line-number"},"74"),i("br"),i("span",{class:"line-number"},"75"),i("br"),i("span",{class:"line-number"},"76"),i("br"),i("span",{class:"line-number"},"77"),i("br"),i("span",{class:"line-number"},"78"),i("br"),i("span",{class:"line-number"},"79"),i("br"),i("span",{class:"line-number"},"80"),i("br"),i("span",{class:"line-number"},"81"),i("br"),i("span",{class:"line-number"},"82"),i("br"),i("span",{class:"line-number"},"83"),i("br")])],-1);const V={},h={render:function(n,i){const r=s;return a(),p(r,{frontmatter:n.frontmatter},{code:t((()=>[x])),default:t((()=>[v,f])),_:1},8,["frontmatter"])},data:()=>({frontmatter:V})},y={class:"page-content-inner"},_={class:"columns"},j={class:"column is-12"},F={class:"flex-table-wrapper mt-4"},q={class:"flex-table-toolbar"},w={class:"left"},T=i("input",{type:"text",class:"input is-rounded",placeholder:"Filter..."},null,-1),A={class:"right"},C=i("div",{class:"select is-rounded"},[i("select",null,[i("option",{selected:""},"10 results per page"),i("option",null,"25 results per page"),i("option",null,"50 results per page"),i("option",null,"100 results per page")])],-1),I=i("div",{class:"flex-table-header"},[i("span",{class:"is-grow"},"User"),i("span",null,"Location"),i("span",null,"Industry"),i("span",null,"Status"),i("span",null,"Relations"),i("span",{class:"cell-end"},"Actions")],-1);var L=m({expose:[],setup:s=>(d.value="V-FlexTable (Advanced)",e({title:"V-FlexTable Advanced - Components - Vuero"}),(s,r)=>{const m=n,e=h,d=o,v=c,f=u,x=k,V=b;return a(),p("div",y,[i(m,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Components",to:{name:"components"}},{label:"V-FlexTable",to:{name:"components-flex-table"}},{label:"Advanced",to:{name:"components-flex-table-advanced"}}]}),i("div",_,[i("div",j,[i(e),i("div",F,[i("div",q,[i("div",w,[i(v,null,{default:t((()=>[i(d,{icon:"feather:search"},{default:t((()=>[T])),_:1})])),_:1})]),i("div",A,[i(v,null,{default:t((()=>[i(d,null,{default:t((()=>[C])),_:1})])),_:1})])]),i(x,null,{header:t((()=>[I])),body:t((()=>[i(f,{rows:l(g)},null,8,["rows"])])),_:1})]),i(V,{"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})])])])})});export default L;
