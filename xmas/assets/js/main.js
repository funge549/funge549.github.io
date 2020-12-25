

	  			var body = $('#starshine'),
		    	starry = $('.starry.shine'),
		    	stars =  100,
		    	sparkle = 20;

		    	var createStar = function() {
		    	  starry.clone().removeAttr('id').css({
		    	    top: (Math.random() * 200) + 'vh',
		    	    left: (Math.random() * 100) + '%',
		    	    webkitAnimationDelay: (Math.random() * sparkle) + 's',
		    	    mozAnimationDelay: (Math.random() * sparkle) + 's'
		    	  }).addClass(size).appendTo(body);
		    	};

		    	for(var i = 0; i < stars; i++) {
        		  if(i % 2 === 0) {
        		    size = 'small';
        		  } else if(i % 3 === 0) {
        		    size = 'medium';
        		  }else if (i % 4 === 0) {
        		  	size ='large'
        		  }
        		  createStar();
        		}
        	