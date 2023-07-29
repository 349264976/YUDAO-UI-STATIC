import{cm as n,a as h,c as I,z as N,k as t,o as w,j as y,w as P,n as O,ag as b,x as C}from"./index-8b526734.js";import{u as x,_ as E}from"./useForm-f7dccb87.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as R,B as D}from"./index-40f1f97e.js";import"./index-ec19b8e7.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as c}from"./useRender-f65ba3eb.js";import{D as s,g as l}from"./dict-5cefafd8.js";const K=[{title:"公告编号",dataIndex:"id",width:100},{title:"公告标题",dataIndex:"title",width:180},{title:"公告类型",dataIndex:"type",width:180,customRender:({text:e})=>c.renderDict(e,s.SYSTEM_NOTICE_TYPE)},{title:"状态",dataIndex:"status",width:180,customRender:({text:e})=>c.renderDict(e,s.COMMON_STATUS)},{title:"创建时间",dataIndex:"createTime",customRender:({text:e})=>c.renderDate(e)}],Q=[{label:"公告标题",field:"title",component:"Input",colProps:{span:8}},{label:"公告状态",field:"status",component:"Select",componentProps:{options:l(s.COMMON_STATUS)},colProps:{span:8}}],v=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"公告标题",field:"title",required:!0,component:"Input"},{label:"公告类型",field:"type",component:"Select",componentProps:{options:l(s.SYSTEM_NOTICE_TYPE)}},{label:"状态",field:"status",component:"Select",componentProps:{options:l(s.COMMON_STATUS)}},{label:"内容",field:"content",component:"Editor"}];function X(e){return n.get({url:"/system/notice/page",params:e})}function B(e){return n.get({url:"/system/notice/get?id="+e})}function F(e){return n.post({url:"/system/notice/create",data:e})}function U(e){return n.put({url:"/system/notice/update",data:e})}function Z(e){return n.delete({url:"/system/notice/delete?id="+e})}const ee=h({name:"SystemNoticeModal",__name:"NoticeModal",emits:["success","register"],setup(e,{emit:m}){const{t:i}=I(),{createMessage:p}=C(),a=N(!0),[u,{setFieldsValue:f,resetFields:g,validate:_}]=x({labelWidth:120,baseColProps:{span:24},schemas:v,showActionButtonGroup:!1,actionColOptions:{span:23}}),[S,{setModalProps:r,closeModal:M}]=R(async o=>{if(g(),r({confirmLoading:!1}),a.value=!!o?.isUpdate,t(a)){const d=await B(o.record.id);f({...d})}});async function T(){try{const o=await _();r({confirmLoading:!0}),t(a)?await U(o):await F(o),M(),m("success"),p.success(i("common.saveSuccessText"))}finally{r({confirmLoading:!1})}}return(o,d)=>(w(),y(t(D),b(o.$attrs,{onRegister:t(S),title:a.value?t(i)("action.edit"):t(i)("action.create"),onOk:T}),{default:P(()=>[O(t(E),{onRegister:t(u)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{ee as _,K as c,Z as d,X as g,Q as s};