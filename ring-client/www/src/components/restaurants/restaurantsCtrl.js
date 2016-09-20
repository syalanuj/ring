(function() {
	'use strict';

	angular
		.module('app.restaurants', [])
		.controller('RestaurantsCtrl',['$scope', '$state','CONSTANTS','STRINGS', restaurantsCtrl]);

	function restaurantsCtrl($scope, $state, CONSTANTS, STRINGS) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Restaurants";
	}
})();