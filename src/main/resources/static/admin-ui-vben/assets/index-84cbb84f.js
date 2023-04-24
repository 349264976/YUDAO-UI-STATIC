import{a as x,i as v,j as M,bc as S,o as i,f as R,e as g,w as r,L as _,c as a,u as e,I as n,k as h,af as C,h as F,l as V}from"./index-185fe65d.js";import{a as $}from"./index-b9c40b5d.js";import{g as B,c as N,s as L,_ as O,e as P,d as U}from"./ConfigModal.vue_vue_type_script_setup_true_name_InfraConfigModal_lang-dd1873c1.js";import{_ as j}from"./index-c3c80eae.js";import{_ as A}from"./useForm-8fd7b992.js";import{u as W}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import"./useWindowSizeFn-513fc031.js";import"./FullscreenOutlined-32991190.js";import"./useRender-7b752cf7.js";import"./dict-411628cd.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";const X=x({name:"InfraConfig"}),$e=x({...X,setup(q){const{t}=v(),{createConfirm:b,createMessage:s}=V(),[y,{openModal:c}]=$(),[I,{getForm:T,reload:m}]=W({title:"配置中心列表",api:B,columns:N,formConfig:{labelWidth:120,schemas:L},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:t("common.action"),dataIndex:"action",fixed:"right"}});function k(){c(!0,{isUpdate:!1})}function w(o){c(!0,{record:o,isUpdate:!0})}async function E(){b({title:t("common.exportTitle"),iconType:"warning",content:t("common.exportMessage"),async onOk(){await P(T().getFieldsValue()),s.success(t("common.exportSuccessText"))}})}async function D(o){await U(o.id),s.success(t("common.delSuccessText")),m()}return(o,p)=>{const l=M("a-button"),u=S("auth");return i(),R("div",null,[g(e(j),{onRegister:e(I)},{toolbar:r(()=>[_((i(),a(l,{type:"primary",preIcon:e(n).ADD,onClick:k},{default:r(()=>[h(C(e(t)("action.create")),1)]),_:1},8,["preIcon"])),[[u,["infra:config:create"]]]),_((i(),a(l,{type:"warning",preIcon:e(n).EXPORT,onClick:E},{default:r(()=>[h(C(e(t)("action.export")),1)]),_:1},8,["preIcon"])),[[u,["infra:config:export"]]])]),bodyCell:r(({column:f,record:d})=>[f.key==="action"?(i(),a(e(A),{key:0,actions:[{icon:e(n).EDIT,label:e(t)("action.edit"),auth:"infra:config:update",onClick:w.bind(null,d)},{icon:e(n).DELETE,color:"error",label:e(t)("action.delete"),auth:"infra:config:delete",popConfirm:{title:e(t)("common.delMessage"),placement:"left",confirm:D.bind(null,d)}}]},null,8,["actions"])):F("",!0)]),_:1},8,["onRegister"]),g(O,{onRegister:e(y),onSuccess:p[0]||(p[0]=f=>e(m)())},null,8,["onRegister"])])}}});export{$e as default};
