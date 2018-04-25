/*angular.module('show.controller',[])
	.controller('ShowController',function ($scope, shows) {
		$scope.fact = shows;
	});*/
	
	angular.module('show.controller', [])
	.controller('ShowController', function ($scope, shows) {
		
				$scope.shows = shows;
			});	
		
		// TODO Implement getTrivia and getDate
