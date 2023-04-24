import{bD as i,be as g,a as s,i as x,j as _,o as h,f as I,e as n,w as a,u as o,I as T,k as w,af as b,l as P}from"./index-185fe65d.js";import{_ as E}from"./index-c3c80eae.js";import"./useForm-8fd7b992.js";import{u as y}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import{D as p,g as S}from"./dict-411628cd.js";import{u as r}from"./useRender-7b752cf7.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-b9c40b5d.js";import"./FullscreenOutlined-32991190.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";function R(t){return i.get({url:"/system/operate-log/page",params:t})}function k(t){return i.download({url:"/system/operate-log/export",params:t},"操作日志.xls")}const C=[{title:"日志编号",dataIndex:"id",width:100},{title:"操作模块",dataIndex:"module",width:120},{title:"操作名",dataIndex:"name",width:180},{title:"操作类型",dataIndex:"type",width:180,customRender:({text:t})=>r.renderDict(t,p.SYSTEM_OPERATE_TYPE)},{title:"操作人",dataIndex:"userNickname",width:120},{title:"userAgent",dataIndex:"userAgent",width:400},{title:"操作结果",dataIndex:"resultCode",width:180,customRender:({text:t})=>g("span",t===0?"成功":"失败")},{title:"操作日期",dataIndex:"startTime",width:180,customRender:({text:t})=>r.renderDate(t)},{title:"执行时长",dataIndex:"duration",width:180,customRender:({text:t})=>r.renderText(t,"ms")}],O=[{label:"系统模块",field:"title",component:"Input",colProps:{span:8}},{label:"操作人员",field:"operName",component:"Input",colProps:{span:8}},{label:"类型",field:"type",component:"Select",componentProps:{options:S(p.SYSTEM_OPERATE_TYPE)},colProps:{span:8}},{label:"状态",field:"success",component:"Select",componentProps:{options:[{value:!0,key:!0,label:"成功"},{value:!1,key:!1,label:"失败"}]},colProps:{span:8}},{label:"操作时间",field:"startTime",component:"RangePicker",colProps:{span:8}}],D=s({name:"SystemOperateLog"}),wt=s({...D,setup(t){const{t:e}=x(),{createConfirm:m,createMessage:l}=P(),[c,{getForm:d}]=y({title:"操作日志列表",api:R,columns:C,formConfig:{labelWidth:120,schemas:O},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1});async function u(){m({title:e("common.exportTitle"),iconType:"warning",content:e("common.exportMessage"),async onOk(){await k(d().getFieldsValue()),l.success(e("common.exportSuccessText"))}})}return(M,Y)=>{const f=_("a-button");return h(),I("div",null,[n(o(E),{onRegister:o(c)},{toolbar:a(()=>[n(f,{type:"warning",preIcon:o(T).EXPORT,onClick:u},{default:a(()=>[w(b(o(e)("action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])])}}});export{wt as default};
