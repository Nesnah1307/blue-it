function collapseHandler() {
  $('nav').toggleClass('nav-toggle').find('p').toggleClass('hide');
  $('.menu_icon img').toggleClass('img-collapse');
  $('nav a').toggleClass('a-collapse');
  $('.left-arr img').toggleClass('left-arr-collapse');
}

document.querySelector('.collapse').addEventListener('click', collapseHandler);
