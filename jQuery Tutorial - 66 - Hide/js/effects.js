
$(document).ready(function () {
  $('#a_button').click(function () {
    $('#hide').show('slow','linear', function(){
      alert('Your Div Showen');
    });
})
});
