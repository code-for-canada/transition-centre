(function(t){function e(e){for(var i,n,o=e[0],c=e[1],l=e[2],d=0,u=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},n={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({account:"account",accountedit:"accountedit",calendar:"calendar",contact:"contact",documents:"documents",goals:"goals",history:"history",messages:"messages",notes:"notes",notificationbookta:"notificationbookta",plan:"plan",plan2:"plan2",schedule:"schedule",staff:"staff"}[t]||t)+"."+{account:"87cafc69",accountedit:"02fe269b",calendar:"9472ea8a",contact:"32ff7b56",documents:"e807fb4f",goals:"e10a38c0",history:"b8b33608",messages:"b1ac5356",notes:"9e1945eb",notificationbookta:"2bb40908",plan:"64013e34",plan2:"0acc0dee",schedule:"1a005794",staff:"4577ea6e"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={accountedit:1,calendar:1,contact:1,documents:1,goals:1,history:1,messages:1,notes:1,plan:1,plan2:1,schedule:1,staff:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var i="css/"+({account:"account",accountedit:"accountedit",calendar:"calendar",contact:"contact",documents:"documents",goals:"goals",history:"history",messages:"messages",notes:"notes",notificationbookta:"notificationbookta",plan:"plan",plan2:"plan2",schedule:"schedule",staff:"staff"}[t]||t)+"."+{account:"31d6cfe0",accountedit:"b936869e",calendar:"9c2a7bdd",contact:"1f733490",documents:"6a4622a3",goals:"fc0ee6ea",history:"b5295bc7",messages:"b8f5d2c0",notes:"d565f76a",notificationbookta:"31d6cfe0",plan:"36b0f539",plan2:"e4e59161",schedule:"3bc95df8",staff:"f6eec40a"}[t]+".css",s=c.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===s))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){l=u[o],d=l.getAttribute("data-href");if(d===i||d===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete n[t],p.parentNode.removeChild(p),a(r)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,a){i=s[t]=[e,a]}));e.push(i[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,a[1](u)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"43e0":function(t,e,a){"use strict";a("62cb")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r=a("2877"),o={},c=Object(r["a"])(o,n,s,!1,null,null,null),l=c.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-container"}},[a("Header"),a("main",{staticClass:"container",attrs:{property:"mainContentOfPage",resource:"#wb-main",typeof:"WebPageElement"}},[a("h1",{attrs:{property:"name",id:"wb-cont",dir:"ltr"}},[t._v(" My Digital Transition Portal ")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("p",[t._v(" Welcome to My Digital Transition Portal! This is your central location to plan and complete your transition from the military to post-service life. Not sure where to start? Book a consultation with your "),a("router-link",{attrs:{to:"/staff"}},[t._v("Transition Advisor")]),t._v(". ")],1)]),t._m(0)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("section",[t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("p",[t._v(" Plan your activities and set goals for a smooth transition with help from your Transition Advisor. ")]),a("router-link",{attrs:{to:"/plan"}},[a("button",{staticClass:"btn btn-call-to-action",attrs:{type:"button"}},[t._v(" See My Transition Plan ")])])],1)])]),t._m(2)]),a("div",{staticClass:"col-md-4"},[a("section",{staticClass:"blue-section-background"},[a("h2",{staticClass:"mrgn-tp-0"},[t._v("Book a consultation")]),a("div",{staticClass:"row"},[t._m(3),a("div",{staticClass:"col-xs-12 text-center blue-section-nav-padding"},[a("router-link",{attrs:{to:"/schedule"}},[a("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v(" Book Consultation ")])])],1),a("div",{staticClass:"col-xs-12 text-center blue-section-nav-padding"},[a("router-link",{attrs:{to:"/history"}},[a("a",{attrs:{href:"#"}},[t._v("View upcoming appointments")])])],1)])]),a("section",{staticClass:"blue-section-background"},[a("h2",{staticClass:"mrgn-tp-0"},[t._v("My transition information centre")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/documents"}},[t._v(" Transition documents ")])],1),a("li",[a("router-link",{attrs:{to:"/notes"}},[t._v(" Transition notes ")])],1),a("li",[a("router-link",{attrs:{to:"/messages"}},[t._v(" Secure Messaging ")])],1),a("li",[a("router-link",{attrs:{to:"/calendar"}},[t._v(" Calendar ")])],1),a("li",[a("router-link",{attrs:{to:"/account"}},[t._v(" Preferences ")])],1),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v(" Contact Us ")])],1)])])])])]),t._m(4)])]),a("Footer")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/portal_image.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-with-label-container"},[a("h2",{staticClass:"title-with-label"},[t._v("My Transition Plan")]),a("span",{staticClass:"title-label-container"},[a("span",{staticClass:"label label-default"},[a("small",[t._v("44% Complete")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("h2",[t._v("Transition Tools")]),a("div",{staticClass:"row"},[a("section",{staticClass:"col-md-6"},[a("h3",{staticClass:"h5"},[a("a",{attrs:{href:"https://code-for-canada.github.io/transition-centre/mocks/flows/phase1/mcs-portal-main-mock.html"}},[t._v("Apply to Transition")])]),a("p",[t._v("Submit or view the status of your transition application.")])]),a("section",{staticClass:"col-md-6"},[a("h3",{staticClass:"h5"},[a("a",{attrs:{href:"https://dtc.ongarde.net/en/career"}},[t._v("Find your renewed purpose")])]),a("p",[t._v(" Explore your skills and education options with the MNET and MySet tools. ")])]),a("section",{staticClass:"col-md-6"},[a("h3",{staticClass:"h5"},[a("a",{attrs:{href:"https://www.canada.ca/en/department-national-defence/services/benefits-military/education-training/professional-development/defence-learning-network.html"}},[t._v("Learn about transition")])]),a("p",[t._v(" Access transition related learnings, including My Transition 101 and Second Career Assistance Network seminars. ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xs-12"},[a("p",[t._v(" Book a consultation for transition feedback, advice and help. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("section",[a("h2",[t._v("Featured Resources")]),a("div",{staticClass:"row"},[a("section",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/dtc_image.png",alt:""}}),a("h3",{staticClass:"h5"},[a("a",{attrs:{href:"https://code-for-canada.github.io/transition-centre/mocks/flows/phase2/dtc-main-mock.html"}},[t._v("Digital Transition Centre")])]),a("p",[t._v(" The DTC is a central resource for all transition related information to complement your portal. ")])]),a("section",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/vac_image.png",alt:""}}),a("h3",{staticClass:"h5"},[a("a",{attrs:{href:"https://www.veterans.gc.ca/eng/e_services?utm_campaign=MVA"}},[t._v("MyVAC")])]),a("p",[t._v(" MyVAC is a central resource for all benefits and veteran related information. ")])]),a("section",{staticClass:"col-md-4"},[a("img",{staticClass:"img-responsive",attrs:{src:"https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/mfs_image.png",alt:""}}),a("h3",{staticClass:"h5"},[a("a",{attrs:{href:"https://www.cafconnection.ca/National/Programs-Services/For-Transitioning-Veterans-and-their-Families.aspx"}},[t._v("Military Family Services")])]),a("p",[t._v(" Learn how we can help your family through transition to post-service life. ")])])])])])}],m=a("ad1b"),f=a("ad6e"),h={name:"members-portal",components:{Header:m["a"],Footer:f["a"]}},v=h,b=(a("af55"),Object(r["a"])(v,u,p,!1,null,"b65a7438",null)),y=b.exports;i["a"].use(d["a"]);var g=[{path:"/",name:"MembersPortal",component:y,meta:{breadcrumb:[{name:"My Digital Transition Portal",link:"/"}]}},{path:"/plan",name:"MembersPlan",component:function(){return a.e("plan").then(a.bind(null,"5b00"))},meta:{breadcrumb:[{name:"My Digital Transition Portal",link:"/"},{name:"My Transition Plan",link:"/plan"}]}},{path:"/notification/bookta",name:"BookTransitionAdvisor",component:function(){return a.e("notificationbookta").then(a.bind(null,"8fad"))},meta:{breadcrumb:[{name:"My Digital Transition Portal",link:"/"}]}},{path:"/goals",name:"SmartGoals",component:function(){return a.e("goals").then(a.bind(null,"bb7e"))}},{path:"/plan2",name:"MembersPlan2",component:function(){return a.e("plan2").then(a.bind(null,"e930"))}},{path:"/calendar",name:"CalendarView",component:function(){return a.e("calendar").then(a.bind(null,"e542"))}},{path:"/history",name:"ConsultationHistory",component:function(){return a.e("history").then(a.bind(null,"9fef"))}},{path:"/schedule",name:"BookConsultation",component:function(){return a.e("schedule").then(a.bind(null,"70c9"))}},{path:"/documents",name:"DocumentsCentre",component:function(){return a.e("documents").then(a.bind(null,"4a8d"))}},{path:"/notes",name:"NotesCentre",component:function(){return a.e("notes").then(a.bind(null,"4816"))}},{path:"/staff",name:"StaffProfile",component:function(){return a.e("staff").then(a.bind(null,"7a10"))}},{path:"/messages",name:"MessageCentre",component:function(){return a.e("messages").then(a.bind(null,"d638"))}},{path:"/account",name:"MemberAccount",component:function(){return a.e("account").then(a.bind(null,"85af"))},meta:{breadcrumb:[{name:"My Digital Transition Portal",link:"/"}]}},{path:"/accountedit",name:"MemberAccountEdit",component:function(){return a.e("accountedit").then(a.bind(null,"538d"))},meta:{breadcrumb:[{name:"My Digital Transition Portal",link:"/"}]}},{path:"/contact",name:"ContactUs",component:function(){return a.e("contact").then(a.bind(null,"e9bb"))}}],w=new d["a"]({routes:g}),C=w,k=a("bc3a"),N=a.n(k),_=a("0c6e"),S=(a("0d03"),a("ac1f"),a("1276"),a("accc"),new Date);S.setDate(S.getDate()+7);var D=S.toISOString().split("T")[0];S.setDate(S.getDate()+30);var F=S.toISOString().split("T")[0];S.setDate(S.getDate()+30);var P=S.toISOString().split("T")[0];S.setDate(S.getDate()+30);var A=S.toISOString().split("T")[0],T=[{category:"Health",description:"Health - Funtioning Well Physically, Mentally, Socially and Spiritually",tasks:[{name:"Sign the necessary consents with your release",description:"Sign the necessary consents with your release description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Find Civilian Health Professionals",description:"Find Civilian Health Professionals description.",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Confirm VAC coverage",description:"Prepare a list of medication/ health treatment services and communicate with Medavie Blue Cross to confirm VAC coverage.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Complete medical examination",description:"Complete medical examination description.",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Obtain a copy of your medical examination",description:"Obtain a copy of your medical examination description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Request a copy of your medical file and a doctor’s package",description:"Request a copy of your medical file and a doctor’s package description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Request a copy of your dental file",description:"Request a copy of your dental file description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Apply for a provincial health care card",description:"Apply for a provincial health care card description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Ensure to obtain health and dental benefit plans for yourself and family",description:"Ensure to obtain health and dental benefit plans for yourself and family description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Acquire Gym membership and continue DFit program",description:"Acquire Gym membership and continue DFit program description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""}]},{category:"Finances",description:"Finances - Financially Secure",tasks:[{name:"Check your pension forecast and release benefits",description:"Check your pension forecast and release benefits description",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Develop a financial plan for after release",description:"Develop a financial plan for after release description",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Fill out personal and banking profile in My VAC Account",description:"Fill out personal and banking profile in My VAC Account description",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Plan your pension road map",description:"Plan your pension road map description",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Identify any outstanding CAF debts",description:"Identify any outstanding CAF debts (CANEX, mess, etc.) and plan payment schedule description",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Confirm your life insurance requirements after release",description:"Confirm your life insurance requirements after release description",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Apply for the Veterans discount CF One card",description:"Apply for the Veterans discount CF One card description",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Complete the CPP and / or QPP form",description:"Complete the CPP and / or QPP form description",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""}]},{category:"Employment or Other Meaningful Activity",description:"Employment or Other Meaningful Activity - Engaged in Activities They Find Beneficial and Meaningful",tasks:[{name:"Identify meaningful activities / hobbies",description:"Identify meaningful activities / hobbies description",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""}]},{category:"Social Integration",description:"Social Integration - In Mutualy Supportive Relationships and Engaged in Community",tasks:[{name:"Exchange personal contact info with military peers",description:"Consider exchanging personal contact info for military peers / connections you would like to stay in touch with.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Build your social contact network external to your military circles",description:"Build your social contact network external to your military circles description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Join groups with similar beliefs, language, culture, etc.",description:"Consider joining groups with similar beliefs, language, culture, etc. description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Build your online social media contact list",description:"Build your online social media contact list (e.g., Facebook, Instagram, etc.) description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""}]},{category:"Housing and Physical Environment",description:"Housing and Physical Environment - Living in Safe, Adequate, Affordable Housing",tasks:[{name:"Ensure your contact information is current",description:"Ensure your contact information is current (CAF, VAC, bank etc).",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""}]},{category:"Life Skills and Preparedness",description:"Life Skills and Preparedness - Able to Adapt, Manage and Cope Within Civilian Life",tasks:[{name:"Plan your release",description:"Plan your release description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Create a My VAC account",description:"Create a My VAC account description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Submit a request for release",description:"Submit a request for release description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Attend a Long Term Planning Seminar",description:"Attend a Long Term Planning Seminar description.",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Calculate leave to determine how to use your remaining leave",description:"Calculate leave to determine how to use your remaining leave description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Plan your remaining leave days",description:"Plan your remaining leave days description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Participate in your first CAF transition interview",description:"Participate in your first CAF transition interview description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Maintain a file of all important documents and certificates for ready reference",description:"Maintain a file of all important documents and certificates for ready reference description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"View online SCAN videos and/or attend local SCAN seminars",description:"View online SCAN videos and/or attend local SCAN seminars description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Make an appointment with your orderly room of your unit to complete Out-Clearance",description:"Make an appointment with your orderly room of your unit to complete Out-Clearance description.",dueDate:F,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Complete the Enhanced Transition Training through the DLN",description:"Complete the Enhanced Transition Training through the DLN description.",dueDate:D,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Request your pension package thirty days prior to release",description:"Request your pension package thirty days prior to release. Complete and send your pension package as soon as possible afterwards",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Participate in a VAC Transition Interview",description:"Participate in a VAC Transition Interview description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Ask for a copy of your Personnel file",description:"Ask for a copy of your Personnel file description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Complete an exit survey",description:"Complete an exit survey description.",dueDate:P,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Confirm Receipt of your pension forms",description:"Confirm Receipt of your pension forms description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Participate in your Final Release Interview",description:"Participate in your Final Release Interview description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Plan and participate in your Depart with Dignity ceremony",description:"Plan and participate in your Depart with Dignity ceremony description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Establish civilian wardrobe for work",description:"Establish civilian wardrobe for work description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Meet with a notary or lawyer to draft a power of attorney",description:"Meet with a notary or lawyer to draft a power of attorney description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Meet with a notary or lawyer to write a will",description:"Meet with a notary or lawyer to write a will description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Maintain a healthy lifestyle plan",description:"Maintain a healthy lifestyle plan (Personal Support Program) description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""},{name:"Identify extenuating family circumstances",description:"Identify extenuating family circumstances description.",dueDate:A,taskStatus:"",priority:"",memberNotes:"",advisorNotes:"",attachedFiles:""}]}],M={phone:"613-445-9876",fullAddress:"44 Mt Hope Rd, Petawawa, ON K8H 3P1",email:"mytransitioncontact@email.ca",preferredLanguageWritten:"English",preferredLanguageSpoken:"English",emailNotifications:"On",notifyAboutTA:!0};function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"development",e=new _["c"]({environment:t,models:{account:_["a"]},routes:function(){this.namespace="api",this.get("/member/plan",(function(){return new _["b"](200,{},T)})),this.get("/member/plan/firstvisit",(function(t){var e=t.db.accounts[0].notifyAboutTA;e&&t.accounts.first().update({notifyAboutTA:!1});var a={firstVisit:e};return new _["b"](200,{},a)})),this.get("/member/account",(function(t){return t.db.accounts[0]})),this.post("/member/account",(function(t,e){return t.accounts.first().update(JSON.parse(e.requestBody)),new _["b"](200)}))},seeds:function(t){t.create("account",M)}});return e}i["a"].config.productionTip=!1,i["a"].prototype.axios=N.a,x("production"),new i["a"]({router:C,render:function(t){return t(l)}}).$mount("#app")},"62cb":function(t,e,a){},ad1b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"par iparys_inherited"},[a("div",{staticClass:"global-header"},[a("header",[t._m(0),t._m(1),a("Breadcrumb")],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"wb-bnr"}},[a("div",{staticClass:"row"},[a("section",{staticClass:"col-xs-3 col-sm-12 pull-right text-right",attrs:{id:"wb-lng","aria-labelledby":"lang-title"}},[a("h2",{staticClass:"wb-inv",attrs:{id:"lang-title"}},[t._v("Language selection")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("ul",{staticClass:"list-inline mrgn-bttm-0"},[a("li",[a("a",{attrs:{lang:"fr",href:"https://translate.google.com/translate?sl=en&tl=fr&u=https://code-for-canada.github.io/transition-centre/sprints/sprint8/"}},[a("span",{staticClass:"hidden-xs"},[t._v("Français")]),a("abbr",{staticClass:"\n                          visible-xs\n                          h3\n                          mrgn-tp-sm mrgn-bttm-0\n                          text-uppercase\n                        ",attrs:{title:"Français"}},[t._v("fr")])])])])])])]),a("div",{staticClass:"brand col-xs-9 col-sm-5 col-md-4",attrs:{property:"publisher",typeof:"GovernmentOrganization"}},[a("a",{attrs:{href:"https://www.canada.ca/en.html",property:"url"}},[a("img",{attrs:{src:"https://code-for-canada.github.io/transition-centre/img/wet-boew/sig-blk-en.svg",alt:"Government of Canada",property:"logo"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"gcweb-menu",attrs:{typeof:"SiteNavigationElement","aria-labelledby":"logout-title"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"wb-inv",attrs:{id:"logout-title"}},[t._v("LOG OUT")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 pull-right text-right"},[a("a",{staticClass:"btn btn-dark",attrs:{href:"../../"}},[t._v("LOG OUT")])])])])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{id:"wb-bc",property:"breadcrumb","aria-labelledby":"breadcrumb-title"}},[a("h2",{staticClass:"wb-inv",attrs:{id:"breadcrumb-title"}},[t._v("You are here:")]),a("div",{staticClass:"container"},[a("ol",{staticClass:"breadcrumb"},t._l(t.$route.meta.breadcrumb,(function(e,i){return a("li",{key:i},[a("router-link",{attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)])])},r=[],o=a("2877"),c={},l=Object(o["a"])(c,s,r,!1,null,null,null),d=l.exports,u={name:"Header",components:{Breadcrumb:d}},p=u,m=(a("43e0"),Object(o["a"])(p,i,n,!1,null,"44d40fc5",null));e["a"]=m.exports},ad6e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-container"},[a("footer",{attrs:{id:"wb-info"}},[a("div",{staticClass:"landscape"},[a("nav",{staticClass:"container wb-navcurr",attrs:{"aria-labelledby":"about-gov-title"}},[a("h2",{staticClass:"wb-inv",attrs:{id:"about-gov-title"}},[t._v("About government")]),a("ul",{staticClass:"list-unstyled colcount-sm-2 colcount-md-3"},[a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/contact.html"}},[t._v("Contact us")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/government/dept.html"}},[t._v("Departments and agencies")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/government/publicservice.html"}},[t._v("Public service and military")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/news.html"}},[t._v("News")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/government/system/laws.html"}},[t._v("Treaties, laws and regulations")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/transparency/reporting.html"}},[t._v("Government-wide reporting")])]),a("li",[a("a",{attrs:{href:"https://pm.gc.ca/eng"}},[t._v("Prime Minister")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/government/system.html"}},[t._v("How government works")])]),a("li",[a("a",{attrs:{href:"https://open.canada.ca/en/"}},[t._v("Open government")])])])])]),a("div",{staticClass:"brand"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("nav",{staticClass:"col-md-9 col-lg-10 ftr-urlt-lnk",attrs:{"aria-labelledby":"about-site-title"}},[a("h2",{staticClass:"wb-inv",attrs:{id:"about-site-title"}},[t._v("About this site")]),a("ul",[a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/social.html"}},[t._v("Social media")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/mobile.html"}},[t._v("Mobile applications")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/newsite.html"}},[t._v("About Canada.ca")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/transparency/terms.html"}},[t._v("Terms and conditions")])]),a("li",[a("a",{attrs:{href:"https://www.canada.ca/en/transparency/privacy.html"}},[t._v("Privacy")])])])]),a("div",{staticClass:"col-xs-6 visible-sm visible-xs tofpg"},[a("a",{attrs:{href:"#wb-cont"}},[t._v("Top of page "),a("span",{staticClass:"glyphicon glyphicon-chevron-up"})])]),a("div",{staticClass:"col-xs-6 col-md-3 col-lg-2 text-right"},[a("img",{attrs:{src:"https://code-for-canada.github.io/transition-centre/img/wet-boew/wmms-blk.svg",alt:"Symbol of the Government of Canada"}})])])])])])])}],s=(a("e1df"),a("2877")),r={},o=Object(s["a"])(r,i,n,!1,null,"270189a4",null);e["a"]=o.exports},af55:function(t,e,a){"use strict";a("deb5")},d52b:function(t,e,a){},deb5:function(t,e,a){},e1df:function(t,e,a){"use strict";a("d52b")}});
//# sourceMappingURL=app.fea14aae.js.map