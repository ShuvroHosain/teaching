
$(document).ready(function () {
  $('#sortable, #connect').sortable({containment: 'window', tolerance: 'pointer', cursor: 'pointer', revert: true, opacity: 0.60, connectWith: '#connect'});
  $('.name, .drag').draggable({ containment: 'document', revert: true });

  $('#drop').droppable({
    hoverClass: 'borderClass', tolerance: 'pointer', accept: '.name', over: function () {
      $('#drop').text('something has been dropping!');
    }, out: function () {
      $('#drop').text('something has been dropped out!');
    }, drop: function () {
      $('#drop').text('something dropped!');
    }
  });
  
});


