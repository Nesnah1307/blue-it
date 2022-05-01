$('.menu_icon').click(() => {
  if ($('.menu_icon img').hasClass('rotate')) {
    $('.menu_icon img').removeClass('rotate').addClass('rotateReverse');
    $('.menu ul').slideUp();
    return;
  }
  if ($('.menu_icon img').hasClass('rotateReverse')) {
    $('.menu_icon img').removeClass('rotateReverse').addClass('rotate');
    $('.menu ul').slideDown();
    return;
  }
  $('.menu_icon img').addClass('rotate');
  $('.menu ul').slideDown();
});
