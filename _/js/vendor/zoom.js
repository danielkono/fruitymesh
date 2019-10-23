!function(){return function e(t,o,n){function i(d,a){if(!o[d]){if(!t[d]){var m="function"==typeof require&&require;if(!a&&m)return m(d,!0);if(r)return r(d,!0);var c=new Error("Cannot find module '"+d+"'");throw c.code="MODULE_NOT_FOUND",c}var l=o[d]={exports:{}};t[d][0].call(l.exports,function(e){return i(t[d][1][e]||e)},l,l.exports,e,t,o,n)}return o[d].exports}for(var r="function"==typeof require&&require,d=0;d<n.length;d++)i(n[d]);return i}}()({1:[function(e,t,o){var n,i;n=this,i=function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},i=function(e){try{return Array.isArray(e)?e.filter(t):(n=e,NodeList.prototype.isPrototypeOf(n)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[])}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}var n},r=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(d){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},m=window.Promise||function(e){function t(){}e(t,t)},c=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce(function(e,t){return[].concat(e,i(t))},[]);return n.filter(function(e){return-1===f.indexOf(e)}).forEach(function(e){f.push(e),e.classList.add("medium-zoom-image")}),p.forEach(function(e){var t=e.type,o=e.listener,i=e.options;n.forEach(function(e){e.addEventListener(t,o,i)})}),w},l=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target,i=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},i=void 0,r=void 0;if(h.container)if(h.container instanceof Object)i=(t=e({},t,h.container)).width-t.left-t.right-2*h.margin,r=t.height-t.top-t.bottom-2*h.margin;else{var d=(o(h.container)?h.container:document.querySelector(h.container)).getBoundingClientRect(),a=d.width,m=d.height,c=d.left,l=d.top;t=e({},t,{width:a,height:m,left:c,top:l})}i=i||t.width-2*h.margin,r=r||t.height-2*h.margin;var u=z.zoomedHd||z.original,s=n(u)?i:u.naturalWidth||i,f=n(u)?r:u.naturalHeight||r,p=u.getBoundingClientRect(),g=p.top,v=p.left,y=p.width,b=p.height,E=Math.min(s,i)/y,w=Math.min(f,r)/b,L=Math.min(E,w),H="scale("+L+") translate3d("+((i-y)/2-v+h.margin+t.left)/L+"px, "+((r-b)/2-g+h.margin+t.top)/L+"px, 0)";z.zoomed.style.transform=H,z.zoomedHd&&(z.zoomedHd.style.transform=H)};return new m(function(e){if(t&&-1===f.indexOf(t))e(w);else if(z.zoomed)e(w);else{if(t)z.original=t;else{if(!(0<f.length))return void e(w);var n=f;z.original=n[0]}var d,a,m,c,l,s,p,y,b;if(z.original.dispatchEvent(r("medium-zoom:open",{detail:{zoom:w}})),v=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,g=!0,z.zoomed=(m=(a=(d=z.original).getBoundingClientRect()).top,c=a.left,l=a.width,s=a.height,p=d.cloneNode(),y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,b=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,p.removeAttribute("id"),p.style.position="absolute",p.style.top=m+y+"px",p.style.left=c+b+"px",p.style.width=l+"px",p.style.height=s+"px",p.style.transform="",p),document.body.appendChild(E),h.template){var L=o(h.template)?h.template:document.querySelector(h.template);z.template=document.createElement("div"),z.template.appendChild(L.content.cloneNode(!0)),document.body.appendChild(z.template)}if(document.body.appendChild(z.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),z.original.classList.add("medium-zoom-image--hidden"),z.zoomed.classList.add("medium-zoom-image--opened"),z.zoomed.addEventListener("click",u),z.zoomed.addEventListener("transitionend",function t(){g=!1,z.zoomed.removeEventListener("transitionend",t),z.original.dispatchEvent(r("medium-zoom:opened",{detail:{zoom:w}})),e(w)}),z.original.getAttribute("data-zoom-src")){z.zoomedHd=z.zoomed.cloneNode(),z.zoomedHd.removeAttribute("srcset"),z.zoomedHd.removeAttribute("sizes"),z.zoomedHd.src=z.zoomed.getAttribute("data-zoom-src"),z.zoomedHd.onerror=function(){clearInterval(H),console.warn("Unable to reach the zoom image target "+z.zoomedHd.src),z.zoomedHd=null,i()};var H=setInterval(function(){z.zoomedHd.complete&&(clearInterval(H),z.zoomedHd.classList.add("medium-zoom-image--opened"),z.zoomedHd.addEventListener("click",u),document.body.appendChild(z.zoomedHd),i())},10)}else if(z.original.hasAttribute("srcset")){z.zoomedHd=z.zoomed.cloneNode(),z.zoomedHd.removeAttribute("sizes");var C=z.zoomedHd.addEventListener("load",function(){z.zoomedHd.removeEventListener("load",C),z.zoomedHd.classList.add("medium-zoom-image--opened"),z.zoomedHd.addEventListener("click",u),document.body.appendChild(z.zoomedHd),i()})}else i()}})},u=function(){return new m(function(e){!g&&z.original?(g=!0,document.body.classList.remove("medium-zoom--opened"),z.zoomed.style.transform="",z.zoomedHd&&(z.zoomedHd.style.transform=""),z.template&&(z.template.style.transition="opacity 150ms",z.template.style.opacity=0),z.original.dispatchEvent(r("medium-zoom:close",{detail:{zoom:w}})),z.zoomed.addEventListener("transitionend",function t(){z.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(z.zoomed),z.zoomedHd&&document.body.removeChild(z.zoomedHd),document.body.removeChild(E),z.zoomed.classList.remove("medium-zoom-image--opened"),z.template&&document.body.removeChild(z.template),g=!1,z.zoomed.removeEventListener("transitionend",t),z.original.dispatchEvent(r("medium-zoom:closed",{detail:{zoom:w}})),z.original=null,z.zoomed=null,z.zoomedHd=null,z.template=null,e(w)})):e(w)})},s=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return z.original?u():l({target:e})},f=[],p=[],g=!1,v=0,h=a,z={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(d)?h=d:(d||"string"==typeof d)&&c(d);var y,b,E=(y=(h=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},h)).background,(b=document.createElement("div")).classList.add("medium-zoom-overlay"),b.style.background=y,b);document.addEventListener("click",function(e){var t=e.target;t!==E?-1!==f.indexOf(t)&&s({target:t}):u()}),document.addEventListener("keyup",function(e){27===(e.keyCode||e.which)&&u()}),document.addEventListener("scroll",function(){if(!g&&z.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(v-e)>h.scrollOffset&&setTimeout(u,150)}}),window.addEventListener("resize",u);var w={open:l,close:u,toggle:s,update:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(E.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},h.container,t.container)),t.template){var i=o(t.template)?t.template:document.querySelector(t.template);n.template=i}return h=e({},h,n),f.forEach(function(e){e.dispatchEvent(r("medium-zoom:update",{detail:{zoom:w}}))}),w},clone:function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t(e({},h,o))},attach:c,detach:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];z.zoomed&&u();var n=0<t.length?t.reduce(function(e,t){return[].concat(e,i(t))},[]):f;return n.forEach(function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(r("medium-zoom:detach",{detail:{zoom:w}}))}),f=f.filter(function(e){return-1===n.indexOf(e)}),w},on:function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return f.forEach(function(n){n.addEventListener("medium-zoom:"+e,t,o)}),p.push({type:"medium-zoom:"+e,listener:t,options:o}),w},off:function(e,t){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return f.forEach(function(n){n.removeEventListener("medium-zoom:"+e,t,o)}),p=p.filter(function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())}),w},getOptions:function(){return h},getImages:function(){return f},getZoomedImage:function(){return z.original}};return w}},"object"==typeof o&&void 0!==t?t.exports=i():"function"==typeof define&&define.amd?define(i):n.mediumZoom=i()},{}],2:[function(e,t,o){const n=e("medium-zoom");var i,r;(i="span.image img",[].slice.call((r||document).querySelectorAll(i))).forEach(function(e){e.setAttribute("data-zoomable","")}),n("[data-zoomable]",{margin:32,background:"rgba(32, 32, 32, 0.5)",scrollOffset:30})},{"medium-zoom":1}]},{},[2]);