import{bD as p,a as n,i as s,o as d,f as c,e as l,u as r}from"./index-185fe65d.js";import{_ as u}from"./index-c3c80eae.js";import"./useForm-8fd7b992.js";import{u as _}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import{u as e}from"./useRender-7b752cf7.js";import{D as o,g as i}from"./dict-411628cd.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-b9c40b5d.js";import"./FullscreenOutlined-32991190.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";function f(t){return p.get({url:"/bpm/oa/leave/page",params:t})}const P=[{title:"申请编号",dataIndex:"id",width:100},{title:"状态",dataIndex:"result",width:180,customRender:({text:t})=>e.renderDict(t,o.BPM_PROCESS_INSTANCE_RESULT)},{title:"开始时间",dataIndex:"startTime",width:180,customRender:({text:t})=>e.renderDate(t)},{title:"结束时间",dataIndex:"endTime",width:180,customRender:({text:t})=>e.renderDate(t)},{title:"请假类型",dataIndex:"type",width:180,customRender:({text:t})=>e.renderDict(t,o.BPM_OA_LEAVE_TYPE)},{title:"原因",dataIndex:"reason",width:180},{title:"申请时间",dataIndex:"applyTime",width:180,customRender:({text:t})=>e.renderDate(t)}],h=[{label:"请假类型",field:"status",component:"Select",componentProps:{options:i(o.BPM_OA_LEAVE_TYPE)},colProps:{span:8}},{label:"申请时间",field:"createTime",component:"RangePicker",colProps:{span:8}},{label:"结果",field:"status",component:"Select",componentProps:{options:i(o.BPM_PROCESS_INSTANCE_RESULT)},colProps:{span:8}},{label:"原因",field:"reason",component:"Input",colProps:{span:8}}],T=n({name:"BpmLeave"}),pt=n({...T,setup(t){const{t:m}=s(),[a]=_({title:"请假列表",api:f,columns:P,formConfig:{labelWidth:120,schemas:h},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:m("common.action"),dataIndex:"action",fixed:"right"}});return(E,I)=>(d(),c("div",null,[l(r(u),{onRegister:r(a)},null,8,["onRegister"])]))}});export{pt as default};
