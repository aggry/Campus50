(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2167c3"],{c352:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AkademikLayout",{scopedSlots:t._u(["mahasiswa"!=t.$store.getters["uiadmin/getDefaultDashboard"]?{key:"filtersidebar",fn:function(){return[e("Filter6",{ref:"filter6",on:{changeTahunAkademik:t.changeTahunAkademik,changeSemesterAkademik:t.changeSemesterAkademik,changeProdi:t.changeProdi}})]},proxy:!0}:null],null,!0)},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-format-columns ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" ISI NILAI PER KRS ")]},proxy:!0},"mahasiswa"!=t.$store.getters["uiadmin/getDefaultDashboard"]?{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.semester_akademik))+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk melakukan pengisian nilai berdasarkan krs mahasiswa per tahun akademik, dan semester yang telah dilakukan. ")])]},proxy:!0}],null,!0)}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR KRS")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer")],1),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogprintpdf,callback:function(a){t.dialogprintpdf=a},expression:"dialogprintpdf"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Print to PDF")])]),e("v-card-text",[e("v-btn",{attrs:{color:"green",text:"",href:t.$api.url+"/"+t.file_pdf}},[t._v(" Download ")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogprintpdf(a)}}},[t._v("CLOSE")])],1)],1)],1)]},proxy:!0},{key:"item.idkelas",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$store.getters["uiadmin/getNamaKelas"](e.idkelas))+" ")]}},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-btn",{attrs:{small:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.printpdf(i)}}},[e("v-icon",[t._v(" mdi-printer ")])],1),e("v-btn",{attrs:{small:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.$router.push("/akademik/nilai/matakuliah/isiperkrs/"+i.id)}}},[e("v-icon",[t._v(" mdi-eye ")])],1)]}},{key:"expanded-item",fn:function(a){var i=a.headers,n=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("krs_id:")]),t._v(t._s(n.id)+" "),e("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],r=(e("c975"),e("a434"),e("96cf"),e("1da1")),s=e("e60c"),d=e("e477"),o=e("e678"),l={name:"NilaiIsiPerKRS",created:function(){if(this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"ISI NILAI",disabled:!1,href:"#"},{text:"PER KRS",disabled:!0,href:"#"}],"mahasiswa"==this.$store.getters["uiadmin/getDefaultDashboard"])this.initializeMhs();else{var t=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=t,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"]}},mounted:function(){"mahasiswa"!=this.$store.getters["uiadmin/getDefaultDashboard"]&&this.initialize()},data:function(){return{firstloading:!0,prodi_id:null,nama_prodi:null,daftar_ta:[],tahun_akademik:null,semester_akademik:null,btnLoadingTable:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"NIM",value:"nim",sortable:!0,width:150},{text:"NAMA",value:"nama_mhs",sortable:!0},{text:"ANGK.",value:"tahun_masuk",sortable:!0,width:100},{text:"JUMLAH MATKUL",value:"jumlah_matkul",sortable:!0,width:100},{text:"JUMLAH SKS",value:"jumlah_sks",sortable:!0,width:100},{text:"TA.SMT",value:"tasmt",sortable:!0,width:100},{text:"SAH",value:"sah",sortable:!0,width:100},{text:"AKSI",value:"actions",sortable:!1,width:140}],search:"",dialogprintpdf:!1,file_pdf:null}},methods:{changeTahunAkademik:function(t){this.tahun_akademik=t},changeSemesterAkademik:function(t){this.semester_akademik=t},changeProdi:function(t){this.prodi_id=t},initializeMhs:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.datatableLoading=!0,a.next=3,t.$ajax.post("/akademik/perkuliahan/krs",{},{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.datatable=e.daftar_krs,t.datatableLoading=!1})).catch((function(){t.datatableLoading=!1}));case 3:case"end":return a.stop()}}),a)})))()},initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/akademik/perkuliahan/krs",{prodi_id:this.prodi_id,ta:this.tahun_akademik,semester_akademik:this.semester_akademik},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatable=e.daftar_krs,a.datatableLoading=!1,a.firstloading=!1,a.$refs.filter6.setFirstTimeLoading(a.firstloading)})).catch((function(){a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus krs dengan NIM ("+t.nim+") ?",{color:"red",width:600,desc:"proses ini juga menghapus seluruh data yang berkaitan dengan krs ini."}).then((function(e){e&&(a.btnLoadingTable=!0,a.$ajax.post("/akademik/perkuliahan/krs/"+t.id,{_method:"DELETE"},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(){var e=a.datatable.indexOf(t);a.datatable.splice(e,1),a.btnLoadingTable=!1})).catch((function(){a.btnLoadingTable=!1})))}))},printpdf:function(t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.btnLoadingTable=!0,e.next=3,a.$ajax.get("/akademik/perkuliahan/krs/printpdf/"+t.id,{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.file_pdf=e.pdf_file,a.dialogprintpdf=!0,a.btnLoadingTable=!1})).catch((function(){a.btnLoadingTable=!1}));case 3:case"end":return e.stop()}}),e)})))()},closedialogprintpdf:function(){var t=this;setTimeout((function(){t.file_pdf=null,t.dialogprintpdf=!1}),300)}},watch:{tahun_akademik:function(){this.firstloading||this.initialize()},semester_akademik:function(){this.firstloading||this.initialize()},prodi_id:function(t){this.firstloading||(this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](t),this.initialize())}},components:{AkademikLayout:s["a"],ModuleHeader:d["a"],Filter6:o["a"]}},u=l,c=e("2877"),h=e("6544"),m=e.n(h),f=e("0798"),k=e("2bc5"),p=e("8336"),g=e("b0af"),b=e("99d9"),v=e("62ad"),_=e("a523"),x=e("8fea"),w=e("169a"),A=e("ce7e"),T=e("132d"),y=e("0fd9"),$=e("2fa4"),L=e("8654"),S=e("71d9"),D=e("2a7f"),M=Object(c["a"])(u,i,n,!1,null,null,null);a["default"]=M.exports;m()(M,{VAlert:f["a"],VBreadcrumbs:k["a"],VBtn:p["a"],VCard:g["a"],VCardActions:b["b"],VCardText:b["d"],VCardTitle:b["e"],VCol:v["a"],VContainer:_["a"],VDataTable:x["a"],VDialog:w["a"],VDivider:A["a"],VIcon:T["a"],VRow:y["a"],VSpacer:$["a"],VTextField:L["a"],VToolbar:S["a"],VToolbarTitle:D["c"]})}}]);