import{a,ap as i,fz as l,B as _,o as f,c as m,w as e,e as r,u as o,ae as p,aB as E,i as d,U as g}from"./index-185fe65d.js";import{B as L}from"./index-0e02bec4.js";const C=a({name:"ErrorAction"}),x=a({...C,setup(h){const{t:n}=d(),{push:s}=i(),t=l(),u=_(()=>t.getErrorLogListCount);function c(){s(g.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return(B,R)=>(f(),m(o(E),{title:o(n)("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:c},{default:e(()=>[r(o(L),{count:o(u),offset:[0,10],overflowCount:99},{default:e(()=>[r(o(p),{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay"]))}});export{x as default};
