$(function() {
	
// TOGGLE MENU
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".navigation").slideToggle(100);
		return false;
	});

// height 100%
function heightDetect() {
	$(".navigation").css("height", $(window).height());
	$(".all-inform").css("height", $(window).height());
};
heightDetect();

$(window).resize(function() {
	heightDetect();
});


// acc-cloud
var join = $('.acc-cloud'),
		joinLink = $('.account'),
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
		if ($(event.target).closest(".acc-cloud").length) return;
						join.fadeOut(100);
						indexClick = 0;
		event.stopPropagation();
});


});
