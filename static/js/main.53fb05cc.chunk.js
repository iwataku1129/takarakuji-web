(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/animation1.6acae9c3.gif"},39:function(e,a,t){e.exports=t.p+"static/media/animation2.987b8d82.gif"},46:function(e,a,t){e.exports=t(78)},51:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t.n(c),i=(t(51),t(52),t(26)),o=t(4),m=t(11),s=t.n(m),u=t(16),f=t(9),d=t(90),E=t(94),p=t(37),b=t.n(p),g=t(40),v=t.n(g),h=t(38),k=t.n(h),O=t(39),N=t.n(O),j=t(92),S=function(){var e=Object(n.useState)("\u62bd\u9078\u4f1a"),a=Object(f.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)("Loading"),i=Object(f.a)(l,2),o=i[0],m=i[1],p=Object(n.useState)(null),g=Object(f.a)(p,2),h=g[0],O=g[1],S=Object(n.useState)([{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2460"},{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2461"}]),w=Object(f.a)(S,2),C=w[0],y=w[1],x=Object(n.useState)({value:"1",label:"\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9"}),I=Object(f.a)(x,2),z=I[0],A=I[1],J=Object(n.useState)(null),M=Object(f.a)(J,2),L=M[0],P=M[1],T=v()(),F=T.width,B=T.height,G=Object(n.useState)(null),H=Object(f.a)(G,2),D=H[0],V=H[1];Object(n.useEffect)(function(){var e=localStorage.getItem("takaratitle");e||(e="\u62bd\u9078\u4f1a"),document.title="".concat(e),c(e);var a=JSON.parse(localStorage.getItem("takaralist"));a&&y(a);var t=JSON.parse(localStorage.getItem("animation"));t&&A(t),m("Main")},[]);var q=function(){var e=Object(u.a)(s.a.mark(function e(a){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m("selected1"),(t=C.concat())[a].disabled=!0,y(t),localStorage.setItem("takaralist",JSON.stringify(t)),O(t[a].name),"1"===z.value?P(k.a):P(N.a),setTimeout(K,5e3);case 8:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:m("selected2"),a=setTimeout(Q,6e4),V(a);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(D),O(null),m("Main"),P(null);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return"Loading"===o?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Main-header"},r.a.createElement("h4",null,"Now Loading..."),r.a.createElement(j.a,{color:"secondary"}))):"selected1"===o?r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"resizeimage + text-center"},r.a.createElement("img",{src:L,alt:"\u62bd\u9078\u4e2d......"}),")")):"selected2"===o?r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,null,r.a.createElement(b.a,{width:F,height:B,recycle:!0}),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"cracker"},"\ud83c\udf89\ud83c\udf89\u62bd \u9078 \u7d50 \u679c\ud83c\udf89\ud83c\udf89")),r.a.createElement("h3",null,h)),r.a.createElement(E.a,{variant:"button",className:"text-muted",onClick:function(){Q()}},"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3078")):"Main"===o?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,{fluid:!0,className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,t)),r.a.createElement("div",{className:"mb-2"},r.a.createElement(E.a,{variant:"danger",size:"lg",onClick:function(){return function(){for(var e=C,a=!1;;){var t=Math.floor(Math.random()*C.length);if(!1===C[t].disabled&&C[t].name){q(t);break}e[t].disabled=!0;for(var n=0;n<e.length&&!1!==e[n].disabled;n++)if(n===e.length-1){alert("\u62bd\u9078\u53ef\u80fd\u306a\u756a\u53f7\u304c\u3042\u308a\u307e\u305b\u3093"),a=!0;break}if(!0===a)break}}()}},"\u795e\u69d8\u306b\u307e\u304b\u305b\u308b\u30dc\u30bf\u30f3")),r.a.createElement("div",{className:"text-center"},C.map(function(e,a,t){var n;return n=a%2===0?"btn-circle-3d-1":"btn-circle-3d-2",!1===e.disabled&&e.name?r.a.createElement("button",{className:n,onClick:function(){return q(a)}},("00"+(a+1)).slice(-3)):r.a.createElement("button",{className:"btn-circle-3d-gray",disabled:!0},("00"+(a+1)).slice(-3))}))))):void 0},w=t(44),C=t(93),y=t(91),x=t(41),I=t(43),z=function(){var e=Object(n.useState)("\u62bd\u9078\u4f1a"),a=Object(f.a)(e,2),t=a[0],c=a[1];document.title="\u62bd\u9078\u4f1a - \u8a2d\u5b9a";var l=Object(o.f)(),i=Object(n.useState)([{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2460"},{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2461"}]),m=Object(f.a)(i,2),p=m[0],b=m[1],g=Object(n.useState)([{value:"1",label:"\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9"},{value:"2",label:"\u30aa\u30ea\u30b8\u30ca\u30eb"}]),v=Object(f.a)(g,1)[0],h=Object(n.useState)(v[0]),k=Object(f.a)(h,2),O=k[0],N=k[1];Object(n.useEffect)(function(){var e=localStorage.getItem("takaratitle");e||(e="\u62bd\u9078\u4f1a"),c(e);var a=JSON.parse(localStorage.getItem("takaralist"));a&&b(a);var t=JSON.parse(localStorage.getItem("animation"));t&&N(t)},[]);var j=function(){!0===window.confirm("\u672c\u5f53\u306b\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&(localStorage.removeItem("takaralist"),localStorage.removeItem("takaratitle"),localStorage.removeItem("animation"),window.location.reload())},S=function(){localStorage.setItem("takaralist",JSON.stringify(p)),localStorage.setItem("animation",JSON.stringify(O)),localStorage.setItem("takaratitle",t),!0===window.confirm("\u4fdd\u5b58\u6210\u529f! MainPage\u306b\u9077\u79fb\u3057\u307e\u3059\u304b\uff1f")&&l("/")},z=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:b([].concat(Object(w.a)(p),[{disabled:!1,name:null}]));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(s.a.mark(function e(a,t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=p.concat())[t].name=a,b(n);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(s.a.mark(function e(a,t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=p.concat())[t].disabled=a,b(n);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{clasName:"App-header"},r.a.createElement(d.a,{className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,"\u8a2d\u5b9a")),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return z()}},"++ \u8ffd\u52a0 ++"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return S()}},"\u4fdd\u5b58"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return j()}},"\u5168\u9805\u76ee\u524a\u9664"),r.a.createElement("div",{className:"card",style:{textAlign:"left"}},r.a.createElement(C.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},"\u62bd\u9078\u4e2d\u753b\u9762"),r.a.createElement(x.a,{sm:4},r.a.createElement(I.a,{options:v,onChange:function(e){return N(e)},defaultValue:O,value:O}))),r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},"\u30bf\u30a4\u30c8\u30eb"),r.a.createElement(x.a,{sm:4},r.a.createElement(C.a.Group,{className:"mb-3 + ml-2"},r.a.createElement(C.a.Control,{type:"text",placeholder:"\u30bf\u30a4\u30c8\u30eb",onChange:function(e){return c(e.target.value)},value:t})))),r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},"No"),r.a.createElement(x.a,{sm:4},"\u666f\u54c1\u540d"),r.a.createElement(x.a,{sm:1},"\u7d42\u4e86")),p.map(function(e,a,t){return r.a.createElement(y.a,null,r.a.createElement(x.a,{sm:1},a+1),r.a.createElement(x.a,{sm:4},r.a.createElement(C.a.Group,{className:"mb-3 + ml-2"},r.a.createElement(C.a.Control,{type:"text",placeholder:"\u666f\u54c1\u540d",onChange:function(e){return A(e.target.value,a)},value:e.name}))),r.a.createElement(x.a,{sm:1},r.a.createElement(C.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"},r.a.createElement(C.a.Check,{type:"checkbox",onChange:function(e){return J(e.target.checked,a)},checked:e.disabled}))))}))),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return z()}},"++ \u8ffd\u52a0 ++"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return S()}},"\u4fdd\u5b58"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){return j()}},"\u5168\u9805\u76ee\u524a\u9664"))))},A=function(){var e=Object(o.f)();document.title="".concat("Home - \u62bd\u9078\u4f1a");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,null,r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,"Home - \u62bd\u9078\u4f1a")),r.a.createElement("div",{className:"text-center"},r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){e("/main")}},"\u62bd\u9078Page\u3078"),r.a.createElement(E.a,{variant:"info",size:"lg",onClick:function(){e("/setting")}},"\u8a2d\u5b9aPage\u3078")))))},J=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Sorry, the page you're looking con not found."))},M=(t(77),function(){return r.a.createElement(i.a,{basename:"/takarakuji-web"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(A,null)}),r.a.createElement(o.a,{path:"/main",element:r.a.createElement(S,null)}),r.a.createElement(o.a,{path:"/setting",element:r.a.createElement(z,null)}),r.a.createElement(o.a,{path:"/*",element:r.a.createElement(J,null)})," "))}),L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,95)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),L()}},[[46,1,2]]]);
//# sourceMappingURL=main.53fb05cc.chunk.js.map