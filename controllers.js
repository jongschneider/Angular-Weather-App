// CONTROLLERS
weatherApp.controller('homeController', [
	'$scope',
	'$location',
	'cityService',
	'stateService',
	function($scope, $location, cityService, stateService) {
		$scope.city = cityService.city;

		$scope.$watch('city', function() {
			cityService.city = $scope.city;
		});

		$scope.state = stateService.state;

		$scope.$watch('state', function() {
			stateService.state = $scope.state;
		});

		$scope.submit = function() {
			$location.path('/forecast');
		};
	},
]);

weatherApp.controller('forecastController', [
	'$scope',
	'$routeParams',
	'cityService',
	'stateService',
	'weatherService',
	function($scope, $routeParams, cityService, stateService, weatherService) {
		$scope.city = cityService.city;
		$scope.state = stateService.state;
		$scope.days = $routeParams.days || 2;

		$scope.weatherResult = weatherService.getWeather($scope.state, $scope.city);
	},
]);
