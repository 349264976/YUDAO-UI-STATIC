import{l as e,a4 as n,a5 as t,a6 as a,z as l,a7 as o,a8 as u,Y as r,a9 as i,aa as s,ab as c,ac as d}from"./base-085523fd.js";import{m as v,r as m,c as p,aw as f,G as b}from"./runtime-core.esm-bundler-ccc21fcd.js";function w(e){var n;const t=o(e);return null!=(n=null==t?void 0:t.$el)?n:t}const g=e?window:void 0,y=e?window.document:void 0,h=e?window.navigator:void 0;function E(...e){let a,l,o,u;if(n(e[0])||Array.isArray(e[0])?([l,o,u]=e,a=g):[a,l,o,u]=e,!a)return t;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const i=[],s=()=>{i.forEach((e=>e())),i.length=0},c=v((()=>w(a)),(e=>{s(),e&&i.push(...l.flatMap((n=>o.map((t=>((e,n,t)=>(e.addEventListener(n,t,u),()=>e.removeEventListener(n,t,u)))(e,n,t))))))}),{immediate:!0,flush:"post"}),d=()=>{c(),s()};return r(d),d}function O(e,n,t={}){const{window:a=g,ignore:l=[],capture:o=!0,detectIframe:u=!1}=t;if(!a)return;let r,i=!0;const s=e=>l.some((n=>{if("string"==typeof n)return Array.from(a.document.querySelectorAll(n)).some((n=>n===e.target||e.composedPath().includes(n)));{const t=w(n);return t&&(e.target===t||e.composedPath().includes(t))}})),c=t=>{a.clearTimeout(r);const l=w(e);l&&l!==t.target&&!t.composedPath().includes(l)&&(0===t.detail&&(i=!s(t)),i?n(t):i=!0)},d=[E(a,"click",c,{passive:!0,capture:o}),E(a,"pointerdown",(n=>{const t=w(e);t&&(i=!n.composedPath().includes(t)&&!s(n))}),{passive:!0}),E(a,"pointerup",(e=>{if(0===e.button){const n=e.composedPath();e.composedPath=()=>n,r=a.setTimeout((()=>c(e)),50)}}),{passive:!0}),u&&E(a,"blur",(t=>{var l;const o=w(e);"IFRAME"!==(null==(l=a.document.activeElement)?void 0:l.tagName)||(null==o?void 0:o.contains(a.document.activeElement))||n(t)}))].filter(Boolean);return()=>d.forEach((e=>e()))}function S(e,n=!1){const t=m(),l=()=>t.value=Boolean(e());return l(),a(l,n),t}function F(e={}){const{navigator:n=h,read:t=!1,source:a,copiedDuring:u=1500,legacy:r=!1}=e,i=["copy","cut"],s=S((()=>n&&"clipboard"in n)),c=p((()=>s.value||r)),d=m(""),v=m(!1),f=l((()=>v.value=!1),u);function b(){var e,t,a;s.value?n.clipboard.readText().then((e=>{d.value=e})):d.value=null!=(a=null==(t=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:t.toString())?a:""}if(c.value&&t)for(const l of i)E(l,b);return{isSupported:c,text:d,copied:v,copy:async function(e=o(a)){c.value&&null!=e&&(s.value?await n.clipboard.writeText(e):function(e){const n=document.createElement("textarea");n.value=null!=e?e:"",n.style.position="absolute",n.style.opacity="0",document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove()}(e),d.value=e,v.value=!0,f.start())}}}const I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},k="__vueuse_ssr_handlers__";function C(e,n,{window:t=g,initialValue:a=""}={}){const l=m(a),u=p((()=>{var e;return w(n)||(null==(e=null==t?void 0:t.document)?void 0:e.documentElement)}));return v([u,()=>o(e)],(([e,n])=>{var o;if(e&&t){const u=null==(o=t.getComputedStyle(e).getPropertyValue(n))?void 0:o.trim();l.value=u||a}}),{immediate:!0}),v(l,(n=>{var t;(null==(t=u.value)?void 0:t.style)&&u.value.style.setProperty(o(e),n)})),l}function P({document:e=y}={}){if(!e)return m("visible");const n=m(e.visibilityState);return E(e,"visibilitychange",(()=>{n.value=e.visibilityState})),n}I[k]=I[k]||{},I[k];var x=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,A=(e,n)=>{var t={};for(var a in e)N.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&x)for(var a of x(e))n.indexOf(a)<0&&T.call(e,a)&&(t[a]=e[a]);return t};function R(e,n,t={}){const a=t,{window:l=g}=a,o=A(a,["window"]);let u;const i=S((()=>l&&"ResizeObserver"in l)),s=()=>{u&&(u.disconnect(),u=void 0)},c=v((()=>w(e)),(e=>{s(),i.value&&l&&e&&(u=new ResizeObserver(n),u.observe(e,o))}),{immediate:!0,flush:"post"}),d=()=>{s(),c()};return r(d),{isSupported:i,stop:d}}const j=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function z(e,n={}){const{document:t=y,autoExit:a=!1}=n,l=e||(null==t?void 0:t.querySelector("html")),o=m(!1);let u=j[0];const i=S((()=>{if(!t)return!1;for(const e of j)if(e[1]in t)return u=e,!0;return!1})),[s,c,d,,v]=u;async function p(){i.value&&((null==t?void 0:t[d])&&await t[c](),o.value=!1)}async function f(){if(!i.value)return;await p();const e=w(l);e&&(await e[s](),o.value=!0)}return t&&E(t,v,(()=>{o.value=!!(null==t?void 0:t[d])}),!1),a&&r(p),{isSupported:i,isFullscreen:o,enter:f,exit:p,toggle:async function(){o.value?await p():await f()}}}var D,Q;function q(){const e=m([]);return e.value.set=n=>{n&&e.value.push(n)},f((()=>{e.value.length=0})),e}(Q=D||(D={})).UP="UP",Q.RIGHT="RIGHT",Q.DOWN="DOWN",Q.LEFT="LEFT",Q.NONE="NONE";var L=Object.defineProperty,B=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,_=(e,n,t)=>n in e?L(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function M(e,n,t,a={}){var l,o,u;const{clone:r=!1,passive:c=!1,eventName:d,deep:f=!1,defaultValue:w}=a,g=b(),y=t||(null==g?void 0:g.emit)||(null==(l=null==g?void 0:g.$emit)?void 0:l.bind(g))||(null==(u=null==(o=null==g?void 0:g.proxy)?void 0:o.$emit)?void 0:u.bind(null==g?void 0:g.proxy));let h=d;n||(n="modelValue"),h=d||h||`update:${n.toString()}`;const E=e=>{return r?i(r)?r(e):(n=e,JSON.parse(JSON.stringify(n))):e;var n},O=()=>s(e[n])?E(e[n]):w;if(c){const t=O(),a=m(t);return v((()=>e[n]),(e=>a.value=E(e))),v(a,(t=>{(t!==e[n]||f)&&y(h,t)}),{deep:f}),a}return p({get:()=>O(),set(e){y(h,e)}})}((e,n)=>{for(var t in n||(n={}))H.call(n,t)&&_(e,t,n[t]);if(B)for(var t of B(n))W.call(n,t)&&_(e,t,n[t])})({linear:u},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const U="ping";function G(e){return!0===e?{}:e}function V(e,n={}){const{onConnected:t,onDisconnected:a,onError:l,onMessage:o,immediate:u=!0,autoClose:i=!0,protocols:s=[]}=n,p=m(null),f=m("CLOSED"),b=m(),w=c(e);let g,y,h,O=!1,S=0,F=[];const I=(e=1e3,n)=>{b.value&&(O=!0,null==g||g(),b.value.close(e,n))},k=()=>{if(F.length&&b.value&&"OPEN"===f.value){for(const e of F)b.value.send(e);F=[]}},C=(e,n=!0)=>b.value&&"OPEN"===f.value?(k(),b.value.send(e),!0):(n&&F.push(e),!1),P=()=>{if(O||void 0===w.value)return;const e=new WebSocket(w.value,s);b.value=e,f.value="CONNECTING",e.onopen=()=>{f.value="OPEN",null==t||t(e),null==y||y(),k()},e.onclose=t=>{if(f.value="CLOSED",b.value=void 0,null==a||a(e,t),!O&&n.autoReconnect){const{retries:e=-1,delay:t=1e3,onFailed:a}=G(n.autoReconnect);S+=1,"number"==typeof e&&(e<0||S<e)||"function"==typeof e&&e()?setTimeout(P,t):null==a||a()}},e.onerror=n=>{null==l||l(e,n)},e.onmessage=t=>{if(n.heartbeat){clearTimeout(h),h=void 0;const{message:e=U}=G(n.heartbeat);if(t.data===e)return}p.value=t.data,null==o||o(e,t)}};if(n.heartbeat){const{message:e=U,interval:t=1e3,pongTimeout:a=1e3}=G(n.heartbeat),{pause:l,resume:o}=d((()=>{C(e,!1),null==h&&(h=setTimeout((()=>{I()}),a))}),t,{immediate:!1});g=l,y=o}i&&(E(window,"beforeunload",(()=>I())),r(I));const x=()=>{I(),O=!1,S=0,P()};return u&&v(w,x,{immediate:!0}),{data:p,status:f,close:I,send:C,open:x,ws:b}}function $({window:e=g}={}){if(!e)return m(!1);const n=m(e.document.hasFocus());return E(e,"blur",(()=>{n.value=!1})),E(e,"focus",(()=>{n.value=!0})),n}function J(e={}){const{window:n=g,initialWidth:t=1/0,initialHeight:l=1/0,listenOrientation:o=!0,includeScrollbar:u=!0}=e,r=m(t),i=m(l),s=()=>{n&&(u?(r.value=n.innerWidth,i.value=n.innerHeight):(r.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return s(),a(s),E("resize",s,{passive:!0}),o&&E("orientationchange",s,{passive:!0}),{width:r,height:i}}const Y={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"};export{Y as E,C as a,R as b,E as c,P as d,$ as e,w as f,M as g,F as h,V as i,q as j,z as k,O as o,J as u};
