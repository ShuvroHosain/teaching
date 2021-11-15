$(document).ready(function () {
  $('#content').load($('.page_item:first').attr('href'));
  $(".page_item").click(function () {
    var href = $(this).attr("href");
    $("#content").hide().load(href).fadeIn('normal');
    return false;
  });
  
});




