(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cca2282"],{6135:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-SETTING-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-setting"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KONFIG. SISTEM")])],1)],1):t._e(),a("v-subheader",[t._v("PERGURUAN TINGGI")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/identitasdiri"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" IDENTITAS DIRI ")])],1)],1):t._e(),a("v-subheader",[t._v("HEADER")]),t.CAN_ACCESS("SYSTEM-SETTING-IDENTITAS-DIRI")?a("v-list-item",{attrs:{link:"",to:"/system-setting/headerlaporan"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-page-layout-header")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" HEADER LAPORAN ")])],1)],1):t._e(),a("v-subheader",[t._v("SERVER")]),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/captcha"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CAPTCHA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-VARIABLES")?a("v-list-item",{attrs:{link:"",to:"/system-setting/email"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" EMAIL ")])],1)],1):t._e()],1)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(a("ac1f"),a("5319"),a("5530")),n=a("2f62"),o={name:"SystemConfigLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"Campus50 v1"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},c=o,l=a("2877"),u=a("6544"),d=a.n(u),v=a("40dc"),m=a("5bc1"),f=a("8212"),p=a("ce7e"),h=a("132d"),_=a("adda"),g=a("8860"),T=a("da13"),b=a("8270"),E=a("5d23"),A=a("34c3"),C=a("f6c4"),S=a("e449"),y=a("f774"),I=a("2fa4"),k=a("e0c7"),V=a("afd9"),R=a("2a7f"),x=Object(l["a"])(c,i,s,!1,null,null,null);e["a"]=x.exports;d()(x,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:f["a"],VDivider:p["a"],VIcon:h["a"],VImg:_["a"],VList:g["a"],VListItem:T["a"],VListItemAvatar:b["a"],VListItemContent:E["g"],VListItemIcon:A["a"],VListItemSubtitle:E["j"],VListItemTitle:E["k"],VMain:C["a"],VMenu:S["a"],VNavigationDrawer:y["a"],VSpacer:I["a"],VSubheader:k["a"],VSystemBar:V["a"],VToolbarTitle:R["c"]})},b746:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SystemConfigLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-google-circles-group ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" CAPTCHA ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Setting pengaman dari spammer menggunakan captcha ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[t._v(" Google Recaptcha ")]),a("v-card-text",[a("v-text-field",{attrs:{label:"SITE KEY",outlined:"",rules:t.rule_site_key},model:{value:t.formdata.siteKey,callback:function(e){t.$set(t.formdata,"siteKey",e)},expression:"formdata.siteKey"}}),a("v-text-field",{attrs:{label:"PRIVATE KEY",outlined:"",rules:t.rule_private_key},model:{value:t.formdata.privateKey,callback:function(e){t.$set(t.formdata,"privateKey",e)},expression:"formdata.privateKey"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=a("5530"),n=(a("96cf"),a("1da1")),o=a("2f62"),c=a("6135"),l=a("e477"),u={name:"Captcha",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KONFIGURASI SISTEM",disabled:!1,href:"/system-setting"},{text:"SERVER - CAPTCHA",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,form_valid:!0,formdata:{siteKey:"",privateKey:""},rule_site_key:[function(t){return!!t||"Mohon untuk di isi site key !!!"}],rule_private_key:[function(t){return!!t||"Mohon untuk di isi private key !!!"}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/system/setting/variables",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data,i=a.setting;e.formdata.siteKey=i.CAPTCHA_SITE_KEY,e.formdata.privateKey=i.CAPTCHA_PRIVATE_KEY}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"captcha google",setting:JSON.stringify({901:this.formdata.siteKey,902:this.formdata.privateKey})},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1})).catch((function(){t.btnLoading=!1})))}},computed:Object(r["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),components:{SystemConfigLayout:c["a"],ModuleHeader:l["a"]}},d=u,v=a("2877"),m=a("6544"),f=a.n(m),p=a("0798"),h=a("2bc5"),_=a("8336"),g=a("b0af"),T=a("99d9"),b=a("62ad"),E=a("a523"),A=a("4bd4"),C=a("132d"),S=a("0fd9"),y=a("2fa4"),I=a("8654"),k=Object(v["a"])(d,i,s,!1,null,null,null);e["default"]=k.exports;f()(k,{VAlert:p["a"],VBreadcrumbs:h["a"],VBtn:_["a"],VCard:g["a"],VCardActions:T["b"],VCardText:T["d"],VCardTitle:T["e"],VCol:b["a"],VContainer:E["a"],VForm:A["a"],VIcon:C["a"],VRow:S["a"],VSpacer:y["a"],VTextField:I["a"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,o=a("2877"),c=a("6544"),l=a.n(c),u=a("62ad"),d=a("a523"),v=a("132d"),m=a("0fd9"),f=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=f.exports;l()(f,{VCol:u["a"],VContainer:d["a"],VIcon:v["a"],VRow:m["a"]})}}]);