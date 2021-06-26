(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plan"],{"159b":function(t,e,s){var a=s("da84"),i=s("fdbc"),r=s("17c2"),n=s("9112");for(var o in i){var l=a[o],c=l&&l.prototype;if(c&&c.forEach!==r)try{n(c,"forEach",r)}catch(d){c.forEach=r}}},"17c2":function(t,e,s){"use strict";var a=s("b727").forEach,i=s("a640"),r=i("forEach");t.exports=r?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,s){"use strict";var a=s("23e7"),i=s("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"5b00":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"view-container"}},[s("Header"),s("main",{staticClass:"container",attrs:{property:"mainContentOfPage",resource:"#wb-main",typeof:"WebPageElement"}},[s("h1",{attrs:{property:"name",id:"wb-cont",dir:"ltr"}},[t._v("My Transition Plan")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("p",[t._v(" Prepare for a successful transition to post-service life by completing the below plan and setting transition goals. ")]),s("p",[t._v(" Your Transition Advisor will help you with your transition journey. They will see updates that you make here and can send you messages. If you have any questions, your "),s("router-link",{attrs:{to:"/staff"}},[t._v("Transition Advisor")]),t._v(" is available to help you. ")],1)]),t._m(0),t._m(1)]),s("section",[s("h2",[t._v("Transition Plan tasks")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"row"},[t._m(2),s("div",{staticClass:"col-xs-12"},[s("fieldset",{staticClass:"provisional gc-chckbxrdio"},[s("ul",{staticClass:"list-unstyled lst-spcd-2"},[s("li",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.hideCompletedChecked,expression:"hideCompletedChecked"}],attrs:{type:"checkbox",id:"hide-completed-checkbox"},domProps:{checked:Array.isArray(t.hideCompletedChecked)?t._i(t.hideCompletedChecked,null)>-1:t.hideCompletedChecked},on:{change:[function(e){var s=t.hideCompletedChecked,a=e.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=t._i(s,r);a.checked?n<0&&(t.hideCompletedChecked=s.concat([r])):n>-1&&(t.hideCompletedChecked=s.slice(0,n).concat(s.slice(n+1)))}else t.hideCompletedChecked=i},function(e){return t.hide_all_completed()}]}}),s("label",{attrs:{for:"hide-completed-checkbox"}},[t._v("Hide completed tasks")])])])])])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("router-link",{attrs:{to:"/goals"}},[s("button",{staticClass:"btn btn-call-to-action",attrs:{type:"button"}},[t._v(" + Add new transition task or goal ")])])],1)]),s("div",{staticClass:"row bottom-buffer"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-6"},[t._m(3),s("button",{ref:"sort-by-domains-of-well-being",staticClass:"\n                  btn\n                  btn-default\n                  btn-do-not-round-right-corner\n                  btn-selected-dark\n                ",attrs:{type:"button"},on:{click:t.sort_by_domains_of_well_being}},[t._v(" Domains of Well-Being ")]),s("button",{ref:"sort-by-due-date",staticClass:"btn btn-default btn-do-not-round-left-corner",attrs:{type:"button"},on:{click:t.sort_by_date}},[t._v(" Due Date ")])]),s("div",{staticClass:"col-xs-6"},[s("div",{staticClass:"pull-right"},[s("router-link",{attrs:{to:"/calendar"}},[s("button",{staticClass:"btn btn-default margin-right-16",attrs:{type:"button"}},[t._v(" Calendar View ")])]),s("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v(" Save Transition Plan to PDF ")])],1)])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},t._l(t.plan,(function(e,a){return s("div",{key:a,staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"section",attrs:{name:"nrdDetails"}},[s("details",[s("summary",[s("strong",{staticStyle:{"font-size":"24px"}},[t._v(t._s(e.category))])]),t._l(e.tasks,(function(i,r){return s("div",{key:r,staticClass:"row section-striped"},[s("fieldset",{ref:"task-"+a+"-"+r,refInFor:!0,staticStyle:{"border-top":"1px solid #e5e5e5"}},[s("div",{staticClass:"col-xs-12"},[s("fieldset",{staticClass:"provisional gc-chckbxrdio",staticStyle:{"border-top":"0"}},[s("ul",{staticClass:"list-unstyled lst-spcd-2"},[s("li",{ref:"checkbox-title-"+a+"-"+r,refInFor:!0,staticClass:"checkbox"},[s("input",{ref:"complete-"+a+"-"+r,refInFor:!0,attrs:{type:"checkbox",id:"complete-"+a+"-"+r},on:{change:function(e){return t.complete_task(a,r)}}}),s("label",{staticStyle:{"font-size":"22px"},attrs:{for:"complete-"+a+"-"+r}},[s("strong",[t._v(t._s(i.name))])]),s("span",{ref:"checkbox-title-label"+a+"-"+r,refInFor:!0})])]),s("div",{staticStyle:{position:"relative",top:"-20px"}},[s("label",{staticStyle:{display:"inline-block","margin-left":"36px","padding-left":"20px","font-weight":"normal"},attrs:{for:"due-date-"+a+"-"+r}},[t._v(" Due date: ")]),t._v(" "),s("input",{attrs:{type:"date",id:"due-date-"+a+"-"+r},domProps:{value:i.dueDate}})])]),s("div",{staticClass:"section",attrs:{name:"nrdDetails"}},[s("details",{ref:"details-"+a+"-"+r,refInFor:!0},[s("summary",[t._v("More details: "+t._s(i.name))]),s("fieldset",{staticStyle:{"border-top":"0"}},[s("p",[t._v(" "+t._s(i.description)+" ")]),s("p",[t._m(4,!0),t._v(" "+t._s(e.description)+" ")])]),s("fieldset",{staticClass:"provisional gc-chckbxrdio"},[s("legend",{staticStyle:{"margin-bottom":"0px","font-size":"20px"}},[t._v(" Task status: ")]),s("ul",{staticClass:"list-unstyled lst-spcd-2"},[s("li",{staticClass:"radio"},[s("input",{ref:"mark-need-help-"+a+"-"+r,refInFor:!0,attrs:{type:"radio",id:"mark-need-help-"+a+"-"+r,name:"task-status-"+a+"-"+r}}),s("label",{attrs:{for:"mark-need-help-"+a+"-"+r}},[t._v("I need help (your Transition Advisor will be notified)")])]),s("li",{staticClass:"radio"},[s("input",{ref:"mark-complete-"+a+"-"+r,refInFor:!0,attrs:{type:"radio",id:"mark-complete-"+a+"-"+r,name:"task-status-"+a+"-"+r}}),s("label",{attrs:{for:"mark-complete-"+a+"-"+r}},[t._v("Complete")])])])]),s("fieldset",{staticClass:"provisional gc-chckbxrdio"},[s("legend",{staticStyle:{"margin-bottom":"0px","font-size":"20px"}},[t._v(" Priority: ")]),s("ul",{staticClass:"list-unstyled lst-spcd-2"},[s("li",{staticClass:"radio"},[s("input",{ref:"low-"+a+"-"+r,refInFor:!0,attrs:{type:"radio",id:"low-"+a+"-"+r,name:"priority-"+a+"-"+r}}),s("label",{attrs:{for:"low-"+a+"-"+r}},[t._v("Low")])]),s("li",{staticClass:"radio"},[s("input",{ref:"medium-"+a+"-"+r,refInFor:!0,attrs:{type:"radio",id:"medium-"+a+"-"+r,name:"priority-"+a+"-"+r}}),s("label",{attrs:{for:"medium-"+a+"-"+r}},[t._v("Medium")])]),s("li",{staticClass:"radio"},[s("input",{ref:"high-"+a+"-"+r,refInFor:!0,attrs:{type:"radio",id:"high-"+a+"-"+r,name:"priority-"+a+"-"+r}}),s("label",{attrs:{for:"high-"+a+"-"+r}},[t._v("High")])])])]),s("fieldset",{staticStyle:{"border-top":"0"}},[t._m(5,!0),t._m(6,!0),s("textarea",{directives:[{name:"model",rawName:"v-model",value:i.memberNotes,expression:"task.memberNotes"}],staticClass:"form-control",staticStyle:{"min-width":"100%"},domProps:{value:i.memberNotes},on:{input:function(e){e.target.composing||t.$set(i,"memberNotes",e.target.value)}}})]),t._m(7,!0),t._m(8,!0),s("fieldset",[s("button",{staticClass:"\n                                  btn btn-primary\n                                  min-width-100\n                                  margin-right-16\n                                ",attrs:{type:"button"},on:{click:function(e){return t.save_task(a,r)}}},[t._v(" Save ")]),s("button",{staticClass:"btn btn-default min-width-100",attrs:{type:"button"},on:{click:function(e){return t.cancel_task(a,r)}}},[t._v(" Cancel ")])])])])])])])}))],2)])])])})),0)])])]),s("Footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-6 col-md-3"},[s("div",{staticClass:"text-center well blue-section-background"},[s("p",[t._v(" You are "),s("span",{staticClass:"lead"},[s("strong",[t._v("44% complete")])]),t._v(" your plan! ")]),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-success",staticStyle:{width:"44%"},attrs:{role:"progressbar","aria-valuenow":"44","aria-valuemin":"0","aria-valuemax":"100"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-6 col-md-3"},[s("div",{staticClass:"text-center well blue-section-background"},[s("p",[s("span",{staticClass:"lead"},[s("strong",[t._v("82")])]),s("br"),t._v(" day until your transition ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-12"},[s("fieldset",[s("div",{staticClass:"dataTables_filter",attrs:{id:"wb-auto-4_filter"}},[s("label",{attrs:{for:"filter"}},[s("strong",[t._v("Keyword Filter: ")]),s("input",{attrs:{id:"filter",type:"search",placeholder:"","aria-controls":"wb-auto-4"}})])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("b",[t._v("Sort by: ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"https://www.canada.ca/en/department-national-defence/corporate/reports-publications/transition-guide/well-being-framework.html"}},[s("b",[t._v("Domain of well-being:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("b",[t._v("My notes:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[t._v(" "),s("i",[t._v("(Note: these notes will be visible to your transition advisor)")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticStyle:{"border-top":"0"}},[s("span",[s("b",[t._v("Notes from your Transition Advisor:")])]),s("p",[t._v(" You are doing great, keep up the good work! - Your Transition Advisor ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticStyle:{"border-top":"0"}},[s("span",[s("b",[t._v("Attach relevant documents:")])]),s("p",[t._v(" Attach documents related to this task to help keep them organised and share them with your Transition Advisor. ")]),s("p",[s("button",{staticClass:"btn btn-default",attrs:{type:"button"}},[t._v(" Attach Documents ")])]),s("p",[s("em",[t._v("Note: Documents attached here will also be available through the Document Centre.")])])])}],r=(s("4160"),s("159b"),s("0d03"),s("ad1b")),n=s("ad6e"),o={name:"checklist-plan",components:{Header:r["a"],Footer:n["a"]},data:function(){return{hideCompletedChecked:!0,plan:[]}},mounted:function(){this.check_if_first_visit_and_get_plan()},ready:function(){!0===this.hideCompletedChecked&&this.hide_all_completed()},methods:{check_if_first_visit_and_get_plan:function(){var t=this;this.axios.get("/api/member/plan/firstvisit").then((function(e){e.data.firstVisit?t.$router.push("/notification/bookta"):t.get_plan_items()}))["catch"]((function(t){console.log(t)}))},get_plan_items:function(){var t=this;this.axios.get("/api/member/plan").then((function(e){t.plan=e.data}))["catch"]((function(t){console.log(t)}))},save_task:function(t,e){var s=t+"-"+e,a=this.$refs["checkbox-title-label"+s][0];a.innerHTML="",this.$refs["task-"+s][0].scrollIntoView(),!0===this.$refs["mark-complete-"+s][0].checked?(this.$refs["complete-"+s][0].checked=!0,this.complete_task(t,e)):(!0===this.$refs["mark-need-help-"+s][0].checked&&(a.innerHTML+="<span class='label label-danger' style='margin-left: 16px;'><small>Need Help</small></span>"),!0===this.$refs["low-"+s][0].checked?a.innerHTML+="<span class='label label-info' style='margin-left: 16px;'><small>Low Priority</small></span>":!0===this.$refs["medium-"+s][0].checked?a.innerHTML+="<span class='label label-primary' style='margin-left: 16px;'><small>Medium Priority</small></span>":!0===this.$refs["high-"+s][0].checked&&(a.innerHTML+="<span class='label label-warning' style='margin-left: 16px;'><small>High Priority</small></span>")),this.$refs["details-"+s][0].open=!1},cancel_task:function(t,e){var s=t+"-"+e;this.$refs["task-"+s][0].scrollIntoView(),this.$refs["details-"+s][0].open=!1},hide_all_completed:function(){var t=this;this.plan.forEach((function(e,s){e.tasks.forEach((function(e,a){t.hide_completed_task(s,a)}))}))},hide_completed_task:function(t,e){var s=this.$refs["task-"+t+"-"+e][0];!0===this.hideCompletedChecked&&1===this.plan[t].tasks[e].taskStatus?s.hidden=!0:s.hidden=!1},complete_task:function(t,e){var s=t+"-"+e;!0===this.$refs["complete-"+s][0].checked?this.plan[t].tasks[e].taskStatus=1:this.clear_task_status(t,e),this.hide_completed_task(t,e)},clear_task_status:function(t,e){this.plan[t].tasks[e].taskStatus=""},sort_by_date:function(){var t=[{category:"Activities due in the next 30 days",tasks:[]},{category:"Activities due in 30 - 60 days",tasks:[]},{category:"Activities due in 60 - 90 days",tasks:[]},{category:"Activities due in more than 90 days",tasks:[]},{category:"Activities due after transition",tasks:[]}];this.plan.forEach((function(e){e.tasks.forEach((function(e){var s=e,a=new Date(s.dueDate),i=new Date,r=(a.getTime()-i.getTime())/864e5;r<=30?t[0].tasks.push(s):r<=60?t[1].tasks.push(s):r<=90?t[2].tasks.push(s):r<=120?t[3].tasks.push(s):t[4].tasks.push(s)}))})),this.plan=t,this.$refs["sort-by-domains-of-well-being"].classList.remove("btn-selected-dark"),this.$refs["sort-by-due-date"].classList.add("btn-selected-dark")},sort_by_domains_of_well_being:function(){this.get_plan_items(),this.$refs["sort-by-due-date"].classList.remove("btn-selected-dark"),this.$refs["sort-by-domains-of-well-being"].classList.add("btn-selected-dark")}}},l=o,c=(s("8e63"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,"69541a1d",null);e["default"]=d.exports},"65f0":function(t,e,s){var a=s("861d"),i=s("e8b5"),r=s("b622"),n=r("species");t.exports=function(t,e){var s;return i(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?a(s)&&(s=s[n],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},"8e63":function(t,e,s){"use strict";s("ecab")},a640:function(t,e,s){"use strict";var a=s("d039");t.exports=function(t,e){var s=[][t];return!!s&&a((function(){s.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,s){var a=s("0366"),i=s("44ad"),r=s("7b0b"),n=s("50c4"),o=s("65f0"),l=[].push,c=function(t){var e=1==t,s=2==t,c=3==t,d=4==t,u=6==t,p=7==t,f=5==t||u;return function(h,m,v,b){for(var _,k,y=r(h),g=i(y),C=a(m,v,3),w=n(g.length),x=0,$=b||o,A=e?$(h,w):s||p?$(h,0):void 0;w>x;x++)if((f||x in g)&&(_=g[x],k=C(_,x,y),t))if(e)A[x]=k;else if(k)switch(t){case 3:return!0;case 5:return _;case 6:return x;case 2:l.call(A,_)}else switch(t){case 4:return!1;case 7:l.call(A,_)}return u?-1:c||d?d:A}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},e8b5:function(t,e,s){var a=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},ecab:function(t,e,s){}}]);
//# sourceMappingURL=plan.64013e34.js.map