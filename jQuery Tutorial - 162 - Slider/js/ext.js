$(document).ready(function () {
  min_slider = 1;
  max_siider = 400;
  $("#slider").slider({
    min: min_slider,
    max: max_siider,
    // step: 5,
    range: true,
    values: [20, 40],
    orientation: 'vertical',
    slide: function(event, ui) {
      $("#slider_value").html("value One: " + ui.values[0] + "value two: "+ ui.values[1]);
    },
    stop: function (e, ui) {
      alert(ui.value);
    }
  });
});


