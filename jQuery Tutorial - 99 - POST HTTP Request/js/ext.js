$(document).ready(function () {
  $("#btn").click(function () {
    var name = $("#input").val();
    var textarea = $("#textarea").val();
    
    $.post("php/reverse.php", { name: name, textarea:textarea }, function (data) {
      $("#feedback").html(data);
    })
  });
});

