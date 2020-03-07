$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight <= 0.03) {
    $(".thanks").css('opacity','1');
    $(".thanks").css('transform','translateX(0)');
  }
});