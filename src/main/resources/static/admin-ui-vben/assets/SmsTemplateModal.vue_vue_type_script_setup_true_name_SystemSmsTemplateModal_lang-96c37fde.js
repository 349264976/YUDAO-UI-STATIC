import{u as P,B as M}from"./index-b9c40b5d.js";import{u as g,a as h}from"./useForm-8fd7b992.js";import"./index-c3c80eae.js";import{u as r}from"./useRender-7b752cf7.js";import{D as t,g as s}from"./dict-411628cd.js";import{bD as o,a as d,H as b,u as a,o as E,c as w,w as x,e as y,ag as A}from"./index-185fe65d.js";const U=[{title:"模板编码",dataIndex:"code",width:180},{title:"模板名称",dataIndex:"name",width:100},{title:"模板内容",dataIndex:"content",width:300},{title:"短信类型",dataIndex:"status",width:180,customRender:({text:e})=>r.renderDict(e,t.SYSTEM_SMS_TEMPLATE_TYPE)},{title:"开启状态",dataIndex:"status",width:180,customRender:({text:e})=>r.renderDict(e,t.COMMON_STATUS)},{title:"备注",dataIndex:"remark",width:180},{title:"短信 API 的模板编号",dataIndex:"apiTemplateId",width:180},{title:"短信渠道",dataIndex:"channelCode",width:180,customRender:({text:e})=>r.renderDict(e,t.SYSTEM_SMS_CHANNEL_CODE)},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>r.renderDate(e)}],v=[{label:"短信类型",field:"type",component:"Select",componentProps:{options:s(t.SYSTEM_SMS_TEMPLATE_TYPE)},colProps:{span:8}},{label:"开启状态",field:"status",component:"Select",componentProps:{options:s(t.COMMON_STATUS)},colProps:{span:8}},{label:"模板编码",field:"code",component:"Input",colProps:{span:8}},{label:"短信 API 的模板编号",field:"apiTemplateId",component:"Input",colProps:{span:8}},{label:"短信渠道",field:"channelId",component:"Select",componentProps:{options:s(t.SYSTEM_SMS_CHANNEL_CODE)},colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],C=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"短信渠道编号",field:"channelId",required:!0,component:"Input"},{label:"短信类型",field:"type",component:"Select",defaultValue:0,componentProps:{options:s(t.SYSTEM_SMS_TEMPLATE_TYPE)}},{label:"模板编号",field:"code",required:!0,component:"Input"},{label:"模板名称",field:"name",required:!0,component:"Input"},{label:"模板内容",field:"content",required:!0,component:"Input"},{label:"开启状态",field:"status",component:"Select",defaultValue:0,componentProps:{options:s(t.COMMON_STATUS)}},{label:"短信 API 模板编号",field:"apiTemplateId",required:!0,component:"Input"},{label:"备注",field:"remark",component:"InputTextArea"}];function H(e){return o.get({url:"/system/sms-template/page",params:e})}function O(e){return o.get({url:"/system/sms-template/get?id="+e})}function D(e){return o.post({url:"/system/sms-template/create",data:e})}function R(e){return o.put({url:"/system/sms-template/update",data:e})}function V(e){return o.delete({url:"/system/sms-template/delete?id="+e})}function $(e){return o.download({url:"/system/sms-template/export-excel",params:e},"短信模板.xls")}const Y=d({name:"SystemSmsTemplateModal"}),G=d({...Y,emits:["success","register"],setup(e,{emit:c}){const l=b(!0),[m,{setFieldsValue:u,resetFields:f,validate:S}]=g({labelWidth:120,baseColProps:{span:24},schemas:C,showActionButtonGroup:!1,actionColOptions:{span:23}}),[T,{setModalProps:i,closeModal:_}]=P(async n=>{if(f(),i({confirmLoading:!1}),l.value=!!n?.isUpdate,a(l)){const p=await O(n.record.id);u({...p})}});async function I(){try{const n=await S();i({confirmLoading:!0}),a(l)?await R(n):await D(n),_(),c("success")}finally{i({confirmLoading:!1})}}return(n,p)=>(E(),w(a(M),A(n.$attrs,{onRegister:a(T),title:l.value?"编辑":"新增",onOk:I}),{default:x(()=>[y(a(h),{onRegister:a(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{G as _,U as c,V as d,$ as e,H as g,v as s};
