$(function(){
	new WOW().init();
	$('.btn--transp').each(function(){
		$(this).addClass('initialize');
		$(this).wrapInner($('<span/>'));
	});
	$('.fancybox').fancybox();
	$('input[type="tel"], input[name="phone"]').inputmask('+7(999)999-99-99');
	$('#headerSlider').swiper({
		pagination: $('#headerSwiperPagination')[0],
		paginationClickable: true,
		loop: true,
		autoplay: 5000
	});

	$('#catalogSlider').swiper({
		pagination: '.swiper-pagination',
		loop: true,
		autoplay: 10000,
		paginationClickable: true,
		spaceBetween: 40,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

	$('.parallax-window').css('background-image','none');
	$('.parallax-window').parallax({imageSrc:'img/header-bg.jpg'});


	//other
	headerSliderWidth();
	$(window).on({
		load:function(){
			headerSliderWidth();	
			headerHeight();	
		},
		resize:function(){
			headerSliderWidth();
			headerHeight();		
		}
	})
});

function headerSliderWidth(){
	var width = $('.header-center').outerWidth();
	$('.header-center .swiper-container').width(width);
}

function headerHeight(){
	var offset = 150;
	var maxHeight = 530;
	while($(window).height() - offset > $('.main-header').outerHeight()){
		$('.header-center .dt').height($('.header-center .dt').height()+1+'px');
		if($('.header-center .dt').outerHeight() >= maxHeight){
			break;
		}
	}
}

