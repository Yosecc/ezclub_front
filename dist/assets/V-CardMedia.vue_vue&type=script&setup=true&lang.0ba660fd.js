import{_ as e}from"./V-Avatar.vue_vue&type=script&setup=true&lang.136df1e4.js";import{_ as t}from"./V-Block.vue_vue&type=script&setup=true&lang.ec12757f.js";import{d as a,aa as r,r as i,ak as l,h as s,i as d,l as o,K as u,k as n,L as c}from"./vendor.f6529162.js";const p={class:"card v-card"},v={key:0,class:"card-image"},f={class:"card-content"},g={key:0,class:"inner-content pt-5"};var m=a({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},image:{type:String,default:void 0},placeholder:{type:String,default:"https://via.placeholder.com/1280x960"},format:{type:String,default:"4by3",validator:e=>-1!==["4by3","16by9"].indexOf(e)||(console.warn(`V-CardMedia: invalid "${e}" format. Should be 16by9 or 4by3`),!1)},avatar:{type:String,default:void 0},badge:{type:String,default:void 0}},setup(a){var m;const y=a,{slots:b}=r(),S=i(!!(null==(m=b.default)?void 0:m.call(b)));return l((()=>{var e;S.value=!!(null==(e=b.default)?void 0:e.call(b))})),(r,i)=>{const l=e,m=t;return s(),d("div",p,[y.image?(s(),d("div",v,[o("figure",{class:["image is-4by3",[y.format&&`is-${y.format}`]]},[o("img",{src:a.image,alt:"",onErrorOnce:i[1]||(i[1]=e=>e.target.src=y.placeholder)},null,40,["src"])],2)])):u("",!0),o("div",f,[o(m,{title:y.title,subtitle:y.subtitle,center:"",narrow:""},{icon:n((()=>[y.avatar?(s(),d(l,{key:0,picture:y.avatar,badge:y.badge,size:"medium"},null,8,["picture","badge"])):u("",!0)])),_:1},8,["title","subtitle"]),S.value?(s(),d("div",g,[c(r.$slots,"default")])):u("",!0)])])}}});export{m as _};