// $(":text").focusin(function(){// input background change by click
//    $(this).css("background-color", 'yellow');
// });

// $(":text").blur(function(){ //focous the click
//     $(this).css('background-color', '#fff');
// })


$(":input").focusin(function(){ //focous the click
    $(this).css("border", '2px solid red');
})


$(":input").blur(function(){ //focous the click
    $(this).css('background-color', '#fff');
})