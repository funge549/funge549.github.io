function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var box = ["one", "two", "three", "four"];
var Random = box[Math.floor(Math.random() * box.length)];
var lastClass;

$(function() {
      $(".button").click( function(){
      	lastClass = box[Random(0,box.length)];
            $(".box").addClass("fill");
           }
      );
});