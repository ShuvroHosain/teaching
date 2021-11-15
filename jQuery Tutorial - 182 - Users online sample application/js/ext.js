$(document).ready(function () {
  var name = prompt('Please enter your name!');

  $.post('php/user.php',{name:name, action: 'joined'})
  setInterval(function () {
    
  }, 500);

  $(window).unload(function () {
    
  });
});




