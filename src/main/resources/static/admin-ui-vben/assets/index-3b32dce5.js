import{bD as s,a,i as h,o as i,f as T,e as _,w as I,c as k,u as t,I as g,h as x,l as w}from"./index-185fe65d.js";import{_ as b}from"./index-c3c80eae.js";import{_ as y}from"./useForm-8fd7b992.js";import{u as E}from"./useTable-e1aa62c8.js";import"./index-3ea574b4.js";import"./index-ea6c9550.js";import{u as o}from"./useRender-7b752cf7.js";import{D as m,g as C}from"./dict-411628cd.js";import"./index-a51ee13a.js";import"./tree-1cdc2dee.js";import"./eagerComputed-625aaa6f.js";import"./index-341544d4.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./index-726b028f.js";import"./index-55063501.js";import"./get-99b39cda.js";import"./index-b9c40b5d.js";import"./FullscreenOutlined-32991190.js";import"./index-69b45e12.js";import"./sortable.esm-261924ea.js";import"./RedoOutlined-4bac5e59.js";import"./fromPairs-e099444b.js";import"./index-ad77ec72.js";import"./index-273d53fa.js";import"./index-e80a262d.js";import"./_baseIteratee-ef666e06.js";import"./scrollTo-360190e5.js";import"./index-0e02bec4.js";import"./index-55aee596.js";import"./index-4d2a3b0b.js";import"./useRefs-d524c1a2.js";import"./index-e8479e4b.js";import"./index-109393d4.js";import"./uniqBy-074073a7.js";function D(e){return s.get({url:"/system/oauth2-token/page",params:e})}function P(e){return s.delete({url:"/system/oauth2-token/delete?accessToken="+e})}const R=[{title:"访问令牌",dataIndex:"accessToken",width:300},{title:"刷新令牌",dataIndex:"refreshToken",width:300},{title:"用户编号",dataIndex:"userId",width:100},{title:"用户类型",dataIndex:"userType",width:120,customRender:({text:e})=>o.renderDict(e,m.USER_TYPE)},{title:"创建时间",dataIndex:"createTime",width:180,customRender:({text:e})=>o.renderDate(e)},{title:"过期时间",dataIndex:"expiresTime",width:180,customRender:({text:e})=>o.renderDate(e)}],S=[{label:"用户编号",field:"userId",component:"Input",colProps:{span:8}},{label:"客户端编号",field:"clientId",component:"Input",colProps:{span:8}},{label:"用户类型",field:"userType",component:"Select",componentProps:{options:C(m.USER_TYPE)},colProps:{span:8}}],B=a({name:"SystemToken"}),ge=a({...B,setup(e){const{t:r}=h(),{createMessage:c}=w(),[p,{reload:l}]=E({title:"Token列表",api:D,columns:R,formConfig:{labelWidth:120,schemas:S},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:60,title:r("common.action"),dataIndex:"action",fixed:"right"}});async function d(n){await P(n.id),c.success(r("common.delSuccessText")),l()}return(n,Y)=>(i(),T("div",null,[_(t(b),{onRegister:t(p)},{bodyCell:I(({column:u,record:f})=>[u.key==="action"?(i(),k(t(y),{key:0,actions:[{icon:t(g).DELETE,color:"error",label:"强退",auth:"system:oauth2-token:delete",popConfirm:{title:"是否确认强退",placement:"left",confirm:d.bind(null,f)}}]},null,8,["actions"])):x("",!0)]),_:1},8,["onRegister"])]))}});export{ge as default};
