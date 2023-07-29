import{D as p}from"./index-0f4dcf74.js";import{a as u,B as f}from"./index-40f1f97e.js";import{bb as s,cm as d,a as g,z as b,o as T,j as h,w as x,n as I,k as n,ag as _}from"./index-8b526734.js";import"./index-ec19b8e7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as r}from"./useRender-f65ba3eb.js";import{D as l,g as D}from"./dict-5cefafd8.js";import{J as P}from"./index-8629d074.js";import{u as w}from"./useDescription-c4a08efa.js";const z=[{title:"日志编号",dataIndex:"id",width:100},{title:"任务编号",dataIndex:"jobId",width:100},{title:"处理器的名字",dataIndex:"handlerName",width:180},{title:"处理器的参数",dataIndex:"handlerParam",width:180},{title:"第几次执行",dataIndex:"executeIndex",width:100},{title:"执行时间",dataIndex:"beginTime",width:180,customRender:({record:e})=>{const t=r.renderDate(e.beginTime),a=r.renderDate(e.endTime);return r.renderTags([t,a])}},{title:"执行时长",dataIndex:"duration",width:180,customRender:({text:e})=>r.renderText(e," 毫秒")},{title:"任务状态",dataIndex:"status",width:180,customRender:({record:e})=>r.renderDict(e.status,l.INFRA_JOB_LOG_STATUS)}],E=[{label:"处理器的名字",field:"handlerName",component:"Input",colProps:{span:8}},{label:"开始执行时间",field:"beginTime",component:"DatePicker",colProps:{span:8}},{label:"结束执行时间",field:"endTime",component:"DatePicker",colProps:{span:8}},{label:"任务状态",field:"status",component:"Select",componentProps:{options:D(l.INFRA_JOB_STATUS)},colProps:{span:8}},{label:"处理器的名字",field:"handlerName",component:"Input",colProps:{span:8}}],J=[{label:"日志编号",field:"id"},{label:"任务编号",field:"jobId"},{label:"处理器的名字",field:"handlerName"},{label:"处理器的参数",field:"handlerParam"},{label:"第几次执行",field:"executeIndex"},{label:"执行时间",field:"beginTime",render:(e,t)=>{const a="开始: "+r.renderDate(t.beginTime),o="结束: "+r.renderDate(t.endTime);return s("span",{},[a,s("br"),o])}},{label:"执行时长",field:"duration",render:e=>r.renderText(e," 毫秒")},{label:"任务状态",field:"status",render:e=>r.renderDict(e,l.INFRA_JOB_LOG_STATUS)},{label:"执行结果",field:"result",render:e=>{const t=JSON.parse(e);return s(P,{data:t})}}];function H(e){return d.get({url:"/infra/job-log/page",params:e})}function R(e){return d.get({url:"/infra/job-log/get?id="+e})}function V(e){return d.download({url:"/infra/job-log/export-excel",params:e},"定时任务日志.xls")}const Y=g({name:"InfraJobLogModal",__name:"JobLogModal",setup(e){const t=b(),[a]=w({schema:J,data:t}),[o,{setModalProps:c}]=u(async i=>{c({confirmLoading:!1});const m=await R(i.record.id);t.value=m});return(i,m)=>(T(),h(n(f),_(i.$attrs,{onRegister:n(o),title:"查看详情"}),{default:x(()=>[I(n(p),{column:2,onRegister:n(a)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{Y as _,z as c,V as e,H as g,E as s};