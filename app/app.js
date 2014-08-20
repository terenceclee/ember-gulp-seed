/**
 * App Setup
 */


	'use strict';

	// Register app
	var app = angular.module('app', [
		'ngRoute',
		'list',
		'user'
	])
	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		// Set up html5 mode
		$locationProvider.html5Mode(true);

		// Set default location to the homepage
		$routeProvider
		.when('/',{
			templateUrl:'/app/partials/home.html'
		})
		.when('/question/:id',{
			templateUrl:'/app/partials/list.html',
			controller:'SliderCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

	}])
        .constant('settings',  {
		apiServiceHost:'http://localhost:8080',
		apiServicePath:'/taj'
        });



