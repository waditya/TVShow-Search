angular.module('show.service', [])
	.factory('ShowService', function ($resource) {
		return $resource('/api/shows/:id');
	});