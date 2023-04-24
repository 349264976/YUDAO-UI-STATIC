import{a as d,i as x,j as D,bc as I,o as i,f as v,e as l,w as r,L as w,c as u,u as t,I as a,k as E,af as S,h as T,l as M}from"./index-185fe65d.js";import{a as N}from"./index-b9c40b5d.js";import{g as R,c as $,s as B,_ as V,d as F}from"./NoticeModal.vue_vue_type_script_setup_true_name_SystemNoticeModal_lang-816d3f3b.js";import{_ as L}from"./index-c3c80eae.js";import{_ as U}from"./useForm-8fd7b992.js";import{u as j}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import"./useWindowSizeFn-513fc031.js";import"./FullscreenOutlined-32991190.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./eagerComputed-625aaa6f.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./useRender-7b752cf7.js";import"./dict-411628cd.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";const A=d({name:"SystemNotice"}),Mt=d({...A,setup(P){const{t:e}=x(),{createMessage:f}=M(),[_,{openModal:s}]=N(),[h,{reload:n}]=j({title:"公告列表",api:R,columns:$,formConfig:{labelWidth:120,schemas:B},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}});function g(){s(!0,{isUpdate:!1})}function b(o){s(!0,{record:o,isUpdate:!0})}async function C(o){await F(o.id),f.success(e("common.delSuccessText")),n()}return(o,m)=>{const y=D("a-button"),k=I("auth");return i(),v("div",null,[l(t(L),{onRegister:t(h)},{toolbar:r(()=>[w((i(),u(y,{type:"primary",preIcon:t(a).ADD,onClick:g},{default:r(()=>[E(S(t(e)("action.create")),1)]),_:1},8,["preIcon"])),[[k,["system:notice:create"]]])]),bodyCell:r(({column:c,record:p})=>[c.key==="action"?(i(),u(t(U),{key:0,actions:[{icon:t(a).EDIT,label:t(e)("action.edit"),auth:"system:notice:update",onClick:b.bind(null,p)},{icon:t(a).DELETE,color:"error",label:t(e)("action.delete"),auth:"system:notice:delete",popConfirm:{title:t(e)("common.delMessage"),placement:"left",confirm:C.bind(null,p)}}]},null,8,["actions"])):T("",!0)]),_:1},8,["onRegister"]),l(V,{onRegister:t(_),onSuccess:m[0]||(m[0]=c=>t(n)())},null,8,["onRegister"])])}}});export{Mt as default};
