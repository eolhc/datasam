$(document).ready(function() {
  $('#info').fadeIn(2000)

  $(".navbar").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top - 50
    });
});
})