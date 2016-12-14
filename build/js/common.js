(function() {
  $(document).ready(function() {
    var heightDetect;
    heightDetect = function() {
      $('header').css('height', $(window).height());
      $('.gradient').css('height', $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
      heightDetect();
    });
  });

  $(window).on('load', function() {
    setTimeout((function() {
      $('.loader_inner').fadeOut();
      $('.loader').delay(400).fadeOut('slow');
    }), 500);
  });

}).call(this);
