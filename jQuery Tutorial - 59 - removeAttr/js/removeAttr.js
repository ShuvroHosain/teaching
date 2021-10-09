
$(document).ready(function () {
  
  $(".agree").change(function(){
     checkedd  =  $(this).attr('value');
     alert(checkedd);
    if (checkedd == 'on') {
      $("#continue").removeAttr('disabled');
    } else if (checkedd == '') {// this function is not working 
      alert(checkedd);
      $("#continue").attr("disabled", 'disabled');
    }
  })
});

