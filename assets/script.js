 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });


// animated element
$(".animated").appear(function() {
  var element = $(this),
    animation = element.data("animate"),
    animationDelay = element.data("delay");

  if (animationDelay) {
      setTimeout(function() {
          element.addClass(animation + " visible");
          if (element.hasClass("counter")) {
              element.find('.value').countTo();
          }
      }, animationDelay);
  } else {
      element.addClass(animation + " visible");
      if (element.hasClass("counter")) {
          element.find(".value").countTo();
      }
  }
}, {
  accY: -150
});

$(".skill-bar .percentage").appear(function() {
  var element = $(this),
    animation = element.data("value");
  element.animate({
    "width" : animation
  }, 2000);
});

$( '.navbar-wrapper .navbar-nav a' ).on('click',
                    function () { 
            $( '.navbar-wrapper .navbar-nav' ).find( 'li.active' ) 
            .removeClass( 'active' ); 
            $( this ).parent( 'li' ).addClass( 'active' ); 
        });