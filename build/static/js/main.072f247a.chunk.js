(this.webpackJsonpdeepartgallery=this.webpackJsonpdeepartgallery||[]).push([[0],{4:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),l=a(1);function i(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],s=(a[1],Object(n.useState)(!1)),i=Object(l.a)(s,2),m=i[0],o=i[1];return r.a.createElement("div",{className:c?"imgContainer":"hide"},r.a.createElement("img",{src:e.src,alt:e.descr}),r.a.createElement("div",{className:"actions"},r.a.createElement("span",{className:"details",onClick:function(){return o((function(e){return!e}))}},"Details"),r.a.createElement("span",{className:"imgDwl",onClick:function(){return window.location=e.src}},"Download HD"),r.a.createElement("div",{className:m?"showDetails":"hide",id:e.idx},r.a.createElement("span",{className:"imgTitle"},e.descr),r.a.createElement("span",{className:"imgOrg"},"Orignal:"),r.a.createElement("span",{className:"imgStyle"},"Style:"))))}function m(e){return r.a.createElement("div",{className:"imageColumn"},e.imgs.map((function(t,a){return r.a.createElement(i,{key:a,idx:e.idx*a+a,src:"https://ramagg.com/deepartgallery/imgs/".concat(t.src),descr:t.title})})))}var o=function(){var e=Object(n.useState)({imgs:[]}),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://ramagg.com/deepartgallery/imgs/").then((function(e){return e.json()})).then((function(e){console.log("Fetching"),c(e)}))}),[]);var s=function(e){for(var t=e,a=t.length,n=[],r=parseInt(a/4),c=0;c<4;c++){var s=t.slice(c*r,(c+1)*r);n.push(s)}return n}(a.imgs);return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"DeepArtGallery")),r.a.createElement("div",{className:"artBox"},s.map((function(e,t){return r.a.createElement(m,{key:t,idx:t,imgs:e})}))))};s.a.render(r.a.createElement(o,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.072f247a.chunk.js.map