import{d as o,o as p,c as m,i as v,w as g,g as t,t as u,__tla as y}from"./index-0f589822.js";import{E as h,__tla as f}from"./el-link-932c772d.js";import{_ as U}from"./_plugin-vue_export-helper-1b428a4d.js";let d,b=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let a,e,s,i,l,c;a={class:"avue-card__body",style:{padding:"10px","background-color":"#fff","border-radius":"5px"}},e={class:"avue-card__avatar"},s=["src"],i={class:"avue-card__detail"},l={class:"avue-card__title",style:{"margin-bottom":"unset"}},c={class:"avue-card__info",style:{height:"unset"}},d=U(o({name:"WxMusic",__name:"main",props:{title:{required:!1,type:String},description:{required:!1,type:String},musicUrl:{required:!1,type:String},hqMusicUrl:{required:!1,type:String},thumbMediaUrl:{required:!0,type:String}},setup:(r,{expose:_})=>(_({musicUrl:r.musicUrl}),(q,M)=>{const n=h;return p(),m("div",null,[v(n,{type:"success",underline:!1,target:"_blank",href:r.hqMusicUrl?r.hqMusicUrl:r.musicUrl},{default:g(()=>[t("div",a,[t("div",e,[t("img",{src:r.thumbMediaUrl,alt:""},null,8,s)]),t("div",i,[t("div",l,u(r.title),1),t("div",c,u(r.description),1)])])]),_:1},8,["href"])])})}),[["__scopeId","data-v-507c781b"]])});export{b as __tla,d as default};