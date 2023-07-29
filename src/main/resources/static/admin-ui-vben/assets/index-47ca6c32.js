import{z as d,bo as _,k as c,a as v,f as m,aw as C,o as S,j as g,w as f,v as z,t as h,ag as w,N as x,c as F,as as B,B as A,cn as N,c4 as k,Q as T,al as $,az as j,b as D,s as O,bc as P,r as R,n as E,ax as V,aI as q,aJ as J,bz as y}from"./index-8b526734.js";function L(t){const e=d(t),a=d(!1);let s;function r(){s&&window.clearInterval(s)}function l(){a.value=!1,r(),s=null}function o(){c(a)||s||(a.value=!0,s=setInterval(()=>{c(e)===1?(l(),e.value=t):e.value-=1},1e3))}function n(){e.value=t,l()}function i(){n(),o()}return _(()=>{n()}),{start:o,reset:n,restart:i,clear:r,stop:l,currentCount:e,isStart:a}}const b=v({name:"CountButton",__name:"CountButton",props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(t){const e=t,a=d(!1),{currentCount:s,isStart:r,start:l,reset:o}=L(e.count),{t:n}=F(),i=m(()=>c(r)?n("component.countdown.sendText",[c(s)]):n("component.countdown.normalText"));C(()=>{e.value===void 0&&o()});async function p(){const{beforeStartFunc:u}=e;if(u&&B(u)){a.value=!0;try{await u()&&l()}finally{a.value=!1}}else l()}return(u,I)=>(S(),g(c(x),w(u.$attrs,{disabled:c(r),onClick:p,loading:a.value}),{default:f(()=>[z(h(i.value),1)]),_:1},16,["disabled","loading"]))}});function Q(t,e="value",a="change",s){const l=j()?.emit,o=A({value:t[e]}),n=N(o),i=u=>{o.value=u};return C(()=>{o.value=t[e]}),[m({get(){return o.value},set(u){k(u,n.value)||(o.value=u,T(()=>{l?.(a,u,...$(c(s))||[])}))}}),i,n]}const U=v({name:"CountDownInput",inheritAttrs:!1,__name:"CountdownInput",props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const e=t,{prefixCls:a}=D("countdown-input"),[s]=Q(e);return(r,l)=>{const o=O("a-input");return S(),g(o,w(r.$attrs,{class:c(a),size:t.size,value:c(s)}),P({addonAfter:f(()=>[E(b,{size:t.size,count:t.count,value:c(s),beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[R(Object.keys(r.$slots).filter(n=>n!=="addonAfter"),n=>({name:n,fn:f(i=>[V(r.$slots,n,q(J(i||{})))])}))]),1040,["class","size","value"])}}});const H=y(U);y(b);export{H as C,Q as u};