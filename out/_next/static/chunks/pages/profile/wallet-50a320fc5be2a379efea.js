_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"1otG":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/wallet",function(){return r("BKLc")}])},BKLc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return v}));var n=r("o0o1"),o=r.n(n),a=r("HaE+"),c=r("x242"),l=r("q1tI"),s=r.n(l),i=r("/MKj"),u=r("vDqi"),f=r.n(u),d=r("2gv+"),p=r("mYGa"),x=r("EW5V"),m=r("Yo6R"),b=s.a.createElement;function h(e){var t=e.isOpen,r=e.onClose,n=Object(l.useState)(""),s=n[0],u=n[1],d=Object(i.c)((function(e){return e.user})),p=Object(i.c)((function(e){return e.auth})),x=p.token;p._id;return b(c.Modal,{isOpen:t,onClose:r,align:{xs:"flex-start",sm:"flex-start",md:"flex-start",lg:"center",xl:"center"},rounded:"md",maxW:"25rem",p:"20px",bg:"#fff",overflow:"hidden"},b(c.Icon,{name:"Cross",pos:"absolute",top:"1rem",right:"1rem",size:"32px",onClick:r,cursor:"pointer"}),b("form",{onSubmit:function(e){e.preventDefault();var t=function(e){for(var t="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length,o=0;o<e;o++)t+=r.charAt(Math.floor(Math.random()*n));return t}(20);console.log(d.email+d.phone+d.firstName),FlutterwaveCheckout({public_key:"FLWPUBK_TEST-c4c676322706278c4e45b09eb8ac0e4b-X",tx_ref:t,amount:s,currency:"NGN",country:"NG",payment_options:"card",customer:{email:d.email,phone_number:d.phone,name:d.firstName},callback:function(){var e=Object(a.a)(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r.flw_ref),r.flw_ref,e.prev=2,e.next=5,f()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(x)},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"".concat("https://api.steechit.com/","wallet"),data:{trnsId:t}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),customizations:{title:"Steechit",description:"Fund your wallet",logo:"https://github.com/ijelechimaobi/steechit-front/blob/main/LOGO%203D%20Icon_3%20PNG.png?raw=true"}})}},b(c.Text,{textAlign:"center",tag:"header",textSize:"title",m:{b:"2rem"}},"Fund your wallet"),b(c.Label,{d:"block",m:{b:"1rem"}},"Amount",b(c.Input,{type:"number",onChange:function(e){return u(e.target.value)},value:s})),b(c.Button,{p:{r:"2rem",l:"2rem"},bg:"warning700",w:"100%",m:{t:"2rem"}},"Continue")))}var g=r("nOHt"),w=s.a.createElement;function v(){var e=Object(i.c)((function(e){return e.auth})),t=(Object(i.b)(),d.a.getState().auth.token),r=e._id,n=(Object(g.useRouter)(),Object(l.useState)([])),u=n[0],b=n[1],v=Object(l.useState)(""),j=v[0],y=v[1],O=Object(l.useState)(!0),k=O[0],S=O[1],C=Object(l.useState)(!1),z=C[0],B=C[1],D=Object(l.useState)(!0),A=D[0],_=D[1];return Object(l.useEffect)((function(){(function(){var e=Object(a.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(t)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","wallet/"),params:{user:r}}).then(function(){var e=Object(a.a)(o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(n.data[0].bal),e.next=3,f()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(t)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","history/"),params:{user:r}});case 3:a=e.sent,console.log(a),b(a.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)})).finally((function(){S(!1)}));case 2:return e.next=4,f()({headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(t)},proxy:{host:"104.236.174.88",port:3128},method:"GET",url:"".concat("https://api.steechit.com/","stores/"),params:{user:r}}).then(function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===t.data.length&&_(!1);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,t]),w(m.a,{title:"My Wallet | Steechit"},w(c.Div,{p:"20px",style:{borderBottom:"1px solid #ccc"},d:"flex",justify:"space-between",align:"center"},w(c.Text,{tag:"header",textSize:"title"},"My Balance")),w(c.Div,{w:"100%",p:"20px"},k?w(p.a,null):w(s.a.Fragment,null,w(c.Div,{w:"100%",d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},align:"center",p:"20px",justify:"space-between",bg:"success200",rounded:"lg"},w(c.Div,null,w(c.Text,{d:"block",tag:"label"},"Wallet balance"),w(c.Text,{tag:"h3",textSize:"heading"},"\u20a6",j)),w(c.Div,{d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"}},w(c.Button,{w:"100%",bg:"black800",onClick:function(){return B(!0)},m:{r:"1rem",b:{xs:"10px",sm:"10px",md:"0",lg:"0",xl:"0"},t:{xs:"10px",sm:"10px",md:"0",lg:"0",xl:"0"}}},"Fund"),A?w(c.Button,{w:"100%",textColor:"black700",hoverTextColor:"black900",bg:"transparent",hoverBg:"info200",border:"1px solid",borderColor:"black700",hoverBorderColor:"black900"},"Withdraw"):null)),w(c.Text,{m:{t:"1rem"},tag:"header",textSize:"subheader"},"Transaction History"),0!==u.length?w("table",{className:"table"},w("thead",null,w("tr",null,w("th",{scope:"col"},"S/N"),w("th",{scope:"col"},"Amount"),w("th",{scope:"col"},"Type"),w("th",{scope:"col"},"Date"))),w("tbody",null,u.map((function(e,t){return w("tr",null,w("td",{"data-label":"S/N"},t+1),w("td",{"data-label":"Amount"},e.amount),w("td",{"data-label":"Type"},e.type),w("td",{"data-label":"Date"},new Date(e.createdAt).toDateString()))})))):w(x.a,null))),w(h,{isOpen:z,onClose:function(){return B(!1)}}))}},EW5V:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("x242"),o=r("q1tI"),a=r.n(o).a.createElement;function c(){return a(n.Div,{w:"100%",h:"300px",d:"flex",align:"center",justify:"center",textAlign:"center"},a(n.Div,null,a(n.Image,{src:"https://assets.jiji.ng/static/img/profile-redesign/adverts/no-adverts-images/no-adverts-active.svg",width:"300px",m:{b:"20px"}}),a(n.Text,{tag:"header",textSize:"title"},"Nothing found !")))}},Yo6R:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r("x242"),o=r("nOHt"),a=r("q1tI"),c=r.n(a),l=r("2gv+"),s=r("nIqf"),i=r("C9CU"),u=r("rePB"),f=r("YFqc"),d=r.n(f),p=r("/MKj"),x=r("Jh6j"),m=r("mYGa"),b=c.a.createElement;function h(){var e,t=Object(p.c)((function(e){return e.auth})),r=Object(p.b)(),o=l.a.getState().auth.token,s=t._id,i=Object(p.c)((function(e){return e.user})),f=Object(a.useState)(!1),h=f[0];f[1];return Object(a.useEffect)((function(){r(Object(x.a)(o,s))}),[s,o]),b(c.a.Fragment,null,h?b(n.Div,{m:{b:"30px"}},b(m.a,null)):b(n.Div,null,b(n.Div,{d:"flex",justify:"center",p:"30px"},b(n.Image,{src:i.imageUrl,rounded:"lg",w:"130px",h:"130px",style:{objectFit:"cover",borderRadius:"100%"},border:"2px solid",borderColor:"#fff"})),b(n.Text,{tag:"header",textAlign:"center",textSize:"heading"},i.firstName," ",i.lastName),b(n.Div,{m:{t:"20px",b:"20px"}},b(d.a,{href:"/profile/orders"},b(n.Button,{w:"100%",h:"65px",justify:"flex-start",align:"center",prefix:b(n.Icon,{name:"Bag",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:b(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"Orders")),b(d.a,{href:"/profile/store"},b(n.Button,(e={w:"100%",h:"65px",justify:"flex-start"},Object(u.a)(e,"justify","flex-start"),Object(u.a)(e,"align","center"),Object(u.a)(e,"prefix",b(n.Icon,{name:"Store",size:"28px",color:"black800",m:{r:"1.5rem"}})),Object(u.a)(e,"suffix",b(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}})),Object(u.a)(e,"bg","white"),Object(u.a)(e,"textColor","black800"),Object(u.a)(e,"textSize","subheader"),Object(u.a)(e,"rounded","xs"),Object(u.a)(e,"style",{borderBottom:"1px solid #ccc"}),e),"My store")),b(d.a,{href:"/profile/wallet"},b(n.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:b(n.Icon,{name:"Card",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:b(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Balance")),b(d.a,{href:"/profile/measurement"},b(n.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:b(n.Icon,{name:"EditSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:b(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs",style:{borderBottom:"1px solid #ccc"}},"My Measurement")),b(d.a,{href:"/profile/settings"},b(n.Button,{w:"100%",h:"65px",justify:"flex-start",prefix:b(n.Icon,{name:"SettingsSolid",size:"28px",color:"black800",m:{r:"1.5rem"}}),suffix:b(n.Icon,{pos:"absolute",right:"1.5rem",name:"DownArrowCircle",size:"24px",style:{transform:"rotate(-90deg)"}}),bg:"white",textColor:"black800",textSize:"subheader",rounded:"xs"},"Settings")))))}var g=c.a.createElement;function w(e){var t=e.children,r=e.title,a=void 0===r?"My Store | Steechit":r,u=l.a.getState().auth.token,f=Object(o.useRouter)();return u||f.replace("/?auth=true"),g(c.a.Fragment,null,g(s.a,{title:a},g(n.Div,{w:"100%",d:{xs:"block",sm:"block",md:"flex",lg:"flex",xl:"flex"},align:"flex-start",justify:"space-between"},g(n.Div,{w:{xs:"100%",sm:"100%",md:"34%",lg:"34%",xl:"34%"},d:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},bg:"#fff",shadow:"3",rounded:"md"},g(h,null)),g(n.Div,{bg:"#fff",shadow:"3",rounded:"md",w:{xs:"100%",sm:"100%",md:"63%",lg:"63%",xl:"63%"}},t)),g(i.a,null)))}}},[["1otG",1,2,4,0,3,5,6,7,8]]]);