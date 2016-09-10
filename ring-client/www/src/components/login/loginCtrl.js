(function() {
	'use strict';

	angular
		.module('app.login', [])
		.controller('LoginCtrl',['$scope', '$state', loginCtrl]);

	function loginCtrl($scope, $state) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Login";

	}
})();