!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(e,n){var t=Math.random()>.3,o={position:e,delay:n};return new Promise((function(e,n){t?e(o):n(o)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=Number(n.currentTarget.delay.value),o=Number(n.currentTarget.step.value),r=Number(n.currentTarget.amount.value),a=0;a<=r;a+=1)u(a,t).then((function(n){var t=n.position,o=n.delay;setTimeout((function(){e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}),o)})).catch((function(n){var t=n.position,o=n.delay;setTimeout((function(){e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}),o)})),t+=o}))}();
//# sourceMappingURL=03-promises.ff107117.js.map