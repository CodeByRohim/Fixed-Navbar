// position fixed

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop(); 

  if (scrollTop >= 100) {
    $('nav').addClass('fixed').removeClass('fixed2');
  } else {
    $('nav').removeClass('fixed').addClass('fixed2');
  }
});



// darkmode on/off
$('.darkModeBtn').click(function () {
  $('body').toggleClass('darkMode');
});


//  preloader remove
$(window).on('load', function(){
  $('#preloader').fadeOut(1500);
});
// BACK TO TOP BUTTON

$("#backToTop").click(function(){
  $("html,body").animate({scrollTop: 0}, 500);
})

//  back to top button show/hide
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 0) {
    $('#backToTop').addClass('backToTop');
  } else {
    $('#backToTop').removeClass('backToTop');
  }
});


