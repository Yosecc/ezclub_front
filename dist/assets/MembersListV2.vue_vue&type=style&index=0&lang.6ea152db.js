import{_ as e}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.708d2bbe.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.c944fe72.js";import{_ as a}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.e70bcb47.js";import{_ as t}from"./V-Tag.vue_vue&type=script&setup=true&lang.f6fa589e.js";import{_ as r}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.b8ea62c3.js";import{_ as i}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.47e5d9a4.js";import{d as l,r as n,b as m,w as c,h as o,i as u,l as p,F as d,k as b,ad as v,K as g,P as _,ac as f,j as h,R as y,S as k,G as j,H as x,B as D}from"./vendor.3e3390b7.js";import{_ as Y,a as $}from"./search-4-dark.12f0bf0d.js";import{b as M}from"./index.d3d0c1c2.js";import{a1 as P,n as w,_ as C}from"./Members.f02fed6d.js";const S={class:"page-content-inner"},V={class:"tile-grid tile-grid-v1"},A=p("img",{class:"light-image",src:Y,alt:""},null,-1),F=p("img",{class:"dark-image",src:$,alt:""},null,-1),I={class:"\r\n                  tile-grid-item-inner\r\n                  justify-content-between\r\n                  align-items-start\r\n                "},L={class:"d-flex"},T={class:"\r\n                      flex-column\r\n                      d-flex\r\n                      justify-content-center\r\n                      align-item-center\r\n                    "},q={class:"meta ml-2"},z={class:"p-3"},E={key:0},H={key:1},O={style:{"font-color":"grey"}},B={class:"align-items-center d-flex"},G={class:"d-flex justify-content-between mt-3"},K={class:"d-flex align-items-center"},R={class:"mr-1"},W={key:2,class:"mr-1"},J={class:"d-flex align-items-center"},N={key:1,class:"mr-1"},Q={key:2,class:"mr-3"};var U=l({expose:[],props:{members:{type:Array,required:!0},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String}},emits:["filterChange","onSearch"],setup(l,{emit:Y}){const $=l;_(),f(),n(""),n("all"),n({});const U=m((()=>$.members));c((()=>U.value),(e=>{})),n({status:!1,member:null});c((()=>$.members),(()=>{}));const X=e=>{let s="";return e.subscription?(s=e.subscription.subscription&&"active"==e.subscription.subscription.status?"active":e.subscription.status,"active"==e.subscription.status||e.subscription.status,"canceled"==e.subscription.status&&D()<=D(e.membership_members.cacelation_date)&&(s="active")):e.sinMembresia&&(s=e.user&&e.user.pm_last_four?"nomembershipcontarjeta":"nomembership"),s},Z=n([]);return c((()=>Z.value),(e=>{0!=e.length?(C.value=[],U.value.forEach((e=>{C.value.push(e.id)}))):C.value=[]})),(l,n)=>{var m,c;const _=e,f=s,Y=h("router-link"),C=a,Z=t,ee=r,se=i;return o(),u("div",null,[p("div",S,[p("div",V,[p(_,{class:[0!==d(U).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:b((()=>[A,F])),_:1},8,["class"]),p(v,{name:"list",tag:"div",class:"columns is-multiline"},{default:b((()=>[(o(!0),u(y,null,k(d(U),(e=>(o(),u("div",{key:`${$.name}-${e.id}`,class:"column is-4"},[p("div",{onClick:e=>{},class:["tile-grid-item cardprofile",X(e)]},[p("div",I,[p("div",L,[p("div",T,[p(f,{picture:`${d(M)}storage/${e.photo}`,color:"primary",initials:d(P)(e.name,e.last_name),size:"medium"},null,8,["picture","initials"])]),p("div",null,[p("div",q,[p("span",null,[p(Y,{to:{name:"members-profile",query:{id:e.id}},style:{color:"white"}},{default:b((()=>[j(x(e.name)+" "+x(e.second_name)+" "+x(e.last_name),1)])),_:2},1032,["to"])])]),p("div",z,[e.membership_members?(o(),u("span",E,[p("p",null,x(e.membership_members.membership.name),1)])):g("",!0),"checkin"==$.name?(o(),u("span",H,[p("p",O," Check In: "+x(d(D)(e.timecheckin).format("MM-DD-YYYY H:m:s")),1)])):g("",!0)])])]),p("div",B,[e?(o(),u(C,{key:0,"id-member":e.id,member:e},null,8,["id-member","member"])):g("",!0)])]),p("div",G,[p("span",K,[p("div",R,[p(Z,{label:`${"sincard"==X(e)?"no_card":X(e)}`,class:"mr-1",color:""},null,8,["label"])]),e.membership_members&&2==e.membership_members.status?(o(),u(Z,{key:0,label:`Canceled ${d(D)(e.membership_members.cacelation_date).format("MM-DD-YYYY")}`,class:"mr-1",color:"danger"},null,8,["label"])):g("",!0),e.membership_members&&e.membership_members.schedules?(o(),u(Z,{key:1,label:`${d(D)(e.membership_members.schedules).format("MM-DD-YYYY")}`,class:"mr-1",color:""},null,8,["label"])):g("",!0),e.subscription&&e.subscription.subscription&&e.subscription.latest_invoice&&e.subscription.latest_invoice.payments_intents&&"due"==X(e)?(o(),u("div",W,[2!=e.membership_members.status&&e.subscription.latest_invoice&&e.subscription.latest_invoice.payments_intents.length?(o(),u(Z,{key:0,label:`${e.subscription.latest_invoice.payments_intents[0].status}`,class:"mr-1",color:"danger"},null,8,["label"])):g("",!0)])):g("",!0)]),p("span",J,[e.leo_vet_fr?(o(),u(Z,{key:0,label:"LEO",class:"mr-1",color:"green"})):g("",!0),null!=e.membership_members?(o(),u("div",N,[e.membership_members.discount?(o(),u(Z,{key:0,label:`-${e.membership_members.discount.value}%`,class:"",color:"orange"},null,8,["label"])):g("",!0)])):g("",!0),e.cards&&e.cards.length?(o(),u("div",Q,[null!=e.cards[0].last4?(o(),u(Z,{key:0,label:"Cards",class:"mr-1",color:"purple"})):g("",!0)])):g("",!0),e.trainers?(o(),u(ee,{key:3,avatars:d(w)(e.trainers),size:"small"},null,8,["avatars"])):g("",!0)])])],10,["onClick"])])))),128))])),_:1}),d(U).length>0?(o(),u(se,{key:0,"item-per-page":null!=(m=$.paginationData.per_page)?m:15,"total-items":null!=(c=$.paginationData.total)?c:0,"current-page":$.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):g("",!0)])])])}}});export{U as _};
