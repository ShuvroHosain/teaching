$(document).ready(function () {
  $("#follow").fadeIn(1000);


  $(window).scroll(function () {
    // alert(this);
     var top = $(window).scrollTop();
     $("#follow").css("top", top + 10);
  })

});




