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
		var red = getRandomInt(244, 221);
		var green = getRandomInt(153,88);
		var blue = getRandomInt(168,78);
		var randomColor = buildColor(red, green, blue);
		var styles = [];

		styles.push('background-color: ' + randomColor + '');
		// styles.push('z-index:' + $('.box').length);
		// console.log(e.target.offsetWidth);
		if (e.target.offsetWidth <= 600) {
			console.log("refreshing page");
			$(".box").empty();
		}
		else {
			thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
		}
	});
});

$(function() {
	$(document).on('click touchstart', '.box-one', function(e) {
		var thisBox = $(e.target);
		var red = 240;
		var green = getRandomInt(187,150);
		var blue = getRandomInt(198,178);
		var randomColor = buildColor(red, green, blue)

		var green2 = getRandomInt(150,118);
		var randomColor2 = buildColor(red, green2, blue);
		var styles = [];
		// styles.push('outline: ' + randomColor + '7px solid');
		styles.push('background-color: ' + randomColor2 + '');
		// styles.push('z-index:' + $('.box').length);

		thisBox.append('<div style="' + styles.join('; ') + '" class="box-one"></div>');
	});
});

