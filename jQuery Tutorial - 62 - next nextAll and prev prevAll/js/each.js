
$(document).ready(function () {
  $("#name").click(function(){
    var faild = false;
    $("input[type='text']").each(function(){
      if ($(this).val() == '') {
      faild = true;
     }
    });
    
    if (faild == true) {
      alert('Plese Fill The Form First!')
    } else if (faild == false) {
      alert('Thanks for Filling Out The Form!')
    }
  });
});
