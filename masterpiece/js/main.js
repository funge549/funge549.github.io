// $(function() {
//   $('.audio-play-button').click(function() {
//     console.log('start music');

//     var audioID = $(this).attr('data-audio-selector');
//     var $audio = $(audioID);


//     console.log('audioID is', audioID);
//     console.log('$audio target is', $audio);

//     $audio.get(0).play();

// 	});

// })  

// $(function() {
//   $('.audio-stop-button').click(function(){
// 	console.log('stop music');
    
//     $audio.pause();

// 	});	
// })    

$(function() {
  // Define a stopAudio function that you can call any time you want stop all audio from playing.
  var stopAudio = function() {
    console.log('stop music');
    var $allAudio = $('audio');

    $allAudio.each(function() {
      var $audio = $(this);

      $audio.get(0).pause();
    });
  };

  $('.audio-play-button').click(function() {
    // Stop audio before playing the next song.
    stopAudio();

    console.log('start music');

    var audioID = $(this).attr('data-audio-selector');
    var $audio = $(audioID);

    console.log('audioID is', audioID);
    console.log('$audio target is', $audio);

    $audio.get(0).play();
  });

  // Stop audio when clicking the stop button.
  $('.audio-stop-button').click(function() {
    stopAudio();
  });
});