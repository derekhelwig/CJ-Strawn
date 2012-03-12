$(document).ready(function() {  
	var propertyCarousel = $('#propertyCarousel').jqFancyTransitions({ width: 620, height: 310, position: 'top', direction: 'left', navigation: false, links: false, titleOpacity: 0 });
	
	var mcarousel = $('#recommendations').bxSlider({
			auto: true,
		    autoHover: true,
		    infiniteLoop: true,
		    pause: 5000,
		    prevText: '<',
		    nextText: '>',
		    wrapperClass: 'quotesAboutCJ'
		    
		  });
});