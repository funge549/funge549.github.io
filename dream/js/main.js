function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

$("html").mousemove(function(e){
    if (e.pageX > 0 && e.pageY > 0 && e.pageX < 700 && e.pageY < 400){
    	console.log("up L")
        $("html").css("cursor", "url(./img/cursorUpL.png), auto");
    } 
    else if (e.pageX > 460 && e.pageY > 0 && e.pageX < 2000 && e.pageY < 400){
    	console.log("up R")
    	$("html").css("cursor", "url(./img/cursorUpR.png), auto");
    }  
    else if (e.pageX > 0 && e.pageY > 410 && e.pageX < 750 && e.pageY < 700){
    	console.log("down L")
    	$("html").css("cursor", "url(./img/cursorDownL.png), auto");
    }  
    else if (e.pageX > 460 && e.pageY > 410 && e.pageX < 2000 && e.pageY < 700){
    	console.log("down R")
    	$("html").css("cursor", "url(./img/cursorDownR.png), auto");
    }   
    else{
        $("html").css("cursor", "url(./img/cursorDown.png), auto");
    }
});

$(function() {
	$(document).on('click touchstart', '.box', function(e) {
		var myWindow = $(window).width();

		var thisBox = $(e.target);

		var red = getRandomInt(198,239);
		var green = getRandomInt(7,88);
		var blue = getRandomInt(27,128);
		var color = buildColor(red, green, blue);

		var red2 = getRandomInt(28,90);
		var green2 = getRandomInt(104,226);
		var blue2 = getRandomInt(145,185);
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
		if ( myWindow < 600) {
		  console.log("myWindow 1");
		  thisBox.append('<div style="' + stylesB.join('; ') + '" class="box"></div>');
		} else if ( myWindow < 900 )  {
		  console.log("myWindow 2");
		  thisBox.append('<div style="' + stylesA.join('; ') + '" class="box"></div>');
		} else {
		  console.log("myWindow 3");
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



