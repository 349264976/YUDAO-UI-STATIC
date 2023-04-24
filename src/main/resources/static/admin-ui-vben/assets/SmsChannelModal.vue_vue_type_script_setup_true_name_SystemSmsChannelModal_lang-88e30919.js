import{u as _,B as g}from"./index-b9c40b5d.js";import{u as b,a as w}from"./useForm-8fd7b992.js";import"./index-c3c80eae.js";import{u as r}from"./useRender-7b752cf7.js";import{D as n,g as l,b as C}from"./dict-411628cd.js";import{g as M,u as P,c as T}from"./index-6fb2be60.js";import{a as c,H as x,u as a,o as O,c as A,w as R,e as D,ag as U}from"./index-185fe65d.js";const H=[{title:"编号",dataIndex:"id",width:100},{title:"短信签名",dataIndex:"signature",width:180},{title:"渠道编码",dataIndex:"code",width:180,customRender:({text:t})=>r.renderDict(t,n.SYSTEM_SMS_CHANNEL_CODE)},{title:"启用状态",dataIndex:"status",width:180,customRender:({text:t})=>r.renderDict(t,n.COMMON_STATUS)},{title:"备注",dataIndex:"remark",width:180},{title:"短信 API 的账号",dataIndex:"apiKey",width:180},{title:"短信 API 的密钥",dataIndex:"apiSecret",width:180},{title:"短信发送回调 URL",dataIndex:"callbackUrl",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:t})=>r.renderDate(t)}],V=[{label:"短信签名",field:"signature",component:"Input",colProps:{span:8}},{label:"启用状态",field:"status",component:"Select",componentProps:{options:l(n.COMMON_STATUS)},colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],k=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"短信签名",field:"signature",required:!0,component:"Input"},{label:"渠道编码",field:"code",component:"Select",required:!0,componentProps:{options:C(n.SYSTEM_SMS_CHANNEL_CODE)}},{label:"启用状态",field:"status",component:"Select",defaultValue:0,componentProps:{options:l(n.COMMON_STATUS)}},{label:"备注",field:"remark",component:"InputTextArea"},{label:"短信 API 的账号",field:"apiKey",required:!0,component:"Input"},{label:"短信 API 的密钥",field:"apiSecret",component:"Input"},{label:"短信发送回调 URL",field:"callbackUrl",component:"Input"}],N=c({name:"SystemSmsChannelModal"}),Y=c({...N,emits:["success","register"],setup(t,{emit:d}){const o=x(!0),[p,{setFieldsValue:m,resetFields:u,validate:f}]=b({labelWidth:120,baseColProps:{span:24},schemas:k,showActionButtonGroup:!1,actionColOptions:{span:23}}),[S,{setModalProps:s,closeModal:h}]=_(async e=>{if(u(),s({confirmLoading:!1}),o.value=!!e?.isUpdate,a(o)){const i=await M(e.record.id);m({...i})}});async function I(){try{const e=await f();s({confirmLoading:!0}),a(o)?await P(e):await T(e),h(),d("success")}finally{s({confirmLoading:!1})}}return(e,i)=>(O(),A(a(g),U(e.$attrs,{onRegister:a(S),title:o.value?"编辑":"新增",onOk:I}),{default:R(()=>[D(a(w),{onRegister:a(p)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{Y as _,H as c,V as s};