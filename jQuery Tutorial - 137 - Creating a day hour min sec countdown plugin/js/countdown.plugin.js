(function ($) {
  $.fn.countdown = function (options, callback) {
    var setting = { 'date': null };
    if (options) {
      $.extend(setting, options);
    }
    this_sel = $(this);
    function func_exc() {
      eventDate = Date.parse(setting['date']) / 1000;
      currentDate = Math.floor($.now() / 1000);

      if (eventDate <= currentDate) {
        callback.call(this)
        clearInterval(intervel);
      }
      seconds = eventDate - currentDate;
      // alert(seconds);

      days = Math.floor(seconds / (60 * 60 * 24));
      seconds -= days * (60 * 60 * 24);

      hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60;

      minutes = Math.floor(seconds / 1000);
      seconds -= minutes * 60;

      days = (String(days).length !== 2) ? '0' + days : days;
      hours = (String(hours).length !== 2) ? '0' + hours : hours;
      minutes = (String(minutes).length !== 2) ? '0' + minutes : minutes;
      seconds = (String(seconds).length !== 2) ? '0' + seconds : seconds;
      if (!isNaN(eventDate)) {
            this_sel.find('.days').text(days);
            this_sel.find('.hours').text(hours);
            this_sel.find('.mins').text(minutes);
            this_sel.find('.secs').text(seconds);
      }
  
      
    }
    func_exc();

    intervel = setInterval(func_exc, 1000);
  }
})(jQuery);