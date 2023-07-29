import{cm as o,a as x,z as C,o as D,j as T,w as n,n as i,k as a,i as c,t as w,ag as F}from"./index-8b526734.js";import{L as d}from"./index-623be94b.js";import"./index-3e87b811.js";import{u as v,_ as M}from"./useForm-f7dccb87.js";import"./BasicForm.vue_vue_type_style_index_0_lang-42e5fba8.js";import{a as K,B}from"./index-40f1f97e.js";import"./index-ec19b8e7.js";import"./index-d2d20fb4.js";import"./tree-e6981725.js";import"./index-03ea37ad.js";import"./index-c8168e27.js";import"./sortable.esm-f208c0d8.js";import{u as m}from"./useRender-f65ba3eb.js";import{D as L}from"./dict-5cefafd8.js";const X=[{label:"Redis版本",field:"redis_version"},{label:"运行模式",field:"redis_mode",render:e=>e==="standalone"?"单机":"集群"},{label:"端口",field:"tcp_port"},{label:"客户端数",field:"connected_clients"},{label:"运行时间(天)",field:"uptime_in_days"},{label:"使用内存",field:"used_memory_human"},{label:"使用CPU",field:"tcp_port",render:e=>parseFloat(e).toFixed(2)},{label:"内存配置",field:"maxmemory_human"},{label:"AOF是否开启",field:"maxmemory_human",render:e=>e==="0"?"否":"是"},{label:"RDB是否成功",field:"rdb_last_bgsave_status"},{label:"Key数量",field:"expired_keys"},{label:"网络入口/出口",field:"instantaneous_input_kbps",render:(e,r)=>r.instantaneous_input_kbps+"kps / "+r.instantaneous_output_kbps+"kps"}],Z=[{title:"Key 模板",dataIndex:"keyTemplate",width:200},{title:"Key 类型",dataIndex:"keyType",width:100},{title:"Value 类型",dataIndex:"valueType",width:300},{title:"超时类型",dataIndex:"timeoutType",width:180,customRender:({text:e})=>m.renderDict(e,L.INFRA_REDIS_TIMEOUT_TYPE)},{title:"超时时间",dataIndex:"timeout",width:100,customRender:({text:e})=>m.renderText(e===0?0:e/1e3,"秒")}],P=[{label:"缓存键名",field:"cacheForm.key",dynamicDisabled:!0,component:"Input"},{label:"缓存内容",field:"cacheForm.value",dynamicDisabled:!0,component:"InputTextArea"}];function ee(){return o.get({url:"/infra/redis/get-monitor-info"})}function te(){return o.get({url:"/infra/redis/get-key-define-list"})}function p(e){return o.get({url:"/infra/redis/get-key-list",params:{keyTemplate:e}})}function S(e){return o.delete({url:"/infra/redis/delete-key?key="+e})}const V=["onClick"],A=["onClick"],ae=x({name:"RedisModal",__name:"RedisModal",setup(e){const r=d.Item,f=d.Item.Meta,u=C([]),[_,{setFieldsValue:y,resetFields:b}]=v({labelWidth:120,baseColProps:{span:24},schemas:P,showActionButtonGroup:!1,actionColOptions:{span:23}}),[h,{setModalProps:g}]=K(async t=>{b(),g({confirmLoading:!1});const s=await p(t.record);u.value=s});async function k(t){const s=await p(t);y({...s})}function I(t){S(t)}return(t,s)=>(D(),T(a(B),F(t.$attrs,{onRegister:a(h),title:"缓存模块"}),{default:n(()=>[i(a(d),{"data-source":u.value},{renderItem:n(({item:l})=>[i(a(r),null,{default:n(()=>[i(a(f),null,{title:n(()=>[c("a",{onClick:R=>k(l)},w(l),9,V)]),actions:n(()=>[c("a",{onClick:R=>I(l)},"删除",8,A)]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"]),i(a(M),{onRegister:a(_)},null,8,["onRegister"])]),_:1},16,["onRegister"]))}});export{ae as _,ee as a,X as b,te as g,Z as t};