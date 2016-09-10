(function() {
	'use strict';

	angular
		.module('app.loaderSent', [])
		.controller('LoaderSentCtrl',['$scope', '$state', homeCtrl]);

	function homeCtrl($scope, $state) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Login";

	}
})();