(function() {
	'use strict';

	angular
		.module('app.dealDetails', [])
		.controller('DealDetailsCtrl',['$scope', '$state', homeCtrl]);

	function homeCtrl($scope, $state) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Login";

	}
})();