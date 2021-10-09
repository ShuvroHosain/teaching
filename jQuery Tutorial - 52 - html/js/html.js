
$(document).ready(function () {
  $('#copyButton').click(function() {
   var text = $("#textPara").html();
   console.log(text);
   $('#copy').html(text);

  })
});

