$(function() {
  $('.audio-play-button').click(function() {
    console.log('start music');

    var audioID = $(this).attr('data-audio-selector');
    var $audio = $(audioID);



    console.log('audioID is', audioID);
    console.log('$audio target is', $audio);

    $audio.get(0).play();

	});
})  


