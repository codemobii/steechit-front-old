_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{TJf7:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var o=r("o0o1"),a=r.n(o),n=r("HaE+"),c=r("x242"),s=r("q1tI"),i=r.n(s),l=r("/MKj"),u=r("vDqi"),p=r.n(u),d=r("Yo6R"),f=r("mYGa"),m=r("2gv+"),b=r("nOHt"),x=r("Jh6j"),h=r("rePB"),g=r("LvDl"),j=i.a.createElement;function v(e){e.user;var t,r=Object(l.c)((function(e){return e.auth})),o=Object(s.useState)(""),u=o[0],d=o[1],f=Object(s.useState)(""),m=f[0],b=f[1],x=Object(s.useState)(""),v=x[0],w=x[1],O=Object(s.useState)([]),y=O[0],k=O[1],S=Object(s.useState)(""),C=(S[0],S[1],Object(s.useState)("")),z=C[0],D=C[1],I=Object(s.useState)(""),A=I[0],B=I[1],E=Object(s.useState)(""),_=(E[0],E[1]),P=Object(s.useState)(""),N=P[0],T=P[1],F=Object(s.useState)(!1),L=F[0],M=F[1],J=Object(s.useState)(!1),R=(J[0],J[1]),Y=Object(s.useState)(!1),q=Y[0],G=Y[1],U=Object(s.useState)(!1),H=U[0],K=U[1],X=Object(s.useState)(""),Q=X[0],V=X[1],W=Object(s.useState)([]),Z=W[0],$=W[1],ee=r.token,te=r._id;Object(s.useEffect)((function(){ae(),ne()}),[]);var re=function(){var e=Object(n.a)(a.a.mark((function e(t){var r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),M(!0),e.prev=2,e.next=5,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(ee)},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"https://steechit-api.herokuapp.com/products/",data:{productName:u,productDescription:m,productCategory:v,store:N,user:te,availableOptions:{measurement:null,price:z,percentageDiscount:A},productPictures:Z,feedback:{user:te}}});case 5:r=e.sent,M(!1),R(!0),V("Product uploaded successfully"),K(!0),d(""),D(""),$([]),w(""),B(""),b(""),console.log(r),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(2),o=Object(g.get)(e.t0,"response.data.message")||e.t0.message,console.log(o),V(o),K(!0);case 25:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(n.a)(a.a.mark((function e(t){var r,o,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G(!0),4!==Z.length){e.next=7;break}V("Your can only add four (4) images for product"),K(!0),G(!1),e.next=21;break;case 7:return r=t.target.files[0],(o=new FormData).append("image",r,r.name,r.size,r.type),e.next=12,p.a.post("https://steechit-image-manager.herokuapp.com/upload",o);case 12:n=e.sent,_(n.data.link),(c=Z).push({url:n.data.link}),$(c),console.log(Z),V("Image uploaded successfully"),K(!0),G(!1);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(ee)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"https://steechit-api.herokuapp.com/categories/"});case 2:t=e.sent,k(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(n.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(ee)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"https://steechit-api.herokuapp.com/stores/",params:{user:te}});case 2:t=e.sent,T(t.data[0]._id),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return j(i.a.Fragment,null,j("form",{onSubmit:re},j(c.Row,null,j(c.Col,{size:"12"},j(c.Div,{d:"block",m:{b:"1rem"}},"Product Image(s)",j(c.Div,{d:"flex",style:{flexFlow:"wrap"},align:"center",m:{t:"0.5rem"},justify:"flex-start",pos:"relative"},Z.map((function(e){var t;return j(c.Div,(t={key:e,pos:"relative",w:"120px",h:"120px",border:"1px solid",borderColor:"gray300",rounded:"md",d:"flex",align:"center"},Object(h.a)(t,"pos","relative"),Object(h.a)(t,"overflow","hidden"),Object(h.a)(t,"justify","center"),Object(h.a)(t,"m",{r:"1rem",b:"1rem"}),t),j(c.Image,{pos:"absolute",top:"0",left:"0",w:"100%",h:"100%",src:e.url,style:{objectFit:"cover"}}),j(c.Icon,{zIndex:"10",name:"CloseSolid",size:"30px",color:"gray600",onClick:function(){var t=Z,r=t.indexOf(e,0),o=t.splice(0,r);$(o),console.log(o)}}))})),j(c.Div,(t={pos:"relative",w:"120px",h:"120px",border:"1px solid",borderColor:"gray300",rounded:"md",d:"flex",align:"center",justify:"center"},Object(h.a)(t,"pos","relative"),Object(h.a)(t,"overflow","hidden"),Object(h.a)(t,"m",{t:"-15px"}),t),j(c.Icon,{name:q?"Loading3":"Add",size:"50px",color:"gray600"}),j("input",{type:"file",style:{position:"absolute",top:0,left:0,height:"100%",cursor:"pointer",opacity:"0"},onChange:oe}))))),j(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},j(c.Label,{d:"block",m:{b:"1rem"}},"Product Name",j(c.Input,{placeholder:"Product Name",value:u,onChange:function(e){d(e.target.value)}}))),j(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},j(c.Label,{d:"block",m:{b:"1rem"}},"Product Category",j("select",{className:"select",onChange:function(e){w(e.target.value)},value:v},j("option",null,"Select state"),y.map((function(e){return j("option",{key:e,value:e._id},e.categoryName)}))))),j(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},j(c.Label,{d:"block",m:{b:"1rem"}},"Product Price",j(c.Input,{placeholder:"Price",value:z,onChange:function(e){D(e.target.value)}}))),j(c.Col,{size:{xs:"12",sm:"12",md:"12",lg:"6",xl:"6"}},j(c.Label,{d:"block",m:{b:"1rem"}},"Discount for product in percent",j(c.Input,{placeholder:"Discount",value:A,onChange:function(e){B(e.target.value)}}))),j(c.Col,{size:"12"},j(c.Label,{d:"block",m:{b:"1rem"}},"Product Description",j(c.Textarea,{placeholder:"Product Description",value:m,onChange:function(e){b(e.target.value)}})))),j(c.Button,{fontFamily:"primary",bg:"warning700",justify:"center",m:{t:"1rem"},prefix:L?j(c.Icon,{name:"Loading3",size:"18px",color:"white",m:{r:"0.5rem"}}):null},L?"Uploading":"Add product")),j(c.Notification,{bg:"warning700",isOpen:H,onClose:function(){return K(!1)},prefix:j(c.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},Q))}var w=i.a.createElement;function O(){var e=Object(l.c)((function(e){return e.auth})),t=Object(l.c)((function(e){return e.user})),r=Object(l.b)(),o=m.a.getState().auth.token,i=e._id,u=Object(b.useRouter)(),h=Object(s.useState)(!0),g=h[0],j=h[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(o)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","stores/"),params:{user:i}}).then(function(){var e=Object(n.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.data.length){e.next=4;break}return e.abrupt("return");case 4:u.push("/profile/store/start");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})).finally((function(){j(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r(Object(x.a)(o,i)),e()}),[i,o,r]),w(d.a,{title:"Sell a product | Steechit"},w(c.Div,{p:"20px",style:{borderBottom:"1px solid #ccc"},d:"flex",justify:"space-between",align:"center"},w(c.Text,{tag:"header",d:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},textSize:"title"},"Upload a product")),g?w(f.a,null):w(c.Div,{p:"20px",pos:"relative"},w(v,{user:t})))}},Yo6R:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var o=r("x242"),a=r("nOHt"),n=r("q1tI"),c=r.n(n),s=r("2gv+"),i=r("nIqf"),l=r("C9CU"),u=r("rePB"),p=r("YFqc"),d=r.n(p),f=r("/MKj"),m=r("Jh6j"),b=r("mYGa"),x=c.a.createElement;function h(){var e,t=Object(f.c)((function(e){return e.auth})),r=Object(f.b)(),a=s.a.getState().auth.token,i=t._id,l=Object(f.c)((function(e){return e.user})),p=Object(n.useState)(!1),h=p[0];p[1];return Object(n.useEffect)((function(){r(Object(m.a)(a,i))}),[i,a]),x(c.a.Fragment,null,h?x(o.Div,{m:{b:"30px"}},x(b.a,null)):x(o.Div,null,x(o.Div,{d:"flex",justify:"center",p:"30px"},x(o.Image,{src:l.imageUrl,rounded:"lg",w:"130px",h:"130px",style:{objectFit:"cover",borderRadius:"100%"},border:"2px solid",borderColor:"#fff"})),x(o.Text,{tag:"header",textAlign:"center",textSize:"heading"},l.firstName," ",l.lastName),x(o.Div,{m:{t:"20px",b:"20px"}},x(d.a,{href:"/profile/orders"},x(o.Button,{w:"100%",h:"65px",justify:"flex-start",align:"center",prefix:x(o.Icon,{name:"Bag",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:x(o.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"Orders")),x(d.a,{href:"/profile/store"},x(o.Button,(e={w:"100%",h:"65px",justify:"flex-start"},Object(u.a)(e,"justify","flex-start"),Object(u.a)(e,"align","center"),Object(u.a)(e,"prefix",x(o.Icon,{name:"Store",size:"28px",color:"black800",m:{r:"1.5rem"}})),Object(u.a)(e,"suffix",x(o.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}})),Object(u.a)(e,"bg","white"),Object(u.a)(e,"textColor","black800"),Object(u.a)(e,"textSize","subheader"),Object(u.a)(e,"rounded","xs"),Object(u.a)(e,"style",{borderBottom:"1px solid #ccc"}),e),"My store")),x(d.a,{href:"/profile/wallet"},x(o.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:x(o.Icon,{name:"Card",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:x(o.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Balance")),x(d.a,{href:"/profile/measurement"},x(o.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:x(o.Icon,{name:"EditSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:x(o.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Measurement")),x(d.a,{href:"/profile/settings"},x(o.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:x(o.Icon,{name:"SettingsSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:x(o.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs"},"Settings")))))}var g=c.a.createElement;function j(e){var t=e.children,r=e.title,n=void 0===r?"My Store | Steechit":r,u=s.a.getState().auth.token,p=Object(a.useRouter)();return u||p.replace("/?auth=true"),g(c.a.Fragment,null,g(i.a,{title:n},g(o.Div,{w:"100%",d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},align:"flex-start",justify:"space-between"},g(o.Div,{w:{xs:"100%",sm:"100%",md:"34%",lg:"34%",xl:"34%"},d:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},bg:"#fff",shadow:"3",rounded:"md"},g(h,null)),g(o.Div,{bg:"#fff",shadow:"3",rounded:"md",w:{xs:"100%",sm:"100%",md:"63%",lg:"63%",xl:"63%"}},t)),g(l.a,null)))}},s58i:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/store/sell",function(){return r("TJf7")}])}},[["s58i",1,2,4,0,3,5,6,7,8]]]);