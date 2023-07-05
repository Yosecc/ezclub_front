import{_ as e}from"./V-Button.vue_vue&type=script&setup=true&lang.cc6d2b95.js";import{_ as t}from"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.9cf4b304.js";import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.d100ee36.js";import{_ as a}from"./V-Checkbox.vue_vue&type=script&setup=true&lang.1df2020f.js";import{_ as i}from"./V-Control.63a8a239.js";import{_ as l}from"./V-Field.vue_vue&type=script&setup=true&lang.b3ed284d.js";import{_ as o}from"./V-Card.vue_vue&type=script&setup=true&lang.e9e64dc2.js";import{_ as n}from"./V-Tag.vue_vue&type=script&setup=true&lang.f1d0c6ac.js";import{_ as r}from"./V-FlexPagination.vue_vue&type=script&setup=true&lang.2b60651d.js";import{_ as c}from"./subscriptionIndex.vue_vue&type=script&setup=true&lang.19b9af3a.js";import{_ as u}from"./V-Modal.vue_vue&type=script&setup=true&lang.ef7028a7.js";import{d as m,u as p,r as d,b as f,w as y,h as v,i as g,l as b,H as _,k as h,R as k,F as x,K as j,G as Y,A as D,ae as C,P as z,ad as P,S as V,B as S}from"./vendor.4454b83d.js";import{_ as M,a as w}from"./search-4-dark.12f0bf0d.js";import{b as O}from"./index.9398d335.js";import{e as q}from"./Members.1d4e3866.js";import{t as $,q as A}from"./Subscriptions.02e6a80c.js";import{_ as B}from"./V-Loader.vue_vue&type=script&setup=true&lang.069747cb.js";const I={class:"d-flex align-items-center"},L={class:"mb-0 mr-3"},T=Y("Payment Automatic"),E=b("p",{class:"title is-5"}," Please confirm the selection of the following subscriptions. ",-1),F=b("p",{class:"title is-7"}," When confirming, a work queue will be entered to carry out the automatic collections, keep in mind that the change of status or result of the payment attempt may take a few minutes to update. ",-1),R=b("p",{class:"title",style:{"font-size":"15px"}}," Click the confirm button to continue ",-1),N=Y("Confirm");var U=m({expose:[],props:{id_seleccionados:{type:Object,required:!0},suscripciones:{type:Object}},emits:["onPayment"],setup(t,{emit:s}){const a=t;p();const i=d(!1),l=f((()=>{if(Object.keys(a.suscripciones).length){return Object.keys(a.suscripciones).map((function(e){return a.suscripciones[e]})).filter((e=>a.id_seleccionados.data.includes(e.id)))}return[]}));d([]);const o=()=>{i.value=!0},n=d(!1);y((()=>i.value),(e=>{console.log("cambio,modal",e)}));const r=()=>{confirm("This action could result in charges to the member. do you wish to continue?")?(n.value=!0,$({data:a.id_seleccionados}).then((e=>{c(),s("onPayment",{}),n.value=!0})).catch((e=>{c(),s("onPayment",{}),n.value=!0}))):c()},c=()=>{i.value=!1};return(t,s)=>{const m=e,p=Ce,d=B,f=u;return v(),g(k,null,[b("div",I,[b("p",L,"Selected: "+_(a.id_seleccionados.data.length),1),b(m,{onClick:o,color:"primary"},{default:h((()=>[T])),_:1})]),b(f,{title:`Selected Subscription: ${a.id_seleccionados.data.length}`,open:i.value,actions:"center",size:"big",noclose:"",onClose:c},{content:h((()=>[E,F,R,x(l).length?(v(),g(p,{key:0,suscripciones:x(l),filters:"",isselectedmultiple:!1,ispaginator:!1,class:"mt-4"},null,8,["suscripciones"])):j("",!0)])),action:h((()=>[b(d,{active:n.value},{default:h((()=>[b(m,{color:"success",onClick:r,class:"d-flex justify-content-center",raised:""},{default:h((()=>[N])),_:1})])),_:1},8,["active"])])),_:1},8,["title","open"])],64)}}});const W={key:0,class:"w-100 d-flex mb-4 justify-content-end align-items-center"},G={class:"page-content-inner"},H={class:"tile-grid tile-grid-v1"},K=b("img",{class:"light-image",src:M,alt:""},null,-1),J=b("img",{class:"dark-image",src:w,alt:""},null,-1),Q={class:"tile-grid-item-inner align-items-start justify-content-between"},X={key:0},Z={key:0,class:"mb-4 user"},ee={style:{"font-size":"12px"}},te={style:{"font-size":"12px"}},se={key:1,class:"mb-4 member"},ae={style:{"font-size":"12px"}},ie={style:{"font-size":"12px"}},le={key:0},oe={class:"mb-4 description"},ne={key:0,style:{"font-size":"12px"}},re={key:1,class:"title is-5 mb-1"},ce={class:"title is-6"},ue={class:"pago"},me={key:0,style:{"font-size":"12px"}},pe={style:{"font-size":"12px"}},de={key:1,style:{"font-size":"12px"}},fe={key:2,style:{"font-size":"12px"},class:"mb-4"},ye={style:{"font-size":"10px"}},ve=b("b",null," Intent:",-1),ge={key:0,style:{"font-size":"10px"}},be={style:{"font-size":"10px"}},_e={key:4},he=b("p",null,null,-1),ke={class:"d-flex mt-2"},xe={key:0,class:"mr-1"},je={key:1,class:"mr-1"},Ye={key:2,class:"mr-1"},De=Y("View member profile ");var Ce=m({expose:[],props:{suscripciones:{type:Array,required:!0,default:[]},name:{type:String,default:"Item"},paginationData:{type:Object,default:{itemPerPage:15,totalItems:1,currentPage:1,maxLinksDisplayed:7}},filters:{type:String},colgrid:{type:String,default:"is-4"},isselectedmultiple:{type:Boolean,default:!1},ispaginator:{type:Boolean,default:!0}},emits:["filterChange","onSearch","onReload"],setup(m,{emit:p}){const M=m;z(),P(),d(""),d("all"),d({});const w=f((()=>M.suscripciones));y((()=>w.value),(e=>{}));const $=d(!1),B=d(null),I=d(null),L=e=>{$.value=!0,e.member&&(B.value=e.member.id),e.member||(I.value=e.code)},T=()=>{$.value=!1,B.value=null};y((()=>M.suscripciones),(()=>{}));const E=d([]);y((()=>E.value),(e=>{0!=e.length?(membersSelected.value=[],w.value.forEach((e=>{membersSelected.value.push(e.id)}))):membersSelected.value=[]}));const F=D({data:[]}),R=()=>{F.data=[],p("onReload")};return(p,d)=>{var f,y;const D=U,z=t,P=s,E=a,N=i,Ce=l,ze=o,Pe=n,Ve=r,Se=c,Me=e,we=u;return v(),g("div",null,[x(F).data.length?(v(),g("div",W,[b(D,{id_seleccionados:x(F),suscripciones:M.suscripciones,onOnPayment:R},null,8,["id_seleccionados","suscripciones"])])):j("",!0),b("div",G,[b("div",H,[b(z,{class:[0!==x(w).length&&"is-hidden"],title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:h((()=>[K,J])),_:1},8,["class"]),b(C,{name:"list",tag:"div",class:"columns is-multiline"},{default:h((()=>[(v(!0),g(k,null,V(x(w),(e=>(v(),g("div",{key:`${M.name}-${e?e.id:"e"}`,class:["column",m.colgrid],style:{cursor:"pointer"}},[e?(v(),g("div",{key:0,class:["tile-grid-item cardprofile h-100",""],style:{backgroundColor:e.estado.color,overflow:"hidden"}},[b("div",Q,[b("div",{onClick:t=>L(e),class:"tile-grid-item-inner align-items-start"},[e.member?(v(),g("div",X,[b(P,{picture:`${x(O)}storage/${e.member.photo}`,color:"primary",initials:x(q)(e.member.name,e.member.last_name),size:"medium",class:"mr-4 mb-4"},null,8,["picture","initials"])])):j("",!0),b("div",null,[e.member?(v(),g("div",se,[b("p",ae,_(e.member.name)+" "+_(e.member.last_name),1),b("p",ie,_(e.member.email),1)])):(v(),g("div",Z,[b("p",ee," Username: "+_(e.user.name),1),b("p",te," Email: "+_(e.user.email),1)]))])],8,["onClick"]),M.isselectedmultiple?(v(),g("div",le,[b(Ce,{class:"is-flex"},{default:h((()=>[b(N,{raw:"",subcontrol:""},{default:h((()=>[b(E,{modelValue:x(F).data,"onUpdate:modelValue":d[1]||(d[1]=e=>x(F).data=e),value:e.id},null,8,["modelValue","value"])])),_:2},1024)])),_:2},1024)])):j("",!0)]),b("div",{onClick:t=>L(e)},[b("div",oe,[e.recurrence?(v(),g("p",ne,_(e.recurrence.recurrencia.descriptions),1)):j("",!0),e.membership?(v(),g("p",re,_(e.membership.name),1)):j("",!0),b("p",ce,_(e.estado.estado_pago),1)]),b("div",ue,[e.schedules_start?(v(),g("p",me," Next Schedules Start: "+_(x(S)(e.schedules_start,"YYYY-MM-DD").format("MM-DD-YYYY")),1)):j("",!0),b("p",pe," Next Payment: "+_(x(S)(e.estado.fecha_vencimiento,"YYYY-MM-DD").format("MM-DD-YYYY")),1),e.fecha_suspencion?(v(),g("p",de," Canceled: "+_(x(S)(e.fecha_suspencion,"YYYY-MM-DD").format("MM-DD-YYYY")),1)):j("",!0),e.payment_type?(v(),g("p",fe," Payment Type: "+_(e.payment_type.name),1)):j("",!0),e.estado.ultimo_intento?(v(),g(ze,{key:3,class:"px-3 py-2"},{default:h((()=>[b("p",ye,[b("b",null,"Status: "+_(x(A).find((t=>t.value==e.estado.ultimo_intento.estado)).name),1),ve,Y(" "+_(e.estado.ultimo_intento.intento),1)]),"pagado"!=e.estado.ultimo_intento.estado?(v(),g("p",ge,_(e.estado.ultimo_intento.pago_id),1)):j("",!0),b("p",be," Date: "+_(e.estado.ultimo_intento.fecha),1)])),_:2},1024)):(v(),g("div",_e,[he])),b("div",ke,[e.member&&e.member.leo_vet_fr?(v(),g("div",xe,[b(Pe,{label:"LEO",class:"mr-1",color:"orange"})])):j("",!0),e.discount?(v(),g("div",je,[b(Pe,{label:`${e.discount.name}`,class:"mr-1",color:"secondary"},null,8,["label"])])):j("",!0),e.user.cards.length?(v(),g("div",Ye,[b(Pe,{label:"Cards",class:"mr-1",color:"purple"})])):j("",!0)])])],8,["onClick"])],6)):j("",!0)],2)))),128))])),_:1}),x(w).length>0&&M.ispaginator?(v(),g(Ve,{key:0,"item-per-page":null!=(f=M.paginationData.per_page)?f:15,"total-items":null!=(y=M.paginationData.total)?y:0,"current-page":M.paginationData.current_page},null,8,["item-per-page","total-items","current-page"])):j("",!0)])]),b(we,{open:$.value,size:"big",actions:"center",onClose:T},{content:h((()=>[$.value?(v(),g(Se,{key:0,member_id:B.value,code:I.value},null,8,["member_id","code"])):j("",!0)])),action:h((()=>[B.value?(v(),g(Me,{key:0,to:{name:"members-profile",query:{id:B.value}},color:"info",raised:""},{default:h((()=>[Y("View member profile "+_(I.value),1)])),_:1},8,["to"])):j("",!0),I.value?(v(),g(Me,{key:1,to:{name:"members-profile",query:{code:I.value}},color:"info",raised:""},{default:h((()=>[De])),_:1},8,["to"])):j("",!0)])),_:1},8,["open"])])}}});export{Ce as _};
