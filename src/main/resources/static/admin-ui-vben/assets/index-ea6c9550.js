import{a as F,z as S,B as h,n as j,p as d,e as s,e7 as U,e8 as W,H as z,ax as H,F as V,e6 as q,m as N,D as G}from"./index-185fe65d.js";var J=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},K=F({compatConfig:{MODE:3},name:"ACheckableTag",props:J(),setup:function(e,i){var l=i.slots,r=i.emit,g=S("tag",e),u=g.prefixCls,o=function(C){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",C)},p=h(function(){var a;return j(u.value,(a={},d(a,"".concat(u.value,"-checkable"),!0),d(a,"".concat(u.value,"-checkable-checked"),e.checked),a))});return function(){var a;return s("span",{class:p.value,onClick:o},[(a=l.default)===null||a===void 0?void 0:a.call(l)])}}});const m=K;var L=new RegExp("^(".concat(U.join("|"),")(-inverse)?$")),Q=new RegExp("^(".concat(W.join("|"),")$")),X=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},f=F({compatConfig:{MODE:3},name:"ATag",props:X(),slots:["closeIcon","icon"],setup:function(e,i){var l=i.slots,r=i.emit,g=i.attrs,u=S("tag",e),o=u.prefixCls,p=u.direction,a=z(!0);H(function(){e.visible!==void 0&&(a.value=e.visible)});var C=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(a.value=!1)},v=h(function(){var n=e.color;return n?L.test(n)||Q.test(n):!1}),E=h(function(){var n;return j(o.value,(n={},d(n,"".concat(o.value,"-").concat(e.color),v.value),d(n,"".concat(o.value,"-has-color"),e.color&&!v.value),d(n,"".concat(o.value,"-hidden"),!a.value),d(n,"".concat(o.value,"-rtl"),p.value==="rtl"),n))});return function(){var n,t,k,b=e.icon,B=b===void 0?(n=l.icon)===null||n===void 0?void 0:n.call(l):b,y=e.color,x=e.closeIcon,P=x===void 0?(t=l.closeIcon)===null||t===void 0?void 0:t.call(l):x,T=e.closable,R=T===void 0?!1:T,w=function(){return R?P?s("span",{class:"".concat(o.value,"-close-icon"),onClick:C},[P]):s(G,{class:"".concat(o.value,"-close-icon"),onClick:C},null):null},D={backgroundColor:y&&!v.value?y:void 0},I=B||null,$=(k=l.default)===null||k===void 0?void 0:k.call(l),O=I?s(V,null,[I,s("span",null,[$])]):$,A="onClick"in g,_=s("span",{class:E.value,style:D},[O,w()]);return A?s(q,null,{default:function(){return[_]}}):_}}});f.CheckableTag=m;f.install=function(c){return c.component(f.name,f),c.component(m.name,m),c};const Z=f;export{Z as T};
