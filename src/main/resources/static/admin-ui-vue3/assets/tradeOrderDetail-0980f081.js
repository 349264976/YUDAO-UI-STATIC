import{_ as la,__tla as ta}from"./ContentWrap.vue_vue_type_script_setup_true_lang-0f1e3633.js";import{d as ra,N as sa,f as ua,r as x,A as oa,O as _a,o as _,q as p,w as a,i as e,j as l,t as u,a as t,B as U,a1 as F,c as i,k as b,F as m,H as da,J as ia,K as pa,E as na,n as ma,a2 as Y,g as v,a3 as fa,$ as ya,a0 as ca,a4 as ba,__tla as va}from"./index-0f589822.js";import{E as ha,__tla as ka}from"./el-image-9c2dd802.js";import{__tla as ga}from"./el-image-viewer-863e3dd0.js";import{E as xa,a as wa,__tla as Ea}from"./el-timeline-item-75174dbf.js";import{E as Pa,a as Aa,__tla as Fa}from"./el-descriptions-item-41445509.js";import{E as Ia,__tla as Na}from"./el-link-932c772d.js";import{_ as Ka,__tla as Ra}from"./DictTag.vue_vue_type_script_lang-9c2c480d.js";import{D as w,__tla as Ta}from"./dict-f9a1a53b.js";import{g as za,__tla as Da}from"./index-ff85fbb6.js";import{u as Ca,__tla as Sa}from"./useMessage-45ab706e.js";import{_ as La}from"./_plugin-vue_export-helper-1b428a4d.js";import{__tla as Oa}from"./el-card-bbdd700f.js";import"./color-a8b4eb58.js";let $,qa=Promise.all([(()=>{try{return ta}catch{}})(),(()=>{try{return va}catch{}})(),(()=>{try{return ka}catch{}})(),(()=>{try{return ga}catch{}})(),(()=>{try{return Ea}catch{}})(),(()=>{try{return Fa}catch{}})(),(()=>{try{return Na}catch{}})(),(()=>{try{return Ra}catch{}})(),(()=>{try{return Ta}catch{}})(),(()=>{try{return Da}catch{}})(),(()=>{try{return Sa}catch{}})(),(()=>{try{return Oa}catch{}})()]).then(async()=>{let f,I,N,K,R,T,z,D;f=E=>(ya("data-v-ff9a3f24"),E=E(),ca(),E),I=f(()=>v("span",{style:{color:"red"}},"\u63D0\u9192: ",-1)),N=f(()=>v("br",null,null,-1)),K=f(()=>v("br",null,null,-1)),R=f(()=>v("span",{style:{color:"red"}},"\u5546\u54C1\u4F18\u60E0: ",-1)),T=f(()=>v("span",{style:{color:"red"}},"\u8BA2\u5355\u4F18\u60E0: ",-1)),z=f(()=>v("span",{style:{color:"red"}},"\u79EF\u5206\u62B5\u6263: ",-1)),D={style:{border:"1px dashed"}},$=La(ra({__name:"tradeOrderDetail",setup(E){const C=Ca(),{query:H}=sa(),W=ua({id:H.id}),B=x(!1),S=x(!1),s=x({items:[],user:{}}),J=x([{title:"\u7269\u6D41\u4FE1\u606F",key:"expressInfo",children:[{label:"\u53D1\u8D27\u65F6\u95F4: ",valueKey:"fhsj"},{label:"\u7269\u6D41\u516C\u53F8: ",valueKey:"wlgs"},{label:"\u8FD0\u5355\u53F7: ",valueKey:"ydh"},{label:"\u7269\u6D41\u72B6\u6001: ",valueKey:"wlzt",childProps:{span:3}},{label:"\u7269\u6D41\u8BE6\u60C5: ",valueKey:"wlxq"}]},{title:"\u8BA2\u5355\u64CD\u4F5C\u65E5\u5FD7",key:"orderLog"}]),L=x({expressInfo:{label:"\u5305\u88F91",name:"bg1",fhsj:"2022-11-03 16:50:45",wlgs:"\u6781\u5154",ydh:"2132123",wlzt:"\u4E0D\u652F\u6301\u6B64\u5FEB\u9012\u516C\u53F8",wlxq:[{content:"\u6B63\u5728\u6D3E\u9001\u9014\u4E2D,\u8BF7\u60A8\u51C6\u5907\u7B7E\u6536(\u6D3E\u4EF6\u4EBA:\u738B\u6D9B,\u7535\u8BDD:13854563814)",timestamp:"2018-04-15 15:00:16"},{content:"\u5FEB\u4EF6\u5230\u8FBE \u3010\u70DF\u53F0\u9F99\u53E3\u4E1C\u6C5F\u6751\u59D4\u8425\u4E1A\u70B9\u3011",timestamp:"2018-04-13 14:54:19"},{content:"\u5FEB\u4EF6\u5DF2\u53D1\u8F66",timestamp:"2018-04-11 12:55:52"},{content:"\u5FEB\u4EF6\u5DF2\u53D1\u8F66",timestamp:"2018-04-11 12:55:52"},{content:"\u5FEB\u4EF6\u5DF2\u53D1\u8F66",timestamp:"2018-04-11 12:55:52"}]},orderLog:[{content:"\u4E70\u5BB6\u3010\u4E4C\u9E26\u3011\u5173\u95ED\u4E86\u8BA2\u5355",timestamp:"2018-04-15 15:00:16"},{content:"\u4E70\u5BB6\u3010\u4E4C\u9E26\u3011\u4E0B\u5355\u4E86",timestamp:"2018-04-15 15:00:16"}],goodsInfo:[]});oa(async()=>{await(async()=>{B.value=!0,S.value=!0;try{const y=await za(W.id);s.value=y}catch{C.error("\u83B7\u53D6\u8BE6\u60C5\u6570\u636E\u5931\u8D25")}finally{S.value=!1}})()});const G=()=>{C.success("\u590D\u5236\u6210\u529F")};return(y,Ma)=>{const r=Pa,k=Ka,Q=Ia,c=Aa,n=da,V=ba,g=ia,X=pa,P=na,O=ma,q=xa,M=wa,Z=ha,aa=la,j=_a("clipboard");return _(),p(aa,null,{default:a(()=>[e(c,{title:"\u8BA2\u5355\u4FE1\u606F"},{default:a(()=>[e(r,{label:"\u8BA2\u5355\u53F7: "},{default:a(()=>[l(u(t(s).no),1)]),_:1}),e(r,{label:"\u914D\u9001\u65B9\u5F0F: "},{default:a(()=>[l("\u7269\u6D41\u914D\u9001")]),_:1}),e(r,{label:"\u8425\u9500\u6D3B\u52A8: "},{default:a(()=>[l("\u7269\u6D41\u914D\u9001")]),_:1}),e(r,{label:"\u8BA2\u5355\u7C7B\u578B: "},{default:a(()=>[e(k,{type:t(w).TRADE_ORDER_TYPE,value:t(s).type},null,8,["type","value"])]),_:1}),e(r,{label:"\u6536\u8D27\u4EBA: "},{default:a(()=>[l(u(t(s).receiverName),1)]),_:1}),e(r,{label:"\u4E70\u5BB6\u7559\u8A00: "},{default:a(()=>[l(u(t(s).userRemark),1)]),_:1}),e(r,{label:"\u8BA2\u5355\u6765\u6E90: "},{default:a(()=>[e(k,{type:t(w).TERMINAL,value:t(s).terminal},null,8,["type","value"])]),_:1}),e(r,{label:"\u8054\u7CFB\u7535\u8BDD: "},{default:a(()=>[l(u(t(s).receiverMobile),1)]),_:1}),e(r,{label:"\u5546\u5BB6\u5907\u6CE8: "},{default:a(()=>[l(u(t(s).remark),1)]),_:1}),e(r,{label:"\u652F\u4ED8\u5355\u53F7: "},{default:a(()=>[l(u(t(s).payOrderId),1)]),_:1}),e(r,{label:"\u4ED8\u6B3E\u65B9\u5F0F: "},{default:a(()=>[e(k,{type:t(w).PAY_CHANNEL_CODE_TYPE,value:t(s).payChannelCode},null,8,["type","value"])]),_:1}),e(r,{label:"\u6536\u8D27\u5730\u5740: "},{default:a(()=>[l(u(t(s).receiverAreaName)+" "+u(t(s).receiverDetailAddress)+" ",1),U(e(Q,{icon:"ep:document-copy",type:"primary"},null,512),[[j,t(s).receiverAreaName+" "+t(s).receiverDetailAddress,"copy"],[j,G,"success"]])]),_:1})]),_:1}),e(c,{title:"\u8BA2\u5355\u72B6\u6001",column:1},{default:a(()=>[e(r,{label:"\u8BA2\u5355\u72B6\u6001: "},{default:a(()=>[t(s).status!==""?(_(),p(k,{key:0,type:t(w).TRADE_ORDER_STATUS,value:t(s).status},null,8,["type","value"])):F("",!0)]),_:1}),e(r,{"label-class-name":"no-colon"},{default:a(()=>[e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u8C03\u6574\u4EF7\u683C")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u5907\u6CE8")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u53D1\u8D27")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u5173\u95ED\u8BA2\u5355")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u4FEE\u6539\u5730\u5740")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u6253\u5370\u7535\u5B50\u9762\u5355")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u6253\u5370\u53D1\u8D27\u5355")]),_:1}),e(n,{type:"primary",size:"small"},{default:a(()=>[l("\u786E\u8BA4\u6536\u8D27")]),_:1})]),_:1}),e(r,null,{label:a(()=>[I]),default:a(()=>[l(" \u4E70\u5BB6\u4ED8\u6B3E\u6210\u529F\u540E\uFF0C\u8D27\u6B3E\u5C06\u76F4\u63A5\u8FDB\u5165\u60A8\u7684\u5546\u6237\u53F7\uFF08\u5FAE\u4FE1\u3001\u652F\u4ED8\u5B9D\uFF09"),N,l(" \u8BF7\u53CA\u65F6\u5173\u6CE8\u4F60\u53D1\u51FA\u7684\u5305\u88F9\u72B6\u6001\uFF0C\u786E\u4FDD\u53EF\u4EE5\u914D\u9001\u81F3\u4E70\u5BB6\u624B\u4E2D "),K,l(" \u5982\u679C\u4E70\u5BB6\u8868\u793A\u6CA1\u6536\u5230\u8D27\u6216\u8D27\u7269\u6709\u95EE\u9898\uFF0C\u8BF7\u53CA\u65F6\u8054\u7CFB\u4E70\u5BB6\u5904\u7406\uFF0C\u53CB\u597D\u534F\u5546 ")]),_:1})]),_:1}),e(c,{title:"\u5546\u54C1\u4FE1\u606F"},{default:a(()=>[e(r,{labelClassName:"no-colon"},{default:a(()=>[e(O,{gutter:20},{default:a(()=>[e(P,{span:15},{default:a(()=>[e(X,{data:t(s).items,border:""},{default:a(()=>[e(g,{prop:"spuName",label:"\u5546\u54C1",width:"auto"},{default:a(({row:o})=>[l(u(o.spuName)+" ",1),(_(!0),i(m,null,b(o.properties,d=>(_(),p(V,{size:"medium",key:d.propertyId},{default:a(()=>[l(u(d.propertyName)+": "+u(d.valueName),1)]),_:2},1024))),128))]),_:1}),e(g,{prop:"price",label:"\u5546\u54C1\u539F\u4EF7(\u5143)",width:"150"},{default:a(({row:o})=>[l(" \uFFE5"+u((o.price/100).toFixed(2)),1)]),_:1}),e(g,{prop:"count",label:"\u6570\u91CF",width:"100"}),e(g,{prop:"payPrice",label:"\u5408\u8BA1(\u5143)",width:"150"},{default:a(({row:o})=>[l(" \uFFE5"+u((o.payPrice/100).toFixed(2)),1)]),_:1}),e(g,{prop:"afterSaleStatus",label:"\u552E\u540E\u72B6\u6001",width:"auto"},{default:a(({row:o})=>[e(k,{type:t(w).TRADE_ORDER_ITEM_AFTER_SALE_STATUS,value:o.afterSaleStatus},null,8,["type","value"])]),_:1})]),_:1},8,["data"])]),_:1}),e(P,{span:10})]),_:1})]),_:1})]),_:1}),e(c,{column:"6"},{default:a(()=>[e(r,{label:"\u5546\u54C1\u603B\u989D: "},{default:a(()=>[l(" \uFFE5"+u(parseFloat(t(s).totalPrice/100).toFixed(2)),1)]),_:1}),e(r,{label:"\u8FD0\u8D39\u91D1\u989D: "},{default:a(()=>[l(" \uFFE5"+u(parseFloat(t(s).deliveryPrice/100).toFixed(2)),1)]),_:1}),e(r,{label:"\u8BA2\u5355\u8C03\u4EF7: "},{default:a(()=>[l(" \uFFE5"+u(parseFloat(t(s).adjustPrice/100).toFixed(2)),1)]),_:1}),e(r,null,{label:a(()=>[R]),default:a(()=>[l(" \uFFE5"+u(parseFloat((t(s).totalPrice-t(s).totalPrice)/100).toFixed(2)),1)]),_:1}),e(r,null,{label:a(()=>[T]),default:a(()=>[l(" \uFFE5"+u(parseFloat(t(s).discountPrice/100).toFixed(2)),1)]),_:1}),e(r,null,{label:a(()=>[z]),default:a(()=>[l(" \uFFE5"+u(parseFloat(t(s).pointPrice/100).toFixed(2)),1)]),_:1}),(_(),i(m,null,b(5,o=>e(r,{"label-class-name":"no-colon",key:o})),64)),e(r,{label:"\u5E94\u4ED8\u91D1\u989D: "},{default:a(()=>[l(" \uFFE5"+u((t(s).payPrice/100).toFixed(2)),1)]),_:1})]),_:1}),(_(!0),i(m,null,b(t(J),o=>(_(),i("div",{key:o.title},[e(c,Y(o.groupProps,{title:o.title}),{default:a(()=>[o.key==="orderLog"?(_(),p(r,{key:0,labelClassName:"no-colon"},{default:a(()=>[e(M,null,{default:a(()=>[(_(!0),i(m,null,b(t(L)[o.key],d=>(_(),p(q,{key:d.timestamp,timestamp:d.timestamp},{default:a(()=>[l(u(d.content),1)]),_:2},1032,["timestamp"]))),128))]),_:2},1024)]),_:2},1024)):F("",!0),o.key==="expressInfo"?(_(),p(r,{key:1,labelClassName:"no-colon"},{default:a(()=>[U(v("div",D,[e(c,{class:"m-5"},{default:a(()=>[(_(!0),i(m,null,b(o.children,(d,ea)=>(_(),p(r,Y(d.childProps,{key:`pkgChild_${ea}`,label:d.label}),{default:a(()=>[d.valueKey==="goodsList"&&y.pkgInfo[d.valueKey]?(_(!0),i(m,{key:0},b(y.pkgInfo[d.valueKey],(h,A)=>(_(),i("div",{key:`goodInfo_${A}`,style:{display:"flex"}},[e(Z,{style:{width:"100px",height:"100px",flex:"none"},src:h.imgUrl},null,8,["src"]),e(c,{column:1},{default:a(()=>[e(r,{labelClassName:"no-colon"},{default:a(()=>[l(u(h.name),1)]),_:2},1024),e(r,{label:"\u6570\u91CF"},{default:a(()=>[l(u(h.count),1)]),_:2},1024)]),_:2},1024)]))),128)):d.valueKey==="wlxq"?(_(),p(O,{key:1,gutter:10},{default:a(()=>[e(P,{span:6,offset:1},{default:a(()=>[e(M,null,{default:a(()=>[(_(!0),i(m,null,b(y.pkgInfo[d.valueKey],(h,A)=>(_(),p(q,{key:A,timestamp:h.timestamp},{default:a(()=>[l(u(h.content),1)]),_:2},1032,["timestamp"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)):(_(),i(m,{key:2},[l(u(y.pkgInfo[d.valueKey]),1)],64))]),_:2},1040,["label"]))),128))]),_:2},1024)],512),[[fa,(y.pkgInfo=t(L)[o.key])!==null]])]),_:2},1024)):F("",!0)]),_:2},1040,["title"])]))),128))]),_:1})}}}),[["__scopeId","data-v-ff9a3f24"]])});export{qa as __tla,$ as default};