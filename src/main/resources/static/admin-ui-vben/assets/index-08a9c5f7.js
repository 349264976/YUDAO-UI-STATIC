import{bD as e}from"./index-185fe65d.js";function r(){return e.get({url:"/infra/data-source-config/list"})}function n(t){return e.get({url:"/infra/data-source-config/get?id="+t})}function o(t){return e.post({url:"/infra/data-source-config/create",data:t})}function u(t){return e.put({url:"/infra/data-source-config/update",data:t})}function i(t){return e.delete({url:"/infra/data-source-config/delete?id="+t})}export{n as a,o as c,i as d,r as g,u};
