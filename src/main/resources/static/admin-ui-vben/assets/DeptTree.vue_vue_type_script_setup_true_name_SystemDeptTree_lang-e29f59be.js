import{_ as n}from"./index-9a79925f.js";import{l as c}from"./index-1fa4f246.js";import{h as l}from"./tree-1cdc2dee.js";import{a,H as i,K as m,o as f,f as p,e as _,u as d}from"./index-185fe65d.js";const u={class:"m-4 mr-0 overflow-hidden bg-white"},h=a({name:"SystemDeptTree"}),y=a({...h,emits:["select"],setup(v,{emit:o}){const t=i([]);async function s(){const e=await c();t.value=l(e,"id")}function r(e){o("select",e[0])}return m(()=>{s()}),(e,w)=>(f(),p("div",u,[_(d(n),{title:"部门列表",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:t.value,fieldNames:{key:"id",title:"name"},onSelect:r},null,8,["treeData"])]))}});export{y as _};