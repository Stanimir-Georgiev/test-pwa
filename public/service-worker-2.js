/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "9/Ks");
/******/ })
/************************************************************************/
/******/ ({

/***/ "9/Ks":
/***/ (function(module, exports) {

if (typeof importScripts === "function") {
  importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.0/workbox-sw.js");
  workbox.setConfig({
    debug: true
  });
  /* global workbox */

  if (workbox) {
    console.log("Workbox is loaded");
    /* injection point for manifest files.  */

    workbox.precaching.precacheAndRoute([{'revision':'308518fb5c90b92394a94d43f7db8639','url':'_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.b6d3b08bfce382184205.js'},{'revision':'595196fbd919d2dd07126a7d4c8191bb','url':'_next/static/chunks/framework.4b1beca48388539e3889.js'},{'revision':'0f7228c181f10695b52a298f80404310','url':'_next/static/chunks/main-eae698c3f3c2975bf9c3.js'},{'revision':'8ed57c120f761fedc15a7c328b61daed','url':'_next/static/chunks/pages/_app-4000645db0b486c46d4a.js'},{'revision':'d96184c6a014524ea9874db095c2fbd6','url':'_next/static/chunks/pages/_error-066fefc8258764a7159b.js'},{'revision':'fb9caded5ab50eaf4affe3dbcdd83673','url':'_next/static/chunks/pages/index-a0623214dbcf215c5646.js'},{'revision':'0fa2c75ddf552a82cdd362f0a74871a7','url':'_next/static/chunks/polyfills-aa54647e89713304033b.js'},{'revision':'8c19f623e8389f11131a054a7e17ff95','url':'_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js'},{'revision':'141213eadb0ecdb8ba0a6bd0f9202683','url':'_next/static/css/6e9ef204d6fd7ac61493.css'},{'revision':'f6c470628b971ba4f634c8b578d8b0de','url':'_next/static/css/c50ddf22b716c7b6b76d.css'},{'revision':'9d39a2a7dea8c09030ec4f042bad215b','url':'_next/static/hGlwwUsYeYCWW4Q9RF3e0/_buildManifest.js'},{'revision':'abee47769bf307639ace4945f9cfd4ff','url':'_next/static/hGlwwUsYeYCWW4Q9RF3e0/_ssgManifest.js'}]); // control the uncontrolled client side

    workbox.core.clientsClaim(); // transit the status from waiting to activate

    workbox.core.skipWaiting();
    workbox.precaching.cleanupOutdatedCaches();
    /* custom cache rules */
    //For images

    workbox.routing.registerRoute(new RegExp(".(?:png|gif|jpg|jpeg|webp|svg)$"), new workbox.strategies.CacheFirst({
      cacheName: "image-caches",
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60
      })]
    }), "GET"); //For JS/CSS

    /*
      Resources are requested from both the cache and the network in parallel. 
      The strategy will respond with the cached version if available, otherwise wait for the network response. 
      The cache is updated with the network response with each successful request
      */

    workbox.routing.registerRoute(new RegExp(".(?:js|css)$"), new workbox.strategies.StaleWhileRevalidate({
      cacheName: "js-css-caches",
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60
      })]
    })); //For HTML

    workbox.routing.registerRoute(new RegExp("/"), new workbox.strategies.NetworkFirst({
      cacheName: "html-caches",
      plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }), new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60
      })]
    })); //Other resources

    workbox.routing.registerRoute(new RegExp("/_next/static/"), new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-caches"
    }));
  } else {// console.log('Workbox could not be loaded. No Offline support');
  }
}

/***/ })

/******/ });