import{b as o}from"./props-8b0ad601.js";import{u as s}from"./useECharts-fd1e9656.js";import{a as i,H as n,K as p,o as l,f as m,aD as c}from"./index-185fe65d.js";const d=i({__name:"VisitAnalysisBar",props:{...o},setup(h){const t=n(null),{setOptions:r}=s(t);return p(()=>{r({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:[...new Array(12)].map((e,a)=>`${a+1}月`)},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(e,a)=>(l(),m("div",{ref_key:"chartRef",ref:t,style:c({height:e.height,width:e.width})},null,4))}});export{d as _};
