(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/animation1.6acae9c3.gif"},39:function(e,a,t){e.exports=t.p+"static/media/animation2.987b8d82.gif"},46:function(e,a,t){e.exports=t(78)},51:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),i=(t(51),t(52),t(26)),o=t(4),m=t(11),s=t.n(m),u=t(16),f=t(9),d=t(90),E=t(94),p=t(37),g=t.n(p),b=t(40),v=t.n(b),h=t(38),k=t.n(h),O=t(39),N=t.n(O),S=t(92),j=function(){var e=localStorage.getItem("takaratitle");e||(e="\u62bd\u9078\u4f1a"),document.title="".concat(e);var a=Object(n.useState)("Loading"),t=Object(f.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(null),o=Object(f.a)(i,2),m=o[0],p=o[1],b=Object(n.useState)([{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2460"},{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2461"}]),h=Object(f.a)(b,2),O=h[0],j=h[1],w=Object(n.useState)({value:"1",label:"\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9"}),C=Object(f.a)(w,2),y=C[0],x=C[1],I=v()(),z=I.width,A=I.height,J=Object(n.useState)(null),M=Object(f.a)(J,2),L=M[0],P=M[1];Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("takaralist"));e&&j(e);var a=JSON.parse(localStorage.getItem("animation"));a&&x(a),l("Main")},[]);var T=function(){var e=Object(u.a)(s.a.mark(function e(a){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l("selected1"),(t=O.concat())[a].disabled=!0,j(t),localStorage.setItem("takaralist",JSON.stringify(t)),p(t[a].name),setTimeout(F,5e3);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l("selected2"),a=setTimeout(B,6e4),P(a);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(L),p(null),l("Main");case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return"Loading"===c?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Main-header"},r.a.createElement("h4",null,"Now Loading..."),r.a.createElement(S.a,{color:"secondary"}))):"selected1"===c?r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"resizeimage + text-center"},"1"===y.value?r.a.createElement("img",{src:k.a,alt:"\u62bd\u9078\u4e2d......"}):r.a.createElement("img",{src:N.a,alt:"\u62bd\u9078\u4e2d......"}))):"selected2"===c?r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,null,r.a.createElement(g.a,{width:z,height:A,recycle:!0}),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"cracker"},"\ud83c\udf89\ud83c\udf89\u62bd \u9078 \u7d50 \u679c\ud83c\udf89\ud83c\udf89")),r.a.createElement("h3",null,m)),r.a.createElement(E.a,{variant:"button",className:"text-muted",onClick:function(){B()}},"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3078")):"Main"===c?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,{fluid:!0,className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,e)),r.a.createElement("div",{className:"mb-2"},r.a.createElement(E.a,{variant:"danger",size:"lg",onClick:function(){return function(){for(var e=O,a=!1;;){var t=Math.floor(Math.random()*O.length);if(!1===O[t].disabled&&O[t].name){T(t);break}e[t].disabled=!0;for(var n=0;n<e.length&&!1!==e[n].disabled;n++)if(n===e.length-1){alert("\u62bd\u9078\u53ef\u80fd\u306a\u756a\u53f7\u304c\u3042\u308a\u307e\u305b\u3093"),a=!0;break}if(!0===a)break}}()}},"\u795e\u69d8\u306b\u307e\u304b\u305b\u308b\u30dc\u30bf\u30f3")),r.a.createElement("div",{className:"text-center"},O.map(function(e,a,t){var n;return n=a%2===0?"btn-circle-3d-1":"btn-circle-3d-2",!1===e.disabled&&e.name?r.a.createElement("button",{className:n,onClick:function(){return T(a)}},("00"+(a+1)).slice(-3)):r.a.createElement("button",{className:"btn-circle-3d-gray",disabled:!0},("00"+(a+1)).slice(-3))}))))):void 0},w=t(44),C=t(93),y=t(91),x=t(41),I=t(43),z=function(){var e=Object(n.useState)(localStorage.getItem("takaratitle")),a=Object(f.a)(e,2),t=a[0],c=a[1];t||c("\u62bd\u9078\u4f1a"),document.title="\u62bd\u9078\u4f1a - \u8a2d\u5b9a";var l=Object(o.f)(),i=Object(n.useState)([{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2460"},{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2461"}]),m=Object(f.a)(i,2),p=m[0],g=m[1],b=Object(n.useState)([{value:"1",label:"\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9"},{value:"2",label:"\u30aa\u30ea\u30b8\u30ca\u30eb"}]),v=Object(f.a)(b,1)[0],h=Object(n.useState)(v[0]),k=Object(f.a)(h,2),O=k[0],N=k[1];Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("takaralist"));e&&g(e);var a=JSON.parse(localStorage.getItem("animation"));a&&N(a)},[]);var S=function(){!0===window.confirm("\u672c\u5f53\u306b\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&(localStorage.removeItem("takaralist"),localStorage.removeItem("takaratitle"),localStorage.removeItem("animation"),window.location.reload())},j=function(){localStorage.setItem("takaralist",JSON.stringify(p)),localStorage.setItem("animation",JSON.stringify(O)),localStorage.setItem("takaratitle",t),!0===window.confirm("\u4fdd\u5b58\u6210\u529f! MainPage\u306b\u9077\u79fb\u3057\u307e\u3059\u304b\uff1f")&&l("/")},z=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g([].concat(Object(w.a)(p),[{disabled:!1,name:null}]));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(s.a.mark(function e(a,t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=p.concat())[t].name=a,g(n);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(s.a.mark(function e(a,t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=p.concat())[t].disabled=a,g(n);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{clasName:"App-header"},r.a.createElement(d.a,{className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,"\u8a2d\u5b9a")),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return z()}},"++ \u8ffd\u52a0 ++"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return j()}},"\u4fdd\u5b58"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return S()}},"\u5168\u9805\u76ee\u524a\u9664"),r.a.createElement("div",{className:"card",style:{textAlign:"left"}},r.a.createElement(C.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},"\u62bd\u9078\u4e2d\u753b\u9762"),r.a.createElement(x.a,{sm:4},r.a.createElement(I.a,{options:v,onChange:function(e){return N(e)},defaultValue:O,value:O}))),r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},"\u30bf\u30a4\u30c8\u30eb"),r.a.createElement(x.a,{sm:4},r.a.createElement(C.a.Group,{className:"mb-3 + ml-2"},r.a.createElement(C.a.Control,{type:"text",placeholder:"\u30bf\u30a4\u30c8\u30eb",onChange:function(e){return c(e.target.value)},value:t})))),r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},"No"),r.a.createElement(x.a,{sm:4},"\u666f\u54c1\u540d"),r.a.createElement(x.a,{sm:1},"\u7d42\u4e86")),p.map(function(e,a,t){return r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},a+1),r.a.createElement(x.a,{sm:4},r.a.createElement(C.a.Group,{className:"mb-3 + ml-2"},r.a.createElement(C.a.Control,{type:"text",placeholder:"\u666f\u54c1\u540d",onChange:function(e){return A(e.target.value,a)},value:e.name}))),r.a.createElement(x.a,{sm:1},r.a.createElement(C.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"},r.a.createElement(C.a.Check,{type:"checkbox",onChange:function(e){return J(e.target.checked,a)},checked:e.disabled}))))}))),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return z()}},"++ \u8ffd\u52a0 ++"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return j()}},"\u4fdd\u5b58"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return S()}},"\u5168\u9805\u76ee\u524a\u9664"))))},A=function(){var e=Object(o.f)();document.title="".concat("Home - \u62bd\u9078\u4f1a");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,null,r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,"Home - \u62bd\u9078\u4f1a")),r.a.createElement("div",{className:"text-center"},r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){e("/main")}},"\u62bd\u9078Page\u3078"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){e("/setting")}},"\u8a2d\u5b9aPage\u3078")))))},J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Sorry, the page you're looking con not found."))},M=(t(77),function(){return r.a.createElement(i.a,{basename:"/takarakuji-web"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(A,null)}),r.a.createElement(o.a,{path:"/main",element:r.a.createElement(j,null)}),r.a.createElement(o.a,{path:"/setting",element:r.a.createElement(z,null)}),r.a.createElement(o.a,{path:"/*",element:r.a.createElement(J,null)})," "))}),L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,95)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.ba724651.chunk.js.map