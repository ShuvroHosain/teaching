(function ($) {
  $.fn.hoverText = function (fade) {
    $(this).after('<div id="hoverTitle"></div>');

    $(this).mouseover(function () { 
      title = $(this).attr('title');
      
      $(this).attr('title', '');
      
    }).mousemove(function (e) {
        
        var top = e.clientY + 10;
        var left = e.clientX + 10;
      $('#hoverTitle').css('top', top).css('left', left).text(title);
      
      if (fade == true) {
        $('#hoverTitle').fadeIn('fast');
      } else if(fade == false || fade == undefined){
        $('#hoverTitle').show();
      }
      }).mouseout(function () {
        $(this).attr('title', title);
        $('#hoverTitle').hide();
      });
  }
})(jQuery);