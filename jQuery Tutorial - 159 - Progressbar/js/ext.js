$(document).ready(function () {
  $('#upload').click(function () {
    var count = 0;

    var interval = setInterval(function () {
      count = count + 1;
      var progressbar = $('#progressbar').progressbar({ value: count })
        .find(".ui-progressbar-value").css('background-color', ' #2da107').css('text-align', 'center').text(count + '%');
      if (count == 100) {
        clearInterval(interval);
      }
    }, 50);
  });
});


