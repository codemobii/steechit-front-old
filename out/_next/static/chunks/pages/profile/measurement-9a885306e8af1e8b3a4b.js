_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{Hrwy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/measurement",function(){return n("YTtK")}])},YTtK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n("o0o1"),l=n.n(a),o=n("HaE+"),r=n("x242"),s=n("q1tI"),u=n.n(s),c=n("/MKj"),i=n("vDqi"),m=n.n(i),g=n("2gv+"),d=n("mYGa"),b=n("Yo6R"),h=n("rePB"),p=n("LvDl"),x=u.a.createElement;function v(e){var t=e.isOpen,n=e.onClose,a=Object(c.c)((function(e){return e.auth})),i=a.token,g=a._id,d=Object(s.useState)(""),b=d[0],v=d[1],f=Object(s.useState)(""),S=f[0],C=f[1],O=Object(s.useState)(""),w=O[0],j=O[1],z=Object(s.useState)(!1),k=z[0],L=z[1],I=Object(s.useState)(!1),y=I[0],E=I[1],A=Object(s.useState)(!1),T=A[0],M=A[1],B=Object(s.useState)(!1),D=B[0],R=B[1],_=Object(s.useState)(""),F=_[0],W=_[1],Y=Object(s.useState)(""),N=Y[0],H=Y[1],P=Object(s.useState)(""),K=P[0],G=P[1],q=Object(s.useState)(""),X=q[0],U=q[1],J=Object(s.useState)(""),Q=J[0],V=J[1],Z=Object(s.useState)(""),$=Z[0],ee=Z[1],te=Object(s.useState)(""),ne=te[0],ae=te[1],le=Object(s.useState)(""),oe=le[0],re=le[1],se=Object(s.useState)(""),ue=se[0],ce=se[1],ie=Object(s.useState)(""),me=ie[0],ge=ie[1],de=Object(s.useState)(""),be=de[0],he=de[1],pe=Object(s.useState)(""),xe=pe[0],ve=pe[1],fe=Object(s.useState)(""),Se=fe[0],Ce=fe[1],Oe=Object(s.useState)(""),we=Oe[0],je=Oe[1],ze=Object(s.useState)(""),ke=ze[0],Le=ze[1],Ie=Object(s.useState)(""),ye=Ie[0],Ee=Ie[1],Ae=Object(s.useState)(""),Te=Ae[0],Me=Ae[1],Be=Object(s.useState)(""),De=Be[0],Re=Be[1],_e=Object(s.useState)(""),Fe=_e[0],We=_e[1],Ye=Object(s.useState)(""),Ne=Ye[0],He=Ye[1],Pe=Object(s.useState)(""),Ke=Pe[0],Ge=Pe[1],qe=Object(s.useState)(""),Xe=qe[0],Ue=qe[1],Je=Object(s.useState)(""),Qe=Je[0],Ve=Je[1],Ze=Object(s.useState)(""),$e=Ze[0],et=Ze[1],tt=Object(s.useState)(""),nt=tt[0],at=tt[1],lt=Object(s.useState)(""),ot=lt[0],rt=lt[1],st=Object(s.useState)(""),ut=st[0],ct=st[1],it=Object(s.useState)(""),mt=it[0],gt=it[1],dt=Object(s.useState)(""),bt=dt[0],ht=dt[1],pt="",xt=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),L(!1),C(t.target.value),n=t.target.value,e.next=6,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(i)},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"".concat("https://api.steechit.com/","measurements/"),data:{user:g,measurementType:b,gender:n,description:w}});case 6:a=e.sent,pt=a.data._id,ht(a.data._id),setTimeout((function(){M(!1),L(!0)}),2e3);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),vt=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),E(!0),"M"!==S){e.next=20;break}return console.log(pt),console.log(bt),e.prev=5,e.next=8,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(i)},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"".concat("https://api.steechit.com/","menMeasurement/"),data:{user:g,measurement:bt,shirt:{length:ye,shoulderLength:ke,chest:Te,tummy:De,sleeve:{short:Ke,long:Xe},roundSleeve:Ne,neck:Fe},pants:{lenght:Qe,waist:nt,hip:$e,lap:ot,knee:ut,ankle:mt}}});case 8:n=e.sent,E(!1),R(!0),console.log(n),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),a=Object(p.get)(e.t0,"response.data.message")||t.message,console.log(a);case 18:e.next=35;break;case 20:if("F"!==S){e.next=35;break}return e.prev=21,e.next=24,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(i)},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"".concat("https://api.steechit.com/","womenMeasurement/"),data:{user:g,measurement:bt,bust:F,waist:N,hip:K,average:X,shoulder:Q,length:{skirt:$,dress:ne,blouse:oe},sleeve:{short:{length:ue,width:me},elbow:{length:be,width:me},long:{length:Se,width:we}}}});case 24:o=e.sent,E(!1),R(!0),window.location.reload(),console.log(o),e.next=35;break;case 31:e.prev=31,e.t1=e.catch(21),r=Object(p.get)(e.t1,"response.data.message")||t.message,console.log(r);case 35:case"end":return e.stop()}}),e,null,[[5,14],[21,31]])})));return function(t){return e.apply(this,arguments)}}();return x(u.a.Fragment,null,x(r.Modal,Object(h.a)({isOpen:t,onClose:n,rounded:"md",maxW:"30rem",bg:"#fff",p:"0rem",overflow:"hidden"},"p","20px"),x(r.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"32px",onClick:n,cursor:"pointer"}),x("form",{onSubmit:vt},x(r.Text,{textAlign:"center",tag:"header",textSize:"title",m:{b:"2rem"}},"Add your measurement"),x(r.Label,{d:"block",m:{b:"1rem"}},"Measurement Type",x("select",{class:"select",onChange:function(e){v(e.target.value)},value:b},x("option",null,"Select Size"),x("option",{value:"S"},"Small"),x("option",{value:"M"},"Medium"),x("option",{value:"L"},"Large"),x("option",{value:"XL"},"Extra Large"),x("option",{value:"XXL"},"Extra Extra Large"))),x(r.Label,{d:"block",m:{b:"1rem"}},"Measurement Description",x(r.Textarea,{value:w,onChange:function(e){j(e.target.value)},placeholder:"Description"})),x(r.Label,{d:"block",m:{b:"1.5rem"}},"Your Gender",x("select",{class:"select",onChange:xt,value:S},x("option",null,"Select gender"),x("option",{value:"M"},"Male"),x("option",{value:"F"},"Female"))),T?x(r.Div,{m:{t:"20px"},d:"flex",align:"center",justify:"center"},x(r.Icon,{name:"Loading3",size:"24px"})):null,!0===k&&"F"===S?x(u.a.Fragment,null,x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Burst Size",x(r.Input,{onChange:function(e){W(e.target.value)},value:F}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Waist Size",x(r.Input,{onChange:function(e){H(e.target.value)},value:N}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Hip Size",x(r.Input,{onChange:function(e){G(e.target.value)},value:K}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Average Size",x(r.Input,{onChange:function(e){U(e.target.value)},value:X}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Shoulder Size",x(r.Input,{onChange:function(e){V(e.target.value)},value:Q})))),x(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Length"),x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Skirt Length",x(r.Input,{onChange:function(e){ee(e.target.value)},value:$}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Dress Length",x(r.Input,{onChange:function(e){ae(e.target.value)},value:ne}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Blouse Size",x(r.Input,{onChange:function(e){re(e.target.value)},value:oe})))),x(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Sleeve"),x(r.Label,{d:"block",m:{b:"1rem"}},"Short Sleeve",x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){ce(e.target.value)},value:ue,placeholder:"Enter Short Sleeve Length"})),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){ge(e.target.value)},value:me,placeholder:"Enter Short Sleeve Width"})))),x(r.Label,{d:"block",m:{b:"1rem"}},"Elbow Sleeve",x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){he(e.target.value)},value:be,placeholder:"Enter Elbow Sleeve Length"})),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){ve(e.target.value)},value:xe,placeholder:"Enter Elbow Sleeve Width"})))),x(r.Label,{d:"block"},"Long Sleeve",x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){Ce(e.target.value)},value:Se,placeholder:"Enter Long Sleeve Length"})),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){je(e.target.value)},value:we,placeholder:"Enter Long Sleeve With"}))))):!0===k&&"M"===S?x(u.a.Fragment,null,x(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Shirt"),x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Shirt Length",x(r.Input,{onChange:function(e){Ee(e.target.value)},value:ye}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Shoulder Length",x(r.Input,{onChange:function(e){Le(e.target.value)},value:ke}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Chest Size",x(r.Input,{onChange:function(e){Me(e.target.value)},value:Te}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Tummy Size",x(r.Input,{onChange:function(e){Re(e.target.value)},value:De}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Round Sleeve",x(r.Input,{onChange:function(e){He(e.target.value)},value:Ne}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Neck Size",x(r.Input,{onChange:function(e){We(e.target.value)},value:Fe}))),x(r.Col,{size:"12"},x(r.Label,{d:"block",m:{b:"1rem"}},"Sleeve",x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){Ue(e.target.value)},value:Xe,placeholder:"Enter Long Sleeve Length"})),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Input,{onChange:function(e){Ge(e.target.value)},value:Ke,placeholder:"Enter Short Sleeve Length"})))))),x(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Pants"),x(r.Row,null,x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Length",x(r.Input,{onChange:function(e){Ve(e.target.value)},value:Qe,placeholder:"Trouser Length"}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Waist",x(r.Input,{onChange:function(e){at(e.target.value)},value:nt,placeholder:"Trouser Waist"}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Hip",x(r.Input,{onChange:function(e){et(e.target.value)},value:$e,placeholder:"Trouser Hip"}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block"},"Lap",x(r.Input,{onChange:function(e){rt(e.target.value)},value:ot,placeholder:"Trouser Lap"}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block"},"Knee",x(r.Input,{onChange:function(e){ct(e.target.value)},value:ut,placeholder:"Trouser Knee"}))),x(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},x(r.Label,{d:"block",m:{b:"1rem"}},"Ankle",x(r.Input,{onChange:function(e){gt(e.target.value)},value:mt,placeholder:"Trouser Ankle"}))))):null,x(r.Button,{w:"100%",fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"2rem"},prefix:y?x(r.Icon,{name:"Loading3",pos:"absolute",top:"50%",left:"1rem",transform:"translateY(-50%)",size:"18px",color:"white",m:{r:"0.5rem"}}):null,disabled:D},y?"Loading":"Add measurement"))),x(r.Notification,{bg:"success700",isOpen:D,onClose:function(){return R(!1)},prefix:x(r.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},"Measurement Added Successfully"))}var f=n("nOHt"),S=u.a.createElement;function C(e){var t=e.measurement,n=Object(c.c)((function(e){return e.auth})).token,a=Object(s.useState)(t.shirt.shoulderLength),u=a[0],i=a[1],g=Object(s.useState)(t.shirt.length),d=g[0],b=g[1],h=Object(s.useState)(t.shirt.chest),x=h[0],v=h[1],f=Object(s.useState)(t.shirt.tummy),C=f[0],O=f[1],w=Object(s.useState)(t.shirt.neck),j=w[0],z=w[1],k=Object(s.useState)(t.shirt.roundSleeve),L=k[0],I=k[1],y=Object(s.useState)(t.shirt.sleeve.short),E=y[0],A=y[1],T=Object(s.useState)(t.shirt.sleeve.long),M=T[0],B=T[1],D=Object(s.useState)(t.pants.lenght),R=D[0],_=D[1],F=Object(s.useState)(t.pants.hip),W=F[0],Y=F[1],N=Object(s.useState)(t.pants.waist),H=N[0],P=N[1],K=Object(s.useState)(t.pants.lap),G=K[0],q=K[1],X=Object(s.useState)(t.pants.knee),U=X[0],J=X[1],Q=Object(s.useState)(t.pants.ankle),V=Q[0],Z=Q[1],$=Object(s.useState)(!1),ee=$[0],te=$[1],ne=Object(s.useState)(!1),ae=ne[0],le=ne[1],oe=t._id;return S("form",{onSubmit:function(){var e=Object(o.a)(l.a.mark((function e(a){var o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),te(!0),console.log(t),e.prev=3,e.next=6,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"".concat("https://api.steechit.com/","menMeasurement/").concat(oe),data:{shirt:{length:d,shoulderLength:u,chest:x,tummy:C,sleeve:{short:E,long:M},roundSleeve:L,neck:j},pants:{lenght:R,waist:H,hip:W,lap:G,knee:U,ankle:V}}});case 6:o=e.sent,te(!1),le(!0),console.log(o),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),r=Object(p.get)(e.t0,"response.data.message")||a.message,console.log(r);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}()},S(r.Text,{textAlign:"center",tag:"header",textSize:"title",m:{b:"2rem"}},"Edit your measurement"),S(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Shirt"),S(r.Row,null,S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Shirt Length",S(r.Input,{onChange:function(e){b(e.target.value)},value:d}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Shoulder Length",S(r.Input,{onChange:function(e){i(e.target.value)},value:u}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Chest Size",S(r.Input,{onChange:function(e){v(e.target.value)},value:x}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Tummy Size",S(r.Input,{onChange:function(e){O(e.target.value)},value:C}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Round Sleeve",S(r.Input,{onChange:function(e){I(e.target.value)},value:L}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Neck Size",S(r.Input,{onChange:function(e){z(e.target.value)},value:j}))),S(r.Col,{size:"12"},S(r.Label,{d:"block",m:{b:"1rem"}},"Sleeve",S(r.Row,null,S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Input,{onChange:function(e){B(e.target.value)},value:M,placeholder:"Enter Long Sleeve Length"})),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Input,{onChange:function(e){A(e.target.value)},value:E,placeholder:"Enter Short Sleeve Length"})))))),S(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Pants"),S(r.Row,null,S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Length",S(r.Input,{onChange:function(e){_(e.target.value)},value:R,placeholder:"Trouser Length"}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Waist",S(r.Input,{onChange:function(e){P(e.target.value)},value:H,placeholder:"Trouser Waist"}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Hip",S(r.Input,{onChange:function(e){Y(e.target.value)},value:W,placeholder:"Trouser Hip"}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block"},"Lap",S(r.Input,{onChange:function(e){q(e.target.value)},value:G,placeholder:"Trouser Lap"}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block"},"Knee",S(r.Input,{onChange:function(e){J(e.target.value)},value:U,placeholder:"Trouser Knee"}))),S(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},S(r.Label,{d:"block",m:{b:"1rem"}},"Ankle",S(r.Input,{onChange:function(e){Z(e.target.value)},value:V,placeholder:"Trouser Ankle"})))),S(r.Button,{w:"100%",fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"2rem"},prefix:ee?S(r.Icon,{name:"Loading3",pos:"absolute",top:"50%",left:"1rem",transform:"translateY(-50%)",size:"18px",color:"white",m:{r:"0.5rem"}}):null,disabled:ae},ee?"Loading":"Save Changes"),S(r.Notification,{bg:"success700",isOpen:ae,onClose:function(){return le(!1)},prefix:S(r.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},"Measurement edited successfully"))}var O=u.a.createElement;function w(e){var t=e.measurement,n=Object(c.c)((function(e){return e.auth})).token,a=Object(s.useState)(!1),u=a[0],i=a[1],g=Object(s.useState)(!1),d=g[0],b=g[1],h=Object(s.useState)(t.bust),x=h[0],v=h[1],f=Object(s.useState)(t.waist),S=f[0],C=f[1],w=Object(s.useState)(t.hip),j=w[0],z=w[1],k=Object(s.useState)(t.average),L=k[0],I=k[1],y=Object(s.useState)(t.shoulder),E=y[0],A=y[1],T=Object(s.useState)(t.length.skirt),M=T[0],B=T[1],D=Object(s.useState)(t.length.dress),R=D[0],_=D[1],F=Object(s.useState)(t.length.blouse),W=F[0],Y=F[1],N=Object(s.useState)(t.sleeve.short.length),H=N[0],P=N[1],K=Object(s.useState)(t.sleeve.short.width),G=K[0],q=K[1],X=Object(s.useState)(t.sleeve.elbow.length),U=X[0],J=X[1],Q=Object(s.useState)(t.sleeve.elbow.width),V=Q[0],Z=Q[1],$=Object(s.useState)(t.sleeve.long.length),ee=$[0],te=$[1],ne=Object(s.useState)(t.sleeve.long.width),ae=ne[0],le=ne[1],oe=t._id;return O("form",{onSubmit:function(){var e=Object(o.a)(l.a.mark((function e(t){var a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i(!0),e.prev=2,e.next=5,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"".concat("https://api.steechit.com/","womenMeasurement/").concat(oe),data:{bust:x,waist:S,hip:j,average:L,shoulder:E,length:{skirt:M,dress:R,blouse:W},sleeve:{short:{length:H,width:G},elbow:{length:U,width:G},long:{length:ee,width:ae}}}});case 5:a=e.sent,i(!1),b(!0),window.location.reload(),console.log(a),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(2),o=Object(p.get)(e.t0,"response.data.message")||t.message,console.log(o),i(!1);case 17:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}()},O(r.Text,{textAlign:"center",tag:"header",textSize:"title",m:{b:"2rem"}},"Edit your measurement"),O(r.Row,null,O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Burst Size",O(r.Input,{onChange:function(e){v(e.target.value)},value:x}))),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Waist Size",O(r.Input,{onChange:function(e){C(e.target.value)},value:S}))),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Hip Size",O(r.Input,{onChange:function(e){z(e.target.value)},value:j}))),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Average Size",O(r.Input,{onChange:function(e){I(e.target.value)},value:L}))),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Shoulder Size",O(r.Input,{onChange:function(e){A(e.target.value)},value:E})))),O(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Length"),O(r.Row,null,O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Skirt Length",O(r.Input,{onChange:function(e){B(e.target.value)},value:M}))),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Dress Length",O(r.Input,{onChange:function(e){_(e.target.value)},value:R}))),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Label,{d:"block",m:{b:"1rem"}},"Blouse Size",O(r.Input,{onChange:function(e){Y(e.target.value)},value:W})))),O(r.Text,{m:{b:"0.5rem"},tag:"header",textSize:"title"},"Sleeve"),O(r.Label,{d:"block",m:{b:"1rem"}},"Short Sleeve",O(r.Row,null,O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Input,{onChange:function(e){P(e.target.value)},value:H,placeholder:"Enter Short Sleeve Length"})),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Input,{onChange:function(e){q(e.target.value)},value:G,placeholder:"Enter Short Sleeve Width"})))),O(r.Label,{d:"block",m:{b:"1rem"}},"Elbow Sleeve",O(r.Row,null,O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Input,{onChange:function(e){J(e.target.value)},value:U,placeholder:"Enter Elbow Sleeve Length"})),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Input,{onChange:function(e){Z(e.target.value)},value:V,placeholder:"Enter Elbow Sleeve Width"})))),O(r.Label,{d:"block"},"Long Sleeve",O(r.Row,null,O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Input,{onChange:function(e){te(e.target.value)},value:ee,placeholder:"Enter Long Sleeve Length"})),O(r.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},O(r.Input,{onChange:function(e){le(e.target.value)},value:ae,placeholder:"Enter Long Sleeve With"})))),O(r.Button,{w:"100%",fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"2rem"},prefix:u?O(r.Icon,{name:"Loading3",pos:"absolute",top:"50%",left:"1rem",transform:"translateY(-50%)",size:"18px",color:"white",m:{r:"0.5rem"}}):null,disabled:d},u?"Loading":"Save Changes"),O(r.Notification,{bg:"success700",isOpen:d,onClose:function(){return b(!1)},prefix:O(r.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},"Measurement edited successfully"))}var j=u.a.createElement;function z(e){var t=e.isOpen,n=e.onClose,a=e.measurement,l=e.gender;return j(r.Modal,Object(h.a)({isOpen:t,onClose:n,rounded:"md",maxW:"30rem",bg:"#fff",p:"0rem",overflow:"hidden"},"p","20px"),j(r.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"32px",onClick:n,cursor:"pointer"}),j("M"===l?C:w,{measurement:a}))}var k=u.a.createElement;function L(){var e=Object(s.useState)(!0),t=e[0],n=e[1],a=Object(s.useState)([]),i=a[0],h=a[1],p=Object(s.useState)(!1),x=p[0],S=p[1],C=Object(s.useState)(!1),O=C[0],w=C[1],j=Object(s.useState)(!1),L=j[0],I=j[1],y=Object(s.useState)(!1),E=y[0],A=y[1],T=Object(s.useState)(""),M=T[0],B=T[1],D=Object(s.useState)(""),R=D[0],_=D[1],F=Object(c.c)((function(e){return e.auth})),W=g.a.getState().auth.token,Y=F._id,N=(Object(f.useRouter)(),function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(W)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","measurements"),params:{user:Y}}).then(function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.data.length){e.next=4;break}w(!0),e.next=18;break;case 4:if(B(t.data[0].gender),"M"!==t.data[0].gender){e.next=13;break}return e.next=8,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(W)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","menMeasurement/"),params:{user:Y}});case 8:n=e.sent,h(n.data),_(n.data._id),e.next=18;break;case 13:return e.next=15,m()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(W)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","womenMeasurement/"),params:{user:Y}});case 15:a=e.sent,h(a.data),_(a.data._id);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})).finally((function(){n(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(s.useEffect)((function(){N()}),[]),k(u.a.Fragment,null,k(b.a,{title:"Measurement | Steechit"},k(r.Div,{p:"20px",style:{borderBottom:"1px solid #ccc"},d:"flex",justify:"space-between",align:"center"},k(r.Text,{tag:"header",textSize:"title"},"My Measurement")),k(r.Div,{w:"100%",p:"20px"},t?k(d.a,null):k(r.Row,null,k(r.Col,{size:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},k(r.Div,{h:"300px",w:"100%",bg:"success200",rounded:"lg",d:"flex",align:"center",justify:"center",textAlign:"center",cursor:"pointer",onClick:function(){O?S(!0):A(!0)},m:{b:{xs:"20px",sm:"20px",md:"0",lg:"0",xl:"0"}}},k(r.Div,null,k(r.Icon,{name:"Draft",size:"70px",color:"success800"}),k(r.Text,{tag:"header",textSize:"subheader"},O?"Add Your Measurement":"Review Your Measurement")))),k(r.Col,{size:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},k(r.Div,{h:"300px",w:"100%",bg:"danger200",rounded:"lg",d:"flex",align:"center",justify:"center",textAlign:"center",cursor:"pointer",onClick:function(){O?I(!0):window.open("/measurement/".concat(R),"_blank")}},k(r.Div,null,k(r.Icon,{name:"Link",size:"70px",color:"danger800"}),k(r.Text,{tag:"header",textSize:"subheader"},"Share your measurement"))))))),k(v,{isOpen:x,onClose:function(){return S(!1)}}),k(z,{isOpen:E,onClose:function(){A(!1),N()},gender:M,measurement:i}),k(r.Notification,{bg:"danger700",isOpen:L,onClose:function(){return I(!1)},prefix:k(r.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},"You don't have a measurement to share"))}},Yo6R:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("x242"),l=n("nOHt"),o=n("q1tI"),r=n.n(o),s=n("2gv+"),u=n("nIqf"),c=n("C9CU"),i=n("rePB"),m=n("YFqc"),g=n.n(m),d=n("/MKj"),b=n("Jh6j"),h=n("mYGa"),p=r.a.createElement;function x(){var e,t=Object(d.c)((function(e){return e.auth})),n=Object(d.b)(),l=s.a.getState().auth.token,u=t._id,c=Object(d.c)((function(e){return e.user})),m=Object(o.useState)(!1),x=m[0];m[1];return Object(o.useEffect)((function(){n(Object(b.a)(l,u))}),[u,l]),p(r.a.Fragment,null,x?p(a.Div,{m:{b:"30px"}},p(h.a,null)):p(a.Div,null,p(a.Div,{d:"flex",justify:"center",p:"30px"},p(a.Image,{src:c.imageUrl,rounded:"lg",w:"130px",h:"130px",style:{objectFit:"cover",borderRadius:"100%"},border:"2px solid",borderColor:"#fff"})),p(a.Text,{tag:"header",textAlign:"center",textSize:"heading"},c.firstName," ",c.lastName),p(a.Div,{m:{t:"20px",b:"20px"}},p(g.a,{href:"/profile/orders"},p(a.Button,{w:"100%",h:"65px",justify:"flex-start",align:"center",prefix:p(a.Icon,{name:"Bag",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:p(a.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"Orders")),p(g.a,{href:"/profile/store"},p(a.Button,(e={w:"100%",h:"65px",justify:"flex-start"},Object(i.a)(e,"justify","flex-start"),Object(i.a)(e,"align","center"),Object(i.a)(e,"prefix",p(a.Icon,{name:"Store",size:"28px",color:"black800",m:{r:"1.5rem"}})),Object(i.a)(e,"suffix",p(a.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}})),Object(i.a)(e,"bg","white"),Object(i.a)(e,"textColor","black800"),Object(i.a)(e,"textSize","subheader"),Object(i.a)(e,"rounded","xs"),Object(i.a)(e,"style",{borderBottom:"1px solid #ccc"}),e),"My store")),p(g.a,{href:"/profile/wallet"},p(a.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:p(a.Icon,{name:"Card",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:p(a.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Balance")),p(g.a,{href:"/profile/measurement"},p(a.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:p(a.Icon,{name:"EditSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:p(a.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Measurement")),p(g.a,{href:"/profile/settings"},p(a.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:p(a.Icon,{name:"SettingsSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:p(a.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs"},"Settings")))))}var v=r.a.createElement;function f(e){var t=e.children,n=e.title,o=void 0===n?"My Store | Steechit":n,i=s.a.getState().auth.token,m=Object(l.useRouter)();return i||m.replace("/?auth=true"),v(r.a.Fragment,null,v(u.a,{title:o},v(a.Div,{w:"100%",d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},align:"flex-start",justify:"space-between"},v(a.Div,{w:{xs:"100%",sm:"100%",md:"34%",lg:"34%",xl:"34%"},d:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},bg:"#fff",shadow:"3",rounded:"md"},v(x,null)),v(a.Div,{bg:"#fff",shadow:"3",rounded:"md",w:{xs:"100%",sm:"100%",md:"63%",lg:"63%",xl:"63%"}},t)),v(c.a,null)))}}},[["Hrwy",1,2,4,0,3,5,6,7,8]]]);