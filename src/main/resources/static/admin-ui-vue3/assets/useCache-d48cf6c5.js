var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];return r.push.apply(r,arguments),new(Function.bind.apply(t,r))}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var n={};({get exports(){return n},set exports(e){n=e}}).exports=function(){function e(e,t){for(var r in t)e[r]=t[r];return e}function t(e){var t=!1;if(e&&e.setItem){t=!0;var r="__"+Math.round(1e7*Math.random());try{e.setItem(r,r),e.removeItem(r)}catch(n){t=!1}}return t}function r(e){return"string"==typeof e&&window[e]instanceof Storage?window[e]:e}function n(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}function i(e,t){if(t=t||new Date,"number"==typeof e?e=e===1/0?l:new Date(t.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!n(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e}function o(e){var t=!1;if(e)if(e.code)switch(e.code){case 22:t=!0;break;case 1014:"NS_ERROR_DOM_QUOTA_REACHED"===e.name&&(t=!0)}else-2147024882===e.number&&(t=!0);return t}function a(e,t){this.c=(new Date).getTime();var r=i(t=t||d);this.e=r.getTime(),this.v=e}function u(e){return"object"==typeof e&&!!(e&&"c"in e&&"e"in e&&"v"in e)}function s(e){return(new Date).getTime()<e.e}function c(e){return"string"!=typeof e&&(e=String(e)),e}function f(i){var o=e({storage:"localStorage",exp:1/0},i),a=o.exp;if(a&&"number"!=typeof a&&!n(a))throw new Error("Constructor `exp` parameter cannot be converted to a valid Date instance");d=a;var u=r(o.storage),s=t(u);this.isSupported=function(){return s},s?(this.storage=u,this.quotaExceedHandler=function(e,t,r){if(r&&!0===r.force){this.deleteAllExpires();try{r.force=!1,this.set(e,t,r)}catch(n){}}}):e(this,p)}var l=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),d=l,h={serialize:function(e){return JSON.stringify(e)},deserialize:function(e){return e&&JSON.parse(e)}},p={set:function(){},get:function(){},delete:function(){},deleteAllExpires:function(){},clear:function(){},add:function(){},replace:function(){},touch:function(){}},g={set:function(t,r,n){if(t=c(t),"number"==typeof n&&(n={exp:n}),n=e({force:!0},n),void 0===r)return this.delete(t);var i=h.serialize(r),u=new a(i,n.exp);try{this.storage.setItem(t,h.serialize(u))}catch(s){o(s)&&this.quotaExceedHandler(t,i,n,s)}return r},get:function(e){e=c(e);var t=null;try{t=h.deserialize(this.storage.getItem(e))}catch(n){return null}if(u(t)){if(s(t)){var r=t.v;return h.deserialize(r)}this.delete(e)}return null},delete:function(e){return e=c(e),this.storage.removeItem(e),e},deleteAllExpires:function(){for(var e=this.storage.length,t=[],r=this,n=0;e>n;n++){var i=this.storage.key(n),o=null;try{o=h.deserialize(this.storage.getItem(i))}catch(a){}null!==o&&void 0!==o.e&&(new Date).getTime()>=o.e&&t.push(i)}return t.forEach((function(e){r.delete(e)})),t},clear:function(){this.storage.clear()},add:function(t,r,n){t=c(t),"number"==typeof n&&(n={exp:n}),n=e({force:!0},n);try{var i=h.deserialize(this.storage.getItem(t));if(!u(i)||!s(i))return this.set(t,r,n),!0}catch(o){return this.set(t,r,n),!0}return!1},replace:function(e,t,r){e=c(e);var n=null;try{n=h.deserialize(this.storage.getItem(e))}catch(i){return!1}if(u(n)){if(s(n))return this.set(e,t,r),!0;this.delete(e)}return!1},touch:function(e,t){e=c(e);var r=null;try{r=h.deserialize(this.storage.getItem(e))}catch(n){return!1}if(u(r)){if(s(r))return this.set(e,this.get(e),{exp:t}),!0;this.delete(e)}return!1}};return f.prototype=g,f}();const i=n,o={IS_DARK:"isDark",USER:"user",LANG:"lang",THEME:"theme",LAYOUT:"layout",ROLE_ROUTERS:"roleRouters",DICT_CACHE:"dictCache"},a=(e="localStorage")=>({wsCache:new i({storage:e})});export{o as C,r as a,e as c,t as g,a as u};
