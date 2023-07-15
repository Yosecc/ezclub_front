import{_ as e}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.3f0a1890.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import{_ as a}from"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.7c52ce45.js";import{_ as r}from"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import{_ as t}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.8a37085a.js";import{d as i,O as n,ad as l,r as m,b as o,w as c,h as d,i as u,j as p,l as b,I as v,F as f,k as g,ae as _,S as h,U as y,G as k,H as j,B as x}from"./vendor.84e48f7c.js";import{_ as C,a as D}from"./search-4-dark.12f0bf0d.js";import{b as Y}from"./index.d8c83946.js";import{H as $,e as M}from"./Members.893bd716.js";import{t as w,w as P}from"./Subscriptions.5fdb672a.js";const S={class:"page-content-inner"},T={class:"tile-grid tile-grid-v1"},V=b("img",{class:"light-image",src:C,alt:""},null,-1),I=b("img",{class:"dark-image",src:D,alt:""},null,-1),A={class:"\r\n                  tile-grid-item-inner\r\n                  justify-content-between\r\n                  align-items-start\r\n                "},F={class:"d-flex"},H={class:"\r\n                      flex-column\r\n                      d-flex\r\n                      justify-content-center\r\n                      align-item-center\r\n                    "},L={class:"meta ml-2"},O={class:"p-3"},q={key:0},z={key:1},E={style:{"font-color":"grey"}},G={class:"align-items-center d-flex"},B={class:"d-flex justify-content-between mt-3"},U={class:"d-flex align-items-center flex-wrap"},W={class:"mr-1 mb-1"},J={class:"mr-1 mb-1"},K={class:"d-flex align-items-center"},N={key:1,class:"mr-1"},Q={key:2,class:"mr-3"};var R=i({expose:[],props:{members:{type:Array,required:!0},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String}},emits:["filterChange","onSearch"],setup(i,{emit:C}){const D=i;n(),l(),m(""),m("all"),m({});const R=o((()=>D.members));c((()=>R.value),(e=>{})),m({status:!1,member:null});c((()=>D.members),(()=>{}));const X=m([]);return c((()=>X.value),(e=>{0!=e.length?($.value=[],R.value.forEach((e=>{$.value.push(e.id)}))):$.value=[]})),(i,n)=>{var l,m;const o=e,c=s,C=d("router-link"),$=a,X=r,Z=t;return u(),p("div",null,[b("div",S,[v(" <p>{{ props.members }}</p> "),b("div",T,[b(o,{class:[0!==f(R).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:g((()=>[V,I])),_:1},8,["class"]),b(_,{name:"list",tag:"div",class:"columns is-multiline"},{default:g((()=>[v(" <p>lorem</p> "),v("Grid item"),(u(!0),p(h,null,y(f(R),(e=>(u(),p("div",{key:`${D.name}-${e.id}`,class:"column is-4"},[v(" <p>{{  }}}</p> "),e.estado?(u(),p("div",{key:0,onClick:e=>{},class:"tile-grid-item cardprofile h-100",style:{backgroundColor:e.estado.color}},[b("div",A,[b("div",F,[b("div",H,[b(c,{picture:`${f(Y)}storage/${e.photo}`,color:"primary",initials:f(M)(e.name,e.last_name),size:"medium"},null,8,["picture","initials"])]),b("div",null,[b("div",L,[b("span",null,[b(C,{to:{name:"members-profile",query:{id:e.id}},style:{color:"white"}},{default:g((()=>[k(j(e.name)+" "+j(e.second_name)+" "+j(e.last_name),1)])),_:2},1032,["to"])])]),b("div",O,[e.membership_members?(u(),p("span",q,[b("p",null,j(e.membership_members.membership.name),1)])):v("v-if",!0),"checkin"==D.name?(u(),p("span",z,[b("p",E," Check In: "+j(f(x)(e.timecheckin).format("MM-DD-YYYY H:m:s")),1)])):v("v-if",!0)])])]),b("div",G,[e?(u(),p($,{key:0,"id-member":e.id,member:e},null,8,["id-member","member"])):v("v-if",!0)])]),b("div",B,[b("span",U,[b("div",W,[b(X,{label:f(w).find((s=>s.value==e.estado.estado_pago)).name},null,8,["label"])]),b("div",J,[v(' <VTag\r\n                        :label="`${\r\n                          colorCard(item) == \'sincard\'\r\n                            ? \'no_card\'\r\n                            : colorCard(item)\r\n                        }`"\r\n                        class="mr-1"\r\n                        color=""\r\n                      /> '),v(" <p>{{ item.estado.estado_pago }}}</p> "),e.estado.ultimo_intento?(u(),p(X,{key:0,label:`\n                        ${f(P).find((s=>s.value==e.estado.ultimo_intento.estado)).name}: \n                        ${"fallido"==e.estado.ultimo_intento.estado?e.estado.ultimo_intento.pago_id:""}\n                        / ${e.estado.ultimo_intento.fecha}\n                        `},null,8,["label"])):v("v-if",!0),v(" <p>{{ item.estado.ultimo_intento }}</p> ")]),e.membership_members&&2==e.membership_members.status?(u(),p(X,{key:0,label:`Canceled ${f(x)(e.membership_members.cacelation_date).format("MM-DD-YYYY")}`,class:"mr-1",color:"danger"},null,8,["label"])):v("v-if",!0),e.membership_members&&e.membership_members.schedules?(u(),p(X,{key:1,label:`Schedules: ${f(x)(e.membership_members.schedules).format("MM-DD-YYYY")}`,class:"mr-1",color:""},null,8,["label"])):v("v-if",!0),v(' <div\r\n                    class="mr-1"\r\n                    v-if="\r\n                      item.subscription &&\r\n                      item.subscription.subscription &&\r\n                      item.subscription.latest_invoice &&\r\n                      item.subscription.latest_invoice.payments_intents &&\r\n                      colorCard(item) == \'due\'\r\n                    "\r\n                  >\r\n                    <VTag\r\n                      v-if="\r\n                        item.membership_members.status != 2 &&\r\n                        item.subscription.latest_invoice &&\r\n                        item.subscription.latest_invoice.payments_intents.length\r\n                      "\r\n                      :label="`${item.subscription.latest_invoice.payments_intents[0].status}`"\r\n                      class="mr-1"\r\n                      color="danger"\r\n                    />\r\n                  </div> ')]),b("span",K,[e.leo_vet_fr?(u(),p(X,{key:0,label:"LEO",class:"mr-1",color:"green"})):v("v-if",!0),null!=e.membership_members?(u(),p("div",N,[e.membership_members.discount?(u(),p(X,{key:0,label:`-${e.membership_members.discount.discount.value}%`,class:"",color:"orange"},null,8,["label"])):v("v-if",!0)])):v("v-if",!0),e.cards&&e.cards.length?(u(),p("div",Q,[null!=e.cards[0].last4?(u(),p(X,{key:0,label:"Cards",class:"mr-1",color:"purple"})):v("v-if",!0)])):v("v-if",!0),v(' <VAvatarStack\r\n                    v-if="item.trainers"\r\n                    :avatars="arregloTrainers(item.trainers)"\r\n                    size="small"\r\n                  /> ')])])],12,["onClick"])):v("v-if",!0)])))),128))])),_:1}),v("Table Pagination"),f(R).length>0?(u(),p(Z,{key:0,"item-per-page":null!=(l=D.paginationData.per_page)?l:15,"total-items":null!=(m=D.paginationData.total)?m:0,"current-page":D.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):v("v-if",!0)])]),v(' <sidebar-member\r\n      :status="memberCard.status"\r\n      :member="memberCard.member"\r\n      @closeMemberCard="closeMemberCard"\r\n    /> ')])}}});export{R as _};
