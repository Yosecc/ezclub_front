import{_ as e}from"./V-Control.b8a16a92.js";import{_ as a}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as s}from"./V-Placeload.8fe4e440.js";import{_ as t}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as l}from"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import{_ as r}from"./V-Dropdown.7cdac118.js";import{d as u,ad as o,r as i,o as n,w as p,i as c,j as m,k as v,l as d,a2 as f,F as b,P as g,O as y,I as _,W as j,Z as h,S as V,U as x,H as A,_ as k,a0 as S,G as P}from"./vendor.84e48f7c.js";import{G as C,H as M,I as w}from"./Members.7ac69455.js";import{n as L,A as q}from"./index.160bf48b.js";import{_ as D}from"./MembersListV2.vue_vue&type=style&index=0&lang.40b6fce9.js";import{_ as B}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a5234663.js";import{p as F}from"./sidebarLayoutState.bceb862d.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./useDropdown.3858e0aa.js";import"./Diciplines.7b409772.js";import"./Discounts.3d6075c0.js";import"./Memberships.509458ca.js";import"./V-PlaceholderPage.vue_vue&type=script&setup=true&lang.3f0a1890.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./FlexTableDropdown.vue_vue&type=script&setup=true&lang.7c52ce45.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import"./V-FlexPagination.vue_vue&type=script&setup=true&lang.8a37085a.js";import"./search-4-dark.12f0bf0d.js";import"./Subscriptions.cd80af85.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.627ca3a4.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import"./Companies.49d077d5.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";const T=d("div",{class:"icon"},[d("i",{class:"lnir lnir-round-box-check","aria-hidden":"true"})],-1),$=d("div",{class:"meta"},[d("span",null,"Process Subscriptions"),d("span",null,"Subscriptions automatic")],-1);var z=u({expose:[],props:{},setup(e){o();const a=i(!1),s=i(!1);n((()=>{})),p((()=>s.value),(e=>{e&&new Pusher("2cd5b586808b2f41f8e6",{cluster:"us2"}).subscribe("process_subscription_channel").bind("process_subscription_event",(function(e){let a=`${e.message.member.id}: ${e.message.member.name} ${e.message.member.last_name} <br> ${e.message.message}`;e.message.status?(C.value.find((a=>a.id==e.message.member.id)).isSolvente=!0,L.success(a)):L.error(a)}))}));const t=()=>{M.value.length&&(s.value=!0,a.value=!0,w().then((e=>{L.success("Finalizado"),M.value=[],a.value=!1})).catch((e=>{a.value=!1,L.error(e.response.data)})))};return(e,s)=>{const u=l,o=r;return c(),m(o,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:v((()=>[d(u,{size:"small",active:a.value},{default:v((()=>[d("a",{onClick:f(t,["prevent"]),role:"menuitem",class:"dropdown-item is-media",disabled:0==b(M).length},[T,$],8,["onClick","disabled"])])),_:1},8,["active"])])),_:1})}}});const I={class:"page-content-inner"},U={class:"mb-5 columns is-multiline"},N={class:"is-2 column"},O={class:"select"},W={key:0,class:"columns is-multiline"},G={key:1},H={class:"d-flex justify-content-center mb-5"},K=P(" All "),E=P(" Adult "),Z=P(" Minor "),J=P(" Temporary Members "),Q={class:"w-100 d-flex justify-content-end mb-4"};var R=u({expose:[],setup(l){F.value="Members",g({title:"List Members"});const r=y(),u=i(""),o=i("all"),f=i([]),P=i(!0);i("all"),p((()=>r.query.page),(()=>{M("all",u.value,r.query.page,w.value,!1)})),p((()=>u.value),(()=>{}));const M=async(e,a="",s=1,t=null,l=!0,r=null)=>{o.value=e,P.value=!0,await q.get("members",{params:{[o.value]:!0,filter:a,page:s,category:t,estado:r}}).then((e=>{C.value=e.data.members,f.value=e.data.pagination,P.value=!1,l&&T()})).catch((e=>{P.value=!1,console.log(e)}))},w=i("All");n((()=>{M("all",u.value,r.query.page,"All")}));const L=()=>{M("all",u.value,1,w.value,!1)},T=()=>{P.value=!0,setTimeout((()=>{P.value=!1}),500)},$=i("All"),R=i([{value:"All",name:"All"},{value:"active",name:"Active"},{value:"due",name:"Due"},{value:"expired",name:"Expired"},{value:"sincard",name:"No card"},{value:"sin_factura",name:"No invoice"},{value:"nomembershipcontarjeta",name:"Without membership, with card"},{value:"cancel",name:"Cancel"},{value:"nomembership",name:"No membership"},{value:"schedules",name:"Schedules"}]),X=()=>{M("all",u.value,1,w.value,!1,$.value)};return(l,o)=>{const i=e,n=a,p=s,g=t,y=z,q=D,F=B;return c(),m(F,null,{default:v((()=>[_(" Content Wrapper "),d("div",I,[d("div",U,[d("div",N,[d(n,{class:"w-100"},{default:v((()=>[d(i,{class:"input-select"},{default:v((()=>[d("div",O,[j(d("select",{"onUpdate:modelValue":o[1]||(o[1]=e=>$.value=e),onChange:X},[(c(!0),m(V,null,x(R.value,((e,a)=>(c(),m("option",{key:`estados-${a}`,value:e.value},A(e.name),9,["value"])))),128))],544),[[h,$.value]])])])),_:1})])),_:1})]),d(n,{class:"is-8 column"},{default:v((()=>[d(i,{icon:"feather:search"},{default:v((()=>[j(d("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>u.value=e),class:"input custom-text-filter",placeholder:"Search...",onKeyup:S(L,["enter"])},null,40,["onKeyup"]),[[k,u.value]])])),_:1})])),_:1}),_(' <div class="is-2 column">\r\n          <V-Button\r\n            :to="{ name: \'members-create\' }"\r\n            color="primary"\r\n            icon="fas fa-plus"\r\n            elevated\r\n            class="w-100"\r\n          >\r\n            Add Members\r\n          </V-Button>\r\n        </div> ')]),P.value?(c(),m("div",W,[(c(),m(V,null,x(12,(e=>d("div",{class:"mb-2 column is-4",key:e},[d(p,{height:"120px"})]))),64))])):(c(),m("div",G,[d("div",H,[d(n,{addons:""},{default:v((()=>[d(i,null,{default:v((()=>[d(g,{color:"All"==w.value?"primary":void 0,onClick:o[3]||(o[3]=e=>(M("all"),w.value="All")),rounded:""},{default:v((()=>[K])),_:1},8,["color"])])),_:1}),d(i,null,{default:v((()=>[d(g,{color:"Adult"==w.value?"primary":void 0,onClick:o[4]||(o[4]=e=>(M("all",u.value.value,b(r).query.page,"Adult",!1),w.value="Adult")),rounded:""},{default:v((()=>[E])),_:1},8,["color"])])),_:1}),d(i,null,{default:v((()=>[d(g,{color:"Minor"==w.value?"primary":void 0,onClick:o[5]||(o[5]=e=>(M("all",u.value.value,b(r).query.page,"Minor",!1),w.value="Minor")),rounded:""},{default:v((()=>[Z])),_:1},8,["color"])])),_:1}),d(i,null,{default:v((()=>[d(g,{color:"Prospect"==w.value?"primary":void 0,onClick:o[6]||(o[6]=e=>(M("all",u.value.value,b(r).query.page,"Prospect",!1),w.value="Prospect")),rounded:""},{default:v((()=>[J])),_:1},8,["color"])])),_:1})])),_:1})]),d("div",Q,[d(y)]),d(q,{members:b(C),"pagination-data":f.value,filters:u.value,onOnSearch:l.onSearch},null,8,["members","pagination-data","filters","onOnSearch"])]))])])),_:1})}}});export default R;
