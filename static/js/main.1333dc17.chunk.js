(this.webpackJsonpmyreads=this.webpackJsonpmyreads||[]).push([[0],{116:function(e,a,t){e.exports=t.p+"static/media/searchEmptyState.706ab192.png"},136:function(e,a,t){e.exports=t(237)},141:function(e,a,t){},142:function(e,a,t){},237:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(8),r=t.n(l),c=(t(141),t(44)),s=t.n(c),i=t(111),m=t(58),u=t(43),d=t(28),h=t(21),p=t(238),b=t(240),k=t(81),E=(t(142),t(66)),f="https://reactnd-books-api.udacity.com",y=localStorage.token;y||(y=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json",Authorization:y},g=function(e,a){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(E.a)(Object(E.a)({},v),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:a})}).then((function(e){return e.json()}))},N=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(E.a)(Object(E.a)({},v),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},w=t(246),x=p.a.Header,j=function(){return o.a.createElement(w.a,{className:"header-affix"},o.a.createElement(x,{className:"header"},o.a.createElement(d.b,{to:"".concat("/react-myreads","/")},o.a.createElement("span",{className:"logo"},"MyReads"))))},B=t(248),R=t(249),O=p.a.Footer,S=function(){return o.a.createElement(O,{className:"footer-author-description"},o.a.createElement("span",null,"Created by Praveen Sripati "),o.a.createElement("a",{href:"https://github.com/praveen-sripati",target:"blank"},o.a.createElement(B.a,{className:"footer-author-description__icon"})),o.a.createElement("a",{href:"https://in.linkedin.com/in/praveen-sripati",target:"blank"},o.a.createElement(R.a,{className:"footer-author-description__icon"})))},C=t(251),T=t(116),M=t.n(T),W=t(241),_=t(243),I=t(247),L=t(250),q=W.a.Meta,z=function(e){var a=e.book,t=e.onMoveBook,l=e.showBook,r=Object(n.useState)({isClicked:!1}),c=Object(u.a)(r,2),s=c[0],i=c[1],m=o.a.createElement(_.a,{onClick:function(e){switch(i({isClicked:!1}),e.key){case"1":t(a,"currentlyReading");break;case"2":t(a,"wantToRead");break;case"3":t(a,"read")}}},o.a.createElement(_.a.Item,{key:"0",disabled:!0,style:{fontWeight:"bolder"}},"Move To ",o.a.createElement("span",{role:"img","aria-label":"Down hand emoji"},"\ud83d\udc47")),o.a.createElement(_.a.Item,{key:"1"},"Currently Reading"),o.a.createElement(_.a.Item,{key:"2"},"Want to Read"),o.a.createElement(_.a.Item,{key:"3"},"Read"),o.a.createElement(_.a.Item,{key:"4"},"None")),d=o.a.createElement("div",{className:"shelf-books__book",onClick:function(e){e.persist(),"button"!==e.target.localName&&"path"!==e.target.localName&&"li"!==e.target.localName&&(i({isClicked:!0}),l(a))}},o.a.createElement(W.a,{bordered:!0,hoverable:!0,style:{width:240},cover:o.a.createElement("img",{alt:"example",src:a.imageLinks?a.imageLinks.thumbnail:"https://via.placeholder.com/240x300"})},o.a.createElement(q,{className:"book-title-bottom book-description",title:a.title,description:a.subtitle?a.subtitle.length>=50?a.subtitle.slice(0,45).concat("..."):a.subtitle:a.description?a.description.slice(0,45).concat("..."):null}),o.a.createElement(I.a,{overlay:m},o.a.createElement(k.a,{className:"book-card-move-button",type:"primary",shape:"circle",icon:o.a.createElement(L.a,null),size:"large"}))));return o.a.createElement("div",null,s.isClicked?o.a.createElement(h.a,{push:!0,to:"".concat("/react-myreads","/book/").concat(a.id)},d):d)},A=p.a.Header,D=p.a.Content,H=function(e){var a=e.onShowBook,t=e.onMoveBook,l=Object(n.useState)({query:""}),r=Object(u.a)(l,2),c=r[0],i=r[1],h=Object(n.useState)({books:[]}),p=Object(u.a)(h,2),b=p[0],E=p[1],f=function(){var e=Object(m.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(c.query);case 2:t=e.sent,E({books:t});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),y=o.a.createElement("div",{className:"empty-state__no-search"},o.a.createElement("img",{alt:"Empty State Holder",src:M.a}));return o.a.createElement("div",null,o.a.createElement(w.a,{className:"header-affix"},o.a.createElement(A,{className:"search-header header"},o.a.createElement(d.b,{to:"".concat("/react-myreads","/search"),className:"search-link"},o.a.createElement("input",{className:"search",type:"text",name:"search",placeholder:"Search books here..",onChange:function(e){i({query:e.target.value}),f(c.query)}})))),o.a.createElement(D,{className:"content search-content"},o.a.createElement(d.b,{to:"".concat("/react-myreads","/")},o.a.createElement(k.a,{style:{position:"fixed",left:"20px",top:"85px",width:"50px",height:"50px"},type:"primary",shape:"circle",icon:o.a.createElement(C.a,null),size:"large"})),""===c.query?y:o.a.createElement("div",{className:"shelf-books"},Array.isArray(b.books)?b.books.map((function(e){return o.a.createElement(z,{key:e.id,book:e,onMoveBook:t,showBook:a})})):y)))},J=t(242),P=t(244),F=p.a.Content,G=J.a.Title,U=J.a.Text,V=function(e){var a=e.book,t=o.a.createElement("span",null,"Not Given");return o.a.createElement(F,{className:"book-page-content "},a?o.a.createElement("div",{className:"book-page-layout"},o.a.createElement(d.b,{to:"".concat("/react-myreads","/")},o.a.createElement(k.a,{style:{position:"fixed",left:"20px",top:"85px",width:"50px",height:"50px"},type:"primary",shape:"circle",icon:o.a.createElement(C.a,null),size:"large"})),o.a.createElement("img",{className:"book-page-content-img",src:null===a||void 0===a?void 0:a.imageLinks.smallThumbnail,alt:null===a||void 0===a?void 0:a.title}),o.a.createElement("div",{className:"book-page-details"},o.a.createElement(G,{level:2},null===a||void 0===a?void 0:a.title),o.a.createElement("div",null,o.a.createElement("h3",null,null===a||void 0===a?void 0:a.subtitle),a.authors[0]?o.a.createElement(U,{type:"secondary"},"By ",null===a||void 0===a?void 0:a.authors[0]):null),o.a.createElement("p",null,null===a||void 0===a?void 0:a.description.slice(0,200).concat("...")),o.a.createElement("p",null,o.a.createElement("span",{className:"book-page-details-label"},"Shelf Name: "),a.shelf?a.shelf:t),o.a.createElement("p",null,o.a.createElement("span",{className:"book-page-details-label"},"Published Date: "),a.publishedDate?a.publishedDate:t),o.a.createElement("div",{style:{marginBottom:"14px"}},o.a.createElement("span",{className:"book-page-details-label"},"Average Rating: "),a.averageRating?o.a.createElement(P.a,{disabled:!0,defaultValue:Math.round(null===a||void 0===a?void 0:a.averageRating)}):t),o.a.createElement("p",null,o.a.createElement("span",{className:"book-page-details-label"},"Ratings Count: "),a.ratingsCount?a.ratingsCount:t),o.a.createElement("p",null,o.a.createElement("span",{className:"book-page-details-label"},"Info Link: "),a.infoLink?o.a.createElement("a",{href:a.infoLink,target:"blank"}," ",a.infoLink.slice(0,40).concat("...")," "):t))):null)},$=t(245),K=function(){return o.a.createElement($.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:o.a.createElement(d.b,{to:"".concat("/react-myreads","/")},o.a.createElement(k.a,{type:"primary"},"Back Home"))})},Q=t(252),X=t(56),Y=t(239),Z=t(80),ee=t.n(Z),ae=J.a.Title,te=J.a.Text,ne=function(e){var a,t,n=e.shelf,l=e.onMoveBook,r=e.showBook,c=null,s=null,i=null,m=o.a.createElement("div",null,o.a.createElement(ae,{level:4},"Whoops!"),o.a.createElement(te,{style:{display:"block"},type:"secondary"},"We can't find any books in this Shelf."),o.a.createElement(te,{type:"secondary"}," Add some books to see them."));return 0===(null===(a=n.books)||void 0===a?void 0:a.length)&&(c="Read"===n.shelfName?o.a.createElement(X.a,{image:ee.a,imageStyle:{height:120},description:m}):null,s="Want To Read"===n.shelfName?o.a.createElement(X.a,{image:ee.a,imageStyle:{height:120},description:m}):null,i="Currently Reading"===n.shelfName?o.a.createElement(X.a,{image:ee.a,imageStyle:{height:120},description:m}):null),o.a.createElement("div",{className:"shelf-content"},o.a.createElement(ae,{className:"shelf-title",level:2},n.shelfName),o.a.createElement(Y.a,{className:"divider"}),o.a.createElement("div",{className:"shelf-books"},c,s,i,null===(t=n.books)||void 0===t?void 0:t.map((function(e){return o.a.createElement(z,{key:e.id,book:e,onMoveBook:l,showBook:r})}))))},oe=function(e){var a=e.state,t=e.onMoveBook,n=e.showBook;return o.a.createElement("div",null,o.a.createElement(ne,{shelf:a.currentlyReading,onMoveBook:t,showBook:n}),o.a.createElement(ne,{shelf:a.wantToRead,onMoveBook:t,showBook:n}),o.a.createElement(ne,{shelf:a.read,onMoveBook:t,showBook:n}))},le=p.a.Content;var re=function(){var e=Object(n.useState)({currentlyReading:{shelfName:"Currently Reading",books:null},wantToRead:{shelfName:"Want To Read",books:null},read:{shelfName:"Read",books:null},loading:!0}),a=Object(u.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)({book:null}),c=Object(u.a)(r,2),E=c[0],y=c[1],N=function(){var e=Object(m.a)(s.a.mark((function e(){var a,t,n,o,r,c,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/books"),{headers:v}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:a=e.sent,t=[],n=[],o=[],r=Object(i.a)(a);try{for(r.s();!(c=r.n()).done;)"currentlyReading"===(m=c.value).shelf?t.push(m):"wantToRead"===m.shelf?n.push(m):o.push(m)}catch(s){r.e(s)}finally{r.f()}l({currentlyReading:{shelfName:"Currently Reading",books:t},wantToRead:{shelfName:"Want To Read",books:n},read:{shelfName:"Read",books:o},loading:!1});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]);var w=Object(n.useCallback)(function(){var e=Object(m.a)(s.a.mark((function e(a,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(a,t);case 2:N();case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),[]),x=function(e){y({book:e})};return o.a.createElement(d.a,null,o.a.createElement(p.a,{className:"container layout"},o.a.createElement("div",{className:"wrapper"},o.a.createElement(h.d,null,o.a.createElement(h.b,{exact:!0,path:"".concat("/react-myreads","/")},o.a.createElement(j,null),o.a.createElement(le,{className:"content"},t.loading?o.a.createElement(b.a,{size:"large",className:"spinner"}):o.a.createElement(oe,{state:t,onMoveBook:w,showBook:x}),o.a.createElement(d.b,{to:"".concat("/react-myreads","/search")},o.a.createElement(k.a,{style:{position:"fixed",right:"25px",bottom:"25px",width:"50px",height:"50px"},type:"primary",shape:"circle",icon:o.a.createElement(Q.a,null),size:"large"})))),o.a.createElement(h.b,{exact:!0,path:"".concat("/react-myreads","/search")},o.a.createElement(H,{onMoveBook:w,onShowBook:x})),o.a.createElement(h.b,{exact:!0,path:"".concat("/react-myreads","/book/:id")},o.a.createElement(j,null),o.a.createElement(V,{book:E.book})),o.a.createElement(h.b,null,o.a.createElement(K,null)))),o.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,a,t){e.exports=t.p+"static/media/No_books.04ae4764.png"}},[[136,1,2]]]);
//# sourceMappingURL=main.1333dc17.chunk.js.map