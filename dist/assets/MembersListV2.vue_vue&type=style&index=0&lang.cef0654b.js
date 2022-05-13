import{_ as e}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.719e3119.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.e9f9f5bb.js";import{_ as t}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.ab50d14b.js";import{_ as s}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.46f12233.js";import{_ as r}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.5b314dad.js";import{d as i,L as n,a4 as l,r as m,b as o,w as c,h as u,o as p,i as d,k as f,D as g,j as b,aa as v,G as h,Q as y,R as _,E as k,F as x,z as j}from"./vendor.0b0c2a98.js";import{_ as C,a as w}from"./search-4-dark.fb3880a5.js";import{b as P}from"./index.6309fa0f.js";import{C as D}from"./Members.702ef5a5.js";const S={class:"page-content-inner"},$={class:"tile-grid tile-grid-v1"},M=f("img",{class:"light-image",src:C,alt:""},null,-1),z=f("img",{class:"dark-image",src:w,alt:""},null,-1),A={class:"\r\n                  tile-grid-item-inner\r\n                  justify-content-between\r\n                  align-items-start\r\n                "},E={class:"d-flex"},I={class:"\r\n                      flex-column\r\n                      d-flex\r\n                      justify-content-center\r\n                      align-item-center\r\n                    "},V={class:"meta ml-2"},F={class:"p-3"},L={key:0},R={key:1},T={style:{"font-color":"grey"}},q={class:"flex-column d-flex"},G={class:"d-flex justify-content-between"};var H=i({expose:[],props:{members:{type:Array,required:!0},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String}},emits:["filterChange","onSearch"],setup(i,{emit:C}){const w=i;n(),l(),m(""),m("all"),m({});const H=o((()=>w.filters?w.members.filter((e=>e.name.match(new RegExp(w.filters,"i"))||e.last_name.match(new RegExp(w.filters,"i"))||e.id==w.filters||e.phone==w.filters||e.personal_identifications==w.filters)):w.members));c((()=>H.value),(e=>{})),m({status:!1,member:null});const O=(e,a)=>e.substr(0,1)+a.substr(0,1);c((()=>w.members),(()=>{}));const Q=m([]);return c((()=>Q.value),(e=>{0!=e.length?(D.value=[],H.value.forEach((e=>{D.value.push(e.id)}))):D.value=[]})),(i,n)=>{var l,m;const o=e,c=a,C=u("router-link"),D=t,Q=s,W=r;return p(),d("div",null,[f("div",S,[f("div",$,[f(o,{class:[0!==g(H).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:b((()=>[M,z])),_:1},8,["class"]),f(v,{name:"list",tag:"div",class:"columns is-multiline"},{default:b((()=>[h("Grid item"),(p(!0),d(y,null,_(g(H),(e=>(p(),d("div",{key:`${w.name}-${e.id}`,class:"column is-4"},[f("div",{onClick:e=>{},class:["tile-grid-item",e.isSolvente?"":"bg-danger"]},[f("div",A,[f("div",E,[f("div",I,[f(c,{picture:`${g(P)}storage/${e.photo}`,color:"primary",initials:O(e.name,e.last_name),size:"medium"},null,8,["picture","initials"])]),f("div",null,[f("div",V,[f("span",null,[f(C,{to:{name:"members-profile",query:{id:e.id}},style:{color:"white"}},{default:b((()=>[k(x(e.name)+" "+x(e.second_name)+" "+x(e.last_name),1)])),_:2},1032,["to"])])]),f("div",F,[e.membership_members?(p(),d("span",L,[f("p",null,x(e.membership_members.membership.name),1)])):h("v-if",!0),"checkin"==w.name?(p(),d("span",R,[f("p",T," Check In: "+x(g(j)(e.timecheckin).format("HH:MM:SS")),1)])):h("v-if",!0)])])]),f("div",q,[f(D,{"id-member":e.id,member:e},null,8,["id-member","member"])])]),f("div",G,[f("span",{class:["tag is-rounded py-0 d-flex align-items-center mt-3",null!=e.membership_members?"is-success":""],style:{"font-size":"10px"}},x(null!=e.membership_members?"Active":"Inactive"),3),f("span",null,[e.trainer?(p(),d(Q,{key:0,avatars:[{id:e.trainer.id,picture:`${g(P)}storage/${e.trainer.photo}`,initials:O(e.trainer.name,e.trainer.last_name),color:"info"}],size:"small"},null,8,["avatars"])):h("v-if",!0)])])],10,["onClick"])])))),128))])),_:1}),h("Table Pagination"),g(H).length>0?(p(),d(W,{key:0,"item-per-page":null!=(l=w.paginationData.per_page)?l:15,"total-items":null!=(m=w.paginationData.total)?m:0,"current-page":w.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):h("v-if",!0)])]),h(' <sidebar-member\r\n      :status="memberCard.status"\r\n      :member="memberCard.member"\r\n      @closeMemberCard="closeMemberCard"\r\n    /> ')])}}});export{H as _};
