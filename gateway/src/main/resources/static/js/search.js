var join = $('.search-cloud'),
		joinLink = $('.advanced-search'),
		indexClick = 0;

$ ( function() {
		joinLink.click( function(event) {
				if (indexClick === 0) {
						join.fadeIn(100);
						indexClick = 1;
				}
				else {
						join.fadeOut(100);
						indexClick = 0;
				}
				event.stopPropagation();
		});
});
$(document).click(function(event) {
		if ($(event.target).closest(".search-cloud").length) return;
						join.fadeOut(100);
						indexClick = 0;
		event.stopPropagation();
});