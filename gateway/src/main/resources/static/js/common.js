$(function() {
	
// TOGGLE MENU
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".navigation").slideToggle(100);
		return false;
	});

// height 100%
function heightDetect() {
	$("#crm-calendar").css("height", $(window).height());
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


// TIMELINE
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

var items = document.querySelectorAll(".timeline-wrap li");
 
// code for the isElementInViewport function
 
function callbackFunc() {
	for (var i = 0; i < items.length; i++) {
		if (isElementInViewport(items[i])) {
			items[i].classList.add("in-view");
		}
	}
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

});
