import{d as s,a9 as a,b as r,i as n,j as e,l as t,I as i,L as o,F as l,S as d}from"./vendor.84e48f7c.js";const c={class:"navbar-navbar-inner"},p={class:"left"},v=t("h1",{class:"title is-5"},"Page Title",-1),u={class:"center"},h=t("div",{class:"centered-links"},[t("a",{href:"/",class:"centered-link centered-link-toggle"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"}),t("span",null,"Homepage")])],-1),f={class:"right"};var g=s({expose:[],props:{theme:{type:String,default:"default"}},setup(s){const g=s,{y:b}=a(),m=r((()=>b.value>30));return(s,a)=>(n(),e(d,null,[t("div",{class:["navbar-navbar",[l(m)&&"is-scrolled","fade"===g.theme&&"is-transparent","colored"===g.theme&&"is-colored"]]},[t("div",c,[t("div",p,[i(" Title slot "),o(s.$slots,"title",{},(()=>[v]))]),t("div",u,[i(" Links slot "),o(s.$slots,"links",{},(()=>[h,i(' \r\n          Dropdown default links\r\n          <div class="centered-drops">\r\n            <div class="centered-drop">\r\n              <div\r\n                class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown"\r\n              >\r\n                <div class="is-trigger">\r\n                  <a\r\n                    href="/"\r\n                    class="button v-button is-rounded"\r\n                    aria-haspopup="true"\r\n                    aria-controls="dropdown-menu"\r\n                  >\r\n                    <span>Homepage</span>\r\n                    <span class="caret">\r\n                      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-down"></i>\r\n                    </span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> \r\n          ')]))]),t("div",f,[i(" Toolbar slot "),o(s.$slots,"toolbar")])])],2),i(" Subnav slot "),o(s.$slots,"subnav")],64))}});export{g as _};
