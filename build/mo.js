!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("mojs",[],n):"object"==typeof exports?exports.mojs=n():e.mojs=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="build/",n(n.s=8)}([,,function(e,n,t){"use strict";var r=function(){function e(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var u,m=e[Symbol.iterator]();!((r=(u=m.next()).done)||(t.push(u.value),n&&t.length===n));r=!0);}catch(e){i=!0,o=e}finally{try{!r&&m.return&&m.return()}finally{if(i)throw o}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){return void 0!==document.mozHidden?["mozHidden","mozvisibilitychange"]:void 0===document.msHidden?void 0===document.webkitHidden?["hidden","visibilitychange"]:["webkitHidden","webkitvisibilitychange"]:["msHidden","msvisibilitychange"]},o=function(){var e=window.performance.now,n=i(),t=r(n,2),o=t[0],u=t[1],m=[],a=!1,c=void 0,f=function(){return!!a&&(s(e()),m.length?void requestAnimationFrame(f):a=!1)},d=function(){a||(a=!0,requestAnimationFrame(f))},s=function(e){for(var n,t=m.length;t--;)(n=_tweens[t])&&!0===n._update(e)&&(v(n),n.onTweenerFinish())},l=function(){c=m.slice(0);for(var e=0;e<c.length;e++)c[e].pause()},p=function(){if(null!=c)for(var e=0;e<c.length;e++)c[e].resume()};document.addEventListener(u,function(){document[o]?l():p()},!1);var v=function(e){var n="number"==typeof e?e:m.indexOf(e);-1!==n&&(e=m[n])&&(e._isRunning=!1,m.splice(n,1),e._onTweenerRemove())};return{add:function(e){e._isRunning||(e._isRunning=!0,m.push(e),d())},remove:v,removeAll:function(){m.length=0}}};o()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(9),i=(t.n(r),t(2),{revision:"2.1.0"});n.default=i,"undefined"!=typeof window&&(window.mojs=i)},,,,,function(e,n,t){e.exports=t(3)},function(e,n){throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (161:19)\n\n[0m [90m 159 | [39m      [90m// if `prevState` was `play` - play it[39m\n [90m 160 | [39m      [36mcase[39m [32m'play'[39m[33m:[39m\n[31m[1m>[22m[39m[90m 161 | [39m        play(shift [33m;[39m\n [90m     | [39m                   [31m[1m^[22m[39m\n [90m 162 | [39m        [36mbreak[39m[33m;[39m\n [90m 163 | [39m      [36mcase[39m [32m'reverse'[39m[33m:[39m\n [90m 164 | [39m        [90m// if `prevState` was `reverse` - play it backward[39m[0m\n")}])});