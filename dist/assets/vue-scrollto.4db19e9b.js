import{ag as n}from"./vendor.e3a29b40.js";var e={exports:{}},t=e.exports=function(){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function e(){return(e=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var t=4,o=.001,r=1e-7,i=10,u=11,a=1/(u-1),f="function"==typeof Float32Array;function c(n,e){return 1-3*e+3*n}function l(n,e){return 3*e-6*n}function s(n){return 3*n}function d(n,e,t){return((c(e,t)*n+l(e,t))*n+s(e))*n}function v(n,e,t){return 3*c(e,t)*n*n+2*l(e,t)*n+s(e)}function p(n,e,t,o,u){var a,f,c=0;do{(a=d(f=e+(t-e)/2,o,u)-n)>0?t=f:e=f}while(Math.abs(a)>r&&++c<i);return f}function y(n,e,o,r){for(var i=0;i<t;++i){var u=v(e,o,r);if(0===u)return e;e-=(d(e,o,r)-n)/u}return e}function m(n){return n}var w=function(n,e,t,r){if(!(0<=n&&n<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(n===e&&t===r)return m;for(var i=f?new Float32Array(u):new Array(u),c=0;c<u;++c)i[c]=d(c*a,n,t);function l(e){for(var r=0,f=1,c=u-1;f!==c&&i[f]<=e;++f)r+=a;--f;var l=r+(e-i[f])/(i[f+1]-i[f])*a,s=v(l,n,t);return s>=o?y(e,l,n,t):0===s?l:p(e,r,r+a,n,t)}return function(n){return 0===n?0:1===n?1:d(l(n),e,r)}},b={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},g=!1;try{var h=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,h)}catch(F){}var O={$:function(n){return"string"!=typeof n?n:document.querySelector(n)},on:function(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)n.addEventListener(e[r],t,!!g&&o)},off:function(n,e,t){e instanceof Array||(e=[e]);for(var o=0;o<e.length;o++)n.removeEventListener(e[o],t)},cumulativeOffset:function(n){var e=0,t=0;do{e+=n.offsetTop||0,t+=n.offsetLeft||0,n=n.offsetParent}while(n);return{top:e,left:t}}},S=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],L={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function T(n){L=e({},L,n)}var E=function(){var e,t,o,r,i,u,a,f,c,l,s,d,v,p,y,m,g,h,T,E,P,x,A,C,V,D,j,z=function(n){f&&(A=n,E=!0)};function M(n){var e=n.scrollTop;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}function F(n){var e=n.scrollLeft;return"body"===n.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}function H(){P=O.cumulativeOffset(t),x=O.cumulativeOffset(e),d&&(y=x.left-P.left+u,h=y-p),v&&(g=x.top-P.top+u,T=g-m)}function N(n){if(E)return $();V||(V=n),i||H(),D=n-V,j=Math.min(D/o,1),j=C(j),k(t,m+T*j,p+h*j),D<o?window.requestAnimationFrame(N):$()}function $(){E||k(t,g,y),V=!1,O.off(t,S,z),E&&s&&s(A,e),!E&&l&&l(e)}function k(n,e,t){v&&(n.scrollTop=e),d&&(n.scrollLeft=t),"body"===n.tagName.toLowerCase()&&(v&&(document.documentElement.scrollTop=e),d&&(document.documentElement.scrollLeft=t))}function q(y,P){var x=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===n(P)?x=P:"number"==typeof P&&(x.duration=P),!(e=O.$(y)))return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+y);if(t=O.$(x.container||L.container),o=x.hasOwnProperty("duration")?x.duration:L.duration,i=x.hasOwnProperty("lazy")?x.lazy:L.lazy,r=x.easing||L.easing,u=x.hasOwnProperty("offset")?x.offset:L.offset,a=x.hasOwnProperty("force")?!1!==x.force:L.force,f=x.hasOwnProperty("cancelable")?!1!==x.cancelable:L.cancelable,c=x.onStart||L.onStart,l=x.onDone||L.onDone,s=x.onCancel||L.onCancel,d=void 0===x.x?L.x:x.x,v=void 0===x.y?L.y:x.y,"function"==typeof u&&(u=u(e,t)),p=F(t),m=M(t),H(),E=!1,!a){var V="body"===t.tagName.toLowerCase()?document.documentElement.clientHeight||window.innerHeight:t.offsetHeight,D=m,j=D+V,$=g-u,k=$+e.offsetHeight;if($>=D&&k<=j)return void(l&&l(e))}if(c&&c(e),T||h)return"string"==typeof r&&(r=b[r]||b.ease),C=w.apply(w,r),O.on(t,S,z,{passive:!0}),window.requestAnimationFrame(N),function(){A=null,E=!0};l&&l(e)}return q},P=E(),x=[];function A(n){for(var e=0;e<x.length;++e)if(x[e].el===n)return x.splice(e,1),!0;return!1}function C(n){for(var e=0;e<x.length;++e)if(x[e].el===n)return x[e]}function V(n){var e=C(n);return e||(x.push(e={el:n,binding:{}}),e)}function D(n){var e=V(this).binding;if(e.value){if(n.preventDefault(),"string"==typeof e.value)return P(e.value);P(e.value.el||e.value.element,e.value)}}var j={bind:function(n,e){V(n).binding=e,O.on(n,"click",D)},unbind:function(n){A(n),O.off(n,"click",D)},update:function(n,e){V(n).binding=e}},z={bind:j.bind,unbind:j.unbind,update:j.update,beforeMount:j.bind,unmounted:j.unbind,updated:j.update,scrollTo:P,bindings:x},M=function(n,e){e&&T(e),n.directive("scroll-to",z),(n.config.globalProperties||n.prototype).$scrollTo=z.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=z,window.VueScrollTo.setDefaults=T,window.VueScrollTo.scroller=E,window.Vue.use&&window.Vue.use(M)),z.install=M,z}();
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */export{t as V};
