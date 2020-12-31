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
	let tabMenuNames = document.querySelectorAll("[data-tabmenu-name]");
	tabMenuNames = [...tabMenuNames].map(
		(tabMenu) => tabMenu.dataset.tabmenuName
	);

	tabMenuNames.map((tabMenuName) => manageTabMenu(tabMenuName));

	function manageTabMenu(menuName) {
		const tabMenuItems = [
			...document.querySelectorAll(
				`[data-tabmenu-name="${menuName}"] .tab-menu-item > a`
			),
		];

		const tabPanels = [
			...document.querySelectorAll(
				`[data-tabmenu-name="${menuName}"] .tab-panel`
			),
		];

		function setActiveMenuItem(e) {
			for (let i = 0; i < tabMenuItems.length; i++) {
				// remove the class from all items and delete this if
				// if (tabMenuItems[i].classList.contains("item-active")) {
				// 	tabMenuItems[i].classList.toggle("item-active");
				// 	tabPanels[i].classList.toggle("panel-active");
				// }

				tabMenuItems[i].classList.remove("item-active");
				tabPanels[i].classList.remove("panel-active");

				if (e.target === tabMenuItems[i]) {
					tabMenuItems[i].classList.toggle("item-active");
					tabPanels[i].classList.toggle("panel-active");
				}
			}
		}

		for (let i = 0; i < tabMenuItems.length; i++) {
			tabMenuItems[i].addEventListener("click", setActiveMenuItem);
		}
	}
	// -----------------
});
