import{_ as e}from"./XModal.vue_vue_type_script_setup_true_lang-c47b87cf.js";import{_ as t}from"./Descriptions-8db90f03.js";import{_ as r}from"./Form-a0e23abc.js";import{_ as o}from"./ContentWrap.vue_vue_type_script_setup_true_lang-63555901.js";import{_ as s}from"./XTable.vue_vue_type_style_index_0_lang-9c560634.js";import{_ as i}from"./XTextButton-ab77381a.js";import{_ as a}from"./XButton-39866472.js";import{u as l}from"./useI18n-56d4bc42.js";import{r as m}from"./formRules-a3380b28.js";import{D as p}from"./dict-3e42505d.js";import{u as n}from"./useVxeCrudSchemas-8bec068b.js";import{A as c,d,r as u,Q as j,o as _,i as f,l as y,w as v,f as g,b as h,a as x,h as b,M as k,F as C}from"./runtime-core.esm-bundler-ccc21fcd.js";import{a as w}from"./index-a7ef0ded.js";import{u as T}from"./useMessage-5e709b20.js";import{u as S}from"./useXTable-bf420a68.js";import"./base-085523fd.js";/* empty css                     */import"./propTypes-5cfdbdab.js";import"./index-be3181b1.js";import"./aria-8fadfbe9.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./el-notification-c7d5f4ea.js";import"./el-button-6b012e5e.js";import"./index-4665dced.js";import"./index-c2caee16.js";import"./is-a7957d81.js";import"./focus-trap-f53979c5.js";import"./index-7a379d2e.js";import"./el-descriptions-item-d373bc22.js";import"./DictTag.vue_vue_type_script_lang-a5ff2643.js";import"./color-a8b4eb58.js";/* empty css               */import"./index-795de047.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import"./dayjs.min-65a6b1e4.js";import"./useCache-d48cf6c5.js";import"./app-41ac77cd.js";import"./index-cf52a0ab.js";import"./el-message-7ddf9388.js";import"./index-7486e100.js";import"./index-183fdc84.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./Form.vue_vue_type_style_index_0_scoped_f983cb9f_lang-54d674bd.js";import"./el-form-item-8022b942.js";import"./cloneDeep-8298b498.js";import"./el-row-ad412a39.js";import"./el-col-613bea3c.js";import"./el-checkbox-cd7dd8c1.js";import"./isEqual-6e1d5dd6.js";import"./_flatRest-ac7abae6.js";import"./el-radio-group-d1c0e064.js";import"./el-input-number-4fe7018b.js";/* empty css                  */import"./el-tree-39cab679.js";import"./el-tree-select-6f481715.js";import"./index-168f367d.js";import"./strings-777507ad.js";import"./debounce-eb6bb100.js";import"./index-9d88d8a4.js";import"./el-switch-4b318cc1.js";/* empty css                   */import"./InputPassword-d0077663.js";import"./auth-2fa258a0.js";import"./el-image-viewer-f62c5b85.js";import"./el-progress-64245232.js";import"./isArrayLikeObject-26c677c4.js";import"./index-653de86a.js";/* empty css                        *//* empty css                                                                   *//* empty css                    */import"./el-card-d8ab0074.js";import"./download-20922b56.js";import"./XTextButton.vue_vue_type_style_index_0_scoped_0fcea4df_lang-41ab76b9.js";import"./index-6f87c872.js";import"./vue-router-0864a153.js";const{t:R}=l(),D=c({applicationName:[m],code:[m],message:[m]}),I=c({primaryKey:"id",primaryType:"seq",primaryTitle:"编号",action:!0,columns:[{title:"错误码类型",field:"type",dictType:p.SYSTEM_ERROR_CODE_TYPE,dictClass:"number",isSearch:!0},{title:"应用名",field:"applicationName",isSearch:!0},{title:"错误码编码",field:"code",isSearch:!0},{title:"错误码错误提示",field:"message",isSearch:!0},{title:R("common.createTime"),field:"createTime",formatter:"formatDate",isForm:!1,search:{show:!0,itemRender:{name:"XDataTimePicker"}}}]}),{allSchemas:E}=n(I),M=e=>w.get({url:"/system/error-code/page",params:e}),X=e=>w.get({url:"/system/error-code/get?id="+e}),F=e=>w.delete({url:"/system/error-code/delete?id="+e}),V=d({name:"ErrorCode"}),P=d({...V,setup(m){const{t:p}=l(),n=T(),[c,{reload:d,deleteData:R}]=S({allSchemas:E,getListApi:M,deleteApi:F}),I=u(!1),V=u("edit"),P=u(""),q=u(!1),A=u(),B=u(),O=e=>{V.value=p("action."+e),P.value=e,I.value=!0},L=async()=>{var e;const t=null==(e=g(A))?void 0:e.getElFormRef();t&&t.validate((async e=>{var t;if(e){q.value=!0;try{const e=null==(t=g(A))?void 0:t.formModel;"create"===P.value?(await(e=>w.post({url:"/system/error-code/create",data:e}))(e),n.success(p("common.createSuccess"))):(await(e=>w.put({url:"/system/error-code/update",data:e}))(e),n.success(p("common.updateSuccess"))),I.value=!1}finally{q.value=!1,await d()}}}))};return(l,m)=>{const n=a,d=i,u=s,w=o,T=r,S=t,M=e,F=j("hasPermi");return _(),f(C,null,[y(w,null,{default:v((()=>[y(u,{onRegister:g(c)},{toolbar_buttons:v((()=>[h(y(n,{type:"primary",preIcon:"ep:zoom-in",title:g(p)("action.add"),onClick:m[0]||(m[0]=e=>{O("create")})},null,8,["title"]),[[F,["system:error-code:create"]]])])),actionbtns_default:v((({row:e})=>[h(y(d,{preIcon:"ep:edit",title:g(p)("action.edit"),onClick:t=>(async e=>{var t;O("update");const r=await X(e);null==(t=g(A))||t.setValues(r)})(e.id)},null,8,["title","onClick"]),[[F,["system:error-code:update"]]]),h(y(d,{preIcon:"ep:view",title:g(p)("action.detail"),onClick:t=>(async e=>{O("detail");const t=await X(e);B.value=t})(e.id)},null,8,["title","onClick"]),[[F,["system:error-code:query"]]]),h(y(d,{preIcon:"ep:delete",title:g(p)("action.del"),onClick:t=>g(R)(e.id)},null,8,["title","onClick"]),[[F,["system:error-code:delete"]]])])),_:1},8,["onRegister"])])),_:1}),y(M,{id:"errorCodeModel",modelValue:g(I),"onUpdate:modelValue":m[3]||(m[3]=e=>k(I)?I.value=e:null),title:g(V)},{footer:v((()=>[["create","update"].includes(g(P))?(_(),x(n,{key:0,type:"primary",title:g(p)("action.save"),loading:g(q),onClick:m[1]||(m[1]=e=>L())},null,8,["title","loading"])):b("",!0),y(n,{loading:g(q),title:g(p)("dialog.close"),onClick:m[2]||(m[2]=e=>I.value=!1)},null,8,["loading","title"])])),default:v((()=>[["create","update"].includes(g(P))?(_(),x(T,{key:0,schema:g(E).formSchema,rules:g(D),ref_key:"formRef",ref:A},null,8,["schema","rules"])):b("",!0),"detail"===g(P)?(_(),x(S,{key:1,schema:g(E).detailSchema,data:g(B)},null,8,["schema","data"])):b("",!0)])),_:1},8,["modelValue","title"])],64)}}});export{P as default};