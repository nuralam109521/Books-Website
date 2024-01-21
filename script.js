let navbar = $(".navbar");

$(window).scroll(function () {
  let oTop = $(".section-1").offset().top;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});