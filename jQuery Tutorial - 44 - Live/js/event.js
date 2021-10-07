
$(document).ready(function () {
  $('.dublicate').live({ // jquery live event is no more form v 1.9
    click: function () {
      $(this).after('<input type="button" value="Button" id="dublicate">');
    }
  });
});