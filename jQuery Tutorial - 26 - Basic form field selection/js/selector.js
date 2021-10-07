$(":text").focusin(function(){//inside click color change
  $(this).css("background-color", 'yellow');
});

$(":text").blur(function(){//outside click color chanage
  $(this).css("background-color", "white");
});
$(':button').click(function(){// click event attribute change.
  $(this).attr("value", 'Please Wait...');
  $(this).attr('disabled', true);
});
