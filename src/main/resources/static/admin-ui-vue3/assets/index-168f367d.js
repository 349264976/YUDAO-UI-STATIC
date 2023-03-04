import{v as e,a as t,T as l,w as o,n as a}from"./runtime-dom.esm-bundler-daa7e741.js";import{b as n,E as s}from"./aria-8fadfbe9.js";import{E as i,u as r,a as u}from"./index-7486e100.js";import{u as p,d,U as c,s as v,e as h,C as m,E as f,h as b}from"./el-notification-c7d5f4ea.js";import{E as g}from"./index-be3181b1.js";import{E as y,t as C}from"./index-795de047.js";import{p as S,u as x,_ as O,l as w,i as L,E as I,w as T,a as M}from"./base-085523fd.js";import{M as E,d as V,i as P,f as k,m as B}from"./index-c2caee16.js";import{e as z}from"./strings-777507ad.js";import{q as D,c as q,R as W,m as F,f as K,G as A,d as j,A as H,K as R,H as _,D as $,b as Q,o as N,i as G,j as U,e as J,t as X,n as Y,r as Z,x as ee,s as te,aO as le,b7 as oe,aW as ae,bs as ne,ba as se,b8 as ie,p as re,C as ue,Q as pe,l as de,w as ce,a as ve,F as he,z as me,h as fe,y as be,g as ge}from"./runtime-core.esm-bundler-ccc21fcd.js";import{d as ye,u as Ce}from"./el-button-6b012e5e.js";import{i as Se}from"./isEqual-6e1d5dd6.js";import{d as xe}from"./debounce-eb6bb100.js";import{C as Oe}from"./index-9d88d8a4.js";const we="ElSelectGroup",Le="ElSelect";var Ie=O(j({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const t=x("select"),l=H({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i}=function(e,t){const l=D(Le),o=D(we,{disabled:!1}),a=q((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),n=q((()=>l.props.multiple?d(l.props.modelValue,e.value):c(e.value,l.props.modelValue))),s=q((()=>{if(l.props.multiple){const e=l.props.modelValue||[];return!n.value&&e.length>=l.props.multipleLimit&&l.props.multipleLimit>0}return!1})),i=q((()=>e.label||(a.value?"":e.value))),r=q((()=>e.value||e.label||"")),u=q((()=>e.disabled||t.groupDisabled||s.value)),p=A(),d=(e=[],t)=>{if(a.value){const o=l.props.valueKey;return e&&e.some((e=>W(S(e,o))===S(t,o)))}return e&&e.includes(t)},c=(e,t)=>{if(a.value){const{valueKey:o}=l.props;return S(e,o)===S(t,o)}return e===t};F((()=>i.value),(()=>{e.created||l.props.remote||l.setSelected()})),F((()=>e.value),((t,o)=>{const{remote:a,valueKey:n}=l.props;if(Object.is(t,o)||(l.onOptionDestroy(o,p.proxy),l.onOptionCreate(p.proxy)),!e.created&&!a){if(n&&"object"==typeof t&&"object"==typeof o&&t[n]===o[n])return;l.setSelected()}})),F((()=>o.disabled),(()=>{t.groupDisabled=o.disabled}),{immediate:!0});const{queryChange:v}=W(l);return F(v,(o=>{const{query:a}=K(o),n=new RegExp(z(a),"i");t.visible=n.test(i.value)||e.created,t.visible||l.filteredOptionsCount--})),{select:l,currentLabel:i,currentValue:r,itemSelected:n,isDisabled:u,hoverItem:()=>{e.disabled||o.disabled||(l.hoverIndex=l.optionsArray.indexOf(p.proxy))}}}(e,l),{visible:r,hover:u}=R(l),p=A().proxy;return s.onOptionCreate(p),_((()=>{const e=p.value,{selected:t}=s,l=(s.props.multiple?t:[t]).some((e=>e.value===p.value));$((()=>{s.cachedOptions.get(e)!==p||l||s.cachedOptions.delete(e)})),s.onOptionDestroy(e,p)})),{ns:t,currentLabel:o,itemSelected:a,isDisabled:n,select:s,hoverItem:i,visible:r,hover:u,selectOptionClick:function(){!0!==e.disabled&&!0!==l.groupDisabled&&s.handleOptionSelect(p,!0)},states:l}}}),[["render",function(l,o,a,n,s,i){return Q((N(),G("li",{class:Y([l.ns.be("dropdown","item"),l.ns.is("disabled",l.isDisabled),{selected:l.itemSelected,hover:l.hover}]),onMouseenter:o[0]||(o[0]=(...e)=>l.hoverItem&&l.hoverItem(...e)),onClick:o[1]||(o[1]=t(((...e)=>l.selectOptionClick&&l.selectOptionClick(...e)),["stop"]))},[U(l.$slots,"default",{},(()=>[J("span",null,X(l.currentLabel),1)]))],34)),[[e,l.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const Te=j({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=D(Le),t=x("select"),l=q((()=>e.props.popperClass)),o=q((()=>e.props.multiple)),a=q((()=>e.props.fitInputWidth)),s=Z("");function i(){var t;s.value=`${null==(t=e.selectWrapper)?void 0:t.offsetWidth}px`}return ee((()=>{i(),n(e.selectWrapper,i)})),{ns:t,minWidth:s,popperClass:l,isMultiple:o,isFitInputWidth:a}}});const Me=(e,t,l)=>{const{t:o}=p(),a=x("select");ye({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},q((()=>!1===e.suffixTransition)));const n=Z(null),i=Z(null),r=Z(null),u=Z(null),f=Z(null),b=Z(null),g=Z(-1),y=le({query:""}),C=le(""),{form:O,formItem:I}=Ce(),T=q((()=>!e.filterable||e.multiple||!t.visible)),M=q((()=>e.disabled||(null==O?void 0:O.disabled))),P=q((()=>{const l=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:void 0!==e.modelValue&&null!==e.modelValue&&""!==e.modelValue;return e.clearable&&!M.value&&t.inputHovering&&l})),k=q((()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon)),B=q((()=>a.is("reverse",k.value&&t.visible&&e.suffixTransition))),z=q((()=>e.remote?300:0)),D=q((()=>e.loading?e.loadingText||o("el.select.loading"):(!e.remote||""!==t.query||0!==t.options.size)&&(e.filterable&&t.query&&t.options.size>0&&0===t.filteredOptionsCount?e.noMatchText||o("el.select.noMatch"):0===t.options.size?e.noDataText||o("el.select.noData"):null))),K=q((()=>Array.from(t.options.values()))),A=q((()=>Array.from(t.cachedOptions.values()))),j=q((()=>{const l=K.value.filter((e=>!e.created)).some((e=>e.currentLabel===t.query));return e.filterable&&e.allowCreate&&""!==t.query&&!l})),H=V(),R=q((()=>["small"].includes(H.value)?"small":"default")),_=q({get:()=>t.visible&&!1!==D.value,set(e){t.visible=e}});F([()=>M.value,()=>H.value,()=>null==O?void 0:O.size],(()=>{$((()=>{Q()}))})),F((()=>e.placeholder),(e=>{t.cachedPlaceHolder=t.currentPlaceholder=e})),F((()=>e.modelValue),((l,o)=>{e.multiple&&(Q(),l&&l.length>0||i.value&&""!==t.query?t.currentPlaceholder="":t.currentPlaceholder=t.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(t.query="",N(t.query))),J(),e.filterable&&!e.multiple&&(t.inputLength=20),!Se(l,o)&&e.validateEvent&&(null==I||I.validate("change").catch((e=>d())))}),{flush:"post",deep:!0}),F((()=>t.visible),(o=>{var a,n,s;o?(null==(n=null==(a=r.value)?void 0:a.updatePopper)||n.call(a),e.filterable&&(t.filteredOptionsCount=t.optionsCount,t.query=e.remote?"":t.selectedLabel,e.multiple?null==(s=i.value)||s.focus():t.selectedLabel&&(t.currentPlaceholder=`${t.selectedLabel}`,t.selectedLabel=""),N(t.query),e.multiple||e.remote||(y.value.query="",ae(y),ae(C)))):(e.filterable&&(oe(e.filterMethod)&&e.filterMethod(""),oe(e.remoteMethod)&&e.remoteMethod("")),i.value&&i.value.blur(),t.query="",t.previousQuery=null,t.selectedLabel="",t.inputLength=20,t.menuVisibleOnFocus=!1,Y(),$((()=>{i.value&&""===i.value.value&&0===t.selected.length&&(t.currentPlaceholder=t.cachedPlaceHolder)})),e.multiple||(t.selected&&(e.filterable&&e.allowCreate&&t.createdSelected&&t.createdLabel?t.selectedLabel=t.createdLabel:t.selectedLabel=t.selected.currentLabel,e.filterable&&(t.query=t.selectedLabel)),e.filterable&&(t.currentPlaceholder=t.cachedPlaceHolder))),l.emit("visible-change",o)})),F((()=>t.options.entries()),(()=>{var l,o,a;if(!w)return;null==(o=null==(l=r.value)?void 0:l.updatePopper)||o.call(l),e.multiple&&Q();const n=(null==(a=f.value)?void 0:a.querySelectorAll("input"))||[];Array.from(n).includes(document.activeElement)||J(),e.defaultFirstOption&&(e.filterable||e.remote)&&t.filteredOptionsCount&&U()}),{flush:"post"}),F((()=>t.hoverIndex),(e=>{L(e)&&e>-1?g.value=K.value[e]||{}:g.value={},K.value.forEach((e=>{e.hover=g.value===e}))}));const Q=()=>{e.collapseTags&&!e.filterable||$((()=>{var e,l;if(!n.value)return;const o=n.value.$el.querySelector("input"),a=u.value,s=(i=H.value||(null==O?void 0:O.size),E[i||"default"]);var i;o.style.height=(0===t.selected.length?s:Math.max(a?a.clientHeight+(a.clientHeight>s?6:0):0,s))-2+"px",t.tagInMultiLine=Number.parseFloat(o.style.height)>=s,t.visible&&!1!==D.value&&(null==(l=null==(e=r.value)?void 0:e.updatePopper)||l.call(e))}))},N=async l=>{t.previousQuery===l||t.isOnComposition||(null!==t.previousQuery||!oe(e.filterMethod)&&!oe(e.remoteMethod)?(t.previousQuery=l,$((()=>{var e,l;t.visible&&(null==(l=null==(e=r.value)?void 0:e.updatePopper)||l.call(e))})),t.hoverIndex=-1,e.multiple&&e.filterable&&$((()=>{const l=15*i.value.value.length+20;t.inputLength=e.collapseTags?Math.min(50,l):l,G(),Q()})),e.remote&&oe(e.remoteMethod)?(t.hoverIndex=-1,e.remoteMethod(l)):oe(e.filterMethod)?(e.filterMethod(l),ae(C)):(t.filteredOptionsCount=t.optionsCount,y.value.query=l,ae(y),ae(C)),e.defaultFirstOption&&(e.filterable||e.remote)&&t.filteredOptionsCount&&(await $(),U())):t.previousQuery=l)},G=()=>{""!==t.currentPlaceholder&&(t.currentPlaceholder=i.value.value?"":t.cachedPlaceHolder)},U=()=>{const e=K.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),o=e[0];t.hoverIndex=ce(K.value,l||o)},J=()=>{var l;if(!e.multiple){const o=X(e.modelValue);return(null==(l=o.props)?void 0:l.created)?(t.createdLabel=o.props.value,t.createdSelected=!0):t.createdSelected=!1,t.selectedLabel=o.currentLabel,t.selected=o,void(e.filterable&&(t.query=t.selectedLabel))}t.selectedLabel="";const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach((e=>{o.push(X(e))})),t.selected=o,$((()=>{Q()}))},X=l=>{let o;const a="object"===ne(l).toLowerCase(),n="null"===ne(l).toLowerCase(),s="undefined"===ne(l).toLowerCase();for(let r=t.cachedOptions.size-1;r>=0;r--){const t=A.value[r];if(a?S(t.value,e.valueKey)===S(l,e.valueKey):t.value===l){o={value:l,currentLabel:t.currentLabel,isDisabled:t.isDisabled};break}}if(o)return o;const i={value:l,currentLabel:a?l.label:n||s?"":l};return e.multiple&&(i.hitState=!1),i},Y=()=>{setTimeout((()=>{const l=e.valueKey;e.multiple?t.selected.length>0?t.hoverIndex=Math.min.apply(null,t.selected.map((e=>K.value.findIndex((t=>S(t,l)===S(e,l)))))):t.hoverIndex=-1:t.hoverIndex=K.value.findIndex((e=>be(e)===be(t.selected)))}),300)},ee=()=>{var e;t.inputWidth=null==(e=n.value)?void 0:e.$el.offsetWidth},te=xe((()=>{e.filterable&&t.query!==t.selectedLabel&&(t.query=t.selectedLabel,N(t.query))}),z.value),re=xe((e=>{N(e.target.value)}),z.value),ue=t=>{Se(e.modelValue,t)||l.emit(m,t)},pe=o=>{o.stopPropagation();const a=e.multiple?[]:"";if(!ie(a))for(const e of t.selected)e.isDisabled&&a.push(e.value);l.emit(c,a),ue(a),t.hoverIndex=-1,t.visible=!1,l.emit("clear")},de=(o,a)=>{var n;if(e.multiple){const a=(e.modelValue||[]).slice(),s=ce(a,o.value);s>-1?a.splice(s,1):(e.multipleLimit<=0||a.length<e.multipleLimit)&&a.push(o.value),l.emit(c,a),ue(a),o.created&&(t.query="",N(""),t.inputLength=20),e.filterable&&(null==(n=i.value)||n.focus())}else l.emit(c,o.value),ue(o.value),t.visible=!1;t.isSilentBlur=a,ve(),t.visible||$((()=>{he(o)}))},ce=(t=[],l)=>{if(!se(l))return t.indexOf(l);const o=e.valueKey;let a=-1;return t.some(((e,t)=>W(S(e,o))===S(l,o)&&(a=t,!0))),a},ve=()=>{t.softFocus=!0;const e=i.value||n.value;e&&(null==e||e.focus())},he=e=>{var t,l,o,n,s;const i=Array.isArray(e)?e[0]:e;let u=null;if(null==i?void 0:i.value){const e=K.value.filter((e=>e.value===i.value));e.length>0&&(u=e[0].$el)}if(r.value&&u){const e=null==(n=null==(o=null==(l=null==(t=r.value)?void 0:t.popperRef)?void 0:l.contentRef)?void 0:o.querySelector)?void 0:n.call(o,`.${a.be("dropdown","wrap")}`);e&&v(e,u)}null==(s=b.value)||s.handleScroll()},me=e=>{if(!Array.isArray(t.selected))return;const l=t.selected[t.selected.length-1];return l?!0===e||!1===e?(l.hitState=e,e):(l.hitState=!l.hitState,l.hitState):void 0},fe=e=>{var l;e&&!t.mouseEnter||M.value||(t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:r.value&&r.value.isFocusInsideContent()||(t.visible=!t.visible),t.visible&&(null==(l=i.value||n.value)||l.focus()))},be=t=>se(t.value)?S(t.value,e.valueKey):t.value,ge=q((()=>K.value.filter((e=>e.visible)).every((e=>e.disabled)))),Oe=e=>{if(t.visible){if(0!==t.options.size&&0!==t.filteredOptionsCount&&!t.isOnComposition&&!ge.value){"next"===e?(t.hoverIndex++,t.hoverIndex===t.options.size&&(t.hoverIndex=0)):"prev"===e&&(t.hoverIndex--,t.hoverIndex<0&&(t.hoverIndex=t.options.size-1));const l=K.value[t.hoverIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||Oe(e),$((()=>he(g.value)))}}else t.visible=!0};return{optionsArray:K,selectSize:H,handleResize:()=>{var t,l;ee(),null==(l=null==(t=r.value)?void 0:t.updatePopper)||l.call(t),e.multiple&&!e.filterable&&Q()},debouncedOnInputChange:te,debouncedQueryChange:re,deletePrevTag:o=>{if(o.target.value.length<=0&&!me()){const t=e.modelValue.slice();t.pop(),l.emit(c,t),ue(t)}1===o.target.value.length&&0===e.modelValue.length&&(t.currentPlaceholder=t.cachedPlaceHolder)},deleteTag:(o,a)=>{const n=t.selected.indexOf(a);if(n>-1&&!M.value){const t=e.modelValue.slice();t.splice(n,1),l.emit(c,t),ue(t),l.emit("remove-tag",a.value)}o.stopPropagation()},deleteSelected:pe,handleOptionSelect:de,scrollToOption:he,readonly:T,resetInputHeight:Q,showClose:P,iconComponent:k,iconReverse:B,showNewOption:j,collapseTagSize:R,setSelected:J,managePlaceholder:G,selectDisabled:M,emptyText:D,toggleLastOptionHitState:me,resetInputState:e=>{e.code!==s.backspace&&me(!1),t.inputLength=15*i.value.value.length+20,Q()},handleComposition:e=>{const l=e.target.value;if("compositionend"===e.type)t.isOnComposition=!1,$((()=>N(l)));else{const e=l[l.length-1]||"";t.isOnComposition=!h(e)}},onOptionCreate:e=>{t.optionsCount++,t.filteredOptionsCount++,t.options.set(e.value,e),t.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{t.options.get(e)===l&&(t.optionsCount--,t.filteredOptionsCount--,t.options.delete(e))},handleMenuEnter:()=>{$((()=>he(t.selected)))},handleFocus:o=>{t.softFocus?t.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!t.visible&&(t.menuVisibleOnFocus=!0),t.visible=!0),l.emit("focus",o))},blur:()=>{var e;t.visible=!1,null==(e=n.value)||e.blur()},handleBlur:e=>{$((()=>{t.isSilentBlur?t.isSilentBlur=!1:l.emit("blur",e)})),t.softFocus=!1},handleClearClick:e=>{pe(e)},handleClose:()=>{t.visible=!1},handleKeydownEscape:e=>{t.visible&&(e.preventDefault(),e.stopPropagation(),t.visible=!1)},toggleMenu:fe,selectOption:()=>{t.visible?K.value[t.hoverIndex]&&de(K.value[t.hoverIndex],void 0):fe()},getValueKey:be,navigateOptions:Oe,dropMenuVisible:_,queryChange:y,groupQueryChange:C,reference:n,input:i,tooltipRef:r,tags:u,selectWrapper:f,scrollbar:b,handleMouseEnter:()=>{t.mouseEnter=!0},handleMouseLeave:()=>{t.mouseEnter=!1}}},Ee="ElSelect",Ve=j({name:Ee,componentName:Ee,components:{ElInput:f,ElSelectMenu:O(Te,[["render",function(e,t,l,o,a,n){return N(),G("div",{class:Y([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:te({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[U(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]),ElOption:Ie,ElTag:y,ElScrollbar:g,ElTooltip:i,ElIcon:I},directives:{ClickOutside:Oe},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:b},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:r.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:P,default:k},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:P,default:B},tagType:{...C.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:u,default:"bottom-start"}},emits:[c,m,"remove-tag","clear","visible-change","focus","blur"],setup(e,t){const l=x("select"),o=x("input"),{t:a}=p(),s=function(e){const{t:t}=p();return H({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:t("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}(e),{optionsArray:i,selectSize:r,readonly:u,handleResize:d,collapseTagSize:v,debouncedOnInputChange:h,debouncedQueryChange:m,deletePrevTag:f,deleteTag:b,deleteSelected:g,handleOptionSelect:y,scrollToOption:C,setSelected:S,resetInputHeight:O,managePlaceholder:w,showClose:L,selectDisabled:I,iconComponent:T,iconReverse:M,showNewOption:E,emptyText:V,toggleLastOptionHitState:P,resetInputState:k,handleComposition:B,onOptionCreate:z,onOptionDestroy:D,handleMenuEnter:W,handleFocus:F,blur:A,handleBlur:j,handleClearClick:_,handleClose:Q,handleKeydownEscape:N,toggleMenu:G,selectOption:U,getValueKey:J,navigateOptions:X,dropMenuVisible:Y,reference:Z,input:te,tooltipRef:le,tags:oe,selectWrapper:ae,scrollbar:ne,queryChange:se,groupQueryChange:ie,handleMouseEnter:ue,handleMouseLeave:pe}=Me(e,s,t),{focus:de}=(ce=Z,{focus:()=>{var e,t;null==(t=null==(e=ce.value)?void 0:e.focus)||t.call(e)}});var ce;const{inputWidth:ve,selected:he,inputLength:me,filteredOptionsCount:fe,visible:be,softFocus:ge,selectedLabel:ye,hoverIndex:Ce,query:Se,inputHovering:xe,currentPlaceholder:Oe,menuVisibleOnFocus:we,isOnComposition:Ie,isSilentBlur:Te,options:Ee,cachedOptions:Ve,optionsCount:Pe,prefixWidth:ke,tagInMultiLine:Be}=R(s),ze=q((()=>{const t=[l.b()],o=K(r);return o&&t.push(l.m(o)),e.disabled&&t.push(l.m("disabled")),t})),De=q((()=>({maxWidth:K(ve)-32+"px",width:"100%"}))),qe=q((()=>({maxWidth:`${K(ve)>123?K(ve)-123:K(ve)-75}px`})));re(Le,H({props:e,options:Ee,optionsArray:i,cachedOptions:Ve,optionsCount:Pe,filteredOptionsCount:fe,hoverIndex:Ce,handleOptionSelect:y,onOptionCreate:z,onOptionDestroy:D,selectWrapper:ae,selected:he,setSelected:S,queryChange:se,groupQueryChange:ie})),ee((()=>{s.cachedPlaceHolder=Oe.value=e.placeholder||a("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Oe.value=""),n(ae,d),e.remote&&e.multiple&&O(),$((()=>{const e=Z.value&&Z.value.$el;if(e&&(ve.value=e.getBoundingClientRect().width,t.slots.prefix)){const t=e.querySelector(`.${o.e("prefix")}`);ke.value=Math.max(t.getBoundingClientRect().width+5,30)}})),S()})),e.multiple&&!Array.isArray(e.modelValue)&&t.emit(c,[]),!e.multiple&&Array.isArray(e.modelValue)&&t.emit(c,"");const We=q((()=>{var e,t;return null==(t=null==(e=le.value)?void 0:e.popperRef)?void 0:t.contentRef}));return{tagInMultiLine:Be,prefixWidth:ke,selectSize:r,readonly:u,handleResize:d,collapseTagSize:v,debouncedOnInputChange:h,debouncedQueryChange:m,deletePrevTag:f,deleteTag:b,deleteSelected:g,handleOptionSelect:y,scrollToOption:C,inputWidth:ve,selected:he,inputLength:me,filteredOptionsCount:fe,visible:be,softFocus:ge,selectedLabel:ye,hoverIndex:Ce,query:Se,inputHovering:xe,currentPlaceholder:Oe,menuVisibleOnFocus:we,isOnComposition:Ie,isSilentBlur:Te,options:Ee,resetInputHeight:O,managePlaceholder:w,showClose:L,selectDisabled:I,iconComponent:T,iconReverse:M,showNewOption:E,emptyText:V,toggleLastOptionHitState:P,resetInputState:k,handleComposition:B,handleMenuEnter:W,handleFocus:F,blur:A,handleBlur:j,handleClearClick:_,handleClose:Q,handleKeydownEscape:N,toggleMenu:G,selectOption:U,getValueKey:J,navigateOptions:X,dropMenuVisible:Y,focus:de,reference:Z,input:te,tooltipRef:le,popperPaneRef:We,tags:oe,selectWrapper:ae,scrollbar:ne,wrapperKls:ze,selectTagsStyle:De,nsSelect:l,tagTextStyle:qe,handleMouseEnter:ue,handleMouseLeave:pe}}}),Pe=["disabled","autocomplete"],ke={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var Be=O(Ve,[["render",function(n,s,i,r,u,p){const d=ue("el-tag"),c=ue("el-tooltip"),v=ue("el-icon"),h=ue("el-input"),m=ue("el-option"),f=ue("el-scrollbar"),b=ue("el-select-menu"),g=pe("click-outside");return Q((N(),G("div",{ref:"selectWrapper",class:Y(n.wrapperKls),onMouseenter:s[22]||(s[22]=(...e)=>n.handleMouseEnter&&n.handleMouseEnter(...e)),onMouseleave:s[23]||(s[23]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e)),onClick:s[24]||(s[24]=t(((...e)=>n.toggleMenu&&n.toggleMenu(...e)),["stop"]))},[de(c,{ref:"tooltipRef",visible:n.dropMenuVisible,placement:n.placement,teleported:n.teleported,"popper-class":[n.nsSelect.e("popper"),n.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:n.effect,pure:"",trigger:"click",transition:`${n.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:n.persistent,onShow:n.handleMenuEnter},{default:ce((()=>[J("div",{class:"select-trigger",onMouseenter:s[20]||(s[20]=e=>n.inputHovering=!0),onMouseleave:s[21]||(s[21]=e=>n.inputHovering=!1)},[n.multiple?(N(),G("div",{key:0,ref:"tags",class:Y(n.nsSelect.e("tags")),style:te(n.selectTagsStyle)},[n.collapseTags&&n.selected.length?(N(),G("span",{key:0,class:Y([n.nsSelect.b("tags-wrapper"),{"has-prefix":n.prefixWidth&&n.selected.length}])},[de(d,{closable:!n.selectDisabled&&!n.selected[0].isDisabled,size:n.collapseTagSize,hit:n.selected[0].hitState,type:n.tagType,"disable-transitions":"",onClose:s[0]||(s[0]=e=>n.deleteTag(e,n.selected[0]))},{default:ce((()=>[J("span",{class:Y(n.nsSelect.e("tags-text")),style:te(n.tagTextStyle)},X(n.selected[0].currentLabel),7)])),_:1},8,["closable","size","hit","type"]),n.selected.length>1?(N(),ve(d,{key:0,closable:!1,size:n.collapseTagSize,type:n.tagType,"disable-transitions":""},{default:ce((()=>[n.collapseTagsTooltip?(N(),ve(c,{key:0,disabled:n.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:n.effect,placement:"bottom",teleported:n.teleported},{default:ce((()=>[J("span",{class:Y(n.nsSelect.e("tags-text"))},"+ "+X(n.selected.length-1),3)])),content:ce((()=>[J("div",{class:Y(n.nsSelect.e("collapse-tags"))},[(N(!0),G(he,null,me(n.selected.slice(1),((e,t)=>(N(),G("div",{key:t,class:Y(n.nsSelect.e("collapse-tag"))},[(N(),ve(d,{key:n.getValueKey(e),class:"in-tooltip",closable:!n.selectDisabled&&!e.isDisabled,size:n.collapseTagSize,hit:e.hitState,type:n.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:t=>n.deleteTag(t,e)},{default:ce((()=>[J("span",{class:Y(n.nsSelect.e("tags-text")),style:te({maxWidth:n.inputWidth-75+"px"})},X(e.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"]))],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(N(),G("span",{key:1,class:Y(n.nsSelect.e("tags-text"))},"+ "+X(n.selected.length-1),3))])),_:1},8,["size","type"])):fe("v-if",!0)],2)):fe("v-if",!0),fe(" <div> "),n.collapseTags?fe("v-if",!0):(N(),ve(l,{key:1,onAfterLeave:n.resetInputHeight},{default:ce((()=>[J("span",{class:Y([n.nsSelect.b("tags-wrapper"),{"has-prefix":n.prefixWidth&&n.selected.length}])},[(N(!0),G(he,null,me(n.selected,(e=>(N(),ve(d,{key:n.getValueKey(e),closable:!n.selectDisabled&&!e.isDisabled,size:n.collapseTagSize,hit:e.hitState,type:n.tagType,"disable-transitions":"",onClose:t=>n.deleteTag(t,e)},{default:ce((()=>[J("span",{class:Y(n.nsSelect.e("tags-text")),style:te({maxWidth:n.inputWidth-75+"px"})},X(e.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),fe(" </div> "),n.filterable?Q((N(),G("input",{key:2,ref:"input","onUpdate:modelValue":s[1]||(s[1]=e=>n.query=e),type:"text",class:Y([n.nsSelect.e("input"),n.nsSelect.is(n.selectSize)]),disabled:n.selectDisabled,autocomplete:n.autocomplete,style:te({marginLeft:n.prefixWidth&&!n.selected.length||n.tagInMultiLine?`${n.prefixWidth}px`:"",flexGrow:1,width:n.inputLength/(n.inputWidth-32)+"%",maxWidth:n.inputWidth-42+"px"}),onFocus:s[2]||(s[2]=(...e)=>n.handleFocus&&n.handleFocus(...e)),onBlur:s[3]||(s[3]=(...e)=>n.handleBlur&&n.handleBlur(...e)),onKeyup:s[4]||(s[4]=(...e)=>n.managePlaceholder&&n.managePlaceholder(...e)),onKeydown:[s[5]||(s[5]=(...e)=>n.resetInputState&&n.resetInputState(...e)),s[6]||(s[6]=o(t((e=>n.navigateOptions("next")),["prevent"]),["down"])),s[7]||(s[7]=o(t((e=>n.navigateOptions("prev")),["prevent"]),["up"])),s[8]||(s[8]=o(((...e)=>n.handleKeydownEscape&&n.handleKeydownEscape(...e)),["esc"])),s[9]||(s[9]=o(t(((...e)=>n.selectOption&&n.selectOption(...e)),["stop","prevent"]),["enter"])),s[10]||(s[10]=o(((...e)=>n.deletePrevTag&&n.deletePrevTag(...e)),["delete"])),s[11]||(s[11]=o((e=>n.visible=!1),["tab"]))],onCompositionstart:s[12]||(s[12]=(...e)=>n.handleComposition&&n.handleComposition(...e)),onCompositionupdate:s[13]||(s[13]=(...e)=>n.handleComposition&&n.handleComposition(...e)),onCompositionend:s[14]||(s[14]=(...e)=>n.handleComposition&&n.handleComposition(...e)),onInput:s[15]||(s[15]=(...e)=>n.debouncedQueryChange&&n.debouncedQueryChange(...e))},null,46,Pe)),[[a,n.query]]):fe("v-if",!0)],6)):fe("v-if",!0),de(h,{id:n.id,ref:"reference",modelValue:n.selectedLabel,"onUpdate:modelValue":s[16]||(s[16]=e=>n.selectedLabel=e),type:"text",placeholder:n.currentPlaceholder,name:n.name,autocomplete:n.autocomplete,size:n.selectSize,disabled:n.selectDisabled,readonly:n.readonly,"validate-event":!1,class:Y([n.nsSelect.is("focus",n.visible)]),tabindex:n.multiple&&n.filterable?-1:void 0,onFocus:n.handleFocus,onBlur:n.handleBlur,onInput:n.debouncedOnInputChange,onPaste:n.debouncedOnInputChange,onCompositionstart:n.handleComposition,onCompositionupdate:n.handleComposition,onCompositionend:n.handleComposition,onKeydown:[s[17]||(s[17]=o(t((e=>n.navigateOptions("next")),["stop","prevent"]),["down"])),s[18]||(s[18]=o(t((e=>n.navigateOptions("prev")),["stop","prevent"]),["up"])),o(t(n.selectOption,["stop","prevent"]),["enter"]),o(n.handleKeydownEscape,["esc"]),s[19]||(s[19]=o((e=>n.visible=!1),["tab"]))]},be({suffix:ce((()=>[n.iconComponent&&!n.showClose?(N(),ve(v,{key:0,class:Y([n.nsSelect.e("caret"),n.nsSelect.e("icon"),n.iconReverse])},{default:ce((()=>[(N(),ve(ge(n.iconComponent)))])),_:1},8,["class"])):fe("v-if",!0),n.showClose&&n.clearIcon?(N(),ve(v,{key:1,class:Y([n.nsSelect.e("caret"),n.nsSelect.e("icon")]),onClick:n.handleClearClick},{default:ce((()=>[(N(),ve(ge(n.clearIcon)))])),_:1},8,["class","onClick"])):fe("v-if",!0)])),_:2},[n.$slots.prefix?{name:"prefix",fn:ce((()=>[J("div",ke,[U(n.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)])),content:ce((()=>[de(b,null,{default:ce((()=>[Q(de(f,{ref:"scrollbar",tag:"ul","wrap-class":n.nsSelect.be("dropdown","wrap"),"view-class":n.nsSelect.be("dropdown","list"),class:Y([n.nsSelect.is("empty",!n.allowCreate&&Boolean(n.query)&&0===n.filteredOptionsCount)])},{default:ce((()=>[n.showNewOption?(N(),ve(m,{key:0,value:n.query,created:!0},null,8,["value"])):fe("v-if",!0),U(n.$slots,"default")])),_:3},8,["wrap-class","view-class","class"]),[[e,n.options.size>0&&!n.loading]]),n.emptyText&&(!n.allowCreate||n.loading||n.allowCreate&&0===n.options.size)?(N(),G(he,{key:0},[n.$slots.empty?U(n.$slots,"empty",{key:0}):(N(),G("p",{key:1,class:Y(n.nsSelect.be("dropdown","empty"))},X(n.emptyText),3))],64)):fe("v-if",!0)])),_:3})])),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[g,n.handleClose,n.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var ze=O(j({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const t=x("select"),l=Z(!0),o=A(),a=Z([]);re(we,H({...R(e)}));const n=D(Le);ee((()=>{a.value=s(o.subTree)}));const s=e=>{const t=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var l;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)&&t.push(...s(e))})),t},{groupQueryChange:i}=W(n);return F(i,(()=>{l.value=a.value.some((e=>!0===e.visible))}),{flush:"post"}),{visible:l,ns:t}}}),[["render",function(t,l,o,a,n,s){return Q((N(),G("ul",{class:Y(t.ns.be("group","wrap"))},[J("li",{class:Y(t.ns.be("group","title"))},X(t.label),3),J("li",null,[J("ul",{class:Y(t.ns.b("group"))},[U(t.$slots,"default")],2)])],2)),[[e,t.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const De=T(Be,{Option:Ie,OptionGroup:ze}),qe=M(Ie),We=M(ze);export{De as E,qe as a,We as b,Le as s};
