import{bD as t}from"./index-185fe65d.js";function l(e){return t.get({url:"/system/role/page",params:e})}function o(){return t.get({url:"/system/role/list-all-simple"})}function s(e){return t.get({url:"/system/role/get?id="+e})}function u(e){return t.post({url:"/system/role/create",data:e})}function n(e){return t.put({url:"/system/role/update",data:e})}function a(e){return t.delete({url:"/system/role/delete?id="+e})}function i(e){return t.download({url:"/system/post/export",params:e},"导出角色.xls")}export{l as a,u as c,a as d,i as e,s as g,o as l,n as u};
