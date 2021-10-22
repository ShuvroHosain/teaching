$(document).ready(function () {
  $('#save_btn').click(function (){
    $('#dialog').attr('title', 'Saved').text('Your Information Has been saved!').dialog({
      draggable: false, resizable: false, buttons: {
        'OK': function () {
          $(this).dialog('close');
        }
      }, modal: true, position: ['right, top']
    });
  })
});


