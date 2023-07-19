import{_ as e}from"./V-Control.b8a16a92.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{b as l,l as s,_ as a,p as o}from"./V-BillboardJS.vue_vue&type=style&index=0&lang.fae7960c.js";import{_ as n}from"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import{_ as i}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as u}from"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import{_ as c}from"./subscriptionIndex.vue_vue&type=script&setup=true&lang.f2cca9c3.js";import{_ as r}from"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import{d as p,o as d,b as m,r as v,w as f,A as b,i as y,j as h,l as _,I as g,S as k,U as x,F as j,k as S,H as C,G as w,B as V,P as A,O,h as D,W as P,Z as N,_ as E,a0 as M}from"./vendor.84e48f7c.js";import{m as Y,A as I}from"./index.5855fd6a.js";import{_ as R}from"./subscription-list.vue_vue&type=style&index=0&lang.beedeae8.js";import{_ as $}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.8d78868c.js";import{p as B}from"./sidebarLayoutState.bceb862d.js";import{y as J}from"./Subscriptions.a28327c8.js";import{t as L}from"./themeColors.4f0e93f3.js";import"./V-Placeload.8fe4e440.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./Discounts.5a427a3a.js";import"./Staffs.6305c347.js";import"./Companies.679555f4.js";import"./Diciplines.6c8947e5.js";import"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.f9906d24.js";import"./subscription-method-stripe-checkout.vue_vue&type=script&setup=true&lang.45a17c74.js";import"./MemberCards.2805a0da.js";import"./Members.ee8a92ac.js";import"./Memberships.5191990f.js";import"./V-PlaceholderSection.vue_vue&type=script&setup=true&lang.12764c4e.js";import"./Presupuesto.vue_vue&type=script&setup=true&lang.d5a70a4c.js";import"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.3f0a1890.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./V-FlexPagination.vue_vue&type=script&setup=true&lang.8a37085a.js";import"./search-4-dark.12f0bf0d.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.3fa8e32c.js";import"./useDropdown.3858e0aa.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";const T={class:"table is-hoverable is-fullwidth"},G=_("thead",null,[_("tr",{style:{"border-bottom":"1px solid rgba(255, 255, 255, 0.2)"}},[_("th",{colspan:"6",class:"text-center",scope:"col"},[_("p",{class:"text-center title is-6"},[_("b",null,"SUBSCRIPTIONS")])])])],-1),z=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"Info"),_("th",{scope:"col"},"Next payment date."),_("th",{scope:"col"},"Discount."),_("th",{scope:"col"},"Amount"),_("th",{scope:"col"},"Status"),_("th",{scope:"col"},"View Invoices")])],-1),U={class:"p-4"},X={key:0},F={key:0,class:"p-4"},q={class:"p-4"},H={key:0},K={key:1,class:"p-4"},W={class:"p-4"},Z={key:0,class:"fa fa-solid fa-eye-slash"},Q={key:1,class:"fa fa-solid fa-eye"},ee=_("i",{class:"fa fa-id-card"},null,-1),te={key:0},le={colspan:"6"},se={class:"table is-hoverable is-fullwidth"},ae=_("thead",null,[_("tr",{style:{"border-bottom":"1px solid rgba(255, 255, 255, 0.2)"}},[_("th",{colspan:"4",class:"text-center",scope:"col"},[_("p",{class:"text-center title is-6"},[_("b",null,"INVOICES")])])])],-1),oe=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"ID"),_("th",{scope:"col"},"PAID"),_("th",{scope:"col"},"status"),_("th",{scope:"col"},"Amount"),g(' <th scope="col">View Payments</th> ')])],-1),ne={colspan:"4"},ie={class:"table is-hoverable is-fullwidth"},ue=_("thead",null,[_("tr",{style:{"border-bottom":"1px solid"}},[_("th",{colspan:"4",class:"text-center",scope:"col"},[_("p",{class:"text-center title is-6"},[_("b",null,"ITEMS")])])])],-1),ce=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"description"),_("th",{scope:"col"},"amount")])],-1),re={colspan:"4"},pe={class:"table is-hoverable is-fullwidth"},de=_("thead",null,[_("tr",{style:{"border-bottom":"1px solid"}},[_("th",{colspan:"6",class:"text-center",scope:"col"},[_("p",{class:"text-center title is-6"},[_("b",null,"PAYMENTS")])])])],-1),me=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"ID"),_("th",{scope:"col"},"date"),_("th",{scope:"col"},"description"),_("th",{scope:"col"},"status"),_("th",{scope:"col"},"last payment error"),_("th",{scope:"col"},"amount")])],-1),ve={key:0},fe={key:1};var be=p({expose:[],props:{subscriptions:{type:Array,default:[]}},setup(e){const t=e;d((()=>{}));const l=m((()=>t.subscriptions)),s=v(null),a=v(null);f((()=>t.subscriptions),(e=>{s.value=null,a.value=null}));const o=b({modal:!1,data:null,suscripcion_id:null}),u=()=>{o.modal=!1};return(e,t)=>{const p=i,d=n,m=c,v=r;return y(),h("div",null,[_("table",T,[g(" <p>{{ props.suscripciones }}</p> "),G,z,(y(!0),h(k,null,x(j(l),((e,t)=>(y(),h("tbody",{key:`subs-${t}`},[_("tr",{id:`subs-${t}`,class:t==a.value?"bg-info":""},[_("td",U,[_("p",null,[_("small",null,C(e.data.id),1)]),_("p",null,[_("small",null,C(e.data.customer),1)]),e.data.upComing?(y(),h("p",X,C(e.data.upComing.customer_email),1)):g("v-if",!0)]),e.data.upComing?(y(),h("td",F,C(e.data.upComing.next_payment_attempt),1)):g("v-if",!0),_("td",q,[e.data.discount?(y(),h("p",H,[w(C(e.data.discount.coupon.name),1),_("small",null," - "+C(e.data.discount.coupon.percent_off)+" %",1)])):g("v-if",!0)]),e.data.upComing?(y(),h("td",K,C(j(Y)(e.data.upComing.total/100)),1)):g("v-if",!0),_("td",W,C(e.data.status),1),_("td",null,[_(p,{color:t==a.value?void 0:"info",outlined:"",onClick:l=>(({data:e,key:t})=>{s.value=e,t!=a.value?(a.value=t,setTimeout((()=>{document.getElementById(`subs-${t}`).scrollIntoView({behavior:"smooth",block:"start"})}),100)):a.value=null})({data:e.data.invoicess,key:t})},{default:S((()=>[t==a.value?(y(),h("i",Z)):(y(),h("i",Q))])),_:2},1032,["color","onClick"]),_(p,{color:"success",outlined:"",onClick:t=>(e=>{console.log("viewSuscripcion",e.suscripcion_id),e.suscripcion_id&&(o.suscripcion_id=e.suscripcion_id),o.modal=!0})(e)},{default:S((()=>[ee])),_:2},1032,["onClick"])])],10,["id"]),t==a.value?(y(),h("tr",te,[_("td",le,[s.value?(y(),h(d,{key:0},{default:S((()=>[_("table",se,[ae,oe,(y(!0),h(k,null,x(s.value,((e,t)=>(y(),h("tbody",{style:{border:"1px solid rgba(255, 255, 255, 0.2)"},class:"mb-4",key:`invoide-${t}`},[_("tr",null,[g(" <td>\r\n                        <p>{{ item_ }}</p>\r\n                    </td> "),_("td",null,[_("p",null,C(e.id),1)]),_("td",null,[_("p",null,C(e.paid),1)]),_("td",null,[_("p",null,C(e.status),1)]),_("td",null,[_("p",null,C(j(Y)(e.total/100)),1)])]),_("tr",null,[_("td",ne,[e.lines?(y(),h(d,{key:0},{default:S((()=>[g(" <p>{{ item_.payment_intent_data }}</p> "),_("table",ie,[ue,ce,(y(!0),h(k,null,x(e.lines,((e,t)=>(y(),h("tbody",{key:`lines-${t}`},[_("tr",null,[_("td",null,[_("p",null,C(e.description),1)]),_("td",null,[_("p",null,C(j(Y)(e.amount/100)),1)])])])))),128))])])),_:2},1024)):g("v-if",!0)])]),_("tr",null,[_("td",re,[null!=e.payment_intent_data?(y(),h(d,{key:0},{default:S((()=>[g(" <p>{{ item_.payment_intent_data }}</p> "),_("table",pe,[de,me,_("tbody",null,[_("tr",null,[_("td",null,[_("p",null,C(e.payment_intent_data.id),1)]),_("td",null,[_("p",null,C(j(V)(e.payment_intent_data.created,"YYYY-MM-DD").format("MM-DD-YYYY")),1)]),_("td",null,[_("p",null,C(e.payment_intent_data.description),1)]),_("td",null,[_("p",null,C(e.payment_intent_data.status),1)]),_("td",null,[e.payment_intent_data.last_payment_error?(y(),h("p",ve,C(e.payment_intent_data.last_payment_error.message),1)):g("v-if",!0)]),_("td",null,[_("p",null,C(j(Y)(e.payment_intent_data.amount/100)),1)])])])])])),_:2},1024)):g("v-if",!0)])])])))),128))])])),_:1})):g("v-if",!0)])])):g("v-if",!0)])))),128))]),_(v,{open:j(o).modal,size:"big",actions:"center",onClose:u},{content:S((()=>[g(" <p>{{ suscripcion }}</p> "),j(o).modal&&j(o).suscripcion_id?(y(),h(m,{key:0,suscripcion_id:j(o).suscripcion_id},null,8,["suscripcion_id"])):(y(),h("p",fe,"Not subscription"))])),action:S((()=>[g(' <VButton\r\n          :to="{\r\n            name: \'members-profile\',\r\n            query: { id: member_id },\r\n          }"\r\n          v-if="member_id"\r\n          color="info"\r\n          raised\r\n          >View member profile {{ code }}\r\n        </VButton>\r\n        <VButton\r\n          :to="{\r\n            name: \'members-profile\',\r\n            query: { code: code },\r\n          }"\r\n          v-if="code"\r\n          color="info"\r\n          raised\r\n          >View member profile\r\n        </VButton> ')])),_:1},8,["open"])])}}});b({data:{},count:null,amount:null});const ye=e=>{const t=[];for(const l in e){let e=l;""==l&&(e="n/a"),t.push(e)}return t},he=e=>{const t=[];for(const l in e)t.push(e[l].amount/100);return t},_e=e=>{const t=[];for(const l in e)t.push(e[l].count);return t},ge={data:{type:"bar",types:{data2:l(),data1:s()},x:"x",columns:[],names:{data2:"Subscriptions",data1:"Amount"},labels:{format:{data1:function(e){return d3.format("$")(e)}}}},bar:{width:{ratio:.5}},axis:{rotated:!0,x:{type:"category",tick:{rotate:75,multiline:!1,tooltip:!0},height:130}},title:{text:"Subscriptions to next payment",position:"top-left",padding:{bottom:20,right:20,top:0,left:20}},legend:{}},ke={class:"w-100"},xe={class:"columns is-multiline"},je={class:"column is-6"},Se={class:"title is-5"},Ce=_("b",null,"Subscriptions Stripe:",-1),we={class:"column is-6"},Ve={class:"title is-5"},Ae=_("b",null," Amount:",-1),Oe={class:"columns is-multiline column is-12"},De={class:"columns is-multiline"},Pe={class:"column is-6"},Ne={class:"title is-6"},Ee={class:"column is-6"},Me={class:"title is-6"},Ye=_("b",null," Amount:",-1),Ie={class:"column is-12"},Re={class:"column is-12"},$e=w("View List Subscriptions"),Be={class:"table is-hoverable is-fullwidth"},Je=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"Date next Payment"),_("th",{scope:"col"},"Count."),_("th",{scope:"col"},"Amount sum."),_("th",{scope:"col"},"View lists")])],-1),Le={class:"p-4"},Te=_("i",{class:"fa fa-solid fa-eye"},null,-1),Ge=w("All Subscriptions"),ze=w("Group by membership"),Ue={class:"table is-hoverable is-fullwidth"},Xe=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"Membership"),_("th",{scope:"col"},"Count."),_("th",{scope:"col"},"Amount"),_("th",{scope:"col"},"View Subscription")])],-1),Fe={class:"p-4"},qe={class:"p-4"},He={class:"p-4"},Ke=_("i",{class:"fa fa-solid fa-eye"},null,-1),We={key:0},Ze={colspan:"4"};var Qe=p({expose:[],props:{dataStripe:{type:Object,default:{data:{},count:null,amount:null}}},setup(e){const t=e;v(!1),d((()=>{})),v(""),v("all");const l=m((()=>{let e=t.dataStripe;for(let t in e.data){e.data[t].options=JSON.parse(JSON.stringify(ge));let l=["x"].concat(ye(e.data[t].data));e.data[t].options.data.columns.push(l);let s=["data1"].concat(he(e.data[t].data));e.data[t].options.data.columns.push(s);let a=["data2"].concat(_e(e.data[t].data));e.data[t].options.data.columns.push(a),e.data[t].options.data.labels.format.data2=function(e){return d3.format("$")(e)}}return console.log("datafinal",e),e})),s=b({key:null,data:null,suscripciones:null,suscripciones_ids:null});f(s.key,(e=>{s.data=null,s.suscripciones_ids=null,o.key=null}));const o=b({key:null,subscriptions:null,memberships:null}),c=v(!1);f((()=>o.key),(e=>{console.log(e),r.key=null,c.value=!0,setTimeout((()=>{c.value=!1}),1e3)}));const r=b({key:null,dat:null}),p=v("subscriptions");return(e,t)=>{const d=n,m=a,v=i,f=u,b=be;return y(),h("div",ke,[_(d,{class:"column is-12 mb-4"},{default:S((()=>[_("div",xe,[_("div",je,[_(d,{color:"peimary"},{default:S((()=>[_("p",Se,[Ce,w(" "+C(j(l).count),1)])])),_:1})]),_("div",we,[_(d,{color:"primary"},{default:S((()=>[_("p",Ve,[Ae,w(" "+C(j(Y)(j(l).amount/100)),1)])])),_:1})]),_("div",Oe,[(y(!0),h(k,null,x(j(l).data,((e,t)=>(y(),h("div",{class:"column is-6",key:`status-${t}`},[_(d,null,{default:S((()=>[_("div",De,[_("div",Pe,[_(d,{color:""},{default:S((()=>[_("p",Ne,C(e.count)+" "+C(t),1)])),_:2},1024)]),_("div",Ee,[_(d,{color:"info"},{default:S((()=>[_("p",Me,[Ye,w(" "+C(j(Y)(e.amount/100)),1)])])),_:2},1024)]),_("div",Ie,[_(d,null,{default:S((()=>{return[_(m,{ref:`chart-estado-${t}`,id:`chart-estado-${t}`,options:(l=e.options,JSON.parse(JSON.stringify(l)))},null,8,["id","options"])];var l})),_:2},1024)]),_("div",Re,[_(v,{class:"w-100",color:j(s).key==t?"info":"",onClick:l=>(({estado:e,key:t})=>{if(console.log("viewListEstados",e),s.key==t)return s.key=null,s.data=null,void(s.suscripciones_ids=null);s.key=t,s.data=e})({estado:e,key:t})},{default:S((()=>[$e])),_:2},1032,["color","onClick"])])])])),_:2},1024)])))),128))])])])),_:1}),j(s).data?(y(),h(d,{key:0,class:"column is-12 mb-4"},{default:S((()=>[_("table",Be,[Je,(y(!0),h(k,null,x(j(s).data.data,((e,t)=>(y(),h("tbody",{key:`estado-${t}`,class:t==j(o).key?"bg-info":""},[_("tr",null,[_("td",Le,C(""==t?"N/A":j(V)(t,"YYYY-MM-DD").format("MM-DD-YYYY")),1),_("td",null,C(e.count),1),_("td",null,C(j(Y)(e.amount/100)),1),_("td",null,[_(v,{color:"info",onClick:l=>(({data:e,key:t})=>{if(console.log("viewListSubscriptions",e),o.key==t)return o.key=null,o.subscriptions=null,void(o.memberships=null);o.key=t,o.subscriptions=e,o.memberships=e.membresias,setTimeout((()=>{document.getElementById("subscriptionsList").scrollIntoView({behavior:"smooth"})}),100)})({data:e,key:t})},{default:S((()=>[Te])),_:2},1032,["onClick"])])])],2)))),128))])])),_:1})):g("v-if",!0),j(o).subscriptions?(y(),h(d,{key:1,id:"subscriptionsList",class:"column is-12 mb-4"},{default:S((()=>[_(d,{class:"d-flex justify-content-between mb-4"},{default:S((()=>[_(f,{size:"small",active:c.value},{default:S((()=>[_("div",null,[_("p",null," Payment next date: "+C(j(V)(j(o).key,"YYYY-MM-DD").format("MM-DD-YYYY")),1),_("p",null,"Count: "+C(j(o).subscriptions.count),1),_("p",null," Amount: "+C(j(Y)(j(o).subscriptions.amount/100)),1)])])),_:1},8,["active"]),_("div",null,[_(v,{color:"subscriptions"==p.value?"info":void 0,class:"mr-4",onClick:t[1]||(t[1]=e=>p.value="subscriptions")},{default:S((()=>[Ge])),_:1},8,["color"]),_(v,{color:"membresias"==p.value?"info":void 0,onClick:t[2]||(t[2]=e=>p.value="membresias")},{default:S((()=>[ze])),_:1},8,["color"])])])),_:1}),"subscriptions"==p.value&&j(o).subscriptions?(y(),h(d,{key:0},{default:S((()=>[_(b,{subscriptions:j(o).subscriptions.data},null,8,["subscriptions"])])),_:1})):g("v-if",!0),"membresias"==p.value&&j(o).memberships?(y(),h(d,{key:1},{default:S((()=>[_("table",Ue,[Xe,(y(!0),h(k,null,x(j(o).memberships,((e,t)=>(y(),h("tbody",{key:`member-${t}`,class:t==j(r).key?"bg-info":""},[_("tr",null,[_("td",Fe,[_("p",null,C(e.membership.name),1)]),_("td",qe,[_("p",null,C(e.count),1)]),_("td",He,C(j(Y)(e.amount/100)),1),_("td",null,[_(v,{color:"info",outlined:"",onClick:l=>(({data:e,key:t})=>{if(r.key==t)return r.key=null,void(r.data=null);r.key=t,r.data=e})({data:e.data,key:t})},{default:S((()=>[Ke])),_:2},1032,["onClick"])])]),t==j(r).key?(y(),h("tr",We,[_("td",Ze,[j(r).data?(y(),h(d,{key:0},{default:S((()=>[_(b,{subscriptions:j(r).data},null,8,["subscriptions"])])),_:1})):g("v-if",!0)])])):g("v-if",!0)],2)))),128))])])),_:1})):g("v-if",!0)])),_:1})):g("v-if",!0)])}}});const et=b({data1:[],data2:[],x:[]}),tt=b({data:{type:l(),types:{data1:s(),data2:l()},x:"x",columns:[],names:{data1:"Subscription",data2:"Amount"},colors:{data1:L.accent,data2:L.primary,data3:L.orange,data4:L.purple}},bar:{width:{ratio:.5}},axis:{x:{type:"category",tick:{rotate:90,multiline:!1,tooltip:!0},height:100}},size:{height:500},padding:{bottom:20},title:{text:"Bar Chart",position:"top-left",padding:{bottom:20,right:20,top:0,left:20}},legend:{position:"inset"}});var lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",dataNew:et,options:tt,onReady:e=>{e.load({columns:[et.x,et.data1,et.data2]})}});const st=e=>{const t=[];for(const l in e){let s=l;""==s&&(s="n/a"),t.push([s,e[l]])}return t},at=e=>{let t=[];const l=["x"],s=["age"];for(const a in e){let t=a;""==t&&(t=0),l.push(t),s.push(e[a].count)}return t=[l,s],t},ot=e=>{const t=[];for(const l in e){const s=e[l].min,a=e[l].max,o=e[l].count_members,n=s+"-"+a;t.push([n,o])}return t};v([["Male",30],["Female",28]]);const nt={data:{columns:[],colors:{data1:L.accent,data2:L.primary,data3:L.orange,data4:L.purple,setosa:L.orange,versicolor:L.purple,virginica:L.success},type:o(),onclick:(e,t)=>{console.log("[pieSimple] onclick",e,t)},onover:(e,t)=>{console.log("[pieSimple] onover",e,t)},onout:(e,t)=>{console.log("[pieSimple] onout",e,t)}},size:{height:280},padding:{bottom:20},title:{text:"Pie Chart",position:"top-left",padding:{bottom:20,right:20,top:0,left:20}},legend:{position:"inset"}},it={data:{x:"x",type:l(),columns:[],colors:{data1:L.accent,data2:L.primary,data3:L.orange,data4:L.purple}},bar:{width:{ratio:.5}},size:{height:280},padding:{bottom:20},title:{text:"Bar Chart",position:"top-left",padding:{bottom:20,right:20,top:0,left:20}},legend:{position:"inset"}},ut={class:"page-content-inner"},ct={class:"mb-5 columns is-multiline"},rt={class:"is-2 column"},pt=_("label",{for:"fecha_pago"},[_("p",null,[_("small",null,"Status")])],-1),dt={class:"select"},mt=_("label",{for:"fecha_pago"},[_("p",null,[_("small",null,"Por definir")])],-1),vt=_("div",{class:"is-2 column"},null,-1),ft={class:"column is-4"},bt=_("label",{for:"fecha_pago"},[_("p",null,[_("small",null,"Payment Date")])],-1),yt={class:"column columns is-12 mb-4",style:{overflow:"scroll"}},ht={class:"title is-5"},_t={key:1,class:"column is-12 columns is-multiline"},gt={class:"w-100 d-flex",style:{"overflow-y":"scroll"}},kt=_("p",null,null,-1),xt={class:"title is-6"},jt={class:"title is-5"},St={class:"column columns is-multiline is-12 mb-4"},Ct={class:"column is-12 d-flex justify-content-between"},wt={class:"title is-5"},Vt={class:"column is-4"},At={class:"column is-4"},Ot={key:0,class:"column is-12"},Dt=_("p",{class:"title is-6 text-center"},"Diciplines",-1),Pt={class:"columns is-multiline"},Nt={class:"table is-hoverable is-fullwidth"},Et=_("thead",null,[_("tr",null,[_("th",{scope:"col"},"Dicipline"),_("th",{scope:"col"},"Members count"),_("th",{scope:"col"},"Male"),_("th",{scope:"col"},"Female")])],-1);var Mt=p({expose:[],setup(l){B.value="Suscriptions",A({title:"List Suscriptions"});const s=O(),o=v(""),i=v("all");v([]);const u=v(!0);v("all"),f((()=>s.query.page),(()=>{c("all",o.value,s.query.page,r.value,!1,L.value)})),f((()=>o.value),(()=>{c("all",o.value,1,r.value,!1)}));const c=async(e,t="",l=1,s=null,a=!0,o=null,n=null)=>{i.value=e,u.value=!0,await I.get("v2/suscripcion/reports",{params:{[i.value]:!0,filter:t,page:l,category:s,estado:o,fecha_pago:n}}).then((e=>{J.value=e.data.suscripcionesXpayment,U.value=e.data.suscripcionesXmembresias;let t=["data1"].concat(J.value.cantidad),l=["data2"].concat(J.value.montos),s=["x"].concat(J.value.fechas);et.data1=t,et.data2=l,et.x=s,a&&Y()})).catch((e=>{u.value=!1,console.log(e)}))},r=v("All"),p=b({});b({});const w=b({});d((()=>{c("all",o.value,s.query.page,"All",L.value)}));const V=()=>{c("all",o.value,1,r.value,!1,L.value)},Y=()=>{u.value=!0,setTimeout((()=>{u.value=!1}),500)},L=v(null),T=v("All"),G=v([{value:"All",name:"All"},{value:"COBRAR HOY",name:"COBRAR HOY"},{value:"PENDIENTE",name:"PENDIENTE"},{value:"VENCIDO",name:"VENCIDO"},{value:"PAGADO",name:"PAGADO"},{value:"CANCELADO",name:"CANCELADO"},{value:"EXPIRADO",name:"EXPIRADO"},{value:"PROX. EXPIRADO",name:"PROX. EXPIRADO"}]),z=()=>{c("all",o.value,1,r.value,!1,T.value,L.value)},U=v(null),X=m((()=>{for(var e in U.value){const t=U.value[e],l=JSON.parse(JSON.stringify(nt));l.title.text="Gender",l.data.columns=st(t.members),U.value[e].optionsGender=l;const s=JSON.parse(JSON.stringify(it));s.title.text="Ages",s.data.columns=at(t.edades),U.value[e].optionsEdades=s;const a=JSON.parse(JSON.stringify(nt));if(a.title.text="Ages Ranges",a.data.columns=ot(t.edades_rango),U.value[e].optionsRangos=a,Object.keys(t.diciplines).length)for(const o in U.value[e].diciplines){let t=JSON.parse(JSON.stringify(nt));t.title.text="Gender",t.data.columns=st(U.value[e].diciplines[o].members),U.value[e].diciplines[o].optionsGenders=t;let l=JSON.parse(JSON.stringify(it));l.title.text="Age",l.data.columns=at(U.value[e].diciplines[o].edades),U.value[e].diciplines[o].optionsEdades=l}}return U.value})),F=m((()=>p.segunMembresia));m((()=>{let e=[];const t=U.value;for(const l in t)e.push({label:t[l].membership_name,value:t[l].membership_name});return e}));const q=m((()=>{let e=0;const t=X.value;for(const l in t)e+=t[l].conteo_suscripciones;return e})),H=v(null);v(!0);const K=(e,t)=>{let l=[];return e.forEach((e=>{l.push(e.data)})),l.filter((e=>e?e.user.name.match(new RegExp(t,"i"))||e.user.email.match(new RegExp(t,"i"))||e.fecha_vencimiento.match(new RegExp(t,"i"))||e.membership.name.match(new RegExp(t,"i")):e))},W=v(null),Z=v(1);return(l,s)=>{const i=e,u=t,c=a,r=n,d=Qe,m=D("Vcard"),v=R,f=$;return y(),h(f,null,{default:S((()=>[g(" Content Wrapper "),_("div",ut,[_("div",ct,[_("div",rt,[_(u,{class:"w-100"},{default:S((()=>[_(i,{class:"input-select"},{default:S((()=>[pt,_("div",dt,[P(_("select",{"onUpdate:modelValue":s[1]||(s[1]=e=>T.value=e),onChange:z},[(y(!0),h(k,null,x(G.value,((e,t)=>(y(),h("option",{key:`estados-${t}`,value:e.value},C(e.name),9,["value"])))),128))],544),[[N,T.value]])])])),_:1})])),_:1})]),_(u,{class:"is-6 column"},{default:S((()=>[mt,_(i,{icon:"feather:search"},{default:S((()=>[P(_("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>o.value=e),class:"input custom-text-filter",placeholder:"Search...",onKeyup:M(V,["enter"])},null,40,["onKeyup"]),[[E,o.value]])])),_:1})])),_:1}),vt,_("div",ft,[bt,P(_("input",{type:"date",onChange:z,id:"fecha_pago",class:"input custom-text-filter","onUpdate:modelValue":s[3]||(s[3]=e=>L.value=e)},null,544),[[E,L.value]])]),j(lt).dataNew.data1.length?(y(),h(r,{key:0,class:"column is-12 mb-4"},{default:S((()=>[_(c,{options:j(lt).options,onReady:j(lt).onReady},null,8,["options","onReady"])])),_:1})):g("v-if",!0),_("div",yt,[(y(!0),h(k,null,x(j(X),((e,t)=>(y(),h("div",{class:"column is-4 mb-4",key:`ii-${t}`},[_(r,{onClick:t=>H.value=e.membership_name,color:e.membership_name==H.value?"info":void 0},{default:S((()=>[_("p",ht,C(e.membership_name),1)])),_:2},1032,["onClick","color"])])))),128))]),2==Z.value?(y(),h("div",_t,[Object.keys(j(p)).length>0?(y(),h(d,{key:0,"data-stripe":j(p),defer:!j(p)},null,8,["data-stripe","defer"])):g("v-if",!0),_("div",gt,[(y(!0),h(k,null,x(j(F),((e,t)=>(y(),h("div",{key:`segunmenrecvia${t}`},[_(r,{class:"h-100 btn-card",onClick:e=>{return l=t,void(W.value=F.value[l]);var l}},{default:S((()=>[_("p",null,C(e.membership.name),1)])),_:2},1032,["onClick"])])))),128))]),W.value?(y(),h(m,{key:1,class:"column is-12"},{default:S((()=>[_("p",null,C(W.value.membership.name),1),_("p",null,C(W.value.count),1),kt,g(' <subscription-list\r\n              :colgrid="\'is-6\'"\r\n              :suscripciones="datosDeMembresia.data"\r\n              :filter-local="true"\r\n            /> ')])),_:1})):g("v-if",!0),(y(!0),h(k,null,x(j(w),((e,t)=>(y(),h("div",{key:`suscripcion-${t}`,class:"column is-6"},[_(r,null,{default:S((()=>[_("p",xt,C(t),1),P(_("input",{type:"text","onUpdate:modelValue":t=>e.search=t,class:"input mb-4",placeholder:"Search"},null,8,["onUpdate:modelValue"]),[[E,e.search]]),_(v,{colgrid:"is-6",suscripciones:K(e.data,e.search),"filter-local":!0},null,8,["suscripciones"])])),_:2},1024)])))),128))])):g("v-if",!0),_(r,{class:"mb-4"},{default:S((()=>[_("p",jt,C(j(q))+" Subscriptions",1)])),_:1}),(y(!0),h(k,null,x(j(X),((e,t)=>(y(),h(r,{class:"column columns is-multiline is-12 mb-6",key:`ii-${t}`},{default:S((()=>[_("div",St,[_("div",Ct,[_("p",wt,C(e.membership_name)+" ("+C(e.conteo_suscripciones)+" subscriptions) ",1)]),_("div",Vt,[_(r,null,{default:S((()=>[_(c,{options:e.optionsGender},null,8,["options"])])),_:2},1024)]),_("div",At,[_(r,null,{default:S((()=>[_(c,{options:e.optionsRangos},null,8,["options"])])),_:2},1024)]),Object.keys(e.diciplines).length?(y(),h("div",Ot,[Dt,_(r,null,{default:S((()=>[_("div",Pt,[_("table",Nt,[Et,_("tbody",null,[(y(!0),h(k,null,x(e.diciplines,((e,t)=>(y(),h("tr",{key:`iy-${t}`},[_("td",null,C(e.dicipline_name),1),_("td",null,C(e.numero_miembros),1),_("td",null,C(e.members.Male),1),_("td",null,C(e.members.Female),1)])))),128))])])])])),_:2},1024)])):g("v-if",!0)])])),_:2},1024)))),128))])])])),_:1})}}});export default Mt;