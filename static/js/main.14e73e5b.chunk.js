(this.webpackJsonptestinglib=this.webpackJsonptestinglib||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(10),i=n.n(a),r=(n(16),n(17),n(2)),j=n(3),o=n(5),l=n(4),u=(n(18),n(19),n(0)),b=(c.Component,n(11)),d=n(9),m=(n(21),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"avatar",children:[Object(u.jsx)("div",{className:"avatar-img",children:Object(u.jsx)("img",{src:this.props.image,alt:"#"})}),Object(u.jsx)("span",{className:"isOnline ".concat(this.props.isOnline)})]})}}]),n}(c.Component)),O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{animationDelay:"0.8s"},className:"chat__item ".concat(this.props.user?this.props.user:""),children:[Object(u.jsxs)("div",{className:"chat__item__content",children:[Object(u.jsx)("div",{className:"chat__msg",children:this.props.msg}),Object(u.jsxs)("div",{className:"chat__meta",children:[Object(u.jsx)("span",{children:"12 mins ago"}),Object(u.jsx)("span",{children:"Seen 1.03PM"})]})]}),Object(u.jsx)(m,{isOnline:"active",image:this.props.image})]})}}]),n}(c.Component),h=n.p+"static/media/anuj.6a9c43f9.jpg",p=n.p+"static/media/anuj2.d2484345.jpeg";function f(){return Object(u.jsx)("div",{className:"content__header",children:Object(u.jsx)("div",{className:"blocks",children:Object(u.jsxs)("div",{className:"current-chatting-user",children:[Object(u.jsx)(m,{isOnline:"active",image:h}),Object(u.jsx)("p",{children:"Anuj Bidkar "})]})})})}function v(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),r=i[0],j=i[1],o=Object(c.useRef)(),l=function(){var e;null===(e=o.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};Object(c.useEffect)((function(){l()}),[r]);var m=function(e){if(l(),""!=r.trim()){var t={key:Math.random(),type:e,msg:r,image:{anujlogo:h}};l(),s([].concat(Object(b.a)(n),[t])),j("")}};return Object(u.jsxs)("div",{className:"main__chatcontent",children:[Object(u.jsx)(f,{}),Object(u.jsx)("div",{className:"content__body",children:Object(u.jsxs)("div",{className:"chat__items",children:[n&&n.map((function(e,t){return Object(u.jsx)(O,{animationDelay:t+1,user:e.type?e.type:"me",msg:e.msg,image:e.type?h:p},e.key)})),Object(u.jsx)("div",{ref:o})]})}),Object(u.jsx)("div",{className:"content__footer",children:Object(u.jsxs)("div",{className:"sendNewMessage",children:[Object(u.jsx)("button",{onClick:function(){m("other")},className:"addFiles",children:Object(u.jsx)("i",{className:"fa fa-plus"})}),Object(u.jsx)("input",{value:r,onKeyDown:function(e){13===e.keyCode&&m("")},type:"text",placeholder:"Type a message here",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{className:"btnSendMsg",id:"sendMsgBtn",onClick:function(){m("")},children:Object(u.jsx)("i",{className:"fa fa-paper-plane"})})]})})]})}var x=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"main__chatbody",children:Object(u.jsx)(v,{})})}}]),n}(c.Component);var g=function(){return Object(u.jsx)("div",{className:"__main",children:Object(u.jsx)(x,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),_()}],[[22,1,2]]]);
//# sourceMappingURL=main.14e73e5b.chunk.js.map