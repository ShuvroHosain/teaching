$(document).ready(function () {
  min_slider = 1;
  max_siider = 400;
  $("#slider").slider({
    step: 4,
    min: min_slider,
    max: max_siider,
    slide: function(event, ui) {
      $("#slider_value").html("value" + ui.value);
    },
  });
});


