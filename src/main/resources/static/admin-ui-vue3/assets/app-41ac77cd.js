import{d as e,c as t}from"./useI18n-56d4bc42.js";import{s as r,h as s}from"./index-cf52a0ab.js";import"./base-085523fd.js";import{E as i}from"./el-message-7ddf9388.js";import{u as o,C as a}from"./useCache-d48cf6c5.js";const{wsCache:n}=o(),u=e("app",{state:()=>({userInfo:"userInfo",sizeMap:["default","large","small"],mobile:!1,title:"芋道管理系统",pageLoading:!1,breadcrumb:!0,breadcrumbIcon:!0,collapse:!1,uniqueOpened:!0,hamburger:!0,screenfull:!0,size:!0,locale:!0,message:!0,tagsView:!0,tagsViewIcon:!0,logo:!0,fixedHeader:!0,footer:!0,greyMode:!1,fixedMenu:n.get("fixedMenu")||!1,layout:n.get(a.LAYOUT)||"classic",isDark:n.get(a.IS_DARK)||!1,currentSize:n.get("default")||"default",theme:n.get(a.THEME)||{elColorPrimary:"#409eff",leftMenuBorderColor:"inherit",leftMenuBgColor:"#001529",leftMenuBgLightColor:"#0f2438",leftMenuBgActiveColor:"var(--el-color-primary)",leftMenuCollapseBgActiveColor:"var(--el-color-primary)",leftMenuTextColor:"#bfcbd9",leftMenuTextActiveColor:"#fff",logoTitleTextColor:"#fff",logoBorderColor:"inherit",topHeaderBgColor:"#fff",topHeaderTextColor:"inherit",topHeaderHoverColor:"#f6f6f6",topToolBorderColor:"#eee"}}),getters:{getBreadcrumb(){return this.breadcrumb},getBreadcrumbIcon(){return this.breadcrumbIcon},getCollapse(){return this.collapse},getUniqueOpened(){return this.uniqueOpened},getHamburger(){return this.hamburger},getScreenfull(){return this.screenfull},getSize(){return this.size},getLocale(){return this.locale},getMessage(){return this.message},getTagsView(){return this.tagsView},getTagsViewIcon(){return this.tagsViewIcon},getLogo(){return this.logo},getFixedHeader(){return this.fixedHeader},getGreyMode(){return this.greyMode},getFixedMenu(){return this.fixedMenu},getPageLoading(){return this.pageLoading},getLayout(){return this.layout},getTitle(){return this.title},getUserInfo(){return this.userInfo},getIsDark(){return this.isDark},getCurrentSize(){return this.currentSize},getSizeMap(){return this.sizeMap},getMobile(){return this.mobile},getTheme(){return this.theme},getFooter(){return this.footer}},actions:{setBreadcrumb(e){this.breadcrumb=e},setBreadcrumbIcon(e){this.breadcrumbIcon=e},setCollapse(e){this.collapse=e},setUniqueOpened(e){this.uniqueOpened=e},setHamburger(e){this.hamburger=e},setScreenfull(e){this.screenfull=e},setSize(e){this.size=e},setLocale(e){this.locale=e},setMessage(e){this.message=e},setTagsView(e){this.tagsView=e},setTagsViewIcon(e){this.tagsViewIcon=e},setLogo(e){this.logo=e},setFixedHeader(e){this.fixedHeader=e},setGreyMode(e){this.greyMode=e},setFixedMenu(e){n.set("fixedMenu",e),this.fixedMenu=e},setPageLoading(e){this.pageLoading=e},setLayout(e){this.mobile&&"classic"!==e?i.warning("移动端模式下不支持切换其他布局"):(this.layout=e,n.set(a.LAYOUT,this.layout))},setTitle(e){this.title=e},setIsDark(e){this.isDark=e,this.isDark?(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light")):(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark")),n.set(a.IS_DARK,this.isDark)},setCurrentSize(e){this.currentSize=e,n.set("currentSize",this.currentSize)},setMobile(e){this.mobile=e},setTheme(e){this.theme=Object.assign(this.theme,e),n.set(a.THEME,this.theme)},setCssVarTheme(){for(const e in this.theme)r(`--${s(e)}`,this.theme[e])},setFooter(e){this.footer=e}}}),l=()=>u(t);export{l as a,u};