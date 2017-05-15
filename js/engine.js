$(document).ready(function(){

	// карусель
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:1,
		navText: ["", ""]
	});


		// прячем кнопку #back-top
		$("#to-top").hide();
	
		$(window).scroll(function (){
			if ($(this).scrollTop() > 200){
				$("#to-top").fadeIn();
			} else{
				$("#to-top").fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$("#to-top").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});


});

// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE
