import{u as I,B as h}from"./index-b9c40b5d.js";import{u as P,a as b}from"./useForm-8fd7b992.js";import"./index-c3c80eae.js";import{u as i}from"./useRender-7b752cf7.js";import{D as n,g as l}from"./dict-411628cd.js";import{bD as o,a as d,H as w,u as a,o as M,c as S,w as x,e as N,ag as O}from"./index-185fe65d.js";const q=[{title:"模板编码",dataIndex:"code",width:100},{title:"模板名称",dataIndex:"name",width:180},{title:"类型",dataIndex:"type",width:180,customRender:({text:e})=>i.renderDict(e,n.SYSTEM_NOTIFY_TEMPLATE_TYPE)},{title:"发送人名称",dataIndex:"nickname",width:100},{title:"模板内容",dataIndex:"content",width:300},{title:"开启状态",dataIndex:"status",width:180,customRender:({text:e})=>i.renderDict(e,n.COMMON_STATUS)},{title:"备注",dataIndex:"remark",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>i.renderDate(e)}],v=[{label:"模板名称",field:"name",component:"Input",colProps:{span:8}},{label:"模版编码",field:"code",component:"Input",colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:l(n.COMMON_STATUS)},colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],R=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"模版编码",field:"code",required:!0,component:"Input"},{label:"模板名称",field:"name",required:!0,component:"Input"},{label:"发件人名称",field:"nickname",required:!0,component:"Input"},{label:"模板内容",field:"content",required:!0,component:"InputTextArea"},{label:"类型",field:"type",component:"Select",defaultValue:0,componentProps:{options:l(n.SYSTEM_NOTIFY_TEMPLATE_TYPE)}},{label:"开启状态",field:"status",component:"RadioGroup",defaultValue:0,componentProps:{options:l(n.COMMON_STATUS)}},{label:"备注",field:"remark",component:"InputTextArea"}];function E(e){return o.post({url:"/system/notify-template/create",data:e})}function k(e){return o.put({url:"/system/notify-template/update",data:e})}function V(e){return o.delete({url:"/system/notify-template/delete?id="+e})}function A(e){return o.get({url:"/system/notify-template/get?id="+e})}function G(e){return o.get({url:"/system/notify-template/page",params:e})}const C=d({name:"NotifyTemplateModal"}),H=d({...C,emits:["success","register"],setup(e,{emit:p}){const s=w(!0),[u,{setFieldsValue:m,resetFields:f,validate:T}]=P({labelWidth:120,baseColProps:{span:24},schemas:R,showActionButtonGroup:!1,actionColOptions:{span:23}}),[g,{setModalProps:r,closeModal:_}]=I(async t=>{if(f(),r({confirmLoading:!1}),s.value=!!t?.isUpdate,a(s)){const c=await A(t.record.id);m({...c})}});async function y(){try{const t=await T();r({confirmLoading:!0}),a(s)?await k(t):await E(t),_(),p("success")}finally{r({confirmLoading:!1})}}return(t,c)=>(M(),S(a(h),O(t.$attrs,{onRegister:a(g),title:s.value?"编辑":"新增",onOk:y}),{default:x(()=>[N(a(b),{onRegister:a(u)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{H as _,q as c,V as d,G as g,v as s};