import{_ as e}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.e662762e.js";import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.5b875dd1.js";import{_ as s}from"./V-Checkbox.vue_vue&type=script&setup=true&lang.9e628ea0.js";import{_ as t}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.f0ca3e30.js";import{_ as l}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.dac939a6.js";import{_ as i}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.cce79e4a.js";import{d as r,r as n,b as m,w as u,o,h as c,k as p,D as d,j as g,aa as v,J as f,O as b,a4 as y,i as h,Q as _,R as k,E as j,F as x,z as P,P as V}from"./vendor.7d033f41.js";import{_ as D,a as w}from"./search-4-dark.12f0bf0d.js";import{b as C}from"./index.7194d1c1.js";import{N as S,K as z,j as A}from"./Members.a9561772.js";const I={class:"page-content-inner"},$={class:"tile-grid tile-grid-v1"},F=p("img",{class:"light-image",src:D,alt:""},null,-1),q=p("img",{class:"dark-image",src:w,alt:""},null,-1),E={class:"\n                  tile-grid-item-inner\n                  justify-content-between\n                  align-items-start\n                "},L={class:"d-flex"},O={class:"\n                      flex-column\n                      d-flex\n                      justify-content-center\n                      align-item-center\n                    "},T={class:"meta ml-2"},H={class:"p-3"},J={key:0},K={key:1},M={style:{"font-color":"grey"}},N={class:"align-items-center d-flex"},Q={class:"d-flex justify-content-between"};var R=r({expose:[],props:{members:{type:Array,required:!0},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String}},emits:["filterChange","onSearch"],setup(r,{emit:D}){const w=r;b(),y(),n(""),n("all"),n({});const R=m((()=>w.members));u((()=>R.value),(e=>{})),n({status:!1,member:null});u((()=>w.members),(()=>{}));const U=n([]);return u((()=>U.value),(e=>{0!=e.length?(z.value=[],R.value.forEach((e=>{z.value.push(e.id)}))):z.value=[]})),(r,n)=>{var m,u;const b=e,y=a,D=h("router-link"),U=s,W=t,B=l,G=i;return o(),c("div",null,[p("div",I,[p("div",$,[p(b,{class:[0!==d(R).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:g((()=>[F,q])),_:1},8,["class"]),p(v,{name:"list",tag:"div",class:"columns is-multiline"},{default:g((()=>[(o(!0),c(_,null,k(d(R),(e=>(o(),c("div",{key:`${w.name}-${e.id}`,class:"column is-4"},[p("div",{onClick:e=>{},class:["tile-grid-item",e.isSolvente?"":"bg-danger"]},[p("div",E,[p("div",L,[p("div",O,[p(y,{picture:`${d(C)}storage/${e.photo}`,color:"primary",initials:d(S)(e.name,e.last_name),size:"medium"},null,8,["picture","initials"])]),p("div",null,[p("div",T,[p("span",null,[p(D,{to:{name:"members-profile",query:{id:e.id}},style:{color:"white"}},{default:g((()=>[j(x(e.name)+" "+x(e.second_name)+" "+x(e.last_name),1)])),_:2},1032,["to"])])]),p("div",H,[e.membership_members?(o(),c("span",J,[p("p",null,x(e.membership_members.membership.name),1)])):f("",!0),"checkin"==w.name?(o(),c("span",K,[p("p",M," Check In: "+x(d(P)(e.timecheckin).format("H:m:s")),1)])):f("",!0)])])]),p("div",N,[p(U,{class:"p-0",modelValue:d(z),"onUpdate:modelValue":n[1]||(n[1]=e=>V(z)?z.value=e:null),color:"primary",label:" ",value:e.id},null,8,["modelValue","value"]),p(W,{"id-member":e.id,member:e},null,8,["id-member","member"])])]),p("div",Q,[p("span",{class:["tag is-rounded py-0 d-flex align-items-center mt-3",null!=e.membership_members?"is-success":""],style:{"font-size":"10px"}},x(null!=e.membership_members?"Active":"Inactive"),3),p("span",null,[e.trainers?(o(),c(B,{key:0,avatars:d(A)(e.trainers),size:"small"},null,8,["avatars"])):f("",!0)])])],10,["onClick"])])))),128))])),_:1}),d(R).length>0?(o(),c(G,{key:0,"item-per-page":null!=(m=w.paginationData.per_page)?m:15,"total-items":null!=(u=w.paginationData.total)?u:0,"current-page":w.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):f("",!0)])])])}}});export{R as _};
