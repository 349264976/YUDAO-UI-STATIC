import{_ as m}from"./index-c3c80eae.js";import"./useForm-8fd7b992.js";import{u as a}from"./useTable-e1aa62c8.js";import{bD as l,a as p,o as s,f as d,e as c,u as o}from"./index-185fe65d.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import{D as e,g as i}from"./dict-411628cd.js";import{u as r}from"./useRender-7b752cf7.js";import{b as u}from"./account-c14cdd1f.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-b9c40b5d.js";import"./FullscreenOutlined-32991190.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";function f(t){return l.get({url:"/system/mail-log/page",params:t})}const S=[{title:"编号",dataIndex:"id",width:100},{title:"发送时间",dataIndex:"sendTime",width:180,customRender:({text:t})=>r.renderDate(t)},{title:"接收邮箱",dataIndex:"toMail",width:200},{title:"邮件标题",dataIndex:"templateTitle",width:180},{title:"发送状态",dataIndex:"sendStatus",width:180,customRender:({text:t})=>r.renderDict(t,e.SYSTEM_MAIL_SEND_STATUS)},{title:"邮箱账号",dataIndex:"fromMail",width:180},{title:"模板编号",dataIndex:"templateId",width:180}],_=[{label:"接收邮箱",field:"toMail",component:"Input",colProps:{span:8}},{label:"邮箱账号",field:"accountId",component:"ApiSelect",componentProps:{api:()=>u(),labelField:"mail",valueField:"id"},colProps:{span:8}},{label:"模板编号",field:"templateId",component:"Input",colProps:{span:8}},{label:"发送状态",field:"sendStatus",component:"Select",componentProps:{options:i(e.SYSTEM_MAIL_SEND_STATUS)},colProps:{span:8}},{label:"用户编号",field:"userId",component:"Input",colProps:{span:8}},{label:"用户类型",field:"userType",component:"Select",componentProps:{options:i(e.USER_TYPE)},colProps:{span:8}},{label:"发送时间",field:"sendTime",component:"RangePicker",colProps:{span:8}}],I=p({name:"SystemOperateLog"}),at=p({...I,setup(t){const[n]=a({title:"邮件日志列表",api:f,columns:S,formConfig:{labelWidth:120,schemas:_},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1});return(T,g)=>(s(),d("div",null,[c(o(m),{onRegister:o(n)},null,8,["onRegister"])]))}});export{at as default};