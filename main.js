$(document).ready(function() {
  $(".jumbotron").fadeIn(2000);
  $('#info').fadeIn(2000);

  $(".navbar").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 50
    });
  });

  $("#myCarousel").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 50
    });
  });

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

})
