$(document).ready(function () {
  setInterval(function () {
    var timestamp = jQuery.now();
    $('#someFeedback').text(timestamp);
  },1);
});

