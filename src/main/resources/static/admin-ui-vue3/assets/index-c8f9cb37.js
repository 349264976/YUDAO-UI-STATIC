import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-63555901.js";import{_ as t}from"./Dialog.vue_vue_type_style_index_0_lang-cfbb4036.js";import"./base-085523fd.js";/* empty css                     */import{_ as o}from"./XTextButton-ab77381a.js";import{E as s}from"./el-row-ad412a39.js";import{E as r}from"./el-col-613bea3c.js";import{E as l}from"./el-button-6b012e5e.js";import{F as i}from"./form-create.esm-95cd6609.js";import{h as a}from"./aria-8fadfbe9.js";import{u as n}from"./useI18n-56d4bc42.js";import{u as p}from"./useMessage-5e709b20.js";import{E as u}from"./index-be3181b1.js";import{d as m,r as c,C as f,o as d,a as _,w as j,l as v,e as g,k as y,f as x,M as C,i as b,t as h,h as k}from"./runtime-core.esm-bundler-ccc21fcd.js";import"./el-card-d8ab0074.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import"./propTypes-5cfdbdab.js";import"./index-7486e100.js";import"./focus-trap-f53979c5.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./index-4665dced.js";import"./index-7a379d2e.js";import"./el-dialog-41953601.js";import"./el-notification-c7d5f4ea.js";import"./index-c2caee16.js";import"./is-a7957d81.js";import"./use-dialog-625287c4.js";import"./refs-41718667.js";import"./XTextButton.vue_vue_type_style_index_0_scoped_0fcea4df_lang-41ab76b9.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./useCache-d48cf6c5.js";import"./el-message-7ddf9388.js";const O={class:"mb-2 float-right"},J={key:0,ref:"editor"},S={key:1,style:{color:"red"}},z=m({name:"Build"}),E=m({...z,setup(m){const{t:z}=n(),E=p(),N=c(),w=c(!1),B=c(""),T=c(!1),V=c(-1),D=c(""),R=e=>{w.value=!0,B.value=e},$=()=>{R("导入JSON--未实现")},H=()=>{R("导入Options--未实现")},I=()=>{R("生成JSON"),V.value=0,D.value=N.value.getRule()},M=()=>{R("生成Options"),V.value=1,D.value=N.value.getOption()},X=()=>{R("生成组件"),V.value=2,D.value=F()},A=()=>{},F=()=>{const e=N.value.getRule(),t=N.value.getOption();return`<template>\n  <form-create\n    v-model="fapi"\n    :rule="rule"\n    :option="option"\n    @submit="onSubmit"\n  ></form-create>\n</template>\n<script setup lang=ts>\n  import formCreate from "@form-create/element-ui";\n  const faps = ref(null)\n  const rule = ref('')\n  const option = ref('')\n  const init = () => {\n    rule.value = formCreate.parseJson('${i.toJson(e).replaceAll("\\","\\\\")}')\n    option.value = formCreate.parseJson('${JSON.stringify(t)}')\n  }\n  const onSubmit = (formData) => {\n    //todo 提交表单\n  }\n  init()\n<\/script>`};return(i,n)=>{const p=l,m=r,c=f("fc-designer"),V=s,R=o,F=u,K=t,U=e;return d(),_(U,null,{default:j((()=>[v(V,null,{default:j((()=>[v(m,null,{default:j((()=>[g("div",O,[v(p,{size:"small",onClick:$},{default:j((()=>[y(" 导入JSON")])),_:1}),v(p,{size:"small",onClick:H},{default:j((()=>[y(" 导入Options")])),_:1}),v(p,{size:"small",type:"primary",onClick:I},{default:j((()=>[y("生成JSON")])),_:1}),v(p,{size:"small",type:"success",onClick:M},{default:j((()=>[y("生成Options")])),_:1}),v(p,{size:"small",type:"danger",onClick:X},{default:j((()=>[y("生成组件")])),_:1}),v(p,{size:"small",onClick:A},{default:j((()=>[y("中英切换")])),_:1})])])),_:1}),v(m,null,{default:j((()=>[v(c,{ref_key:"designer",ref:N,height:"780px"},null,512)])),_:1})])),_:1}),v(K,{title:x(B),modelValue:x(w),"onUpdate:modelValue":n[1]||(n[1]=e=>C(w)?w.value=e:null),maxHeight:"600"},{default:j((()=>[x(w)?(d(),b("div",J,[v(R,{style:{float:"right"},title:x(z)("common.copy"),onClick:n[0]||(n[0]=e=>(async e=>{const{copy:t,copied:o,isSupported:s}=a({source:e});s?(await t(),x(o)&&E.success(z("common.copySuccess"))):E.error(z("common.copyError"))})(x(D)))},null,8,["title"]),v(F,{height:"580"},{default:j((()=>[g("pre",null,"            "+h(x(D))+"\n          ",1)])),_:1})],512)):k("",!0),x(T)?(d(),b("span",S,"输入内容格式有误!")):k("",!0)])),_:1},8,["title","modelValue"])])),_:1})}}});export{E as default};