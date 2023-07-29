import{d as C,r as c,f as S,o as V,q as b,w as u,i as o,j as k,a,B as j,x as B,l as D,T as H,D as L,I as R,H as T,L as z,__tla as A}from"./index-0f589822.js";import{_ as E,__tla as G}from"./Dialog.vue_vue_type_style_index_0_lang-2d188c85.js";import{b as J,c as K,u as M,__tla as N}from"./property-e9306a35.js";import{u as O,__tla as Q}from"./useMessage-45ab706e.js";let g,W=Promise.all([(()=>{try{return A}catch{}})(),(()=>{try{return G}catch{}})(),(()=>{try{return N}catch{}})(),(()=>{try{return Q}catch{}})()]).then(async()=>{g=C({name:"ProductPropertyValueForm",__name:"ValueForm",emits:["success"],setup(X,{expose:h,emit:w}){const{t:n}=D(),_=O(),s=c(!1),y=c(""),d=c(!1),f=c(""),l=c({id:void 0,propertyId:void 0,name:"",remark:""}),I=S({propertyId:[{required:!0,message:"\u5C5E\u6027\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],name:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),i=c();h({open:async(r,e,m)=>{if(s.value=!0,y.value=n("action."+r),f.value=r,U(),l.value.propertyId=e,m){d.value=!0;try{l.value=await J(m)}finally{d.value=!1}}}});const x=async()=>{if(i&&await i.value.validate()){d.value=!0;try{const r=l.value;f.value==="create"?(await K(r),_.success(n("common.createSuccess"))):(await M(r),_.success(n("common.updateSuccess"))),s.value=!1,w("success")}finally{d.value=!1}}},U=()=>{var r;l.value={id:void 0,propertyId:void 0,name:"",remark:""},(r=i.value)==null||r.resetFields()};return(r,e)=>{const m=H,p=L,q=R,v=T,F=E,P=z;return V(),b(F,{modelValue:a(s),"onUpdate:modelValue":e[4]||(e[4]=t=>B(s)?s.value=t:null),title:a(y)},{footer:u(()=>[o(v,{disabled:a(d),type:"primary",onClick:x},{default:u(()=>[k("\u786E \u5B9A")]),_:1},8,["disabled"]),o(v,{onClick:e[3]||(e[3]=t=>s.value=!1)},{default:u(()=>[k("\u53D6 \u6D88")]),_:1})]),default:u(()=>[j((V(),b(q,{ref_key:"formRef",ref:i,model:a(l),rules:a(I),"label-width":"80px"},{default:u(()=>[o(p,{label:"\u5C5E\u6027\u7F16\u53F7",prop:"category"},{default:u(()=>[o(m,{modelValue:a(l).propertyId,"onUpdate:modelValue":e[0]||(e[0]=t=>a(l).propertyId=t),disabled:""},null,8,["modelValue"])]),_:1}),o(p,{label:"\u540D\u79F0",prop:"name"},{default:u(()=>[o(m,{modelValue:a(l).name,"onUpdate:modelValue":e[1]||(e[1]=t=>a(l).name=t),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(p,{label:"\u5907\u6CE8",prop:"remark"},{default:u(()=>[o(m,{modelValue:a(l).remark,"onUpdate:modelValue":e[2]||(e[2]=t=>a(l).remark=t),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[P,a(d)]])]),_:1},8,["modelValue","title"])}}})});export{g as _,W as __tla};