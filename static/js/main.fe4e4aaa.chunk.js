(this.webpackJsonpfronttst=this.webpackJsonpfronttst||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(44),s=c.n(a),i=(c(51),c(2)),r=c(9),o=c(3),l=c(4),j=c(17),d=c.n(j),b=c(0),u=Object(i.g)((function(e){var t=Object(n.useState)({selectedFile:null}),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(null),r=Object(l.a)(i,2),o=r[0],j=r[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0438"}),Object(b.jsxs)("div",{children:[o&&Object(b.jsx)("img",{style:{width:"100px"},src:o,alt:"avatar"}),Object(b.jsx)("input",{type:"file",onChange:function(e){s({selectedFile:e.target.files[0]})}}),Object(b.jsx)("button",{onClick:function(){var t=new FormData;t.append("avatar",a.selectedFile,a.selectedFile.name),console.log(a.selectedFile),d.a.post("".concat(h,"/upload"),t).then((function(t){e.getter("".concat(h,"/")+t.data),j("".concat(h,"/")+t.data),console.log(t.data)})).catch((function(e){console.log(e)}))},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c!"})]}),a.selectedFile?Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{children:"File INFO:"}),Object(b.jsxs)("p",{children:["File Name: ",a.selectedFile.name]}),Object(b.jsxs)("p",{children:["File Type: ",a.selectedFile.type]}),Object(b.jsxs)("p",{children:["Last Modified:"," ",a.selectedFile.lastModifiedDate.toDateString()]})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("h4",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u043c \u043a\u0430\u043a \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})]})]})})),h="https://tst.matus.keenetic.name",O=d.a.create({baseURL:h,headers:{"Access-Control-Allow-Origin":"*"}}),m=Object(i.g)((function(){var e=Object(n.useState)({checked:!1}),t=Object(l.a)(e,2),c=t[0],a=t[1];console.log(c);var s=/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;return Object(b.jsxs)("div",{style:{display:"grid",justifyContent:"center"},children:[c&&c.login&&Object(b.jsx)(i.a,{to:"/login"}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h5",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),Object(b.jsx)("input",{name:"email",style:{width:"80%"},type:"email",onChange:function(e){a(Object(o.a)(Object(o.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))}}),c?c.busy&&Object(b.jsx)("h6",{style:{color:"red"},children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"}):a(Object(o.a)(Object(o.a)({},c),{},{busy:!1})),c?c.emailIsBad&&Object(b.jsx)("h6",{style:{color:"red"},children:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"}):a(Object(o.a)(Object(o.a)({},c),{},{busy:!1}))]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"container mt-2",children:[Object(b.jsx)("h5",{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("input",{name:"password",style:{width:"80%"},type:c.checked?"text":"password",onChange:function(e){a(Object(o.a)(Object(o.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))}}),Object(b.jsx)("input",{style:{margin:10},type:"checkbox",readOnly:!0,onClick:function(){a(Object(o.a)(Object(o.a)({},c),{},{checked:!c.checked}))},checked:c.checked})]}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h5",{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("input",{name:"confirmPass",style:{width:"80%"},type:c.checked?"text":"password",onChange:function(e){a(Object(o.a)(Object(o.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))}})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(u,{getter:function(e){a(Object(o.a)(Object(o.a)({},c),{},{ava:e}))}})}),c?c.notEquals&&Object(b.jsx)("h6",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u0438  \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"}):a(Object(o.a)(Object(o.a)({},c),{},{busy:!1})),Object(b.jsx)("div",{style:{margin:10},children:Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){c&&s.test(c.email)?c.password&&c.password===c.confirmPass?O.get("users/".concat(c.email)).then((function(e){e.data[0]?a(Object(o.a)(Object(o.a)({},c),{},{busy:!0})):(console.log(" \u0432\u0440\u043e\u0434\u0435 \u043d\u043e\u0440\u043c",c),O.post("users/".concat(c.email),{name:c.email,password:c.password,avatar:c.ava}).then((function(e){console.log(e),a(Object(o.a)(Object(o.a)({},c),{},{login:!0}))})))})):(console.log("\u043f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"),a(Object(o.a)(Object(o.a)({},c),{},{notEquals:!0}))):(console.log("email \u0445\u0443\u0435\u0432\u044b\u0439"),a(Object(o.a)(Object(o.a)({},c),{},{emailIsBad:!0})))},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]})})),x=Object(i.g)((function(){var e=Object(n.useState)({checked:!1}),t=Object(l.a)(e,2),c=t[0],a=t[1],s=function(e){a(Object(o.a)(Object(o.a)({},c),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{children:[c&&c.redirect&&Object(b.jsx)(i.a,{to:"/user_page/".concat(c.userId," ")}),Object(b.jsx)("div",{style:{fontSize:"200%",display:"flex",justifyContent:"center",margin:10},children:"\u0412\u0425\u041e\u0414"}),Object(b.jsxs)("div",{style:{display:"grid",justifyContent:"center"},children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h5",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"}),Object(b.jsx)("input",{name:"email",type:"email",style:{width:"80%"},onChange:s})]}),Object(b.jsxs)("div",{className:"container mt-2",children:[Object(b.jsx)("h5",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("input",{name:"password",style:{width:"80%"},type:c.checked?"text":"password",onChange:s}),Object(b.jsx)("input",{style:{margin:10},type:"checkbox",readOnly:!0,onClick:function(){a(Object(o.a)(Object(o.a)({},c),{},{checked:!c.checked}))},checked:c.checked})]}),Object(b.jsxs)("div",{style:{margin:10},children:[c&&c.error&&Object(b.jsx)("div",{style:{color:"red",marginBottom:10},children:c.message}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){O.get("users/".concat(c.email,"/").concat(c.password)).then((function(e){void 0===e.data[0]&&a(Object(o.a)(Object(o.a)({},c),{},{error:!0})),e.data[0]&&"ok"===e.data[0].password?(document.cookie='{"authorized":true,"userId":'.concat(e.data[0].id,"}; max-age=3000; secure"),a(Object(o.a)(Object(o.a)({},c),{},{redirect:!0,userId:e.data[0].id}))):a(Object(o.a)(Object(o.a)({},c),{},{error:!0,message:"email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439"}))})).catch(a(Object(o.a)(Object(o.a)({},c),{},{error:!0,message:"\u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043f\u0440\u0438\u0441\u043b\u0430\u043b \u043e\u0442\u0432\u0435\u0442\u0430"})))},children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})),g=(c(79),c.p+"static/media/home.f9904ecc.svg"),p=c.p+"static/media/logout.f0f14280.svg",f=c.p+"static/media/login.35bcfe88.svg",v=c.p+"static/media/user.c1ce2fb2.svg",k=Object(i.g)((function(e){var t=e.history,c=e.location,n="";n=""===document.cookie?'{"authorized":false}':JSON.parse(document.cookie);var a=window.matchMedia("(max-width: 540px)").matches;return Object(b.jsxs)("header",{className:"head",children:[Object(b.jsx)("span",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light header",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsxs)("h2",{style:{marginTop:"0.5rem"},children:[Object(b.jsx)("span",{role:"img","aria-label":"iconNotTort",children:"\u26d4"})," IT \u043d\u0435 \u0442\u043e\u0440\u0442"]}),Object(b.jsx)("div",{className:"navbar-expand",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:a?Object(b.jsx)("span",{className:"nav-link",onClick:function(){t.push("/")},children:Object(b.jsx)("img",{src:g,alt:"homeImage"})}):Object(b.jsx)("span",{className:"/"===c.pathname?"nav-link active":"nav-link","aria-current":"page",onClick:function(){t.push("/")},children:"\u0414\u043e\u043c\u043e\u0439"})}),n.authorized&&Object(b.jsx)("li",{className:"nav-item",children:a?Object(b.jsx)("span",{className:"nav-link",onClick:function(){t.push("/profile")},children:Object(b.jsx)("img",{src:v,className:"headerNav",alt:""})}):Object(b.jsx)("span",{className:"/profile"===c.pathname?"nav-link active":"nav-link","aria-current":"page",onClick:function(){t.push("/profile")},children:"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})}),!n.authorized&&Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("span",{className:"/register"===c.pathname?"nav-link active":"nav-link","aria-current":"page",onClick:function(){t.push("/register")},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(b.jsx)("li",{className:"nav-item",children:a?Object(b.jsx)("span",{className:"nav-link",onClick:n.authorized?function(){t.push(""),document.cookie='{authorized:false,"userId":1}; max-age=0; secure'}:function(){t.push("/login")},children:Object(b.jsx)("img",{className:"headerNav",src:n.authorized?p:f,alt:"logoutImage"})}):Object(b.jsx)("span",{className:"/login"===c.pathname?"nav-link active":"nav-link","aria-current":"page",onClick:n.authorized?function(){t.push(""),document.cookie='{authorized:false,"userId":1}; max-age=0; secure'}:function(){t.push("/login")},children:n.authorized?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438"})})]})})]})})}),Object(b.jsx)("hr",{})]})})),N=(c(80),c(18)),y=c.n(N),I=Object(i.g)((function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(l.a)(s,2),o=r[0],j=r[1],d=Object(n.useState)(!1),u=Object(l.a)(d,2),h=u[0],m=u[1],x=Object(n.useState)(!1),g=Object(l.a)(x,2),p=g[0],f=g[1],v=Object(i.f)().id,k=function(){O.get("/myArticles/".concat(v)).then((function(e){j(e.data)}))};return Object(n.useEffect)(k,[v]),Object(n.useEffect)((function(){0!==o.length||p||f(!0)}),[o.length,p]),Object(b.jsxs)("div",{className:"container",children:[0===o.length&&Object(b.jsx)(y.a,{type:"Rings",color:"#00BFFF",height:100,width:100,timeout:3e3}),c&&Object(b.jsx)(i.a,{to:"/builder/".concat(v)}),h&&Object(b.jsx)(i.a,{to:"/one_article/".concat(h.id)}),Object(b.jsx)("h2",{children:"\u0412\u0430\u0448\u0438 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(b.jsx)("div",{className:"container align-items-end",children:0!==o.length&&o.map((function(e){return Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col articlesRow",children:[Object(b.jsx)("span",{className:"col nameArticle",children:e.heading}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return m({id:e.id})},className:"btn btn-secondary col UAButtonSee",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})}),Object(b.jsx)("div",{className:"deleteButton",children:Object(b.jsx)("button",{className:"btn btn-danger col UAButton",onClick:function(){return function(e){O.delete("/articles/".concat(v),{data:{heading:e.heading}}).then((function(e){k()}))}(e)},children:"  X"})})]})},e.id)}))}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return a(!0)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"})]})})),C=(c(99),c(15)),S=(c(109),Object(i.g)((function(e){var t=Object(n.useState)(e.set||!1),c=Object(l.a)(t,2),a=c[0],s=c[1];return a&&setTimeout((function(){return s(!1)}),3e3),Object(b.jsx)("span",{className:a?"messageWrapper":"messageWrapperNo",children:Object(b.jsxs)("div",{className:e.error?"messageBodyError":"messageBodyMessage",children:[Object(b.jsx)("span",{className:"messageHeader",children:e.header}),Object(b.jsx)("div",{className:"messageContent",children:e.body})]})})}))),w=Object(i.g)((function(e){var t=Object(n.useState)({}),c=Object(l.a)(t,2),a=c[0],s=c[1],j=Object(n.useState)(!1),d=Object(l.a)(j,2),u=d[0],h=d[1],m=Object(n.useState)(void 0),x=Object(l.a)(m,2),g=x[0],p=x[1],f=Object(n.useState)(void 0),v=Object(l.a)(f,2),k=v[0],N=v[1],y=Object(n.useState)(!1),I=Object(l.a)(y,2),w=I[0],D=I[1],F=Object(i.f)().userId;return Object(b.jsxs)("div",{children:[g&&Object(b.jsx)(S,{set:!0,header:"\u041e\u0428\u0418\u0411\u041a\u0410",body:g,error:!0}),k&&Object(b.jsx)(S,{set:!0,header:"\u0421\u041e\u041e\u0411\u0429\u0415\u041d\u0418\u0415",body:k}),w&&Object(b.jsx)(i.a,{to:"/user_page/".concat(F)}),Object(b.jsx)("div",{className:"btn btn-primary",style:{margin:"10px",cursor:"pointer",fontWeight:"bold"},onClick:function(){D(!0)},children:"\u041f\u0435\u0440\u0435\u0442\u0438 \u043a \u043c\u043e\u0438\u043c \u0441\u0442\u0430\u0442\u044c\u044f\u043c"}),Object(b.jsxs)("div",{style:{marginLeft:"10px"},children:["\u0417\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e ",Object(b.jsx)("input",{type:"checkbox",checked:u,onChange:function(){return h(!u)}})]}),Object(b.jsx)("input",{autoComplete:"off",style:{marginLeft:"10px",width:"40vmin"},type:"text",id:"heading",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",onChange:function(e){N(void 0),p(void 0),s(Object(o.a)(Object(o.a)({},a),{},Object(r.a)({},e.target.id,e.target.value.toString())))},value:a&&a.heading?a.heading:""}),Object(b.jsxs)("div",{id:"wrapper",children:[Object(b.jsx)("div",{id:"header",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 MD \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443 \u0437\u0434\u0435\u0441\u044c"}),Object(b.jsxs)("div",{id:"body",children:[Object(b.jsx)("span",{id:"a",children:Object(b.jsx)("textarea",{name:"text",id:"input",onChange:function(e){N(void 0),p(void 0),s(Object(o.a)(Object(o.a)({},a),{},Object(r.a)({},e.target.name,e.target.value.toString())))},value:a?a.text:""})}),Object(b.jsx)("span",{id:"b",children:Object(b.jsx)(C.a,{id:"output",markdown:a.text,options:{emoji:!0}})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){a.heading&&a.text?(p(void 0),u?O.put("/articles/".concat(F),{heading:a.heading.trim(),text:a.text.trim()}).then((function(e){console.log("\u041e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:",e.status,e.data.text),N("\u0437\u0430\u043c\u0435\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u0434\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e")})):O.post("/articles/".concat(F),{heading:a.heading.trim(),text:a.text.trim()}).then((function(e){console.log("\u041e\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:",e.status,e.data.text),N("\u0441\u0442\u0430\u0442\u044c\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430")}))):p("....\u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u0443 \u0441\u0442\u0430\u0442\u044c\u044e"})})]})]})]})})),D=c(19),F=(c(110),Object(i.g)((function(e){var t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(null),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(n.useState)(!1),u=Object(l.a)(d,2),h=u[0],m=u[1],x=Object(n.useState)(!1),g=Object(l.a)(x,2),p=g[0],f=g[1],v=Object(n.useState)(!1),k=Object(l.a)(v,2),N=k[0],y=k[1],I="";I=""===document.cookie?'{"authorized":false}':JSON.parse(document.cookie),Object(n.useEffect)((function(){O.get("/likes/".concat(e.articleID)).then((function(e){s(e.data)})).catch((function(e){return console.log(e)})),O.get("/dislikes/".concat(e.articleID)).then((function(e){j(e.data)})).catch((function(e){return console.log(e)})),O.get("/dislike/".concat(e.articleID,"/").concat(I.userId)).then((function(e){y(e.data.already)})).catch((function(e){return console.log(e)})),O.get("/like/".concat(e.articleID,"/").concat(I.userId)).then((function(e){f(e.data.already)})).catch((function(e){return console.log(e)}))}),[e.articleID,h,I.userId]);var C=I.userId===e.userID;return Object(b.jsx)("div",{children:I.authorized&&Object(b.jsxs)("div",{className:"likesBlock container",children:[Object(b.jsxs)("span",{disabled:C,onClick:p?function(){O.delete("/likes/".concat(e.articleID,"/").concat(I.userId,"/").concat(e.userID)).then((function(e){m(!h),console.log(e.data)})).catch((function(e){return console.log(e)}))}:function(){O.post("/likes/".concat(e.articleID),{userID:e.userID,fromUserID:I.userId}).then((function(e){m(!h)})).catch((function(e){return console.log(e)}))},className:"like",children:["\u2764 ",a]}),Object(b.jsxs)("span",{disabled:C,onClick:N?function(){O.delete("/dislikes/".concat(e.articleID,"/").concat(I.userId,"/").concat(e.userID)).then((function(e){m(!h),console.log(e.data)})).catch((function(e){return console.log(e)}))}:function(){O.post("/dislikes/".concat(e.articleID),{userID:e.userID,fromUserID:I.userId}).then((function(e){m(!h),console.log(e.data)})).catch((function(e){return console.log(e)}))},className:"dislike",children:["\ud83d\udc4e ",o]})]})})}))),z=(c(111),function(e){return e?e.replace("T","   \u0412\u0440\u0435\u043c\u044f: ").split(".")[0]:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0434\u0430\u0442\u0435 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),B=(c(112),Object(i.g)((function(e){var t=e.history,c=Object(n.useState)(null),a=Object(l.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(null),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(n.useState)(1),h=Object(l.a)(u,2),m=h[0],x=h[1],g=Object(n.useState)(!1),p=Object(l.a)(g,2),f=p[0],v=p[1],k=Object(n.useState)(!1),N=Object(l.a)(k,2),I=N[0],S=N[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){S(!0)}),3e3);O("/users").then((function(e){d(e.data)})).catch((function(e){return console.log(e)})),O.get("/articles/".concat(m)).then((function(t){i(t.data),clearTimeout(e),S(!1),0===t.data.length?(v(!0),x(m-1)):t.data.length<9&&v(!0)})).catch((function(e){return console.log(e)}))}),[m]),Object(b.jsxs)("div",{className:"allHome",children:[Object(b.jsx)("div",{className:"container mb-3 homeWrapper",children:Object(b.jsx)("h5",{children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u0430\u044f"})}),Object(b.jsx)("div",{className:"row homeRow",children:s&&j?s.map((function(e){return Object(b.jsx)("div",{className:"homeColumn",children:Object(b.jsxs)("div",{className:"card mb-2 homeCard",children:[Object(b.jsx)("img",{src:void 0!==j.filter((function(t){return t.id===e.userid}))[0]?j.filter((function(t){return t.id===e.userid}))[0].avatar:"https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",style:{width:"80px",marginLeft:"0.5rem",marginTop:"0.5rem",borderRadius:"30px"},className:"card-img-top imgHome",alt:"..."}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title text-danger ",children:e.heading}),Object(b.jsx)(C.a,{className:"card-text",style:{height:"40vmin",overflow:"auto"},id:"output",markdown:e.body,options:{emoji:!0}}),Object(b.jsx)("button",{onClick:function(){t.push("/one_article/".concat(e.id)),window.scroll(0,0)},className:"btn btn-primary",children:"\u0427\u0438\u0442\u0430\u0442\u044c \u0446\u0435\u043b\u0438\u043a\u043e\u043c"}),Object(b.jsx)("div",{children:z(e.date)})]}),Object(b.jsx)(F,{articleID:e.id,userID:e.userid})]})},e.id+e.heading)})):Object(b.jsxs)("div",{className:"loader",children:[Object(b.jsx)(y.a,{type:"Rings",color:"#00BFFF",height:100,width:100,timeout:3e3}),I&&Object(b.jsx)("div",{className:"container plug",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"plugHead",children:Object(b.jsx)("h4",{children:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430"})}),Object(b.jsx)("div",{children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u044d\u0442\u0443 \u043d\u0430\u0434\u043f\u0438\u0441\u044c, \u0442\u043e \u0432\u0438\u0434\u0438\u043c\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u043f\u0440\u0438\u0441\u043b\u0430\u043b \u043e\u0442\u0432\u0435\u0442\u0430"}),Object(b.jsx)("div",{children:"\u0412 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u044d\u0442\u043e \u0440\u0435\u0448\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"}),Object(b.jsx)("div",{children:"\u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u043d\u0435...."})]})})]})}),!f&&Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return x(m+1)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"}),m>=2&&Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){x(m-1),v(!1)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u0438\u0434\u0443\u0449\u0438\u0435"})]})}))),E=(c(113),function(e){var t=Object(n.useState)(void 0),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(l.a)(i,2),d=j[0],u=j[1],h=Object(n.useState)({}),m=Object(l.a)(h,2),x=m[0],g=m[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),v=f[0],k=f[1],N=Object(n.useState)(!1),y=Object(l.a)(N,2),I=y[0],C=y[1],S="";S=""===document.cookie?'{"authorized":false}':JSON.parse(document.cookie);Object(n.useEffect)((function(){O.get("/commentsMitUsers/".concat(e.articleID)).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[e.articleID,v]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return C(!I)},children:I?"\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),I&&Object(b.jsxs)("div",{className:"container bg-body ma-3",children:[" \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",a&&a.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("img",{className:"userImg",src:e.avatar,alt:""}),e.name,Object(b.jsx)("span",{className:"dateCommentary",children:z(e.date)})]}),Object(b.jsx)("div",{className:"comment",children:Object(b.jsx)("span",{className:"container ma-3",children:e.comment})})]},e.name+90*Math.random())})),S.authorized&&Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return u(!d)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),d&&Object(b.jsxs)("div",{children:[Object(b.jsx)("textarea",{name:"text",id:"input",className:"inputArea",onChange:function(e){g(Object(o.a)(Object(o.a)({},x),{},Object(r.a)({},e.target.name,e.target.value.toString())))},value:x?x.text:""}),Object(b.jsx)("button",{onClick:function(){O.post("/comments/".concat(e.articleID),{userID:S.userId,comment:x.text}).then((function(e){console.log(e.data),g(""),k(!v)})).catch((function(e){return console.log(e)}))},children:"\u041e\u0442\u043e\u0441\u043b\u0430\u0442\u044c"})]})]})]})}),T=Object(i.g)((function(){var e="";e=""===document.cookie?'{"authorized":false}':JSON.parse(document.cookie);var t=Object(i.f)().id,c=Object(n.useState)({}),a=Object(l.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){O.get("/article/".concat(t)).then((function(e){r(e.data[0])}))}),[t]),Object(b.jsxs)("div",{children:[s&&s.userid&&Object(b.jsx)(D.b,{to:e.authorized&&(e.userId,s.userid,1)?"/user_page/".concat(e.userId):"/",className:"btn btn-primary",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043c\u043e\u0438\u043c \u0441\u0442\u0430\u0442\u044c\u044f\u043c"}),Object(b.jsx)(C.a,{id:"output",markdown:s.body,options:{emoji:!0}}),Object(b.jsx)(E,{articleID:t}),Object(b.jsx)(B,{})]})})),A=function(){var e=function(){return JSON.parse(document.cookie)?JSON.parse(document.cookie):{authorized:!1}},t=e(),c=Object(n.useState)(null),a=Object(l.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(!1),o=Object(l.a)(r,2),j=o[0],d=o[1],h=Object(n.useState)(null),m=Object(l.a)(h,2),x=m[0],g=m[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),v=f[0],k=f[1];return Object(n.useEffect)((function(){var t=e();t&&t.userId&&O.get("/user/".concat(t.userId)).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[t.userId,v]),Object(b.jsx)("div",{children:s&&Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{style:{width:"80px"},src:s[s.length-1].avatar,alt:"ava"}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return d(!j)},children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"}),j&&Object(b.jsx)(u,{getter:g}),Object(b.jsxs)("div",{children:["\u0438\u043c\u044f: ",s[s.length-1].name]}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){O.put("/users/".concat(s[s.length-1].name),{newName:s[s.length-1].name,avatar:x||s[s.length-1].avatar}).then((function(e){console.log(e.data),k(!v)})).catch((function(e){return console.log(e)}))},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};c(114);var _=Object(i.g)((function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(k,{}),Object(b.jsx)("div",{className:"plug",children:"plug"}),Object(b.jsx)(i.b,{path:"/user_page/:id",component:I}),Object(b.jsx)(i.b,{path:"/one_article/:id",component:T}),Object(b.jsx)(i.b,{exact:!0,path:"/",component:B}),Object(b.jsx)(i.b,{path:"/register",component:m}),Object(b.jsx)(i.b,{path:"/login",component:x}),Object(b.jsx)(i.b,{path:"/builder/:userId",component:w}),Object(b.jsx)(i.b,{path:"/upload",component:u}),Object(b.jsx)(i.b,{path:"/profile",component:A})]})})),J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};s.a.render(Object(b.jsx)(D.a,{basename:"/workspace",children:Object(b.jsx)(_,{})}),document.getElementById("root")),J()},51:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},99:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.fe4e4aaa.chunk.js.map