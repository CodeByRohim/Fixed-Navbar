$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  
  // Show the navbar when scrolling down past 200px
  if (scrollTop > 200) {
    $('.navbar').addClass('show');
  } else {
    $('.navbar').removeClass('show');
  }
});