(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{140:function(e,t,a){e.exports=a(180)},180:function(e,t,a){"use strict";a.r(t);var r=a(58),n=a.n(r),i=a(0),o=a.n(i),s=a(11),l=a.n(s),c=a(15),u=a(112),m=a(38),d=a(113),p=a(18),b={isLoggedIn:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_LOGIN_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:!0});case"ACTION_LOGOUT":return Object(p.a)(Object(p.a)({},e),{},{isLoggedIn:!1});default:return e}},h={message:null,isError:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALERT_MESSAGE":return Object(p.a)(Object(p.a)({},e),{},{message:t.payload.message,isError:t.payload.isError});default:return e}},E={calls:[],recipients:[],loading:!1,error:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_LOAD_CALLS":return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case"ACTION_LOAD_CALLS_SUCCESS":var a=t.calls;return Object(p.a)(Object(p.a)({},e),{},{calls:a,loading:!1});case"ACTION_LOAD_RECIPIENTS_SUCCESS":var r=t.recipients;return Object(p.a)(Object(p.a)({},e),{},{recipients:r,loading:!1});case"ACTION_LOAD_CALLS_FAIL":var n=t.error;return Object(p.a)(Object(p.a)({},e),{},{calls:[],loading:!1,error:n});case"ACTION_LOAD_RECIPIENTS_FAIL":var i=t.error;return Object(p.a)(Object(p.a)({},e),{},{recipients:[],loading:!1,error:i});default:return e}},y=Object(m.combineReducers)({auth:f,dashboard:v,alert:g}),O=a(95),x=a(114),j={key:"root",blacklist:["alert"],storage:a.n(x).a};var w=a(20),S=a(27),k=a(9),C=function(){return o.a.createElement(k.a,null,o.a.createElement(k.f,{variant:"text.heading"},"About"))},I=a(14),A=a(35),N=a(36),_=a(226),F=a(118),L=a.n(F),q=Object(p.a)(Object(p.a)({},L.a),{},{colors:{primary:"#F0682F",secondary:"#004EB1",white:"#FFFFFF",base100:"#F8F9FA",base200:"#F1F3F5",base300:"#E9EDF1",base400:"#CED4DA",base500:"#ADB5BD",base600:"#868E96",base700:"#495057",base800:"#343A40",base900:"#181B1E"},fonts:{body:"Inter, system-ui, sans-serif",heading:"Mulish, system-ui, sans-serif",button:"Inter, system-ui, sans-serif",link:"Inter, system-ui, sans-serif"},fontWeights:{body:400,heading:800,button:600,link:600},fontSizes:[14,16,18,22,28,32,40],lineHeights:{body:1.5,heading:1.25},borderWidths:{button:"1px"},shadows:{small:"0 4px 8px rgba(0, 0, 0, 0.08)"},text:{body:{small:{color:"base800",fontFamily:"body",lineHeight:"body",fontWeight:"body",fontSize:0},large:{color:"base800",fontFamily:"body",lineHeight:"body",fontWeight:"body",fontSize:1}},h1:{color:"base800",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:6},h2:{color:"base800",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5},h3:{color:"base800",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:4},h4:{color:"base800",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:3},h5:{color:"base800",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:2},h6:{color:"base800",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:1}},links:{nav:{px:2,color:"base600",fontFamily:"body",lineHeight:"body",fontWeight:"link",fontSize:1,textDecoration:"none","&:hover":{color:"primary",textDecoration:"underline"}},footer:{color:"base800",fontFamily:"body",lineHeight:"body",fontWeight:"link",fontSize:0,textDecoration:"none","&:hover":{color:"primary"}},ctaLink:{color:"secondary",fontFamily:"body",lineHeight:"body",fontWeight:"link",fontSize:1,textDecoration:"none","&:hover":{color:"base600"}}},buttons:{primary:{color:"white",fontFamily:"body",fontWeight:"button",bg:"primary","&:focus":{bg:"white",color:"primary"}},secondary:{color:"primary",fontWeight:"button",fontFamily:"body",bg:"white",borderStyle:"solid",borderColor:"primary",borderWidth:"button","&:focus":{bg:"primary",color:"white"}},tertiary:{color:"primary",fontFamily:"body",fontWeight:"button",bg:"white"}},alerts:{status:{color:"white",bg:"primary"},error:{color:"white",bg:"secondary"}},content:{normal:{px:"10vh"}}}),D={title:"Dashboard",description:"Explanation of what the dashboard is, how to use it, etc. At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.",bg:q.colors.white},T={title:"The Pledge",description:"The 2020 election is rapidly approaching and it\u2019s time to motivate our extended networks to vote for Joe Biden. These conversations are often challenging - our step by step process helps you meet people where they are. Take the pledge and make a difference in this election.",bg:q.colors.white},P={heading:"Who To Call",body:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal, Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal, Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal",imageURL:"nothing"},R={heading:"Why This Works",body:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal, Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal, Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal",imageURL:"nothing"},W=[{stepID:"Step 1",primary:"Take the Pledge",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"},{stepID:"Step 2",primary:"Think about your social network",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"},{stepID:"Step 3",primary:"Choose your first 5 friends",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"},{stepID:"Step 4",primary:"Prep for your calls",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"},{stepID:"Step 5",primary:"Start making calls",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"},{stepID:"Step 6",primary:"Follow up post call",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"},{stepID:"Step 7",primary:"Keep in touch",description:"Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet. Est tation latine aliquip ideal"}],M=a(6),H=a.n(M),U=a(13),z=function(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token")},V=function(){return localStorage.getItem("access_token")},B=function(e){localStorage.setItem("access_token",e.access),localStorage.setItem("refresh_token",e.refresh)},G="http://3.138.203.41:8000/",K={fl:"Far Left",le:"Left",cl:"Center Left",m:"Middle",cr:"Center Right",ri:"Right",fr:"Far Right",uk:"Unknown"},J={re:"Registered",nr:"Not Registered",un:"Unknow"},Y={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},Z=V(),X=n.a.create({baseURL:G,timeout:5e3,headers:{Authorization:Z?"Token "+Z:null,"Content-Type":"application/json",accept:"application/json"}});X.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401===e.response.status&&t.url===G+"token/refresh/")return window.location.href="/login/",Promise.reject(e);if("token_not_valid"===e.response.data.code&&401===e.response.status&&"Unauthorized"===e.response.statusText){var a=localStorage.getItem("refresh_token");if(a){var r=JSON.parse(atob(a.split(".")[1])),n=Math.ceil(Date.now()/1e3);if(console.log(r.exp),r.exp>n)return X.post("/token/refresh/",{refresh:a}).then((function(e){return B(e.data),X.defaults.headers.Authorization="Token "+e.data.access,t.headers.Authorization="Token "+e.data.access,X(t)})).catch((function(e){console.log(e)}));console.log("Refresh token is expired",r.exp,n),window.location.href="/login/"}else console.log("Refresh token not available."),window.location.href="/login/"}return Promise.reject(e)}));var $=X,Q=function(){var e=V();if(e){var t=e.split("."),a=Object(I.a)(t,2)[1],r=window.atob(a);return console.log(r),JSON.parse(r)}};function ee(){return(ee=Object(U.a)(H.a.mark((function e(t){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"ACTION_LOAD_CALLS"}),e.next=4,$.get("calls/");case 4:a=e.sent,r=a.data,t({type:"ACTION_LOAD_CALLS_SUCCESS",calls:r}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:"ACTION_LOAD_CALLS_FAIL",error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function te(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(U.a)(H.a.mark((function e(t){var a,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"ACTION_LOAD_RECIPIENTS"}),e.next=4,$.get("recipients/");case 4:a=e.sent,r=a.data,t({type:"ACTION_LOAD_RECIPIENTS_SUCCESS",recipients:r}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),t({type:"ACTION_LOAD_RECIPIENTS_FAIL",error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(U.a)(H.a.mark((function e(t,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.user=Q().id,e.next=4,$.post("recipients/",a);case 4:return r=e.sent,e.abrupt("return",{response:r.data,isError:!1});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{response:e.t0,isError:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function ie(e,t){return oe.apply(this,arguments)}function oe(){return(oe=Object(U.a)(H.a.mark((function e(t,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.caller=Q().id,e.next=4,$.post("calls/",a);case 4:return r=e.sent,e.abrupt("return",{response:r.data,isError:!1});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{response:e.t0,isError:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function se(){return(se=Object(U.a)(H.a.mark((function e(t,a){var r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.notes=a,e.next=4,$.put("calls/".concat(t.id,"/"),t);case 4:return r=e.sent,e.abrupt("return",{response:r.data,isError:!1});case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{response:e.t0,isError:!0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var le=function(e){var t=e.title,a=e.description;e.bg;return o.a.createElement(k.c,{mx:"auto",variant:"content.normal",sx:{width:"100%",height:"40vh"}},o.a.createElement(k.c,{px:2,pb:4,sx:{flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.a.createElement(k.d,{variant:"text.h2",mb:4},t),o.a.createElement(k.f,{variant:"text.body.large",sx:{textAlign:"center"}},a)))},ce=a(225);function ue(){var e=Object(A.a)(["\n\t&& {\n\t\tmin-width: 150px;\n\t}\n"]);return ue=function(){return e},e}var me=Object(N.a)(ce.a)(ue()),de=function(e){var t=e.label,a=e.onClick,r=e.active;return void 0!==r&&r?o.a.createElement(me,{variant:"contained",color:"primary",onClick:a},t):o.a.createElement(me,{onClick:a},t)},pe=a(129),be=a(238),fe=a(239),he=a(231),ge=a(230),Ee=a(232),ve=a(228),ye=a(235),Oe=a(120),xe=a.n(Oe),je=a(227),we=a(229);function Se(){var e=Object(A.a)(["\n\t&& {\n\t\tborder: 1px solid #e7e7e7;\n\t\tborder-radius: 5px;\n\t\tmargin-bottom: 1rem;\n\t}\n"]);return Se=function(){return e},e}function ke(){var e=Object(A.a)(["\n\t&& {\n\t\talign-items: center;\n\t\t.right-col {\n\t\t\ttext-align: right;\n\t\t}\n\t}\n"]);return ke=function(){return e},e}var Ce=Object(N.a)(_.a)(ke()),Ie=Object(N.a)(_.a)(Se()),Ae=function(e){var t=e.call,a=void 0===t?{}:t,r=e.recipient,n=void 0===r?{}:r,s=e.updateCallNotesAction,l=Object(i.useState)(!1),c=Object(I.a)(l,2),u=c[0],m=c[1],d=Object(i.useState)(!1),p=Object(I.a)(d,2),b=p[0],f=p[1],h=n.first_name,g=n.last_name,E=n.state_residence,v=n.state_registered,y=n.registered_to_vote,O=n.political_leaning,x=a.notes,j=a.completed,w=a.date,S=Object(i.useState)(x),k=Object(I.a)(S,2),C=k[0],A=k[1];return o.a.createElement(Ie,{item:!0,xs:12},o.a.createElement(Ce,{container:!0},o.a.createElement(_.a,{item:!0,xs:8,className:"left-col"},w&&o.a.createElement(pe.a,{variant:"h5",component:"h5"}," ",w),o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"}," ","".concat(h," ").concat(g)),o.a.createElement("br",null)),o.a.createElement(_.a,{item:!0,xs:4,className:"right-col"},x&&o.a.createElement(je.a,{control:o.a.createElement(be.a,{checked:j,name:"checkedB",color:"primary"}),label:"Contacted"}))),o.a.createElement(we.a,null),o.a.createElement(Ce,{container:!0,spacing:2},o.a.createElement(_.a,{item:!0,xs:8,className:"left-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"}," ","State Residence")),o.a.createElement(_.a,{item:!0,xs:4,className:"right-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"},Y[E.toUpperCase()])),o.a.createElement(_.a,{item:!0,xs:8,className:"left-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"}," ","State Registered")),o.a.createElement(_.a,{item:!0,xs:4,className:"right-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"},Y[v.toUpperCase()])),o.a.createElement(_.a,{item:!0,xs:8,className:"left-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"}," ","Registered To Vote")),o.a.createElement(_.a,{item:!0,xs:4,className:"right-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"},J[y])),o.a.createElement(_.a,{item:!0,xs:8,className:"left-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"}," ","Political Leaning")),o.a.createElement(_.a,{item:!0,xs:4,className:"right-col"},o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"},K[O]))),x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(ce.a,{color:"primary",onClick:function(){return m(!u)}},u?"Hide Notes":"Show Notes"),u&&o.a.createElement("div",null,o.a.createElement(pe.a,{variant:"subtitle1",component:"subtitle1"}," ",o.a.createElement("i",null,""===x?"No Notes":x)),o.a.createElement(ve.a,{onClick:function(){return f(!0)}},o.a.createElement(xe.a,null)),o.a.createElement(fe.a,{onClose:function(){return f(!1)},"aria-labelledby":"simple-dialog-title",open:b},o.a.createElement(ge.a,{id:"simple-dialog-title"},"Edit Notes"),o.a.createElement(he.a,null,o.a.createElement(ye.a,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Default Value",variant:"outlined",value:C,onChange:function(e){return A(e.target.value)}})),o.a.createElement(Ee.a,null,o.a.createElement(ce.a,{autoFocus:!0,onClick:function(){return f(!1)},color:"primary"},"Cancel"),o.a.createElement(ce.a,{onClick:function(){return s(a,C)},color:"primary"},"Ok"))))))},Ne=function(e){var t=e.calls,a=e.recipients,r=e.updateCallNotesAction;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){var n=a.find((function(t){return t.id===e.recipient}));return o.a.createElement(Ae,{call:e,recipient:n,key:t,updateCallNotesAction:r})})),o.a.createElement(_.a,{item:!0,xs:12},o.a.createElement(ce.a,{variant:"contained",color:"primary",onClick:function(){return Object(w.c)("create-call")},fullWidth:!0},"Add Call +")))},_e=function(e){var t=e.recipients;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return o.a.createElement(Ae,{recipient:e,key:t})})),o.a.createElement(_.a,{item:!0,xs:12},o.a.createElement(ce.a,{variant:"contained",color:"primary",onClick:function(){return Object(w.c)("create-recipient")},fullWidth:!0},"Add Recipient +")))};function Fe(){var e=Object(A.a)(["\n\t&& {\n\t\tmax-width: 616px;\n\t}\n"]);return Fe=function(){return e},e}var Le=Object(N.a)(_.a)(Fe()),qe=function(){var e=Object(i.useState)("calls"),t=Object(I.a)(e,2),a=t[0],r=t[1],n=Object(c.b)(),s=Object(c.c)((function(e){return e.dashboard})),l=s.calls,u=s.recipients;Object(i.useEffect)((function(){"calls"===a?(!function(e){ee.apply(this,arguments)}(n),te(n)):te(n)}),[a]),console.log(l,u);return o.a.createElement(k.a,null,o.a.createElement(le,{title:D.title,description:D.description,bg:D.bg}),o.a.createElement(k.c,{alignItems:"center",justifyContent:"center",px:3,py:4,bg:"muted"},o.a.createElement(k.a,{p:1},o.a.createElement(de,{active:"calls"===a,label:"Calls",onClick:function(){return r("calls")}})),o.a.createElement(k.a,{p:1},o.a.createElement(de,{active:"recipients"===a,label:"Recipients",onClick:function(){return r("recipients")}}))),o.a.createElement(k.c,{alignItems:"center",justifyContent:"center",px:3,py:4,bg:"muted"},"calls"===a&&o.a.createElement(Le,{container:!0,spacing:4},o.a.createElement(Ne,{calls:l,recipients:u,updateCallNotesAction:function(e,t){!function(e,t){se.apply(this,arguments)}(e,t),Object(w.c)("dashboard")}})),"recipients"===a&&o.a.createElement(Le,{container:!0,spacing:4},o.a.createElement(_e,{recipients:u}))))},De=a(233),Te=function(e){return o.a.createElement(k.e,Object.assign({as:w.a},e))},Pe=function(e){var t=e.content,a=e.reverse;return o.a.createElement(De.e,{bg:"white",variant:"content.normal",py:4,sx:a?{flexDirection:"row-reverse"}:{}},o.a.createElement(k.a,{width:[1,1,3/4]},o.a.createElement(De.f,{mb:3,variant:"text.h3"},t.heading),o.a.createElement(De.j,{variant:"body.large",my:3},t.body),o.a.createElement(Te,{variant:"links.ctaLink",to:"/"},"Learn More >")),o.a.createElement(k.a,{width:[1,1,1/4],mr:a?4:0,py:6,bg:"primary",sx:{opacity:"40%"}}))};Pe.defaultProps={content:null,reverse:!1};var Re=function(e){return o.a.createElement(k.b,Object.assign({as:w.a,role:null,"aria-disabled":null},e))},We=function(e){var t=e.stepID,a=e.primaryText;return o.a.createElement(De.d,{m:3,px:2,pt:4,pb:"auto",bg:"white",sx:{boxShadow:"small",textAlign:"center",width:"240px",height:"144px"}},o.a.createElement(De.f,{variant:"text.h4",mb:2,sx:{opacity:"20%"}},t),o.a.createElement(De.j,{variant:"text.body.small",sx:{fontWeight:"bold"}},a))},Me=function(){var e="Step by Step",t="We need to get as many American citizens registered and planning to vote for Biden as possible! Trump has verbally stated that he will contest this election, and that he does not intend to pass power peacefully. He's stacking the Supreme Court now! ";return o.a.createElement(De.e,{mx:"auto",bg:q.colors.base300,variant:"content.normal",sx:{width:"100%"}},o.a.createElement(De.e,{px:2,py:4,sx:{flexDirection:"column",alignItems:"center",justifyContent:"center"}},o.a.createElement(De.b,{mx:"auto",px:2,sx:{textAlign:"center"}},o.a.createElement(De.f,{variant:"text.h4",mb:2},e),o.a.createElement(De.j,{variant:"text.body.small",mb:4,sx:{textAlign:"center"}},t)),o.a.createElement(De.e,{sx:{flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},W.map((function(e){return o.a.createElement(We,{key:e.stepID,stepID:e.stepID,primaryText:e.primary})}))),o.a.createElement(Re,{to:"steps",variant:"buttons.primary",px:5,sx:{"&:hover":{boxShadow:"small"}}},"Learn More >")))},He=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(le,{title:T.title,description:T.description,bg:T.bg}),o.a.createElement(Me,null),o.a.createElement(Pe,{content:P}),o.a.createElement(Pe,{content:R,reverse:!0}))};function Ue(e,t){e({type:"ALERT_MESSAGE",payload:t})}function ze(e,t,a){return Ve.apply(this,arguments)}function Ve(){return(Ve=Object(U.a)(H.a.mark((function e(t,a,r){var n,i,o,s,l,c=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>3&&void 0!==c[3]?c[3]:"dashboard",e.prev=1,e.next=4,$.post("login/",{email:r.email,password:r.password});case 4:i=e.sent,$.defaults.headers.Authorization="Token "+i.data.access,B(i.data),t((o={message:"Logged in!",isError:!1}).message,{variant:"success"}),a({type:"ACTION_LOGIN_SUCCESS"}),Ue(a,o),Object(w.c)(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),401===e.t0.response.status?(t((s={message:"Your email or password was incorrect. Please try again",isError:!0}).message,{variant:"warning"}),Ue(a,s)):(t((l={message:"Something went wrong. Please try again",isError:!0}).message,{variant:"warning"}),Ue(a,l));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function Be(e,t,a){return Ge.apply(this,arguments)}function Ge(){return(Ge=Object(U.a)(H.a.mark((function e(t,a,r){var n,i,o,s,l=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>3&&void 0!==l[3]?l[3]:"login",e.prev=1,e.next=4,$.post("signup/",{email:r.email,first_name:r.firstName,last_name:r.lastName,password1:r.password,password2:r.passwordCon});case 4:return i=e.sent,Ue(a,o={message:"Signed up! You can now log in",isError:!1}),t(o.message,{variant:"success"}),Object(w.c)(n),e.abrupt("return",{response:i.data,isError:!1});case 12:return e.prev=12,e.t0=e.catch(1),Ue(a,s={message:"Whoops! Looks like there are some errors :(",isError:!0}),t(s.message,{variant:"warning"}),e.abrupt("return",{response:e.t0,isError:!0});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Ke(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"home",r={message:"Logged out",isError:!1};Ue(t,r),e(r.message,{variant:"success"}),Object(w.c)(a),setTimeout((function(){z(),t({type:"ACTION_LOGOUT"})}),1)}var Je=a(41),Ye=function(e){var t=e.children;return o.a.createElement(De.j,{variant:"text.body.small",my:1,color:"secondary",sx:{fontStyle:"italic"}},t)},Ze=function(e){var t,a,r,n=e.onSubmit,i=Object(Je.useForm)(),s=i.register,l=i.handleSubmit,c=i.errors;return o.a.createElement(De.e,{variant:"content.normal",sx:{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}},o.a.createElement(De.b,{mt:4,mb:6,py:6,px:6,as:"form",onSubmit:l(n),sx:{borderStyle:"solid",borderWidth:"1px",borderColor:"primary"}},o.a.createElement(De.h,{htmlFor:"email",color:"base800",variant:"text.body.small"},"Email"),o.a.createElement(De.g,{name:"email",id:"email",ref:s({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}),"required"===(null===(t=c.email)||void 0===t?void 0:t.type)&&o.a.createElement(Ye,null,"Email is required"),"pattern"===(null===(a=c.email)||void 0===a?void 0:a.type)&&o.a.createElement(Ye,null,"Invalid email address"),o.a.createElement(De.h,{htmlFor:"password",color:"base800",mt:2,variant:"text.body.small"},"Password"),o.a.createElement(De.g,{type:"password",name:"password",id:"password",ref:s({required:!0})}),"required"===(null===(r=c.password)||void 0===r?void 0:r.type)&&o.a.createElement(Ye,null,"Password is required"),o.a.createElement(De.c,{mt:3,type:"submit",variant:"buttons.secondary"},"Login")))},Xe=function(){var e=Object(i.useState)(!1),t=Object(I.a)(e,2),a=(t[0],t[1],Object(c.b)()),r=Object(S.b)().enqueueSnackbar,n=function(){var e=Object(U.a)(H.a.mark((function e(t,n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ze(r,a,t);case 3:n.preventDefault(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}();return o.a.createElement(Ze,{onSubmit:n})},$e=function(){return o.a.createElement(k.a,null,o.a.createElement(k.f,{variant:"text.heading"},"Resources"))},Qe=a(63),et=a(22),tt=function(e){var t=e.children,a=e.isError;return o.a.createElement(De.e,{sx:{flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(De.a,{mt:2,px:3,variant:a?"status":"error"},o.a.createElement(De.j,{variant:"text.body.small",color:"white"},t)))},at=function(e){var t=e.name,a=e.label,r=e.type,n=void 0===r?"text":r,i=e.registerFn,s=e.error,l=e.list,c=e.multiLine,u=void 0!==c&&c;return console.log(s),o.a.createElement(o.a.Fragment,null,o.a.createElement(De.h,{htmlFor:t,variant:"text.body.small",color:"base800"},a),l&&o.a.createElement(De.i,{defaultValue:null,ref:i,my:1,name:t,"aria-describedby":"".concat(t,"Error")},o.a.createElement("option",{value:null}),Object.keys(l).map((function(e,t){return o.a.createElement("option",{key:t,value:e},l[e])}))),!l&&o.a.createElement(o.a.Fragment,null,u?o.a.createElement(De.k,{name:t,type:n,"aria-describedby":"".concat(t,"Error"),ref:i,rows:2,my:1}):o.a.createElement(De.g,{name:t,type:n,"aria-describedby":"".concat(t,"Error"),ref:i,my:1})),s&&o.a.createElement(Ye,{id:"".concat(t,"Error"),mb:1},s.message))},rt=et.a().shape({firstName:et.c().required("First Name is required"),lastName:et.c().required("Last Name is required"),email:et.c().required("Email is required").email("Enter a valid email address"),password:et.c().required("Password is required"),passwordCon:et.c().required("Password Confirmation is required").oneOf([et.b("password")],"Passwords must match")}),nt=function(e){var t=e.onSubmit,a=e.errorState,r=Object(Je.useForm)({resolver:Object(Qe.yupResolver)(rt)}),n=r.register,s=r.handleSubmit,l=r.errors,c=r.setError;return Object(i.useEffect)((function(){if(a)for(var e in a.errors)c(e,{type:"server",message:a.errors[e]})}),[a]),o.a.createElement(De.e,{variant:"content.normal",sx:{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}},o.a.createElement(De.b,{mt:4,mb:6,py:5,px:6,as:"form",onSubmit:s(t),sx:{borderStyle:"solid",borderWidth:"1px",borderColor:"primary"}},o.a.createElement(at,{name:"firstName",label:"First Name",registerFn:n,error:l.firstName}),o.a.createElement(at,{name:"lastName",label:"Last Name",registerFn:n,error:l.lastName}),o.a.createElement(at,{name:"email",label:"Email",registerFn:n,error:l.email}),o.a.createElement(at,{name:"password",label:"Password",type:"password",registerFn:n,error:l.password}),o.a.createElement(at,{name:"passwordCon",label:"Password Confirmation",type:"password",registerFn:n,error:l.passwordCon}),o.a.createElement(De.c,{mt:3,type:"submit",variant:"buttons.secondary"},"Sign Up")))},it=function(){var e=Object(i.useState)({errors:{}}),t=Object(I.a)(e,2),a=t[0],r=t[1],n=Object(S.b)().enqueueSnackbar,s=Object(c.b)(),l=function(){var e=Object(U.a)(H.a.mark((function e(t,a){var i,o,l;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Be(n,s,t);case 3:i=e.sent,o=i.response,i.isError&&400===(l=o.response).status&&r({errors:l.data}),a.preventDefault(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}();return o.a.createElement(nt,{onSubmit:l,errorState:a})},ot=et.a().shape({first_name:et.c().required("First Name is required"),last_name:et.c().required("Last Name is required"),state_residence:et.c().required("State Residence is required"),state_registered:et.c().required("State Registered is required"),registered_to_vote:et.c().required("Registered To Vote is required"),political_leaning:et.c().required("Political Leaning is required")}),st=function(e){var t=e.onSubmit,a=e.errorState,r=Object(Je.useForm)({resolver:Object(Qe.yupResolver)(ot)}),n=r.register,s=r.handleSubmit,l=r.errors,c=r.setError;return Object(i.useEffect)((function(){if(a)for(var e in a.errors)c(e,{type:"server",message:a.errors[e]})}),[a]),o.a.createElement(De.e,{variant:"content.normal",sx:{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}},a.invalidInput&&o.a.createElement(tt,{isError:!0},"Whoops. Looks like there are some errors."),o.a.createElement(De.b,{mt:4,mb:6,py:5,px:6,as:"form",onSubmit:s(t),sx:{borderStyle:"solid",borderWidth:"1px",borderColor:"primary"}},o.a.createElement(at,{name:"first_name",label:"First Name",registerFn:n,error:l.first_name}),o.a.createElement(at,{name:"last_name",label:"Last Name",registerFn:n,error:l.last_name}),o.a.createElement(at,{name:"state_residence",label:"State Residence",registerFn:n,list:Y,error:l.state_residence}),o.a.createElement(at,{name:"state_registered",label:"State Registered",registerFn:n,list:Y,error:l.state_registered}),o.a.createElement(at,{name:"registered_to_vote",label:"Registered To Vote",registerFn:n,list:J,error:l.registered_to_vote}),o.a.createElement(at,{name:"political_leaning",label:"Political Leaning",registerFn:n,list:K,error:l.political_leaning}),o.a.createElement(De.c,{mt:3,type:"submit",variant:"buttons.secondary"},"Create New Recipient")))},lt=function(){var e=Object(c.b)(),t=Object(S.b)().enqueueSnackbar,a=Object(i.useState)({invalidInput:!1,errors:{}}),r=Object(I.a)(a,2),n=r[0],s=r[1],l=function(){var a=Object(U.a)(H.a.mark((function a(r,n){var i,o,l;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,re(e,r);case 3:i=a.sent,o=i.response,i.isError?(l=o.response,t(l.data,{variant:"warning"}),400===l.status&&s({invalidInput:!0,errors:l.data})):(t("New Recipient is Created!",{variant:"success"}),Object(w.c)("dashboard")),n.preventDefault(),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e,t){return a.apply(this,arguments)}}();return o.a.createElement(st,{onSubmit:l,errorState:n})},ct=et.a().shape({recipient:et.c().required("Recipient is required"),date:et.c().required("Date is required")}),ut=function(e){var t=e.onSubmit,a=e.errorState,r=e.recipients,n=Object(Je.useForm)({resolver:Object(Qe.yupResolver)(ct)}),s=n.register,l=n.handleSubmit,c=n.errors,u=n.setError;return Object(i.useEffect)((function(){if(a)for(var e in a.errors)u(e,{type:"server",message:a.errors[e]})}),[a]),o.a.createElement(De.e,{variant:"content.normal",sx:{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}},a.invalidInput&&o.a.createElement(tt,{isError:!0},"Whoops. Looks like there are some errors."),o.a.createElement(De.b,{mt:4,mb:6,py:5,px:6,as:"form",onSubmit:l(t),sx:{borderStyle:"solid",borderWidth:"1px",borderColor:"primary"}},o.a.createElement(at,{name:"date",label:"Date",registerFn:s,error:c.date}),o.a.createElement(at,{name:"recipient",label:"Recipient",registerFn:s,list:r,error:c.recipient}),o.a.createElement(at,{name:"notes",label:"Notes",registerFn:s,error:c.notes,multiLine:!0}),o.a.createElement(De.c,{mt:3,type:"submit",variant:"buttons.secondary"},"Create New Call")))},mt=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.dashboard})).recipients,a=Object(S.b)().enqueueSnackbar,r=Object(i.useState)({invalidInput:!1,errors:{}}),n=Object(I.a)(r,2),s=n[0],l=n[1],u=function(){var t=Object(U.a)(H.a.mark((function t(r,n){var i,o,s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ie(e,r);case 3:i=t.sent,o=i.response,i.isError?(s=o.response,a(s.data,{variant:"warning"}),400===s.status&&l({invalidInput:!0,errors:s.data})):(a("New Call is Created!",{variant:"success"}),Object(w.c)("dashboard")),n.preventDefault(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}(),m={};return t.forEach((function(e,t){m[e.id]="".concat(e.first_name," ").concat(e.last_name)})),o.a.createElement(ut,{onSubmit:u,errorState:s,recipients:m})},dt=function(e){e.children;var t=Object(c.c)((function(e){return e.auth})).isLoggedIn,a=Object(S.b)().enqueueSnackbar,r=Object(c.b)();return Object(i.useEffect)((function(){!V()&&t&&Ke(a,r)}),[]),o.a.createElement(w.b,null,o.a.createElement(C,{path:"about"}),o.a.createElement(He,{path:"home"}),o.a.createElement($e,{path:"resources"}),!t&&o.a.createElement(Xe,{path:"login"}),!t&&o.a.createElement(it,{path:"signup"}),t&&o.a.createElement(qe,{path:"dashboard"}),t&&o.a.createElement(lt,{path:"create-recipient"}),t&&o.a.createElement(mt,{path:"create-call"}))},pt=a(234),bt=function(){return o.a.createElement(k.a,{mx:4,sx:{bg:"base800",width:1,height:200,borderRadius:.5}})},ft=function(){return Object(pt.a)(k.c,{color:"white",justifyContent:"space-around",alignItems:"center",py:3},Object(pt.a)(k.a,{width:[1,1,.5]},Object(pt.a)(k.d,{variant:"text.h5",sx:{fontWeight:600,my:2}},"The Pledge"),Object(pt.a)(k.f,{variant:"text.body.small"},"We need to get as many American citizens registered and planning to vote for Biden as possible! Trump has verbally stated that he will contest this election, and that he does not intend to pass power peacefully.")),Object(pt.a)(bt,null),Object(pt.a)(k.c,{width:[1,1,.5]},Object(pt.a)(k.a,{width:[1,1,.5]},Object(pt.a)("ul",{sx:{listStyle:"none",m:0,p:0}},Object(pt.a)("li",{sx:{my:3}},Object(pt.a)(Te,{variant:"links.footer",to:"/"},"Demographic Breakdown")),Object(pt.a)("li",{sx:{my:3}},Object(pt.a)(Te,{variant:"links.footer",to:"/"},"Commonly Held Views")),Object(pt.a)("li",{sx:{my:3}},Object(pt.a)(Te,{variant:"links.footer",to:"/"},"Key Issues")),Object(pt.a)("li",{sx:{my:3}},Object(pt.a)(Te,{variant:"links.footer",to:"/"},"Swing State Information")))),Object(pt.a)(k.a,{width:[1,1,.5]},Object(pt.a)("ul",{sx:{listStyle:"none",m:0,p:0}},Object(pt.a)("li",{sx:{my:3}},Object(pt.a)(Te,{variant:"links.footer",to:"/"},"About the Pledge")),Object(pt.a)("li",{sx:{my:3}},Object(pt.a)(Te,{variant:"links.footer",to:"/"},"Contact Us"))))))},ht=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.auth})).isLoggedIn,a=Object(S.b)().enqueueSnackbar;return o.a.createElement(k.c,{color:"black",bg:"white",alignItems:"bottom"},o.a.createElement(k.f,{variant:"text.h4",my:2,mr:4},"The Pledge"),o.a.createElement(Te,{to:"home",my:2,mx:1,variant:"links.nav"},"Home"),o.a.createElement(Te,{to:"resources",my:2,mx:1,variant:"links.nav"},"Resources"),o.a.createElement(Te,{to:"about",my:2,mx:1,variant:"links.nav"},"About"),o.a.createElement(k.a,{mx:"auto"}),!t&&o.a.createElement(Re,{to:"login",my:2,ml:2,variant:"buttons.primary"},"Login"),!t&&o.a.createElement(Re,{to:"signup",my:2,ml:2,variant:"buttons.secondary"},"Sign Up"),t&&o.a.createElement(Re,{to:"home",onClick:function(){return Ke(a,e)},my:2,ml:2,variant:"buttons.primary"},"Logout"),t&&o.a.createElement(Re,{to:"dashboard",my:2,ml:2,variant:"buttons.tertiary"},"Dashboard"))};function gt(){var e=Object(A.a)(["\n  position: relative;\n"]);return gt=function(){return e},e}function Et(){var e=Object(A.a)(["\n  position: relative;\n  padding-right: 10vh;\n  padding-left: 10vh;\n  background-color: ",";\n"]);return Et=function(){return e},e}function vt(){var e=Object(A.a)(["\n  position: relative;\n  padding-right: 10vh;\n  padding-left: 10vh;\n"]);return vt=function(){return e},e}function yt(){var e=Object(A.a)(["\n  position: relative;\n"]);return yt=function(){return e},e}var Ot=N.a.div(yt()),xt=N.a.nav(vt()),jt=N.a.footer(Et(),q.colors.base300),wt=N.a.main.attrs((function(){return{id:"maincontent"}}))(gt()),St=function(e){var t=e.children,a=(Object(c.b)(),Object(c.c)((function(e){return e.alert}))),r=(a.message,a.isError,o.a.createElement(wt,null,t));return o.a.createElement(Ot,null,o.a.createElement(xt,null,o.a.createElement(ht,null)),r,o.a.createElement(jt,null,o.a.createElement(ft,null)))},kt=a(125),Ct=function(e){var t=e.children;return o.a.createElement(kt.a,{theme:q},t)},It=function(){var e=Object(O.a)(j,y),t=Object(m.createStore)(e,Object(d.devToolsEnhancer)());return{store:t,persistor:Object(O.b)(t)}}(),At=It.store,Nt=It.persistor,_t=function(e){e.children;return o.a.createElement(c.a,{store:At},o.a.createElement(u.a,{loading:null,persistor:Nt},o.a.createElement(S.a,{maxSnack:3},o.a.createElement(Ct,null,o.a.createElement(St,null,o.a.createElement(dt,null))))))};n.a.defaults.xsrfCookieName="csrftoken",n.a.defaults.xsrfHeaderName="X-CSRFToken",n.a.defaults.headers.post["Content-Type"]="application/json",n.a.defaults.headers.common["Content-Type"]="application/json",l.a.render(o.a.createElement(_t,null),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.17df0ad2.chunk.js.map