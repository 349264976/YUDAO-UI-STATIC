import{a as s,a9 as o,H as i,X as n,o as l,c as d,w as m,b as c,aD as f,u as h}from"./index-185fe65d.js";import{C as u}from"./index-bb610c0a.js";import"./index-ed8d3e4e.js";import"./index-e80a262d.js";import{u as p}from"./useECharts-fd1e9656.js";const x=s({__name:"SaleRadar",props:{loading:Boolean,width:o.string.def("100%"),height:o.string.def("400px")},setup(e){const a=e,t=i(null),{setOptions:r}=p(t);return n(()=>a.loading,()=>{a.loading||r({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(g,w)=>(l(),d(h(u),{title:"销售统计",loading:e.loading},{default:m(()=>[c("div",{ref_key:"chartRef",ref:t,style:f({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{x as _};