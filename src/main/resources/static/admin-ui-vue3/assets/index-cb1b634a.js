import{b as e,d as a,u as t,_ as l,E as s,x as o,i as n,L as r,w as i,a as u}from"./base-085523fd.js";import{r as d,b as c,o as p,y as v}from"./index-c2caee16.js";import{b,d as m,e as f,E as h}from"./aria-8fadfbe9.js";import{m as y}from"./is-a7957d81.js";import{j as g,t as x,U as C}from"./el-notification-c7d5f4ea.js";import{c as $}from"./strings-777507ad.js";import{aO as w,au as P,d as k,q as N,r as T,m as S,D as B,o as E,i as j,n as R,f as A,s as F,G as _,c as L,x as K,aC as V,l as q,p as z,j as D,b8 as M,u as O,A as U,E as G,b as H,h as W}from"./runtime-core.esm-bundler-ccc21fcd.js";import{d as X}from"./el-button-6b012e5e.js";import{v as Y}from"./runtime-dom.esm-bundler-daa7e741.js";const I=Symbol("tabsRootContextKey"),J=(e,a)=>{const t={},l=w([]);return{children:l,addChild:s=>{t[s.uid]=s,l.value=((e,a,t)=>g(e.subTree).filter((e=>{var t;return P(e)&&(null==(t=e.type)?void 0:t.name)===a&&!!e.component})).map((e=>e.component.uid)).map((e=>t[e])).filter((e=>!!e)))(e,a,t)},removeChild:e=>{delete t[e],l.value=l.value.filter((a=>a.uid!==e))}}},Q=e({tabs:{type:a(Array),default:()=>y([])}}),Z="ElTabBar",ee=k({name:Z});var ae=l(k({...ee,props:Q,setup(e,{expose:a}){const l=e,s=_(),o=N(I);o||x(Z,"<el-tabs><el-tab-bar /></el-tabs>");const n=t("tabs"),r=T(),i=T(),u=()=>i.value=(()=>{let e=0,a=0;const t=["top","bottom"].includes(o.props.tabPosition)?"width":"height",n="width"===t?"x":"y",r="x"===n?"left":"top";return l.tabs.every((o=>{var n,i;const u=null==(i=null==(n=s.parent)?void 0:n.refs)?void 0:i[`tab-${o.uid}`];if(!u)return!1;if(!o.active)return!0;e=u[`offset${$(r)}`],a=u[`client${$(t)}`];const d=window.getComputedStyle(u);return"width"===t&&(l.tabs.length>1&&(a-=Number.parseFloat(d.paddingLeft)+Number.parseFloat(d.paddingRight)),e+=Number.parseFloat(d.paddingLeft)),!1})),{[t]:`${a}px`,transform:`translate${$(n)}(${e}px)`}})();return S((()=>l.tabs),(async()=>{await B(),u()}),{immediate:!0}),b(r,(()=>u())),a({ref:r,update:u}),(e,a)=>(E(),j("div",{ref_key:"barRef",ref:r,class:R([A(n).e("active-bar"),A(n).is(A(o).props.tabPosition)]),style:F(i.value)},null,6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const te=e({panes:{type:a(Array),default:()=>y([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),le="ElTabNav",se=k({name:le,props:te,emits:{tabClick:(e,a,t)=>t instanceof Event,tabRemove:(e,a)=>a instanceof Event},setup(e,{expose:a,emit:l}){const o=_(),n=N(I);n||x(le,"<el-tabs><tab-nav /></el-tabs>");const r=t("tabs"),i=m(),u=f(),v=T(),y=T(),g=T(),C=T(!1),w=T(0),P=T(!1),k=T(!0),E=L((()=>["top","bottom"].includes(n.props.tabPosition)?"width":"height")),j=L((()=>({transform:`translate${"width"===E.value?"X":"Y"}(-${w.value}px)`}))),R=()=>{if(!v.value)return;const e=v.value[`offset${$(E.value)}`],a=w.value;if(!a)return;const t=a>e?a-e:0;w.value=t},A=()=>{if(!v.value||!y.value)return;const e=y.value[`offset${$(E.value)}`],a=v.value[`offset${$(E.value)}`],t=w.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;w.value=l},F=async()=>{const e=y.value;if(!(C.value&&g.value&&v.value&&e))return;await B();const a=g.value.querySelector(".is-active");if(!a)return;const t=v.value,l=["top","bottom"].includes(n.props.tabPosition),s=a.getBoundingClientRect(),o=t.getBoundingClientRect(),r=l?e.offsetWidth-o.width:e.offsetHeight-o.height,i=w.value;let u=i;l?(s.left<o.left&&(u=i-(o.left-s.left)),s.right>o.right&&(u=i+s.right-o.right)):(s.top<o.top&&(u=i-(o.top-s.top)),s.bottom>o.bottom&&(u=i+(s.bottom-o.bottom))),u=Math.max(u,0),w.value=Math.min(u,r)},z=()=>{if(!y.value||!v.value)return;const e=y.value[`offset${$(E.value)}`],a=v.value[`offset${$(E.value)}`],t=w.value;a<e?(C.value=C.value||{},C.value.prev=t,C.value.next=t+a<e,e-t<a&&(w.value=e-a)):(C.value=!1,t>0&&(w.value=0))},D=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=h;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus({preventScroll:!0}),n[i].click(),M()},M=()=>{k.value&&(P.value=!0)},O=()=>P.value=!1;return S(i,(e=>{"hidden"===e?k.value=!1:"visible"===e&&setTimeout((()=>k.value=!0),50)})),S(u,(e=>{e?setTimeout((()=>k.value=!0),50):k.value=!1})),b(g,z),K((()=>setTimeout((()=>F()),0))),V((()=>z())),a({scrollToActiveTab:F,removeFocus:O}),S((()=>e.panes),(()=>o.update()),{flush:"post"}),()=>{const a=C.value?[q("span",{class:[r.e("nav-prev"),r.is("disabled",!C.value.prev)],onClick:R},[q(s,null,{default:()=>[q(d,null,null)]})]),q("span",{class:[r.e("nav-next"),r.is("disabled",!C.value.next)],onClick:A},[q(s,null,{default:()=>[q(c,null,null)]})])]:null,t=e.panes.map(((a,t)=>{var o,i,u,d;const c=a.uid,v=a.props.disabled,b=null!=(i=null!=(o=a.props.name)?o:a.index)?i:`${t}`,m=!v&&(a.isClosable||e.editable);a.index=`${t}`;const f=m?q(s,{class:"is-icon-close",onClick:e=>l("tabRemove",a,e)},{default:()=>[q(p,null,null)]}):null,y=(null==(d=(u=a.slots).label)?void 0:d.call(u))||a.props.label,g=!v&&a.active?0:-1;return q("div",{ref:`tab-${c}`,class:[r.e("item"),r.is(n.props.tabPosition),r.is("active",a.active),r.is("disabled",v),r.is("closable",m),r.is("focus",P.value)],id:`tab-${b}`,key:`tab-${c}`,"aria-controls":`pane-${b}`,role:"tab","aria-selected":a.active,tabindex:g,onFocus:()=>M(),onBlur:()=>O(),onClick:e=>{O(),l("tabClick",a,b,e)},onKeydown:e=>{!m||e.code!==h.delete&&e.code!==h.backspace||l("tabRemove",a,e)}},[y,f])}));return q("div",{ref:g,class:[r.e("nav-wrap"),r.is("scrollable",!!C.value),r.is(n.props.tabPosition)]},[a,q("div",{class:r.e("nav-scroll"),ref:v},[q("div",{class:[r.e("nav"),r.is(n.props.tabPosition),r.is("stretch",e.stretch&&["top","bottom"].includes(n.props.tabPosition))],ref:y,style:j.value,role:"tablist",onKeydown:D},[e.type?null:q(ae,{tabs:[...e.panes]},null),t])])])}}}),oe=e({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:a(Function),default:()=>!0},stretch:Boolean}),ne=e=>M(e)||n(e);var re=k({name:"ElTabs",props:oe,emits:{[C]:e=>ne(e),tabClick:(e,a)=>a instanceof Event,tabChange:e=>ne(e),edit:(e,a)=>["remove","add"].includes(a),tabRemove:e=>ne(e),tabAdd:()=>!0},setup(e,{emit:a,slots:l,expose:n}){var r,i;const u=t("tabs"),{children:d,addChild:c,removeChild:p}=J(_(),"ElTabPane"),b=T(),m=T(null!=(i=null!=(r=e.modelValue)?r:e.activeName)?i:"0"),f=async t=>{var l,s,n;if(m.value!==t&&!o(t))try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,m.value))&&((e=>{m.value=e,a(C,e),a("tabChange",e)})(t),null==(n=null==(s=b.value)?void 0:s.removeFocus)||n.call(s))}catch(r){}},y=(e,t,l)=>{e.props.disabled||(f(t),a("tabClick",e,l))},g=(e,t)=>{e.props.disabled||o(e.props.name)||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tabRemove",e.props.name))},x=()=>{a("edit",void 0,"add"),a("tabAdd")};return X({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},L((()=>!!e.activeName))),S((()=>e.activeName),(e=>f(e))),S((()=>e.modelValue),(e=>f(e))),S(m,(async()=>{var e;await B(),null==(e=b.value)||e.scrollToActiveTab()})),z(I,{props:e,currentName:m,registerPane:c,unregisterPane:p}),n({currentName:m}),()=>{const a=e.editable||e.addable?q("span",{class:u.e("new-tab"),tabindex:"0",onClick:x,onKeydown:e=>{e.code===h.enter&&x()}},[q(s,{class:u.is("icon-plus")},{default:()=>[q(v,null,null)]})]):null,t=q("div",{class:[u.e("header"),u.is(e.tabPosition)]},[a,q(se,{ref:b,currentName:m.value,editable:e.editable,type:e.type,panes:d.value,stretch:e.stretch,onTabClick:y,onTabRemove:g},null)]),o=q("div",{class:u.e("content")},[D(l,"default")]);return q("div",{class:[u.b(),u.m(e.tabPosition),{[u.m("card")]:"card"===e.type,[u.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[t,o]:[o,t]])}}});const ie=e({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ue=["id","aria-hidden","aria-labelledby"],de="ElTabPane",ce=k({name:de});var pe=l(k({...ce,props:ie,setup(e){const a=e,l=_(),s=O(),o=N(I);o||x(de,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const n=t("tab-pane"),i=T(),u=L((()=>a.closable||o.props.closable)),d=r((()=>{var e;return o.currentName.value===(null!=(e=a.name)?e:i.value)})),c=T(d.value),p=L((()=>{var e;return null!=(e=a.name)?e:i.value})),v=r((()=>!a.lazy||c.value||d.value));S(d,(e=>{e&&(c.value=!0)}));const b=U({uid:l.uid,slots:s,props:a,paneName:p,active:d,index:i,isClosable:u});return K((()=>{o.registerPane(b)})),G((()=>{o.unregisterPane(b.uid)})),(e,a)=>A(v)?H((E(),j("div",{key:0,id:`pane-${A(p)}`,class:R(A(n).b()),role:"tabpanel","aria-hidden":!A(d),"aria-labelledby":`tab-${A(p)}`},[D(e.$slots,"default")],10,ue)),[[Y,A(d)]]):W("v-if",!0)}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ve=i(re,{TabPane:pe}),be=u(pe);export{ve as E,be as a};
