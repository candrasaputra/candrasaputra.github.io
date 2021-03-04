(this["webpackJsonpxendit-dashboard-ui"]=this["webpackJsonpxendit-dashboard-ui"]||[]).push([[53],{1473:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r.n(a),o=r(19),s=r(12),c=r(0),i=r.n(c),u=r(511),l=r(284),d=r(205),f=r(380),m=r(20),p=r.n(m),b=r(80),y=r(149),w=r.n(y),g=r(1620),v=r.n(g),x=r(1668),h=r(50),O=(r(2174),r(1625)),j={xendit:"/images/xendit-blue-logo.svg",instamoney:"/images/instamoney/instamoney-logo-square.png"};t.default=Object(f.a)(["expiredPassword","errorMessages","commonComponents"])((function(e){var t=Object(c.useState)(""),r=Object(s.a)(t,2),a=r[0],f=r[1],m=Object(c.useState)(""),y=Object(s.a)(m,2),g=y[0],E=y[1],S=Object(c.useState)(""),P=Object(s.a)(S,2),C=P[0],N=P[1],T=Object(c.useState)(!1),M=Object(s.a)(T,2),_=M[0],k=M[1],D=Object(c.useState)(!1),A=Object(s.a)(D,2),R=A[0],L=A[1],I=Object(c.useState)(""),F=Object(s.a)(I,2),q=F[0],B=F[1],U=Object(c.useState)(""),W=Object(s.a)(U,2),$=W[0],J=W[1],V=Object(c.useState)(""),z=Object(s.a)(V,2),G=z[0],K=z[1],X=Object(c.useState)(!1),H=Object(s.a)(X,2),Q=H[0],Y=H[1],Z=Object(c.useState)(""),ee=Object(s.a)(Z,2),te=ee[0],re=ee[1],ae="environment",ne="liveMode",oe="/api/users/_password",se="/api/logout",ce=e.t,ie=e.apiCall,ue=e.isMobileView,le=e.cookies,de=e.history,fe=e.entity,me=function(){re(""),B(a?"":ce("PasswordError")),J(g?"":ce("NewPasswordError")),K(C?"":ce("ConfirmationPasswordError"));var e=""===a||""===g||""===C,t=g!==C,r=Object(x.a)(g);return!e&&(r?!t||(K(ce("ConfirmationPasswordDoesNotMatch")),!1):(J(ce("errorPassword")),!1))},pe=function(e){var t=e.error_code;re(Object(h.f)(t,ce)),"USER_LOCKED_ERROR"===t&&setTimeout(ye,1e3)},be=function(){var e=Object(o.a)(n.a.mark((function e(t){var r,o,s,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),me()){e.next=4;break}return e.abrupt("return");case 4:return k(!0),r={password:g},o={},s={"X-CONFIRMATION-PASSWORD":a},e.next=10,ie.axiosPut(oe,r,o,s);case 10:if(c=e.sent,k(!1),!c.error_code){e.next=15;break}return pe(c),e.abrupt("return");case 15:Y(!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(o.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,ie.axiosPost(se);case 3:if(t=e.sent,L(!1),!t.error_code){e.next=7;break}return e.abrupt("return");case 7:le.remove(ae,{path:"/"}),le.remove(ne,{path:"/"}),Object(h.l)(),de.push("/login");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),we=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"expired-password-title-text text-fair color-primary"},ce("PasswordChangeSuccess")),i.a.createElement("p",{className:"color-charcoal"},ce("LoginNowMessage")),i.a.createElement(p.a,{customCss:"expired-password-button",children:ce("LoginNowButton"),onClick:function(){de.push("/login")}})),ge=i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"expired-password-title-text text-fair color-primary"},ce("PasswordExpired")),i.a.createElement("p",{className:"color-charcoal"},ce("SecurityGuideline")),te&&i.a.createElement(b.u,{block:!0,message:te}),i.a.createElement(b.gb,{method:"POST",onSubmit:be,onChange:function(e){e.preventDefault();var t=e.target.name,r=e.target.value;switch(B(""),J(""),K(""),t){case"password":f(r);break;case"new_password":E(r);break;case"confirmation_password":N(r)}}},i.a.createElement("div",{className:"mb-3"},i.a.createElement(w.a,{label:ue?"":ce("CurrentPasswordLabel"),type:"password",name:"password",placeholder:ue?ce("currentPasswordPlaceholder"):"*******",value:a,errorMessage:q,customCss:ue?"mt-2":""}),i.a.createElement(v.a,{label:ue?"":ce("NewPasswordLabel"),placeholder:ue?ce("newPasswordPlaceholder"):"*******",password:g,name:"new_password",value:g,errorMessage:$,customCss:ue?"mt-2":"",validationText:Object(O.a)(ce)}),i.a.createElement(w.a,{label:ue?"":ce("ConfirmationPasswordLabel"),type:"password",name:"confirmation_password",placeholder:ue?ce("confirmationPasswordPlaceholder"):"*******",value:C,errorMessage:G,customCss:ue?"mt-2":""})),i.a.createElement("div",{className:"d-flex flex-column"},i.a.createElement(p.a,{type:"submit",isLoading:_,isDisabled:R,customCss:"expired-password-button mb-3",variant:"success",children:ce("UpdatePasswordButton"),disabled:R}),i.a.createElement(p.a,{customCss:"expired-password-button mb-3",isLoading:R,isDisabled:_,children:ce("SignOutButton"),onClick:ye,variant:"primary"}))));return i.a.createElement(u.a,{className:"expired-password-container container d-flex align-items-center justify-content-center"},i.a.createElement(l.a,{className:"w-100"},i.a.createElement(d.a,{md:6},i.a.createElement("div",{className:"d-flex align-items-center justify-content-center h-100"},i.a.createElement("img",{className:"".concat(fe,"-expired-password-logo"),src:j[fe],alt:"logo"}))),i.a.createElement(d.a,{className:"xendit-expired-password-right-section",md:6},Q?we:ge)))}))},1620:function(e,t,r){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var s=n?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(0)),o=u(r(2)),s=u(r(1621)),c=u(r(1622)),i=u(r(1623));function u(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(i){n=!0,o=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r(1624);var b=function(e){var t=m((0,n.useState)(c.default),2),r=t[0],a=t[1],o=m((0,n.useState)("eye"),2),u=o[0],l=o[1],p=m((0,n.useState)("password"),2),b=p[0],y=p[1],w=m((0,n.useState)(!1),2),g=w[0],v=w[1],x=e.validationText,h=x.letterText,O=x.numberText,j=x.minCharText,E=x.validationDesc,S=e.password,P=e.label,C=e.customCss,N=e.errorMessage,T=f(e,["validationText","password","label","customCss","errorMessage"]),M=function(){return/^(?=.*[A-z]).*$/.test(S)},_=function(){return/^(?=.*?[0-9]).*$/.test(S)},k=function(){return S.length>=8},D=function(e){return e()?R:g&&L},A=function(e){return e.class?" ".concat(e.class):""},R="dot-success",L="dot-error",I=[{class:D(M),text:h},{class:D(_),text:O},{class:D(k),text:j}];return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.default,d({value:S,label:P,customCss:C,errorMessage:N,isError:g,type:b,placeholder:"password",rightIcon:n.default.createElement("img",{src:r,alt:u}),rightIconAction:function(){a(r===c.default?s.default:c.default),l(r===c.default?"eye-slash":"eye"),y("password"===b?"text":"password")},onBlur:function(){var e=!M()||!_()||!k();v(e)},onFocus:function(){return v(!1)}},T)),S&&n.default.createElement(n.default.Fragment,null,n.default.createElement("p",{className:"password-desc"},E),n.default.createElement("ul",{className:"ul-input-password"},I.map((function(e,t){return n.default.createElement("li",{key:t},n.default.createElement("span",{className:"dot-input-password".concat(A(e))}),n.default.createElement("span",{className:"dot-text".concat(A(e))},e.text))})))))};b.propTypes={validationText:o.default.shape({letterText:o.default.string.isRequired,numberText:o.default.string.isRequired,minCharText:o.default.string.isRequired,validationDesc:o.default.string}).isRequired,password:o.default.any,label:o.default.string,customCss:o.default.string,errorMessage:o.default.string},b.defaultProps={validationText:{letterText:"",numberText:"",minCharText:"",validationDesc:""}};var y=b;t.default=y},1621:function(e,t,r){e.exports=r.p+"static/media/eye-slash.18d5e26c.svg"},1622:function(e,t,r){e.exports=r.p+"static/media/eye.2be267a8.svg"},1623:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),e.exports=r(149)},1624:function(e,t,r){},1625:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a=function(e){return{letterText:e("commonComponents:oneLetter"),numberText:e("commonComponents:oneNumber"),minCharText:e("commonComponents:charactersMinimum"),validationDesc:e("commonComponents:passValidationDesc")}}},1668:function(e,t,r){"use strict";var a=r(150);t.a=function(e){return a.passwordPattern.test(e)}},2174:function(e,t,r){}}]);