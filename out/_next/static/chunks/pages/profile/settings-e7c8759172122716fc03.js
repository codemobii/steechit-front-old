_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{oLY8:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var r=a("o0o1"),n=a.n(r),o=a("HaE+"),s=a("x242"),c=a("vDqi"),l=a.n(c),u=a("LvDl"),i=a("nOHt"),p=a("q1tI"),m=a.n(p),d=a("/MKj"),g=a("2gv+"),h=m.a.createElement;function b(e){var t=e.user,a=Object(d.c)((function(e){return e.auth})),r=g.a.getState().auth.token,c=a._id,i=Object(p.useState)(t.firstName),b=i[0],f=i[1],x=Object(p.useState)(t.lastName),v=x[0],w=x[1],y=Object(p.useState)(t.email),C=y[0],j=y[1],O=Object(p.useState)(t.dateOfBirth),S=O[0],k=O[1],z=Object(p.useState)(t.gender),I=z[0],A=z[1],L=Object(p.useState)(t.state),q=L[0],D=L[1],N=Object(p.useState)(t.country),B=N[0],_=N[1],E=Object(p.useState)(!1),F=E[0],T=E[1],U=Object(p.useState)(!1),P=U[0],R=U[1],G=Object(p.useState)(t.imageUrl),J=G[0],M=G[1],Y=Object(p.useState)(""),K=Y[0],H=Y[1],X=Object(p.useState)(!1),Z=X[0],Q=X[1],V=Object(p.useState)(t.phone),W=V[0],$=V[1],ee=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,o,s,i,p,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.target.files[0]){e.next=30;break}return R(!0),a=t.target.files[0],console.log(a),(o=new FormData).append("image",a,a.name,a.size,a.type),e.next=8,l.a.post("https://steechit-image-manager.herokuapp.com/upload",o);case 8:return s=e.sent,i=s.data.link,e.prev=10,e.next=13,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(r)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"https://steechit-api.herokuapp.com/users/".concat(c),data:{avatar:{url:i}}});case 13:p=e.sent,console.log(p),M(i),H("Image Upload Successful"),Q(!0),R(!1),e.next=28;break;case 21:e.prev=21,e.t0=e.catch(10),m=Object(u.get)(e.t0,"response.data.message")||e.t0.message,console.log(e.t0),R(!1),H(m),Q(!0);case 28:e.next=32;break;case 30:H("Please select an image"),Q(!0);case 32:case"end":return e.stop()}}),e,null,[[10,21]])})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),T(!0),e.prev=2,e.next=5,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(r)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"https://steechit-api.herokuapp.com/users/".concat(c),data:{firstName:b,lastName:v,email:C,phone:W,dateOfBirth:S,gender:I,country:B,state:q}});case 5:a=e.sent,T(!1),H("Updated successfully"),Q(!0),console.log(a),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(2),o=Object(u.get)(e.t0,"response.data.message")||e.t0.message,console.log(e.t0),H(o),Q(!0),T(!1);case 19:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return h(m.a.Fragment,null,h("form",{onSubmit:te},h(s.Row,null,h(s.Col,{size:"12"},h(s.Div,{d:"flex",align:"center",justify:"center",m:{t:"1rem",b:"3rem"},pos:"relative"},h(s.Div,{pos:"relative",w:"120px",h:"120px"},h(s.Image,{pos:"absolute",rounded:"circle",overflow:"hidden",w:"100%",h:"100%",style:{objectFit:"cover"},left:"0",right:"0",src:J,shadow:"3"}),P?h(s.Div,{rounded:"circle",className:"overlay_light",d:"flex",align:"center",justify:"center"},h(s.Icon,{name:"Loading3",size:"32px"})):null,h("div",{className:"selectImageIcon"},h("input",{type:"file",className:"selectImage",onChange:ee}))))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"First name",h(s.Input,{placeholder:"John",value:b,onChange:function(e){f(e.target.value)}}))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"Last name",h(s.Input,{placeholder:"Doe",value:v,onChange:function(e){w(e.target.value)}}))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"Phone number",h(s.Input,{placeholder:"070********",value:W,onChange:function(e){$(e.target.value)}}))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"Email address",h(s.Input,{placeholder:"johndoe@gmail.com",value:C,onChange:function(e){j(e.target.value)}}))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"Date of Birth",h(s.Input,{placeholder:"Date of birth",type:"date",value:S,onChange:function(e){k(e.target.value)}}))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"Gender",h("select",{class:"select",onChange:function(e){A(e.target.value),console.log(I)},value:I},h("option",null,"Select gender"),h("option",{value:"F"},"Female"),h("option",{value:"M"},"Male")))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"Country",h(s.Input,{placeholder:"Nigeria",value:B,onChange:function(e){_(e.target.value)}}))),h(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},h(s.Label,{d:"block",m:{b:"1rem"}},"State",h(s.Input,{placeholder:"Lagos",value:q,onChange:function(e){D(e.target.value)}})))),h(s.Button,{fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"1rem"},prefix:F?h(s.Icon,{name:"Loading3",size:"18px",color:"white",m:{r:"0.5rem"}}):null},F?"Saving":"Save changes")),h(s.Notification,{bg:"warning700",isOpen:Z,onClose:function(){return Q(!1)},prefix:h(s.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},K))}var f=m.a.createElement;function x(e){var t=e.user,a=Object(d.c)((function(e){return e.auth})),r=g.a.getState().auth.token,c=a._id,i=Object(p.useState)(!1),h=i[0],b=i[1],x=Object(p.useState)(!1),v=x[0],w=x[1],y=Object(p.useState)(""),C=y[0],j=y[1],O=Object(p.useState)(t.address),S=O[0],k=O[1],z=Object(p.useState)(t.zipCode),I=z[0],A=z[1],L=Object(p.useState)(t.phone),q=L[0],D=L[1],N=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.prev=2,e.next=5,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(r)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"https://steechit-api.herokuapp.com/users/".concat(c),data:{phone:q,contact:{address:S,zipCode:I}}});case 5:a=e.sent,b(!1),j("Updated successfully"),w(!0),console.log(a),e.next=19;break;case 12:e.prev=12,e.t0=e.catch(2),o=Object(u.get)(e.t0,"response.data.message")||e.t0.message,console.log(e.t0),j(o),w(!0),b(!1);case 19:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return f(m.a.Fragment,null,f("form",{onSubmit:N},f(s.Row,null,f(s.Col,{size:"12"},f(s.Label,{d:"block",m:{b:"1rem"}},"Address",f(s.Input,{placeholder:"72 Ostritch Street, Everywhere",value:S,onChange:function(e){k(e.target.value)}}))),f(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},f(s.Label,{d:"block",m:{b:"1rem"}},"Zip Code",f(s.Input,{placeholder:"0100011",value:I,onChange:function(e){A(e.target.value)}}))),f(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},f(s.Label,{d:"block",m:{b:"1rem"}},"Phone number",f(s.Input,{placeholder:"070********",value:q,onChange:function(e){D(e.target.value)}})))),f(s.Button,{fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"1rem"},prefix:h?f(s.Icon,{name:"Loading3",size:"18px",color:"white",m:{r:"0.5rem"}}):null},h?"Saving":"Save changes")),f(s.Notification,{bg:"warning700",isOpen:v,onClose:function(){return w(!1)},prefix:f(s.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},C))}var v=a("nIqf"),w=a("mYGa"),y=a("C9CU"),C=a("YFqc"),j=a.n(C),O=a("qKju"),S=m.a.createElement;function k(){var e=Object(d.b)(),t=Object(i.useRouter)();return S(m.a.Fragment,null,S(s.Text,{tag:"header",m:{b:"2rem"},textSize:"title"},"Edit profile"),S(j.a,{href:"/profile/settings?q=about-me"},S(s.Button,{w:"100%",h:"65px",justify:"space-between",suffix:S(s.Icon,{name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),align:"center",bg:"white",textColor:"black800",textSize:"paragraph",rounded:"xs",p:"0",border:{t:"1px solid"},borderColor:"gray300"},"About you")),S(j.a,{href:"/profile/settings?q=contact"},S(s.Button,{w:"100%",h:"65px",justify:"space-between",suffix:S(s.Icon,{name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),align:"center",bg:"white",textColor:"black800",textSize:"paragraph",rounded:"xs",p:"0",border:{t:"1px solid"},borderColor:"gray300"},"Contact")),S(j.a,{href:"/profile/settings?q=update-password"},S(s.Button,{w:"100%",h:"65px",justify:"space-between",suffix:S(s.Icon,{name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),align:"center",bg:"white",textColor:"black800",textSize:"paragraph",rounded:"xs",p:"0",border:{t:"1px solid"},borderColor:"gray300"},"Update password")),S(j.a,{href:"/profile/settings?q=store"},S(s.Button,{w:"100%",h:"65px",justify:"space-between",suffix:S(s.Icon,{name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),align:"center",bg:"white",textColor:"black800",textSize:"paragraph",rounded:"xs",p:"0",border:{t:"1px solid"},borderColor:"gray300"},"Store")),S(s.Button,{onClick:function(){e(Object(O.a)({date:"pen"}))&&t.push("/?auth=true")},w:"100%",h:"65px",justify:"space-between",suffix:S(s.Icon,{name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),align:"center",bg:"white",textColor:"black800",textSize:"paragraph",rounded:"xs",p:"0",border:{t:"1px solid"},borderColor:"gray300"},"Signout"))}var z=m.a.createElement;function I(e){e.user;var t=Object(d.c)((function(e){return e.auth})),a=t.token,r=t._id,c=Object(i.useRouter)(),g=Object(p.useState)(""),h=g[0],b=g[1],f=Object(p.useState)(""),x=f[0],v=f[1],w=Object(p.useState)(""),y=w[0],C=w[1],j=Object(p.useState)(""),O=j[0],S=j[1],k=Object(p.useState)([]),I=k[0],A=k[1],L=Object(p.useState)([]),q=L[0],D=L[1],N=Object(p.useState)(""),B=N[0],_=N[1],E=Object(p.useState)([]),F=E[0],T=E[1],U=Object(p.useState)(""),P=U[0],R=U[1],G=Object(p.useState)(""),J=G[0],M=G[1],Y=Object(p.useState)(""),K=Y[0],H=Y[1],X=Object(p.useState)(!1),Z=X[0],Q=X[1],V=Object(p.useState)(!1),W=(V[0],V[1]),$=Object(p.useState)(!1),ee=$[0],te=$[1],ae=Object(p.useState)(""),re=ae[0],ne=ae[1],oe=Object(p.useState)(""),se=oe[0],ce=oe[1],le=Object(p.useState)(""),ue=le[0],ie=(le[1],Object(p.useState)("")),pe=ie[0],me=(ie[1],Object(p.useState)(!1)),de=me[0],ge=me[1],he=Object(p.useState)(""),be=he[0],fe=he[1];Object(p.useEffect)((function(){var e=function(){var e=Object(o.a)(n.a.mark((function e(){var t,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(a)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"https://steechit-api.herokuapp.com/stores/",params:{user:r}});case 2:t=e.sent,void 0===(o=t.data[0])?c.push("/profile/store/start"):(b(o.storeName),ce(o.storeBanner.url),ne(o.storeLogo.url),v(o.email),C(o.phone),_(o.state),H(o.city),M(o.zipCode),A(o.productCategories[0]),R(o.address)),console.log(o);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(a)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"https://steechit-api.herokuapp.com/countries/"});case 2:t=e.sent,S(t.data[0]._id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(a)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"https://steechit-api.herokuapp.com/states/"});case 2:t=e.sent,T(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(a)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"https://steechit-api.herokuapp.com/categories/"});case 2:t=e.sent,D(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),s(),u()}),[a,ue,pe]);var xe=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],te(!0),(r=new FormData).append("image",a,a.name,a.size,a.type),e.next=6,l.a.post("https://steechit-image-manager.herokuapp.com/upload",r).then((function(e){fe("Logo upload was successful."),ge(!0),ne(e.data.link)})).catch((function(e){fe("Something went wrong"),ge(!0)})).finally((function(){te(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(o.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],W(!0),(r=new FormData).append("image",a,a.name,a.size,a.type),e.next=6,l.a.post("https://steechit-image-manager.herokuapp.com/upload",r).then((function(e){ce(e.data.link),fe("Store banner uploaded successfully"),ge(!0)})).catch((function(){fe("Something went wrong"),ge(!0)})).finally((function(){W(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(o.a)(n.a.mark((function e(t){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),Q(!0),e.prev=2,e.next=5,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(a)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"https://steechit-api.herokuapp.com/stores/".concat(r),data:{storeName:h,phone:y,email:x,storeLogo:{thumb:"",url:re},storeBanner:{thumb:"",url:se},country:O,state:B,city:K,address:P,zipCode:J,productCategories:I}});case 5:o=e.sent,Q(!1),fe("Store created successfully"),ge(!0),Q(!1),console.log(o),e.next=20;break;case 13:e.prev=13,e.t0=e.catch(2),s=Object(u.get)(e.t0,"response.data.message")||e.t0.message,console.log(e.t0),fe(s),ge(!0),Q(!1);case 20:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return z(m.a.Fragment,null,z("form",{onSubmit:we},z(s.Row,null,z(s.Col,{size:"12"},z(s.Div,{d:"flex",align:"center",justify:"center",m:{t:"1rem",b:"3rem"},pos:"relative"},z(s.Image,{src:se,w:"100%",h:"150px",rounded:"lg",pos:"absolute",top:"0",left:"0",style:{objectFit:"cover"}}),z(s.Div,{pos:"absolute",top:"0",left:"0",w:"100%",h:"150",rounded:"lg",bg:"red"}),z("div",{className:"selectImageIcon",style:{bottom:20,right:10}},z("input",{type:"file",ml:10,className:"selectImage",onChange:ve})),z(s.Div,{m:{t:"3rem"},rounded:"circle",pos:"relative",bg:"gray200",w:"120px",h:"120px"},z(s.Image,{pos:"absolute",rounded:"circle",overflow:"hidden",w:"100%",h:"100%",style:{objectFit:"cover"},left:"0",right:"0",src:re,shadow:"3"}),ee?z(s.Div,{rounded:"circle",className:"overlay_light",d:"flex",align:"center",justify:"center"},z(s.Icon,{name:"Loading3",size:"32px"})):null,z("div",{className:"selectImageIcon"},z("input",{type:"file",className:"selectImage",onChange:xe,src:re}))))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"Store name",z(s.Input,{placeholder:"Store name",value:h,onChange:function(e){b(e.target.value)}}))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"Email address",z(s.Input,{placeholder:"Email address",value:x,onChange:function(e){v(e.target.value)}}))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"Phone number",z(s.Input,{placeholder:"070********",value:y,onChange:function(e){C(e.target.value)},type:"number"}))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"State",z("select",{class:"select",onChange:function(e){_(e.target.value)},value:B},z("option",null,"Select state"),F.map((function(e,t){return z("option",{key:e._id,value:e._id},e.name)}))))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"City",z(s.Input,{placeholder:"Lagos",type:"text",value:K,onChange:function(e){H(e.target.value)}}))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"Zip Code",z(s.Input,{placeholder:"1001010",value:J,onChange:function(e){M(e.target.value)}}))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"Category",z("select",{class:"select",onChange:function(e){A(e.target.value)},value:I},z("option",null,"Select category"),q.map((function(e){return z("option",{key:e._id,value:e._id},e.categoryName)}))))),z(s.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},z(s.Label,{d:"block",m:{b:"1rem"}},"Address",z(s.Input,{placeholder:"Somewhere, somethere",value:P,onChange:function(e){R(e.target.value)}})))),z(s.Button,{fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"1rem"},prefix:Z?z(s.Icon,{name:"Loading3",size:"18px",color:"white",m:{r:"0.5rem"}}):null},Z?"Saving":"Save Changes")),z(s.Notification,{bg:"warning700",isOpen:de,onClose:function(){return ge(!1)},prefix:z(s.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},be))}var A=m.a.createElement;function L(){var e=Object(d.c)((function(e){return e.auth})),t=g.a.getState().auth.token,a=e._id,r=Object(p.useState)(!1),c=r[0],i=r[1],h=Object(p.useState)(!1),b=h[0],f=h[1],x=Object(p.useState)(""),v=x[0],w=x[1],y=Object(p.useState)(""),C=y[0],j=y[1],O=Object(p.useState)(""),S=O[0],k=O[1],z=Object(p.useState)(""),I=z[0],L=z[1],q=Object(p.useState)(!1),D=q[0],N=q[1],B=function(){var e=Object(o.a)(n.a.mark((function e(r){var o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),C!==S){e.next=22;break}return i(!0),e.prev=3,e.next=6,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(t)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"https://steechit-api.herokuapp.com/users/".concat(a),data:{password:S}});case 6:o=e.sent,i(!1),w("Updated successfully"),f(!0),console.log(o),e.next=20;break;case 13:e.prev=13,e.t0=e.catch(3),s=Object(u.get)(e.t0,"response.data.message")||e.t0.message,console.log(e.t0),w(s),f(!0),i(!1);case 20:e.next=24;break;case 22:w("Password incorrect"),f(!0);case 24:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return A(m.a.Fragment,null,A("form",{onSubmit:B},A(s.Row,null,A(s.Col,{size:"12"},A(s.Label,{d:"block",m:{b:"1rem"}},"Current password",A(s.Input,{placeholder:"Current password",name:C,onChange:function(e){j(e.target.value)},type:"password"}),!0===D?A(s.Text,{textColor:"danger700",tag:"label"},"Password not match"):null)),A(s.Col,{size:"12"},A(s.Label,{d:"block",m:{b:"1rem"}},"New password",A(s.Input,{placeholder:"New password",name:S,onChange:function(e){k(e.target.value)},type:"password"}))),A(s.Col,{size:"12"},A(s.Label,{d:"block",m:{b:"1rem"}},"Confirm password",A(s.Input,{placeholder:"Confirm password",name:I,onChange:function(e){L(e.target.value)},onKeyUp:function(){S!==I?N(!0):(S===I||""===I)&&N(!1)},type:"password"})))),A(s.Button,{fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"1rem"},prefix:c?A(s.Icon,{name:"Loading3",size:"18px",color:"white",m:{r:"0.5rem"}}):null},c?"Saving":"Save changes")),A(s.Notification,{bg:"warning700",isOpen:b,onClose:function(){return f(!1)},prefix:A(s.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},v))}var q=a("Jh6j"),D=m.a.createElement;function N(){var e=Object(i.useRouter)(),t=void 0===e.query.q||"about-me"===e.query.q?"About me":"contact"===e.query.q?"Contact":"update-password"===e.query.q?"Update Password":"store"===e.query.q?"My store":null,a=Object(d.c)((function(e){return e.auth})),r=Object(d.c)((function(e){return e.user})),c=Object(d.b)(),h=g.a.getState().auth.token,f=a._id,C=Object(p.useState)(!0),j=C[0],O=C[1];return Object(p.useEffect)((function(){var e=function(){var e=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(h)},proxy:{host:"104.236.174.88",port:3128},method:"PUT",url:"https://steechit-api.herokuapp.com/users/".concat(f)}).then((function(e){O(!1)}));case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),t=Object(u.get)(e.t0,"response.data.message")||e.t0.message,O(!1),console.log(t);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();c(Object(q.a)(h,f)),e()}),[f,h,c]),D(m.a.Fragment,null,D(v.a,null,D(s.Div,{w:"100%",d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},align:"flex-start",justify:"space-between"},D(s.Div,{w:{xs:"100%",sm:"100%",md:"34%",lg:"34%",xl:"34%"},bg:"#fff",shadow:"3",rounded:"md",p:"20px",m:{b:"1rem"}},D(k,null)),D(s.Div,{bg:"#fff",shadow:"3",rounded:"md",w:{xs:"100%",sm:"100%",md:"63%",lg:"63%",xl:"63%"}},D(s.Div,{p:"20px",style:{borderBottom:"1px solid #ccc"},d:"flex",justify:"space-between",align:"center"},D(s.Text,{tag:"header",textSize:"title"},t)),D(s.Div,{p:"20px"},j?D(w.a,null):void 0===e.query.q||"about-me"===e.query.q?D("div",{id:"about-me"},D(b,{user:r})):"contact"===e.query.q?D("div",{id:"contact"},D(x,{user:r})):"update-password"===e.query.q?D("div",{id:"update-password"},D(L,{user:r})):"store"===e.query.q?D(I,{user:r}):null))),D(y.a,null)))}},xvTU:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/settings",function(){return a("oLY8")}])}},[["xvTU",1,2,4,0,3,5,6,7,8]]]);