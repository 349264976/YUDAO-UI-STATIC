import{P as x}from"./index-341544d4.js";import{bD as m,a as b,i as y,H as _,K as k,j as v,o as M,c as C,w as a,b as H,e as n,k as l,af as p,u as r,f6 as c}from"./index-185fe65d.js";import{I as T}from"./index-c4f38b81.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./eagerComputed-625aaa6f.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";function f(){return m.get({url:"/infra/db-doc/export-html",responseType:"blob"})}function g(){return m.get({url:"/infra/db-doc/export-word",responseType:"blob"})}function B(){return m.get({url:"/infra/db-doc/export-markdown",responseType:"blob"})}const D={class:"mb-3"},W=b({name:"InfraDbDoc"}),K=b({...W,setup(I){const{t:s}=y(),d=_(""),w=async()=>{const o=await f();let t=new Blob([o],{type:"text/html"}),e=window.URL.createObjectURL(t);d.value=e},i=async o=>{if(o==="HTML"){const t=await f();c(t,"数据库文档.html")}if(o==="Word"){const t=await g();c(t,"数据库文档.doc")}if(o==="Markdown"){const t=await B();c(t,"数据库文档.md")}};return k(async()=>{await w()}),(o,t)=>{const e=v("a-button");return M(),C(r(x),null,{default:a(()=>[H("div",D,[n(e,{type:"primary",size:"small",class:"mr-1",onClick:t[0]||(t[0]=u=>i("HTML"))},{default:a(()=>[l(p(r(s)("action.export")+"Html"),1)]),_:1}),n(e,{type:"primary",size:"small",class:"mr-1",onClick:t[1]||(t[1]=u=>i("Word"))},{default:a(()=>[l(p(r(s)("action.export")+"Word"),1)]),_:1}),n(e,{type:"primary",size:"small",onClick:t[2]||(t[2]=u=>i("Markdown"))},{default:a(()=>[l(p(r(s)("action.export")+"Markdown"),1)]),_:1})]),n(r(T),{src:d.value},null,8,["src"])]),_:1})}}});export{K as default};
