import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.c7f3abc0.js";import{_ as t}from"./SidebarLayout.vue_vue&type=script&setup=true&lang.72d242e7.js";import{d as s,w as r,r as a,I as p,o as u,i,j as o,H as n,k as c}from"./vendor.5bccebbb.js";import{e as l,c as m}from"./Companies.4241e8c8.js";import{e as v,a as d}from"./index.0622f2b5.js";import{g as j,r as f}from"./Recurrences.ab11cfc6.js";import{i as y,b as g,c as _,d as b,n as V}from"./Memberships.ea09c51f.js";import{g as x}from"./Discounts.04f18224.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.09938173.js";import"./V-Button.vue_vue&type=script&setup=true&lang.e455201a.js";import"./V-Placeload.8ccc7bfb.js";import"./V-Control.a9c2cbb9.js";import"./V-Field.vue_vue&type=script&setup=true&lang.a4d012f3.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.80224232.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.5d45ce20.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.3df65f9d.js";import"./V-Card.vue_vue&type=script&setup=true&lang.cb28cdf7.js";import"./formLayaut.vue_vue&type=style&index=0&lang.5831094b.js";import"./V-Loader.vue_vue&type=script&setup=true&lang.0bff9431.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.0d0e2b74.js";import"./Diciplines.2c612a5e.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.241008cf.js";import"./useDropdown.04bc7533.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.c1979dac.js";import"./V-Dropdown.e4c10296.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.c4247789.js";import"./activePanelState.5e0ea050.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.22802a6a.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.df44a07c.js";import"./video.3bfbcca0.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.f802abe5.js";import"./darkModeState.ac3ed3a0.js";import"./AnimatedLogo.1a22360b.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.14755e12.js";import"./V-Block.vue_vue&type=script&setup=true&lang.661160e9.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.6f79d543.js";import"./userPopovers.f4b9fc60.js";import"./sidebarLayoutState.620c70af.js";const h={class:"page-content-inner"};var C=s({expose:[],setup(s){r((()=>m.value),(()=>{d(y,"locations",l.value.filter((e=>1==e.status)))}));const C=a(!0);return p((()=>{let e=["all_diciplines"];v(y.filter((t=>!e.includes(t.name)))),v(_),v(b),v(V),v(g),x(1,"membership").then((e=>{d(g,"descuento_vet",e.data.discounts)})),j().then((()=>{d(_,"amounts_recurring",f.value.filter((e=>1===e.is_recurrence))),d(b,"amounts_uniques",f.value.filter((e=>0===e.is_recurrence))),C.value=!1}))})),(s,r)=>{const a=e,p=t;return u(),i(p,null,{default:o((()=>[n(" Content Wrapper "),c("div",h,[c(a,{"is-loading":C.value,type:"create"},null,8,["is-loading"])])])),_:1})}}});export default C;
