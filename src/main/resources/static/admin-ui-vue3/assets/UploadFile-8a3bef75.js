import{d as h,r as g,f as b,o as v,q as x,w as r,g as I,al as U,i as H,j,a as t,H as q,b7 as w,__tla as E}from"./index-0f589822.js";import{b as F,a as P,U as S,H as $,__tla as k}from"./upload-90c7078f.js";import{u as z,__tla as A}from"./useMessage-45ab706e.js";import{U as i,__tla as B}from"./useUpload-1decc2bd.js";import{_ as C}from"./_plugin-vue_export-helper-1b428a4d.js";let _,D=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return k}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return B}catch{}})()]).then(async()=>{let l;l={class:"el-upload__tip",style:{"margin-left":"5px"}},_=C(h({__name:"UploadFile",props:{type:{}},emits:["uploaded"],setup(p,{emit:d}){const n=p,e=z(),o=g([]),s=b({type:i.Image,title:"",introduction:""}),u=n.type===i.Image?F:P,c=a=>{if(a.code!==0)return e.alertError("\u4E0A\u4F20\u51FA\u9519\uFF1A"+a.msg),!1;o.value=[],s.title="",s.introduction="",e.notifySuccess("\u4E0A\u4F20\u6210\u529F"),d("uploaded")},m=a=>e.error("\u4E0A\u4F20\u5931\u8D25: "+a.message);return(a,G)=>{const f=q,y=w;return v(),x(y,{action:t(S),headers:t($),multiple:"",limit:1,"file-list":t(o),data:t(s),"on-error":m,"before-upload":t(u),"on-success":c},{tip:r(()=>[I("span",l,[U(a.$slots,"default",{},void 0,!0)])]),default:r(()=>[H(f,{type:"primary",plain:""},{default:r(()=>[j(" \u70B9\u51FB\u4E0A\u4F20 ")]),_:1})]),_:3},8,["action","headers","file-list","data","before-upload"])}}}),[["__scopeId","data-v-f51d7ad9"]])});export{D as __tla,_ as default};