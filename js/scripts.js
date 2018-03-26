

/* Menu Show Hide*/
$('#nav-icon1').click(function(){
  $(this).toggleClass('open');
});

$("#nav-icon1").click(function(){
  $(".navigation").slideToggle();
});

// Prevent console.log from generating errors in IE for the purposes of the demo
if ( ! window.console ) console = { log: function(){} };

if (window.innerWidth > 768) {
// Scroll Navigation
$('.single-page-nav').singlePageNav({
  offset: $('.single-page-nav').outerHeight(),
  filter: ':not(.external)',
  updateHash: true,
  beforeStart: function() {
    console.log('begin scrolling');
  },
  onComplete: function() {
    console.log('done scrolling');
  }
});
}

/* Loader */
$(window).load(function() {
   $(".bg_full").fadeOut("slow");
})

/* Porfolio image Popup*/

var containerEl = document.querySelector('.container_portfolio');
      var mixer = mixitup(containerEl);
      $(document).ready(function() {
      $('.container_portfolio').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below

          zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function

            // The "opener" function should return the element from which popup will be zoomed in
            // and to which popup will be scaled down
            // By defailt it looks for an image tag:
            opener: function(openerElement) {
              // openerElement is the element on which popup was initialized, in this case its <a> tag
              // you don't need to add "opener" option if this code matches your needs, it's defailt one.
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          },
          gallery:{
          enabled:true
        }
      });
  });


/* Team Client Slider */
$(document).on('ready', function () {
$('.client').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});

// on scorll show menu

$(window).scroll(function(){
  var sticky = $('.navigation'),
      scroll = $(window).scrollTop();

  if (scroll >= 200) sticky.addClass('navbar_common');
  else sticky.removeClass('navbar_common');
});



