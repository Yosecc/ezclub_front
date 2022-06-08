import{_ as e,a as t}from"./DocumentationItem.fe377543.js";import{o,i as d,j as c,k as s,d as a,O as r,G as n,a6 as l}from"./vendor.1faf4f77.js";import{p as i}from"./sidebarLayoutState.8ddd6cce.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.a7e31a56.js";const p=s("h3",{id:"helpers",tabindex:"-1"},"Helpers",-1),h=s("p",null,"Vuero provides some CSS helpers that can help you adding some styles without writing any CSS. Helpers have been keep short to avoid bloat and unused CSS.",-1);const m={disable_code:!0,disable_example:!0},g={render:function(t,s){const a=e;return o(),d(a,{frontmatter:t.frontmatter},{default:c((()=>[p,h])),_:1},8,["frontmatter"])},data:()=>({frontmatter:m}),__hmrId:"C:/Users/yosec/OneDrive/Documentos/devilbox1/data/www/ezclub_front/documentation/elements/helpers-documentation.md"},u={class:"page-content-inner"},b={class:"columns is-multiline"},f={class:"column is-12"},w=l('<div class="columns is-multiline"><div class="column is-12"><div class="s-card demo-table"><table class="table is-hoverable is-fullwidth helper-table" aria-label="Vuero CSS classes helpers"><thead><tr><td></td><th scope="col">Helper</th><th scope="col">Description</th></tr></thead><tbody><tr><th scope="rowgroup" rowspan="4" class="category"><strong>Spacing</strong></th><td class="name">Margin (<code>m-*-*</code>)</td><td class="description"> Sets a margin on the target element following the <code>m-*-*</code> pattern, where the first <code>*</code> stands for directon (<code>t</code>, <code>b</code>, <code>l</code> and <code>r</code>) and the second one for pixel amount. Minimum and maximum pixel amounts are <code>5</code> and <code>100</code>. </td></tr><tr><td class="name">Padding (<code>p-*-*</code>)</td><td class="description"> Sets a padding on the target element following the <code>p-*-*</code> pattern, where the first <code>*</code> stands for directon (<code>t</code>, <code>b</code>, <code>l</code> and <code>r</code>) and the second one for pixel amount. Minimum and maximum pixel amounts are <code>5</code> and <code>100</code>. </td></tr><tr><td class="name">No Margin (<code>no-margin-*</code>)</td><td class="description"> Sets a margin on the target element following the <code>no-margin-*</code> pattern, where the first <code>*</code> stands for directon (<code>all</code>, <code>top</code>, <code>bottom</code>, <code>left</code> and <code>right</code>). </td></tr><tr><td class="name">No Padding (<code>no-padding-*</code>)</td><td class="description"> Sets a padding on the target element following the <code>no-padding-*</code> pattern, where the first <code>*</code> stands for directon (<code>all</code>, <code>top</code>, <code>bottom</code>, <code>left</code> and <code>right</code>). </td></tr><tr><th scope="rowgroup" rowspan="4" class="category"><strong>Colors</strong></th><td class="name">Text (<code>text-*</code>)</td><td class="description"> Sets a color on the target element following the <code>color-*</code> pattern, where the first <code>*</code> stands for the color variable name. Check the Vuero colors to be able to use this helper properly. </td></tr><tr><td class="name"> Hover color (<code>hover-text-*</code>) </td><td class="description"> Sets a color on the target element with hover state following the <code>color-*</code> pattern, where the first <code>*</code> stands for the color variable name. Check the Vuero colors to be able to use this helper properly. </td></tr><tr><td class="name">background (<code>bg-*</code>)</td><td class="description"> Sets a background color on the target element following the <code>color-*</code> pattern, where the first <code>*</code> stands for the color variable name. Check the Vuero colors to be able to use this helper properly. </td></tr><tr><td class="name"> hover background (<code>hover-bg-*</code>) </td><td class="description"> Sets a background color on the target element with hover state following the <code>color-*</code> pattern, where the first <code>*</code> stands for the color variable name. Check the Vuero colors to be able to use this helper properly. </td></tr><tr><th scope="rowgroup" rowspan="3" class="category"><strong>States</strong></th><td class="name">Hidden (<code>is-hidden</code>)</td><td class="description"> Sets the <code>display</code> property to <code>none</code> on the target element. </td></tr><tr><td class="name">V-Hidden (<code>is-vhidden</code>)</td><td class="description"> Sets the <code>visibility</code> property to <code>hidden</code> on the target element. </td></tr><tr><td class="name">Disabled (<code>is-disabled</code>)</td><td class="description"> Sets the <code>pointer-events</code> property to <code>none</code> on the target element and decreases its opacity. </td></tr><tr><th scope="row" class="category"><strong>Scroll</strong></th><td class="name"> Slimscroll (<code>has-slimscroll</code>) </td><td class="description"> Sets the <code>overflowY</code> property to <code>auto</code> on the target element and tweaks the webkit scrollbar. </td></tr><tr><th scope="rowgroup" rowspan="2" class="category"><strong>Dark Mode</strong></th><td class="name">Images</td><td class="description"> Toggle images between light mode and dark mode using the corresponding classes: <code>light-image</code> and <code>dark-image</code>. Displayed images will be displayed as <code>inline-block</code>. To display images as <code>block</code> use the <code>light-image-block</code> and <code>dark-image-block</code> classes instead. </td></tr><tr><td class="name"> Dark Background (<code>is-dark-bg-*</code>) </td><td class="description"> Sets the <code>background-color</code> property to the specidifed value, where <code>*</code> is a percentage of the dark mode main color. Accepted values: 2, 3, 4, 6. </td></tr><tr><th scope="rowgroup" rowspan="4" class="category"><strong>Responsive</strong></th><td class="name"> Hidden mobile (<code>h-hidden-mobile</code>) </td><td class="description"> Sets the <code>display</code> property to <code>none</code> on the target element when on a mobile display. </td></tr><tr><td class="name"> Hidden tablet (<code>h-hidden-tablet-p</code>) </td><td class="description"> Sets the <code>display</code> property to <code>none</code> on the target element when on a tablet display in portrait mode. </td></tr><tr><td class="name"> Hidden tablet (<code>h-hidden-tablet-l</code>) </td><td class="description"> Sets the <code>display</code> property to <code>none</code> on the target element when on a tablet display in landscape mode. </td></tr><tr><td class="name"> Hidden desktop (<code>h-hidden-desktop</code>) </td><td class="description"> Sets the <code>display</code> property to <code>none</code> on the target element when on a desktop display. </td></tr><tr><th scope="rowgroup" rowspan="4" class="category"><strong>Typography</strong></th><td class="name">Font (<code>.is-font</code>)</td><td class="description"> Sets the <code>font-family</code> property to the <code>$font</code> variable value. </td></tr><tr><td class="name">Font Alt (<code>.is-font-alt</code>)</td><td class="description"> Sets the <code>font-family</code> property to the <code>$font-alt</code> variable value. </td></tr><tr><td class="name"> Font Weight (<code>.is-weight-*</code>) </td><td class="description"> Sets the <code>font-weight</code> property to the specidifed value, where <code>*</code> is a value between 300 and 900. </td></tr><tr><td class="name">Font Size (<code>.rem-*</code>)</td><td class="description"> Sets the <code>font-size</code> property to the specidifed value, where <code>*</code> is a value between 70 and 100. Increments by 5. </td></tr></tbody></table></div></div></div>',1);var y=a({expose:[],setup:e=>(i.value="Helpers",r({title:"Helpers - Elements - Vuero"}),(e,c)=>{const a=t,r=g;return o(),d("div",u,[s(a,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"Helpers",to:{name:"elements-helpers"}}]}),s("div",b,[s("div",f,[n("Theme Colors"),s(r),w])])])})});export default y;
