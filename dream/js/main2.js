function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

$("html").mousemove(function(e){
    if (e.pageX > 0 && e.pageY > 0 && e.pageX < 2000 && e.pageY < 400){
        $("html").css("cursor", "url(./img/cursorA.png), auto");
        console.log("cursor 1 working");
    } 
    else if (e.pageX > 0 && e.pageY > 400 && e.pageX < 2000 && e.pageY < 2000){
    	$("html").css("cursor", "url(./img/cursor.png), auto");
        console.log("cursor 2 working");
    }   
    else{
        $("html").css("cursor", "url(./img/cursorB.png), auto");
        console.log("cursor 3 working");
    }
});

$(function() {
	$(document).on('click touchstart', '.box', function(e) {
		var myWindow = $(window).width();

		var thisBox = $(e.target);

		var red = getRandomInt(244,221);
		var green = getRandomInt(153,88);
		var blue = getRandomInt(168,78);
		var color = buildColor(red, green, blue);

		var red2 = getRandomInt(120,179);
		var green2 = 15;
		var blue2 = getRandomInt(45,134);
		var color2 = buildColor(red2, green2, blue2);

		var red3 = getRandomInt(35,180);
		var green3 = getRandomInt(114,214);
		var blue3 = 247;
		var color3 = buildColor(red3, green3, blue3);

		var colorPicker = [ color, color2, color3  ];
		var randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
		// console.log('randomColor', randomColor);
		var positionsX = [
			'left',
			'right'
		];

		var positionsY = [
			'top',
			'bottom'
		]

		var styles = [];
		styles.push('border: ' + '1px solid white');
		styles.push('background-color: ' + color3 + '');

		styles.push(positionsX[Math.floor(Math.random() * positionsX.length)] + ': 0');
		styles.push(positionsY[Math.floor(Math.random() * positionsY.length)] + ': 0');

		var stylesA = [];
		stylesA.push('background-color: ' + color + '');
		stylesA.push(positionsX[Math.floor(Math.random() * positionsX.length)] + ': 0');
		stylesA.push(positionsY[Math.floor(Math.random() * positionsY.length)] + ': 0');

		var stylesB =[];
		stylesB.push('background-color: ' + color2 + '');
		stylesB.push(positionsX[Math.floor(Math.random() * positionsX.length)] + ': 0');
		stylesB.push(positionsY[Math.floor(Math.random() * positionsY.length)] + ': 0');

		// styles.push('z-index:' + $('.box').length);
		if ( myWindow > 500) {      
		 console.log("change color")
 		 thisBox.append('<div style="' + stylesA.join('; ') + '" class="box"></div>');
		} 
		else if( myWindow > 900 )  {
			thisBox.append('<div style="' + stylesB.join('; ') + '" class="box"></div>');
		}
		else {
 		thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
		}

		// if (e.target.offsetWidth <= 400) {
		// 	thisBox.append('<div style="' + stylesA.join('; ') + '" class="box"></div>');
		// }
		// else {
		// 	thisBox.append('<div style="' + styles.join('; ') + '" class="box"></div>');
		// }
	});
});



