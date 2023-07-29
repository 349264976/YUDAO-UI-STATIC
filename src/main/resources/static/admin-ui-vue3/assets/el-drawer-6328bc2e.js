import{ag as $,dh as A,di as L,aj as B,d as x,dj as T,dk as q,aT as H,cl as D,dl as v,b as d,r as h,ah as j,bn as F,aY as N,dm as O,a7 as i,o as t,q as P,i as r,w as n,B as U,g as w,a2 as Y,aN as M,V as a,c as o,al as c,t as V,a1 as l,a3 as G,Y as J,cs as K,an as Q,__tla as W}from"./index-0f589822.js";let k,X=Promise.all([(()=>{try{return W}catch{}})()]).then(async()=>{const C=x({name:"ElDrawer",components:{ElOverlay:T,ElFocusTrap:q,ElIcon:H,Close:D},inheritAttrs:!1,props:$({...A,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),emits:L,setup(e,{slots:s}){v({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},d(()=>!!s.title)),v({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},d(()=>!!e.customClass));const f=h(),b=h(),m=j("drawer"),{t:y}=F(),u=d(()=>e.direction==="rtl"||e.direction==="ltr"),p=d(()=>N(e.size));return{...O(e,f),drawerRef:f,focusStartRef:b,isHorizontal:u,drawerSize:p,ns:m,t:y}}}),_=["aria-label","aria-labelledby","aria-describedby"],R=["id"],E=["aria-label"],S=["id"];k=Q(B(C,[["render",function(e,s,f,b,m,y){const u=i("close"),p=i("el-icon"),g=i("el-focus-trap"),z=i("el-overlay");return t(),P(K,{to:"body",disabled:!e.appendToBody},[r(J,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:n(()=>[U(r(z,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:n(()=>[r(g,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:n(()=>[w("div",Y({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:s[1]||(s[1]=M(()=>{},["stop"]))}),[w("span",{ref:"focusStartRef",class:a(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(t(),o("header",{key:0,class:a(e.ns.e("header"))},[e.$slots.title?c(e.$slots,"title",{key:1},()=>[l(" DEPRECATED SLOT ")]):c(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?l("v-if",!0):(t(),o("span",{key:0,id:e.titleId,role:"heading",class:a(e.ns.e("title"))},V(e.title),11,R))]),e.showClose?(t(),o("button",{key:2,"aria-label":e.t("el.drawer.close"),class:a(e.ns.e("close-btn")),type:"button",onClick:s[0]||(s[0]=(...I)=>e.handleClose&&e.handleClose(...I))},[r(p,{class:a(e.ns.e("close"))},{default:n(()=>[r(u)]),_:1},8,["class"])],10,E)):l("v-if",!0)],2)):l("v-if",!0),e.rendered?(t(),o("div",{key:1,id:e.bodyId,class:a(e.ns.e("body"))},[c(e.$slots,"default")],10,S)):l("v-if",!0),e.$slots.footer?(t(),o("div",{key:2,class:a(e.ns.e("footer"))},[c(e.$slots,"footer")],2)):l("v-if",!0)],16,_)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[G,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]))});export{k as E,X as __tla};