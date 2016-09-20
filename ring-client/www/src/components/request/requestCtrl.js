(function() {
	'use strict';

	angular
		.module('app.request', [])
		.controller('RequestCtrl',['$scope', '$state','CONSTANTS','STRINGS', requestCtrl]);

	function requestCtrl($scope, $state, CONSTANTS, STRINGS) {
		/* jshint validthis: true */
		var vm = $scope;
		vm.title = "Request";
		vm.requestType = parseInt($state.params.type);
		vm.loaderType = CONSTANTS.LOADER_TYPE.EXECUTIVE_CALL;
		vm.RequestTypes = CONSTANTS.REQUEST_TYPE;
		vm.request = {
			requestType: vm.requestType,
			guestCount: 1,
			location: undefined,
			tags:[],
			requestDateTime: undefined,
			dealPriceRange: {
				min: 0,
				max: 0,
			},
			dealDiscountRange: {
				min: 0,
				max: 0,
			},
			groupDiscountRangeInPercentage: 0,
			partyCorporateType: CONSTANTS.PARTY_CORPORATE_TYPE.INDIVIDUAL,
			partyCorporateDate: undefined,
			partyCorporateTime: {
				from: undefined,
				to: undefined
			},
			partyCorporateBookingType: CONSTANTS.PARTY_CORPORATE_BOOKING_TYPE.PER_HEAD
		}

		switch(vm.requestType){
			case CONSTANTS.REQUEST_TYPE.MAKE_YOUR_DEAL:
				vm.title = STRINGS.MAKE_YOUR_DEAL_TEXT;
				vm.loaderType = CONSTANTS.LOADER_TYPE.QUOTE_SENT;
				break;
			case CONSTANTS.REQUEST_TYPE.GROUP_BOOKING:
				vm.title = STRINGS.GROUP_BOOKING_TEXT;
				vm.loaderType = CONSTANTS.LOADER_TYPE.EXECUTIVE_CALL
				break;
			case CONSTANTS.REQUEST_TYPE.PARTY_CORPORATE_BOOKING:
				vm.title = STRINGS.PARTY_CORPORATE_BOOKING_TEXT;
				vm.loaderType = CONSTANTS.LOADER_TYPE.EXECUTIVE_CALL
				break;
			default:
				vm.title = STRINGS.MAKE_YOUR_DEAL_TEXT;
		}

		//Methods
		vm.requestSent = function(){

		}


	}
})();