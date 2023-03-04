import{c as e,b as l}from"./aria-8fadfbe9.js";import{v as a,T as t}from"./runtime-dom.esm-bundler-daa7e741.js";import{b as s,u as r,_ as o,l as n,d as i,i as u,c,w as v}from"./base-085523fd.js";import{t as m}from"./el-notification-c7d5f4ea.js";import{d as f,q as p,r as d,c as h,H as y,aU as g,o as w,a as b,w as S,b as z,e as x,n as _,f as E,s as k,i as T,l as L,F as H,m as B,D as j,p as C,A as R,x as N,aC as A,j as $,g as M,h as W,ba as X}from"./runtime-core.esm-bundler-ccc21fcd.js";const Y=Symbol("scrollbarContextKey"),q={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},D=s({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var K=o(f({__name:"thumb",props:D,setup(l){const s=l,o=p(Y),i=r("scrollbar");o||m("Thumb","can not inject scrollbar context");const u=d(),c=d(),v=d({}),f=d(!1);let T=!1,L=!1,H=n?document.onselectstart:null;const B=h((()=>q[s.vertical?"vertical":"horizontal"])),j=h((()=>(({move:e,size:l,bar:a})=>({[a.size]:l,transform:`translate${a.axis}(${e}%)`}))({size:s.size,move:s.move,bar:B.value}))),C=h((()=>u.value[B.value.offset]**2/o.wrapElement[B.value.scrollSize]/s.ratio/c.value[B.value.offset])),R=e=>{var l;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(l=window.getSelection())||l.removeAllRanges(),A(e);const a=e.currentTarget;a&&(v.value[B.value.axis]=a[B.value.offset]-(e[B.value.client]-a.getBoundingClientRect()[B.value.direction]))},N=e=>{if(!c.value||!u.value||!o.wrapElement)return;const l=100*(Math.abs(e.target.getBoundingClientRect()[B.value.direction]-e[B.value.client])-c.value[B.value.offset]/2)*C.value/u.value[B.value.offset];o.wrapElement[B.value.scroll]=l*o.wrapElement[B.value.scrollSize]/100},A=e=>{e.stopImmediatePropagation(),T=!0,document.addEventListener("mousemove",$),document.addEventListener("mouseup",M),H=document.onselectstart,document.onselectstart=()=>!1},$=e=>{if(!u.value||!c.value)return;if(!1===T)return;const l=v.value[B.value.axis];if(!l)return;const a=100*(-1*(u.value.getBoundingClientRect()[B.value.direction]-e[B.value.client])-(c.value[B.value.offset]-l))*C.value/u.value[B.value.offset];o.wrapElement[B.value.scroll]=a*o.wrapElement[B.value.scrollSize]/100},M=()=>{T=!1,v.value[B.value.axis]=0,document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",M),W(),L&&(f.value=!1)};y((()=>{W(),document.removeEventListener("mouseup",M)}));const W=()=>{document.onselectstart!==H&&(document.onselectstart=H)};return e(g(o,"scrollbarElement"),"mousemove",(()=>{L=!1,f.value=!!s.size})),e(g(o,"scrollbarElement"),"mouseleave",(()=>{L=!0,f.value=T})),(e,l)=>(w(),b(t,{name:E(i).b("fade"),persisted:""},{default:S((()=>[z(x("div",{ref_key:"instance",ref:u,class:_([E(i).e("bar"),E(i).is(E(B).key)]),onMousedown:N},[x("div",{ref_key:"thumb",ref:c,class:_(E(i).e("thumb")),style:k(E(j)),onMousedown:R},null,38)],34),[[a,e.always||f.value]])])),_:1},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);var O=o(f({__name:"bar",props:s({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:l}){const a=e,t=d(0),s=d(0);return l({handleScroll:e=>{if(e){const l=e.offsetHeight-4,r=e.offsetWidth-4;s.value=100*e.scrollTop/l*a.ratioY,t.value=100*e.scrollLeft/r*a.ratioX}}}),(e,l)=>(w(),T(H,null,[L(K,{move:t.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),L(K,{move:s.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const P=s({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:i([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),F={scroll:({scrollTop:e,scrollLeft:l})=>[e,l].every(u)},I=f({name:"ElScrollbar"});const U=v(o(f({...I,props:P,emits:F,setup(a,{expose:t,emit:s}){const o=a,n=r("scrollbar");let i,v;const m=d(),f=d(),p=d(),y=d("0"),g=d("0"),z=d(),L=d(1),H=d(1),q=h((()=>{const e={};return o.height&&(e.height=c(o.height)),o.maxHeight&&(e.maxHeight=c(o.maxHeight)),[o.wrapStyle,e]})),D=h((()=>[o.wrapClass,n.e("wrap"),{[n.em("wrap","hidden-default")]:!o.native}])),K=h((()=>[n.e("view"),o.viewClass])),P=()=>{var e;f.value&&(null==(e=z.value)||e.handleScroll(f.value),s("scroll",{scrollTop:f.value.scrollTop,scrollLeft:f.value.scrollLeft}))};const F=()=>{if(!f.value)return;const e=f.value.offsetHeight-4,l=f.value.offsetWidth-4,a=e**2/f.value.scrollHeight,t=l**2/f.value.scrollWidth,s=Math.max(a,o.minSize),r=Math.max(t,o.minSize);L.value=a/(e-a)/(s/(e-s)),H.value=t/(l-t)/(r/(l-r)),g.value=s+4<e?`${s}px`:"",y.value=r+4<l?`${r}px`:""};return B((()=>o.noresize),(a=>{a?(null==i||i(),null==v||v()):(({stop:i}=l(p,F)),v=e("resize",F))}),{immediate:!0}),B((()=>[o.maxHeight,o.height]),(()=>{o.native||j((()=>{var e;F(),f.value&&(null==(e=z.value)||e.handleScroll(f.value))}))})),C(Y,R({scrollbarElement:m,wrapElement:f})),N((()=>{o.native||j((()=>{F()}))})),A((()=>F())),t({wrapRef:f,update:F,scrollTo:function(e,l){X(e)?f.value.scrollTo(e):u(e)&&u(l)&&f.value.scrollTo(e,l)},setScrollTop:e=>{u(e)&&(f.value.scrollTop=e)},setScrollLeft:e=>{u(e)&&(f.value.scrollLeft=e)},handleScroll:P}),(e,l)=>(w(),T("div",{ref_key:"scrollbarRef",ref:m,class:_(E(n).b())},[x("div",{ref_key:"wrapRef",ref:f,class:_(E(D)),style:k(E(q)),onScroll:P},[(w(),b(M(e.tag),{ref_key:"resizeRef",ref:p,class:_(E(K)),style:k(e.viewStyle)},{default:S((()=>[$(e.$slots,"default")])),_:3},8,["class","style"]))],38),e.native?W("v-if",!0):(w(),b(O,{key:0,ref_key:"barRef",ref:z,height:g.value,width:y.value,always:e.always,"ratio-x":H.value,"ratio-y":L.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]));export{q as B,U as E};
