import{d as s,a5 as a,c as n,o as e,i as t,k as i,G as r,K as o,D as d,Q as l}from"./vendor.512b7acb.js";const c={class:"navbar-navbar-inner"},p={class:"left"},v=i("h1",{class:"title is-5"},"Page Title",-1),u={class:"center"},h=i("div",{class:"centered-links"},[i("a",{href:"/",class:"centered-link centered-link-toggle"},[i("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"}),i("span",null,"Homepage")])],-1),b={class:"right"};var f=s({expose:[],props:{theme:{type:String,default:"default"}},setup(s){const f=s,{y:g}=a(),m=n((()=>g.value>30));return(s,a)=>(e(),t(l,null,[i("div",{class:["navbar-navbar",[d(m)&&"is-scrolled","fade"===f.theme&&"is-transparent","colored"===f.theme&&"is-colored"]]},[i("div",c,[i("div",p,[r(" Title slot "),o(s.$slots,"title",{},(()=>[v]))]),i("div",u,[r(" Links slot "),o(s.$slots,"links",{},(()=>[h,r(' \n          Dropdown default links\n          <div class="centered-drops">\n            <div class="centered-drop">\n              <div\n                class="dropdown is-modern is-spaced dropdown-trigger has-mega-dropdown"\n              >\n                <div class="is-trigger">\n                  <a\n                    href="/"\n                    class="button v-button is-rounded"\n                    aria-haspopup="true"\n                    aria-controls="dropdown-menu"\n                  >\n                    <span>Homepage</span>\n                    <span class="caret">\n                      <i aria-hidden="true" class="iconify" data-icon="feather:chevron-down"></i>\n                    </span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div> \n          ')]))]),i("div",b,[r(" Toolbar slot "),o(s.$slots,"toolbar")])])],2),r(" Subnav slot "),o(s.$slots,"subnav")],64))}});export{f as _};
