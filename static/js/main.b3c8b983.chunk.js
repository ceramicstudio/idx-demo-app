(this["webpackJsonpidx-demo-app"]=this["webpackJsonpidx-demo-app"]||[]).push([[0],{318:function(t){t.exports=JSON.parse('{"a":{"notes":"kjzl6cwe1jw14a91h8tvv558lojmzrufixn3dltqme327cv2givg73nj9jnd37r"}}')},338:function(t,e,a){},382:function(t,e){},383:function(t,e){},410:function(t,e){},412:function(t,e){},422:function(t,e){},424:function(t,e){},450:function(t,e){},452:function(t,e){},458:function(t,e){},459:function(t,e){},461:function(t,e){},473:function(t,e){},476:function(t,e){},521:function(t,e){},522:function(t,e){},534:function(t,e){},536:function(t,e){},605:function(t,e,a){"use strict";a.r(e);var n=a(10),c=a(0),s=a.n(c),o=a(32),r=a.n(o),i=(a(338),a(43)),u=a(30),d=a(670),l=a(663),j=a(669),b=a(664),O=a(668),f=a(666),h=a(665),v=a(662),p=a(675),x=a(673),m=a(660),g=a(661),y=a(656),w=a(659),D=a(658),k=a(324),C=a(667),S=a(672),I=a(671),N=a(122),F=a(652),P=a(674),B=a(39),T=a(320),M=a.n(T),R=a(319),A=a.n(R),z=a(200),L=a.n(z),U=a(198),J=a.n(U),q=a(657),E=a(322),G=a.n(E),W=a(321),X=a.n(W),V=a(201),Y=a.n(V),_=a(199),H=a.n(_),K=a(50),Q=a(24),Z=a(4),$=a.n(Z),tt=a(308),et=a(84),at=a.n(et),nt=a(314),ct=a(120),st=a(317),ot=a.n(st),rt=a(318),it="https://ceramic.3boxlabs.com",ut=new ot.a({network:"mainnet",cacheProvider:!0});function dt(){return(dt=Object(tt.a)($.a.mark((function t(){var e,a,n,c,s,o,r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new at.a(it),n=new nt.a({ceramic:a,definitions:rt.a}),t.next=4,ut.connect();case 4:return c=t.sent,t.next=7,c.send("eth_requestAccounts");case 7:return s=t.sent,o=s.result,t.next=11,n.authenticate({authProvider:new ct.EthereumAuthProvider(c,o[0])});case 11:return t.next=13,n.get("notes");case 13:return r=t.sent,t.abrupt("return",{ceramic:a,idx:n,notes:null!==(e=null===r||void 0===r?void 0:r.notes)&&void 0!==e?e:[]});case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function lt(t,e){switch(e.type){case"auth":return Object(Q.a)(Object(Q.a)({},t),{},{nav:{type:"default"},auth:{status:e.status}});case"auth success":var a={status:"done",ceramic:e.ceramic,idx:e.idx};return e.notes.length?Object(Q.a)(Object(Q.a)({},t),{},{auth:a,notes:e.notes.reduce((function(t,e){return t[e.id]={status:"init",title:e.title},t}),{})}):{auth:a,draftStatus:"unsaved",nav:{type:"draft"},notes:{}};case"nav reset":return Object(Q.a)(Object(Q.a)({},t),{},{nav:{type:"default"}});case"nav draft":return Object(Q.a)(Object(Q.a)({},t),{},{auth:t.auth,nav:{type:"draft"}});case"draft status":return Object(Q.a)(Object(Q.a)({},t),{},{auth:t.auth,draftStatus:e.status});case"draft delete":return Object(Q.a)(Object(Q.a)({},t),{},{draftStatus:"unsaved",nav:{type:"default"}});case"draft saved":return{auth:t.auth,draftStatus:"unsaved",nav:{type:"note",docID:e.docID},notes:Object(Q.a)(Object(Q.a)({},t.notes),{},Object(u.a)({},e.docID,{status:"saved",title:e.title,doc:e.doc}))};case"nav note":return Object(Q.a)(Object(Q.a)({},t),{},{auth:t.auth,nav:{type:"note",docID:e.docID}});case"note loaded":var n=t.nav.docID,c=t.notes[n];return Object(Q.a)(Object(Q.a)({},t),{},{auth:t.auth,notes:Object(Q.a)(Object(Q.a)({},t.notes),{},Object(u.a)({},n,{status:"loaded",title:c.title,doc:e.doc}))});case"note loading status":var s=t.nav.docID,o=t.notes[s];return Object(Q.a)(Object(Q.a)({},t),{},{auth:t.auth,notes:Object(Q.a)(Object(Q.a)({},t.notes),{},Object(u.a)({},s,Object(Q.a)(Object(Q.a)({},o),{},{status:e.status})))});case"note saving status":var r=t.nav.docID,i=t.notes[r];return Object(Q.a)(Object(Q.a)({},t),{},{auth:t.auth,notes:Object(Q.a)(Object(Q.a)({},t.notes),{},Object(u.a)({},r,Object(Q.a)(Object(Q.a)({},i),{},{status:e.status})))})}}function jt(){var t=Object(c.useReducer)(lt,{auth:{status:"pending"},draftStatus:"unsaved",nav:{type:"default"},notes:{}}),e=Object(i.a)(t,2),a=e[0],n=e[1],s=Object(c.useCallback)((function(){n({type:"auth",status:"loading"}),function(){return dt.apply(this,arguments)}().then((function(t){n(Object(Q.a)({type:"auth success"},t))}),(function(t){console.warn("authenticate call failed",t),n({type:"auth",status:"failed"})}))}),[]),o=Object(c.useCallback)((function(){n({type:"nav draft"})}),[]),r=Object(c.useCallback)((function(){n({type:"draft delete"})}),[]),u=Object(c.useCallback)((function(t,e){n({type:"draft status",status:"saving"});var c=a.auth,s=c.ceramic,o=c.idx;Promise.all([s.createDocument("tile",{content:{date:(new Date).toUTCString(),text:e}}),o.get("notes")]).then((function(e){var a,c=Object(i.a)(e,2),s=c[0],r=c[1],u=null!==(a=null===r||void 0===r?void 0:r.notes)&&void 0!==a?a:[];return o.set("notes",{notes:[{id:s.id.toUrl("base36"),title:t}].concat(Object(K.a)(u))}).then((function(){var e=s.id.toString();n({type:"draft saved",docID:e,title:t,doc:s})}))})).catch((function(t){console.log("failed to save draft",t),n({type:"draft status",status:"failed"})}))}),[a.auth]);return{authenticate:s,deleteDraft:r,openDraft:o,openNote:Object(c.useCallback)((function(t){(n({type:"nav note",docID:t}),null==a.notes[t]||"init"===a.notes[t].status)&&a.auth.ceramic.loadDocument(t).then((function(e){n({type:"note loaded",docID:t,doc:e})}),(function(){n({type:"note loading status",docID:t,status:"loading failed"})}))}),[a.auth,a.notes]),saveDraft:u,saveNote:Object(c.useCallback)((function(t,e){var a=t.id.toString();n({type:"note saving status",docID:a,status:"saving"}),t.change({content:{date:(new Date).toUTCString(),text:e}}).then((function(){n({type:"note saving status",docID:a,status:"saved"})}),(function(){n({type:"note saving status",docID:a,status:"saving failed"})}))}),[]),state:a}}var bt=300,Ot=Object(F.a)((function(t){return Object(P.a)({root:{display:"flex"},drawer:Object(u.a)({},t.breakpoints.up("sm"),{width:bt,flexShrink:0}),appBar:Object(u.a)({},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(bt,"px)"),marginLeft:bt}),menuButton:Object(u.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),toolbar:t.mixins.toolbar,drawerPaper:{width:bt},content:{flexGrow:1,padding:t.spacing(3)},title:{flexGrow:1},noteSaveButton:{marginTop:t.spacing(2)},noteTextarea:{border:0,fontSize:t.typography.pxToRem(18),padding:t.spacing(2),width:"100%"}})}));function ft(t){var e,a=t.authenticate,c=t.deleteDraft,s=t.openDraft,o=t.openNote,r=t.state;if("draft"===r.nav.type){var u;switch(r.draftStatus){case"failed":u=Object(n.jsx)(J.a,{});break;case"saving":u=Object(n.jsx)(H.a,{});break;default:u=Object(n.jsx)(L.a,{})}e=Object(n.jsxs)(y.a,{button:!0,onClick:function(){return s()},selected:!0,children:[Object(n.jsx)(q.a,{children:u}),Object(n.jsx)(D.a,{primary:"Draft note"}),Object(n.jsx)(w.a,{children:Object(n.jsx)(m.a,{edge:"end","aria-label":"delete",onClick:function(){return c()},children:Object(n.jsx)(A.a,{})})})]})}else e="done"===r.auth.status?Object(n.jsxs)(y.a,{button:!0,onClick:function(){return s()},children:[Object(n.jsx)(q.a,{children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(D.a,{primary:"New note"})]}):Object(n.jsxs)(y.a,{button:!0,onClick:function(){return a()},children:[Object(n.jsx)(q.a,{children:Object(n.jsx)(Y.a,{})}),Object(n.jsx)(D.a,{primary:"Authenticate to create note"})]});var d=Object.entries(r.notes).map((function(t){var e,a=Object(i.a)(t,2),c=a[0],s=a[1],u="note"===r.nav.type&&r.nav.docID===c;switch(s.status){case"loading failed":case"saving failed":e=Object(n.jsx)(J.a,{});break;case"loading":e=Object(n.jsx)(M.a,{});break;case"saving":e=Object(n.jsx)(H.a,{});break;default:e=u?Object(n.jsx)(L.a,{}):Object(n.jsx)(X.a,{})}return Object(n.jsxs)(y.a,{button:!0,onClick:function(){return o(c)},selected:u,children:[Object(n.jsx)(q.a,{children:e}),Object(n.jsx)(D.a,{primary:s.title})]},c)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,{children:e}),Object(n.jsx)(v.a,{}),Object(n.jsx)(g.a,{children:d})]})}function ht(t){var e=t.authenticate,a=t.state;return"done"===a.status?Object(n.jsxs)(N.a,{children:["Authenticated with ID ",a.idx.id]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(N.a,{children:"You need to authenticate to load your existing notes and create new ones."}),Object(n.jsx)(l.a,{color:"primary",disabled:"loading"===a.status,onClick:e,variant:"contained",children:"Authenticate"})]})}function vt(t){var e=t.save,a=t.status,s=Ot(),o=Object(c.useState)(!1),r=Object(i.a)(o,2),u=r[0],d=r[1],j=Object(c.useRef)(null),v=Object(c.useRef)(null),p=function(){d(!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(b.a,{open:u,onClose:p,"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(h.a,{id:"form-dialog-title",children:"Save note"}),Object(n.jsx)(f.a,{children:Object(n.jsx)(S.a,{autoFocus:!0,margin:"dense",id:"title",label:"Note title",inputRef:v,type:"text",fullWidth:!0})}),Object(n.jsxs)(O.a,{children:[Object(n.jsx)(l.a,{onClick:p,color:"primary",children:"Cancel"}),Object(n.jsx)(l.a,{onClick:function(){var t,a,n=null===(t=j.current)||void 0===t?void 0:t.value,c=null===(a=v.current)||void 0===a?void 0:a.value;n&&c&&e(c,n),d(!1)},color:"primary",variant:"outlined",children:"Save note"})]})]}),Object(n.jsx)(k.a,{elevation:5,children:Object(n.jsx)(C.a,{className:s.noteTextarea,placeholder:"Note contents...",ref:j,rowsMin:10,rowsMax:20})}),Object(n.jsx)(l.a,{className:s.noteSaveButton,color:"primary",disabled:"saving"===a,onClick:function(){d(!0)},variant:"contained",children:"Save"})]})}function pt(t){var e=t.note,a=t.save,s=Ot(),o=Object(c.useRef)(null);if("loading failed"===e.status)return Object(n.jsx)(N.a,{children:"Failed to load note!"});if("init"===e.status||"loading"===e.status)return Object(n.jsx)(N.a,{children:"Loading note..."});var r=e.doc;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a,{elevation:5,children:Object(n.jsx)(C.a,{className:s.noteTextarea,defaultValue:r.content.text,placeholder:"Note contents...",ref:o,rowsMin:10,rowsMax:20})}),Object(n.jsx)(l.a,{className:s.noteSaveButton,color:"primary",disabled:"saving"===e.status,onClick:function(){var t,e;return a(r,null!==(t=null===(e=o.current)||void 0===e?void 0:e.value)&&void 0!==t?t:"")},variant:"contained",children:"Save"})]})}function xt(){var t,e=jt(),a=Ot(),s=Object(B.a)(),o=Object(c.useState)(!1),r=Object(i.a)(o,2),u=r[0],b=r[1],O=function(){b(!u)},f=Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:a.toolbar}),Object(n.jsx)(ft,{authenticate:e.authenticate,deleteDraft:e.deleteDraft,openDraft:e.openDraft,openNote:e.openNote,state:e.state})]});switch(e.state.nav.type){case"draft":t=Object(n.jsx)(vt,{save:e.saveDraft,status:e.state.draftStatus});break;case"note":t=Object(n.jsx)(pt,{note:e.state.notes[e.state.nav.docID],save:e.saveNote},e.state.nav.docID);break;default:t=Object(n.jsx)(ht,{authenticate:e.authenticate,state:e.state.auth})}return Object(n.jsxs)("div",{className:a.root,children:[Object(n.jsx)(j.a,{}),Object(n.jsx)(d.a,{position:"fixed",className:a.appBar,children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)(m.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:O,className:a.menuButton,children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(N.a,{className:a.title,noWrap:!0,variant:"h6",children:"IDX demo notes app"}),Object(n.jsx)(l.a,{color:"inherit",href:"https://idx.xyz",variant:"outlined",children:"IDX"})]})}),Object(n.jsxs)("nav",{className:a.drawer,"aria-label":"notes",children:[Object(n.jsx)(x.a,{smUp:!0,implementation:"css",children:Object(n.jsx)(p.a,{variant:"temporary",anchor:"rtl"===s.direction?"right":"left",open:u,onClose:O,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:f})}),Object(n.jsx)(x.a,{xsDown:!0,implementation:"css",children:Object(n.jsx)(p.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:f})})]}),Object(n.jsxs)("main",{className:a.content,children:[Object(n.jsx)("div",{className:a.toolbar}),t]})]})}var mt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,676)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),n(t),c(t),s(t),o(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(xt,{})}),document.getElementById("root")),mt()}},[[605,1,2]]]);
//# sourceMappingURL=main.b3c8b983.chunk.js.map