var documentHeight = $(document).height();
var windowHeight = $(window).height();
var $elements = $('.goat > *');
var audio= new Audio();

$(document).ready(function(){
	audio.src = "screamsheep.mp3";
	$(".goat").on({
		'mouseenter': function() {
			audio.play();
		}
	})
});

$(window).on('scroll', function() {

  var scrollTop = $(this).scrollTop();
  var scaleFactor = ((scrollTop / documentHeight * 4) % 3.5) + 0.2;

  console.log('scaleFactor', scaleFactor);

  $elements.css({ transform: 'scale(' + scaleFactor + ')' });
  if ( scrollTop + windowHeight >= documentHeight ) {
    $(window).scrollTop(0);
  }
});


