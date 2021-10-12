
$(document).ready(function () {
  $('#toggleSlide').click(function () {
    $('#image').slideToggle(3000);
  })
  
  $('#stop').click(function () {
    $('#image').stop();
  });
});
