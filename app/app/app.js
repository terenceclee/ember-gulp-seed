
//modules
app = angular.module('app', [
  'list',
  'user'
]);

angular.module('app').constant('settings',  {
	baseHost: 'http://localhost:9000',
	basePath: '/evtaj',
        imageServiceHost:'http://localhost:8080',
        imageServicePath:'/taj'
	});

/*
//Config
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
}]);
*/
