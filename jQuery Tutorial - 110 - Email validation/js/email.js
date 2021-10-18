$(document).ready(function () {

  function email_validation(email) {
    $.post("php/email.php", { email: email }, function (data) {
      $("#messege").text(data);
    });
  }






  $("#email").focusin(function () {
    if ($("#email").val() === '') {
      $("#messege").text(" Enter an Email and Go On");
    } else {
      email_validation($("#email").val())
    }
  }).blur(function () {
    $("#messege").text("");
  }).keyup(function () {
    email_validation($("#email").val())
  })
});


