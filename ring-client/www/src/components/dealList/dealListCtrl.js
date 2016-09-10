(function() {
	'use strict';

	angular
		.module('app.dealList', [])
		.controller('DealListCtrl',['$scope', '$state', homeCtrl]);

	function homeCtrl($scope, $state) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Login";

	}
})();