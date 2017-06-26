//SERVICES

weatherApp.service('cityService', function() {
	this.city = 'Charlotte';
});

weatherApp.service('stateService', function() {
	this.state = 'NC';
});

weatherApp.service('weatherService', [
	'$resource',
	function($resource) {
		this.getWeather = function(state, city) {
			let weatherAPI = $resource(
				`http://api.wunderground.com/api/466206ea11323cbf/forecast10day/q/${state}/${city.replace(' ', '_')}.json`,
				{
					callback: 'JSON_CALLBACK',
				},
				{ get: { method: 'JSONP' } }
			);

			return weatherAPI.get();
		};
	},
]);
