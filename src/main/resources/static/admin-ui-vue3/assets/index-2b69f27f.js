import{d as _,p as n,b as h,r as y,a as p,o as b,q as I,a2 as w,a1 as x,dr as C,i as k,ds as z,__tla as B}from"./index-0f589822.js";import{E as L,__tla as M}from"./el-image-viewer-863e3dd0.js";let f,O=Promise.all([(()=>{try{return B}catch{}})(),(()=>{try{return M}catch{}})()]).then(async()=>{const m=_({name:"ImageViewer",__name:"ImageViewer",props:{urlList:{type:Array,default:()=>[]},zIndex:n.number.def(200),initialIndex:n.number.def(0),infinite:n.bool.def(!0),hideOnClickModal:n.bool.def(!1),appendToBody:n.bool.def(!1),show:n.bool.def(!1)},setup(i){const a=i,l=h(()=>{const t={...a};return delete t.show,t}),o=y(a.show),d=()=>{o.value=!1};return(t,u)=>{const s=L;return p(o)?(b(),I(s,w({key:0},p(l),{onClose:d}),null,16)):x("",!0)}}});let r=null;f=function(i){if(!C)return;const{urlList:a,initialIndex:l=0,infinite:o=!0,hideOnClickModal:d=!1,appendToBody:t=!1,zIndex:u=2e3,show:s=!0}=i,e={},c=document.createElement("div");e.urlList=a,e.initialIndex=l,e.infinite=o,e.hideOnClickModal=d,e.appendToBody=t,e.zIndex=u,e.show=s,document.body.appendChild(c),r=k(m,e),z(r,c)}});export{O as __tla,f as c};