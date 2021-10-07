
$(document).ready(function(){
  $('#signup_form').submit(function () {
    var email_value = $('#email').val();
    $('#feedback').html('Thanks! ' + email_value + " has been submitted .");
  });
})
