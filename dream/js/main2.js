function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

$(".box").mousemove(function(e){
    if (e.pageX > 0 && e.pageY > 0 && e.pageX < 2000 && e.pageY < 400){
        $(".box").css("cursor", "url(./img/cursorA.png), auto");
        console.log("cursor 1 working");
    } 
    else if (e.pageX > 0 && e.pageY > 400 && e.pageX < 2000 && e.pageY < 2000){
    	$(".box").css("cursor", "url(./img/cursor.png), auto");
        console.log("cursor 2 working");
    }   
    else{
        $(".box").css("cursor", "url(./img/cursorB.png), auto");
        console.log("cursor 3 working");
    }
});


$(function() {
	$(document).on('click touchstart', '.box', function(e) {
		var thisBox = $(e.target);
		// var red = getRandomInt(244, 221);
		// var green = getRandomInt(153,88);
		// var blue = getRandomInt(168,78);
		// var randomColor = buildColor(red, green, blue);

		var red = getRandomInt(244,196);
		var green = getRandomInt(187,150);
		var blue = getRandomInt(198,178);
		var color = buildColor(red, green, blue);

		var red2 = getRandomInt(49,80);
		var green2 = getRandomInt(9,65);
		var blue2 = getRandomInt(84,94);
		var color2 = buildColor(red2, green2, blue2);

		var red3 = getRandomInt(0,11);
		var green3 = getRandomInt(96,232);
		var blue3 = getRandomInt(173,232);
		var color3 = buildColor(red3, green3, blue3);

		var colorPicker = [ color, color2, color3 ];
		var randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
		var randomWidth = getRandomInt(1,20);
		var styles = [];
		var boxWidth = getRandomInt(200, 700);

		// styles.push('outline: ' + 'randomWidth solid'+ "#FFFFFF" +'');
		styles.push('outline: ' + '2px solid'+ "#FFFFFF" +'');
		styles.push('background-color: ' + randomColor + '');
		// styles.push('z-index:' + $('.box').length);
		if (e.target.offsetWidth <= boxWidth) {
			console.log(e.target.offsetWidth);
			console.log("refreshing page");
			$(".box").empty();
		}
		else {
			thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
		}
	});
});


