$(document).ready(function () {
  $("#name,  #places").sortable({
    containment: 'document', opacity: 0.6, cursor: 'pointer', tolerence: 'pointer', revert: true, connectWith: '#name, #places',
    update: function () {
      connect =  $(this).text();
      $("#showUpdate").text(connect);
    }
  });
});


