$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

$('.redesign__slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

$('.publishing__slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
          $('#move_top_btn').fadeIn();
      } else {
          $('#move_top_btn').fadeOut();
      }
  });
  
  $("#move_top_btn").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 1000);
      return false;
  });
});

AOS.init();