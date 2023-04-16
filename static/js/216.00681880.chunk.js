"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[216],{8026:function(n,e,t){t.d(e,{Dx:function(){return v},Fg:function(){return j},M5:function(){return g},Yb:function(){return h},k4:function(){return Z},l0:function(){return b},xv:function(){return m}});var r,o,a,i,c,d,s,u,l,p=t(168),x=t(1087),f=t(8789),h=f.ZP.div(r||(r=(0,p.Z)(["\n  background-color: green;\n"]))),b=f.ZP.form(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),m=f.ZP.p(a||(a=(0,p.Z)(["\n  font-size: 20px;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 5px;\n  margin-top: 20px;\n  color: white;\n"]))),g=f.ZP.input(i||(i=(0,p.Z)(["\n  height: 25px;\n  width: 300px;\n  border: 1px solid #1976d2;\n  border-radius: 4px;\n"]))),Z=f.ZP.button(c||(c=(0,p.Z)(["\n  margin-top: 20px;\n  width: 120px;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 1px solid white;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: white;\n  color: #62e815;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: #62e815;\n    color: white;\n  }\n"]))),v=f.ZP.h2(d||(d=(0,p.Z)(["\n  font-size: 30px;\n  border-radius: 4px;\n  padding: 10px;\n  color: #4e7d33;\n  text-align: center;\n"]))),j=(f.ZP.label(s||(s=(0,p.Z)(["\n  background-color: #4e7d33;\n  margin-left: auto;\n  margin-right: auto;\n"]))),f.ZP.input(u||(u=(0,p.Z)(["\n  height: 25px;\n  width: 300px;\n  border: 1px solid #4e7d33;\n  border-radius: 4px;\n"]))),(0,f.ZP)(x.OL)(l||(l=(0,p.Z)(["\n  font-size: 14px;\n  color: #4e7d33;\n"]))))},216:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,o,a,i,c=t(9434),d=t(8026),s=t(2169),u=function(n){return n.contacts.contacts.items},l=function(n){return n.contacts.contacts.isLoading},p=function(n){return n.contacts.filter},x=t(184),f=function(){var n=(0,c.v9)(u),e=(0,c.I0)();return(0,x.jsx)(d.Yb,{children:(0,x.jsxs)(d.l0,{onSubmit:function(t){t.preventDefault();var r=t.target.elements,o=r.name,a=r.number;n.find((function(n){return n.name.toLowerCase()===o.value.toLowerCase()}))?alert("".concat(o.value," is already in contacts")):e((0,s.uK)({name:o.value,number:a.value})),o.value="",a.value=""},children:[(0,x.jsxs)("label",{children:[(0,x.jsx)(d.xv,{children:"Name"}),(0,x.jsx)(d.M5,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)("label",{children:[(0,x.jsx)(d.xv,{children:"Number"}),(0,x.jsx)(d.M5,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(d.k4,{type:"submit",children:"Add contact"})]})})},h=t(2791),b=t(168),m=t(8789),g=m.ZP.span(r||(r=(0,b.Z)(["\n  font-size: 20px;\n  color: black;\n"]))),Z=m.ZP.button(o||(o=(0,b.Z)(["\n  background-color: green;\n  color: white;\n  padding: 6px 14px;\n  border-radius: 4px;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  :hover,\n  :focus {\n    background-color: #62e815;\n    color: white;\n  }\n"]))),v=m.ZP.ul(a||(a=(0,b.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),j=m.ZP.li(i||(i=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid black;\n  padding: 10px;\n\n  margin-bottom: 8px;\n"]))),w=t(9649),k=function(){var n=(0,c.v9)(u),e=(0,c.v9)(p),t=(0,c.v9)(l),r=(0,c.I0)();(0,h.useEffect)((function(){r((0,s.yF)())}),[r]);var o=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,x.jsxs)("div",{children:[t&&(0,x.jsx)(w.Z,{}),(null===o||void 0===o?void 0:o.length)>0&&(0,x.jsx)(v,{children:o.map((function(n){var e=n.id,t=n.name,o=n.number;return(0,x.jsxs)(j,{children:[(0,x.jsxs)(g,{children:[t,": ",o]}),(0,x.jsx)(Z,{onClick:function(){return function(n){return r((0,s.GK)(n))}(e)},type:"button",children:"Delete"})]},e)}))})]})},P=t(4554),y=t(4953),C=t(9365);function z(){var n=(0,c.I0)();return(0,x.jsx)(P.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,x.jsx)(y.Z,{onChange:function(e){n((0,C.WB)(e.currentTarget.value.toLowerCase()))},id:"standard-basic",label:"Find contacts by name",variant:"standard"})})}var _=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Dx,{children:"Phonebook"}),(0,x.jsx)(f,{}),(0,x.jsx)(z,{}),(0,x.jsx)(k,{})]})}}}]);
//# sourceMappingURL=216.00681880.chunk.js.map