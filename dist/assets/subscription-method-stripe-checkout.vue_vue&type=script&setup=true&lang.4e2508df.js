import{n as e,A as s,m as a}from"./index.7970d1ab.js";import{r as t,A as l,d as i,c as n,i as c,j as o,l as u,k as r,S as p,H as d,F as m,G as v,U as f,W as y,_}from"./vendor.b96c0b62.js";import{c as h}from"./Discounts.73bb2dfd.js";import{_ as b}from"./V-Card.vue_vue&type=script&setup=true&lang.d3d76712.js";import{_ as g}from"./V-Button.vue_vue&type=script&setup=true&lang.940c9f5e.js";import{_ as w}from"./V-Control.9f6b030b.js";import{_ as C}from"./V-Field.vue_vue&type=script&setup=true&lang.9839f63b.js";import{_ as j}from"./V-Modal.vue_vue&type=script&setup=true&lang.793fc7c9.js";const x=t(null),I=t(null),k={memberships_id:null,recurrences_id:null,is_initiation_fee:!1,is_card_price:!1,discount:null,is_last_month:!1,multigym:!1,prorrateo:!0,schedules:"",leo_vet_fr:!1},E=l(JSON.parse(JSON.stringify(k))),$=()=>{Object.assign(E,JSON.parse(JSON.stringify(k)))},N=t([{typeInput:"selectDataActionChangeInput",name:"discount",placeholder:"Discount",values:[],data:null,model:"",disabled:!1,class:"is-3",isLabel:!0,change:function(s){""!=this.model?h(this.values.find((e=>e.id==this.model)).code,"membership").then((s=>{this.data=s.data,e.success("Discuount valid")})).catch((s=>{e.error(s.response.data),this.model=""})):this.data=null}},{typeInput:"switchEventChangeInput",name:"is_initiation_fee",values:["YES","NO"],placeholder:"Initiation fee",default:!1,model:E.is_initiation_fee,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_card_price",placeholder:"Card",values:["NO","YES"],model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"is_last_month",placeholder:"Last Month",values:["NO","YES"],model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",default:!1,name:"multigym",placeholder:"MultiGym",values:["NO","YES"],model:!1,disabled:!1,class:"is-3",isLabel:!0},{typeInput:"switchEventChangeInput",name:"prorrateo",values:["","Prorated Payment"],model:!0,default:!0,required:!1,class:"is-3",isLabel:!0},{typeInput:"switch",name:"leo_vet_fr",values:["","LAW ENFORCEMENT OFFICER"],html:'<div class="ml-4"><p><small>VETERAN</small></p><p><small>FIRTS RESPONDER</small></p></div>',model:!1,default:!1,required:!1,class:"is-4",isLabel:!0,categories:["Adult"],typeMember:["Individual"]},{typeInput:"date",name:"schedules",placeholder:"Subscription Schedules",model:"",required:!1,class:"is-4",isLabel:!0}]);l({recurrence:!0,locations:[],diciplines:[],member:{}});const S=async()=>await s.get("v2/get_membership"),O=async(e=null,a=null)=>await s.get(`discounts?status=${e}&applies=${a}`),F=async e=>await s.post("v2/presupuesto_member",e),L=async e=>await s.post("v2/create_suscripcion",e),P=async(e,a)=>await s.post(`v2/suscripcion/remplace/${e}`,a),q=async(e,a=!0)=>await s.post(`v2/get_suscripcion/${e}?is_member=${a}`),R=async e=>await s.post(`v2/get_suscripcion/code/${e}`),V=async(e,a)=>await s.post(`v2/suscripcion/payment/${e}`,a),A=async(e,a)=>await s.post(`v2/suscripcion/cancel/${e}`,a),D=async(e,a)=>await s.post(`v2/suscripcion/upgrade/${e}`,a),M=async(e,a)=>await s.post(`v2/suscripcion/update/${e}`,a),T=async(e,a)=>await s.post(`v2/suscripcion/hold/${e}`,a),J=async(e,a)=>await s.post(`v2/suscripcion/process_multigym/${e}`,a),Y=async(e,a)=>await s.post(`v2/suscripcion/get_amount_multigym/${e}`,a),B=async e=>await s.post(`v2/suscripcion/calculo_suscripcion_restante/${e}`),z=u("div",{class:"d-flex justify-content-between align-items-start"},[u("div",null,[u("p",{class:"title is-3"},[u("i",{class:"fas fa-money-check-alt","aria-hidden":"true"})]),u("p",{class:"title is-5"},"Cash")]),u("p",{class:"title is-6"},[u("i",{class:"fas fa-check","aria-hidden":"true"})])],-1),G={class:"d-flex mb-4 justify-content-between"},U={class:"title is-5"},W=v(" Total: "),H={class:"title is-5"},K=v(" Cash Total: "),Q={class:"\r\n          d-flex\r\n          justify-content-center\r\n          align-items-center\r\n          flex-column\r\n          mb-4\r\n        "},X=u("p",{class:"title is-5 mb-4"},"Change Back:",-1),Z={class:"title is-3 mb-0"},ee={class:"d-flex justify-content-center flex-wrap mb-4"},se=u("div",{class:"w-100"},null,-1),ae={class:"d-flex justify-content-center"},te=v("Reset"),le=v("Confirm");var ie=i({expose:[],props:{total:{type:Number,required:!0}},emits:["onPayment"],setup(e,{emit:s}){const l=e,i=t(!1),h=t(0),x=n((()=>{const e=parseFloat(h.value)-parseFloat(l.total);return e>0?e:0})),I=()=>{i.value=!1,s("onPayment",{cash:h.value,changeBack:x.value,amount:l.total,payment_type_id:1})};return(s,t)=>{const l=b,n=g,k=w,E=C,$=j;return c(),o(p,null,[u(l,{onClick:t[1]||(t[1]=e=>i.value=!0),color:"warning",class:"mx-2 btn-card w-100 justify-content-center"},{default:r((()=>[z])),_:1}),u($,{title:"",open:i.value,actions:"center",onClose:t[5]||(t[5]=e=>i.value=!1)},{content:r((()=>[u("div",G,[u("p",U,[W,u("b",null,d(m(a)(e.total)),1)]),u("p",H,[K,u("b",null,d(m(a)(h.value)),1)])]),u("div",Q,[X,u("p",Z,[u("b",null,d(m(a)(m(x))),1)])]),u("div",ee,[u(n,{bold:"",class:"m-3",style:{"font-size":"14px"},onClick:t[2]||(t[2]=s=>h.value=e.total)},{default:r((()=>[v(" Full Payment "+d(m(a)(e.total)),1)])),_:1}),se,(c(),o(p,null,f([5,10,20,50,100],((e,s)=>u(n,{key:`calculato-${s}`,bold:"",class:"m-3",style:{"font-size":"14px"},onClick:s=>(e=>{h.value=parseFloat(h.value)+parseFloat(e)})(e)},{default:r((()=>[v(" $"+d(e),1)])),_:2},1032,["onClick"]))),64))]),u("div",ae,[u(E,null,{default:r((()=>[u(k,null,{default:r((()=>[y(u("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>h.value=e),type:"text",class:"input text-center",placeholder:"Cash"},null,512),[[_,h.value]])])),_:1})])),_:1})])])),action:r((()=>[u(n,{onClick:t[4]||(t[4]=e=>h.value=0),class:"d-flex justify-content-center",raised:""},{default:r((()=>[te])),_:1}),u(n,{color:"success",onClick:I,disabled:e.total>h.value,class:"d-flex justify-content-center",raised:""},{default:r((()=>[le])),_:1},8,["disabled"])])),_:1},8,["open"])],64)}}});const ne={class:"d-flex justify-content-between align-items-start"},ce=u("div",null,[u("p",{class:"title is-3"},[u("i",{class:"fas fa-credit-card","aria-hidden":"true"})]),u("p",{class:"title is-5"},"Stripe Checkout")],-1),oe={key:0,class:"title is-6"},ue=u("i",{class:"fas fa-check","aria-hidden":"true"},null,-1);var re=i({expose:[],props:{total:{type:Number,required:!0},user:{type:Object,required:!0}},emits:["onPayment"],setup(e,{emit:s}){const a=e,l=t(!1),i=()=>{l.value=!1,s("onPayment",{amount:a.total,payment_type_id:3})};return(e,s)=>{const a=b;return c(),o(a,{onClick:i,color:"success",class:"mx-2 btn-card w-100 justify-content-center"},{default:r((()=>[u("div",ne,[ce,(c(),o("p",oe,[ue]))])])),_:1})}}});export{ie as _,Y as a,S as b,A as c,O as d,x as e,F as f,R as g,T as h,N as i,B as j,D as k,P as l,V as m,re as n,k as o,J as p,q,$ as r,E as s,I as t,M as u,L as v};
