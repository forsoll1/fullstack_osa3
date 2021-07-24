(this.webpackJsonposa1=this.webpackJsonposa1||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var r=t(16),a=t.n(r),c=t(17),o=t(3),i=t(2),u=t(5),l=t.n(u),d="http://localhost:3001/persons",s=function(){return l.a.get(d).then((function(e){return e.data}))},h=function(e){return l.a.post(d,e).then((function(e){return e.data}))},f=function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},j=function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=t(0),m=function(e){var n=e.handleFilterChange,t=e.newFilter;return Object(b.jsx)("div",{children:Object(b.jsx)("form",{children:Object(b.jsxs)("div",{children:["filter shown with: ",Object(b.jsx)("input",{value:t,onChange:n})]})})})},v=function(e){var n=e.lisaaNimi,t=e.newName,r=e.newNumber,a=e.handleNameChange,c=e.handleNumberChange;return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:t,onChange:a})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:r,onChange:c})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})})},O=function(e){var n=e.personsToShow,t=e.handleDeleteButton;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsx)(g,{handleDeleteButton:t,person:e},e.name)}))})})},g=function(e){var n=e.person,t=e.handleDeleteButton;return Object(b.jsxs)("li",{children:[n.name," ",n.number," ",Object(b.jsx)("button",{onClick:t,value:n.id,children:"delete"})]})},x=function(e){var n=e.Message,t=e.errorMessage;return null===n&&null===t?null:null===t&&null!==n?Object(b.jsx)("div",{style:{color:"green",backgroundColor:"lightGrey",fontSize:24,border:"4px solid green"},children:n}):Object(b.jsx)("div",{style:{color:"red",backgroundColor:"lightGrey",fontSize:24,border:"4px solid red"},children:t})},p=function(){var e=Object(i.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(i.useState)(""),u=Object(o.a)(a,2),l=u[0],d=u[1],g=Object(i.useState)(""),p=Object(o.a)(g,2),w=p[0],C=p[1],N=Object(i.useState)(""),S=Object(o.a)(N,2),y=S[0],D=S[1],k=Object(i.useState)(null),B=Object(o.a)(k,2),P=B[0],F=B[1],M=Object(i.useState)(null),T=Object(o.a)(M,2),I=T[0],z=T[1];Object(i.useEffect)((function(){s().then((function(e){r(e)}))}),[]);var E=function(e,n){return F("".concat(e," ").concat(n))};setTimeout((function(){F(null)}),5e3);var G=function(e){return z("".concat(e))};setTimeout((function(){z(null)}),5e3);var J=0===y.length?Object(c.a)(t):t.filter((function(e){return e.name.toLowerCase().startsWith(y.toLowerCase())}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(x,{Message:P,errorMessage:I}),Object(b.jsx)(m,{handleFilterChange:function(e){D(e.target.value)},newFilter:y}),Object(b.jsx)("h2",{children:"add a new"}),Object(b.jsx)(v,{lisaaNimi:function(e){e.preventDefault();var n={name:l,number:w};if(l.length<3)return G("Person validation failed: name: Path `name` (`".concat(l,"`) is shorter than the minimum allowed length (3).")),d(""),void C("");if(w.length<8)return G("Person validation failed: number: Path `number` (`".concat(w,"`) is shorter than the minimum allowed length (8).")),d(""),void C("");if(t.some((function(e){return e.name===l}))){if(window.confirm("".concat(l," is already added to phonebook, replace the old number with a new one?"))){var a=t.filter((function(e){return e.name==l}))[0];return void j(a.id,n).then((function(e){r(t.map((function(n){return n.id!=a.id?n:e}))),E("Updated number for",n.name),d(""),C("")})).catch((function(e){G("Information of ".concat(a.name," has already been removed from server")),r(t.filter((function(e){return e.id!=a.id}))),d(""),C("")}))}}else e.preventDefault(),h(n).then((function(e){r(t.concat(e)),E("Added",n.name),d(""),C("")}))},newName:l,newNumber:w,handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(O,{personsToShow:J,handleDeleteButton:function(e){!function(e){var n=t.filter((function(n){return n.id==e}))[0];0!=window.confirm("Delete ".concat(n.name,"?"))&&f(e).then((function(a){E("Deleted",n.name),r(t.filter((function(n){return n.id!=e})))})).catch((function(e){G("Information of ".concat(n.name," has already been removed from server")),r(t.filter((function(e){return e.id!=n.id}))),d(""),C("")}))}(e.target.value)}})]})};a.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.13e380e1.chunk.js.map