import{u as k,a as v}from"./useForm-8fd7b992.js";import{_ as O}from"./index-9a79925f.js";import{u as C,B as D}from"./index-b9c40b5d.js";import"./index-c3c80eae.js";import{u as m}from"./useRender-7b752cf7.js";import{D as i,g as f}from"./dict-411628cd.js";import{a as R,u as x,c as y}from"./index-6d03b957.js";import{l as U}from"./index-17b3345e.js";import{h as B}from"./tree-1cdc2dee.js";import{a as g,H as d,u as e,o as F,c as N,w as u,e as p,ag as A}from"./index-185fe65d.js";const K=[{title:"套餐编号",dataIndex:"id",width:100},{title:"套餐名",dataIndex:"name",width:180},{title:"状态",dataIndex:"status",width:180,customRender:({text:a})=>m.renderDict(a,i.COMMON_STATUS)},{title:"备注",dataIndex:"remark",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:a})=>m.renderDate(a)}],Q=[{label:"套餐名",field:"name",component:"Input",colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:f(i.COMMON_STATUS)},colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],L=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"套餐名",field:"name",required:!0,component:"Input"},{label:"菜单权限",field:"menuIds",slot:"menuIds",component:"Input"},{label:"状态",field:"status",component:"Select",defaultValue:0,componentProps:{options:f(i.COMMON_STATUS)}}],V=g({name:"SystemTenantPackageModal"}),X=g({...V,emits:["success","register"],setup(a,{emit:_}){const s=d(!0),n=d([]),[h,{setFieldsValue:I,resetFields:T,validate:w}]=k({labelWidth:120,baseColProps:{span:24},schemas:L,showActionButtonGroup:!1,actionColOptions:{span:23}}),[P,{setModalProps:r,closeModal:S}]=C(async t=>{if(T(),r({confirmLoading:!1}),e(n).length===0){const o=await U();n.value=B(o,"id")}if(s.value=!!t?.isUpdate,e(s)){const o=await R(t.record.id);I({...o})}});async function M(){try{const t=await w();r({confirmLoading:!0}),e(s)?await x(t):await y(t),S(),_("success")}finally{r({confirmLoading:!1})}}return(t,o)=>(F(),N(e(D),A(t.$attrs,{onRegister:e(P),title:s.value?"编辑":"新增",onOk:M}),{default:u(()=>[p(e(v),{onRegister:e(h)},{menuIds:u(({model:l,field:c})=>[p(e(O),{value:l[c],"onUpdate:value":b=>l[c]=b,treeData:n.value,fieldNames:{title:"name",key:"id"},checkStrictly:!0,checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{X as _,K as c,Q as s};