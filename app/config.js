/**
 * Configuration Service
 */

(function () {
	
	'use strict';

	/**
	 * App Configuration
	 * @param {object} $location Location service
	 */
	function AppConfiguration ($location) {

		this.ENVIRONMENT = $location.host() === 'mydomain.com' ? 'PRODUCTION' : 'DEVELOPMENT';
		this.API         = this.ENVIRONMENT === 'PRODUCTION' ? 'http://api.mydomain.com' : 'http://localhost:3000';

	}

	// Register tasks
	AppConfiguration.$inject = ['$location'];

	// Register module
	angular.module('app.config', [])
	.service('AppConfiguration', AppConfiguration);

})();
