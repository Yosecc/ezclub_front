import{_ as a}from"./V-Avatar.vue_vue&type=script&setup=true&lang.885880af.js";import{_ as t}from"./V-Block.vue_vue&type=script&setup=true&lang.9d9b0eff.js";import{d as e,a9 as r,r as i,ak as l,h as s,i as d,l as o,K as u,k as n,L as c}from"./vendor.7d5213a2.js";const p={class:"card v-card"},v={key:0,class:"card-image"},f={class:"card-content"},g={key:0,class:"inner-content pt-5"};var m=e({expose:[],props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},image:{type:String,default:void 0},placeholder:{type:String,default:"https://via.placeholder.com/1280x960"},format:{type:String,default:"4by3",validator:a=>-1!==["4by3","16by9"].indexOf(a)||(console.warn(`V-CardMedia: invalid "${a}" format. Should be 16by9 or 4by3`),!1)},avatar:{type:String,default:void 0},badge:{type:String,default:void 0}},setup(e){var m;const y=e,{slots:b}=r(),S=i(!!(null==(m=b.default)?void 0:m.call(b)));return l((()=>{var a;S.value=!!(null==(a=b.default)?void 0:a.call(b))})),(r,i)=>{const l=a,m=t;return s(),d("div",p,[y.image?(s(),d("div",v,[o("figure",{class:["image is-4by3",[y.format&&`is-${y.format}`]]},[o("img",{src:e.image,alt:"",onErrorOnce:i[1]||(i[1]=a=>a.target.src=y.placeholder)},null,40,["src"])],2)])):u("",!0),o("div",f,[o(m,{title:y.title,subtitle:y.subtitle,center:"",narrow:""},{icon:n((()=>[y.avatar?(s(),d(l,{key:0,picture:y.avatar,badge:y.badge,size:"medium"},null,8,["picture","badge"])):u("",!0)])),_:1},8,["title","subtitle"]),S.value?(s(),d("div",g,[c(r.$slots,"default")])):u("",!0)])])}}});export{m as _};
