$(document).ready(function () {
  $(".name, .drag, .list").draggable({
    containment: 'document', revert: true,
    start: function () {
      text = $(this).text();
    }
  });

  // $(".drop").droppable({
  //   drop: function () {
  //     alert("hi");
  //   }
  // });
  $( "#drop" ).droppable({
    drop: function(event, ui) {
        $('#drop').append(text + '<br>')
    }, except: '.list, .name'
  });
});



// $(document).ready(function () {
//   $('.name, .drag').draggable({ containment: 'document', revert: true });

//   $('#drop').droppable({
//     hoverClass: 'borderClass', tolerance: 'pointer', accept: '.name', over: function () {
//       $('#drop').text('something has been dropping!');
//     }, out: function () {
//       $('#drop').text('something has been dropped out!');
//     }, drop: function () {
//       $('#drop').text('something dropped!');
//   }  });
// });


