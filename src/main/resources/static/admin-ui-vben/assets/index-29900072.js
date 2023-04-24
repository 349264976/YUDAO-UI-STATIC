import{_ as f}from"./index-c3c80eae.js";import"./useForm-8fd7b992.js";import{u as g}from"./useTable-e1aa62c8.js";import{bD as m,a as p,i as I,j as h,bc as E,o as i,f as x,e as b,w as s,L as w,c as P,u as n,I as D,k as M,af as C,l as R}from"./index-185fe65d.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import{b as y}from"./index-6fb2be60.js";import{D as r,g as a}from"./dict-411628cd.js";import{u as o}from"./useRender-7b752cf7.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-b9c40b5d.js";import"./FullscreenOutlined-32991190.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";function v(e){return m.get({url:"/system/sms-log/page",params:e})}function k(e){return m.download({url:"/system/sms-log/export",params:e},"短信日志.xls")}const Y=[{title:"日志编号",dataIndex:"id",width:100},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>o.renderDate(e)},{title:"手机号",dataIndex:"mobile",width:180,customRender:({text:e,record:t})=>t.userType&&t.userId?o.renderDict(t.userType,r.USER_TYPE)+"record.userId":e},{title:"短信内容",dataIndex:"templateContent",width:300},{title:"发送状态",dataIndex:"sendStatus",width:180,customRender:({text:e})=>o.renderDict(e,r.SYSTEM_SMS_SEND_STATUS)},{title:"接收状态",dataIndex:"receiveStatus",width:180,customRender:({text:e})=>o.renderDict(e,r.SYSTEM_SMS_RECEIVE_STATUS)},{title:"短信渠道",dataIndex:"channelCode",width:180,customRender:({text:e,record:t})=>o.renderText(t.channelId,"")||""+o.renderDict(e,r.SYSTEM_SMS_CHANNEL_CODE)||""},{title:"模板编号",dataIndex:"templateId",width:120},{title:"短信类型",dataIndex:"templateType",width:180,customRender:({text:e})=>o.renderDict(e,r.SYSTEM_SMS_TEMPLATE_TYPE)}],A=[{label:"手机号",field:"mobile",component:"Input",colProps:{span:8}},{label:"短信渠道",field:"channelId",component:"ApiSelect",componentProps:{options:y(),fieldNames:{label:"signature",key:"id",value:"id"}},colProps:{span:8}},{label:"模板编号",field:"templateId",component:"Input",colProps:{span:8}},{label:"发送状态",field:"sendStatus",component:"Select",componentProps:{options:a(r.SYSTEM_SMS_SEND_STATUS)},colProps:{span:8}},{label:"发送时间",field:"sendTime",component:"RangePicker",colProps:{span:8}},{label:"接收状态",field:"receiveStatus",component:"Select",componentProps:{options:a(r.SYSTEM_SMS_RECEIVE_STATUS)},colProps:{span:8}},{label:"接收时间",field:"receiveTime",component:"RangePicker",colProps:{span:8}}],N=p({name:"SystemSmsLog"}),De=p({...N,setup(e){const{t}=I(),{createConfirm:c,createMessage:l}=R(),[d,{getForm:u}]=g({title:"短信日志列表",api:v,columns:Y,formConfig:{labelWidth:120,schemas:A},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1});async function S(){c({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await k(u().getFieldsValue()),l.success(t("common.exportSuccessText"))}})}return(L,U)=>{const _=h("a-button"),T=E("auth");return i(),x("div",null,[b(n(f),{onRegister:n(d)},{toolbar:s(()=>[w((i(),P(_,{type:"warning",preIcon:n(D).EXPORT,onClick:S},{default:s(()=>[M(C(n(t)("action.export")),1)]),_:1},8,["preIcon"])),[[T,["system:sms-log:export"]]])]),_:1},8,["onRegister"])])}}});export{De as default};
