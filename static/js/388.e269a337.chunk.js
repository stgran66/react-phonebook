"use strict";(self.webpackChunkreact_phonebook=self.webpackChunkreact_phonebook||[]).push([[388],{9388:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var a,r,i,o,c=t(6321),s=t(9434),d=t(5705),l=t(7103),u=t(5562),f=t(3634),p=function(n){return n.contacts.entities},x=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},h=t(168),b=t(6444),g=(0,b.ZP)(d.l0)(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  width: 310px;\n  align-items: flex-end;\n"]))),j=b.ZP.label(r||(r=(0,h.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]))),v=(0,b.ZP)(d.gN)(i||(i=(0,h.Z)(["\n  color: #f0a00c;\n  font-family: cursive;\n  border: 1px solid black;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 8px;\n  padding-right: 8px;\n  outline: none;\n  border-radius: 6px;\n\n  :hover,\n  :focus {\n    border-color: #f0a00c;\n  }\n"]))),y=(0,b.ZP)(d.Bc)(o||(o=(0,h.Z)(["\n  margin: 0;\n  font-size: 12px;\n  color: #ac3235;\n  align-self: flex-start;\n"]))),Z=t(184),w={name:"",number:""};u.Notify.init({position:"center-top",width:"460px",useIcon:!1,fontFamily:"Garamond",fontSize:"28px",failure:{background:"transparent",textColor:"#ac3235"}});var k,C,P,z,I,A=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ").required(),number:l.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),N=function(){var n=(0,s.I0)(),e=(0,s.v9)(p);return(0,Z.jsx)(d.J9,{initialValues:w,onSubmit:function(t,a){var r=a.resetForm,i=t.name,o=t.number;if(e.some((function(n){return(null===n||void 0===n?void 0:n.name)===i})))return u.Notify.failure("".concat(i," is already in contacts"));r(),n((0,f.uK)({name:i,number:o}))},validationSchema:A,validateOnChange:!1,validateOnBlur:!1,children:(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(j,{children:["Name:",(0,Z.jsx)(v,{type:"text",name:"name"})]}),(0,Z.jsx)(y,{name:"name",component:"p"}),(0,Z.jsxs)(j,{children:["Number:",(0,Z.jsx)(v,{type:"tel",name:"number"})]}),(0,Z.jsx)(y,{name:"number",component:"p"}),(0,Z.jsx)(c.zx,{type:"submit",children:"Add contact"})]})})},F=b.ZP.label(k||(k=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 310px;\n  gap: 2px;\n"]))),L=t(1273),S=function(){var n=(0,s.I0)();return(0,Z.jsxs)(F,{children:["Find contacts by name:",(0,Z.jsx)(c.II,{type:"text",name:"filter",onChange:function(e){var t=e.target.value;n((0,L.T)(t))}})]})},_=function(n){return n.filter.value},B=b.ZP.div(C||(C=(0,h.Z)(["\n  max-width: 510px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (max-width: 767px) {\n    flex-wrap: wrap;\n  }\n"]))),q=b.ZP.button(P||(P=(0,h.Z)(["\n  font-family: 'Dancing Script', cursive;\n  width: 60px;\n  background-color: #f4bc56;\n  color: #010101;\n  border: 1px solid black;\n  display: inline-block;\n  margin-left: auto;\n\n  outline: none;\n  border-radius: 6px;\n\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    border-color: #f0a00c;\n    background-color: #f0a00c;\n    color: #ffffff;\n  }\n"]))),D=b.ZP.span(z||(z=(0,h.Z)(["\n  @media screen and (max-width: 767px) {\n    flex-basis: 80%;\n  }\n"]))),E=function(n){var e=n.contact,t=(0,s.I0)();return(0,Z.jsx)("li",{children:(0,Z.jsxs)(B,{children:[e.name,": ",(0,Z.jsx)(D,{children:e.number}),(0,Z.jsx)(q,{type:"button",onClick:function(){return t((0,f.GK)(e.id))},children:"Delete"})]})})},G=b.ZP.ul(I||(I=(0,h.Z)(["\n  margin-top: 25px;\n  padding-left: 20px;\n"]))),J=function(){var n=(0,s.v9)(p),e=(0,s.v9)(_),t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,Z.jsx)(G,{children:t.map((function(n){return(0,Z.jsx)(E,{contact:n},n.id)}))})},K=t(2791);function O(){var n=(0,s.v9)(x),e=(0,s.v9)(m),t=(0,s.I0)();return(0,K.useEffect)((function(){t((0,f.yF)())}),[t]),(0,Z.jsxs)(c.VY,{children:[(0,Z.jsx)(N,{}),(0,Z.jsx)(S,{}),(0,Z.jsxs)(c.Ed,{children:[n&&(0,Z.jsx)("b",{children:"Loading contacts..."}),e&&(0,Z.jsx)("b",{children:e})]}),(0,Z.jsx)(J,{})]})}}}]);
//# sourceMappingURL=388.e269a337.chunk.js.map