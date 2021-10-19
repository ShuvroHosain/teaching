$(document).ready(function ()
{
  $('#show-password').on('change',function () {
  $('#password-3').showPassword($(this).prop('checked'));
  
  });
});


