import{_ as e}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.24d82d1d.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import{_ as a}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.b4780617.js";import{_ as t}from"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import{_ as r}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.b3b15f6f.js";import{_ as i}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.6614a034.js";import{d as l,r as n,b as m,w as c,o,h as u,k as p,E as b,j as d,ab as v,K as g,P as _,aa as f,i as h,R as y,S as k,F as j,G as x,A as D}from"./vendor.41bfc188.js";import{_ as Y,a as $}from"./search-4-dark.12f0bf0d.js";import{b as M}from"./index.9f8836ae.js";import{a1 as P,n as w,_ as C}from"./Members.8f39a9af.js";const S={class:"page-content-inner"},V={class:"tile-grid tile-grid-v1"},A=p("img",{class:"light-image",src:Y,alt:""},null,-1),E=p("img",{class:"dark-image",src:$,alt:""},null,-1),F={class:"\n                  tile-grid-item-inner\n                  justify-content-between\n                  align-items-start\n                "},I={class:"d-flex"},L={class:"\n                      flex-column\n                      d-flex\n                      justify-content-center\n                      align-item-center\n                    "},T={class:"meta ml-2"},q={class:"p-3"},z={key:0},O={key:1},G={style:{"font-color":"grey"}},H={class:"align-items-center d-flex"},K={class:"d-flex justify-content-between mt-3"},R={class:"d-flex align-items-center"},W={class:"mr-1"},B={key:2,class:"mr-1"},J={class:"d-flex align-items-center"},N={key:1,class:"mr-1"},Q={key:2,class:"mr-3"};var U=l({expose:[],props:{members:{type:Array,required:!0},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String}},emits:["filterChange","onSearch"],setup(l,{emit:Y}){const $=l;_(),f(),n(""),n("all"),n({});const U=m((()=>$.members));c((()=>U.value),(e=>{})),n({status:!1,member:null});c((()=>$.members),(()=>{}));const X=e=>{let s="";return e.subscription?(s=e.subscription.subscription&&"active"==e.subscription.subscription.status?"active":e.subscription.status,"active"==e.subscription.status||e.subscription.status,"canceled"==e.subscription.status&&D()<=D(e.membership_members.cacelation_date)&&(s="active")):e.sinMembresia&&(s=e.user&&e.user.pm_last_four?"nomembershipcontarjeta":"nomembership"),s},Z=n([]);return c((()=>Z.value),(e=>{0!=e.length?(C.value=[],U.value.forEach((e=>{C.value.push(e.id)}))):C.value=[]})),(l,n)=>{var m,c;const _=e,f=s,Y=h("router-link"),C=a,Z=t,ee=r,se=i;return o(),u("div",null,[p("div",S,[p("div",V,[p(_,{class:[0!==b(U).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:d((()=>[A,E])),_:1},8,["class"]),p(v,{name:"list",tag:"div",class:"columns is-multiline"},{default:d((()=>[(o(!0),u(y,null,k(b(U),(e=>(o(),u("div",{key:`${$.name}-${e.id}`,class:"column is-4"},[p("div",{onClick:e=>{},class:["tile-grid-item cardprofile",X(e)]},[p("div",F,[p("div",I,[p("div",L,[p(f,{picture:`${b(M)}storage/${e.photo}`,color:"primary",initials:b(P)(e.name,e.last_name),size:"medium"},null,8,["picture","initials"])]),p("div",null,[p("div",T,[p("span",null,[p(Y,{to:{name:"members-profile",query:{id:e.id}},style:{color:"white"}},{default:d((()=>[j(x(e.name)+" "+x(e.second_name)+" "+x(e.last_name),1)])),_:2},1032,["to"])])]),p("div",q,[e.membership_members?(o(),u("span",z,[p("p",null,x(e.membership_members.membership.name),1)])):g("",!0),"checkin"==$.name?(o(),u("span",O,[p("p",G," Check In: "+x(b(D)(e.timecheckin).format("MM-DD-YYYY H:m:s")),1)])):g("",!0)])])]),p("div",H,[p(C,{"id-member":e.id,member:e},null,8,["id-member","member"])])]),p("div",K,[p("span",R,[p("div",W,[p(Z,{label:`${"sincard"==X(e)?"no_card":X(e)}`,class:"mr-1",color:""},null,8,["label"])]),e.membership_members&&2==e.membership_members.status?(o(),u(Z,{key:0,label:`Canceled ${b(D)(e.membership_members.cacelation_date).format("MM-DD-YYYY")}`,class:"mr-1",color:"danger"},null,8,["label"])):g("",!0),e.membership_members&&e.membership_members.schedules?(o(),u(Z,{key:1,label:`${b(D)(e.membership_members.schedules).format("MM-DD-YYYY")}`,class:"mr-1",color:""},null,8,["label"])):g("",!0),e.subscription&&e.subscription.subscription&&e.subscription.latest_invoice&&e.subscription.latest_invoice.payments_intents&&"due"==X(e)?(o(),u("div",B,[2!=e.membership_members.status&&e.subscription.latest_invoice&&e.subscription.latest_invoice.payments_intents.length?(o(),u(Z,{key:0,label:`${e.subscription.latest_invoice.payments_intents[0].status}`,class:"mr-1",color:"danger"},null,8,["label"])):g("",!0)])):g("",!0)]),p("span",J,[e.leo_vet_fr?(o(),u(Z,{key:0,label:"LEO",class:"mr-1",color:"green"})):g("",!0),null!=e.membership_members?(o(),u("div",N,[e.membership_members.discount?(o(),u(Z,{key:0,label:`-${e.membership_members.discount.value}%`,class:"",color:"orange"},null,8,["label"])):g("",!0)])):g("",!0),e.cards.length?(o(),u("div",Q,[null!=e.cards[0].last4?(o(),u(Z,{key:0,label:"Cards",class:"mr-1",color:"purple"})):g("",!0)])):g("",!0),e.trainers?(o(),u(ee,{key:3,avatars:b(w)(e.trainers),size:"small"},null,8,["avatars"])):g("",!0)])])],10,["onClick"])])))),128))])),_:1}),b(U).length>0?(o(),u(se,{key:0,"item-per-page":null!=(m=$.paginationData.per_page)?m:15,"total-items":null!=(c=$.paginationData.total)?c:0,"current-page":$.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):g("",!0)])])])}}});export{U as _};
