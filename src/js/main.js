$(function(){
	$('.fancybox').fancybox();
	$('input[type="tel"], input[name="phone"]').inputmask('+7(999)999-99-99');
	$('.swiper-container').swiper({
		pagination: $('#headerSwiperPagination')[0],
		paginationClickable: true,
		loop: true,
		autoplay: 5000
	});
	$('.parallax-window').css('background-image','none');
	$('.parallax-window').parallax({imageSrc:'/img/header-bg.jpg'});


	//other
	headerSliderWidth();
	$(window).on({
		load:function(){
			headerSliderWidth();	
			// headerHeight();	
		},
		resize:function(){
			headerSliderWidth();
			// headerHeight();		
		}
	})
});

function headerSliderWidth(){
	var width = $('.header-center').outerWidth();
	$('.header-center .swiper-container').width(width);
}

// function headerHeight(){
// 	var offset = 100;
// 	while($(window).height() - offset > $('.main-header').outerHeight()){
// 		$('.header-center .dt').height($('.header-center .dt').height()+1+'px');
// 	}
// }