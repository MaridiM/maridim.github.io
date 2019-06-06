$(function() {
	$(".owl-header").owlCarousel({
		items: 1,  // Количество фотографий отображаемой  за раз
		loop: true,	// Бесконечное прокручивание
		autoplay: true, // Автопрокрутка
		dots: false, //отключение дотс кнопок
		rows: window,
		autoplayTimeout: 10000 // Скорость прокручивания 
	});
	$(".owl-gallery").owlCarousel({
		items: 3,  // Количество фотографий отображаемой  за раз
		loop: true,	// Бесконечное прокручивание
		autoplay: true, // Автопрокрутка
		dots: false, //отключение дотс кнопок
		autoplayTimeout: 5000, // Скорость прокручивания 
		responsiveClass: true, 
		responsive: {
			0: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});	
	$(".owl-comment").owlCarousel({
		items: 1,  // Количество фотографий отображаемой  за раз
		loop: true,	// Бесконечное прокручивание
		autoplay: true, // Автопрокрутка
		dots: false, //отключение дотс кнопок
		autoplayTimeout: 30000, // Скорость прокручивания 
	});
	
	$('.toggle').click(function () {
		$('.toggle').toggleClass('active');
	});
});
