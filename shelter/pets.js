"use strict";
(self["webpackChunkshelter"] = self["webpackChunkshelter"] || []).push([[907],{

/***/ 419:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./src/utils/htmlToElements.js
var htmlToElements = __webpack_require__(185);
;// CONCATENATED MODULE: ./src/pages/pets/header/header.html
// Module
var code = "<header class=\"header\"> <div class=\"header-wrapper\"> <div class=\"logo\"> <a href=\"#\"> <span class=\"logo__title\">Cozy House</span> <span class=\"logo__subtitle\">Shelter for pets in Boston</span> </a> </div> <nav class=\"nav\"> <ul class=\"nav__list\"> <li class=\"nav__item\"> <a href=\"/\" class=\"nav__link\">About the shelter</a> </li> <li class=\"nav__item\"> <a href=\"javascript:void(0);\" class=\"nav__link\">Our pets</a> </li> <li class=\"nav__item\"> <a href=\"/#help\" class=\"nav__link\">Help the shelter</a> </li> <li class=\"nav__item\"> <a href=\"/#contacts\" class=\"nav__link\">Contacts</a> </li> </ul> </nav> </div> </header>";
// Exports
/* harmony default export */ var header = (code);
;// CONCATENATED MODULE: ./src/pages/pets/header/index.js




const header_header = (0,htmlToElements/* default */.Z)(header);

/* harmony default export */ var pets_header = (header_header);
;// CONCATENATED MODULE: ./src/pages/pets/pets.js




const ourPets = document.getElementById("pets-page");
ourPets.append(pets_header);

/***/ }),

/***/ 185:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template.content.firstChild;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(419));
/******/ }
]);