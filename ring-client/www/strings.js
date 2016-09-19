(function() {
	'use strict';

	angular
		.module('app.strings', [])
		.constant("STRINGS", {
        "MAKE_YOUR_DEAL_TEXT": "Make Your Deal",
        "GROUP_BOOKING_TEXT": "Group Booking",
        "PARTY_CORPORATE_BOOKING": "Party/Corporate Booking",
        "REQUES_TYPE" : {
			MAKE_YOUR_DEAL: 0,
			GROUP_BOOKING: 1,
			PARTY_CORPORATE_BOOKING: 2
		}
    })
})();