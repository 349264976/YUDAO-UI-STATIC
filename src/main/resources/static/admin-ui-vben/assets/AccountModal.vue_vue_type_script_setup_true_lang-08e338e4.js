import{a as h,c as g,z as w,k as e,o as x,j as q,w as M,n as b,ag as _,x as A}from"./index-8b526734.js";import{u as R,_ as k}from"./useForm-f7dccb87.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as S,B as v}from"./index-40f1f97e.js";import"./index-ec19b8e7.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as y}from"./useRender-f65ba3eb.js";import{g as B,u as C,c as F}from"./index-6dcbd942.js";const W=[{title:"编号",dataIndex:"id",defaultHidden:!0,width:100},{title:"名称",dataIndex:"name",width:180},{title:"微信号",dataIndex:"account",width:100},{title:"appId",dataIndex:"appId",width:120},{title:"服务器地址(URL)",dataIndex:"appIdURL",width:120,customRender:({record:a})=>"http://服务端地址/mp/open/"+a.appId},{title:"二维码",dataIndex:"qrCodeUrl",width:180,customRender:({text:a})=>y.renderImg(a)},{title:"备注",dataIndex:"remark",width:180}],E=[{label:"名称",field:"name",component:"Input",colProps:{span:8}}],L=[{label:"编号",field:"id",show:!1,component:"Input"},{label:"名称",field:"name",required:!0,component:"Input"},{label:"微信号",field:"account",helpMessage:"在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 账号详情] 中能找到「微信号」",required:!0,component:"Input"},{label:"公众号 appId",field:"appId",helpMessage:"在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 基本设置] 中能找到「开发者ID(AppID)」",required:!0,component:"Input"},{label:"公众号 appSecret",field:"appSecret",helpMessage:"在微信公众平台（mp.weixin.qq.com）的菜单 [设置与开发 - 公众号设置 - 基本设置] 中能找到「开发者密码(AppSecret)」",required:!0,component:"Input"},{label:"公众号token",field:"token",required:!0,component:"Input"},{label:"消息加解密密钥",field:"aesKey",required:!0,component:"Input"},{label:"备注",field:"remark",component:"InputTextArea"}],J=h({name:"MpAccountModal",__name:"AccountModal",emits:["success","register"],setup(a,{emit:i}){const{t:n}=g(),{createMessage:c}=A(),o=w(!0),[p,{setFieldsValue:d,resetFields:l,validate:u}]=R({labelWidth:120,baseColProps:{span:24},schemas:L,showActionButtonGroup:!1,actionColOptions:{span:23}}),[m,{setModalProps:s,closeModal:f}]=S(async t=>{if(l(),s({confirmLoading:!1}),o.value=!!t?.isUpdate,e(o)){const r=await B(t.record.id);d({...r})}});async function I(){try{const t=await u();s({confirmLoading:!0}),e(o)?await C(t):await F(t),f(),i("success"),c.success(n("common.saveSuccessText"))}finally{s({confirmLoading:!1})}}return(t,r)=>(x(),q(e(v),_(t.$attrs,{onRegister:e(m),title:o.value?e(n)("action.edit"):e(n)("action.create"),onOk:I}),{default:M(()=>[b(e(k),{onRegister:e(p)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{J as _,W as c,E as s};