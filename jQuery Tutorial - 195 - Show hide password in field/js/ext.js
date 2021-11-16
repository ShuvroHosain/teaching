$(document).ready(function () {
  $('#pass').after('<input type="checkbox" class="check"><span> Show Password</span>');
  $('.check').change(function () {
    if ($(this).is(':checked')) {
      $('span').text('Hide Password');
    } else {
      $('span').text('Show Password');
    }
    prev = $(this).prev();
    val =  prev.val();
    type =  prev.attr('type');
    name =  prev.attr('name');
    id = prev.attr('id');
    text_type = (type == 'password') ? 'text' : 'password';
    prev.remove();
    $(this).before('<input type="' + text_type + '" name="' + name + '" id="' + id + '" value="'+val+'">');
 
  });

});




