import{d as A,r as i,o,q as m,w as s,i as _,j as p,a,B as C,c as q,k as B,F as j,x as D,C as T,D as H,I as L,H as M,L as P,M as R,__tla as z}from"./index-0f589822.js";import{_ as E,__tla as G}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{u as J,__tla as K}from"./index-953eef09.js";import{g as N,__tla as O}from"./index-2e308907.js";let v,Q=Promise.all([(()=>{try{return z}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return K}catch{}})(),(()=>{try{return O}catch{}})()]).then(async()=>{v=A({name:"BpmTaskUpdateAssigneeForm",__name:"TaskUpdateAssigneeForm",emits:["success"],setup(S,{expose:y,emit:g}){const l=i(!1),d=i(!1),t=i({id:"",assigneeUserId:void 0}),U=i({assigneeUserId:[{required:!0,message:"\u65B0\u5BA1\u6279\u4EBA\u4E0D\u80FD\u4E3A\u7A7A",trigger:"change"}]}),n=i(),c=i([]);y({open:async u=>{l.value=!0,k(),t.value.id=u,c.value=await N()}});const h=async()=>{if(n&&await n.value.validate()){d.value=!0;try{await J(t.value),l.value=!1,g("success")}finally{d.value=!1}}},k=()=>{var u;t.value={id:"",assigneeUserId:void 0},(u=n.value)==null||u.resetFields()};return(u,r)=>{const b=R,w=T,I=H,V=L,f=M,x=E,F=P;return o(),m(x,{modelValue:a(l),"onUpdate:modelValue":r[2]||(r[2]=e=>D(l)?l.value=e:null),title:"\u8F6C\u6D3E\u5BA1\u6279\u4EBA",width:"500"},{footer:s(()=>[_(f,{disabled:a(d),type:"primary",onClick:h},{default:s(()=>[p("\u786E \u5B9A")]),_:1},8,["disabled"]),_(f,{onClick:r[1]||(r[1]=e=>l.value=!1)},{default:s(()=>[p("\u53D6 \u6D88")]),_:1})]),default:s(()=>[C((o(),m(V,{ref_key:"formRef",ref:n,model:a(t),rules:a(U),"label-width":"110px"},{default:s(()=>[_(I,{label:"\u65B0\u5BA1\u6279\u4EBA",prop:"assigneeUserId"},{default:s(()=>[_(w,{modelValue:a(t).assigneeUserId,"onUpdate:modelValue":r[0]||(r[0]=e=>a(t).assigneeUserId=e),clearable:"",style:{width:"100%"}},{default:s(()=>[(o(!0),q(j,null,B(a(c),e=>(o(),m(b,{key:e.id,label:e.nickname,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[F,a(d)]])]),_:1},8,["modelValue"])}}})});export{v as _,Q as __tla};