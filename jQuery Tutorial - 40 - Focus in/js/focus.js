
$(document).ready(function () {
  $('#name').focusin(function () {
    $('#name_feedback').html('Enter Your Full Name!');
  });


  $('#age').focusin(function () {
    $('#age_feedback').html('Enter Your Full Age!');
  });
  
});
