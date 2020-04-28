(function(t){function e(e){for(var s,r,n=e[0],l=e[1],c=e[2],d=0,g=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0383":function(t,e,a){"use strict";var s=a("7505"),o=a.n(s);o.a},"357e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"background colorOverlay",attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-info border-1"},[a("router-link",{staticClass:"navbar-brand text-white",attrs:{to:{name:"Home"}}},[t._v("Bug Tracker")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link text-white",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("bc3a"),c=a.n(l),u=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},g=d,h=a("2877"),m=Object(h["a"])(g,r,n,!1,null,null,null),v=m.exports,p={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:v}},b=p,f=(a("5c0b"),Object(h["a"])(b,o,i,!1,null,null,null)),C=f.exports,_=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid "},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-3 text-white pt-5"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"materialUnchecked"},on:{click:function(e){return t.toggleClosed()}}}),a("label",{staticClass:"form-check-label",attrs:{for:"materialUnchecked"}},[t._v("Filter Closed")])])])]),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 m-auto"},t._l(t.bugs,(function(e){return a("Bug",{key:e.id,attrs:{openBugs:t.showOpenBugs,bugData:e}})})),1)]),a("div",{staticClass:"modal fade",attrs:{id:"orangeModalSubscription",tabindex:"-1","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-notify modal-warning",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"md-form mb-5"},[a("i",{staticClass:"fas fa-user prefix grey-text"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control ",attrs:{type:"text",id:"form3"},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"form3"}},[t._v("Title")])]),a("div",{staticClass:"md-form"},[a("i",{staticClass:"fas fa-envelope prefix grey-text"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control ",attrs:{type:"email",id:"form2"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"form2"}},[t._v("Description")])])]),a("div",{staticClass:"modal-footer justify-content-center"},[a("button",{staticClass:"btn btn-primary waves-effect",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.addBug()}}},[t._v("Add")])])])])]),t._m(3)])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-5 text-center text-white mt-5 pl-5"},[a("h1",[t._v("Current Bugs")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 m-auto"},[a("div",{staticClass:"row mt-5 text-center text-white "},[a("div",{staticClass:"col-2"},[t._v("Title")]),a("div",{staticClass:"col-3"},[t._v("Description")]),a("div",{staticClass:"col-3"},[t._v("Reported By")]),a("div",{staticClass:"col-2"},[t._v("Status")]),a("div",{staticClass:"col-2"},[t._v("Last Modified")])]),a("hr",{staticClass:"border-white"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-center"},[a("h4",{staticClass:"modal-title white-text w-100 font-weight-bold py-2"},[t._v("Log a Bug")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal ","aria-label":"Close"}},[a("span",{staticClass:"white-text",attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("a",{staticClass:"btn bg-white btn-rounded",attrs:{href:"","data-toggle":"modal","data-target":"#orangeModalSubscription"}},[t._v("Log a Bug!")])])}],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Bug text-center"},[t.openBugs&&!t.bugData.closed||!t.openBugs?a("div",{staticClass:"row border-bottom border-success  text-white mt-0",on:{click:function(e){return t.selectBug()}}},[a("div",{staticClass:"col-2"},[a("h4",[t._v(t._s(t.bugData.title))])]),a("div",{staticClass:"col-3 text-center"},[a("h4",[t._v(t._s(t.bugData.description))])]),a("div",{staticClass:"col-3"},[a("h4",[t._v(t._s(t.bugData.creatorEmail))])]),a("span",{staticClass:"col-2"},[1==t.bugData.closed?a("div",{staticClass:" pl-3 text-danger text-center"},[a("h4",[t._v("Closed")])]):a("div",{staticClass:"text-success"},[a("h4",[t._v("Open")])])]),a("div",{staticClass:"col-2"},[a("h4",[t._v(t._s(t.date()))])])]):t._e(),a("hr",{staticClass:"border-white"})])},x=[],$={name:"Bug",props:["bugData","openBugs"],data(){return{}},computed:{},methods:{selectBug(){this.$store.commit("setActiveBug",{}),this.$router.push({name:"Details",params:{bugId:this.bugData._id}})},date(){let t=this.bugData.updatedAt.split("T");return t[0]}},components:{}},N=$,D=Object(h["a"])(N,y,x,!1,null,"379883d3",null),k=D.exports,O={name:"home",props:["bugData"],data(){return{newBug:{},showOpenBugs:!1}},mounted(){this.$store.dispatch("getBugs",this.$route.params.bugId),this.$store.dispatch("getNotes",this.$route.params.bugId)},computed:{bugs(){return this.$store.state.bugs}},methods:{addBug(){this.$store.dispatch("addBug",this.newBug),this.newBug={}},toggleClosed(){console.log(this.showOpenBugs),this.showOpenBugs=!this.showOpenBugs}},components:{Bug:k}},E=O,P=(a("5ec1"),Object(h["a"])(E,w,B,!1,null,"810ba6e4",null)),j=P.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Details text-info"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("h1",[t._v(t._s(t.bug.title))])]),a("div",{staticClass:"col-6"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("span",[a("h5",[t._v(" Reported By: "),a("h4",[t._v(t._s(t.bug.creatorEmail))])])])]),a("div",{staticClass:"col-4"}),a("div",{staticClass:"col-4"},[a("h5",[t._v(" Closed: "),a("h5",[t._v(t._s(t.bug.closed))])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-11 m-auto"},[a("h2",[t._v(t._s(t.bug.description))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"}),a("div",{staticClass:"col-2"},[t.bug.closed?t._e():a("button",{staticClass:"btn btn-danger mr-3 btn-rounded shadow",on:{click:function(e){return t.closeBug()}}},[t._v("Close Bug")]),a("span",[t.$auth.isAuthenticated&&!t.bug.closed?a("button",{staticClass:"btn bg-warning text-dark shadow",on:{click:function(e){t.editing=!t.editing}}},[t._v("Edit")]):t._e(),t.editing?a("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],attrs:{type:"text"},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}}),t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-warning shadow",attrs:{type:"submit"}},[t._v("Confirm")]):t._e()]):t._e()])])]),t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-9 m-auto"},[a("table",{staticClass:"table table-striped table-hover table-bordered table-sm",attrs:{id:"dtDynamicVerticalScrollExample",cellspacing:"1",width:"100%"}},[t._m(2),a("tbody",t._l(t.notes,(function(t){return a("Notes",{key:t.id,attrs:{noteData:t}})})),1)]),a("div",{staticClass:"modal fade",attrs:{id:"orangeModalSubscription",tabindex:"-1","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-notify modal-warning",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(3),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"md-form mb-5"},[a("i",{staticClass:"fas fa-user prefix grey-text"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control",attrs:{type:"text",id:"form3"},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}}),a("label",{attrs:{"data-error":"wrong","data-success":"right",for:"form3"}},[t._v("Message")])])]),a("div",{staticClass:"modal-footer justify-content-center"},[a("button",{staticClass:"btn  waves-effect",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return e.preventDefault(),t.addNote()}}},[t._v("Add")])])])])]),t._m(4)])]),t._m(5)])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-left"},[a("p",[t._v("Title:")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-2 text-left"},[a("h2",[t._v("Notes")])]),a("div",{staticClass:"col-10"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"th-sm"},[t._v("Name")]),a("th",{staticClass:"th-sm"},[t._v("Message")]),a("th",{staticClass:"th-sm"},[t._v("Delete")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-center"},[a("h4",{staticClass:"modal-title white-text w-100 font-weight-bold py-2"}),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal ","aria-label":"Close"}},[a("span",{staticClass:"white-text",attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("a",{staticClass:"btn bg-success btn-rounded",attrs:{href:"","data-toggle":"modal","data-target":"#orangeModalSubscription"}},[t._v("Add Comment")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-10"}),a("div",{staticClass:"col-2"})])}],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"notes"},[a("td",[t._v(t._s(t.noteData.creatorEmail))]),a("td",[t._v(t._s(t.noteData.content))]),a("td",{staticClass:"ml-3"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn bg-transparent",on:{click:function(e){return t.deleteNote()}}},[t._m(0)]):t._e()])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"text-danger"},[a("strong",[t._v("Delete Comment")])])}],I={name:"Notes",props:["noteData"],data(){return{}},computed:{},methods:{deleteNote(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&(Swal.fire("Deleted!","Your file has been deleted.","success"),this.$store.dispatch("deleteNote",this.noteData),this.$router.push({name:"Details"}))})}},components:{}},F=I,H=Object(h["a"])(F,T,M,!1,null,"fdd6f0bc",null),L=H.exports,Y={name:"Details",props:["bugData","noteData","showOpenBugs"],data(){return{newNote:{},editing:!1}},mounted(){this.$store.dispatch("getBug",this.$route.params.bugId),this.$store.dispatch("getNotes",this.$route.params.bugId)},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},methods:{addNote(){this.newNote.bugId=this.$store.state.activeBug.id,this.$store.dispatch("addNote",this.newNote),this.newNote={}},editBug(){this.$store.dispatch("editBug",this.bug),this.editing=!1},closeBug(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#20c997",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{if(t.value){Swal.fire("Deleted!","Your file has been deleted.","success");let t=this.bug;t.closed=!0,this.$store.dispatch("editBug",t)}})}},components:{Bug:k,Notes:L}},U=Y,R=Object(h["a"])(U,A,S,!1,null,"e693a910",null),z=R.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},Q=[],W={name:"Profile",computed:{profile(){return this.$store.state.profile}}},G=W,V=(a("0383"),Object(h["a"])(G,J,Q,!1,null,"59c2bb44",null)),X=V.exports;s["a"].use(_["a"]);const Z=[{path:"/",name:"Home",component:j},{path:"/notes",name:"Details",component:z,beforeEnter:u["b"]},{path:"/profile",name:"Profile",component:X,beforeEnter:u["b"]}],q=new _["a"]({routes:Z});var K=q,tt=a("2f62");s["a"].use(tt["a"]);let et=location.host.includes("localhost")?"http://localhost:3000/":"/",at=c.a.create({baseURL:et+"api",timeout:3e3,withCredentials:!0});var st=new tt["a"].Store({state:{profile:{},bug:{},bugs:{},activeBug:{},notes:{}},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e}},actions:{setBearer({},t){at.defaults.headers.authorization=t},resetBearer(){at.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await at.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t,dispatch:e},a){try{let e=await at.get("bugs");console.log("from get bug",e),t("setBugs",e.data)}catch(s){console.error(s,"getBugs Failed")}},async getBug({commit:t,dispatch:e},a){try{let e=await at.get("bugs/"+a,a);console.log("activeBug",e.data),t("setActiveBug",e.data)}catch(s){console.error(s)}},async addBug({commit:t,dispatch:e},a){try{let t=await at.post("bugs",a);K.push({name:"Details",params:{bugId:t.data._id}})}catch(s){console.error(s,"addBug Failing")}},async editBug({dispatch:t},e){try{await at.put("bugs/"+e._id,e),t("getBug",e._id)}catch(a){console.error(a,"editBug is Failing")}},async getNotes({commit:t,dispatch:e},a){try{let e=await at.get("bugs/"+a+"/notes");console.log("from get notes",e.data),t("setNotes",e.data)}catch(s){console.error(s,"getNotes Failed")}},async deleteNote({commit:t,dispatch:e},a){try{console.log("deleteNote log",a),await at.delete("notes/"+a.id),e("getNotes",a.bugId)}catch(s){console.error(s,"deleteNote failed")}},async editNote({dispatch:t},e){try{console.log("edit note in store",e),await at.put("notes/"+e.id,e),t("getNotes",e)}catch(a){console.error(a,"editNote is Failing")}},async addNote({commit:t,dispatch:e},a){console.log("new note",a);try{await at.post("notes/",a);console.log("note data from addNote",a),e("getNotes",a.bugId)}catch(s){console.error(s,"addNote Failing")}}}});const ot="gosszilla.auth0.com",it="https://buglog.com",rt="13HgN4uHCfyv3cQSkENxXAjOQTZ6G4DI";s["a"].use(u["a"],{domain:ot,clientId:rt,audience:it,onRedirectCallback:t=>{K.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:K,store:st,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"5ec1":function(t,e,a){"use strict";var s=a("357e"),o=a.n(s);o.a},7505:function(t,e,a){},"9c0c":function(t,e,a){}});