/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildPage)
/* harmony export */ });
function buildPage(){
    const pageDiv = document.createElement('div')
    pageDiv.appendChild(buildTopBar())
    pageDiv.appendChild(buildNav())
    pageDiv.appendChild(buildContent())
    pageDiv.appendChild(buildFooter())

    return pageDiv
}

function buildTopBar(){
    const topBar = document.createElement('div')

    const topContainer = document.createElement('div')
    topBar.appendChild(topContainer)

    const phoneNumber = document.createElement('span')
    phoneNumber.textContent = "Phone Number"
    topContainer.appendChild(phoneNumber)

    const emailContainer = document.createElement('div')
    topContainer.appendChild(emailContainer)

    const eMailIcon = document.createElement('div')
    eMailIcon.textContent = "Icon"
    emailContainer.appendChild(eMailIcon)

    const eMailAddress = document.createElement('span')
    eMailAddress.textContent = "E-Mail"
    emailContainer.appendChild(eMailAddress)

    const socialMediaContainer = document.createElement('div')
    topContainer.appendChild(socialMediaContainer)

    const socialMedia = document.createElement('div')
    socialMedia.textContent = "Icon"
    socialMediaContainer.appendChild(socialMedia)

    return topBar
}

function buildNav(){
    const navBar = document.createElement('div')

    const logo = document.createElement('div')
    logo.textContent = "Logo"
    navBar.appendChild(logo)

    const tabContainer = document.createElement('div')
    navBar.appendChild(tabContainer)

    const home = document.createElement('span')
    home.textContent = "Home"
    tabContainer.appendChild(home)

    const menu = document.createElement('span')
    menu.textContent = "Menu"
    tabContainer.appendChild(menu)

    const contact = document.createElement('span')
    contact.textContent = "Contact"
    tabContainer.appendChild(contact)

    return navBar
}

function buildContent(){
    const content = document.createElement('div')

    const cursiveTitle = document.createElement('span')
    cursiveTitle.textContent = "Cursive Title"
    content.appendChild(cursiveTitle)

    const title = document.createElement('span')
    title.textContent = "Title"
    content.appendChild(title)

    const separator = document.createElement('hr')
    content.appendChild(separator)

    const description = document.createElement('p')
    description.textContent = "Resturant Description"
    content.appendChild(description)

    const menuLink = document.createElement('button')
    menuLink.textContent = "Menu"
    content.appendChild(menuLink)

    return content
}

function buildFooter(){
    const footer = document.createElement('div')

    const footerContainer = document.createElement('div')
    footer.appendChild(footerContainer)

    const copyright = document.createElement('span')
    copyright.textContent = "Copyright"
    footerContainer.appendChild(copyright)

    const socialMediaContainer = document.createElement('div')
    footerContainer.appendChild(socialMediaContainer)

    const socialMedia = document.createElement('div')
    socialMedia.textContent = "Icon"
    socialMediaContainer.appendChild(socialMedia)

    return footer
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");


document.body.appendChild((0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
console.log("Webpack test 1")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O1VDN0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLDBCQUEwQix3REFBUztBQUNuQyw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRQYWdlKCl7XG4gICAgY29uc3QgcGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcGFnZURpdi5hcHBlbmRDaGlsZChidWlsZFRvcEJhcigpKVxuICAgIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoYnVpbGROYXYoKSlcbiAgICBwYWdlRGl2LmFwcGVuZENoaWxkKGJ1aWxkQ29udGVudCgpKVxuICAgIHBhZ2VEaXYuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSlcblxuICAgIHJldHVybiBwYWdlRGl2XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVG9wQmFyKCl7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcilcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlclwiXG4gICAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKVxuXG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbENvbnRhaW5lcilcblxuICAgIGNvbnN0IGVNYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZU1haWxJY29uLnRleHRDb250ZW50ID0gXCJJY29uXCJcbiAgICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlTWFpbEljb24pXG5cbiAgICBjb25zdCBlTWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICBlTWFpbEFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkUtTWFpbFwiXG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZU1haWxBZGRyZXNzKVxuXG4gICAgY29uc3Qgc29jaWFsTWVkaWFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUNvbnRhaW5lcilcblxuICAgIGNvbnN0IHNvY2lhbE1lZGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYS50ZXh0Q29udGVudCA9IFwiSWNvblwiXG4gICAgc29jaWFsTWVkaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWEpXG5cbiAgICByZXR1cm4gdG9wQmFyXG59XG5cbmZ1bmN0aW9uIGJ1aWxkTmF2KCl7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxvZ28udGV4dENvbnRlbnQgPSBcIkxvZ29cIlxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodGFiQ29udGFpbmVyKVxuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51KVxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KVxuXG4gICAgcmV0dXJuIG5hdkJhclxufVxuXG5mdW5jdGlvbiBidWlsZENvbnRlbnQoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGN1cnNpdmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGN1cnNpdmVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ3Vyc2l2ZSBUaXRsZVwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjdXJzaXZlVGl0bGUpXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUaXRsZVwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcblxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlcGFyYXRvcilcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIlJlc3R1cmFudCBEZXNjcmlwdGlvblwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtZW51TGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51TGluaylcblxuICAgIHJldHVybiBjb250ZW50XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcilcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0XCJcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KVxuXG4gICAgY29uc3Qgc29jaWFsTWVkaWFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzb2NpYWxNZWRpYUNvbnRhaW5lcilcblxuICAgIGNvbnN0IHNvY2lhbE1lZGlhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzb2NpYWxNZWRpYS50ZXh0Q29udGVudCA9IFwiSWNvblwiXG4gICAgc29jaWFsTWVkaWFDb250YWluZXIuYXBwZW5kQ2hpbGQoc29jaWFsTWVkaWEpXG5cbiAgICByZXR1cm4gZm9vdGVyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYnVpbGRQYWdlIGZyb20gJy4vcGFnZUxvYWQuanMnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1aWxkUGFnZSgpKVxuY29uc29sZS5sb2coXCJXZWJwYWNrIHRlc3QgMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==