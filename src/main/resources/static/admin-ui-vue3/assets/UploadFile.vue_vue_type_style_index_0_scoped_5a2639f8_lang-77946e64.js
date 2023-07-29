import{d as G,p as s,c9 as ie,r as p,c7 as J,c8 as K,af as se,o as j,c as Q,i as v,w as z,a as g,x as A,V as oe,g as u,al as W,q as re,a1 as de,bT as T,b7 as X,aN as ue,_ as Y,$ as ne,a0 as pe,cc as ce,j as k,t as ee,H as me,__tla as fe}from"./index-0f589822.js";import{E as ve,__tla as ge}from"./el-image-viewer-863e3dd0.js";import{u as ae,__tla as ye}from"./useMessage-45ab706e.js";let le,te,he=Promise.all([(()=>{try{return fe}catch{}})(),(()=>{try{return ge}catch{}})(),(()=>{try{return ye}catch{}})()]).then(async()=>{let S,B,I,q,L,M,E,F,H,N,R,D,P,Z;S=a=>(ne("data-v-56b4301a"),a=a(),pe(),a),B={class:"upload-box"},I={class:"upload-empty"},q=["src"],L=["onClick"],M=S(()=>u("span",null,"\u67E5\u770B",-1)),E=["onClick"],F=S(()=>u("span",null,"\u5220\u9664",-1)),H={class:"el-upload__tip"},te=G({name:"UploadImgs",__name:"UploadImgs",props:{modelValue:{type:Array,required:!0},updateUrl:s.string.def("http://localhost:48080/admin-api/infra/file/upload"),drag:s.bool.def(!0),disabled:s.bool.def(!1),limit:s.number.def(5),fileSize:s.number.def(5),fileType:s.array.def(["image/jpeg","image/png","image/gif"]),height:s.string.def("150px"),width:s.string.def("150px"),borderradius:s.string.def("8px")},emits:["update:modelValue"],setup(a,{emit:h}){const t=a;ie(o=>({"790cdb14":a.borderradius,"6e1851a0":a.width,"3bb814fd":a.height}));const c=ae(),_=p({Authorization:"Bearer "+J(),"tenant-id":K()}),n=p([]);se(()=>t.modelValue,o=>{o&&(n.value=o)},{deep:!0,immediate:!0});const y=o=>{const d=o.size/1024/1024<t.fileSize,m=t.fileType;return m.includes(o.type)||T({title:"\u6E29\u99A8\u63D0\u793A",message:"\u4E0A\u4F20\u56FE\u7247\u4E0D\u7B26\u5408\u6240\u9700\u7684\u683C\u5F0F\uFF01",type:"warning"}),d||T({title:"\u6E29\u99A8\u63D0\u793A",message:`\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ${t.fileSize}M\uFF01`,type:"warning"}),m.includes(o.type)&&d},r=(o,d)=>{o&&(d.url=o.data,h("update:modelValue",n.value),c.success("\u4E0A\u4F20\u6210\u529F"))},b=()=>{T({title:"\u6E29\u99A8\u63D0\u793A",message:"\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01",type:"error"})},$=()=>{T({title:"\u6E29\u99A8\u63D0\u793A",message:`\u5F53\u524D\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 ${t.limit} \u5F20\u56FE\u7247\uFF0C\u8BF7\u79FB\u9664\u540E\u4E0A\u4F20\uFF01`,type:"warning"})},U=p(""),x=p(!1);return(o,d)=>{const m=Y,C=X,V=ve;return j(),Q("div",B,[v(C,{"file-list":g(n),"onUpdate:fileList":d[1]||(d[1]=e=>A(n)?n.value=e:null),accept:a.fileType.join(","),action:a.updateUrl,"before-upload":y,class:oe(["upload",a.drag?"no-border":""]),drag:a.drag,headers:g(_),limit:a.limit,multiple:!0,"on-error":b,"on-exceed":$,"on-success":r,"list-type":"picture-card"},{file:z(({file:e})=>[u("img",{src:e.url,class:"upload-image"},null,8,q),u("div",{class:"upload-handle",onClick:d[0]||(d[0]=ue(()=>{},["stop"]))},[u("div",{class:"handle-icon",onClick:l=>{return i=e,U.value=i.url,void(x.value=!0);var i}},[v(m,{icon:"ep:zoom-in"}),M],8,L),u("div",{class:"handle-icon",onClick:l=>{return i=e,n.value=n.value.filter(f=>f.url!==i.url||f.name!==i.name),void h("update:modelValue",n.value);var i}},[v(m,{icon:"ep:delete"}),F],8,E)])]),default:z(()=>[u("div",I,[W(o.$slots,"empty",{},()=>[v(m,{icon:"ep:plus"})],!0)])]),_:3},8,["file-list","accept","action","class","drag","headers","limit"]),u("div",H,[W(o.$slots,"tip",{},void 0,!0)]),g(x)?(j(),re(V,{key:0,"url-list":[g(U)],onClose:d[2]||(d[2]=e=>x.value=!1)},null,8,["url-list"])):de("",!0)])}}}),N={class:"upload-file"},R={style:{"font-size":"8px"}},D={style:{color:"#f56c6c"}},P={style:{"font-size":"8px"}},Z={style:{color:"#f56c6c"}},le=G({name:"UploadFile",__name:"UploadFile",props:{modelValue:{type:Array,required:!0},title:s.string.def("\u6587\u4EF6\u4E0A\u4F20"),updateUrl:s.string.def("http://localhost:48080/admin-api/infra/file/upload"),fileType:s.array.def(["doc","xls","ppt","txt","pdf"]),fileSize:s.number.def(5),limit:s.number.def(5),autoUpload:s.bool.def(!0),drag:s.bool.def(!1),isShowTip:s.bool.def(!0)},emits:["update:modelValue"],setup(a,{emit:h}){const t=a,c=ae(),_=p(t.modelValue),n=p(),y=p([]),r=p(t.modelValue),b=p(0),$=p({Authorization:"Bearer "+J(),"tenant-id":K()}),U=e=>{if(r.value.length>=t.limit)return c.error(`\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7${t.limit}\u4E2A!`),!1;let l="";e.name.lastIndexOf(".")>-1&&(l=e.name.slice(e.name.lastIndexOf(".")+1));const i=t.fileType.some(w=>e.type.indexOf(w)>-1||!!(l&&l.indexOf(w)>-1)),f=e.size<1024*t.fileSize*1024;return i?f?(c.success("\u6B63\u5728\u4E0A\u4F20\u6587\u4EF6\uFF0C\u8BF7\u7A0D\u5019..."),void b.value++):(c.error(`\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${t.fileSize}MB!`),!1):(c.error(`\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E, \u8BF7\u4E0A\u4F20${t.fileType.join("/")}\u683C\u5F0F!`),!1)},x=e=>{c.success("\u4E0A\u4F20\u6210\u529F");const l=r.value;l.pop(),r.value=l,y.value.push({name:e.data,url:e.data}),y.value.length==b.value&&(r.value=r.value.concat(y.value),y.value=[],b.value=0,h("update:modelValue",V(r.value)))},o=()=>{c.error(`\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7${t.limit}\u4E2A!`)},d=()=>{c.error("\u5BFC\u5165\u6570\u636E\u5931\u8D25\uFF0C\u8BF7\u60A8\u91CD\u65B0\u4E0A\u4F20\uFF01")},m=e=>{const l=r.value.map(i=>i.name).indexOf(e.name);l>-1&&(r.value.splice(l,1),h("update:modelValue",V(r.value)))},C=e=>{},V=(e,l)=>{let i="";l=l||",";for(let f in e)i+=e[f].url+l;return i!=""?i.substr(0,i.length-1):""};return(e,l)=>{const i=Y,f=me,w=X;return j(),Q("div",N,[v(w,{ref_key:"uploadRef",ref:n,multiple:t.limit>1,name:"file",modelValue:g(_),"onUpdate:modelValue":l[0]||(l[0]=O=>A(_)?_.value=O:null),"file-list":g(r),"onUpdate:fileList":l[1]||(l[1]=O=>A(r)?r.value=O:null),"show-file-list":!0,"auto-upload":a.autoUpload,action:a.updateUrl,headers:g($),limit:t.limit,drag:a.drag,"before-upload":U,"on-exceed":o,"on-success":x,"on-error":d,"on-remove":m,"on-preview":C,class:"upload-file-uploader"},ce({default:z(()=>[v(f,{type:"primary"},{default:z(()=>[v(i,{icon:"ep:upload-filled"}),k("\u9009\u53D6\u6587\u4EF6")]),_:1})]),_:2},[a.isShowTip?{name:"tip",fn:z(()=>[u("div",R,[k(" \u5927\u5C0F\u4E0D\u8D85\u8FC7 "),u("b",D,ee(a.fileSize)+"MB",1)]),u("div",P,[k(" \u683C\u5F0F\u4E3A "),u("b",Z,ee(a.fileType.join("/")),1),k(" \u7684\u6587\u4EF6 ")])]),key:"0"}:void 0]),1032,["multiple","modelValue","file-list","auto-upload","action","headers","limit","drag"])])}}})});export{le as _,he as __tla,te as a};