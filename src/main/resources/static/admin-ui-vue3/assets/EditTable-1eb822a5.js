import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-63555901.js";import{l as t}from"./base-085523fd.js";import{E as o}from"./el-card-d8ab0074.js";import{p as s}from"./propTypes-5cfdbdab.js";import{u as i,c as r}from"./aria-8fadfbe9.js";import{d as l,r as a,aO as n,x as p,I as u,o as m,i as d,e as c,j as f,n as _,s as j,f as v,l as g,w as x,k as b,t as y,a as h,M as w}from"./runtime-core.esm-bundler-ccc21fcd.js";import{E as k}from"./el-button-6b012e5e.js";import{u as I,_ as C}from"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import{u as B}from"./useI18n-56d4bc42.js";import{_ as R}from"./XButton-39866472.js";/* empty css                    */import{_ as $}from"./BasicInfoForm.vue_vue_type_script_setup_true_lang-d0a5113a.js";import{_ as F}from"./CloumInfoForm.vue_vue_type_script_setup_true_lang-93b824e8.js";/* empty css                   */import"./XModal.vue_vue_type_script_setup_true_lang-c47b87cf.js";import"./el-form-item-8022b942.js";import"./el-notification-c7d5f4ea.js";/* empty css               *//* empty css                  *//* empty css                     *//* empty css                  */import{g as S,u as z}from"./index-6f787488.js";import"./index-a7ef0ded.js";import{u as E}from"./useMessage-5e709b20.js";import"./XTextButton.vue_vue_type_style_index_0_scoped_0fcea4df_lang-41ab76b9.js";import"./el-tree-39cab679.js";import"./el-checkbox-cd7dd8c1.js";import{u as D,b as N}from"./vue-router-0864a153.js";import{a as V,E as M}from"./index-cb1b634a.js";import"./el-tooltip-4ed993c7.js";import"./index-7486e100.js";import"./focus-trap-f53979c5.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./index-4665dced.js";import"./index-7a379d2e.js";import"./index-c2caee16.js";import"./useCache-d48cf6c5.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./Form-a0e23abc.js";import"./Form.vue_vue_type_style_index_0_scoped_f983cb9f_lang-54d674bd.js";import"./el-row-ad412a39.js";import"./el-col-613bea3c.js";import"./is-a7957d81.js";import"./el-radio-group-d1c0e064.js";import"./el-input-number-4fe7018b.js";import"./el-tree-select-6f481715.js";import"./index-168f367d.js";import"./index-be3181b1.js";import"./index-795de047.js";import"./strings-777507ad.js";import"./isEqual-6e1d5dd6.js";import"./cloneDeep-8298b498.js";import"./debounce-eb6bb100.js";import"./index-9d88d8a4.js";import"./el-switch-4b318cc1.js";/* empty css                   */import"./InputPassword-d0077663.js";import"./el-message-7ddf9388.js";import"./auth-2fa258a0.js";import"./el-image-viewer-f62c5b85.js";import"./el-progress-64245232.js";import"./index-cf52a0ab.js";import"./_flatRest-ac7abae6.js";import"./dayjs.min-65a6b1e4.js";import"./isArrayLikeObject-26c677c4.js";import"./index-653de86a.js";/* empty css                        *//* empty css                                                                   */import"./useForm-85cf424f.js";import"./dict-3e42505d.js";import"./index-279b6f7b.js";import"./tree-150ed6f6.js";import"./formRules-a3380b28.js";import"./dict.type-de89e3ad.js";import"./index-183fdc84.js";const O=c("div",null,"sticky",-1),T=l({__name:"Sticky",props:{offset:s.number.def(0),zIndex:s.number.def(999),className:s.string.def(""),position:{type:String,validator:function(e){return-1!==["top","bottom"].indexOf(e)},default:"top"}},setup(e){const o=e,s=a("auto"),l=a("auto"),g=a(!1),x=n(),b=n(),{height:y}=i();p((()=>{var e;l.value=(null==(e=x.value)?void 0:e.getBoundingClientRect().height)+"px",b.value=w(x.value,!0),r(b,"scroll",k),r("resize",I),k()})),u((()=>{k()}));const h=(e,o)=>{if(!t)return!1;const s=((e,o)=>{var s;if(!t||!e||!o)return"";o.replace(/-(\w)/g,((e,t)=>t?t.toUpperCase():""));try{const t=e.style[o];if(t)return t;const i=null==(s=document.defaultView)?void 0:s.getComputedStyle(e,"");return i?i[o]:""}catch{return e.style[o]}})(e,{undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)]);return["scroll","auto","overlay"].some((e=>s.includes(e)))},w=(e,o)=>{if(!t)return;let s=e;for(;s;){if([window,document,document.documentElement].includes(s))return window;if(h(s,o))return s;s=s.parentNode}return s},k=()=>{var e,t;if(s.value=x.value.getBoundingClientRect().width+"px","top"===o.position){const t=null==(e=x.value)?void 0:e.getBoundingClientRect().top;if(void 0!==t&&t<o.offset)return void C();B()}else{const e=null==(t=x.value)?void 0:t.getBoundingClientRect().bottom;if(void 0!==e&&e>y.value-o.offset)return void C();B()}},I=()=>{g.value&&x.value&&(s.value=x.value.getBoundingClientRect().width+"px")},C=()=>{g.value||(g.value=!0)},B=()=>{g.value&&(s.value="auto",g.value=!1)};return(t,o)=>(m(),d("div",{style:j({height:v(l),zIndex:e.zIndex}),ref_key:"refSticky",ref:x},[c("div",{class:_(e.className),style:j({top:"top"===e.position?e.offset+"px":"",bottom:"top"!==e.position?e.offset+"px":"",zIndex:e.zIndex,position:v(g)?"fixed":"static",width:v(s),height:v(l)})},[f(t.$slots,"default",{},(()=>[O]))],6)],4))}}),W={class:"text-16px font-700"},X={style:{padding:"var(--app-content-padding)"}},q=l({__name:"ContentDetailWrap",props:{title:s.string.def(""),message:s.string.def("")},emits:["back"],setup(e,{emit:t}){const{t:s}=B(),{getPrefixCls:i}=I(),r=i("content-detail-wrap"),l=a(85),n=a();return p((()=>{l.value=n.value.getBoundingClientRect().top})),(i,a)=>{const p=C,u=k,j=T,h=o;return m(),d("div",{class:_([`${v(r)}-container`]),ref_key:"contentDetailWrap",ref:n},[g(j,{offset:v(l)},{default:x((()=>[c("div",{class:_([`${v(r)}-header`,"flex border-bottom-1 h-50px items-center text-center pr-10px"])},[c("div",{class:_([`${v(r)}-header__back`,"flex pl-10px pr-10px "])},[g(u,{onClick:a[0]||(a[0]=e=>t("back"))},{default:x((()=>[g(p,{icon:"ep:arrow-left",class:"mr-5px"}),b(" "+y(v(s)("common.back")),1)])),_:1})],2),c("div",{class:_([`${v(r)}-header__title`,"flex flex-1  justify-center"])},[f(i.$slots,"title",{},(()=>[c("label",W,y(e.title),1)]))],2),c("div",{class:_([`${v(r)}-header__right`,"flex  pl-10px pr-10px"])},[f(i.$slots,"right")],2)],2)])),_:3},8,["offset"]),c("div",X,[g(h,{class:_([`${v(r)}-body`,"mb-20px"]),shadow:"never"},{default:x((()=>[c("div",null,[f(i.$slots,"default")])])),_:3},8,["class"])])],2)}}}),P=l({__name:"EditTable",setup(t){const{t:o}=B(),s=E(),{push:i}=D(),{query:r}=N(),l=a(!1),n=a("代码生成"),u=a("basicInfo"),d=a(null),c=a(),f=a([]),_=a();return p((()=>{(async()=>{const e=r.id;if(e){const t=await S(e);n.value="修改[ "+t.table.tableName+" ]生成配置",c.value=t.table,f.value=t.columns}})()})),(t,r)=>{const a=V,p=M,j=R,b=q,y=e;return m(),h(y,null,{default:x((()=>[g(b,{title:v(n),onBack:r[2]||(r[2]=e=>v(i)("/infra/codegen"))},{right:x((()=>[g(j,{type:"primary",title:v(o)("action.save"),loading:v(l),onClick:r[1]||(r[1]=e=>(async()=>{var e,t;const r=v(_);if(await(null==(t=null==(e=null==r?void 0:r.elFormRef)?void 0:e.validate())?void 0:t.catch((()=>{})))){const e={table:await(null==r?void 0:r.getFormData()),columns:f.value};await z(e),s.success(o("common.updateSuccess")),i("/infra/codegen")}})())},null,8,["title","loading"])])),default:x((()=>[g(p,{modelValue:v(u),"onUpdate:modelValue":r[0]||(r[0]=e=>w(u)?u.value=e:null)},{default:x((()=>[g(a,{label:"基本信息",name:"basicInfo"},{default:x((()=>[g(v($),{ref_key:"basicInfoRef",ref:_,basicInfo:v(c)},null,8,["basicInfo"])])),_:1}),g(a,{label:"字段信息",name:"cloum"},{default:x((()=>[g(v(F),{ref_key:"cloumInfoRef",ref:d,info:v(f)},null,8,["info"])])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["title"])])),_:1})}}});export{P as default};
