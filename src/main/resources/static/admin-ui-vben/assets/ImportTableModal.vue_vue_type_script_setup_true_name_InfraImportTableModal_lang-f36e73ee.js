import{u,B as f}from"./index-b9c40b5d.js";import{_ as b}from"./index-c3c80eae.js";import"./useForm-8fd7b992.js";import{u as g}from"./useTable-e1aa62c8.js";import{a as s,o as I,c as h,w,e as S,u as a,ag as _}from"./index-185fe65d.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import{g as r}from"./index-08a9c5f7.js";import{u as n}from"./useRender-7b752cf7.js";import{g as C,D as T}from"./dict-411628cd.js";import{a as x,c as P}from"./index-f2d2d6f2.js";const R=await r(),E=[{title:"数据源",dataIndex:"dataSourceConfigId",width:100,customRender:({text:e})=>{for(const t of R)if(e===t.id)return t.name;return"未知【"+e+"】"}},{title:"表名称",dataIndex:"tableName",width:200},{title:"表描述",dataIndex:"tableComment",width:120},{title:"实体",dataIndex:"className",width:200},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>n.renderDate(e)},{title:"更新时间",dataIndex:"updateTime",width:180,customRender:({text:e})=>n.renderDate(e)}],U=[{label:"表名称",field:"tableName",component:"Input",colProps:{span:8}},{label:"表描述",field:"tableComment",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}];C(T.COMMON_STATUS);const M=[{title:"表名称",dataIndex:"name",width:200},{title:"表描述",dataIndex:"comment",width:120}],N=[{label:"数据源",field:"dataSourceConfigId",component:"ApiSelect",defaultValue:0,componentProps:{api:()=>r(),labelField:"name",valueField:"id"},colProps:{span:8}},{label:"表名称",field:"name",component:"Input",colProps:{span:8}},{label:"表描述",field:"comment",component:"Input",colProps:{span:8}}],k=s({name:"InfraImportTableModal"}),W=s({...k,emits:["success","register"],setup(e,{emit:t}){const[l,{getSelectRowKeys:i}]=g({api:x,columns:M,formConfig:{labelWidth:80,schemas:N},rowSelection:{type:"checkbox"},rowKey:"name",useSearchForm:!0,pagination:!1,showTableSetting:!1,showIndexColumn:!1}),[c,{setModalProps:m,closeModal:d}]=u(async()=>{m({confirmLoading:!1})});async function p(){const o=await i();await P({dataSourceConfigId:0,tableNames:o}),d(),t("success")}return(o,D)=>(I(),h(a(f),_(o.$attrs,{width:800,onRegister:a(c),title:"导入",onOk:p}),{default:w(()=>[S(a(b),{onRegister:a(l)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{W as _,E as c,U as s};
