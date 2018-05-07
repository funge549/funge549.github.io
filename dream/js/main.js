function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

function colorScheme(){
	var red = getRandomInt(244,196);
	var green = getRandomInt(187,150);
	var blue = getRandomInt(198,178);
	var color = buildColor(red, green, blue)
}

function colorScheme2(){
	var red2 = getRandomInt(49,80);
	var green2 = getRandomInt(9,65);
	var blue2 = getRandomInt(84,94);
	var color2 = buildColor(red2, green2, blue)
}

var colorPicker = [ colorScheme() , colorScheme2() , ];

$(function() {
	$(document).on('click touchstart', '.box', function(e) {
		var thisBox = $(e.target);
		var randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
		var styles = [];

		styles.push('background-color: ' + randomColor + '');
		// styles.push('z-index:' + $('.box').length);

		thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
	});

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

