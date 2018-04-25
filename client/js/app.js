angular.module('app', 
	['ngRoute', 'ngResource', 'search.controller', 'schedule.controller', 'favorite.controller', 'search.service', 'show.controller', 'show.service','ui.bootstrap'])
	.filter('trustHTML', function($sce)
	{
		return function(text)
		{
			return $sce.trustAsHtml(text)
		}
	})
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/search.html',
					controller: 'SearchController'
				})
				.when('/schedule', {
					templateUrl: 'views/schedule.html',
					controller: 'ScheduleController'
				})
				.when('/shows/:id', {
					templateUrl: 'views/show.html',
					controller: 'ShowController',
					resolve:{
						shows: function ($route, ShowService){
							return ShowService.get({id: $route.current.params.id});
						}
					}
				})
				.when('/favorite', {
					templateUrl: 'views/favorite.html',
					controller: 'FavoriteController'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);