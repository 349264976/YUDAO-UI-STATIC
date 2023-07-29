import{_ as V,__tla as A}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{d as F,l as K,r as c,A as $,o as N,c as S,i as a,w as e,g as f,j as d,a as r,t as G,a1 as P,x as Q,F as q,da as W,dt as X,aM as Y,H as Z,E as aa,n as ea,ce as ta,__tla as la}from"./index-0f589822.js";import{_ as ra,__tla as sa}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0f1e3633.js";import{F as na,__tla as oa}from"./index.es-8784896f.js";import{H as y,j as ua,__tla as ia}from"./java-19a7feb4.js";import{u as ca,__tla as _a}from"./useMessage-45ab706e.js";import{__tla as ma}from"./el-card-bbdd700f.js";let J,pa=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return la}catch{}})(),(()=>{try{return sa}catch{}})(),(()=>{try{return oa}catch{}})(),(()=>{try{return ia}catch{}})(),(()=>{try{return _a}catch{}})(),(()=>{try{return ma}catch{}})()]).then(async()=>{function b(n){const s=["true","false","null"],_={scope:"literal",beginKeywords:s.join(" ")};return{name:"JSON",keywords:{literal:s},contains:[{className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,className:"punctuation",relevance:0},n.QUOTE_STRING_MODE,_,n.C_NUMBER_MODE,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}let v,h,O;v={class:"mb-2 float-right"},h={key:0,ref:"editor"},O=["innerHTML"],J=F({name:"InfraBuild",__name:"index",setup(n){const{t:s}=K(),_=ca(),o=c(),u=c(!1),C=c(""),m=c(-1),i=c(""),g=t=>{u.value=!0,C.value=t},k=()=>{g("\u751F\u6210 JSON"),m.value=0,i.value=o.value.getRule()},x=()=>{g("\u751F\u6210 Options"),m.value=1,i.value=o.value.getOption()},L=()=>{g("\u751F\u6210\u7EC4\u4EF6"),m.value=2,i.value=j()},j=()=>{const t=o.value.getRule(),l=o.value.getOption();return`<template>
    <form-create
      v-model="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    ></form-create>
  </template>
  <script setup lang=ts>
    import formCreate from "@form-create/element-ui";
    const faps = ref(null)
    const rule = ref('')
    const option = ref('')
    const init = () => {
      rule.value = formCreate.parseJson('${W.toJson(t).replaceAll("\\","\\\\")}')
      option.value = formCreate.parseJson('${JSON.stringify(l)}')
    }
    const onSubmit = (formData) => {
      //todo \u63D0\u4EA4\u8868\u5355
    }
    init()
  <\/script>`},T=t=>{let l="json";return m.value===2&&(l="xml"),Y(t)||(t=JSON.stringify(t)),y.highlight(l,t,!0).value||"&nbsp;"};return $(async()=>{y.registerLanguage("xml",ua),y.registerLanguage("json",b)}),(t,l)=>{const p=Z,E=aa,D=ea,w=ra,H=ta,R=V;return N(),S(q,null,[a(w,null,{default:e(()=>[a(D,null,{default:e(()=>[a(E,null,{default:e(()=>[f("div",v,[a(p,{size:"small",type:"primary",onClick:k},{default:e(()=>[d("\u751F\u6210 JSON")]),_:1}),a(p,{size:"small",type:"success",onClick:x},{default:e(()=>[d("\u751F\u6210 Options")]),_:1}),a(p,{size:"small",type:"danger",onClick:L},{default:e(()=>[d("\u751F\u6210\u7EC4\u4EF6")]),_:1})])]),_:1}),a(E,null,{default:e(()=>[a(r(na),{ref_key:"designer",ref:o,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),a(R,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=M=>Q(u)?u.value=M:null),title:r(C),"max-height":"600"},{default:e(()=>[r(u)?(N(),S("div",h,[a(p,{style:{float:"right"},onClick:l[0]||(l[0]=M=>(async z=>{const{copy:B,copied:I,isSupported:U}=X({source:z});U?(await B(),r(I)&&_.success(s("common.copySuccess"))):_.error(s("common.copyError"))})(r(i)))},{default:e(()=>[d(G(r(s)("common.copy")),1)]),_:1}),a(H,{height:"580"},{default:e(()=>[f("div",null,[f("pre",null,[f("code",{class:"hljs",innerHTML:T(r(i))},null,8,O)])])]),_:1})],512)):P("",!0)]),_:1},8,["modelValue","title"])],64)}}})});export{pa as __tla,J as default};
