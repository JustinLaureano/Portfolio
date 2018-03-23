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
      $('.projects').css({'margin-top' : '80px'});
  };
});