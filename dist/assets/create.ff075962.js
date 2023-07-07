import{_ as e}from"./V-Card.vue_vue&type=script&setup=true&lang.b57414a9.js";import{_ as t}from"./V-Loader.vue_vue&type=script&setup=true&lang.a67ef8b7.js";import{_ as a}from"./inputsLayaut.vue_vue&type=style&index=0&lang.9a5f1b2d.js";import{_ as s}from"./V-SwitchBlock.vue_vue&type=script&setup=true&lang.f9906d24.js";import{_ as l}from"./V-Control.b8a16a92.js";import{_ as r}from"./V-Field.vue_vue&type=script&setup=true&lang.5a5e683f.js";import{_ as i}from"./V-Button.vue_vue&type=script&setup=true&lang.115c9f56.js";import{_ as o}from"./Presupuesto.vue_vue&type=script&setup=true&lang.342fc7c8.js";import{_ as n}from"./SearchBar.vue_vue&type=style&index=0&lang.85da278c.js";import{c as u,_ as c,a as d,b as p}from"./subscription-method-stripe-checkout.vue_vue&type=script&setup=true&lang.cfe994af.js";import{_ as m}from"./V-Tag.vue_vue&type=script&setup=true&lang.43768b74.js";import{_ as v}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.a5234663.js";import{d as f,P as y,O as _,ad as h,r as b,A as g,b as j,w as x,o as V,R as w,i as k,j as C,k as T,l as z,S,U as L,F as P,H as I,I as A,W as B,G as O}from"./vendor.84e48f7c.js";import{p as Y}from"./sidebarLayoutState.bceb862d.js";import{b as M,d as E,i as U,e as D,s as H,f as R,x as F}from"./Subscriptions.cd80af85.js";import{e as G,c as $,s as q,d as N}from"./config.0a655dd1.js";import{a as W,g as J,e as K,m as Q,n as X,s as Z}from"./index.160bf48b.js";import{i as ee}from"./Members.7ac69455.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.8a41fb82.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.f91cc122.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3090aa96.js";import"./V-Placeload.8fe4e440.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.b74dc949.js";import"./MemberCards.6ec9d48d.js";import"./Companies.49d077d5.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.627ca3a4.js";import"./useDropdown.3858e0aa.js";import"./V-Dropdown.7cdac118.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.1503437d.js";import"./activePanelState.de92bd5f.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.1c78e14a.js";import"./video.f5cea5d5.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f7104d79.js";import"./darkModeState.0452d175.js";import"./AnimatedLogo.2dcbd823.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.051c3ce8.js";import"./V-Block.vue_vue&type=script&setup=true&lang.d16ae397.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.e7d23443.js";import"./userPopovers.f4b9fc60.js";import"./Discounts.3d6075c0.js";import"./Diciplines.7b409772.js";import"./Memberships.509458ca.js";const te={class:"columns is-multiline"},ae={class:"column is-9"},se=z("h1",{class:"title is-4"},"1. Select a membership",-1),le={class:"columns is-multiline"},re={class:"title is-4"},ie={class:"column is-3"},oe={class:"title is-5 text-left mt-2"},ne={key:0},ue={key:1},ce={key:0,class:"column is-12"},de=z("h1",{class:"title is-4"},"2. Approve the budget",-1),pe=O("Accept and continue "),me={key:1,class:"column is-12"},ve=z("h1",{class:"title is-4"},[O(" 3. Enter the member's email. "),A(' \r\n          <br />\r\n            <small style="font-size: 12px"\r\n              >* Then select a match if possible...otherwise press ENTER</small\r\n            >\r\n          <br />\r\n            <small style="font-size: 12px"\r\n              >* If you want to register a minor, please enter the email of the\r\n              family member to register</small\r\n            > \r\n        ')],-1),fe={class:"columns is-multiline"},ye={class:"column is-3"},_e=z("p",{class:"title is-6 mb-1"},[z("b",null,"Total")],-1),he={class:"title is-3 mb-0"},be={class:"is-3 column"},ge=z("p",{class:"title is-6"}," You must load a card to continue. If you do not have a card, define the paymentType option as cash ",-1),je={class:"column is-3"},xe=z("p",{class:"title is-6"}," You must load a card to continue. If you do not have a card, define the paymentType option as cash ",-1);var Ve=f({expose:[],setup(f){Y.value="Subscriptions",y({title:"Subscriptions"}),_(),h();const O=b([]),Ve=b(!0),we=b(!1),ke=b(null),Ce=b(null);g({number:5,status:!1,time:5e3});const Te=j((()=>{const e=O.value.find((e=>e.id==H.memberships_id));return null==e?void 0:e.amounts.filter((e=>e.is_recurrence==Ve.value&&null!=e.recurrencia))})),ze=j((()=>{for(var e in H)null!=J(U.value,e)&&(H[e]=J(U.value,e).model);return H}));x((()=>H.memberships_id),(e=>{H.recurrences_id=null,D.value=null,we.value=!1})),V((()=>{Be(),M().then((e=>{O.value=e.data})),E(1,"membership").then((e=>{W(U,"discount",e.data.discounts)})),J(U,"payment_type_id").model=3,G().then((e=>{W(ee,"city_id",$.value),W(ee,"state_id",q.value),W(ee,"country_id",N.value),J(ee.value,"country_id").model=34}))}));const Se=()=>{we.value=!0,setTimeout((()=>{window.scrollTo(0,window.scrollY+500)}),300)},Le=()=>{D.value=null,we.value=!1,Pe.value=!0,R(ze.value).then((e=>{D.value=e.data,setTimeout((()=>{window.scrollTo(0,document.body.scrollHeight||document.documentElement.scrollHeight),Pe.value=!1}),300)})).catch((e=>{Pe.value=!1}))},Pe=b(!1),Ie=async e=>{Ce.value?(Pe.value=!0,H.email=Ce.value,H.subscription_payment_type_id=J(U,"payment_type_id").model,Object.assign(H,e),console.log("solicitud",H),await F(H).then((e=>{window.location.href=e.data.url})).catch((e=>{X.error("Error"),Pe.value=!1}))):X.error("Email is required")},Ae=()=>{setTimeout((()=>{if(console.log("member",ke),ke.value)for(var e in ke.value&&ke.value.user&&(Ye.value=!0),ke.value)"photo"!=e&&Z(ee,e,ke.value[e]);else Z(ee,"email",Ce.value);let t=window.scrollY+window.scrollY/4;window.scrollTo(0,t)}),300)},Be=async()=>{K(U.value),K(ee.value),D.value=null,H.memberships_id=null,H.recurrences_id=null,H.is_initiation_fee=!1,H.is_card_price=!1,H.discount=null,H.is_last_month=!1,H.prorrateo=!0,H.schedules="",H.leo_vet_fr=!1,H.multigym=!1},Oe=j((()=>J(U,"payment_type_id").model));j((()=>!J(ee.value,"category").model));const Ye=b(!1),Me=j((()=>!(3!=Oe.value||!Ye.value)||1==Oe.value)),Ee=(e=null)=>{e&&e.payment_method_id&&(Ye.value=!0)};return(f,y)=>{const _=e,h=t,b=a,g=s,j=l,x=r,V=i,Y=o,M=n,E=u,R=m,F=c,G=d,$=p,q=v,N=w("tooltip");return k(),C(q,null,{default:T((()=>[z("div",te,[z("div",ae,[se,z(_,{class:"mb-4"},{default:T((()=>[z(h,{size:"large",active:!O.value.length},{default:T((()=>[z("div",le,[(k(!0),C(S,null,L(O.value,((e,t)=>(k(),C("div",{key:`membership-${t}`,class:"column is-4 btn btn-card",onClick:t=>P(H).memberships_id=e.id},[z(_,{color:P(H).memberships_id==e.id?"primary":void 0,class:"h-100"},{default:T((()=>[z("div",null,[z("h1",re,I(e.name),1),A(" <p>{{ item }}</p> ")])])),_:2},1032,["color"])],8,["onClick"])))),128))])])),_:1},8,["active"])])),_:1}),z(_,{class:""},{default:T((()=>[z(b,{"inputs-step":P(U)},null,8,["inputs-step"])])),_:1})]),z("div",ie,[z(_,{class:"h-100 d-flex flex-column justify-content-between"},{default:T((()=>[z("div",null,[z(x,null,{default:T((()=>[z(j,null,{default:T((()=>[z(g,{modelValue:Ve.value,"onUpdate:modelValue":y[1]||(y[1]=e=>Ve.value=e),label:"Recurring Subscription",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),(k(!0),C(S,null,L(P(Te),((e,t)=>(k(),C("div",{key:`membership-precios-${t}`,class:"btn btn-card",onClick:t=>P(H).recurrences_id=e.id},[z(_,{color:P(H).recurrences_id==e.id?"primary":void 0,class:"mb-3 py-4"},{default:T((()=>[z("p",null,I(e.recurrencia.descriptions),1),z("p",oe,I(P(Q)(e.amount)),1)])),_:2},1032,["color"])],8,["onClick"])))),128))]),z("div",null,[z(h,{size:"large",active:Pe.value},{default:T((()=>[z(V,{onClick:Le,color:P(D)?void 0:"primary",class:"d-flex justify-content-center mt-6 py-5 w-100",style:{"text-align":"center","text-transform":"uppercase","font-size":"20px","font-weight":"900"}},{default:T((()=>[P(D)?(k(),C("span",ue," restart")):(k(),C("span",ne,"start subscription"))])),_:1},8,["color"])])),_:1},8,["active"])])])),_:1})]),P(D)?(k(),C("div",ce,[de,z(_,null,{default:T((()=>[z(Y,{presupuesto:P(D)},null,8,["presupuesto"]),we.value?A("v-if",!0):(k(),C(V,{key:0,onClick:Se,color:"primary",class:"d-flex justify-content-center py-5 px-6 ml-auto",style:{"text-align":"center","text-transform":"uppercase","font-size":"20px","font-weight":"900"}},{default:T((()=>[pe])),_:1}))])),_:1})])):A("v-if",!0),P(D)&&we.value?(k(),C("div",me,[ve,z(_,{style:{"margin-bottom":"24px"}},{default:T((()=>[z(M,{dato:"email",valor:Ce.value,"onUpdate:valor":y[2]||(y[2]=e=>Ce.value=e),modelValue:ke.value,"onUpdate:modelValue":y[3]||(y[3]=e=>ke.value=e),"not-payment-methods":!1,"not-search":!1,onOnSubmit:Ae},null,8,["valor","modelValue"])])),_:1}),z(_,{style:{"margin-bottom":"24px"}},{default:T((()=>[z("div",fe,[z("div",ye,[z(h,{size:"small",class:"h-100",active:Pe.value},{default:T((()=>[z(_,{class:"mb-4 h-100"},{default:T((()=>[z("div",null,[_e,z("p",he,I(P(Q)(P(D).total)),1)])])),_:1})])),_:1},8,["active"])]),z("div",be,[z(h,{size:"small",active:Pe.value},{default:T((()=>[z(E,{total:P(D).total,onOnPayment:Ie},null,8,["total"])])),_:1},8,["active"])]),A(' <div class="column is-2"> '),A(' <VLoader size="small" class="h-100 mr-0" :active="isLoaderActive">\r\n                <subscription-method-payment-debit-automatic\r\n                  :total="20"\r\n                  :card="false"\r\n                  :user="{ email: dato, id: null }"\r\n                  :new-user="true"\r\n                  :text-card="\'Cards\'"\r\n                  :outline="true"\r\n                  @onPayment="onActionCard"\r\n                >\r\n                  <template #righttop>\r\n                    <VTag\r\n                      v-tooltip="\r\n                        \'This option does not generate any charge to the card\'\r\n                      "\r\n                      color="solid"\r\n                      label="?"\r\n                    />\r\n                  </template>\r\n                </subscription-method-payment-debit-automatic>\r\n              </VLoader> '),A(" </div> "),z("div",{class:["column",(P(Oe),"is-3")]},[z(h,{size:"small",active:Pe.value},{default:T((()=>[z(G,{total:P(D).total,onOnPayment:Ie,define_status:P(Me)},{righttop:T((()=>[3!=P(Oe)||Ye.value?A("v-if",!0):B((k(),C(R,{key:0,color:"solid",label:"?"},null,512)),[[N,"You must load a card to continue. If you do not have a card, define the paymentType option as cash "]])])),modalprev:T((()=>[ge,z(h,{size:"small",class:"h-100 mr-0",active:Pe.value},{default:T((()=>[z(F,{total:20,card:!1,user:{email:Ce.value,id:ke.value&&ke.value.user?ke.value.user.id:null},"new-user":!ke.value||!ke.value.user,"text-card":"Cards (+)",outline:!0,onOnPayment:Ee},{righttop:T((()=>[B(z(R,{color:"solid",label:"?"},null,512),[[N,"This option does not generate any charge to the card"]])])),_:1},8,["user","new-user","text-card"])])),_:1},8,["active"])])),_:1},8,["total","define_status"])])),_:1},8,["active"])],2),z("div",je,[z(h,{size:"small",active:Pe.value},{default:T((()=>[z($,{total:P(D).total,onOnPayment:Ie,define_status:!(3==P(Oe)&&!Ye.value)},{righttop:T((()=>[Ye.value?A("v-if",!0):B((k(),C(R,{key:0,color:"solid",label:"?"},null,512)),[[N,"You must load a card to continue. If you do not have a card, define the paymentType option as cash "]])])),modalprev:T((()=>[xe,z(h,{size:"small",class:"h-100 mr-0",active:Pe.value},{default:T((()=>[z(F,{total:0,card:!1,user:{email:Ce.value,id:ke.value&&ke.value.user?ke.value.user.id:null},"new-user":!ke.value||!ke.value.user,"text-card":"Cards (+)",outline:!0,onOnPayment:Ee},{righttop:T((()=>[B(z(R,{color:"solid",label:"?"},null,512),[[N,"This option does not generate any charge to the card"]])])),_:1},8,["user","new-user","text-card"])])),_:1},8,["active"])])),_:1},8,["total","define_status"])])),_:1},8,["active"])])])])),_:1}),A(' <VLoader :active="isLoaderActive">\r\n          <VButton\r\n            @click="proccessSuscripcion"\r\n            color="info"\r\n            class="d-flex justify-content-center py-5 px-6 ml-auto"\r\n            style="\r\n              text-align: \'center\';\r\n              text-transform: uppercase;\r\n              font-size: 20px;\r\n              font-weight: 900;\r\n            "\r\n          >\r\n            Process\r\n          </VButton>\r\n        </VLoader> '),A(' <VCard v-if="dato">\r\n          <inputsLayaut :inputs-step="inputsInformation" />\r\n          <div v-if="isMinor">\r\n            <VCard>\r\n              <p class="title is-5">Guardian Information</p>\r\n              <inputsLayaut :inputs-step="parentInsputs" />\r\n            </VCard>\r\n          </div>\r\n          <div class="mt-3">\r\n            <p v-if="tiempo.status">\r\n              You will be redirected, please wait a moment ...\r\n              {{ tiempo.number }}\r\n            </p>\r\n            <VLoader size="large" :active="isLoaderActive">\r\n              <VButton\r\n                @click="proccessMember"\r\n                color="info"\r\n                class="d-flex justify-content-center py-5 px-6 ml-auto"\r\n                style="\r\n                  text-align: center;\r\n                  text-transform: uppercase;\r\n                  font-size: 20px;\r\n                  font-weight: 900;\r\n                "\r\n              >\r\n                Continue\r\n              </VButton>\r\n            </VLoader>\r\n          </div>\r\n        </VCard> ')])):A("v-if",!0)])])),_:1})}}});export default Ve;
