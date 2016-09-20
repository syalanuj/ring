(function() {
	'use strict';

	angular
		.module('app.loaderSent', [])
		.controller('LoaderSentCtrl',['$scope', '$state','CONSTANTS','STRINGS', loaderSentCtrl]);

	function loaderSentCtrl($scope, $state, CONSTANTS, STRINGS) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.loaderType = parseInt($state.params.type);
		vm.LoaderTypes = CONSTANTS.LOADER_TYPE;
		vm.title = "";

		switch(vm.loaderType){
			case CONSTANTS.LOADER_TYPE.EXECUTIVE_CALL:
				vm.title = STRINGS.EXECUTIVE_CALL_TEXT;
				break;
			case CONSTANTS.LOADER_TYPE.QUOTE_SENT:
				vm.title = STRINGS.QUOTE_SENT_TEXT;
				break;
			default:
				vm.title = STRINGS.EXECUTIVE_CALL_TEXT;
		}
	}
})();