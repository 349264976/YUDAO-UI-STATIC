import{_ as q,__tla as v}from"./XButton-ceeece05.js";import{_ as j,__tla as B}from"./Form-89fb98fc.js";import{d as C,f,r as F,A as R,o as U,c as A,i as r,w as i,j as d,t as g,a,F as E,l as M,a6 as N,a5 as P,__tla as S}from"./index-0f589822.js";import{u as W,g as $,__tla as z}from"./profile-1a5a9953.js";import{u as D,__tla as G}from"./useMessage-45ab706e.js";let b,H=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return B}catch{}})(),(()=>{try{return S}catch{}})(),(()=>{try{return z}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{b=C({name:"BasicInfo",__name:"BasicInfo",setup(J){const{t:e}=M(),h=D(),y=f({nickname:[{required:!0,message:e("profile.rules.nickname"),trigger:"blur"}],email:[{required:!0,message:e("profile.rules.mail"),trigger:"blur"},{type:"email",message:e("profile.rules.truemail"),trigger:["blur","change"]}],mobile:[{required:!0,message:e("profile.rules.phone"),trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:e("profile.rules.truephone"),trigger:"blur"}]}),k=f([{field:"nickname",label:e("profile.user.nickname"),component:"Input"},{field:"mobile",label:e("profile.user.mobile"),component:"Input"},{field:"email",label:e("profile.user.email"),component:"Input"},{field:"sex",label:e("profile.user.sex"),component:"InputNumber",value:0}]),t=F(),n=async()=>{var l;const m=await $();(l=a(t))==null||l.setValues(m)};return R(async()=>{await n()}),(m,l)=>{const u=N,w=P,x=j,c=q;return U(),A(E,null,[r(x,{ref_key:"formRef",ref:t,labelWidth:80,rules:a(y),schema:a(k)},{sex:i(s=>[r(w,{modelValue:s.sex,"onUpdate:modelValue":o=>s.sex=o},{default:i(()=>[r(u,{label:1},{default:i(()=>[d(g(a(e)("profile.user.man")),1)]),_:1}),r(u,{label:2},{default:i(()=>[d(g(a(e)("profile.user.woman")),1)]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["rules","schema"]),r(c,{title:a(e)("common.save"),onClick:l[0]||(l[0]=s=>(()=>{var _;const o=(_=a(t))==null?void 0:_.getElFormRef();o&&o.validate(async I=>{var p;if(I){const V=(p=a(t))==null?void 0:p.formModel;await W(V),h.success(e("common.updateSuccess")),await n()}})})())},null,8,["title"]),r(c,{title:a(e)("common.reset"),type:"danger",onClick:l[1]||(l[1]=s=>n())},null,8,["title"])],64)}}})});export{b as _,H as __tla};