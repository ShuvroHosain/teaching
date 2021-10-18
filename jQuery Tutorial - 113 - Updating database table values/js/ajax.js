$(document).ready(function () {
  $("#save_btn").click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    $('#save_status').text("Loading...");
    $.post("php/setting.php", { name: name, email:email }, function (data) {
      $('#save_status').text(data);
    })
  })
});


