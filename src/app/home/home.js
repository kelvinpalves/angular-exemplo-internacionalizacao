(function () {
	'use strict';

	angular
		.module('app.home')
		.controller('Home', Home);

	Home.$inject = ['$translate'];

	/* @ngInject */
	function Home($translate) {
		var vm = this;
		vm.setLanguage = setLanguage;

		function setLanguage(lang) {
			$translate.use(lang);
		}
	}
})();