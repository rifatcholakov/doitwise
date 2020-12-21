jQuery(document).ready(function ($) {
	"use strict";

	/*
	|--------------------------------------------------------------------------
	| Developer mode
	|--------------------------------------------------------------------------
	|
	| Set to true - it will allow printing in the console. Alsways check for this
	| variables when running tests so you dont forget about certain console.logs.
	| Id needed for development testing this variable should be used.
	|
	*/
	const devMode = function () {
		return true;
	};

	// Disable console.log for production site.
	if (!devMode()) {
		console.log = function () {};
	}

	// Mobile menu
	const navigation = document.querySelector(".site-nav");
	const buttonMobile = document.querySelector(".nav-mobile");
	const buttonMobileIcon = document.querySelector(".nav-mobile > i");

	buttonMobile.addEventListener("click", () => {
		navigation.classList.toggle("open");
		buttonMobileIcon.classList.toggle("fa-bars");
		buttonMobileIcon.classList.toggle("fa-times");
	});
});
