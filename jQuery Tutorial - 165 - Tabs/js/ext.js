$(document).ready(function () {
  $('#tabs').tabs({
    ajaxOptions: {
      error: function(xhr, index, status, anchor) {
        $(anchor.hash).text('could not load page!')
      }
    }, /* event: 'mouseover', */ collapsible: true, cookie:{ expires: 2},
  }).find('.ui-tabs-nav').sortable({axis: 'x'});
});



