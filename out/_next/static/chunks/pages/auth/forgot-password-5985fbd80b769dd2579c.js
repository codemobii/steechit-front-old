_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/Y8a":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),s=n("x242"),u=n("q1tI"),c=n.n(u),i=n("nOHt"),p=n("/MKj"),l=n("nIqf"),m=n("vDqi"),d=n.n(m),f=n("LvDl"),w=n("yuru"),b=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d()({headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"104.236.174.88",port:3128},method:"POST",url:"".concat("https://steechit-api.herokuapp.com/","forgotten_password"),data:e});case 3:r=t.sent,n({type:w.a,payload:{success:!0,message:"processing",data:r.data}}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),o=Object(f.get)(t.t0,"response.data.message")||t.t0.message,n({type:w.a,payload:{success:!1,message:o}});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=c.a.createElement;function h(){var e=Object(u.useState)(!1),t=e[0],n=e[1],r=Object(u.useState)(""),m=r[0],d=r[1],f=Object(u.useState)(!1),w=f[0],h=f[1],x=Object(i.useRouter)(),y=Object(p.b)(),v=Object(p.c)((function(e){return e.forgetPassword})),O=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n(!0),e.next=4,y(b({phone:m}));case 4:!1===v.success?h(!0):h(!1),d(""),n(!1),!0===v.success&&x.push("/auth/reset-password");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g(c.a.Fragment,null,g(l.a,{title:"Forgot password | Steechit"},g(s.Div,{maxW:"30rem",bg:"#fff",shadow:"2",rounded:"md",m:{l:"auto",r:"auto",t:"50px",b:"50px"},p:"20px"},g("form",{onSubmit:O},g(s.Text,{textAlign:"center",tag:"header",textSize:"title",fontFamily:"primary",m:{b:"2rem"}},"Forgot password"),g(s.Text,{tag:"label",d:"block",m:{b:"1rem"}},"Enter your phone number to reset your password. A password reset code will be send to you."),g(s.Input,{placeholder:"Phone number",m:{b:"2rem"},fontFamily:"primary",type:"number",value:m,onChange:function(e){d(e.target.value)}}),g(s.Button,{w:"100%",fontFamily:"primary",bg:"warning700",justify:"center",prefix:t?g(s.Icon,{name:"Loading3",pos:"absolute",top:"50%",left:"1rem",transform:"translateY(-50%)",size:"18px",color:"white",m:{r:"0.5rem"}}):null},t?"Loading":"Send code")))),g(s.Notification,{bg:"danger700",isOpen:w,onClose:function(){return h(!1)},prefix:g(s.Icon,{name:"CloseSolid",color:"white",size:"18px",m:{r:"0.5rem"}})},v.message))}},"GNn/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot-password",function(){return n("/Y8a")}])}},[["GNn/",1,2,4,0,3,5,6,7]]]);