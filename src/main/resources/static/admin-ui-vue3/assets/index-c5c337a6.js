import{d as H,l as J,u as L,r as i,f as G,af as Q,A as W,a7 as X,O as Y,o as u,c as Z,i as a,w as e,a as t,P as $,j as m,B as c,q as d,x as aa,F as ea,T as ta,D as la,_ as ra,H as oa,I as na,J as sa,K as _a,L as ia,__tla as ua}from"./index-0f589822.js";import{_ as ma,__tla as pa}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{_ as ca,__tla as da}from"./index.vue_vue_type_script_setup_true_lang-75e3d81d.js";import{_ as fa,__tla as ya}from"./DictTag.vue_vue_type_script_lang-9c2c480d.js";import{_ as ha,__tla as ga}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0f1e3633.js";import{D as ba,__tla as ka}from"./dict-f9a1a53b.js";import{d as wa,__tla as Ca}from"./formatTime-58783104.js";import{a as va,d as xa,g as Sa,__tla as Va}from"./index-ecf33ee8.js";import{b as Fa}from"./formCreate-a3356cdc.js";import{u as Na,__tla as Pa}from"./useMessage-45ab706e.js";import{__tla as Ua}from"./index-331b9b98.js";import"./color-a8b4eb58.js";import{__tla as qa}from"./el-card-bbdd700f.js";let q,Ka=Promise.all([(()=>{try{return ua}catch{}})(),(()=>{try{return pa}catch{}})(),(()=>{try{return da}catch{}})(),(()=>{try{return ya}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return Ca}catch{}})(),(()=>{try{return Va}catch{}})(),(()=>{try{return Pa}catch{}})(),(()=>{try{return Ua}catch{}})(),(()=>{try{return qa}catch{}})()]).then(async()=>{q=H({name:"BpmForm",__name:"index",setup(Oa){const C=Na(),{t:K}=J(),{currentRoute:O,push:T}=L(),h=i(!0),v=i(0),x=i([]),o=G({pageNo:1,pageSize:10,name:null}),S=i(),p=async()=>{h.value=!0;try{const n=await va(o);x.value=n.list,v.value=n.total}finally{h.value=!1}},g=()=>{o.pageNo=1,p()},z=()=>{S.value.resetFields(),g()},V=n=>{const r={name:"BpmFormEditor"};typeof n=="number"&&(r.query={id:n}),T(r)},f=i(!1),b=i({rule:[],option:{}});return Q(()=>O.value,()=>{p()},{immediate:!0}),W(()=>{p()}),(n,r)=>{const B=ta,F=la,k=ra,s=oa,R=na,N=ha,_=sa,A=fa,D=_a,I=ca,M=X("form-create"),j=ma,y=Y("hasPermi"),E=ia;return u(),Z(ea,null,[a(N,null,{default:e(()=>[a(R,{ref_key:"queryFormRef",ref:S,inline:!0,model:t(o),class:"-mb-15px","label-width":"68px"},{default:e(()=>[a(F,{label:"\u8868\u5355\u540D",prop:"name"},{default:e(()=>[a(B,{modelValue:t(o).name,"onUpdate:modelValue":r[0]||(r[0]=l=>t(o).name=l),class:"!w-240px",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8868\u5355\u540D",onKeyup:$(g,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),a(F,null,{default:e(()=>[a(s,{onClick:g},{default:e(()=>[a(k,{class:"mr-5px",icon:"ep:search"}),m(" \u641C\u7D22 ")]),_:1}),a(s,{onClick:z},{default:e(()=>[a(k,{class:"mr-5px",icon:"ep:refresh"}),m(" \u91CD\u7F6E ")]),_:1}),c((u(),d(s,{plain:"",type:"primary",onClick:V},{default:e(()=>[a(k,{class:"mr-5px",icon:"ep:plus"}),m(" \u65B0\u589E ")]),_:1})),[[y,["bpm:form:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),a(N,null,{default:e(()=>[c((u(),d(D,{data:t(x)},{default:e(()=>[a(_,{align:"center",label:"\u7F16\u53F7",prop:"id"}),a(_,{align:"center",label:"\u8868\u5355\u540D",prop:"name"}),a(_,{align:"center",label:"\u72B6\u6001",prop:"status"},{default:e(l=>[a(A,{type:t(ba).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),a(_,{align:"center",label:"\u5907\u6CE8",prop:"remark"}),a(_,{formatter:t(wa),align:"center",label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime"},null,8,["formatter"]),a(_,{align:"center",label:"\u64CD\u4F5C"},{default:e(l=>[c((u(),d(s,{link:"",type:"primary",onClick:P=>V(l.row.id)},{default:e(()=>[m(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["bpm:form:update"]]]),c((u(),d(s,{link:"",onClick:P=>(async w=>{const U=await Sa(w);Fa(b,U.conf,U.fields),f.value=!0})(l.row.id)},{default:e(()=>[m(" \u8BE6\u60C5 ")]),_:2},1032,["onClick"])),[[y,["bpm:form:query"]]]),c((u(),d(s,{link:"",type:"danger",onClick:P=>(async w=>{try{await C.delConfirm(),await xa(w),C.success(K("common.delSuccess")),await p()}catch{}})(l.row.id)},{default:e(()=>[m(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["bpm:form:delete"]]])]),_:1})]),_:1},8,["data"])),[[E,t(h)]]),a(I,{limit:t(o).pageSize,"onUpdate:limit":r[1]||(r[1]=l=>t(o).pageSize=l),page:t(o).pageNo,"onUpdate:page":r[2]||(r[2]=l=>t(o).pageNo=l),total:t(v),onPagination:p},null,8,["limit","page","total"])]),_:1}),a(j,{modelValue:t(f),"onUpdate:modelValue":r[3]||(r[3]=l=>aa(f)?f.value=l:null),title:"\u8868\u5355\u8BE6\u60C5",width:"800"},{default:e(()=>[a(M,{option:t(b).option,rule:t(b).rule},null,8,["option","rule"])]),_:1},8,["modelValue"])],64)}}})});export{Ka as __tla,q as default};