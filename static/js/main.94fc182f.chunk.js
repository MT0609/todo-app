(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/task.99fe34de.png"},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/doing.4a10b842.png"},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/complete.dc2fd78b.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(18),n(19),n(7)),i=n(1),u=function(e){return{type:"ADD_TODO",payload:e}},s=function(e){return{type:"ADD_INPROGRESS",payload:e}},d=function(e){return{type:"ADD_COMPLETED",payload:e}};n(26);var m=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1];return o.a.createElement("div",{id:"form"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault();r.match(/^[0-9a-zA-Z]+/g)&&e.add(r)}},o.a.createElement("input",{type:"text",placeholder:"add to-do item...",value:r,onChange:function(e){c(e.target.value)},autoFocus:"true"}),o.a.createElement("input",{type:"submit",value:"Submit"})))};n(27);var E=function(e){var t=e.list,a=e.addNextStage,r=e.remove,c=function(e,t,n){a&&a(e,t,n)};return o.a.createElement("div",{id:"todo-box"},o.a.createElement("img",{alt:"task",src:n(28)}),o.a.createElement("div",null,o.a.createElement("h1",null,"TO-DO"),o.a.createElement("div",{className:"task-list"},t.map((function(e){return o.a.createElement("div",null,o.a.createElement("div",{key:e.id},e.id," ",e.content),o.a.createElement("button",{onClick:function(){return c(e,"todo","progress")}},"PROGRESS"),o.a.createElement("button",{onClick:function(){return c(e,"todo","complete")}},"COMPLETE"),o.a.createElement("button",{onClick:function(){return function(e){r&&r(e,"todo")}(e)}},"DELETE"))})))))};n(29);var p=function(e){var t=e.list,a=e.addNextStage,r=e.remove,c=function(e,t,n){a&&a(e,t,n)};return o.a.createElement("div",{id:"progress-box"},o.a.createElement("img",{alt:"task",src:n(30)}),o.a.createElement("div",null,o.a.createElement("h1",null,"IN PROGRESS"),o.a.createElement("div",{className:"task-list"},t.map((function(e){return o.a.createElement("div",null,o.a.createElement("div",null,e.id," ",e.content),o.a.createElement("button",{onClick:function(){return c(e,"progress","todo")}},"TO-DO"),o.a.createElement("button",{onClick:function(){return c(e,"progress","complete")}},"COMPLETE"),o.a.createElement("button",{onClick:function(){return function(e){r&&r(e,"progress")}(e)}},"DELETE"))})))))};n(31);var f=function(e){var t=e.list,a=e.remove,r=e.backStage,c=function(e,t,n){r&&r(e,t,n)};return o.a.createElement("div",{id:"complete-box"},o.a.createElement("img",{alt:"task",src:n(32)}),o.a.createElement("div",null,o.a.createElement("h1",null,"COMPLETED"),o.a.createElement("div",{className:"task-list"},t.map((function(e){return o.a.createElement("div",null,o.a.createElement("div",null,e.id," ",e.content),o.a.createElement("button",{onClick:function(){return c(e,"complete","todo")}},"TO-DO"),o.a.createElement("button",{onClick:function(){return c(e,"complete","progress")}},"PROGRESS"),o.a.createElement("button",{onClick:function(){return t=e,void(a&&a(t,"complete"));var t}},"DELETE"))})))))};n(33);var g=function(){var e=Object(a.useState)(parseInt(localStorage.getItem("count"))||0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(i.c)((function(e){return e.todos})),g=Object(i.c)((function(e){return e.inProgress})),O=Object(i.c)((function(e){return e.completed})),v=Object(i.b)(),S=function(e,t,n){"todo"===t?"progress"===n?v(s(e)):"complete"===n&&v(d(e)):"progress"===t?"complete"===n?v(d(e)):"todo"===n&&v(u(e)):"progress"===n?v(s(e)):"todo"===n&&v(u(e)),b(e,t)},b=function(e,t){v("todo"===t?{type:"REMOVE_TODO",payload:e}:"progress"===t?function(e){return{type:"REMOVE_PROGRESS",payload:e}}(e):function(e){return{type:"REMOVE_COMPLETE",payload:e}}(e))};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(m,{add:function(e){v(u({id:n,content:e})),r(n+1),localStorage.setItem("count",n+1)}})),o.a.createElement("div",{id:"task-boxes"},o.a.createElement(E,{list:c,addNextStage:S,remove:b}),o.a.createElement(p,{list:g,addNextStage:S,remove:b}),o.a.createElement(f,{list:O,backStage:S,remove:b})))};var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(2),S=n(3),b=JSON.parse(localStorage.getItem("todo"))||[],y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return e=[].concat(Object(S.a)(e),[t.payload]),localStorage.setItem("todo",JSON.stringify(e)),e;case"REMOVE_TODO":return e=e.filter((function(e){return e.id!==t.payload.id})),localStorage.setItem("todo",JSON.stringify(e)),e;default:return e}},D=JSON.parse(localStorage.getItem("inProgress"))||[],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INPROGRESS":return e=[].concat(Object(S.a)(e),[t.payload]),localStorage.setItem("inProgress",JSON.stringify(e)),e;case"REMOVE_PROGRESS":return e=e.filter((function(e){return e.id!==t.payload.id})),localStorage.setItem("inProgress",JSON.stringify(e)),e;default:return e}},k=JSON.parse(localStorage.getItem("complete"))||[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMPLETED":return e=[].concat(Object(S.a)(e),[t.payload]),localStorage.setItem("complete",JSON.stringify(e)),e;case"REMOVE_COMPLETE":return e=e.filter((function(e){return e.id!==t.payload.id})),localStorage.setItem("complete",JSON.stringify(e)),e;default:return e}},_=Object(v.b)({todos:y,inProgress:h,completed:N}),R=Object(v.c)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:R},o.a.createElement(O,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.94fc182f.chunk.js.map