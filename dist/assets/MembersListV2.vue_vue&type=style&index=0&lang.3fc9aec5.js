import{_ as e}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.24d82d1d.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.00efb228.js";import{_ as a}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.b4780617.js";import{_ as t}from"./V-Tag.vue_vue&type=script&setup=true&lang.d1f062ed.js";import{_ as i}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.b3b15f6f.js";import{_ as r}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.6614a034.js";import{d as l,r as n,b as m,w as c,o,h as u,k as p,E as d,j as b,ab as v,K as g,P as f,aa as _,i as y,R as h,S as k,F as j,G as x,A as D}from"./vendor.41bfc188.js";import{_ as P,a as Y}from"./search-4-dark.12f0bf0d.js";import{b as $}from"./index.5952f659.js";import{Z as w,l as C,W as M}from"./Members.3c09f6cb.js";const S={class:"page-content-inner"},V={class:"tile-grid tile-grid-v1"},A=p("img",{class:"light-image",src:P,alt:""},null,-1),E=p("img",{class:"dark-image",src:Y,alt:""},null,-1),F={class:"\n                  tile-grid-item-inner\n                  justify-content-between\n                  align-items-start\n                "},I={class:"d-flex"},L={class:"\n                      flex-column\n                      d-flex\n                      justify-content-center\n                      align-item-center\n                    "},T={class:"meta ml-2"},q={class:"p-3"},z={key:0},O={key:1},W={style:{"font-color":"grey"}},G={class:"align-items-center d-flex"},H={class:"d-flex justify-content-between mt-3"},K={class:"d-flex align-items-center"},R={class:"mr-1"},Z={key:1,class:"mr-1"},B={class:"d-flex align-items-center"},J={key:1,class:"mr-1"},N={key:2,class:"mr-3"};var Q=l({expose:[],props:{members:{type:Array,required:!0},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String}},emits:["filterChange","onSearch"],setup(l,{emit:P}){const Y=l;f(),_(),n(""),n("all"),n({});const Q=m((()=>Y.members));c((()=>Q.value),(e=>{})),n({status:!1,member:null});c((()=>Y.members),(()=>{}));const U=e=>{let s="";return e.subscription?(s=e.subscription.subscription&&"active"==e.subscription.subscription.status?"active":e.subscription.status,"active"==e.subscription.status||e.subscription.status,"canceled"==e.subscription.status&&D()<=D(e.membership_members.cacelation_date)&&(s="active")):e.sinMembresia&&(s=e.user&&e.user.pm_last_four?"nomembershipcontarjeta":"nomembership"),s},X=n([]);return c((()=>X.value),(e=>{0!=e.length?(M.value=[],Q.value.forEach((e=>{M.value.push(e.id)}))):M.value=[]})),(l,n)=>{var m,c;const f=e,_=s,P=y("router-link"),M=a,X=t,ee=i,se=r;return o(),u("div",null,[p("div",S,[p("div",V,[p(f,{class:[0!==d(Q).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:b((()=>[A,E])),_:1},8,["class"]),p(v,{name:"list",tag:"div",class:"columns is-multiline"},{default:b((()=>[(o(!0),u(h,null,k(d(Q),(e=>(o(),u("div",{key:`${Y.name}-${e.id}`,class:"column is-4"},[p("div",{onClick:e=>{},class:["tile-grid-item cardprofile",U(e)]},[p("div",F,[p("div",I,[p("div",L,[p(_,{picture:`${d($)}storage/${e.photo}`,color:"primary",initials:d(w)(e.name,e.last_name),size:"medium"},null,8,["picture","initials"])]),p("div",null,[p("div",T,[p("span",null,[p(P,{to:{name:"members-profile",query:{id:e.id}},style:{color:"white"}},{default:b((()=>[j(x(e.name)+" "+x(e.second_name)+" "+x(e.last_name),1)])),_:2},1032,["to"])])]),p("div",q,[e.membership_members?(o(),u("span",z,[p("p",null,x(e.membership_members.membership.name),1)])):g("",!0),"checkin"==Y.name?(o(),u("span",O,[p("p",W," Check In: "+x(d(D)(e.timecheckin).format("MM-DD-YYYY H:m:s")),1)])):g("",!0)])])]),p("div",G,[p(M,{"id-member":e.id,member:e},null,8,["id-member","member"])])]),p("div",H,[p("span",K,[p("div",R,[p(X,{label:`${"sincard"==U(e)?"no_card":U(e)}`,class:"mr-1",color:""},null,8,["label"])]),e.membership_members&&2==e.membership_members.status?(o(),u(X,{key:0,label:`Canceled ${d(D)(e.membership_members.cacelation_date).format("MM-DD-YYYY")}`,class:"mr-1",color:"danger"},null,8,["label"])):g("",!0),e.subscription&&e.subscription.subscription&&e.subscription.latest_invoice&&e.subscription.latest_invoice.payments_intents&&"due"==U(e)?(o(),u("div",Z,[2!=e.membership_members.status&&e.subscription.latest_invoice&&e.subscription.latest_invoice.payments_intents.length?(o(),u(X,{key:0,label:`${e.subscription.latest_invoice.payments_intents[0].status}`,class:"mr-1",color:"danger"},null,8,["label"])):g("",!0)])):g("",!0)]),p("span",B,[e.leo_vet_fr?(o(),u(X,{key:0,label:"LEO",class:"mr-1",color:"green"})):g("",!0),null!=e.membership_members?(o(),u("div",J,[e.membership_members.discount?(o(),u(X,{key:0,label:`-${e.membership_members.discount.value}%`,class:"",color:"orange"},null,8,["label"])):g("",!0)])):g("",!0),e.cards.length?(o(),u("div",N,[null!=e.cards[0].last4?(o(),u(X,{key:0,label:"Cards",class:"mr-1",color:"purple"})):g("",!0)])):g("",!0),e.trainers?(o(),u(ee,{key:3,avatars:d(C)(e.trainers),size:"small"},null,8,["avatars"])):g("",!0)])])],10,["onClick"])])))),128))])),_:1}),d(Q).length>0?(o(),u(se,{key:0,"item-per-page":null!=(m=Y.paginationData.per_page)?m:15,"total-items":null!=(c=Y.paginationData.total)?c:0,"current-page":Y.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):g("",!0)])])])}}});export{Q as _};