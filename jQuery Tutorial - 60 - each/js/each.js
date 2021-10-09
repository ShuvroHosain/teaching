
$(document).ready(function () {
  $("#name").click(function(){
    var conbined_text = '';
    $("input[type='text']").each(function(){
      conbined_text += $(this).val() + ' ';
    });
    $("#combined").html(conbined_text).css("background-color", 'yellow');
  });
});
