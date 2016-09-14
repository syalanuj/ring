(function() {
	'use strict';

	angular
		.module('app.request', [])
		.controller('RequestCtrl',['$scope', '$state', loginCtrl]);

	function loginCtrl($scope, $state) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Request";

	}
})();