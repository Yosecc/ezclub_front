import{d as s,ai as a,b as n,o as e,i,k as t,G as r,K as o,D as d,Q as l}from"./vendor.0b0c2a98.js";const c={class:"navbar-navbar-inner"},p={class:"left"},v=t("h1",{class:"title is-5"},"Page Title",-1),u={class:"center"},h=t("div",{class:"centered-links"},[t("a",{href:"/",class:"centered-link centered-link-toggle"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"}),t("span",null,"Homepage")])],-1),b={class:"right"};var f=s({expose:[],props:{theme:{type:String,default:"default"}},setup(s){const f=s,{y:g}=a(),m=n((()=>g.value>30));return(s,a)=>(e(),i(l,null,[t("div",{class:["navbar-navbar",[d(m)&&"is-scrolled","fade"===f.theme&&"is-transparent","colored"===f.theme&&"is-colored"]]},[t("div",c,[t("div",p,[r(" Title slot "),o(s.$slots,"title",{},(()=>[v]))]),t("div",u,[r(" Links slot "),o(s.$slots,"links",{},(()=>[h,r(' \n          Dropdown default links\n          <div class="centered-drops">\n            <div class="centered-drop">\n              <div\n                class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown"\n              >\n                <div class="is-trigger">\n                  <a\n                    href="/"\n                    class="button v-button is-rounded"\n                    aria-haspopup="true"\n                    aria-controls="dropdown-menu"\n                  >\n                    <span>Homepage</span>\n                    <span class="caret">\n                      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-down"></i>\n                    </span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div> \n          ')]))]),t("div",b,[r(" Toolbar slot "),o(s.$slots,"toolbar")])])],2),r(" Subnav slot "),o(s.$slots,"subnav")],64))}});export{f as _};
