!function(){"use strict";history.replaceState(null,null,sessionStorage.redirect),delete sessionStorage.redirect,"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");function n(n,e){for(var t,r=arguments,o=[],i=[],u=arguments.length;u-- >2;)i.push(r[u]);for(;i.length;)if(Array.isArray(t=i.pop()))for(u=t.length;u--;)i.push(t[u]);else null==t||!0===t||!1===t||o.push(t);return"string"==typeof n?{name:n,props:e||{},children:o}:n(e||{},o)}function e(e){return function(t,r){return"object"!=typeof t||Array.isArray(t)?n(e,{},t):n(e,t,r)}}function t(n,t){return e("button")(n,t)}!function(n,e){if("undefined"==typeof document)return e;n=n||"";var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}("html {\n  font-size: calc(8px + 2vmin);\n  font-family: sans-serif;\n  background: white;\n}\n\nbody,\nbody * {\n  display: block;\n  background: none;\n  box-sizing: border-box;\n  margin: 0;\n  border: 0;\n  padding: 0;\n  outline: 0;\n}\n\nbody,\nnoscript {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\ndiv {\n  display: flex;\n}\n\ndiv > * + * {\n    margin-left: 0.38rem;\n  }\n\nnoscript {\n  width: 100vw;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\nbutton {\n  padding: 0.62rem 1rem;\n  font-size: 0.62rem;\n  border: 1px solid #000;\n  font-weight: bold;\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nh1 {\n  margin: auto;\n  font-size: 8rem;\n  cursor: pointer;\n  text-align: center;\n}\n",void 0);!function(n,e,t,r){var o,i=[],u=r&&r.children[0],c=function n(e,t){return e&&{name:e.nodeName.toLowerCase(),props:{},children:t.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e,t)})}}(u,[].map);return s(function e(t,r,o){for(var i in o)"function"==typeof o[i]?function(e,i){o[e]=function(e){return r=d(t,n),"function"==typeof(e=i(e))&&(e=e(r,o)),e&&e!==r&&!e.then&&s(n=f(t,a(r,e),n,{})),e}}(i,o[i]):e(t.concat(i),r[i]=r[i]||{},o[i]=a(o[i]))}([],n=a(n),e=a(e))),e;function l(l){for(o=!o,l=t(n,e),r&&!o&&(u=function n(e,t,r,o,u,c){if(o===r);else if(null==r)t=e.insertBefore(m(o,u),t);else if(o.name&&o.name===r.name){!function(n,e,t){for(var r in a(e,t))t[r]!==("value"===r||"checked"===r?n[r]:e[r])&&h(n,r,t[r],e[r]);t.onupdate&&i.push(function(){t.onupdate(n,e)})}(t,r.props,o.props);for(var l=[],s={},f={},d=0;d<r.children.length;d++){l[d]=t.childNodes[d];var g=r.children[d],y=p(g);null!=y&&(s[y]=[l[d],g])}for(var d=0,b=0;b<o.children.length;){var g=r.children[d],k=o.children[b],y=p(g),w=p(k);if(f[y])d++;else if(null==w)null==y&&(n(t,l[d],g,k,u),b++),d++;else{var x=s[w]||[];y===w?(n(t,x[0],x[1],k,u),d++):x[0]?n(t,t.insertBefore(x[0],l[d]),x[1],k,u):n(t,l[d],null,k,u),b++,f[w]=k}}for(;d<r.children.length;){var g=r.children[d];null==p(g)&&v(t,l[d],g),d++}for(var d in s)f[s[d][1].props.key]||v(t,s[d][0],s[d][1])}else o.name===r.name?t.nodeValue=o:(t=e.insertBefore(m(o,u),c=t),v(e,c,r));return t}(r,u,c,c=l));l=i.pop();)l()}function s(){o||(o=!o,setTimeout(l))}function a(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t}function f(n,e,t,r){return n.length?(r[n[0]]=1<n.length?f(n.slice(1),e,t[n[0]],{}):e,a(t,r)):e}function d(n,e){for(var t=0;t<n.length;t++)e=e[n[t]];return e}function p(n){return n&&n.props?n.props.key:null}function h(n,e,t,r){if("key"===e);else if("style"===e)for(var o in a(r,t))n[e][o]=null==t||null==t[o]?"":t[o];else{try{n[e]=null==t?"":t}catch(n){}"function"!=typeof t&&(null==t||!1===t?n.removeAttribute(e):n.setAttribute(e,t))}}function m(n,e){var t="string"==typeof n||"number"==typeof n?document.createTextNode(n):(e=e||"svg"===n.name)?document.createElementNS("http://www.w3.org/2000/svg",n.name):document.createElement(n.name);if(n.props){n.props.oncreate&&i.push(function(){n.props.oncreate(t)});for(var r=0;r<n.children.length;r++)t.appendChild(m(n.children[r],e));for(var o in n.props)h(t,o,n.props[o])}return t}function v(n,e,t,r){function o(){n.removeChild(function n(e,t,r){if(r=t.props){for(var o=0;o<t.children.length;o++)n(e.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(e)}return e}(e,t))}t.props&&(r=t.props.onremove)?r(e,o):o()}}({count:0},{reset:function(){return{count:0}},sum:function(n){return function(e){return{count:e.count+n}}}},function(n,r){return o=[(l=n.count,s=void 0,e("h1")(l,s)),(u=[t({onclick:function(n){return r.sum(-1)}},"Sub"),t({onclick:function(n){return r.reset()}},"Reset"),t({onclick:function(n){return r.sum(1)}},"Add")],c=void 0,e("div")(u,c))],i=void 0,e("main")(o,i);var o,i,u,c,l,s},document.body)}();
