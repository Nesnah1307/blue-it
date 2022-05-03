$('.menu_small').click(() => {
  if ($('.menu_small img').hasClass('rotate')) {
    $('.menu_small img').removeClass('rotate').addClass('rotateReverse');
    $('.menu ul').slideUp();
    return;
  }
  if ($('.menu_small img').hasClass('rotateReverse')) {
    $('.menu_small img').removeClass('rotateReverse').addClass('rotate');
    $('.menu ul').slideDown();
    return;
  }
  $('.menu_small img').addClass('rotate');
  $('.menu ul').slideDown();
});
