import{_ as a}from"./V-SimpleDatatables.vue_vue&type=script&setup=true&lang.bec61e9a.js";import{d as e,h as s,i as r,F as t}from"./vendor.4454b83d.js";const n={perPageSelect:[5,10,20,25,50,100],perPage:10,columns:[{select:0,hidden:!0},{select:1,render:function(a,e,s){return`\n          <div class="v-avatar">\n              <img class="avatar" src="${a}" alt="">\n          </div>\n      `},sortable:!1},{select:2,render:function(a,e,s){return`<span class="has-dark-text dark-inverted is-font-alt is-weight-600 rem-90">${a}</span>`}},{select:3,render:function(a,e,s){return`<span class="light-text">${a}</span>`}},{select:4,render:function(a,e,s){return`\n          <div class="status is-${a}">\n              <i aria-hidden="true" class="fas fa-circle"></i>\n              <span class="is-capitalize">${a}</span>\n          </div>\n      `}},{select:5,render:function(a,e,s){return`<div class="has-text-right"><button class="button v-button is-dark-outlined" data-row="${s.dataIndex}">Manage</button></div>`},sortable:!1}],data:{headings:["ID","Picture","Name","Position","Status","Actions"],data:[[0,"/demo/avatars/8.jpg","Erik Kovalsky","Product Manager","busy",!0],[1,"/demo/avatars/7.jpg","Alice Carasca","Software Engineer","offline",!0],[2,"/demo/avatars/13.jpg","Tara Svenson","UI/UX Designer","offline",!0],[3,"/demo/avatars/5.jpg","Mary Lebowski","Project Manager","available",!0],[4,"/images/avatars/placeholder-f.jpg","Kaylee Jennings","Web Developer","available",!0],[5,"/demo/avatars/27.jpg","Carmen Escudero","HR Manager","offline",!0],[6,"/demo/avatars/22.jpg","Dwayne Hicks","Product Manager","offline",!0],[7,"/images/avatars/placeholder-m.jpg","Paul Morris","Backend Developer","available",!0],[8,"/demo/avatars/23.jpg","Irina Vierbovsky","Project Manager","available",!0],[9,"/demo/avatars/28.jpg","Edouard Falant","Web Developer","busy",!0],[10,"/images/avatars/placeholder-f.jpg","Shana Williams","Sales Manager","offline",!0],[11,"/images/avatars/placeholder-m.jpg","Benjamin Hoffman","Product Manager","offline",!0],[12,"/demo/avatars/39.jpg","Alejandro Badajoz","Web Developer","busy",!0],[13,"/demo/avatars/21.jpg","Elizabeth Fisher","Mobile Developer","available",!0],[14,"/demo/avatars/37.jpg","Helmut Fritz","Product Manager","available",!0],[15,"/demo/avatars/31.jpg","Yasseen Amzi","Business Analyst","offline",!0]]}};var i=e({expose:[],setup:e=>(e,i)=>{const o=a;return s(),r(o,{options:t(n)},null,8,["options"])}});export{i as _};