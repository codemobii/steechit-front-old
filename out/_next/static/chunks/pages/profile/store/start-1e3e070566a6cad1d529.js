_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{Yo6R:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("x242"),a=r("nOHt"),o=r("q1tI"),c=r.n(o),s=r("2gv+"),l=r("nIqf"),i=r("C9CU"),u=r("rePB"),p=r("YFqc"),m=r.n(p),d=r("/MKj"),f=r("Jh6j"),b=r("mYGa"),h=c.a.createElement;function g(){var e,t=Object(d.c)((function(e){return e.auth})),r=Object(d.b)(),a=s.a.getState().auth.token,l=t._id,i=Object(d.c)((function(e){return e.user})),p=Object(o.useState)(!1),g=p[0];p[1];return Object(o.useEffect)((function(){r(Object(f.a)(a,l))}),[l,a]),h(c.a.Fragment,null,g?h(n.Div,{m:{b:"30px"}},h(b.a,null)):h(n.Div,null,h(n.Div,{d:"flex",justify:"center",p:"30px"},h(n.Image,{src:i.imageUrl,rounded:"lg",w:"130px",h:"130px",style:{objectFit:"cover",borderRadius:"100%"},border:"2px solid",borderColor:"#fff"})),h(n.Text,{tag:"header",textAlign:"center",textSize:"heading"},i.firstName," ",i.lastName),h(n.Div,{m:{t:"20px",b:"20px"}},h(m.a,{href:"/profile/orders"},h(n.Button,{w:"100%",h:"65px",justify:"flex-start",align:"center",prefix:h(n.Icon,{name:"Bag",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:h(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"Orders")),h(m.a,{href:"/profile/store"},h(n.Button,(e={w:"100%",h:"65px",justify:"flex-start"},Object(u.a)(e,"justify","flex-start"),Object(u.a)(e,"align","center"),Object(u.a)(e,"prefix",h(n.Icon,{name:"Store",size:"28px",color:"black800",m:{r:"1.5rem"}})),Object(u.a)(e,"suffix",h(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}})),Object(u.a)(e,"bg","white"),Object(u.a)(e,"textColor","black800"),Object(u.a)(e,"textSize","subheader"),Object(u.a)(e,"rounded","xs"),Object(u.a)(e,"style",{borderBottom:"1px solid #ccc"}),e),"My store")),h(m.a,{href:"/profile/wallet"},h(n.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:h(n.Icon,{name:"Card",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:h(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Balance")),h(m.a,{href:"/profile/measurement"},h(n.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:h(n.Icon,{name:"EditSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:h(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Measurement")),h(m.a,{href:"/profile/settings"},h(n.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:h(n.Icon,{name:"SettingsSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:h(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs"},"Settings")))))}var x=c.a.createElement;function v(e){var t=e.children,r=e.title,o=void 0===r?"My Store | Steechit":r,u=s.a.getState().auth.token,p=Object(a.useRouter)();return u||p.replace("/?auth=true"),x(c.a.Fragment,null,x(l.a,{title:o},x(n.Div,{w:"100%",d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},align:"flex-start",justify:"space-between"},x(n.Div,{w:{xs:"100%",sm:"100%",md:"34%",lg:"34%",xl:"34%"},d:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},bg:"#fff",shadow:"3",rounded:"md"},x(g,null)),x(n.Div,{bg:"#fff",shadow:"3",rounded:"md",w:{xs:"100%",sm:"100%",md:"63%",lg:"63%",xl:"63%"}},t)),x(i.a,null)))}},oea5:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r("o0o1"),a=r.n(n),o=r("HaE+"),c=r("x242"),s=r("q1tI"),l=r.n(s),i=r("/MKj"),u=r("vDqi"),p=r.n(u),m=r("Yo6R"),d=r("mYGa"),f=r("2gv+"),b=r("nOHt"),h=r("LvDl"),g=l.a.createElement;function x(e){var t=e.user,r=Object(i.c)((function(e){return e.auth})),n=r.token,u=r._id,m=Object(b.useRouter)(),d=Object(s.useState)(t.storeName),f=d[0],x=d[1],v=Object(s.useState)(t.email),w=v[0],j=v[1],y=Object(s.useState)(t.phone),O=y[0],S=y[1],C=Object(s.useState)(""),k=C[0],z=C[1],I=Object(s.useState)([]),D=I[0],A=I[1],E=Object(s.useState)([]),_=E[0],B=E[1],L=Object(s.useState)(""),N=L[0],F=L[1],T=Object(s.useState)([]),R=T[0],M=T[1],P=Object(s.useState)(t.address),G=P[0],q=P[1],Y=Object(s.useState)(t.zipCode),J=Y[0],H=Y[1],K=Object(s.useState)(""),U=K[0],W=K[1],X=Object(s.useState)(!1),Z=X[0],Q=X[1],V=Object(s.useState)(!1),$=(V[0],V[1]),ee=Object(s.useState)(!1),te=ee[0],re=ee[1],ne=Object(s.useState)(""),ae=ne[0],oe=ne[1],ce=Object(s.useState)(""),se=ce[0],le=ce[1],ie=Object(s.useState)(""),ue=ie[0],pe=ie[1],me=Object(s.useState)(""),de=me[0],fe=me[1],be=Object(s.useState)(!1),he=be[0],ge=be[1],xe=Object(s.useState)(""),ve=xe[0],we=xe[1],je=Object(s.useState)("0"),ye=je[0],Oe=je[1];Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","countries/")});case 2:t=e.sent,z(t.data[0]._id);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","states/")});case 2:t=e.sent,M(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","categories/")});case 2:t=e.sent,B(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t(),r(),navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){pe(e.coords.latitude),fe(e.coords.longitude)}))}),[n,ue,de]);var Se=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],re(!0),(n=new FormData).append("image",r,r.name,r.size,r.type),e.next=6,p.a.post("https://steechit-image-manager.herokuapp.com/upload",n).then((function(e){we("Logo upload was successful."),ge(!0),oe(e.data.link)})).catch((function(e){we("Something went wrong"),ge(!0)})).finally((function(){re(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.files[0],$(!0),(n=new FormData).append("image",r,r.name,r.size,r.type),e.next=6,p.a.post("https://steechit-image-manager.herokuapp.com/upload",n).then((function(e){le(e.data.link),we("Store banner uploaded successfully"),ge(!0)})).catch((function(){we("Something went wrong"),ge(!0)})).finally((function(){$(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"0"!==ye){e.next=6;break}we("Please select store role"),ge(!0),e.next=25;break;case 6:return Q(!0),e.prev=7,e.next=10,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"".concat("https://api.steechit.com/","stores/"),data:{role_id:ye,user:u,storeName:f,phone:O,email:w,storeLogo:{thumb:"",url:ae},storeBanner:{thumb:"",url:se},country:k,state:N,geolocation:{long:de,lat:ue},city:U,address:G,zipCode:J,productCategories:D}});case 10:r=e.sent,Q(!1),we("Store created successfully"),ge(!0),m.push("/profile/store"),console.log(r),e.next=25;break;case 18:e.prev=18,e.t0=e.catch(7),o=Object(h.get)(e.t0,"response.data.message")||e.t0.message,console.log(o),we(o),Q(!1),ge(!0);case 25:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(t){return e.apply(this,arguments)}}();return g(l.a.Fragment,null,g("form",{onSubmit:ke},g(c.Row,null,g(c.Col,{size:"12"},g(c.Div,{d:"flex",align:"center",justify:"center",m:{t:"1rem",b:"3rem"},pos:"relative"},g(c.Image,{src:se,w:"100%",h:"150px",rounded:"lg",pos:"absolute",top:"0",left:"0",style:{objectFit:"cover"}}),g(c.Div,{pos:"absolute",top:"0",left:"0",w:"100%",h:"150",rounded:"lg",bg:"red"}),g("div",{className:"selectImageIcon",style:{bottom:20,right:10}},g("input",{type:"file",ml:10,className:"selectImage",onChange:Ce})),g(c.Div,{m:{t:"3rem"},rounded:"circle",pos:"relative",bg:"gray200",w:"120px",h:"120px"},g(c.Image,{pos:"absolute",rounded:"circle",overflow:"hidden",w:"100%",h:"100%",style:{objectFit:"cover"},left:"0",right:"0",src:ae,shadow:"3"}),te?g(c.Div,{rounded:"circle",className:"overlay_light",d:"flex",align:"center",justify:"center"},g(c.Icon,{name:"Loading3",size:"32px"})):null,g("div",{className:"selectImageIcon"},g("input",{type:"file",className:"selectImage",onChange:Se,src:ae}))))),g(c.Col,{size:"12"},g(c.Text,null,"Store type?"),g(c.Div,{d:"flex"},g(c.Label,{align:"center",textWeight:"600",m:{b:"0.5rem",r:"2rem"}},g(c.Radiobox,{onChange:function(){return Oe("2")},checked:"2"===ye,name:"count"}),"Fabric Store"),g(c.Label,{align:"center",textWeight:"600",m:{b:"0.5rem",r:"2rem"}},g(c.Radiobox,{onChange:function(){return Oe("3")},checked:"3"===ye,name:"count"}),"Tailor"))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"Store name",g(c.Input,{placeholder:"Store name",value:f,onChange:function(e){x(e.target.value)}}))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"Email address",g(c.Input,{placeholder:"Email address",value:w,onChange:function(e){j(e.target.value)}}))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"Phone number",g(c.Input,{placeholder:"070********",value:O,onChange:function(e){S(e.target.value)},type:"number"}))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"State",g("select",{class:"select",onChange:function(e){F(e.target.value)},value:N},g("option",null,"Select state"),R.map((function(e,t){return g("option",{key:e._id,value:e._id},e.name)}))))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"City",g(c.Input,{placeholder:"Lagos",type:"text",value:U,onChange:function(e){W(e.target.value)}}))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"Zip Code",g(c.Input,{placeholder:"1001010",value:J,onChange:function(e){H(e.target.value)}}))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"Category",g("select",{class:"select",onChange:function(e){A(e.target.value)},value:D},g("option",null,"Select category"),_.map((function(e){return g("option",{key:e._id,value:e._id},e.categoryName)}))))),g(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},g(c.Label,{d:"block",m:{b:"1rem"}},"Address",g(c.Input,{placeholder:"Somewhere, somethere",value:G,onChange:function(e){q(e.target.value)}})))),g(c.Button,{fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"1rem"},prefix:Z?g(c.Icon,{name:"Loading3",size:"18px",color:"white",m:{r:"0.5rem"}}):null},Z?"Creating store":"Create Store")),g(c.Notification,{bg:"warning700",isOpen:he,onClose:function(){return ge(!1)},prefix:g(c.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},ve))}var v=r("Jh6j"),w=l.a.createElement;function j(){var e=Object(i.c)((function(e){return e.auth})),t=Object(i.c)((function(e){return e.user})),r=Object(i.b)(),n=f.a.getState().auth.token,l=e._id,u=Object(b.useRouter)(),h=Object(s.useState)(!0),g=h[0],j=h[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(n)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","stores/"),params:{user:l}}).then(function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.data.length){e.next=4;break}return e.abrupt("return");case 4:u.push("/profile/store");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})).finally((function(){j(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r(Object(v.a)(n,l)),e()}),[l,n,r]),w(m.a,{title:"Create your store today | Steechit"},w(c.Div,{p:"20px",style:{borderBottom:"1px solid #ccc"},d:"flex",justify:"space-between",align:"center"},w(c.Text,{tag:"header",d:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},textSize:"title"},"Create your store")),g?w(d.a,null):w(c.Div,{p:"20px",pos:"relative"},w(x,{user:t})))}},rt3E:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/store/start",function(){return r("oea5")}])}},[["rt3E",1,2,4,0,3,5,6,7,8]]]);