$(document).ready(function () {
  $('input[type=text]').focus(function () {
    current_sel = $(this);
    lenght_val = current_sel.attr('minlength');

     if (current_sel.val().length < lenght_val && lenght_val !=0 && lenght_val > 0 ) {
      current_sel.after('<span> '+lenght_val+ ' carecter required'+'</span>')
    }
  }).keyup(function () {
    if (current_sel.val().length >= lenght_val) {
      current_sel.next().remove();
    }
  }).blur(function () {
    current_sel.next().remove();
  });
});
