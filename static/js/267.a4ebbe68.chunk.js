"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{6267:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(5861),a=n(885),u=n(7757),c=n.n(u),s=n(7422),i=n(2791),o=n(6871),p="Reviews_list__okdpy",f="Reviews_item__DJKij",v="Reviews_text__EqLvx",h="Reviews_title__t265C",d=n(184),l=function(e){var t=e.author,n=e.content;return(0,d.jsxs)("div",{children:[(0,d.jsx)("b",{className:v,children:t}),(0,d.jsx)("p",{className:h,children:n})]})},m=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],v=(0,o.UO)().movieId,h=(0,i.useState)(""),m=(0,a.Z)(h,2),w=m[0],x=m[1],_=(0,i.useState)(!1),k=(0,a.Z)(_,2),b=k[0],g=k[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,s.LS)(v);case 4:t=e.sent,n=t.results,u(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x("Ooops. Something went wrong...");case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,d.jsxs)(d.Fragment,{children:[b&&"Loading...",null!==n&&void 0!==n&&n.length?(0,d.jsx)("ul",{className:p,children:n.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(l,{author:e.author,content:e.content,className:f})},e.id)}))}):(0,d.jsx)("p",{children:"We don't have any reviews for this movie"}),w&&(0,d.jsx)("div",{children:w})]})}},7422:function(e,t,n){n.d(t,{BG:function(){return f},LS:function(){return h},R4:function(){return v},bI:function(){return p},vw:function(){return o}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),s={api_key:"7a4cd4317772102a9b88ef6a54b71590"},i=n.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:s}),o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/week");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("\n/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=267.a4ebbe68.chunk.js.map