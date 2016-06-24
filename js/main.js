$(document).on('ready', function() {
	var offset = $('.nav-wrapper').outerHeight(true);
	console.log(offset);
	//let add a margin top to the body
	$('body').css('margin-top', offset);

	$('.nav-main a').on('click', function(event){
		console.log(event);
		event.preventDefault();
		//scroll page associate with this
		var pageToscrollTo = $(this).attr('href');
		console.log(pageToscrollTo);
		//using page to scroll in a .scroll function
		$(window).scrollTo(pageToscrollTo, 1000, {offset: -offset});
	});
	//addig a click event to the logo-text
	$('.js-nav').on('click', function() {
		$('.nav-main').slideToggle();
	});
	$('.main-logo').on('mouseenter', function() {
		$('.logo-text').fadeIn();
	});
	$('.main-logo').on('mouseleave', function() {
		$('.logo-text').fadeOut();
	});
});//end doc .ready