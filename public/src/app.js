angular.module('DemoApp', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/contacts', {
			controller: 'listController',
			templateUrl: 'views/list.html'
		});
		$locationProvider.html5Mode(true);
	}); 