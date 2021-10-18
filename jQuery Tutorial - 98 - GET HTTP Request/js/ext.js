$(document).ready(function () {
  $("#btn").click(function () {
    var data = $("#input").val();
    
    $.get("php/reverse.php", { input: data }, function (data) {
      $("#feedback").text(data);
    })
  });
});

