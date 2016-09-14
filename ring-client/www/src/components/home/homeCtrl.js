(function() {
	'use strict';

	angular
		.module('app.home', [])
		.controller('HomeCtrl',['$scope', '$state', homeCtrl]);

	function homeCtrl($scope, $state) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Login";

	}
})();