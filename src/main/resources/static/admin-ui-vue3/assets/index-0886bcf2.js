import{a}from"./index-a7ef0ded.js";const s=async s=>await a.get({url:"/system/post/page",params:s}),t=async()=>await a.get({url:"/system/post/list-all-simple"}),e=async s=>await a.get({url:"/system/post/get?id="+s}),p=async s=>await a.post({url:"/system/post/create",data:s}),l=async s=>await a.put({url:"/system/post/update",data:s}),o=async s=>await a.delete({url:"/system/post/delete?id="+s}),r=async s=>await a.download({url:"/system/post/export",params:s});export{s as a,p as c,o as d,r as e,e as g,t as l,l as u};
