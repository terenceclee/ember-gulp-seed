/**
 * App Setup
 */

(function () {

	'use strict';

	// Register app
	angular.module('app', [
		//'angulartics.google.analytics',
		'list',
		'user'
	])
	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

		// Set up html5 mode
		$locationProvider.html5Mode(true);

		// Set default location to the homepage
		$routeProvider
		.otherwise({
			redirectTo: '/'
		});

	}])
        .constant('settings',  {
	        baseHost: 'http://localhost:9000',
		basePath: '/evtaj',
		imageServiceHost:'http://localhost:8080',
		imageServicePath:'/taj'
        });

})();
