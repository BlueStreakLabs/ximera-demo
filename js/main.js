jQuery(function($) {
  'use strict',

  // 	new CBPFWTabs( document.getElementById( 'tabs-ui' ) );
  //Scroll Menu

  (function menuToggle() {
    var windowWidth = $(window).width();

    if (windowWidth > 767) {
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 405) {
          $('.main-nav').addClass('fixed-menu animated slideInDown');
        } else {
          $('.main-nav').removeClass(
            'fixed-menu animated slideInDown');
        }
      });
    } else {
      $('.main-nav').addClass('fixed-menu animated slideInDown');
    }
  })();

  $(window).resize(function() {
    menuToggle();
  });

  $('.main-nav ul').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 900,
    scrollOffset: 0,
    scrollThreshold: 0.3,
    filter: ':not(.no-scroll)'
  });

});


// Google Map Customization
(function() {

  var map;

  map = new GMaps({
    el: '#gmap',
    lat: 12.8483482,
    lng: 77.674908,
    scrollwheel: false,
    zoom: 16,
    zoomControl: false,
    panControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    overviewMapControl: false,
    clickable: false
  });

  var image = 'images/pin.png';
  map.addMarker({
    lat: 12.8483482,
    lng: 77.674908,
    icon: image,
    animation: google.maps.Animation.DROP,
    verticalAlign: 'bottom',
    horizontalAlign: 'center',
    backgroundColor: '#C34C39',
  });

}());
