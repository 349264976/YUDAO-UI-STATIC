import"./base-085523fd.js";/* empty css                   */import{_ as t}from"./ContentWrap.vue_vue_type_script_setup_true_lang-63555901.js";import{_ as o}from"./IFrame.vue_vue_type_script_setup_true_lang-51a677e5.js";import{_ as r}from"./XButton-39866472.js";import{d as e}from"./download-20922b56.js";import{a as s}from"./index-a7ef0ded.js";import{u as i}from"./useI18n-56d4bc42.js";import{v as a}from"./directive-7e87637f.js";import{d as p,r as n,x as l,o as m,a as d,w as c,e as u,l as j,f as _,b as w,h as f}from"./runtime-core.esm-bundler-ccc21fcd.js";import"./el-card-d8ab0074.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import"./propTypes-5cfdbdab.js";import"./index-7486e100.js";import"./aria-8fadfbe9.js";import"./focus-trap-f53979c5.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./index-4665dced.js";import"./index-7a379d2e.js";import"./el-button-6b012e5e.js";import"./index-c2caee16.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./el-message-7ddf9388.js";import"./is-a7957d81.js";import"./el-notification-c7d5f4ea.js";import"./useCache-d48cf6c5.js";import"./auth-2fa258a0.js";import"./vue-router-0864a153.js";import"./cloneDeep-8298b498.js";import"./_flatRest-ac7abae6.js";const x=()=>s.download({url:"/infra/db-doc/export-html"}),y={class:"mb-10px"},v=p({name:"DbDoc"}),b=p({...v,setup(p){const{t:v}=i(),b=n(""),k=n(!0),h=async t=>{if("HTML"===t){const t=await x();e.html(t,"数据库文档.html")}if("Word"===t){const t=await s.download({url:"/infra/db-doc/export-word"});e.word(t,"数据库文档.doc")}if("Markdown"===t){const t=await s.download({url:"/infra/db-doc/export-markdown"});e.markdown(t,"数据库文档.md")}};return l((async()=>{await(async()=>{const t=await x();let o=new Blob([t],{type:"text/html"}),r=window.URL.createObjectURL(o);b.value=r,k.value=!1})()})),(e,s)=>{const i=r,p=o,n=t,l=a;return m(),d(n,{title:"数据库文档"},{default:c((()=>[u("div",y,[j(i,{type:"primary",preIcon:"ep:download",title:_(v)("action.export")+" HTML",onClick:s[0]||(s[0]=t=>h("HTML"))},null,8,["title"]),j(i,{type:"primary",preIcon:"ep:download",title:_(v)("action.export")+" Word",onClick:s[1]||(s[1]=t=>h("Word"))},null,8,["title"]),j(i,{type:"primary",preIcon:"ep:download",title:_(v)("action.export")+" Markdown",onClick:s[2]||(s[2]=t=>h("Markdown"))},null,8,["title"])]),_(k)?f("",!0):w((m(),d(p,{key:0,src:_(b)},null,8,["src"])),[[l,_(k)]])])),_:1})}}});export{b as default};
