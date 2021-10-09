
$(document).ready(function () {
  $("#agree").change(function(){
     checkedd  =  $(this).attr('value');
    
    if (checkedd == 'on') {
      $("#continue").removeAttr('disabled');
    } else {// this function is not working 
      alert(checkedd);
      $("#continue").addAttr("disabled");
    }
  })
});

