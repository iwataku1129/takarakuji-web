(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/animation.6acae9c3.gif"},33:function(e,a,t){e.exports=t(51)},38:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(24),l=t.n(c),i=(t(38),t(39),t(17)),o=t(4),m=t(9),s=t.n(m),u=t(13),d=t(8),p=t(67),f=t(63),E=t(25),h=t.n(E),v=t(27),g=t.n(v),b=t(26),k=t.n(b),N=t(65),w=function(){var e=localStorage.getItem("takaratitle");e||(e="\u62bd\u9078\u4f1a"),document.title="".concat(e);var a=Object(n.useState)("Loading"),t=Object(d.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(null),o=Object(d.a)(i,2),m=o[0],E=o[1],v=Object(n.useState)([{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2460"},{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2461"}]),b=Object(d.a)(v,2),w=b[0],y=b[1],O=g()(),j=O.width,C=O.height;Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("takaralist"));e&&y(e),l("Main")},[]);var S=function(){var e=Object(u.a)(s.a.mark(function e(a){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l("selected1"),(t=w.concat())[a].disabled=!0,y(t),localStorage.setItem("takaralist",JSON.stringify(t)),E(t[a].name),setTimeout(x,3e3);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l("selected2"),setTimeout(I,6e4);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:E(null),l("Main");case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return"Loading"===c?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Main-header"},r.a.createElement("h4",null,"Now Loading..."),r.a.createElement(N.a,{color:"secondary"}))):"selected1"===c?r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"resizeimage + text-center"},r.a.createElement("img",{src:k.a,alt:"\u62bd\u9078\u4e2d......"}))):"selected2"===c?r.a.createElement("header",{className:"App-header"},r.a.createElement(h.a,{width:j,height:C,recycle:!0}),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"cracker"},"\u3000\u3000\u3000\ud83c\udf89 \ud83c\udf89\u62bd \u9078 \u7d50 \u679c\ud83c\udf89 \ud83c\udf89\u3000\u3000\u3000")),r.a.createElement("h3",null,"\u3000\u3000\u3000",m,"\u3000\u3000\u3000"),r.a.createElement(p.a,{variant:"button",className:"text-muted ",onClick:function(){I()}},"\u30e1\u30a4\u30f3\u30da\u30fc\u30b8\u3078")):"Main"===c?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(f.a,{fluid:!0,className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,e)),r.a.createElement("div",{className:"mb-2"},r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return function(){for(var e=0;;){var a=Math.floor(Math.random()*w.length);if(!1===w[a].disabled&&w[a].name){S(a);break}if(e>=w.length){alert("\u62bd\u9078\u53ef\u80fd\u306a\u756a\u53f7\u304c\u3042\u308a\u307e\u305b\u3093");break}e+=1}}()}},"\u795e\u69d8\u306b\u307e\u304b\u305b\u308b\u30dc\u30bf\u30f3")),r.a.createElement("div",{className:"text-center"},w.map(function(e,a,t){var n;return n=a%2===0?"btn-circle-3d-1":"btn-circle-3d-2",!1===e.disabled&&e.name?r.a.createElement("button",{className:n,onClick:function(){return S(a)}},("00"+(a+1)).slice(-3)):r.a.createElement("button",{className:"btn-circle-3d-gray",disabled:!0},("00"+(a+1)).slice(-3))}))))):void 0},y=t(31),O=t(66),j=t(64),C=t(29),S=function(){var e=Object(n.useState)(localStorage.getItem("takaratitle")),a=Object(d.a)(e,2),t=a[0],c=a[1];t||c("\u62bd\u9078\u4f1a"),document.title="\u62bd\u9078\u4f1a - \u8a2d\u5b9a";var l=Object(o.f)(),i=Object(n.useState)([{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2460"},{disabled:!1,name:"[\u30b5\u30f3\u30d7\u30eb]\u666f\u54c1\u2461"}]),m=Object(d.a)(i,2),E=m[0],h=m[1];Object(n.useEffect)(function(){var e=JSON.parse(localStorage.getItem("takaralist"));e&&h(e)},[]);var v=function(){!0===window.confirm("\u672c\u5f53\u306b\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f")&&(localStorage.removeItem("takaralist"),localStorage.removeItem("takaratitle"),window.location.reload())},g=function(){localStorage.setItem("takaralist",JSON.stringify(E)),localStorage.setItem("takaratitle",t),!0===window.confirm("\u4fdd\u5b58\u6210\u529f! MainPage\u306b\u9077\u79fb\u3057\u307e\u3059\u304b\uff1f")&&l("/")},b=function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h([].concat(Object(y.a)(E),[{disabled:!1,name:null}]));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(s.a.mark(function e(a,t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=E.concat())[t].name=a,h(n);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(s.a.mark(function e(a,t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(n=E.concat())[t].disabled=a,h(n);case 3:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{clasName:"App-header"},r.a.createElement(f.a,{fluid:!0,className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,"\u8a2d\u5b9a")),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return b()}},"++ \u8ffd\u52a0 ++"),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return g()}},"\u4fdd\u5b58"),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return v()}},"\u5168\u9805\u76ee\u524a\u9664"),r.a.createElement("div",{className:"card"},r.a.createElement(O.a,null,r.a.createElement(O.a.Group,{className:"mb-3 + ml-2"},r.a.createElement(O.a.Control,{type:"text",placeholder:"\u30bf\u30a4\u30c8\u30eb",onChange:function(e){return c(e.target.value)},value:t})),E.map(function(e,a,t){return r.a.createElement(j.a,null,r.a.createElement(C.a,{sm:1},a+1),r.a.createElement(C.a,{sm:5},r.a.createElement(O.a.Group,{className:"mb-3 + ml-2"},r.a.createElement(O.a.Control,{type:"text",placeholder:"\u666f\u54c1\u540d",onChange:function(e){return k(e.target.value,a)},value:e.name}))),r.a.createElement(C.a,{sm:1},r.a.createElement(O.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"},r.a.createElement(O.a.Check,{type:"checkbox",label:"\u7d42\u4e86",onChange:function(e){return N(e.target.checked,a)},checked:e.disabled}))))}))),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return b()}},"++ \u8ffd\u52a0 ++"),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return g()}},"\u4fdd\u5b58"),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){return v()}},"\u5168\u9805\u76ee\u524a\u9664"))))},x=function(){var e=Object(o.f)();document.title="".concat("Home - \u62bd\u9078\u4f1a");return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(f.a,{fluid:!0,className:"center"},r.a.createElement("h2",{className:"mt-2"},r.a.createElement("span",null,"Home - \u62bd\u9078\u4f1a")),r.a.createElement("div",{className:"text-center"},r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){e("/main")}},"\u62bd\u9078Page\u3078"),r.a.createElement(p.a,{variant:"primary",size:"lg",onClick:function(){e("/setting")}},"\u8a2d\u5b9aPage\u3078")))))},I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"Sorry, the page you're looking con not found."))},z=(t(50),function(){return r.a.createElement(i.a,{basename:"/takarakuji-web"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(x,null)}),r.a.createElement(o.a,{path:"/main",element:r.a.createElement(w,null)}),r.a.createElement(o.a,{path:"/setting",element:r.a.createElement(S,null)}),r.a.createElement(o.a,{path:"/*",element:r.a.createElement(I,null)})," "))}),A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then(function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,l=a.getTTFB;t(e),n(e),r(e),c(e),l(e)})};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),A()}},[[33,1,2]]]);
//# sourceMappingURL=main.b67bb5bd.chunk.js.map