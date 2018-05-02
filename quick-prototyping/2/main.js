function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var red = getRandomInt(126,206);
var green = getRandomInt(100,190);
var blue = getRandomInt(221,232);

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

function setColors() {
	$("#time").css({
		color: buildColor(red, green, blue)
	});
}

var backgrounds = ["blue","green","yellow","red","purple"];
    currentBackground = 0;

var changeBackground = function(){
  var newBackground = backgrounds[currentBackground];
  document.body.style.backgroundColor = newBackground;
  currentBackground++;
  if(currentBackground >= backgrounds.length){
    currentBackground = 0;
  }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function updateTime() {
  new Date($.now());
  var date = new Date();
  var time = addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
  $('#time').html(time);
}

$(function() {
  updateTime();
  setInterval(updateTime, 1000);
  setColors();  
  setInterval(changeBackground, 1000);
});