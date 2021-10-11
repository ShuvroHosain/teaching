
$(document).ready(function () {
  $('#a_button').click(function () {
    $('#hide').hide('slow','linear', function(){
      alert('Your Div Hidden');
    });
})
});
