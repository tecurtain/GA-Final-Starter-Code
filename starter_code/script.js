$( document ).ready(function() {
  $(".readmore").click(function () {
     $(this).hide();
     $('.readless').show();
     $('#show-this-on-click').slideToggle();
  });

  $(".readless").click(function () {
     $('#show-this-on-click').slideToggle();
     $('.readmore').show();
     $(this).hide();
  });

  $(".learnmore").click(function () {
     $(this).hide();
     $('#learnmoretext').slideToggle();
  });
});
