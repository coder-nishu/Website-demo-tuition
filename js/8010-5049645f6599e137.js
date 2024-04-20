"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8010],{8010:function(a,b,c){var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(7294),i=c(1664),j=c.n(i),k=c(5675),l=c.n(k),m=c(7040),n=c(9210),o=c(9669),p=c.n(o),q=c(1163),r=c(2642),s=c(3786),t=c(9583),u=function(){var a,b,c,e=(0,q.useRouter)(),i=(0,h.useContext)(r.appContext),k=(0,h.useState)([]),o=k[0],u=k[1],v=(0,h.useState)(!1),w=v[0],x=v[1],y=e.pathname,z=function(a){a.preventDefault(),o.setUserData([]),(0,s.Kt)(),e.push("/"),p().post("api/partner/logout").then(function(a){a.status?(o.setUserData([]),(0,s.Kt)()):alert("not ok")})},A=(c=(0,d.Z)(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:x(!1),e.push({pathname:"/tutor_list/",query:{type:"premium",district:"",area:"",medium:"",class:"",gender:""}});case 2:case"end":return a.stop()}},a)})),function(a){return c.apply(this,arguments)}),B=function(a){x(!1),e.push(a)};return(0,h.useEffect)(function(){u(i)},[i]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("nav",{className:"navbar navbar-expand-lg bg-light shadow-sm navbar_bg",children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)(j(),{passHref:!0,href:"/",children:(0,g.jsx)(l(),{className:"logo-nav",width:180,height:58,src:m.Z,alt:"logo"})}),(0,g.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){return x(!w)},children:(0,g.jsx)(t.Fm7,{className:"text-light"})}),(0,g.jsxs)("div",{className:"collapse navbar-collapse ".concat(w&&"show"),id:"navbarSupportedContent",children:[(0,g.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0 main-menu",children:[(0,g.jsx)("li",{className:"nav-item link",children:(0,g.jsx)("a",{onClick:function(){B("/tuition-list"),localStorage.setItem("job_page",1)},className:"nav-link ".concat("/tuition-list"===y?"active":""),children:"TUITION JOBS"})}),(0,g.jsx)("li",{className:"nav-item link",children:(0,g.jsx)("span",{className:"link",onClick:A,children:(0,g.jsx)("a",{className:"nav-link ".concat("/tutor_list"===e.pathname?"active":""),children:"PREMIUM TUTORS"})})}),(0,g.jsx)("li",{className:"nav-item link",children:(0,g.jsx)("a",{onClick:function(){return B("/request-for-tutor")},className:"nav-link ".concat("/request-for-tutor"===e.pathname?"active":""),children:"TUTOR REQUEST"})}),(0,g.jsx)("li",{className:"nav-item",children:(0,g.jsx)("a",{className:"nav-link",href:"https://course.tutorsheba.com/",children:"COURSES"})})]}),(0,g.jsx)("ul",{className:"d-flex navbar-nav mb-2 mb-lg-0",children:(null==o?void 0:null===(a=o.userData)|| void 0===a?void 0:a.name)?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("li",{className:"nav-item dropdown pt-5",children:[(0,g.jsx)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:null==o?void 0:null===(b=o.userData)|| void 0===b?void 0:b.name}),(0,g.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(null==o?void 0:o.userType)=="partner"?(0,g.jsx)("li",{children:(0,g.jsx)(j(),{passHref:!0,href:"/uddokta/home",children:(0,g.jsxs)("a",{onClick:function(){return x(!1)},className:"dropdown-item",children:[(0,g.jsx)(t.q1E,{})," Profile"]})})}):(null==o?void 0:o.userType)=="student"?(0,g.jsx)("li",{children:(0,g.jsx)(j(),{passHref:!0,href:"/student/profile",children:(0,g.jsxs)("a",{onClick:function(){return x(!1)},className:"dropdown-item",children:[(0,g.jsx)(t.q1E,{})," Profile"]})})}):(0,g.jsx)("li",{children:(0,g.jsx)(j(),{passHref:!0,href:"/profile",children:(0,g.jsxs)("a",{onClick:function(){return x(!1)},className:"dropdown-item",children:[(0,g.jsx)(t.q1E,{})," Profile"]})})}),(0,g.jsx)("li",{onClick:z,className:"link",children:(0,g.jsxs)("a",{onClick:function(){return x(!1)},className:"dropdown-item",children:[(0,g.jsx)(t.fHX,{})," Logout"]})})]})]}),(0,g.jsx)("li",{className:"nav-item pt-5 mr-5 link",children:(0,g.jsx)(j(),{href:"/profile/notifications",children:(0,g.jsxs)("div",{className:"notification-icon p-2",children:[(0,g.jsx)(l(),{src:n.Z,alt:"Notification Icon",height:22,width:22}),(null==localStorage?void 0:localStorage.getItem("notification"))>0&&(0,g.jsx)("div",{className:"notification-icon__badge",children:null==localStorage?void 0:localStorage.getItem("notification")})]})})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("li",{className:"nav-item mb-hide",children:(0,g.jsx)(j(),{passHref:!0,href:"/auth/register",children:(0,g.jsxs)("a",{type:"button",className:"btn mx-2 hover-up",style:{border:"1px solid #fff"},children:[(0,g.jsx)(t.fHX,{})," Register"]})})}),(0,g.jsx)("li",{className:"nav-item mb-hide",children:(0,g.jsx)(j(),{passHref:!0,href:"/auth/login",children:(0,g.jsxs)("span",{className:"btn btn-default2 hover-up link",style:{border:"1px solid #fff"},children:[(0,g.jsx)(t.IPB,{})," Login"]})})}),(0,g.jsxs)("li",{className:"nav-item my-3 pc-hide",children:[(0,g.jsxs)("span",{onClick:function(){return B("/auth/register")},type:"button",className:"btn mx-2 hover-up link text-light",style:{border:"1px solid #fff"},children:[(0,g.jsx)(t.fmQ,{})," Register"]}),(0,g.jsxs)("span",{onClick:function(){return B("/auth/login")},className:"btn btn-default2 hover-up link",style:{border:"1px solid #fff"},children:[(0,g.jsx)(t.IPB,{})," Login"]})]})]})})]})]})})})};b.Z=u}}])