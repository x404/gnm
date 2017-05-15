$(document).ready(function(){

	// карусель
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:3,
		startPosition : 2,
		stagePadding : 250,
		navText: ["", ""],
		onInitialized: function (event) {
			refreshFirstLastVisible(event);
		},
		onChanged: function (event) {
			refreshFirstLastVisible(event);
		},
		responsive:{
			0:{
				items:1,
				stagePadding: 20
			},
			900:{
				items:2,
				stagePadding: 0
			},
			992:{
				items:1
			},
			1250:{
				items:2
			},
			1550:{
				items:3
			}
		}
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
