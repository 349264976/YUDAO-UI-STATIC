import"./base-085523fd.js";import{a as e,E as t}from"./el-form-item-8022b942.js";import{E as a}from"./el-notification-c7d5f4ea.js";import{_ as l}from"./XModal.vue_vue_type_script_setup_true_lang-c47b87cf.js";import{_ as s}from"./Descriptions-8db90f03.js";import{_ as o}from"./Form-a0e23abc.js";import{_ as i}from"./ContentWrap.vue_vue_type_script_setup_true_lang-63555901.js";import{_ as r}from"./XTable.vue_vue_type_style_index_0_lang-9c560634.js";import{_ as m}from"./XTextButton-ab77381a.js";import{_ as p}from"./XButton-39866472.js";import{a as n}from"./index-a7ef0ded.js";import{u}from"./useI18n-56d4bc42.js";import{r as d}from"./formRules-a3380b28.js";import{D as c}from"./dict-3e42505d.js";import{u as j}from"./useVxeCrudSchemas-8bec068b.js";import{A as _,d as f,r as y,Q as v,o as g,i as b,l as h,w as x,f as T,b as k,a as C,h as w,M as S,F as V,z as P}from"./runtime-core.esm-bundler-ccc21fcd.js";import{u as I}from"./useMessage-5e709b20.js";import{u as M}from"./useXTable-bf420a68.js";import"./index-c2caee16.js";import"./runtime-dom.esm-bundler-daa7e741.js";import"./aria-8fadfbe9.js";import"./index-4665dced.js";import"./cloneDeep-8298b498.js";import"./el-button-6b012e5e.js";import"./is-a7957d81.js";import"./focus-trap-f53979c5.js";import"./index-7a379d2e.js";/* empty css                     */import"./propTypes-5cfdbdab.js";import"./index-be3181b1.js";import"./el-descriptions-item-d373bc22.js";import"./DictTag.vue_vue_type_script_lang-a5ff2643.js";import"./color-a8b4eb58.js";/* empty css               */import"./index-795de047.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./Icon.vue_vue_type_script_setup_true_lang-4448c023.js";import"./dayjs.min-65a6b1e4.js";import"./useCache-d48cf6c5.js";import"./app-41ac77cd.js";import"./index-cf52a0ab.js";import"./el-message-7ddf9388.js";import"./index-7486e100.js";import"./index-183fdc84.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./Form.vue_vue_type_style_index_0_scoped_f983cb9f_lang-54d674bd.js";import"./el-row-ad412a39.js";import"./el-col-613bea3c.js";import"./el-checkbox-cd7dd8c1.js";import"./isEqual-6e1d5dd6.js";import"./_flatRest-ac7abae6.js";import"./el-radio-group-d1c0e064.js";import"./el-input-number-4fe7018b.js";/* empty css                  */import"./el-tree-39cab679.js";import"./el-tree-select-6f481715.js";import"./index-168f367d.js";import"./strings-777507ad.js";import"./debounce-eb6bb100.js";import"./index-9d88d8a4.js";import"./el-switch-4b318cc1.js";/* empty css                   */import"./InputPassword-d0077663.js";import"./auth-2fa258a0.js";import"./el-image-viewer-f62c5b85.js";import"./el-progress-64245232.js";import"./isArrayLikeObject-26c677c4.js";import"./index-653de86a.js";/* empty css                        *//* empty css                                                                   *//* empty css                    */import"./el-card-d8ab0074.js";import"./download-20922b56.js";import"./XTextButton.vue_vue_type_style_index_0_scoped_0fcea4df_lang-41ab76b9.js";import"./vue-router-0864a153.js";import"./index-6f87c872.js";const D=e=>n.get({url:"/system/sms-template/page",params:e}),E=e=>n.get({url:"/system/sms-template/get?id="+e}),U=e=>n.delete({url:"/system/sms-template/delete?id="+e}),{t:q}=u(),A=_({type:[d],status:[d],code:[d],name:[d],content:[d],apiTemplateId:[d],channelId:[d]}),R=_({primaryKey:"id",primaryType:"seq",primaryTitle:"模板编号",action:!0,actionWidth:"280",columns:[{title:"模板编码",field:"code",isSearch:!0},{title:"模板名称",field:"name",isSearch:!0},{title:"模板内容",field:"content"},{title:"短信 API 的模板编号",field:"apiTemplateId",isSearch:!0},{title:"短信类型",field:"type",dictType:c.SYSTEM_SMS_TEMPLATE_TYPE,dictClass:"number",isSearch:!0,table:{width:80}},{title:q("common.status"),field:"status",dictType:c.COMMON_STATUS,dictClass:"number",isSearch:!0,table:{width:80}},{title:q("form.remark"),field:"remark",isTable:!1},{title:q("common.createTime"),field:"createTime",formatter:"formatDate",isForm:!1,search:{show:!0,itemRender:{name:"XDataTimePicker"}}}]}),{allSchemas:X}=j(R),F=f({name:"SmsTemplate"}),B=f({...F,setup(d){const{t:c}=u(),j=I(),[_,{reload:f,deleteData:q}]=M({allSchemas:X,getListApi:D,deleteApi:U}),R=y(!1),F=y("edit"),B=y(""),L=y(!1),O=y(),z=y(),W=e=>{F.value=c("action."+e),B.value=e,R.value=!0},Y=async()=>{var e;const t=null==(e=T(O))?void 0:e.getElFormRef();t&&t.validate((async e=>{var t;if(e){L.value=!0;try{const e=null==(t=T(O))?void 0:t.formModel;"create"===B.value?(await(e=>n.post({url:"/system/sms-template/create",data:e}))(e),j.success(c("common.createSuccess"))):(await(e=>n.put({url:"/system/sms-template/update",data:e}))(e),j.success(c("common.updateSuccess"))),R.value=!1}finally{L.value=!1,await f()}}}))},K=y({content:"",params:{},mobile:"",templateCode:"",templateParams:{}}),N=y({mobile:[{required:!0,message:"手机不能为空",trigger:"blur"}],templateCode:[{required:!0,message:"模版编号不能为空",trigger:"blur"}],templateParams:{}}),Q=y(!1),J=async()=>{const e={mobile:K.value.mobile,templateCode:K.value.templateCode,templateParams:K.value.templateParams},t=await(e=>n.post({url:"/system/sms-template/send-sms",data:e}))(e);t&&j.success("提交发送成功！发送结果，见发送日志编号："+t),Q.value=!1};return(n,u)=>{const d=p,j=m,f=r,y=i,I=o,M=s,D=l,U=a,Z=e,$=t,G=v("hasPermi");return g(),b(V,null,[h(y,null,{default:x((()=>[h(f,{onRegister:T(_)},{toolbar_buttons:x((()=>[k(h(d,{type:"primary",preIcon:"ep:zoom-in",title:T(c)("action.add"),onClick:u[0]||(u[0]=e=>{W("create")})},null,8,["title"]),[[G,["system:sms-channel:create"]]])])),actionbtns_default:x((({row:e})=>[k(h(j,{preIcon:"ep:cpu",title:T(c)("action.test"),onClick:t=>(e=>{K.value.content=e.content,K.value.params=e.params,K.value.templateCode=e.code,K.value.templateParams=e.params.reduce((function(e,t){return e[t]=void 0,e}),{}),N.value.templateParams=e.params.reduce((function(e,t){return e[t]={required:!0,message:"参数 "+t+" 不能为空",trigger:"change"},e}),{}),Q.value=!0})(e)},null,8,["title","onClick"]),[[G,["system:sms-template:send-sms"]]]),k(h(j,{preIcon:"ep:edit",title:T(c)("action.edit"),onClick:t=>(async e=>{var t;W("update");const a=await E(e);null==(t=T(O))||t.setValues(a)})(e.id)},null,8,["title","onClick"]),[[G,["system:sms-template:update"]]]),k(h(j,{preIcon:"ep:view",title:T(c)("action.detail"),onClick:t=>(async e=>{W("detail");const t=await E(e);z.value=t})(e.id)},null,8,["title","onClick"]),[[G,["system:sms-template:query"]]]),k(h(j,{preIcon:"ep:delete",title:T(c)("action.del"),onClick:t=>T(q)(e.id)},null,8,["title","onClick"]),[[G,["system:sms-template:delete"]]])])),_:1},8,["onRegister"])])),_:1}),h(D,{id:"smsTemplate",modelValue:T(R),"onUpdate:modelValue":u[3]||(u[3]=e=>S(R)?R.value=e:null),title:T(F)},{footer:x((()=>[["create","update"].includes(T(B))?(g(),C(d,{key:0,type:"primary",title:T(c)("action.save"),loading:T(L),onClick:u[1]||(u[1]=e=>Y())},null,8,["title","loading"])):w("",!0),h(d,{loading:T(L),title:T(c)("dialog.close"),onClick:u[2]||(u[2]=e=>R.value=!1)},null,8,["loading","title"])])),default:x((()=>[["create","update"].includes(T(B))?(g(),C(I,{key:0,schema:T(X).formSchema,rules:T(A),ref_key:"formRef",ref:O},null,8,["schema","rules"])):w("",!0),"detail"===T(B)?(g(),C(M,{key:1,schema:T(X).detailSchema,data:T(z)},null,8,["schema","data"])):w("",!0)])),_:1},8,["modelValue","title"]),h(D,{id:"sendTest",modelValue:T(Q),"onUpdate:modelValue":u[8]||(u[8]=e=>S(Q)?Q.value=e:null),title:"测试"},{footer:x((()=>[h(d,{type:"primary",title:T(c)("action.test"),loading:T(L),onClick:u[6]||(u[6]=e=>J())},null,8,["title","loading"]),h(d,{title:T(c)("dialog.close"),onClick:u[7]||(u[7]=e=>Q.value=!1)},null,8,["title"])])),default:x((()=>[h($,{model:T(K),rules:T(N),"label-width":"200px","label-position":"top"},{default:x((()=>[h(Z,{label:"模板内容",prop:"content"},{default:x((()=>[h(U,{modelValue:T(K).content,"onUpdate:modelValue":u[4]||(u[4]=e=>T(K).content=e),type:"textarea",placeholder:"请输入模板内容",readonly:""},null,8,["modelValue"])])),_:1}),h(Z,{label:"手机号",prop:"mobile"},{default:x((()=>[h(U,{modelValue:T(K).mobile,"onUpdate:modelValue":u[5]||(u[5]=e=>T(K).mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),(g(!0),b(V,null,P(T(K).params,(e=>(g(),C(Z,{key:e,label:"参数 {"+e+"}",prop:"templateParams."+e},{default:x((()=>[h(U,{modelValue:T(K).templateParams[e],"onUpdate:modelValue":t=>T(K).templateParams[e]=t,placeholder:"请输入 "+e+" 参数"},null,8,["modelValue","onUpdate:modelValue","placeholder"])])),_:2},1032,["label","prop"])))),128))])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])],64)}}});export{B as default};
