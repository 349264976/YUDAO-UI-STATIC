import{D as s}from"./index-c3c80eae.js";import{be as n,cY as u}from"./index-185fe65d.js";import{I as m}from"./index-3ea574b4.js";import{T as a}from"./index-ea6c9550.js";const g={renderImg:r=>r?n(m,{src:r,height:80,width:80}):"",renderText:(r,e)=>r?r+" "+e:"",renderTag:(r,e)=>e?n("span",r):n(a,{color:e},()=>r),renderTags:r=>r?n("div",null,[r.map(e=>n(a,null,()=>e))]):"",renderDate:(r,e)=>r?e?u(r).format(e):u(r).format("YYYY-MM-DD HH:mm:ss"):"",renderDict:(r,e,i)=>e?n(s,{type:e,value:r,dictType:i||"number"}):""};export{g as u};
