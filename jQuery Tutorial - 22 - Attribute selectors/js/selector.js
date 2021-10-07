$(document).ready(function () {
    var email_default = 'Please Enter Your Email...'

    $("input[type='email']").attr("value", email_default).focus(function(){
        if ($(this).val() == email_default) {
            $(this).attr("value", '');
        }
    }).blur(function(){
        if ($(this).val() == '') {
            $(this).attr("value", email_default);
        }
    });//attribute email selector
});