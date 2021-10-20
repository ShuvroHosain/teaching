$(document).ready(function () {
  $('.name, .drag').draggable({ containment: 'document', revert: true });

  $('#drop').droppable({
    hoverClass: 'borderClass', tolerance: 'pointer', accept: '.name', over: function () {
      $('#drop').text('something has been dropping!');
    }, out: function () {
      $('#drop').text('something has been dropped out!');
    }, drop: function () {
      $('#drop').text('something dropped!');
  }  });
});


