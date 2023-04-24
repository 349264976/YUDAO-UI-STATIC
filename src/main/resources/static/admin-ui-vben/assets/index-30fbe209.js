import{a as d,i as D,j as v,bc as x,o as r,f as E,e as l,w as i,L as I,c as u,u as t,I as a,k as T,af as w,h as M,l as S}from"./index-185fe65d.js";import{a as B}from"./index-b9c40b5d.js";import{g as R,c as U,s as $,_ as G,d as N}from"./GroupModal.vue_vue_type_script_setup_true_name_BpmGroupModal_lang-dd4183b8.js";import{_ as V}from"./index-c3c80eae.js";import{_ as F}from"./useForm-8fd7b992.js";import{u as L}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import"./useWindowSizeFn-513fc031.js";import"./FullscreenOutlined-32991190.js";import"./useRender-7b752cf7.js";import"./dict-411628cd.js";import"./index-385c14ff.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";const j=d({name:"BpmGroup"}),Bt=d({...j,setup(A){const{t:e}=D(),{createMessage:f}=S(),[_,{openModal:s}]=B(),[h,{reload:m}]=L({title:"用户分组列表",api:R,columns:U,formConfig:{labelWidth:120,schemas:$},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function g(){s(!0,{isUpdate:!1})}function b(o){s(!0,{record:o,isUpdate:!0})}async function C(o){await N(o.id),f.success(e("common.delSuccessText")),m()}return(o,n)=>{const y=v("a-button"),k=x("auth");return r(),E("div",null,[l(t(V),{onRegister:t(h)},{toolbar:i(()=>[I((r(),u(y,{type:"primary",preIcon:t(a).ADD,onClick:g},{default:i(()=>[T(w(t(e)("action.create")),1)]),_:1},8,["preIcon"])),[[k,["system:post:create"]]])]),bodyCell:i(({column:p,record:c})=>[p.key==="action"?(r(),u(t(F),{key:0,actions:[{icon:t(a).EDIT,label:t(e)("action.edit"),auth:"system:post:update",onClick:b.bind(null,c)},{icon:t(a).DELETE,color:"error",label:t(e)("action.delete"),auth:"system:post:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:C.bind(null,c)}}]},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister"]),l(G,{onRegister:t(_),onSuccess:n[0]||(n[0]=p=>t(m)())},null,8,["onRegister"])])}}});export{Bt as default};