(this.webpackJsonpcheckpoint2=this.webpackJsonpcheckpoint2||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(9),s=c.n(r),i=(c(15),c(8)),j=c.n(i),d=c(10),l=c(4),b=c(5),o=c(2),u=c(1);var h=function(e){var t=e.name,c=e.img,n=e.rate,a=e.release,r=e.id,s=e.deleteCard;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("h5",{children:a}),Object(u.jsx)("img",{className:"bg-img",src:c,alt:""}),Object(u.jsx)("p",{children:n}),Object(u.jsxs)("div",{children:[Object(u.jsx)(b.b,{to:"games/".concat(r),children:Object(u.jsx)("button",{className:"btn",children:"Show Details"})}),Object(u.jsx)("button",{className:"btn",onClick:function(){return s(r)},children:"Delete"})]})]})};var m=function(e){var t=e.dataGame,c=e.deleteCard,a=Object(n.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:"btn m",onClick:function(){i(!s)},children:"Show Games with rating above 4.5"}),Object(u.jsx)("div",{className:"games-wrap",children:t.filter((function(e){return!s||e.rating>4.5})).map((function(e){return Object(u.jsx)(h,{deleteCard:c,id:e.id,name:e.name,img:e.background_image,rate:e.rating,release:e.released},e.id)}))})]})};var O=function(e){var t=e.dataGame;console.log(t);var c=Object(o.g)().id;return Object(u.jsx)("div",{className:"detail-cont",children:t.filter((function(e){return e.id===Number(c)})).map((function(e){return Object(u.jsxs)("div",{className:"detail-card",children:[Object(u.jsx)(b.b,{className:"return",to:"/",children:"x"}),Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("p",{children:e.released}),Object(u.jsx)("p",{children:e.slug}),Object(u.jsx)("video",{width:"85%",height:"auto",controls:!0,children:Object(u.jsx)("source",{src:e.clip.clip})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"bg-img",src:e.background_image,alt:""})})]})}))})};var x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];function r(){return(r=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wild-games.jsrover.wilders.dev/games");case 2:return t=e.sent,e.next=5,t.json();case 5:null!==(c=e.sent)&&a(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){r.apply(this,arguments)}()}),[]),Object(u.jsx)(b.a,{basename:"/game-rate",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",element:Object(u.jsx)("div",{children:Object(u.jsx)(m,{deleteCard:function(e){a(c.filter((function(t){return t.id!==e})))},dataGame:c})})}),Object(u.jsx)(o.a,{path:"/games/:id",element:Object(u.jsx)(O,{dataGame:c})})]})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b6e1f365.chunk.js.map