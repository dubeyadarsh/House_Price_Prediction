(this.webpackJsonphouse_price_prediction=this.webpackJsonphouse_price_prediction||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),r=c.n(a),i=(c(22),c(3)),l=(c(23),c(17)),o=c.n(l),j=(c(24),c(0)),d=function(){return Object(j.jsx)("div",{className:"vh-100 bg-dark",children:Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)(o.a,{type:"bars",color:"#16E2F5",height:150,width:150})})})},b=(c(26),c(7)),u=c.n(b);function h(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),r=Object(i.a)(a,2),l=r[0],o=r[1],d=Object(n.useState)(0),b=Object(i.a)(d,2),h=b[0],O=b[1],m=Object(n.useState)(0),x=Object(i.a)(m,2),f=x[0],v=x[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),N=g[0],S=g[1],y=Object(n.useState)(""),E=Object(i.a)(y,2),_=E[0],C=E[1];Object(n.useEffect)((function(){u.a.get("/get_location_names").then((function(e){s(e.data.locations),console.log(c)}))}),[]);return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("div",{className:"header",children:[" ",Object(j.jsx)("h1",{children:" House  Price Prediction"})]}),Object(j.jsxs)("div",{className:"img",children:[Object(j.jsx)("div",{className:"form",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("form",{method:"post",onSubmit:function(e){if(e.preventDefault(),f>h+2||0==h||0==f||0==l||"Select location in Bangalore"===N)return document.getElementById("err").style.display="flex",void alert("Please Enter Correct Details!!!");u.a.post("/predict_home_price",{location:N,bhk:h,bath:f,total_sqft:l}).then((function(e){if(console.log(e.data.estimated_price),parseFloat(e.data.estimated_price)<0)return document.getElementById("err").style.display="flex",void alert("Please Enter Correct Details!!!");C(e.data.estimated_price+" lacs")}))},children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-25",children:Object(j.jsx)("label",{for:"fname",children:"Total Sqft"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{value:l,onChange:function(e){return o(e.target.value)},type:"number",name:"total_sqft",placeholder:"Enter Area ..",required:!0})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-25",children:Object(j.jsx)("label",{for:"lname",children:" Rooms"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{value:h,onChange:function(e){return O(e.target.value)},type:"number",name:"bhk",placeholder:"Enter no. of Room",required:!0})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-25",children:Object(j.jsx)("label",{for:"bath",children:"Bathrooms"})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("input",{value:f,onChange:function(e){return v(e.target.value)},type:"number",name:"bath",placeholder:"Enter no. of Bathroom",required:!0})})]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-25",children:Object(j.jsx)("label",{for:"country",children:"Location "})}),Object(j.jsx)("div",{className:"col-75",children:Object(j.jsxs)("select",{value:N,onChange:function(e){S(e.target.value)},required:!0,children:[Object(j.jsx)("option",{selected:"selected",children:"Select location in Bangalore"}),c.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e})}))]})})]}),Object(j.jsxs)("h7",{id:"err",children:[Object(j.jsx)("strong",{style:{color:"red"},children:" ** "})," Please Enter Correct details and make sure to select the location"]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("button",{id:"submitbtn",type:"submit",value:"Submit",children:" Submit"})})]})})}),Object(j.jsxs)("div",{className:"result",children:[Object(j.jsxs)("span",{children:[" ",Object(j.jsx)("strong",{children:" Estimated Price : "})," "]})," ",Object(j.jsxs)("strong",{children:[_,"  "]}),"  "]})]})]})}var O=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){setTimeout((function(){s(!1)}),5e3)})),Object(j.jsx)("div",{className:"App",children:c?Object(j.jsx)(d,{}):Object(j.jsx)(h,{})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.260e582a.chunk.js.map