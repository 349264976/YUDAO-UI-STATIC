import{u as x,_ as M,a as w,__tla as U}from"./useTable-d09c9fd9.js";import{_ as j,__tla as q}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0f1e3633.js";import{d as F,r as C,A as O,O as B,o as c,c as H,i as _,w as e,a as t,B as m,q as i,j as u,F as D,_ as E,H as G,__tla as I}from"./index-0f589822.js";import{_ as J,__tla as K}from"./index-10415b69.js";import{a as v,__tla as N}from"./account.data-889d9d26.js";import{a as Q,d as T,__tla as V}from"./index-781eb0cf.js";import{_ as W,__tla as X}from"./MailAccountForm.vue_vue_type_script_setup_true_lang-1e3fce67.js";import{_ as Y,__tla as Z}from"./MailAccountDetail.vue_vue_type_script_setup_true_lang-244809b7.js";import{__tla as $}from"./Form-89fb98fc.js";import{__tla as tt}from"./el-virtual-list-d5f16f43.js";import{__tla as at}from"./el-tree-select-df2c08ac.js";import{__tla as rt}from"./el-time-select-a6199faf.js";import{__tla as _t}from"./InputPassword-59b0f616.js";import"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as et}from"./style.css_vue_type_style_index_0_src_true_lang-317ea815.js";import{__tla as lt}from"./UploadImg-fe783aab.js";import{__tla as ot}from"./el-image-viewer-863e3dd0.js";import{__tla as ct}from"./useMessage-45ab706e.js";import{__tla as st}from"./UploadImgs-4f92341d.js";import{__tla as nt}from"./UploadFile.vue_vue_type_style_index_0_scoped_5a2639f8_lang-77946e64.js";import{__tla as mt}from"./index-331b9b98.js";import{__tla as it}from"./useForm-a9940167.js";import"./download-20922b56.js";import{__tla as ut}from"./el-card-bbdd700f.js";import{__tla as pt}from"./formatTime-58783104.js";import{__tla as yt}from"./formRules-04f2a102.js";import{__tla as ft}from"./dict-f9a1a53b.js";import{__tla as ht}from"./useCrudSchemas-9a73989a.js";import"./tree-f9b1893a.js";import{__tla as dt}from"./DictTag.vue_vue_type_script_lang-9c2c480d.js";import"./color-a8b4eb58.js";import{__tla as gt}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{__tla as kt}from"./Descriptions-add071e6.js";import{__tla as St}from"./el-descriptions-item-41445509.js";let b,Pt=Promise.all([(()=>{try{return U}catch{}})(),(()=>{try{return q}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return V}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return Z}catch{}})(),(()=>{try{return $}catch{}})(),(()=>{try{return tt}catch{}})(),(()=>{try{return at}catch{}})(),(()=>{try{return rt}catch{}})(),(()=>{try{return _t}catch{}})(),(()=>{try{return et}catch{}})(),(()=>{try{return lt}catch{}})(),(()=>{try{return ot}catch{}})(),(()=>{try{return ct}catch{}})(),(()=>{try{return st}catch{}})(),(()=>{try{return nt}catch{}})(),(()=>{try{return mt}catch{}})(),(()=>{try{return it}catch{}})(),(()=>{try{return ut}catch{}})(),(()=>{try{return pt}catch{}})(),(()=>{try{return yt}catch{}})(),(()=>{try{return ft}catch{}})(),(()=>{try{return ht}catch{}})(),(()=>{try{return dt}catch{}})(),(()=>{try{return gt}catch{}})(),(()=>{try{return kt}catch{}})(),(()=>{try{return St}catch{}})()]).then(async()=>{b=F({name:"SystemMailAccount",__name:"index",setup(Ct){const{tableObject:l,tableMethods:p}=x({getListApi:Q,delListApi:T}),{getList:y,setSearchParams:f}=p,h=C(),d=(k,a)=>{h.value.open(k,a)},g=C();return O(()=>{y()}),(k,a)=>{const z=J,L=E,s=G,A=M,S=j,R=w,n=B("hasPermi");return c(),H(D,null,[_(z,{title:"\u90AE\u4EF6\u914D\u7F6E",url:"https://doc.iocoder.cn/mail"}),_(S,null,{default:e(()=>[_(A,{schema:t(v).searchSchema,onSearch:t(f),onReset:t(f)},{actionMore:e(()=>[m((c(),i(s,{type:"primary",plain:"",onClick:a[0]||(a[0]=r=>d("create"))},{default:e(()=>[_(L,{icon:"ep:plus",class:"mr-5px"}),u(" \u65B0\u589E ")]),_:1})),[[n,["system:mail-account:create"]]])]),_:1},8,["schema","onSearch","onReset"])]),_:1}),_(S,null,{default:e(()=>[_(R,{columns:t(v).tableColumns,data:t(l).tableList,loading:t(l).loading,pagination:{total:t(l).total},pageSize:t(l).pageSize,"onUpdate:pageSize":a[1]||(a[1]=r=>t(l).pageSize=r),currentPage:t(l).currentPage,"onUpdate:currentPage":a[2]||(a[2]=r=>t(l).currentPage=r)},{action:e(({row:r})=>[m((c(),i(s,{link:"",type:"primary",onClick:P=>d("update",r.id)},{default:e(()=>[u(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[n,["system:mail-account:update"]]]),m((c(),i(s,{link:"",type:"primary",onClick:P=>{return o=r.id,void g.value.open(o);var o}},{default:e(()=>[u(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[n,["system:mail-account:query"]]]),m((c(),i(s,{link:"",type:"danger",onClick:P=>{return o=r.id,void p.delList(o,!1);var o}},{default:e(()=>[u(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[n,["system:mail-account:delete"]]])]),_:1},8,["columns","data","loading","pagination","pageSize","currentPage"])]),_:1}),_(W,{ref_key:"formRef",ref:h,onSuccess:t(y)},null,8,["onSuccess"]),_(Y,{ref_key:"detailRef",ref:g},null,512)],64)}}})});export{Pt as __tla,b as default};