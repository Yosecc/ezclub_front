import{_ as e}from"./membershipForm.vue_vue&type=style&index=0&lang.a4bd46d1.js";import{_ as t}from"./settingLayaout.vue_vue&type=script&setup=true&lang.2345ecf5.js";import{l as s}from"./Companies.37ae2b7f.js";import{f as a,t as o}from"./config.1a806660.js";import{h as r,n as p,p as i}from"./Mixin.887f9fe0.js";import{g as u,i as n,a as l,m as c,u as m}from"./Memberships.f0e59e15.js";import{d as v,r as d,w as f,A as j,o as _,h as y,B as g,U as b,j as h,D as V,K as x}from"./vendor.3b9a49d2.js";import"./inputsLayaut.vue_vue&type=style&index=0&lang.78f9b3d5.js";import"./V-Button.vue_vue&type=script&setup=true&lang.dc9138c0.js";import"./V-Placeload.ec1fe97e.js";import"./V-Control.70f7b974.js";import"./V-Field.vue_vue&type=script&setup=true&lang.8caeb9ca.js";import"./V-SwitchSegment.vue_vue&type=script&setup=true&lang.441d7520.js";import"./V-Checkbox.vue_vue&type=script&setup=true&lang.360f6b50.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.18dfabcd.js";import"./formLayaut.vue_vue&type=style&index=0&lang.90f77f15.js";import"./V-CardAdvanced.vue_vue&type=script&setup=true&lang.020cd487.js";import"./Diciplines.4151b515.js";import"./index.53d2d3d7.js";import"./SidebarLayout.vue_vue&type=script&setup=true&lang.ede51957.js";import"./ActivityPanel.vue_vue&type=style&index=0&lang.78278b97.js";import"./useDropdown.4b88246a.js";import"./V-Dropdown.5634df5b.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.725db5d0.js";import"./activePanelState.d422980e.js";import"./fastpizza.1e58d0ec.js";import"./TaskPanel.vue_vue&type=style&index=0&lang.ed930eff.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.5554d4bf.js";import"./V-Message.vue_vue&type=script&setup=true&lang.f4c30d64.js";import"./V-Tabs.vue_vue&type=script&setup=true&lang.db2a2ca9.js";import"./V-Modal.vue_vue&type=script&setup=true&lang.533d5625.js";import"./navbarLayoutState.a8e66516.js";import"./sidebarLayoutState.9d5a55d2.js";import"./video.7e4ace56.js";import"./darkModeState.9048b099.js";import"./SearchPanel.vue_vue&type=style&index=0&lang.9336f53f.js";import"./AnimatedLogo.d39560aa.js";import"./V-IconBox.vue_vue&type=script&setup=true&lang.5fbfe7cf.js";import"./V-Block.vue_vue&type=script&setup=true&lang.fd027cc2.js";import"./UserPopoverContent.vue_vue&type=script&setup=true&lang.7c436ff6.js";import"./userPopovers.f4b9fc60.js";import"./Toolbar.vue_vue&type=script&setup=true&lang.b8cff140.js";import"./moment.08a7f518.js";import"./notyf.es.f84e4201.js";var S=v({expose:[],setup(v){const S=g(),L=b(),P=d(null),k=d(!1);f(c,(()=>{P.value=S.query.id,l.value=c.value.find((e=>e.id==P.value))})),j((()=>{k.value=!0,a(),u().then((()=>{n.value.map((e=>{e.model=l.value[e.name],"locations_to_sale"==e.name&&(e.values=JSON.parse(JSON.stringify(s.value)),e.model=[],l.value.locations.forEach((t=>{1==t.sale&&e.model.push(t.companies_locations_id)}))),"locations_to_access"==e.name&&(e.values=JSON.parse(JSON.stringify(s.value)),e.model=[],l.value.locations.forEach((t=>{1==t.access&&e.model.push(t.companies_locations_id)}))),"taxes_id"==e.name&&(e.values=o.value)})),k.value=!1}))}));const M=e=>{e=(e=>((e=i(e)).locations=[],e.locations_to_sale.forEach((t=>{""!=t&&e.locations.push({id:t,sale:1})})),e.locations_to_access.forEach((t=>{""!=t&&e.locations.map((s=>{t==s.id?s.access=1:e.locations.push({id:t,access:1})}))})),delete e.locations_to_access,delete e.locations_to_sale,e))(e),r.value||m(e).then((e=>{e.data.status&&(l.value=e.data.membership,p.success("Record Update"),L.back())})).catch((e=>{if(null!=e.response)for(var t in p.error(e.response.data.mensaje),e.response.data.errores)e.response.data.errores[t].forEach((e=>{p.error(e)}))})),console.log("inputs",e)};return(s,a)=>{const o=e,r=t;return _(),y(r,{title:"New Memberships"},{default:h((()=>[k.value?x("",!0):(_(),y(o,{key:0,type:"edit",membership:V(l),inputs:V(n),onOnSave:M},null,8,["membership","inputs"]))])),_:1})}}});export default S;
