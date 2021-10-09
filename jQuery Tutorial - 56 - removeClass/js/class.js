
$(document).ready(function () {
  $('#para').toggle(function(){
    $('#para').addClass("bold highlight");
  }, function(){
    $("#para").removeClass("highlight");
  });
});

