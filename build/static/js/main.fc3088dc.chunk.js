(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{100:function(e,n,t){"use strict";var a=t(90),o=t(0),r=t.n(o),l=t(128),c=t.n(l),u=t(12),i=t(13),m=t(14),s=t(15),h=t(16),p=function(e){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"Loading...")}}]),n}(r.a.Component),b=t(32),d=t(10),f=Object(d.a)();f.listen((function(e,n){var t=document.documentElement.scrollTop||document.body.scrollTop;setTimeout((function(){"POP"!==n&&v(t,0)}))}));var E=function(e){function n(){return Object(u.a)(this,n),Object(m.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(h.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=document.documentElement.scrollTop||document.body.scrollTop;"POP"!==this.props.history.action&&v(e,0)}},{key:"render",value:function(){return null}}]),n}(o.Component);function v(e,n){var t=n-e,a=e;setTimeout((function(){var o=Math.ceil(t/10);a+=o,window.scrollTo(a,e),t>10||t<-10?v(a,n):window.scrollTo(a,n)}),1)}E.defaultProps={history:f};var g=Object(b.f)(E),O=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(m.a)(this,Object(s.a)(n).call(this,e))).state={hasError:!1},t}return Object(h.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something Went Wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(r.a.Component);var j=function(e){return e.map((function(e){var n,t=(n=e.component,c()({loader:n,loading:function(e){return e.pastDelay?r.a.createElement(p,null):null},delay:500}));return Object(a.a)({},e,{component:function(){return r.a.createElement(O,null,r.a.createElement(g,null),r.a.createElement(t,null))}})}))};t.d(n,"a",(function(){return k})),t.d(n,"c",(function(){return T})),t.d(n,"b",(function(){return D}));var y=function(){return Promise.all([t.e(0),t.e(2),t.e(8),t.e(18)]).then(t.bind(null,508))},w=[{path:"/gobang",name:"\u4e94\u5b50\u68cb",component:function(){return t.e(19).then(t.bind(null,498))},exact:!1,icon:"chess board"},{path:"/ticTacToe",name:"\u4e95\u5b57\u68cb",component:function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,505))},exact:!1,icon:"th"},{path:"/chatRoom",name:"\u8054\u673a\u4e94\u5b50\u68cb",component:function(){return Promise.all([t.e(0),t.e(2),t.e(6),t.e(12)]).then(t.bind(null,506))},exact:!1,icon:"handshake outline"}],P=[{path:"/map3D",name:"3D\u5730\u56fe",component:function(){return Promise.all([t.e(1),t.e(16)]).then(t.bind(null,499))},exact:!1,icon:"paper plane outline"},{path:"/create-objects",name:"\u521b\u5efa\u7269\u4f53",component:function(){return Promise.all([t.e(0),t.e(1),t.e(9),t.e(13)]).then(t.bind(null,500))},exact:!1,icon:"hourglass half"},{path:"/use-texture",name:"\u4f7f\u7528\u7eb9\u7406",component:function(){return Promise.all([t.e(0),t.e(1),t.e(10)]).then(t.bind(null,501))},exact:!1,icon:"barcode"},{path:"/default-geometry",name:"\u5185\u7f6e\u51e0\u4f55\u6a21\u578b",component:function(){return Promise.all([t.e(1),t.e(11)]).then(t.bind(null,502))},exact:!1,icon:"clone outline"}],x=[].concat([{path:"/",name:"home",component:y,exact:!0},{path:"/login",name:"login",component:y,exact:!1},{path:"/games",name:"games",component:function(){return t.e(17).then(t.bind(null,495))},exact:!1},{path:"/webgl",name:"webgl",component:function(){return Promise.all([t.e(7),t.e(20)]).then(t.bind(null,496))},exact:!1},{path:"/404",name:"404",component:function(){return t.e(21).then(t.bind(null,497))},exact:!1}],w,P,[{path:"/logs",name:"\u5185\u7f6e\u51e0\u4f55\u6a21\u578b",component:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,504))},exact:!1,icon:"clone outline"}]),k=j(w),T=j(P),D=j(x)},166:function(e,n,t){e.exports=t(284)},171:function(e,n,t){},282:function(e,n,t){},283:function(e,n,t){},284:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(52),l=t.n(r),c=t(36),u=(t(171),t(12)),i=t(13),m=t(14),s=t(15),h=t(16),p=t(32),b=t(100),d=t(290),f=t(292),E=t(291),v=t(287),g=function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(o)))).toggleMenu=function(e){t.setState({isOpen:!e})},t}return Object(h.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(d.a.Pushable,{as:f.a},o.a.createElement(d.a,{as:E.a,animation:"overlay",icon:"labeled",inverted:!0,vertical:!0,visible:!0,width:"thin"},o.a.createElement(E.a.Item,null,o.a.createElement(c.b,{to:"/games"},o.a.createElement(v.a,{name:"chess"}),o.a.createElement("p",null,"\u6e38\u620f\u5ba4"))),o.a.createElement(E.a.Item,null,o.a.createElement(c.b,{to:"/webgl"},o.a.createElement(v.a,{name:"globe"}),o.a.createElement("p",null,"3D\u4e16\u754c"))),o.a.createElement(E.a.Item,null,o.a.createElement(c.b,{to:"/logs"},o.a.createElement(v.a,{name:"file alternate"}),o.a.createElement("p",null,"\u65e5\u5fd7")))),o.a.createElement(d.a.Pusher,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement("header",{className:"App-header"},o.a.createElement(p.c,null,b.b.map((function(e){return o.a.createElement(p.a,Object.assign({},e,{key:e.name}))}))))))))}}]),n}(a.Component),O=(t(281),t(282),t(283),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(c.a,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[166,4,5]]]);
//# sourceMappingURL=main.fc3088dc.chunk.js.map