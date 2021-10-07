// $(document).ready(function(){
//    $("#key_messege").keydown(function(){//keydown can't get the current value
//      var key =  $(this).val();
//      $("#messege").html(key); // 
//   });
// })


$(document).ready(function(){
  $("#key_messege").keyup(function(){//keyup get the current value
    var key =  $(this).val();
    $("#messege").html(key); // 
 });
})
