import{p as e}from"./propTypes-5cfdbdab.js";import{d as a,c as t,f as s,B as l,r as n,A as i,o,i as r,e as c,l as d,w as m,F as p,t as u,k as x,z as y,a as g}from"./runtime-core.esm-bundler-ccc21fcd.js";import{p as v,b as f,E as h,_ as j,a as w}from"./echarts-data-7edcb266.js";import{_ as k}from"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import{s as _}from"./base-085523fd.js";import{E as b}from"./el-link-a5c3a721.js";import{E as A}from"./el-card-d8ab0074.js";import{E as D}from"./el-row-ad412a39.js";/* empty css                   */import{E}from"./el-col-613bea3c.js";import{a as $}from"./index-cf52a0ab.js";import{a as C}from"./user-76f18df3.js";import{u as M,a as O}from"./avatar-f3058573.js";import{u as R}from"./useI18n-56d4bc42.js";import{E as V}from"./index-653de86a.js";import"./index-c2caee16.js";import"./installCanvasRenderer-d5974f31.js";import"./app-41ac77cd.js";import"./el-message-7ddf9388.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./aria-8fadfbe9.js";import"./is-a7957d81.js";import"./index-7a379d2e.js";import"./useCache-d48cf6c5.js";import"./debounce-eb6bb100.js";import"./auth-2fa258a0.js";import"./index-ffcbf524.js";import"./index-a7ef0ded.js";import"./el-notification-c7d5f4ea.js";import"./el-button-6b012e5e.js";import"./index-4665dced.js";import"./focus-trap-f53979c5.js";import"./vue-router-0864a153.js";import"./cloneDeep-8298b498.js";import"./_flatRest-ac7abae6.js";const W=a({name:"Highlight",props:{tag:e.string.def("span"),keys:{type:Array,default:()=>[]},color:e.string.def("var(--el-color-primary)")},emits:["click"],setup(e,{emit:a,slots:n}){const i=t((()=>e.keys.map((t=>l("span",{onClick:()=>{a("click",t)},style:{color:e.color,cursor:"pointer"}},t))))),o=()=>{if(!(null==n?void 0:n.default))return null;const a=null==n?void 0:n.default()[0].children;if(!a)return null==n?void 0:n.default()[0];const t=(o=a,e.keys.forEach(((e,a)=>{const t=new RegExp(e,"g");o=o.replace(t,`{{${a}}}`)})),o.split(/{{|}}/));var o;const r=/^[0-9]*$/,c=t.map((e=>r.test(e)&&s(i)[e]||e));return l(e.tag,c)};return()=>o()}}),G={class:"flex items-center"},U=["src"],z={class:"text-20px text-700"},H={class:"mt-10px text-14px text-gray-500"},I={class:"flex h-70px items-center justify-end <sm:mt-10px"},B={class:"px-8px text-right"},F={class:"text-14px text-gray-400 mb-20px"},J={class:"px-8px text-right"},K={class:"text-14px text-gray-400 mb-20px"},P={class:"px-8px text-right"},Q={class:"text-14px text-gray-400 mb-20px"},T={class:"flex justify-between h-3"},Y={class:"flex items-center"},Z={class:"text-16px"},q={class:"mt-15px text-14px text-gray-400"},L={class:"mt-20px text-12px text-gray-400 flex justify-between"},N={class:"flex justify-between h-3"},S={class:"flex items-center"},X={class:"flex justify-between h-3"},ee={class:"flex items-center"},ae=["src"],te={class:"text-14px"},se={class:"mt-15px text-12px text-gray-400"},le=a({name:"Home"}),ne=a({...le,setup(e){const{t:a}=R(),t=C(),{setWatermark:l}=M(),le=n(!0),ne=t.getUser.avatar?t.getUser.avatar:O,ie=t.getUser.nickname,oe=i(v);let re=i({project:0,access:0,todo:0});const ce=async()=>{re=Object.assign(re,{project:40,access:2340,todo:10})};let de=i([]);const me=async()=>{const e=[{name:"Github",icon:"akar-icons:github-fill",message:"workplace.introduction",personal:"Archer",time:new Date},{name:"Vue",icon:"logos:vue",message:"workplace.introduction",personal:"Archer",time:new Date},{name:"Angular",icon:"logos:angular-icon",message:"workplace.introduction",personal:"Archer",time:new Date},{name:"React",icon:"logos:react",message:"workplace.introduction",personal:"Archer",time:new Date},{name:"Webpack",icon:"logos:webpack",message:"workplace.introduction",personal:"Archer",time:new Date},{name:"Vite",icon:"vscode-icons:file-type-vite",message:"workplace.introduction",personal:"Archer",time:new Date}];de=Object.assign(de,e)};let pe=i([]);const ue=async()=>{const e=[{title:"系统升级版本",type:"通知",keys:["通知","升级"],date:new Date},{title:"系统凌晨维护",type:"公告",keys:["公告","维护"],date:new Date},{title:"系统升级版本",type:"通知",keys:["通知","升级"],date:new Date},{title:"系统凌晨维护",type:"公告",keys:["公告","维护"],date:new Date}];pe=Object.assign(pe,e)};let xe=i([]);const ye=async()=>{xe=Object.assign(xe,[{name:"Github",icon:"akar-icons:github-fill",url:"github.io"},{name:"Vue",icon:"logos:vue",url:"vuejs.org"},{name:"Vite",icon:"vscode-icons:file-type-vite",url:"https://vitejs.dev/"},{name:"Angular",icon:"logos:angular-icon",url:"github.io"},{name:"React",icon:"logos:react",url:"github.io"},{name:"Webpack",icon:"logos:webpack",url:"github.io"}])},ge=async()=>{const e=[{value:335,name:"analysis.directAccess"},{value:310,name:"analysis.mailMarketing"},{value:234,name:"analysis.allianceAdvertising"},{value:135,name:"analysis.videoAdvertising"},{value:1548,name:"analysis.searchEngines"}];_(oe,"legend.data",e.map((e=>a(e.name)))),oe.series[0].data=e.map((e=>({name:a(e.name),value:e.value})))},ve=i(f),fe=async()=>{const e=[{value:13253,name:"analysis.monday"},{value:34235,name:"analysis.tuesday"},{value:26321,name:"analysis.wednesday"},{value:12340,name:"analysis.thursday"},{value:24643,name:"analysis.friday"},{value:1322,name:"analysis.saturday"},{value:1324,name:"analysis.sunday"}];_(ve,"xAxis.data",e.map((e=>a(e.name)))),_(ve,"series",[{name:a("analysis.activeQuantity"),data:e.map((e=>e.value)),type:"bar"}])};return(async()=>{await Promise.all([ce(),me(),ue(),ye(),ge(),fe()]),le.value=!1})(),(e,t)=>{const n=E,i=j,v=V,f=D,_=h,C=A,M=b,O=k,R=w,ce=W;return o(),r(p,null,[c("div",null,[d(C,{shadow:"never"},{default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[d(f,{gutter:20,justify:"space-between"},{default:m((()=>[d(n,{xl:12,lg:12,md:12,sm:24,xs:24},{default:m((()=>[c("div",G,[c("img",{src:s(ne),alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"},null,8,U),c("div",null,[c("div",z,u(s(a)("workplace.welcome"))+" "+u(s(ie))+" "+u(s(a)("workplace.happyDay")),1),c("div",H,u(s(a)("workplace.toady"))+"，20℃ - 32℃！ ",1)])])])),_:1}),d(n,{xl:12,lg:12,md:12,sm:24,xs:24},{default:m((()=>[c("div",I,[c("div",B,[c("div",F,u(s(a)("workplace.project")),1),d(i,{class:"text-20px","start-val":0,"end-val":s(re).project,duration:2600},null,8,["end-val"])]),d(v,{direction:"vertical"}),c("div",J,[c("div",K,u(s(a)("workplace.toDo")),1),d(i,{class:"text-20px","start-val":0,"end-val":s(re).todo,duration:2600},null,8,["end-val"])]),d(v,{direction:"vertical","border-style":"dashed"}),c("div",P,[c("div",Q,u(s(a)("workplace.access")),1),d(i,{class:"text-20px","start-val":0,"end-val":s(re).access,duration:2600},null,8,["end-val"])])])])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})]),d(f,{class:"mt-5px",gutter:20,justify:"space-between"},{default:m((()=>[d(n,{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-10px"},{default:m((()=>[d(C,{shadow:"never"},{header:m((()=>[c("div",T,[c("span",null,u(s(a)("workplace.project")),1),d(M,{type:"primary",underline:!1},{default:m((()=>[x(u(s(a)("action.more")),1)])),_:1})])])),default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[d(f,null,{default:m((()=>[(o(!0),r(p,null,y(s(de),((e,t)=>(o(),g(n,{key:`card-${t}`,xl:8,lg:8,md:8,sm:24,xs:24},{default:m((()=>[d(C,{shadow:"hover"},{default:m((()=>[c("div",Y,[d(O,{icon:e.icon,size:25,class:"mr-10px"},null,8,["icon"]),c("span",Z,u(e.name),1)]),c("div",q,u(s(a)(e.message)),1),c("div",L,[c("span",null,u(e.personal),1),c("span",null,u(s($)(e.time,"yyyy-MM-dd")),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),d(C,{shadow:"never",class:"mt-5px"},{default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[d(f,{gutter:20,justify:"space-between"},{default:m((()=>[d(n,{xl:10,lg:10,md:24,sm:24,xs:24},{default:m((()=>[d(C,{shadow:"hover",class:"mb-10px"},{default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[d(R,{options:s(oe),height:280},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),d(n,{xl:14,lg:14,md:24,sm:24,xs:24},{default:m((()=>[d(C,{shadow:"hover",class:"mb-10px"},{default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[d(R,{options:s(ve),height:280},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1}),d(n,{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-10px"},{default:m((()=>[d(C,{shadow:"never"},{header:m((()=>[c("div",N,[c("span",null,u(s(a)("workplace.shortcutOperation")),1)])])),default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[d(f,null,{default:m((()=>[(o(!0),r(p,null,y(s(xe),(e=>(o(),g(n,{key:`team-${e.name}`,span:8,class:"mb-10px"},{default:m((()=>[c("div",S,[d(O,{icon:e.icon,class:"mr-10px"},null,8,["icon"]),d(M,{type:"default",underline:!1,onClick:a=>s(l)(e.name)},{default:m((()=>[x(u(e.name),1)])),_:2},1032,["onClick"])])])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),d(C,{shadow:"never",class:"mt-10px"},{header:m((()=>[c("div",X,[c("span",null,u(s(a)("workplace.notice")),1),d(M,{type:"primary",underline:!1},{default:m((()=>[x(u(s(a)("action.more")),1)])),_:1})])])),default:m((()=>[d(_,{loading:s(le),animated:""},{default:m((()=>[(o(!0),r(p,null,y(s(pe),((e,t)=>(o(),r("div",{key:`dynamics-${t}`},[c("div",ee,[c("img",{src:s(ne),alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,8,ae),c("div",null,[c("div",te,[d(ce,{keys:e.keys.map((e=>s(a)(e)))},{default:m((()=>[x(u(e.type)+" : "+u(e.title),1)])),_:2},1032,["keys"])]),c("div",se,u(s($)(e.date,"yyyy-MM-dd")),1)])]),d(v)])))),128))])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64)}}});export{ne as default};