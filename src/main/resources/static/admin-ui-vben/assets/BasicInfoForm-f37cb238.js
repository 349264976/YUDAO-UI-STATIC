import{u as d,a as l}from"./useForm-8fd7b992.js";import{b as f}from"./data-1bbd35a2.js";import{a as b,X as h,o as v,f as B,b as o,e as r,u as i,bB as I,bC as F,N as x}from"./index-185fe65d.js";import{D as y}from"./index-69b45e12.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./get-99b39cda.js";import"./useSize-536e554d.js";import"./index-a51ee13a.js";import"./index-ea6c9550.js";import"./index-726b028f.js";import"./index-55063501.js";import"./index-4d2a3b0b.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-ad77ec72.js";import"./transButton-4d2a5fee.js";import"./index-b9c40b5d.js";import"./useWindowSizeFn-513fc031.js";import"./FullscreenOutlined-32991190.js";import"./index-3ea574b4.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";import"./type-26865084.js";import"./index-17b3345e.js";import"./dict-411628cd.js";const s=e=>(I("data-v-663bbdb1"),e=e(),F(),e),S={class:"step1"},g={class:"step1-form"},w=s(()=>o("h3",null,"说明",-1)),C=s(()=>o("h4",null,"基本信息",-1)),N=s(()=>o("p",null," 配置生成的基本信息 ",-1)),O=s(()=>o("h4",null,"生成信息",-1)),R=s(()=>o("p",null," 配置生成生成的详细信息。 ",-1)),V=b({__name:"BasicInfoForm",props:{basicInfo:{type:Object,default:()=>null}},emits:["next"],setup(e,{emit:p}){const a=e,[n,{setFieldsValue:m,resetFields:c,validate:_}]=d({labelWidth:120,schemas:f,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:u});async function u(){try{const t=await _();p("next",t)}catch{}}return h(()=>a.basicInfo,t=>{t&&(c(),m({...t}))},{deep:!0,immediate:!0}),(t,k)=>(v(),B("div",S,[o("div",g,[r(i(l),{onRegister:i(n)},null,8,["onRegister"])]),r(i(y)),w,C,N,O,R]))}});const nt=x(V,[["__scopeId","data-v-663bbdb1"]]);export{nt as default};
