!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");function u(n,o){var t=Math.random()>.3;new Promise((function(e,i){setTimeout((function(){t?e({position:n,delay:o}):i({position:n,delay:o})}),o)})).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=e.currentTarget,o=n.delay,t=n.step,i=n.amount,r=Number(o.value),a=Number(t.value),l=Number(i.value),c=1;c<=l;c+=1)u(c,r),r+=a}))}();
//# sourceMappingURL=03-promises.60dcf26a.js.map
