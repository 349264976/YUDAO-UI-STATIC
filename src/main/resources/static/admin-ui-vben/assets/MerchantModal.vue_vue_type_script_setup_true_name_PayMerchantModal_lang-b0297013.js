import{u as I,B as S}from"./index-b9c40b5d.js";import{u as w,a as M}from"./useForm-8fd7b992.js";import{c as b,a as _,u as P,b as C}from"./index-c85a8cb3.js";import"./index-c3c80eae.js";import{u as k}from"./useRender-7b752cf7.js";import{be as x,l as R,a as r,H as T,u as s,o as O,c as y,w as N,e as B,ag as F}from"./index-185fe65d.js";import{g as c,D as d}from"./dict-411628cd.js";import{S as v}from"./index-55063501.js";const W=[{title:"商户编号",dataIndex:"id",width:100},{title:"商户号",dataIndex:"no",width:180},{title:"商户全称",dataIndex:"name",width:100},{title:"商户简称",dataIndex:"shortName",width:120},{title:"开启状态",dataIndex:"status",width:180,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),x(v,{checked:e.status===0,checkedChildren:"已启用",unCheckedChildren:"已禁用",loading:e.pendingStatus,onChange(o){e.pendingStatus=!0;const t=o?0:1,{createMessage:n}=R();b(e.id,t).then(()=>{e.status=t,n.success("已成功修改商户状态")}).catch(()=>{n.error("修改商户状态失败")}).finally(()=>{e.pendingStatus=!1})}}))},{title:"备注",dataIndex:"remark",width:180},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>k.renderDate(e)}],Y=[{label:"商户号",field:"no",component:"Input",colProps:{span:8}},{label:"商户全称",field:"name",component:"Input",colProps:{span:8}},{label:"商户简称",field:"shortName",component:"Input",colProps:{span:8}},{label:"状态",field:"status",component:"Select",componentProps:{options:c(d.COMMON_STATUS)},colProps:{span:8}},{label:"备注",field:"remark",component:"Input",colProps:{span:8}},{label:"创建时间",field:"createTime",component:"RangePicker",colProps:{span:8}}],A=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"商户全称",field:"name",required:!0,component:"Input"},{label:"商户简称",field:"shortName",required:!0,component:"Input"},{label:"开启状态",field:"status",component:"Select",defaultValue:0,componentProps:{options:c(d.COMMON_STATUS)}},{label:"备注",field:"remark",component:"InputTextArea"}],D=r({name:"PayMerchantModal"}),j=r({...D,emits:["success","register"],setup(e,{emit:o}){const t=T(!0),[n,{setFieldsValue:p,resetFields:u,validate:m}]=w({labelWidth:120,baseColProps:{span:24},schemas:A,showActionButtonGroup:!1,actionColOptions:{span:23}}),[f,{setModalProps:i,closeModal:h}]=I(async a=>{if(u(),i({confirmLoading:!1}),t.value=!!a?.isUpdate,s(t)){const l=await _(a.record.id);p({...l})}});async function g(){try{const a=await m();i({confirmLoading:!0}),s(t)?await P(a):await C(a),h(),o("success")}finally{i({confirmLoading:!1})}}return(a,l)=>(O(),y(s(S),F(a.$attrs,{onRegister:s(f),title:t.value?"编辑":"新增",onOk:g}),{default:N(()=>[B(s(M),{onRegister:s(n)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{j as _,W as c,Y as s};
