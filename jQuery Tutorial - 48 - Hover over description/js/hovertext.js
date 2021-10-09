
$(document).ready(function () {
  $('.hover').mousemove(function(e) {// e is a object 
    // console.log(e);
    var attributs =  $(this).attr("hoversome");
    $('#hoverdiv').html(attributs).show().css("top", e.clientY+10).css('left', e.clientX+10); //from e object we can get clientY, X and many things
  }).mouseout(function(){
    $('#hoverdiv').hide();
  });
});

