function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

$(function() {
	$(document).on('click', '.box', function(e) {
		var thisBox = $(e.target);
		var red = 240;
		var green = getRandomInt(187,150);
		var blue = getRandomInt(198,178);
		var randomColor = buildColor(red, green, blue)
		var styles = [];

		styles.push('background-color: ' + randomColor + '');
		// styles.push('z-index:' + $('.box').length);

		thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
	});
});

$(function() {
	$(document).on('click', '.box-one', function(e) {
		var thisBox = $(e.target);
		var red = 240;
		var green = getRandomInt(187,150);
		var blue = getRandomInt(198,178);
		var randomColor = buildColor(red, green, blue)
		var styles = [];

		styles.push('outline: ' + randomColor + '3px solid');
		// styles.push('z-index:' + $('.box').length);

		thisBox.append('<div style="' + styles.join('; ') + '" class="box-one"></div>');
	});
});

$(function() {
	$(document).on('click', '.box-two', function(e) {
		var thisBox = $(e.target);
		var red = getRandomInt(250,191);
		var green = getRandomInt(187,130);
		var blue = getRandomInt(200,178);
		var randomColor = buildColor(red, green, blue)
		var styles = [];

		styles.push('background-color: ' + randomColor + '');
		// styles.push('z-index:' + $('.box').length);

		thisBox.append('<div style="' + styles.join('; ') + '" class="box-two"></div>');
	});
});

// $(function() {
// 	$(document).on('click', '.box-one', function(e) {
// 		var thisBox = $(e.target);
// 		var randomColor = 'pink';
// 		var styles = [];

// 		styles.push('background-color: ' + randomColor);
// 		// styles.push('z-index:' + $('.box').length);

// 		thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
// 	});
// });