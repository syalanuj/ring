(function() {
	'use strict';

	angular
		.module('app.voucher', [])
		.controller('VoucherCtrl',['$scope', '$state','CONSTANTS','STRINGS', voucherCtrl]);

	function voucherCtrl($scope, $state, CONSTANTS, STRINGS) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Voucher";
	}
})();