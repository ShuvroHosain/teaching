function  font_size(element, size){ //get p by element 
  var current_size = parseInt(element.css("font-size")); // make string to int by parseInt
  if (size ==  'bigger') {
   var font_size =  current_size + 2; //increase font size
  //  var font_size = element.css('font-size', ((current_size + 2)+ 'px'));
  } else if(size = 'smaller'){
    var font_size =  current_size - 2;
  }

  element.css('font-size', font_size + 'px'); //apply the fontsize on the p element with concate px
}


$("#bigger").click(function() {
  font_size($("p"),  'bigger'); //selected p
});

$("#smaller").click(function() {
  font_size($("p"),  'smaller');
});