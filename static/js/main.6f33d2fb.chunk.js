(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(48)},36:function(e,t){},38:function(e,t){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),c=n.n(r),l=n(8),u=n(24),i=n(25),s={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25},m=n(26),p=function(){function e(t){Object(u.a)(this,e),this._sheet=m.parse(t)}return Object(i.a)(e,[{key:"getCell",value:function(e){console.log(e);var t=e.replace(/[^A-Za-z]/g,"").toLowerCase(),n=e.replace(/[^0-9]/g,""),a=s[t],o=parseInt(n)-1;return this._sheet[o][a]}},{key:"getColumn",value:function(e){var t=e.replace(/[^A-Za-z]/g,"").toLowerCase(),n=s[t];return this._sheet.map(function(e){return e[n]})}}]),e}(),g=n(12);n(47);var f=function(e){var t=e.csvString,n=e.name;return""===t?null:o.a.createElement("button",{onClick:function(){return function(e,t){var n=new p(e),a=n.getCell("E1"),o=n.getColumn("B").findIndex(function(e){return e===t}),r=parseInt(o)+1,c=n.getCell("D".concat(r)),l=n.getCell("E".concat(r)),u=n.getCell("O".concat(r)),i=n.getCell("U".concat(r)),s=n.getCell("F".concat(r)),m=n.getCell("P".concat(r)),f=n.getCell("V".concat(r)),h=n.getCell("G".concat(r)),v=n.getCell("Q".concat(r)),d=n.getCell("W".concat(r)),C=n.getCell("X".concat(r)),b=new g;b.setFontSize(22),b.text(20,20,"This is a demo!"),b.setFontSize(16);var w=[];w.push("A sales person with this name was found on row ".concat(r)),w.push("Quarter: ".concat(a,".")),w.push("The demand team member's name is \"".concat(t,'".')),w.push('Their variable target is: "'.concat(c,'".')),w.push("Here is the table:"),b.text(20,30,w),b.autoTable({theme:"plain",margin:{top:70},head:[["Component","Component Target Compensation","Component Achievement Level","Payout Amount"]],body:[["Country/Team",l,u,i],["Individual Revenue",s,m,f],["Individual Sales",h,v,d]]}),b.text(20,130,"The total gross discretionary pay is ".concat(C,".")),b.save("statement.pdf")}(t,n)}},"Save generated PDF")};var h=function(){var e=o.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],r=o.a.useState(""),c=Object(l.a)(r,2),u=c[0],i=c[1],s=o.a.useState(null),m=Object(l.a)(s,2),p=m[0],g=m[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),p)if(p.size>5e5)alert("This file is HUGE! What are you trying to upload?");else{var t=new FileReader;t.onload=function(){a(t.result)},t.readAsText(p)}}},o.a.createElement("input",{type:"file",accept:".csv",onChange:function(e){return g(e.target.files[0])}}),o.a.createElement("input",{type:"text",placeholder:"salesperson name",onChange:function(e){return i(e.target.value)},value:u}),o.a.createElement("input",{type:"submit",value:"Generate Statement"})),o.a.createElement(f,{csvString:n,name:u}))};c.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6f33d2fb.chunk.js.map