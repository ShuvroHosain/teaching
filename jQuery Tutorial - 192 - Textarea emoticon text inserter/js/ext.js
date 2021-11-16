$(document).ready(function () {
  $('.emoticon').click(function () {
    textarea_val = jQuery.trim($('#comment').val());
    emoticon_val = $(this).val();
    if (textarea_val =='') {
      var sp = '';
    } else {
      var sp = ' ';
    }
    $('#comment').focus().val(jQuery.trim(textarea_val + sp + emoticon_val + sp));
    
  });

});




