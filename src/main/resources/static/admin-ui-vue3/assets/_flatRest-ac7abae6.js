import{e as r,r as n}from"./cloneDeep-8298b498.js";import{ah as a,X as t,F as e}from"./base-085523fd.js";function u(r){return r}var o=800,i=16,l=Date.now;var s=a?function(r,n){return a(r,"toString",{configurable:!0,enumerable:!1,value:(t=n,function(){return t}),writable:!0});var t}:u;var c,f,v;const h=(c=s,f=0,v=0,function(){var r=l(),n=i-(r-v);if(v=r,n>0){if(++f>=o)return arguments[0]}else f=0;return c.apply(void 0,arguments)});var p=Math.max;function g(r,n,a){return n=p(void 0===n?r.length-1:n,0),function(){for(var t=arguments,e=-1,u=p(t.length-n,0),o=Array(u);++e<u;)o[e]=t[n+e];e=-1;for(var i=Array(n+1);++e<n;)i[e]=t[e];return i[n]=a(o),function(r,n,a){switch(a.length){case 0:return r.call(n);case 1:return r.call(n,a[0]);case 2:return r.call(n,a[0],a[1]);case 3:return r.call(n,a[0],a[1],a[2])}return r.apply(n,a)}(r,this,i)}}var b=t?t.isConcatSpreadable:void 0;function m(n){return e(n)||r(n)||!!(b&&n&&n[b])}function d(r,a,t,e,u){var o=-1,i=r.length;for(t||(t=m),u||(u=[]);++o<i;){var l=r[o];a>0&&t(l)?a>1?d(l,a-1,t,e,u):n(u,l):e||(u[u.length]=l)}return u}function y(r){return(null==r?0:r.length)?d(r,1):[]}function w(r){return h(g(r,void 0,y),r+"")}export{y as a,d as b,w as f,u as i,g as o,h as s};