$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'img/1.jpg';
  } else if ( key == 's' ) {
    img = 'img/2.jpg';
  } else if ( key == 'd' ) {
    img = 'img/3.jpg';
  }  else if ( key == 'f' ) {
    img = 'img/4.jpg';
  } else if ( key == 'g' ) {
    img = 'img/5.jpg';
  } else if ( key == 'h' ) {
    img = 'img/6.jpg';
  }  else if ( key == 'j' ) {
    img = 'img/7.jpg';
  } else if ( key == 'k' ) {
    img = 'img/8.jpg';
  } else if ( key == 'l' ) {
    img = 'img/9.jpg';
  }  else if ( key == ';' ) {
    img = 'img/10.jpg';
  } else if ( key == 'q' ) {
    img = 'img/11.jpg';
  } else if ( key == 'w' ) {
    img = 'img/12.jpg';
  }  else if ( key == 'e' ) {
    img = 'img/13.jpg';
  }else if ( key == 'r' ) {
    img = 'img/14.jpg';
  } else if ( key == 't' ) {
    img = 'img/15.jpg';
  }  else if ( key == 'y' ) {
    img = 'img/16.jpg';
  } else if ( key == 'u' ) {
    img = 'img/17.png';
  } else if ( key == 'i' ) {
    img = 'img/18.jpg';
  }  else if ( key == 'o' ) {
    img = 'img/19.jpg';
  } else if ( key == 'p' ) {
    img = 'img/20.jpg';
  } else if ( key == '[' ) {
    img = 'img/21.jpg';
  }  else if ( key == ']' ) {
    img = 'img/22.png';
  } else if ( key == 'z' ) {
    img = 'img/23.jpg';
  } else if ( key == 'x' ) {
    img = 'img/24.jpg';
  }  else if ( key == 'c' ) {
    img = 'img/25.jpg';
  }  else if ( key == 'v' ) {
    img = 'img/26.jpg';
  } else if ( key == 'b' ) {
    img = 'img/27.jpg';
  } else if ( key == 'n' ) {
    img = 'img/28.jpg';
  }  else if ( key == 'm' ) {
    img = 'img/29.jpg';
  }else if ( key == ',' ) {
    img = 'img/30.jpg';
  } else if ( key == '.' ) {
    img = 'img/31.jpg';
  }  else if ( key == '/' ) {
    img = 'img/32.jpg';
  } else if ( key == '`' ) {
    img = 'img/32.jpg';
  } else if ( key == '1' ) {
    img = 'img/33.jpg';
  }  else if ( key == '2' ) {
    img = 'img/34.jpg';
  } else if ( key == '3' ) {
    img = 'img/35.jpg';
  } else if ( key == '4' ) {
    img = 'img/35.jpg';
  }  else if ( key == '5' ) {
    img = 'img/36.jpg';
  } else if ( key == '6' ) {
    img = 'img/37.jpg';
  } else if ( key == '7' ) {
    img = 'img/38.jpg';
  }  else if ( key == '8' ) {
    img = 'img/39.jpg';
  } else if ( key == '9' ) {
    img = 'img/40.jpg';
  }  else if ( key == '0' ) {
    img = 'img/41.jpg';
  } else if ( key == '-' ) {
    img = 'img/42.jpg';
  } else if ( key == '=' ) {
    img = 'img/43.jpg';
  } 


  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});