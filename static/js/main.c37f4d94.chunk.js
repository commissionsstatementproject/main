(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(46)},35:function(e,t){},37:function(e,t){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(22),c=n.n(r),u=n(8),o=n(23),i=n(24),m={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25},s=n(25),d=function(){function e(t){Object(o.a)(this,e),this._sheet=s.parse(t)}return Object(i.a)(e,[{key:"getCell",value:function(e){var t=e.replace(/[^A-Za-z]/g,"").toLowerCase(),n=e.replace(/[^0-9]/g,""),a=m[t],l=parseInt(n)-1;return this._sheet[l][a]}},{key:"getColumn",value:function(e){var t=e.replace(/[^A-Za-z]/g,"").toLowerCase(),n=m[t];return this._sheet.map(function(e){return e[n]})}}]),e}();var E=function(e){var t=e.csvString,n=e.name;l.a.useEffect(function(){return window.print()});var a=new d(t),r=a.getCell("E1"),c=a.getColumn("B").findIndex(function(e){return e===n}),u=parseInt(c)+1,o=a.getCell("D".concat(u)),i=a.getCell("E".concat(u)),m=a.getCell("O".concat(u)),s=a.getCell("U".concat(u)),E=a.getCell("F".concat(u)),p=a.getCell("P".concat(u)),f=a.getCell("V".concat(u)),g=a.getCell("G".concat(u)),v=a.getCell("Q".concat(u)),h=a.getCell("W".concat(u)),C=a.getCell("X".concat(u));return l.a.createElement("div",{"data-testid":"statement"},l.a.createElement("h2",null,"This is a demo!"),l.a.createElement("div",null,"A sales person with this name was found on row ",u,"."),l.a.createElement("div",null,"Quarter: ",r,"."),l.a.createElement("div",null,"The demand team member's name is \"",n,'".'),l.a.createElement("div",null,'Their variable target is: "',o,'".'),l.a.createElement("div",null,"Here is the table:"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Component"),l.a.createElement("th",null,"Component-Target-Compensation"),l.a.createElement("th",null,"Component-Achievement-Level"),l.a.createElement("th",null,"Payout Amount"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Country/Team"),l.a.createElement("td",null,i),l.a.createElement("td",null,m),l.a.createElement("td",null,s)),l.a.createElement("tr",null,l.a.createElement("td",null,"Individual Revenue"),l.a.createElement("td",null,E),l.a.createElement("td",null,p),l.a.createElement("td",null,f)),l.a.createElement("tr",null,l.a.createElement("td",null,"Individual Sales"),l.a.createElement("td",null,g),l.a.createElement("td",null,v),l.a.createElement("td",null,h)))),l.a.createElement("div",null,"The total gross discretionary pay is ",C))};window.readUploadedFileAsText=function(e){var t=new FileReader;return new Promise(function(n,a){t.onerror=function(){t.abort(),a(new DOMException("Problem parsing input file."))},t.onload=function(){n(t.result)},t.readAsText(e)})};var p=function(){var e=l.a.useState(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=l.a.useState(""),c=Object(u.a)(r,2),o=c[0],i=c[1],m=l.a.useState(null),s=Object(u.a)(m,2),d=s[0],p=s[1];return n?l.a.createElement(E,{csvString:n,name:o}):l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d&&(d.size>5e5?alert("This file is HUGE! What are you trying to upload?"):window.readUploadedFileAsText(d).then(function(e){return a(e)}))}},l.a.createElement("input",{type:"file",accept:".csv","data-testid":"fileSelect",onChange:function(e){return p(e.target.files[0])}}),l.a.createElement("input",{type:"text",placeholder:"salesperson name","data-testid":"salesPersonName",onChange:function(e){return i(e.target.value)},value:o}),l.a.createElement("input",{type:"submit",value:"Generate Statement","data-testid":"generateButton"})))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c37f4d94.chunk.js.map