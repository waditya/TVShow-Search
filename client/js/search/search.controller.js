angular.module('search.controller', ['ngCookies'])
	.directive('ans', function (){
		return{
			restrict: 'EA',
			templateUrl: 'views/answer.html'
		}
	})
	.controller('SearchController', function ($scope, searchResource, $cookies) {
		var searchedKeywords = $cookies.get('showSearch');
		$scope.showHistory = false;
		if(searchedKeywords != null)
		{
			$scope.searchKeyWords = searchedKeywords.split(":");
		}
		$scope.getShowHistory = function(){
			if(!$scope.showHistory)
				$scope.showHistory = true;
			else
				$scope.showHistory = false;
		}
		$scope.populate_text_box=function(words){
			$scope.name = words;
		}
		$scope.getShow = function (words) {
			 
			var flag=1;
			var expireDate = new Date();
			expireDate.setDate(expireDate.getDate()+1);
			var cookie_name = 'showSearch';
			var cookie_value;
			if(words!=null)
				$scope.name=words;
			if($cookies.get(cookie_name)==undefined)
			{
				cookie_value=""+$scope.name;
			}
			else
			{
				cookie_array = $cookies.get(cookie_name).split(":");
				for(var i=0;i<cookie_array.length;i++)
				{
					if(cookie_array[i] == $scope.name)
					{
						flag = 0;
					}
				}
				if(flag==1)
				{
					cookie_value =""+$cookies.get(cookie_name)+":"+$scope.name;
				}
				if(flag==0)
				{
					cookie_value =""+$cookies.get(cookie_name);
				}
			}
			$cookies.put(cookie_name,cookie_value,{expires:expireDate});
			searchResource.query({
				name: $scope.name
				}, function (response) {
					$scope.search = response;
				});
			};
		// TODO Implement getTrivia and getDate
});
