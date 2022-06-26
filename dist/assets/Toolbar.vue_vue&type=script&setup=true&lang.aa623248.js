import{d as n,e as r,r as a,b as s,o as e,i,k as t,E as l,H as o}from"./vendor.073d5183.js";import{i as c}from"./darkModeState.1faec688.js";import{u as d}from"./useDropdown.c13972ea.js";const p={class:"toolbar ml-auto"},g={class:"toolbar-link"},v={class:"dark-mode ml-auto"},m=t("span",null,null,-1);var u=n({expose:[],setup(n){const{locale:u}=r(),f=a(null);return d(f),s((()=>{switch(u.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";case"en":default:return"/images/icons/flags/united-states-of-america.svg"}})),(n,r)=>(e(),i("div",p,[t("div",g,[t("label",v,[t("input",{type:"checkbox",checked:!l(c),onChange:r[1]||(r[1]=n=>{c.value=!n.target.checked})},null,40,["checked"]),m])]),o('  <a\r\n      class="toolbar-link right-panel-trigger"\r\n      @click="activePanel = \'languages\'"\r\n    >\r\n      <img :src="localFlagSrc" alt="" />\r\n    </a> '),o(' <div class="toolbar-notifications is-hidden-mobile">\r\n      <div\r\n        ref="dropdownElement"\r\n        class="dropdown is-spaced is-dots is-right dropdown-trigger"\r\n      >\r\n        <div class="is-trigger" aria-haspopup="true" @click="dropdown.toggle">\r\n          <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>\r\n          <span class="new-indicator pulsate"></span>\r\n        </div>\r\n        <div class="dropdown-menu" role="menu">\r\n          <div class="dropdown-content">\r\n            <div class="heading">\r\n              <div class="heading-left">\r\n                <h6 class="heading-title">Notifications</h6>\r\n              </div>\r\n              <div class="heading-right">\r\n                <RouterLink\r\n                  class="notification-link"\r\n                  :to="{ name: \'sidebar-layouts-profile-notifications\' }"\r\n                >\r\n                  See all\r\n                </RouterLink>\r\n              </div>\r\n            </div>\r\n            <ul class="notification-list">\r\n              <li>\r\n                <a class="notification-item">\r\n                  <div class="img-left">\r\n                    <img\r\n                      class="user-photo"\r\n                      alt=""\r\n                      src="/demo/avatars/7.jpg"\r\n                      @error.once="\r\n                        $event.target.src =\r\n                          \'https://via.placeholder.com/150x150\'\r\n                      "\r\n                    />\r\n                  </div>\r\n                  <div class="user-content">\r\n                    <p class="user-info">\r\n                      <span class="name">Alice C.</span> left a comment.\r\n                    </p>\r\n                    <p class="time">1 hour ago</p>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class="notification-item">\r\n                  <div class="img-left">\r\n                    <img\r\n                      class="user-photo"\r\n                      alt=""\r\n                      src="/demo/avatars/12.jpg"\r\n                      @error.once="\r\n                        $event.target.src =\r\n                          \'https://via.placeholder.com/150x150\'\r\n                      "\r\n                    />\r\n                  </div>\r\n                  <div class="user-content">\r\n                    <p class="user-info">\r\n                      <span class="name">Joshua S.</span> uploaded a file.\r\n                    </p>\r\n                    <p class="time">2 hours ago</p>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class="notification-item">\r\n                  <div class="img-left">\r\n                    <img\r\n                      class="user-photo"\r\n                      alt=""\r\n                      src="/demo/avatars/13.jpg"\r\n                      @error.once="\r\n                        $event.target.src =\r\n                          \'https://via.placeholder.com/150x150\'\r\n                      "\r\n                    />\r\n                  </div>\r\n                  <div class="user-content">\r\n                    <p class="user-info">\r\n                      <span class="name">Tara S.</span> sent you a message.\r\n                    </p>\r\n                    <p class="time">2 hours ago</p>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n              <li>\r\n                <a class="notification-item">\r\n                  <div class="img-left">\r\n                    <img\r\n                      class="user-photo"\r\n                      alt=""\r\n                      src="/demo/avatars/25.jpg"\r\n                      @error.once="\r\n                        $event.target.src =\r\n                          \'https://via.placeholder.com/150x150\'\r\n                      "\r\n                    />\r\n                  </div>\r\n                  <div class="user-content">\r\n                    <p class="user-info">\r\n                      <span class="name">Melany W.</span> left a comment.\r\n                    </p>\r\n                    <p class="time">3 hours ago</p>\r\n                  </div>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> '),o(' <a\r\n      class="toolbar-link right-panel-trigger"\r\n      @click="activePanel = \'activity\'"\r\n    >\r\n      <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>\r\n    </a> ')]))}});export{u as _};
