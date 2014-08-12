/**
 * App Setup
 */

(function () {

	'use strict';

	/**
	 * App Controller
	 * @param  {object} $rootScope The app's root scope
	 * @param  {object} $scope     The controller scope
	 */
	function AppController ($rootScope, $scope) {



	}

	// Inject dependencies
	AppController.$inject = ['$rootScope', '$scope'];

	// Register app
	angular.module('app', [
		'angulartics.google.analytics',
		'app.module1',
		'app.module2',
		'app.module3'
	])
	.controller('AppController', AppController)
	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

		// Set up html5 mode
		$locationProvider.html5Mode(true);

		// Set default location to the homepage
		$routeProvider
		.otherwise({
			redirectTo: '/'
		});

	}]);

})();
