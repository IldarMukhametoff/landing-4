$(document).ready(function() {
	$('.tabs-triggers__item').click(function(e){
		e.preventDefault();
		$('.tabs-triggers__item').removeClass('active');
		$('.tabs-content__item').removeClass('active');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('active')
	});
});