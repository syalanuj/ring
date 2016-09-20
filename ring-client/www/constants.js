(function() {
	'use strict';

	angular
		.module('app.constants', [])
		.constant("CONSTANTS", {
        "CLICK": "click",
        // ENUMS
        "REQUEST_TYPE" : { 
			MAKE_YOUR_DEAL: 0,
			GROUP_BOOKING: 1,
			PARTY_CORPORATE_BOOKING: 2
		},
		"PARTY_CORPORATE_TYPE" : { 
			INDIVIDUAL: 0,
			CORPORATE: 1
		},
		"PARTY_CORPORATE_BOOKING_TYPE" : { 
			PER_HEAD: 0,
			A_LA_CARTE: 1
		},
		"LOADER_TYPE": {
			EXECUTIVE_CALL: 0,
			QUOTE_SENT: 1
		}
    })
})();