(function() {
	'use strict';

	angular
		.module('app.preOrderMenu', [])
		.controller('PreOrderMenuCtrl',['$scope', '$state','CONSTANTS','STRINGS', preOrderMenuCtrl]);

	function preOrderMenuCtrl($scope, $state, CONSTANTS, STRINGS) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Pre Order Menu";
	}
})();