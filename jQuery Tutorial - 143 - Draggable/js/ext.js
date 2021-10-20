$(document).ready(function () {
  $('#drag').draggable({
    /* axis: 'y' */
    /* containment: 'window' */
    /* containment: 'document' */
    /* containment: 'parent' */
    /* containment: [0, 0, 200, 200] */
    opacity: 0.6, cursor: 'pointer', grid: [20, 20], revert: true, revertDuration: 3000,
    start: function () {
      $('#dragging').text('You Dragged');
    }, drag: function () {
      $('#dragging').text('Dragging');
    }, stop: function () {
      $('#dragging').text('Dragging Stoped Totally');
    }
});
});


