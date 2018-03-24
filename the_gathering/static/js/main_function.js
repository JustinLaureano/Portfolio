$(window).scroll(function() {
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();
  console.log(windowHeight);
  console.log(windowScrollTop);
  
  if (windowHeight <= windowScrollTop) {
      $('.header').css({'position' : 'fixed',
                    'top' : '0px',
                    'left' : '0px',
                    'transform' : 'translate(0px, 0px)'});
    //   $('.logo-sm').css({'transform': 'translate(0px, 75px)'});
      console.log('now');
    //   $('.projects').css({'position' : 'relative',
    //                     'top': '100px'});
  };
});

$(document).ready(function() {
  var navLogo = $('.logo-sm');
  var closeBtn = $('.close-btn');
  var skillsBtn = $('.skills-btn');

  navLogo.click(function() {
    $('.main-nav').css({'z-index' : '999',
                        'opacity' : '1'});
    $('.close-btn').css({'fill-opacity' : '1'});
  });

  closeBtn.click(function() {
    $('.main-nav').css({'z-index' : '-10',
                        'opacity' : '0'});
    $('.close-btn').css({'fill-opacity' : '0'});
  });

  skillsBtn.click(function() {
    $('.main-nav').css({'z-index' : '-10',
                        'opacity' : '0'});
    $('.close-btn').css({'fill-opacity' : '0'});
  });

});