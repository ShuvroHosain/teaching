$(document).ready(function () {
  $("#follow").fadeIn(1000).click(function () {
    $(this).fadeOut(1000);
  });


  $(window).scroll(function () {
     var top = $(window).scrollTop();
     $("#follow").css("top", top + 10);
  })

});




