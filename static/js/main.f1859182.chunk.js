(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(48)},36:function(e,t){},38:function(e,t){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(23),c=n.n(r),u=n(8),o=n(24),i=n(25),m={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25},s=n(26),p=function(){function e(t){Object(o.a)(this,e),this._sheet=s.parse(t)}return Object(i.a)(e,[{key:"getCell",value:function(e){console.log(e);var t=e.replace(/[^A-Za-z]/g,"").toLowerCase(),n=e.replace(/[^0-9]/g,""),a=m[t],l=parseInt(n)-1;return this._sheet[l][a]}},{key:"getColumn",value:function(e){var t=e.replace(/[^A-Za-z]/g,"").toLowerCase(),n=m[t];return this._sheet.map(function(e){return e[n]})}}]),e}(),E=n(12);n(47);function g(){var e=new E,t=["Hello, world!"];t.push("some more text"),e.text(20,20,t),e.autoTable({theme:"plain",margin:{top:30},head:[["Name","Happiness level"]],body:[["David","not happy"],["James","very happy"],["Bilbo Baggins","baggily happy"]]}),e.text(20,80,"even more text"),e.save("report.pdf")}var h=function(e){var t=e.csvString,n=e.name;if(""===t)return null;var a=new p(t),r=a.getCell("E1"),c=a.getColumn("B").findIndex(function(e){return e===n}),u=parseInt(c)+1,o=a.getCell("D".concat(u)),i=a.getCell("E".concat(u)),m=a.getCell("O".concat(u)),s=a.getCell("U".concat(u)),E=a.getCell("F".concat(u)),h=a.getCell("P".concat(u)),d=a.getCell("V".concat(u)),v=a.getCell("G".concat(u)),f=a.getCell("Q".concat(u)),C=a.getCell("W".concat(u)),y=a.getCell("X".concat(u));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"This is a demo!!!"),l.a.createElement("h3",null,"Sales Incentive Variable Pay Earnings"),l.a.createElement("h3",null,"A sales person with this name was found on row ",u),l.a.createElement("h3",null,"Quarter: ",r),l.a.createElement("h3",null,"Name: ",n),l.a.createElement("h3",null,"Variable target: ",o),l.a.createElement("h3",null,"Here is the table:"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Component"),l.a.createElement("th",null,"Component-Target-Compensation"),l.a.createElement("th",null,"Component-Achievement-Level"),l.a.createElement("th",null,"Payout-Amount")),l.a.createElement("tr",null,l.a.createElement("td",null,"Country/Team"),l.a.createElement("td",null,i),l.a.createElement("td",null,m),l.a.createElement("td",null,s)),l.a.createElement("tr",null,l.a.createElement("td",null,"Individual-revenue"),l.a.createElement("td",null,E),l.a.createElement("td",null,h),l.a.createElement("td",null,d)),l.a.createElement("tr",null,l.a.createElement("td",null,"Individual-sales"),l.a.createElement("td",null,v),l.a.createElement("td",null,f),l.a.createElement("td",null,C))),l.a.createElement("h4",null,"The total gross discretionary pay is ",y),l.a.createElement("button",{onClick:g},"Generate PDF"))};var d=function(){var e=l.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=l.a.useState(""),c=Object(u.a)(r,2),o=c[0],i=c[1],m=l.a.useState(null),s=Object(u.a)(m,2),p=s[0],E=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p)if(p.size>5e5)alert("This file is HUGE! What are you trying to upload?");else{var t=new FileReader;t.onload=function(){a(t.result)},t.readAsText(p)}}},l.a.createElement("input",{type:"file",accept:".csv",onChange:function(e){return E(e.target.files[0])}}),l.a.createElement("input",{type:"text",placeholder:"salesperson name",onChange:function(e){return i(e.target.value)},value:o}),l.a.createElement("input",{type:"submit",value:"Generate Report"})),l.a.createElement(h,{csvString:n,name:o}))};c.a.render(l.a.createElement(d,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.f1859182.chunk.js.map