import{a as F,i as C,H as m,J as B,B as I,u as e,o as L,f as h,e as a,w as s,bv as S,V as u,k as c,af as f,F as w,h as V}from"./index-185fe65d.js";import{F as d}from"./index-273d53fa.js";import"./index-e80a262d.js";import{C as z}from"./index-4d2a3b0b.js";import{u as R,a as E,b as N,L as D,_ as M}from"./LoginFormTitle.vue_vue_type_script_setup_true_lang-1bde2059.js";const j=F({__name:"MobileForm",setup(U){const n=d.Item,{t}=C(),{handleBackLogin:p,getLoginState:g}=R(),{getFormRules:_}=E(),i=m(),k=m(!1),o=B({mobile:"",sms:""}),{validForm:b}=N(i),x=I(()=>e(g)===D.MOBILE);async function v(){await b()}return(y,l)=>e(x)?(L(),h(w,{key:0},[a(M,{class:"enter-x"}),a(e(d),{class:"p-4 enter-x",model:o,rules:e(_),ref_key:"formRef",ref:i},{default:s(()=>[a(e(n),{name:"mobile",class:"enter-x"},{default:s(()=>[a(e(S),{size:"large",value:o.mobile,"onUpdate:value":l[0]||(l[0]=r=>o.mobile=r),placeholder:e(t)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),a(e(n),{name:"sms",class:"enter-x"},{default:s(()=>[a(e(z),{size:"large",class:"fix-auto-fill",value:o.sms,"onUpdate:value":l[1]||(l[1]=r=>o.sms=r),placeholder:e(t)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),a(e(n),{class:"enter-x"},{default:s(()=>[a(e(u),{type:"primary",size:"large",block:"",onClick:v,loading:k.value},{default:s(()=>[c(f(e(t)("sys.login.loginButton")),1)]),_:1},8,["loading"]),a(e(u),{size:"large",block:"",class:"mt-4",onClick:e(p)},{default:s(()=>[c(f(e(t)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):V("",!0)}});export{j as _};
