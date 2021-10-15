$(document).ready(function () {
  function div_center() {
    var w_height = $(window).height();
    var w_width = $(window).width();
    
    var div_height =  $('#veryCenter').height();
    var div_width = $('#veryCenter').width();

    // alert('height t'+div_height+ ' width' + div_width);

    $('#veryCenter').css('top', (w_height / 2) - (div_height/2)).css('left', (w_width / 2) - (div_width/2));
  }

  div_center();

  $(window).resize(function () {
    div_center();
  })
});
