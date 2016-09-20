(function() {
	'use strict';

	angular
		.module('app.strings', [])
		.constant("STRINGS", {
        "MAKE_YOUR_DEAL_TEXT": "Make Your Deal",
        "GROUP_BOOKING_TEXT": "Group Booking",
        "PARTY_CORPORATE_BOOKING_TEXT": "Party/Corporate Booking",
        "EXECUTIVE_CALL_TEXT":"Our Executive will call you shortly",
        "QUOTE_SENT_TEXT": "Quote has been sent"
    })
})();