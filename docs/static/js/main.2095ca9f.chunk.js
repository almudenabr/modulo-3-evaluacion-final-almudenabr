(this["webpackJsonpmy-form"]=this["webpackJsonpmy-form"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(17),i=c.n(s),l=(c(24),c(12)),j=c(2),o=(c(25),c(11)),d=(c(26),function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)(o.Link,{to:"/",children:Object(n.jsx)("img",{src:"https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png",alt:"",className:"header__title"})})})}),h=(c(32),function(e){return Object(n.jsx)("section",{className:"filterContainer",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)("label",{className:"filterContainer--label",htmlFor:"name",children:"Busca tu personaje favorito:"}),Object(n.jsx)("input",{className:"filterContainer--input",type:"text",id:"name",onChange:function(t){e.handleFilterApp(t.target.value)}})]})})}),u=(c(33),c(10)),b=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u.b,{to:"/character-detail/".concat(e.character.id),className:"link",children:Object(n.jsxs)("li",{className:"card",children:[Object(n.jsx)("img",{className:"card__img",src:e.character.image,alt:"Imagen de ".concat(e.character.name)}),Object(n.jsx)("h4",{className:"card__name",children:e.character.name}),Object(n.jsxs)("p",{className:"card__detail",children:[" ",e.character.species]})]})})})},m=(c(34),function(e){var t=e.charactersApp.map((function(e){return Object(n.jsx)(b,{id:e.id,character:e},e.id)}));return Object(n.jsx)("section",{children:0!==e.charactersApp.length?Object(n.jsx)("ul",{className:"listContainer",children:t}):Object(n.jsx)("p",{className:"errorMessage",children:"El personaje ".concat(e.inputTextApp," no existe.")})})}),p=(c(35),function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(o.Link,{to:"/",className:"link",children:Object(n.jsxs)("article",{className:"item",children:[Object(n.jsx)("img",{className:"item__img",src:e.foundCharacterApp.image,alt:"Imagen de ".concat(e.foundCharacterApp.name)}),Object(n.jsxs)("section",{className:"item__info",children:[Object(n.jsx)("header",{className:"item__info--title",children:Object(n.jsx)("h2",{children:e.foundCharacterApp.name})}),Object(n.jsxs)("ul",{className:"item__info--list",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Status: "}),e.foundCharacterApp.status]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Species: "}),e.foundCharacterApp.species]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Origin: "}),e.foundCharacterApp.origin.name]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Episodes: "}),e.foundCharacterApp.episode.length]})]})]})]})})})}),O=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))},x=(c(36),function(){return Object(n.jsx)("div",{className:"loading",children:"Cargando..."})}),f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],b=Object(a.useState)(!1),f=Object(l.a)(b,2),g=f[0],N=f[1];Object(a.useEffect)((function(){N(!0),O().then((function(e){r(e),N(!1)}))}),[]);var _=c.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})),A=o;return Object(n.jsxs)(n.Fragment,{children:[!0===g?Object(n.jsx)(x,{}):null,Object(n.jsx)(d,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(h,{handleFilterApp:function(e){u(e)}}),Object(n.jsxs)(j.Switch,{children:[Object(n.jsx)(j.Route,{exact:!0,path:"/",children:Object(n.jsx)(m,{charactersApp:_,inputTextApp:A})}),Object(n.jsx)(j.Route,{path:"/character-detail/:characterId",render:function(e){var t=e.match.params.characterId,a=c.find((function(e){return parseInt(t)===e.id}));return a?Object(n.jsx)(p,{foundCharacterApp:a}):Object(n.jsx)("p",{className:"errorMessage",children:"Lo sentimos, ese personaje no es de esta galaxia."})}})]})]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(u.a,{children:Object(n.jsx)(f,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2095ca9f.chunk.js.map