(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],{16:function(e,t,n){},42:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=n.n(o),c=n(17),i=n.n(c),s=(n(42),n(9)),u=(n(16),n(2)),l=n(6),d=n(7),p=[{id:"Country",name:""},{id:"City",name:""}],f=function(e,t){return{type:"ADD_LOCATION_NAME",id:e,name:t}},j=a.a.memo((function(e){var t=Object(l.b)(),n=Object(o.useState)(e.value),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(o.useState)(null),d=Object(s.a)(u,2),p=d[0],j=d[1],h=function(t){"Enter"===t.key&&null===p?(""!==c.trim()?(i(""),j(null)):(i(""),j("Name is required")),e.onKeyPressHandler(e.id,t.key)):(j(null),m())},b=function(){j(null),m()},m=function(){""===e.value.trim()&&t(f(e.id,""))};return null===p?Object(r.jsx)("input",{className:"formCity input",type:"text",placeholder:e.placeholder,value:e.value,onKeyPress:h,onChange:function(t){e.onChangeHandler(e.id,t.currentTarget.value),i(t.currentTarget.value)},onBlur:m}):Object(r.jsx)("input",{className:"error",value:p,onClick:b,onChange:b,onKeyPress:h,onBlur:b})})),h=n(13),b=n(8),m=n.n(b),O=n(15),v=n(23),y=n.n(v),C=y.a.create({baseURL:"https://geocode-maps.yandex.ru/1.x/"}),g=function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("?format=json&geocode=".concat(t,"&apikey=").concat("cf257613-388c-495a-989f-98c40a840056"));case 2:return e.abrupt("return",e.sent.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ").reverse().map((function(e){return+e})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=y.a.create({baseURL:"https://search-maps.yandex.ru/v1/"}),w=function(){var e=Object(O.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new RegExp(["\u0441\u0440\u0435\u0434\u043d\u044f\u044f","\u0433\u0438\u043c\u043d\u0430\u0437\u0438\u044f"].join("|"),"i"),e.next=4,x.get("?text=".concat(t," \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e, it \u0448\u043a\u043e\u043b\u0430&results=100&lang=ru_RU&apikey=").concat("2fabdc58-1495-4a84-afef-ac1bc6f1f91c"));case 4:return e.abrupt("return",e.sent.data.features.filter((function(e){return!e.properties.name.toLowerCase().match(n)})).map((function(e){return Object(d.a)(Object(d.a)({},e),{},{coordinates:e.geometry.coordinates.reverse()})})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={cityCoordinates:[53.9,27.56],schools:[{geometry:{coordinates:[1,2],type:""},properties:{name:{},description:null,CompanyMetaData:{id:"",name:"",address:"",url:""}},type:""}]},N=function(e,t){return{type:"GET_CITY_COORDINATES",cityCoordinates:e,schools:t}},D=function(e,t){return function(){var n=Object(O.a)(m.a.mark((function n(r){var o,a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e+" "+t);case 2:return o=n.sent,n.next=5,w(e+" "+t);case 5:a=n.sent,r(N(o,a));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},T=a.a.memo((function(e){var t=Object(l.c)((function(e){return e.inputData})),n=Object(l.b)(),o=function(e,t){n(f(e,t))},a=function(e,t){return c()},c=function(){var r=t[0].name.trim(),o=t[1].name.trim();n(""===r&&""===o?D("Belarus","Minsk"):D(r,o)),e.redirectFunc()};return Object(r.jsxs)("form",{className:"formWrapper",children:[Object(r.jsx)("div",{className:"formName",children:"Name"}),t.map((function(e){return Object(r.jsxs)("div",{className:"form"+e.id,children:[Object(r.jsx)("div",{children:e.id}),Object(r.jsx)(j,{id:e.id,value:e.name,placeholder:"E"+"nter your ".concat(e.id).toLowerCase(),onChangeHandler:o,onKeyPressHandler:a},e.id)]})})),Object(r.jsxs)("div",{children:[Object(r.jsx)(h.b,{to:"/yandexMap",children:Object(r.jsx)("button",{className:"btnFormSearch",onClick:c,children:"Search"})}),e.doRedirectFunc()]}),Object(r.jsx)("div",{})]})})),M=n(12);var S=function(e){return console.log(e.schools),Object(r.jsx)("div",{className:"listWrapper",children:Object(r.jsx)("div",{className:"schoolItem",children:e.schools.map((function(e){return Object(r.jsxs)("div",{children:["-",e.properties.name,",",e.properties.description,","]})}))})})},E=a.a.memo((function(){var e=Object(l.c)((function(e){return e.cityData.cityCoordinates})),t=Object(l.c)((function(e){return e.cityData.schools})),n=Object(o.useState)("Map view"),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(l.b)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){return i("Map view"===c?"List view":"Map view")},children:"Change view"}),Object(r.jsx)(M.e,{children:Object(r.jsx)("div",{className:"mapWrapper",children:"Map view"===c?Object(r.jsxs)(M.c,{state:{center:e,zoom:12,controls:["zoomControl","fullscreenControl"]},width:"100%",height:"100vh",modules:["control.ZoomControl","control.FullscreenControl","geoObject.addon.balloon","geoObject.addon.hint"],children:[Object(r.jsx)(M.a,{data:{content:"Choose city"},options:{float:"left"},children:[{data:{content:"Minsk"},options:{selectOnClick:!1},coords:[53.902284,27.561831]},{data:{content:"Kiev"},options:{selectOnClick:!1},coords:[50.450441,30.52355]},{data:{content:"Moscow"},options:{selectOnClick:!1},coords:[55.753559,37.609218]}].map((function(e){return Object(r.jsx)(M.b,{data:e.data,options:e.options,onClick:function(){return function(e,t){u(function(e){return{type:"SET_CITY_COORDINATES",cityCoordinates:e}}(e)),u(D("",t))}(e.coords,e.data.content)}},e.data.content)}))}),t.map((function(e){return Object(r.jsx)(M.d,{geometry:e.geometry.coordinates,properties:{iconCaption:e.properties.name,balloonContentHeader:e.properties.name,balloonContentBody:"<address>\n                                                                     ".concat(e.properties.CompanyMetaData.address,"\n                                                                     <br/>\n                                                                     ").concat(e.properties.CompanyMetaData.url?'\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435: <a href="'.concat(e.properties.CompanyMetaData.url,'">').concat(e.properties.CompanyMetaData.url,"</a>"):"","\n                                                                     </address>"),hintContent:e.properties.name},options:{preset:"islands#blueLeisureIcon",hideIconOnBalloonOpen:!1}})}))]}):Object(r.jsx)(S,{schools:t})})})]})}));var A=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(T,{redirectFunc:function(){a(!0)},doRedirectFunc:function(){if(n)return Object(r.jsx)(u.a,{path:"/yandexMap",render:function(){return Object(r.jsx)(E,{})}})}})})},I=n(11),_=n(36),R=Object(I.c)({cityData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(console.log(JSON.stringify(e)),t.type){case"GET_CITY_COORDINATES":return Object(d.a)(Object(d.a)({},e),{},{cityCoordinates:t.cityCoordinates,schools:t.schools});case"SET_CITY_COORDINATES":return Object(d.a)(Object(d.a)({},e),{},{cityCoordinates:t.cityCoordinates});default:return e}},inputData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LOCATION_NAME":return e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{name:t.name}):e}));default:return e}}}),W=Object(I.d)(R,Object(I.a)(_.a));window.store=W;var L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(r.jsx)(h.a,{children:Object(r.jsx)(l.a,{store:W,children:Object(r.jsx)(A,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/map-app-master",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/map-app-master","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.cb06889c.chunk.js.map