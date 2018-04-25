$(document).on('click', function(event) {
  event.preventDefault();

  var $clickTarget = $(event.target);

  $clickTarget.css({ transform: 'scale(' + randomNumber(1, 5) + ')' });

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
});

$(function() {
  $('.audio-play-button').click(function() {
    console.log('clicked the play button');

    var audioID = $(this).attr('data-audio-selector');
    var $audio = $(audioID);

    $audio.get(0).play();
  });
});