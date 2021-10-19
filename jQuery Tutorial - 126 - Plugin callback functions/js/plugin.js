(function ($) {
  $.fn.countDown = function (options, callback) {// plugin call with the callback function
    var  currnt_select = this;
    var settings = { 'from': 60 };
  

  if (options) {
    $.extend(settings, options)// if have option then extend setting to option
  }

    current = settings['from'];

    function coundown_func() {
    
      if (current == 0) {
        clearInterval(intervel); // interval clear
        callback.call(this); // dont know
      }
    currnt_select.text(current);
    // alert(currnt_select);
    current = current-1;
  }
  intervel = setInterval(coundown_func, 1000); /// call the function in interval
}
})(jQuery);