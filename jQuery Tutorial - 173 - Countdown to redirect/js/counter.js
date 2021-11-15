$(document).ready(function () {
  function counter(time , url) {
    var intervel = setInterval(function () {
      $("#counter").text(time);
      time = time - 1;
      if (time == 0) {
        clearInterval(intervel);
        window.location = url;
      }
    }, 1000);
  }

  counter(10, 'https://www.ebay.com/');
});



