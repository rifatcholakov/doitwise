jQuery(document).ready(function ($) {
	("use strict");

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

	// -----------------
	// Mobile menu
	// -----------------
	const navigation = document.querySelector(".site-nav");
	const buttonMobile = document.querySelector(".nav-mobile");
	const buttonMobileIcon = document.querySelector(".nav-mobile > i");

	buttonMobile.addEventListener("click", () => {
		navigation.classList.toggle("open");
		buttonMobileIcon.classList.toggle("fa-bars");
		buttonMobileIcon.classList.toggle("fa-times");
		document.querySelector("body").classList.toggle("overflow");
	});
	// -----------------

	// -----------------
	// Tab menu
	// -----------------
	const tabMenuItems = [...document.querySelectorAll(".tab-menu-item > a")];

	tabMenuItems.map((item) => {
		item.addEventListener("click", (e) => {
			let currentlyAcctive;

			tabMenuItems.map((item) => {
				if (item.classList.contains("item-active")) {
					currentlyAcctive = item;
				}
			});
			currentlyAcctive.classList.remove("item-active");

			const pretendent = e.target;
			pretendent.classList.add("item-active");

			// Start to change the content
			const tabContent = pretendent;
			console.log(e.target.id);
		});
	});
	// -----------------
});
