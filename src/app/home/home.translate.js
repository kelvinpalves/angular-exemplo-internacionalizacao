(function () {
	'use strict';

	angular
		.module('app.home')
		.config(translate);

	translate.$inject = ['$translateProvider'];

	function translate($translateProvider) {
		$translateProvider.useSanitizeValueStrategy('sanitize');

		$translateProvider.translations('en', {
			'title': 'This is the title',
			'test': 'This is a test',
			'en': 'English',
			'pt': 'Portuguese',
			'de': 'German'
		});

		$translateProvider.translations('pt', {
			'title': 'Este é o título',
			'test': 'Isto é um teste',
			'en': 'Inglês',
			'pt': 'Português',
			'de': 'Alemão'
		});

		$translateProvider.translations('de', {
			'title': 'Dies ist der Titel',
			'test': 'Dies ist ein Test',
			'en': 'Englisch',
			'pt': 'Portugiesisch',
			'de': 'Deutsch'
		});

  		$translateProvider.preferredLanguage('pt');
  	}


})();