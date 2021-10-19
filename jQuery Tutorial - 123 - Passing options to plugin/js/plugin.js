(function ($) {
  $.fn.highlight = function (options) {
    var settings = { 'color': null , 'size': null};

    if (options) {
      $.extend(settings, options);
    }

    this.css('background-color', settings["color"] ).css('font-size', settings['size']);
  }
})(jQuery);