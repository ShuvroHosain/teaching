
$(document).ready(function () {
  $('#name').focusin(function () {
    $('#name_feedback').html('Enter Your Full Name!');
  });


  $('#name').focusout(function () {
    $('#name_feedback').html('');
  });


  $('#age').focusin(function () {
    $('#age_feedback').html('Enter Your Full Age!');
  });

  
  $('#age').focusout(function () {
    $('#age_feedback').html('');
  });
});
