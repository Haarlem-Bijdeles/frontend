/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	(function () {
	
	  if (!document.querySelector('.js-contact-form')) return;
	
	  var form = document.querySelector('.js-contact-form');
	  var commentArea = form.querySelector('.js-message');
	  var nameInput = form.querySelector('.js-name');
	  var messageElement = document.querySelector('#feedback');
	
	  nameInput.addEventListener('invalid', function (e) {
	    e.target.setCustomValidity('');
	    if (!e.target.validity.valid) {
	      e.target.setCustomValidity('Vul je naam in.');
	    }
	  });
	
	  commentArea.addEventListener('invalid', function (e) {
	    e.target.setCustomValidity('');
	    if (!e.target.validity.valid) {
	      e.target.setCustomValidity('Vul een bericht in.');
	    }
	  });
	
	  commentArea.addEventListener('input', function (e) {
	    e.target.setCustomValidity('');
	  });
	
	  // send form data with JavaScript
	  form.addEventListener('submit', function (event) {
	
	    var formData = new FormData();
	    formData.append('action', 'submit_ajax_form');
	    formData.append('formkey', form.querySelector('[name=formkey]').value);
	    formData.append('security', form.querySelector('[name=security]').value);
	    formData.append('name', form.querySelector('[name=name]').value);
	    formData.append('email', form.querySelector('[name=email]').value);
	    formData.append('message', form.querySelector('[name=message]').value);
	
	    var xhr = new XMLHttpRequest();
	
	    // save the comment in the database
	    xhr.open('POST', site.ajaxurl, true);
	
	    xhr.onload = function () {};
	
	    xhr.onerror = function (error) {
	      messageElement.className = 'message error';
	      messageElement.innerHTML = 'There was an error posting the comment. Please try again.';
	    };
	    xhr.onloadend = function (evt) {
	      if (xhr.readyState === 4) {
	        form.className = 'message success';
	        form.innerHTML = xhr.response;
	      }
	    };
	
	    xhr.send(formData);
	
	    // always call preventDefault at the end, see: http://molily.de/javascript-failure/
	    event.preventDefault();
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=contact.js.map
