import{aw as B,H as b,u as e,bq as P,a as S,o as V,c as z,w as _,b as i,af as C,k as u,e as d,be as j}from"./index-185fe65d.js";import{T as E}from"./index-ea6c9550.js";import{P as G}from"./index-341544d4.js";import{D as m}from"./index-a55dbca7.js";import{G as x,S as g,D as L}from"./siteSetting-b99f02c5.js";import"./index-a2353b1b.js";import"./index-a331c47c.js";import"./useSize-536e554d.js";import"./eagerComputed-625aaa6f.js";import"./useWindowSizeFn-513fc031.js";import"./useContentViewHeight-f2cd4d02.js";import"./ArrowLeftOutlined-b0e96cce.js";import"./index-1091f5b3.js";import"./transButton-4d2a5fee.js";import"./get-99b39cda.js";function v(a){if(!B())throw new Error("useDescription() can only be used inside setup() or functional components!");const n=b(null),r=b(!1);function o(s){e(r)&&P()||(n.value=s,a&&s.setDescProps(a),r.value=!0)}return[o,{setDescProps:s=>{e(n)?.setDescProps(s)}}]}const U={class:"flex justify-between items-center"},I={class:"flex-1"},N=["href"],O=i("br",null,null,-1),H=["href"],ne=S({__name:"index",setup(a){const{pkg:n,lastBuildTime:r}={pkg:{dependencies:{"@ant-design/colors":"^7.0.0","@ant-design/icons-vue":"^6.1.0","@iconify/iconify":"^3.1.0","@vue/runtime-core":"^3.2.47","@vueuse/core":"^10.1.0","@zxcvbn-ts/core":"^2.2.1","ant-design-vue":"^3.2.18",axios:"^1.3.6",codemirror:"^5.65.3",cropperjs:"^1.5.13","crypto-js":"^4.1.1",dayjs:"^1.11.7",echarts:"^5.4.2","intro.js":"^6.0.0","lodash-es":"^4.17.21",nprogress:"^0.2.0","path-to-regexp":"^6.2.1",pinia:"^2.0.35","print-js":"^1.6.0",qrcode:"^1.5.3",qs:"^6.11.1","resize-observer-polyfill":"^1.5.1",sortablejs:"^1.15.0",tinymce:"^5.10.7",vditor:"^3.9.2",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-json-pretty":"^2.2.4","vue-router":"^4.1.6","vue-types":"^5.0.2",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"^17.6.1","@commitlint/config-conventional":"^17.6.1","@iconify/json":"^2.2.54","@purge-icons/generated":"^0.9.0","@types/codemirror":"^5.60.5","@types/crypto-js":"^4.1.1","@types/fs-extra":"^11.0.1","@types/inquirer":"^9.0.3","@types/intro.js":"^5.1.1","@types/lodash-es":"^4.17.7","@types/node":"^18.16.0","@types/nprogress":"^0.2.0","@types/qrcode":"^1.5.0","@types/qs":"^6.9.7","@types/sortablejs":"^1.15.1","@typescript-eslint/eslint-plugin":"^5.59.0","@typescript-eslint/parser":"^5.59.0","@vitejs/plugin-vue":"^4.1.0","@vitejs/plugin-vue-jsx":"^3.0.1","@vue/compiler-sfc":"^3.2.47",autoprefixer:"^10.4.14","conventional-changelog-cli":"^2.2.2","cross-env":"^7.0.3","cz-git":"^1.6.1",czg:"^1.6.1",dotenv:"^16.0.3",eslint:"^8.39.0","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.11.0",esno:"^0.16.3","fs-extra":"^11.1.1",husky:"^8.0.3",inquirer:"^9.1.5",less:"^4.1.3","lint-staged":"^13.2.1",picocolors:"^1.0.0",postcss:"^8.4.23","postcss-html":"^1.5.0","postcss-less":"^6.0.0",prettier:"^2.8.7",rimraf:"^5.0.0",rollup:"^3.20.7","rollup-plugin-visualizer":"^5.9.0",stylelint:"^15.6.0","stylelint-config-recommended":"^12.0.0","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^33.0.0","stylelint-order":"^6.0.3",terser:"^5.17.1",typescript:"^5.0.4","unplugin-vue-setup-extend-plus":"^1.0.0",vite:"^4.3.1","vite-plugin-compression":"^0.5.1","vite-plugin-mkcert":"^1.14.0","vite-plugin-progress":"^0.0.7","vite-plugin-purge-icons":"^0.9.2","vite-plugin-pwa":"^0.14.7","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vite-plugin-windicss":"^1.8.10","vite-vue-plugin-html":"^1.0.1","vite-vue-plugin-theme":"^1.0.0","vue-eslint-parser":"^9.1.1","vue-tsc":"^1.4.4"},name:"yudao-ui-admin-vben",version:"1.7.2"},lastBuildTime:"2023-04-24 13:46:09"},{dependencies:o,devDependencies:p,name:s,version:D}=n,f=[],y=[],h=t=>c=>j(E,{color:t},()=>c),l=t=>c=>j("a",{href:c,target:"_blank"},t),R=[{label:"版本",field:"version",render:h("blue")},{label:"最后编译时间",field:"lastBuildTime",render:h("blue")},{label:"文档地址",field:"doc",render:l("文档地址")},{label:"预览地址",field:"preview",render:l("预览地址")},{label:"Github",field:"github",render:l("Github")},{label:"外包服务",field:"outsourcing",render:l("外包服务")}],k={version:D,lastBuildTime:r,doc:L,preview:g,github:x,outsourcing:g};Object.keys(o).forEach(t=>{f.push({field:t,label:t})}),Object.keys(p).forEach(t=>{y.push({field:t,label:t})});const[w]=v({title:"生产环境依赖",data:o,schema:f,column:3}),[T]=v({title:"开发环境依赖",data:p,schema:y,column:3}),[q]=v({title:"项目信息",data:k,schema:R,column:2});return(t,c)=>(V(),z(e(G),{title:"关于"},{headerContent:_(()=>[i("div",U,[i("span",I,[i("a",{href:e(x),target:"_blank"},C(e(s)),9,N),u(" 基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。"),O,u(" 同时，我们也提供"),i("a",{href:e(g),target:"_blank"},"外包服务",8,H),u("。 ")])])]),default:_(()=>[d(e(m),{onRegister:e(q),class:"enter-y"},null,8,["onRegister"]),d(e(m),{onRegister:e(w),class:"my-4 enter-y"},null,8,["onRegister"]),d(e(m),{onRegister:e(T),class:"enter-y"},null,8,["onRegister"])]),_:1}))}});export{ne as default};
