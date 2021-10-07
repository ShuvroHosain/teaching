
$(document).ready(function(){
  $('#list').change(function () {
    var option = $(this).val();
    $('#list_feedback').html('You Have Selected: '+option);
  });
})
