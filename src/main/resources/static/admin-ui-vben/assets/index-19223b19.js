import{cm as u,a as d,c as f,o as r,h as _,n as m,w as g,j as h,k as t,I as C,l as b}from"./index-8b526734.js";import{u as k,_ as x}from"./useTable-33ec4cfa.js";import"./index-ec19b8e7.js";import{_ as I}from"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import"./index-7aea77c8.js";import"./index-8629d074.js";import{c as w,s as y,_ as S}from"./MailLogModal.vue_vue_type_script_setup_true_lang-a6164542.js";import{u as M}from"./index-40f1f97e.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./eagerComputed-6290a54f.js";import"./useForm-f7dccb87.js";import"./index-03ea37ad.js";import"./index-3e87b811.js";import"./_baseIteratee-625e56a9.js";import"./get-11175361.js";import"./useSize-5af631ed.js";import"./index-c8168e27.js";import"./_stringToArray-c38191b3.js";import"./index-42686290.js";import"./uniqBy-f83999c6.js";import"./index-9e517d44.js";import"./useWindowSizeFn-38cd0f6d.js";import"./onMountedOrActivated-13e9417a.js";import"./sortable.esm-f208c0d8.js";import"./RedoOutlined-fa24e892.js";import"./FullscreenOutlined-8b988545.js";import"./index-50e4b4b2.js";import"./index-8e6d9858.js";import"./index-081b541d.js";import"./fromPairs-e099444b.js";import"./scrollTo-67205127.js";import"./index-fb15648b.js";import"./dict-5cefafd8.js";import"./index-47ca6c32.js";import"./useRefs-872c0ad6.js";import"./index-c8286d7f.js";import"./index-0f4dcf74.js";import"./useRender-f65ba3eb.js";import"./account-c60d2e9a.js";import"./useDescription-c4a08efa.js";function R(o){return u.get({url:"/system/mail-log/page",params:o})}const gt=d({name:"SystemOperateLog",__name:"index",setup(o){const{t:e}=f(),[a]=k({title:"邮件日志列表",api:R,columns:w,formConfig:{labelWidth:120,schemas:y},useSearchForm:!0,showTableSetting:!0,showIndexColumn:!1,actionColumn:{width:140,title:e("common.action"),dataIndex:"action",fixed:"right"}}),[n,{openModal:p}]=M();function s(i){p(!0,i)}return(i,B)=>(r(),_("div",null,[m(t(x),{onRegister:t(a)},{bodyCell:g(({column:c,record:l})=>[c.key==="action"?(r(),h(t(I),{key:0,actions:[{icon:t(C).VIEW,label:t(e)("action.detail"),onClick:s.bind(null,l)}]},null,8,["actions"])):b("",!0)]),_:1},8,["onRegister"]),m(S,{onRegister:t(n)},null,8,["onRegister"])]))}});export{gt as default};