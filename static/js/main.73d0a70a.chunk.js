(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{69:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(2),a=c.n(n),i=c(17),r=c.n(i),o=(c(69),c(14)),l=(c(74),c(75),c(45)),j=c.n(l),d=(c(76),c(104)),u=c(31),b=Object(u.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),h=b.actions,O=h.login,p=h.logout,m=function(e){return e.user.user},x=b.reducer,f=function(e){var t=e.avatar,c=e.Icon,n=e.title,a=e.onClick,i=Object(o.c)(m);return Object(s.jsxs)("div",{onClick:a,className:"headerOption",children:[t&&Object(s.jsx)(d.a,{className:"headerOption__icon",children:null===i||void 0===i?void 0:i.email[0]}),c&&Object(s.jsx)(c,{className:"headerOption__icon"}),Object(s.jsx)("h3",{className:"headerOption__title",children:n})]})},v=c(46),g=c.n(v),_=c(47),N=c.n(_),w=c(48),y=c.n(w),I=c(50),k=c.n(I),C=c(49),S=c.n(C),U=c(24),E=U.a.initializeApp({apiKey:"AIzaSyDY4lOpS8AFavutw14a3YGoafjlPS-YOws",authDomain:"linkedin-clone-c04e0.firebaseapp.com",projectId:"linkedin-clone-c04e0",storageBucket:"linkedin-clone-c04e0.appspot.com",messagingSenderId:"528217413449",appId:"1:528217413449:web:de1bee487eaf6aeac46c98"}).firestore(),A=U.a.auth(),L=function(){var e=Object(o.b)();return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header__left",children:[Object(s.jsx)("img",{src:"https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611745615~hmac=91513d1191243f7fb79d795072085373",alt:""}),Object(s.jsxs)("div",{className:"header__search",children:[Object(s.jsx)(j.a,{}),Object(s.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsx)(f,{Icon:g.a,title:"Home"}),Object(s.jsx)(f,{Icon:N.a,title:"My Network"}),Object(s.jsx)(f,{Icon:y.a,title:"Jobs"}),Object(s.jsx)(f,{Icon:S.a,title:"Messaging"}),Object(s.jsx)(f,{Icon:k.a,title:"Notifications"}),Object(s.jsx)(f,{avatar:!0,title:"Akram",onClick:function(){e(p()),A.signOut()}})]})]})},P=(c(84),function(){var e=Object(o.c)(m),t=function(e){return Object(s.jsxs)("div",{className:"sidebar__recentItem",children:[Object(s.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(s.jsx)("p",{children:e})]})};return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsxs)("div",{className:"sidebar__top",children:[Object(s.jsx)("img",{src:"https://source.unsplash.com/random",alt:""}),Object(s.jsx)(d.a,{src:e.photoUrl,className:"sidebar__avatar",children:e.email[0]}),Object(s.jsx)("h2",{children:e.displayName}),Object(s.jsx)("h4",{children:e.email})]}),Object(s.jsxs)("div",{className:"sidebar__stats",children:[Object(s.jsxs)("div",{className:"sidebar__stat",children:[Object(s.jsx)("p",{children:"who viewed you"}),Object(s.jsx)("p",{className:"sidebar__statNumber",children:"1234"})]}),Object(s.jsxs)("div",{className:"sidebar__stat",children:[Object(s.jsx)("p",{children:"views on post"}),Object(s.jsx)("p",{className:"sidebar__statNumber",children:"3333"})]})]}),Object(s.jsxs)("div",{className:"sidebar__bottom",children:[Object(s.jsx)("p",{children:"Recent"}),t("reactjs"),t("programming"),t("software engineering"),t("design"),t("developer")]})]})}),R=c(19),B=c(60),D=(c(85),c(55)),F=c.n(D),T=(c(86),function(e){var t=e.Icon,c=e.title,n=e.color;return Object(s.jsxs)("div",{className:"inputOptions",children:[Object(s.jsx)(t,{style:{color:n}}),Object(s.jsx)("h4",{children:c})]})}),W=c(56),J=c.n(W),M=c(57),V=c.n(M),Y=c(58),z=c.n(Y),H=c(59),q=c.n(H),G=(c(87),c(51)),K=c.n(G),$=c(52),Q=c.n($),X=c(53),Z=c.n(X),ee=c(54),te=c.n(ee),ce=Object(n.forwardRef)((function(e,t){var c=e.name,n=e.description,a=e.message,i=e.photourl;return Object(s.jsxs)("div",{ref:t,className:"post",children:[Object(s.jsxs)("div",{className:"post__header",children:[Object(s.jsx)(d.a,{src:i,children:c[0]}),Object(s.jsxs)("div",{className:"post__info",children:[Object(s.jsx)("h2",{children:c}),Object(s.jsx)("p",{children:n})]})]}),Object(s.jsx)("div",{className:"post__body",children:Object(s.jsx)("p",{children:a})}),Object(s.jsxs)("div",{className:"post__buttons",children:[Object(s.jsx)(T,{Icon:K.a,title:"Like",color:"gray"}),Object(s.jsx)(T,{Icon:Q.a,title:"Comment",color:"gray"}),Object(s.jsx)(T,{Icon:Z.a,title:"Share",color:"gray"}),Object(s.jsx)(T,{Icon:te.a,title:"Send",color:"gray"})]})]})})),se=function(){var e=Object(n.useState)(""),t=Object(R.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(R.a)(i,2),l=r[0],j=r[1],d=Object(o.c)(m);Object(n.useEffect)((function(){E.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(s.jsxs)("div",{className:"feed",children:[Object(s.jsxs)("div",{className:"feed__inputContainer",children:[Object(s.jsxs)("div",{className:"feed__input",children:[Object(s.jsx)(F.a,{}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{value:c,type:"text",onChange:function(e){return a(e.target.value)}}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),E.collection("posts").add({name:d.displayName,description:d.email,message:c,photoUrl:d.photoUrl||"",timestamp:U.a.firestore.FieldValue.serverTimestamp()}),a("")},type:"submit",children:"Send"})]})]}),Object(s.jsxs)("div",{className:"feed__inputOptions",children:[Object(s.jsx)(T,{Icon:J.a,title:"Photo",color:"#708579"}),Object(s.jsx)(T,{Icon:V.a,title:"Video",color:"#E7A33E"}),Object(s.jsx)(T,{Icon:z.a,title:"Event",color:"#C0CBCD"}),Object(s.jsx)(T,{Icon:q.a,title:"write article",color:"#7FC15E"})]})]}),Object(s.jsx)(B.a,{children:l.map((function(e){var t=e.id,c=e.data,n=c.name,a=c.description,i=c.message,r=c.photoUrl;return Object(s.jsx)(ce,{name:n,description:a,message:i,photourl:r},t)}))})]})},ne=(c(88),function(){var e=Object(n.useState)(""),t=Object(R.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(R.a)(i,2),l=r[0],j=r[1],d=Object(n.useState)(""),u=Object(R.a)(d,2),b=u[0],h=u[1],p=Object(n.useState)(""),m=Object(R.a)(p,2),x=m[0],f=m[1],v=Object(o.b)();return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:"https://i1.faceprep.in/fp/articles/img/24157_1580301600.jpg",alt:""}),Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{value:c,placeholder:"Full name (required if registering)",type:"text",onChange:function(e){return a(e.target.value)}}),Object(s.jsx)("input",{value:x,placeholder:"Profile pic URL (optional) ",type:"text",onChange:function(e){return f(e.target.value)}}),Object(s.jsx)("input",{value:l,placeholder:"Email",type:"email",onChange:function(e){return j(e.target.value)}}),Object(s.jsx)("input",{value:b,placeholder:"Password",type:"password",onChange:function(e){return h(e.target.value)}}),Object(s.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),A.signInWithEmailAndPassword(l,b).then((function(e){v(O({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.profileUrl}))})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]}),Object(s.jsxs)("p",{children:["Not a member?"," ",Object(s.jsx)("span",{className:"login__register",onClick:function(){if(!c)return alert("Please enter a full Name");A.createUserWithEmailAndPassword(l,b).then((function(e){e.user.updateProfile({displayName:c,photoURL:x}).then((function(){v(O({email:e.user.email,uid:e.user.uid,displayName:c,photoURL:x}))}))})).catch((function(e){return alert(e.message)}))},children:"Register Now"})]})]})}),ae=(c(89),c(62)),ie=c.n(ae),re=c(61),oe=c.n(re),le=function(){var e=function(e,t){return Object(s.jsxs)("div",{className:"widgets__article",children:[Object(s.jsx)("div",{className:"widgets__articleLeft",children:Object(s.jsx)(oe.a,{})}),Object(s.jsxs)("div",{className:"widgets__articleRight",children:[Object(s.jsx)("h4",{children:e}),Object(s.jsx)("p",{children:t})]})]})};return Object(s.jsxs)("div",{className:"widgets",children:[Object(s.jsxs)("div",{className:"widgets__header",children:[Object(s.jsx)("h2",{children:"LinkedIn News"}),Object(s.jsx)(ie.a,{})]}),e("Liverpool wins UCL","Top news -8888 readers"),e("CoronaVirus India update","corona -3000 readers"),e("BTC ATH","crypto -1111 readers"),e("Biden to sworn as US president","US politics -5555 readers")]})};var je=function(){var e=Object(o.c)(m),t=Object(o.b)();return Object(n.useEffect)((function(){A.onAuthStateChanged((function(e){t(e?O({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):p())}))}),[]),Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(L,{}),e?Object(s.jsxs)("div",{className:"app__body",children:[Object(s.jsx)(P,{}),Object(s.jsx)(se,{}),Object(s.jsx)(le,{})]}):Object(s.jsx)(ne,{})]})},de=Object(u.a)({reducer:{user:x}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(o.a,{store:de,children:Object(s.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[91,1,2]]]);
//# sourceMappingURL=main.73d0a70a.chunk.js.map