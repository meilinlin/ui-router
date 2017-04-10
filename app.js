(function(angular){
	var myApp = angular.module('myApp',['ui.router']);
	myApp.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);
	myApp.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/index/index.one');
		$stateProvider.state('fruit',{
			url:'/fruit',
			templateUrl:'fruit/fruit.html'
		})
		.state('vegetable',{
			url:'/vegetable',
			templateUrl:'vegetable/vegetable.html'
		})
		.state('index',{
			url:'/index',
			templateUrl:'index/indexWhole.html'
		})
		.state('index.one',{
			url:'/index.one',
			templateUrl:'index/one.html'
		})
		.state('index.two',{
			url:'/index.two',
			templateUrl:'index/two.html'
		})
		.state('index.three',{
			url:'/index.three',
			templateUrl:'index/three.html'
		})
		.state('fruit.orange',{
			url:'/fruit.orange',
			templateUrl:'fruit/orange.html'
		})
		.state('fruit.apple',{
			url:'/fruit.apple',
			templateUrl:'fruit/apple.html'
		})
		.state('fruit.banana',{
			url:'/fruit.banana',
			templateUrl:'fruit/banana.html'
		})
		.state('vegetable.tomato',{
			url:'/vegetable.tomato',
			templateUrl:'vegetable/tomato.html'
		})
		.state('vegetable.potato',{
			url:'/vegetable.potato',
			templateUrl:'vegetable/potato.html'
		})
		.state('vegetable.carrot',{
			url:'/vegetable.carrot',
			templateUrl:'vegetable/carrot.html'
		});
	});
	myApp.controller('NavController',[
		'$scope',
		'$location',
		function($scope,$location){
			$scope.$location = $location;
			console.log($location.path())
			$scope.$watch('$location.path()',function(now){
				if(now.startsWith('/index')){
					$scope.type = 'index';
					if(now == '/index/index.one'){
						$scope.smallType = 'one';
					}else if(now == '/index/index.two'){
						$scope.smallType = 'two';
					}else if(now == '/index/index.three'){
						$scope.smallType = 'three';
					}
				}else if(now.startsWith('/fruit')){
					$scope.type = 'fruit';
					if(now == '/fruit/fruit.orange'){
						$scope.smallType = 'orange';
					}else if(now == '/fruit/fruit.apple'){
						$scope.smallType = 'apple';
					}else if(now == '/fruit/fruit.banana'){
						$scope.smallType = 'banana';
					}
				}else if(now.startsWith('/vegetable')){
					$scope.type = 'vegetable';
					if(now == '/vegetable/vegetable.tomato'){
						$scope.smallType = 'tomato';
					}else if(now == '/vegetable/vegetable.potato'){
						$scope.smallType = 'potato';
					}else if(now == '/vegetable/vegetable.carrot'){
						$scope.smallType = 'carrot';
					}
				}
			})
		}
	]);
})(angular);
